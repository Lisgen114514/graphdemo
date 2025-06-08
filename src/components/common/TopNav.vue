<template>
  <div class="top-nav">
    <div class="header-box">
      <div class="auth">
        <div class="left">
          <router-link to="/login" class="login-link">登陆账号</router-link>
          <span>{{ currentDate }}</span>
        </div>
        <div class="text">
          {{ currentTime }}
        </div>
      </div>
      <div class="head-middle">
        医疗诊断系统
      </div>
      <div class="right">
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';
import dayjs from 'dayjs';

const currentDate = ref(dayjs().format('YYYY.M.D'));
const currentTime = ref(dayjs().format('HH:mm:ss'));

const updateTime = () => {
  currentTime.value = dayjs().format('HH:mm:ss');
};

onMounted(() => {
  // Update time every second
  const intervalId = setInterval(updateTime, 1000);

  // Clean up the interval when the component is unmounted
  onUnmounted(() => {
    clearInterval(intervalId);
  });
});
</script>

<style scoped lang="scss">
.top-nav {
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/images/top-nav.jpg');
  background-size: 100% 85px; /* 只进行宽度缩放，保持原始高度 */
  background-repeat: no-repeat;

  .header-box {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10%;

    .auth {
      width: 300px; /* Increased width for better layout */
      display: flex;
      color: #fff;

      .left {
        display: flex;
        flex-direction: column;
        height: 50px;
        justify-content: space-between;
      }

      .text {
        margin-left: 50px;
        height: 50px;
        display: flex;
        align-items: center; /* Center align text */
        font-size: 18px; /* Adjusted font size */
      }
    }

    .head-middle {
      width: calc(100% - 600px);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      color: #fff;
      font-size: 24px;
      letter-spacing: 2px;
      font-weight: bold;
    }

    .right {
      width: 300px; /* Increased width for better layout */
      display: flex;
      color: #fff;
    }

    .login-link,
    .register-link {
      color: #fff;
      text-decoration: none;
      margin-bottom: 5px;
      font-size: 16px;

      &:hover {
        text-decoration: underline; /* Add hover effect */
      }
    }
  }
}
</style>

