const router = require('express').Router({ mergeParams: true });
const admin = require('../utils/firebase');
const bcrypt = require('bcrypt');

async function getUsers() {
  const snapshot = await admin.database().ref('/users').once('value');
  return snapshot.val();
}

router.get('/', async (req, res) => {
  try {
    const users = await getUsers();
    const usersWithHashedPassword = Object.values(users).map(user => {
      if (user.password) {
        const hashedPassword = bcrypt.hashSync(user.password, 10);
        user.password = hashedPassword;
      }
      return user;
    });
    res.json(usersWithHashedPassword);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:username', async ({ params: { username } }, res) => {
  try {
    const users = await getUsers();
    const matchedUsers = Object.values(users).filter(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );
    const exactMatch = matchedUsers.find(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );
    if (exactMatch) {
      if (exactMatch.password) {
        exactMatch.password = bcrypt.hashSync(exactMatch.password, 10);
      }
      return res.json([exactMatch]);
    }
    if (matchedUsers.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    const usersWithHashedPassword = matchedUsers.map(user => {
      if (user.password) {
        const hashedPassword = bcrypt.hashSync(user.password, 10);
        user.password = hashedPassword;
      }
      return user;
    });
    res.json(usersWithHashedPassword);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;