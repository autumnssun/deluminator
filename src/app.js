import AOS from "aos"
import Deluminator from "./deluminator"

AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});

var deluminator = new Deluminator()
console.log(deluminator)
