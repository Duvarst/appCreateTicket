import { createStore } from "vuex";
import mainstore from "./mainstore";

const store = createStore({
  modules: {
    mainstore,
  },
});

export default store;
