//全局化注册
import ImageView from "./ImageView/index.vue";
import Sku from "./XtxSku/index.vue";
export const componentPlugin = {
  install(app) {
    // app.component('组件名字'，组件配置对象)
    app.component("XtxImageView", ImageView);
    app.component("XtxSku", Sku);
  },
};
