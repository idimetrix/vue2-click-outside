import Vue from "vue";
import App from "./App.vue";

import ClickOutside from "./click-outside";

Vue.use(ClickOutside);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
