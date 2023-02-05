import { defineStore, acceptHMRUpdate } from "pinia";
import playerAudio from "../utils/playerAudio";

const playerStartpAudio = new playerAudio(new Audio("../../public/audio/di.mp3"));
const wind = new playerAudio(new Audio("../../public/audio/air-extractor-fan.mp3"))
export const useIndexStore = defineStore({
  id: "index",
  state: () => ({
    /**
     * @param {boolean} switch - 空调开关 
     *  ture为开
     *  false为关
    */
    switch: false,
    /**
     * @param {number} state - 状态管理 
     *  1为热风
     *  2为冷风 
     *  默认为1
    */
    state: 1,
    /**
     * @param {number} temperature - 温度
    */
    temperature: 22,
    // 控制 主题  1:黑暗模式  0: 光明模式
    theme: {
      color: "#fff",
      bg: "#000",
      theme: "1"
    }
  }),
  actions: {
    // 空调开关
    controlSwitch(value: boolean) {
      this.switch = !value
      playerStartpAudio.playerStartpAudio()

      if (this.switch) {
        wind.playerStartpAudio()
      } else {
        wind.pauseAudio()
      }

    },
    // 打开热风
    openHotWind() {
      this.state = 1
      playerStartpAudio.playerStartpAudio()
    },
    // 打开冷风
    openColdWind() {
      this.state = 2
      playerStartpAudio.playerStartpAudio()
    },
    // 温度 +1
    addTemperature() {
      if (this.temperature < 30) {
        this.temperature++
      }
      playerStartpAudio.playerStartpAudio()
    },
    // 温度 -1
    reduceTemperature() {
      if (this.temperature > 16) {
        this.temperature--
      }
      playerStartpAudio.playerStartpAudio()
    },
    // 改变主题
    changeTheme() {
      if (this.theme.theme === "1") {
        this.theme = {
          color: "#000",
          bg: "#fff",
          theme: "2"
        }
      } else if (this.theme.theme === "2") {
        this.theme = {
          color: "#fff",
          bg: "#000",
          theme: "1"
        }
      }
    }
  }
});
