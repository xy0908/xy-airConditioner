<template>
  <div class="wrapper">
    <!-- 标题 -->
    <h1 class="title">小羊便携式空调</h1>
    <!-- 提示 -->
    <div class="tips">
      <i :class="tips.icon" @click="index.changeTheme"></i>
      <span>Tips: 为你的夏日带去 清凉 ！</span>
    </div>
    <!-- 空调 -->
    <div class="air-conditioner">
      <!-- 空调机身 -->
      <div class="air-conditioner-fuselage">
        <!-- 空调信息 -->
        <div class="air-conditioner-info">
          <!-- 证明 -->
          <div class="product-certification">
            <ul class="top">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul class="bar">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul class="bottom">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <!-- 价格 -->
          <div class="price">
            <div class="top">节能产品</div>
            <div class="main" title="夏日炎炎">💰</div>
            <div class="footer">
              <span>推广上限价格：XXXX 元</span>
              <span>政府补助金额：XXXX 元</span>
              <span>补助上限价格：XXXX 元</span>
            </div>
          </div>
        </div>
        <!-- 温度 -->
        <div class="temperature">
          <!-- 图标 -->
          <div class="air-conditioner-icon">
            <template v-if="index.state === 1">
              <span>☀️</span>
            </template>
            <template v-else>
              <span style="color: #0081ff">❄</span>
            </template>
          </div>
          <div class="air-conditioner-number">
            <span>{{ index.temperature }}</span>
            <small>°C</small>
          </div>
        </div>
      </div>
      <!-- 空调机盖 -->
      <div class="air-conditioner-machine-cover">
        <template v-if="index.switch === true">
          <span
            class="indicator-light"
            style="background-color: rgb(56, 247, 9)"
          ></span>
        </template>
        <template v-else>
          <span
            class="indicator-light"
            style="background-color: #e0e0e0"
          ></span>
        </template>
      </div>
      <!-- 空调出风口 -->
      <div class="air-conditioner-Airoutlet">
        <span class="wind-line"></span>
        <span class="wind-line"></span>
        <span class="wind-line"></span>
      </div>
    </div>
    <!-- 遥控器 -->
    <div class="remote-control">
      <div class="top">
        <!-- 冷风 -->
        <div
          :style="{ backgroundColor: icon[0].bg }"
          @click="index.openColdWind"
        >
          <i :class="icon[0].icon" :style="{ color: icon[0].color }"></i>
        </div>
        <!-- 开关 -->
        <template v-if="index.switch === true">
          <div
            @click="index.controlSwitch(index.switch)"
            style="background-color: red"
          >
            <i :class="icon[1].icon" :style="{ color: icon[1].color }"></i>
          </div>
        </template>
        <template v-else>
          <div
            @click="index.controlSwitch(index.switch)"
            style="background-color: green"
          >
            <i :class="icon[1].icon" :style="{ color: icon[1].color }"></i>
          </div>
        </template>
        <!-- 热风 -->
        <div
          :style="{ backgroundColor: icon[2].bg }"
          @click="index.openHotWind"
        >
          <i :class="icon[2].icon" :style="{ color: icon[2].color }"></i>
        </div>
      </div>
      <div class="footer">
        <div
          :style="{ backgroundColor: icon[3].bg }"
          @click="index.addTemperature"
        >
          <i :class="icon[3].icon" :style="{ color: icon[3].color }"></i>
        </div>
        <div
          :style="{ backgroundColor: icon[4].bg }"
          @click="index.reduceTemperature"
        >
          <i :class="icon[4].icon" :style="{ color: icon[4].color }"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import tips from "./icon/tips";
import icon from "./icon/icon";
import { useIndexStore } from "./store/index";

const index = useIndexStore();
</script>

<style scoped lang="less">
@keyframes beat {
  0% {
    font-size: 15px;
  }
  100% {
    font-size: 20px;
  }
}
.wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  width: 100%;
  height: 100vh;
  color: v-bind("index.theme.color");
  background-color: v-bind("index.theme.bg");

  // 标题
  .title {
    margin-bottom: 30px;
    font-size: 40px;
    font-weight: 500;
  }

  // 提示
  .tips {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .iconfont {
      color: v-bind("tips.color");
      font-size: 30px;
      cursor: pointer;
    }
    span {
      margin-left: 5px;
      font-size: 20px;
    }
  }

  // 空调
  .air-conditioner {
    width: 600px;

    // 空调机身
    .air-conditioner-fuselage {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      width: 100%;
      height: 100px;
      border-radius: 10px 10px 0 0;
      border: 1px solid rgb(224, 224, 224);
      background: #fff;

      // 信息
      .air-conditioner-info {
        display: flex;
        // 证明
        .product-certification {
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 55px;
          height: 70px;
          background: #2dafff;

          .top {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            height: 15px;

            li {
              width: 4px;
              height: 4px;
              border-radius: 50%;
              background: #fff;
            }
          }
          .bar {
            box-sizing: border-box;
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
            padding: 0 5px;
            width: 80%;
            height: 40px;
            background: #fff;

            li {
              height: 4px;

              &:nth-child(1) {
                width: 35%;
                background: green;
              }
              &:nth-child(2) {
                width: 45%;
                background: lightgreen;
              }
              &:nth-child(3) {
                width: 55%;
                background: rgb(255, 193, 7);
              }
              &:nth-child(4) {
                width: 65%;
                background: orange;
              }
              &:nth-child(5) {
                width: 75%;
                background: red;
              }
            }
          }
          .bottom {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            height: 15px;

            li {
              width: 2px;
              height: 2px;
              border-radius: 50%;
              background: #fff;
            }
          }
        }

        // 价格
        .price {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          width: 47px;
          height: 55px;
          border: 3px solid rgba(76, 175, 80, 0.7);
          border-radius: 3px;
          color: #000;
          font-size: 10px;
          background: #fff;

          .top {
            width: 100%;
            height: 10px;
            white-space: nowrap;
            transform: scale(0.5);
          }

          .main {
            width: 100%;
            height: 30px;
            text-align: center;
            line-height: 30px;
            font-size: 15px;
            cursor: pointer;
            animation: beat 1s linear infinite;
          }

          .footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: -4px;
            width: 100%;
            height: 15px;

            span {
              margin-left: -15px;
              width: 100%;
              height: 33%;
              font-size: 12px;
              white-space: nowrap;
              transform: scale(0.22);
            }
          }
        }
      }

      // 温度
      .temperature {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        width: 100px;
        height: 60px;
        font-family: Digital-7 Mono;
        color: rgb(204, 204, 204);

        .air-conditioner-icon {
          width: 100%;
          height: 25px;
          line-height: 25px;
          font-size: 20px;
        }
        .air-conditioner-number {
          flex-grow: 1;
          width: 100%;
          line-height: 35px;
          font-size: 35px;
        }
      }
    }

    // 空调机盖
    .air-conditioner-machine-cover {
      position: relative;
      width: 99.6%;
      height: 30px;
      border-radius: 0 0 30px 30px;
      border: 1px solid rgb(224, 224, 224);
      border-top: none;
      background-color: #fff;

      .indicator-light {
        position: absolute;
        right: 20px;
        top: 20%;
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }

      &::after {
        content: "🐏";
        position: absolute;
        left: 49%;
        top: -20px;
        font-size: 12px;
      }
    }

    // 空调出风口
    .air-conditioner-Airoutlet {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 120px;
      opacity: 0.3;

      span {
        margin: 30px;
        width: 4px;
        height: 50px;
        background-color: rgb(187, 187, 187);

        &:nth-child(1) {
          transform: rotate(10deg);
        }
        &:nth-child(3) {
          transform: rotate(-10deg);
        }
      }
    }
  }

  //遥控器
  .remote-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;

    div {
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border-radius: 50%;
      cursor: pointer;

      i {
        font-size: 20px;
      }
    }

    .top {
      display: flex;
      justify-content: center;
      width: 100%;

      div {
        margin: 0 15px;
      }
    }

    .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      width: 100%;

      div {
        margin: 15px 0;

        &:hover {
          background-color: rgb(245, 245, 245) !important;
        }
      }
    }
  }
}
</style>
