import "@/styles/common.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
// 懒加载指令
import { lazyPlugin } from "./directives";
// 引入全局组件
import { componentPlugin } from "@/components";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(lazyPlugin);
app.use(componentPlugin);
//持久化插件
pinia.use(piniaPluginPersistedstate);

app.mount("#app");
