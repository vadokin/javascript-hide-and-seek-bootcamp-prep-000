function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node').querySelectorAll('div')[3]
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list li')
  for (let i = 0, len = lis.length; i < len; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n 
  }
}
