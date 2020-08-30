
let nodeOptions = ["H1", "H2", "H3", "H4", "H5", "P", "LI", "A"]

const sleeveTheText = element => {
  let $el = document.querySelectorAll(element);
  $el.forEach(($div, index) => {
    let $childDivs = $div.children;
    for(let i = 0; i < $childDivs.length; i++) {
      let node_name = $childDivs[i].nodeName;
      if(nodeOptions.includes(node_name)) {
        wrapSleeve($childDivs[i], $childDivs[i].innerText);
      }
    }
  })
}

const wrapSleeve = ($element, text) => {
  let currentText = text;
  let newString = '<span class="sleeve-text">';
  currentText.split(" ").forEach((string, index) => {
    newString += `<span class="sleeve-text__item"><span>${string}&nbsp;</span></span>`
  })
  newString += " </span>";
  $element.innerHTML = newString
}


export default sleeveTheText;