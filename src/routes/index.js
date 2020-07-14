const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('docs', '/', async (ctx) => {
  await ctx.render('index', {
    layout: false,
  });
});

module.exports = router;
