const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

$('.input').onclick = function(e) {
  if(!this.classList.contains('focus')) {
    this.classList.add('focus')
    $('.keyboard').classList.add('show')
    e.stopPropagation()
  }
}

document.onclick = function(e) {
  $('.keyboard').classList.remove('show')
  $('.input').classList.remove('focus')
}

$('.keyboard').onclick = function(e) {
  e.stopPropagation()
}

let text = ''

$$('.keyboard .row > span').forEach($key => {

  $key.onmousedown = function() {
    this.classList.add('active')
  }

  $key.onmouseup = function() {
    this.classList.remove('active')
  }
})


$$('.keyboard .row > span').forEach($key => {

  $key.onclick = function(e) {
    let type = $key.dataset.type
    switch(type) {
      case 'char':
        text += $key.innerText
        $('.input').innerText = text
        break;
    }
  }
})
