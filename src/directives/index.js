import { useIntersectionObserver } from "@vueuse/core";

// 懒加载插件
export const lazyPlugin = {
  install(app) {
    app.directive("img-lazy", {
      mounted(el, binding) {
        // el：指令绑定的那个元素 img
        // binding：binding.value 指令等于号后面绑定的表达式的值 图片url
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // console.log(isIntersecting);
            // 进入了视口区域
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
