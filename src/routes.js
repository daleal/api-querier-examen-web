const KoaRouter = require('koa-router');

const index = require('./routes/index');
const staticFiles = require('./routes/static');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/static', staticFiles.routes());

module.exports = router;
