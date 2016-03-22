function randomRange (low,high) {
 return Math.floor(Math.random()*(high-low))+low;
}

function createEl(elParent, elName, elText) {
  var el = document.createElement(elName);
  el.textContent = elText;
  elParent.appendChild(el);
}


exports.randomRange = randomRange;
