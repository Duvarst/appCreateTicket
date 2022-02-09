import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(router);

store.dispatch("mainstore/reqGetData").then(() => {
  app.mount("#app");
});
