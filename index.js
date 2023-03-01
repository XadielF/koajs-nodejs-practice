const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const serve = require("koa-static");
const path = require("path");
const config = require("config");

app.use(
  views(
    path.join(__dirname, config.get("views.path")),
    config.get("views.options")
  )
);

app.use(serve(config.get("static.path")));

app.use(async (ctx, next) => {
  ctx.state.settings = config.get("settings");
  ctx.state.urlWithoutQuery = ctx.origin + ctx.path;
  await next();
});

const port = process.env.PORT || config.get("server.port");
app.listen(port, () => {
  console.log('Applicaiton started - listening on port ${port}');
});
