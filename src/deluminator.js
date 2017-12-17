import Chroma from "chroma-js"
import _ from "lodash"
import {loadCoordinatesOfElements,getElements} from "./helper"

export default class Deluminator {
  constructor(lastColor) {
    if(lastColor==null){
      this.lastColor = lastColor
    }else{
      this.lastColor="rgb(255, 255, 255)"
    }
    this.body = document.body
    //binding functions
    this.requestFrameCallBack = this.requestFrameCallBack.bind(this)
    this.windowResizeHandler = this.windowResizeHandler.bind(this)
    //watch for events
    window.onresize = this.windowResizeHandler
    //create local objects
    this.deluminators = getElements("nn_deluminator_color")
    //

    this.runSetup()

  }


  windowResizeHandler(event) {
    this.runSetup()
  }


  runSetup(){
    var colors = _.map(this.deluminators, function(item) {
      return (item.getAttribute("nn_deluminator_color"))
    })
    this.elementsBoxes = loadCoordinatesOfElements(this.deluminators)
    var domain = _.map(this.elementsBoxes, function(item) {
      return (item.center.x)
    })
    var lst = this.elementsBoxes[this.elementsBoxes.length-1].center.x-window.innerHeight/2
    domain[domain.length-1] = lst
    this.scale = Chroma.scale(colors).domain(domain)
    window.requestAnimationFrame(this.requestFrameCallBack);

}

  requestFrameCallBack() {
    var current = this.getCurrentRoll(this.elementsBoxes[0])
    var kolor = this.scale(current).hex()
    this.changecolor(kolor)
  }

  getCurrentRoll(el){
    var currentRoll = 0
    var body = document.body;
    var scrollTop = window.pageYOffset || el.scrollTop || body.scrollTop;
    currentRoll =  scrollTop + el.center.x
    return currentRoll
  }
  changecolor(hexColor) {
    this.body.style.backgroundColor = hexColor
    window.requestAnimationFrame(this.requestFrameCallBack);
  }

}
