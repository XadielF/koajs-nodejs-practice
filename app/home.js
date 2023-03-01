module.exports = (router, productLoader) => {
  router.get("/", async (ctx) => {
    const product = await productLoader.all();
    ctx.state.model = {
      title: "hey there,",
      products: products,
    };
    await ctx.render("home");
  });
};
