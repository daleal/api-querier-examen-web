const KoaRouter = require('koa-router');

const fs = require('fs');

const router = new KoaRouter();

router.get('static.docs', '/openapi.json', async (ctx) => {
  const rawContent = fs.readFileSync('docs/openapi.json');
  const schema = JSON.parse(rawContent);
  ctx.body = schema;
});

module.exports = router;
