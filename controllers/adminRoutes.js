const router = require('express').Router();
const session = require('express-session');
const { Post, Comment, User } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('single-post', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// render login page and status
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    req.session.save((err) => {
      if (err) {
        return err;
      }
    });
    return;
  }

  res.render('login');
});

router.get('/createaccount', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('createaccount');
});

module.exports = router;
