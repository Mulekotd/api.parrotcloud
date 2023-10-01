const router = require('express').Router({ mergeParams: true });
const stringSimilarity = require('string-similarity');
const admin = require('../utils/firebase');

// Middleware para consulta do banco de dados de jogos
const getGames = async (req, res, next) => {
  try {
    const snapshot = await admin.database().ref('/games').once('value');
    const games = snapshot.val();
    if (!games) {
      return res.status(404).json({ error: 'No games found' });
    }
    req.games = games;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

router.get('/', getGames, (req, res) => {
  res.json(req.games);
});

router.get('/:name', getGames, (req, res) => {
  const gameName = decodeURIComponent(req.params.name).toLowerCase();
  if (typeof gameName !== 'string' || gameName.trim().length === 0) {
    return res.status(400).json({ error: 'Invalid game name' });
  }

  const { games } = req;

  const matchedGames = Object.values(games).filter(game => {
    const similarity = stringSimilarity.compareTwoStrings(game.name.toLowerCase(), gameName);
    return similarity > 0.8;
  }).sort((a, b) => a.name.localeCompare(b.name));

  const exactMatch = Object.values(games).find(game => game.name.toLowerCase() === gameName);

  if (exactMatch) {
    return res.json([exactMatch]);
  }

  const page = req.query.page ? parseInt(req.query.page) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = matchedGames.slice(startIndex, endIndex);

  if (results.length === 0) {
    return res.status(404).json({ error: 'Game not found' });
  }

  res.json({
    totalResults: matchedGames.length,
    totalPages: Math.ceil(matchedGames.length / limit),
    currentPage: page,
    games: results
  });
});

module.exports = router;