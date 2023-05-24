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
        if (to.hash) {
          window.scrollTo(0, document.querySelector(to.hash).offsetTop);
        }
        return;
      }
      let id = to.path.replace("/", "");
      next(from.path + "#" + id);
      if (id) {
        window.scrollTo(0, document.querySelector("#" + id).offsetTop);
      }
    });
  },
};

export default anchorFixer;
