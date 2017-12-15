import AOS from "aos"
import {person,Deluminator} from "./lib"

AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

var deluminator = new Deluminator("white")
console.log(deluminator)
deluminator.changecolor("black")
console.log(deluminator)
