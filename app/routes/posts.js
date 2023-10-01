const router = require('express').Router({ mergeParams: true });
const admin = require('../utils/firebase');

router.get('/', async (req, res) => {
  try {
    const postsRef = admin.database().ref('/posts');
    const snapshot = await postsRef.once('value');
    
    if (!snapshot.exists()) {
      return res.status(404).json({ error: 'No posts found' });
    }

    const posts = snapshot.val();
    
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;