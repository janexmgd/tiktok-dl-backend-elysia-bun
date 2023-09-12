import app from './src/main.js';
import { success, failed } from './src/helper/index.js';
import parsers from './src/helper/parser.js';
const PORT = process.env.PORT;
app.get('/', (ctx) => {
  try {
    ctx.set.status = 200;
    return success(200, {
      status: 'ok',
      message: '🦊 Elysia app by janexmgd',
    });
  } catch (e) {
    ctx.set.status = 500;
    return failed(500, {
      status: 'err',
      message: 'err',
    });
  }
});
app.post('/ttdl/single', async (ctx) => {
  try {
    if (ctx.body?.url == undefined || ctx.body?.url == null) {
      return failed(400, {
        status: 'err',
        message: 'url cannot be null',
      });
    }
    const { url } = ctx.body;
    const data = await parsers(url);
    // console.log(data);
    ctx.set.status = 200;
    return success(200, {
      status: 'success',
      message: 'success get data',
      data: data,
    });
  } catch (e) {
    ctx.set.status = 500;
    return failed(500, {
      status: 'err',
      message: e.message || 'error',
    });
  }
});
app.all('*', (ctx) => {
  ctx.set.status = 404;
  return failed(404, {
    status: 'not found',
    message: 'not found',
  });
});
app.listen(PORT || 3000, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});
