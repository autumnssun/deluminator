export const person = {
  name:"nano",
  location:"brisbane",
  age:20
}

export class Deluminator{
  constructor(colors){
    this.colors = colors;
    this.elementsList = this.getElements("nn_data")
    this.body=document.body
  }

  getElements(attrib) {
    return document.querySelectorAll('[' + attrib + ']');
  }

  changecolor(){
    this.body.style.backgroundColor="rgb(136, 200, 37)"
  }
}
