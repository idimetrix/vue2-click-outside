const HANDLERS_PROPERTY = "__click-outside__";

function processArguments(value) {
  const isFn = typeof value === "function";
  if (!isFn && typeof value !== "object") {
    throw new Error(
      "vue2-click-outside: Binding value must be a function or an object"
    );
  }

  return {
    handler: isFn ? value : value.handler,
    middleware: value.middleware || ((item) => item),
    events: value.events || ["touchstart", "click"],
    active: !(value.active === false),
  };
}

function bind(el, { value }) {
  const { events, handler, middleware, active } = processArguments(value);

  if (active) {
    el[HANDLERS_PROPERTY] = events.map((event) => ({
      event,
      handler: (e) => {
        const isClickOutside = e.target !== el && !el.contains(e.target);

        if (isClickOutside && middleware(e)) {
          handler(e);
        }
      },
    }));

    el[HANDLERS_PROPERTY].map(({ event, handler }) =>
      document.addEventListener(event, handler, false)
    );
  }
}

function unbind(el) {
  (el[HANDLERS_PROPERTY] || []).map(({ event, handler }) =>
    document.removeEventListener(event, handler, false)
  );

  delete el[HANDLERS_PROPERTY];
}

function update(el, { value, oldValue }) {
  if (JSON.stringify(value) !== JSON.stringify(oldValue)) {
    unbind(el);
    bind(el, { value });
  }
}

const directive = {
  bind,
  update,
  unbind,
};

const plugin = {
  install: function (Vue, options = {}) {
    const { name } = { name: "click-outside", ...options };

    Vue.directive(name, directive);
  },
  directive,
};

export default plugin;

if (typeof window !== `undefined` && window.Vue) {
  window.Vue.use(plugin);
}
