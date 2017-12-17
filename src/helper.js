export const getElements = function(attrib) {
  return document.querySelectorAll('[' + attrib + ']');
}

export const getCoords = function(elem) { // crossbrowser version
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var clientHeight = docEl.clientHeight || body.clientHeight || 0;
  var clientWidth = docEl.clientWidth || body.clientWidth || 0;
  // console.log(box)
  var top = box.top + scrollTop - clientTop + (box.height / 2);
  var left = box.left + scrollLeft - clientLeft + (box.width / 2);

  return {box:box, center:{x: Math.round(top), y: Math.round(left)}};
}


export const loadCoordinatesOfElements=function(elements) {
  var coordinates = _.map(elements, function(item) {
    return (getCoords(item))
  })
  return coordinates
}
