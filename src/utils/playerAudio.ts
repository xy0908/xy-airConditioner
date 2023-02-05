export default class playerAudio {
    element: Element

    constructor(ele: Element) {
        this.element = ele
    }
    playerStartpAudio() {
        this.element.play()
    }
    pauseAudio() {
        this.element.pause();
    }
}