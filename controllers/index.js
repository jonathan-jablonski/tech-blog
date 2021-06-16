const router = require('express').Router();
const apiRoutes = require('./api');
const adminRoutes = require('./adminRoutes');
const blogRoutes = require('./blog-routes');

router.use('/api', apiRoutes);
router.use('/', adminRoutes);
router.use('/blog', blogRoutes);

module.exports = router;
