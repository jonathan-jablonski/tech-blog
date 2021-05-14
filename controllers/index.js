const router = require('express').Router();
const apiRoutes = require('./api');
// const blogRoutes = require('./blog-routes');

router.use('/api', apiRoutes);
// router.use('/api/posts', blogRoutes);

module.exports = router;
