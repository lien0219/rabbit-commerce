import dayjs from "dayjs";
import { computed, ref, onUnmounted } from "vue";

//倒计时函数
export const useCountDown = () => {
  let timer = null;
  const time = ref(0);

  // 格式化时间
  const formatTime = computed(() => dayjs.unix(time.value).format("mm分ss秒"));
  // 开启倒计时
  const start = (currentTime) => {
    time.value = currentTime;
    timer = setInterval(() => {
      time.value--;
    }, 1000);
  };
  // 组件销毁清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer);
  });
  return {
    formatTime,
    start,
  };
};
