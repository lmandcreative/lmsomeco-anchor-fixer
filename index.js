const anchorFixer = {
  install(Vue, overrideOptions) {
    let options = {
      router: null,
      ...overrideOptions,
    };

    if (!options.router) {
      throw new Error("router option is required");
    }

    let router = options.router;
    router.beforeEach((to, from, next) => {
      if (router.hasRoute(to.name)) {
        next();
        return;
      }
      let id = to.path.replace("/", "");
      next(from.path + "#" + id);
    });
  },
};

export default anchorFixer;
