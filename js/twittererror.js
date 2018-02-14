var elems = document.getElementsByClassName("twitter-timeline");
if (elems.length >= 1) {
  var br        = document.createElement("br");
  var span      = document.createElement("span");
  var textnode  = document.createTextNode("private mode of your browser is blocking the Twitter Timeline from loading.");
  span.appendChild(textnode);
  elems[0].parentNode.insertBefore(span, elems[0].nextsibling);
  elems[0].parentNode.insertBefore(br, elems[0].nextsibling);
}
