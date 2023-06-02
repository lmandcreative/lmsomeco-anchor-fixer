const anchorFixer = {
  install(Vue, overrideOptions) {
    let options = {
      router: null,
      debug: false,
      ...overrideOptions,
    };

    if (window.anchordebug) {
      options.debug = true;
    }

    if (!options.router) {
      throw new Error("router option is required");
    }

    let router = options.router;
    if (options.debug) {
      console.group("Anchor Fixer");
    }
    router.beforeEach((to, from, next) => {
      if (options.debug) {
        console.log("beforeEach", to, from);
      }
      if (router.hasRoute(to.name)) {
        if (options.debug) {
          console.log("hasRoute", to.name);
        }
        next();
        if (to.hash) {
          if (options.debug) {
            console.log("hasHash", to.hash);
            console.log(document.querySelector(to.hash).offsetTop);
          }
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
    if (options.debug) {
      console.groupEnd();
    }
  },
};

export default anchorFixer;
