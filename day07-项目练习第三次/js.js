let id = 0
class Keyboard {
  constructor($target) {
    this.text = ''
    this.$target = $target
    this.id = ++id
    this.init()
    this.bind()
  }


  bind() {

    this.$target.onclick = e =>{
      this.$root.classList.add('show')
      this.$target.classList.add('focus')
      e.stopPropagation()
    }


    document.addEventListener('click', () => {
      if(this.$target.classList.contains('focus')) {
        console.log('hide keyboard')
        this.$root.classList.remove('show')
        this.$target.classList.remove('focus')
      } 
    }) 

    this.$root.onclick = function(e) {
      e.stopPropagation()
    }

    document.addEventListener('mouseup', () => {
      this.$root.querySelectorAll('.row > span').forEach($key => $key.classList.remove('active'))
    })

    this.$root.querySelectorAll('.row > span').forEach($key => {
      $key.onmousedown = function() {
        this.classList.add('active')
      }
      $key.ontouchstart = function() {
        this.classList.add('active')
      }
      $key.ontouchend = function() {
        this.classList.remove('active')
      }
      $key.onclick = () => {
        //navigator.vibrate(200)
        let type = $key.dataset.type
        switch(type) {
          case 'char':
            this.text += $key.innerText
            this.$target.innerText = this.text
            break;
          case 'uppercase':
            this.$root.querySelectorAll('.page').forEach($page => $page.style.display = 'none')
            this.$root.querySelector('.page-uppercase').style.display = 'block'
            break;
          case 'lowercase':
            this.$root.querySelectorAll('.page').forEach($page => $page.style.display = 'none')
            this.$root.querySelector('.page-lowercase').style.display = 'block'
            break;
          case 'backspace':
            this.text = this.text.substr(0, this.text.length-1)
            this.$target.innerText = this.text
            break;
          case 'space':
            this.text += ' '
            this.$target.innerText = this.text
            break;
          case 'return':
            this.text += '\n'
            this.$target.innerText = this.text
            break;
          case 'number':
            this.$root.querySelectorAll('.page').forEach($page => $page.style.display = 'none')
            this.$root.querySelector('.page-number').style.display = 'block'
            break;
          case 'symbol':
            this.$root.querySelectorAll('.page').forEach($page => $page.style.display = 'none')
            this.$root.querySelector('.page-symbol').style.display = 'block'

        }

      }
    })



  }

  init() {
    let template = `
<div class="page page-lowercase">
<div class="row">
<span data-type="char" class="col-2">q</span>
<span data-type="char" class="col-2">w</span>
<span data-type="char" class="col-2">e</span>
<span data-type="char" class="col-2">r</span>
<span data-type="char" class="col-2">t</span>
<span data-type="char" class="col-2">y</span>
<span data-type="char" class="col-2">u</span>
<span data-type="char" class="col-2">i</span>
<span data-type="char" class="col-2">o</span>
<span data-type="char" class="col-2">p</span>
</div>
<div class="row">
<span data-type="char" class="col-2 offset-1">a</span>
<span data-type="char" class="col-2">s</span>
<span data-type="char" class="col-2">d</span>
<span data-type="char" class="col-2">f</span>
<span data-type="char" class="col-2">g</span>
<span data-type="char" class="col-2">h</span>
<span data-type="char" class="col-2">j</span>
<span data-type="char" class="col-2">k</span>
<span data-type="char" class="col-2">l</span>
</div>
<div class="row">
<span data-type="uppercase" class="col-3"><i class="iconfont icon-caps"></i></span>
<span data-type="char" class="col-2">z</span>
<span data-type="char" class="col-2">x</span>
<span data-type="char" class="col-2">c</span>
<span data-type="char" class="col-2">v</span>
<span data-type="char" class="col-2">b</span>
<span data-type="char" class="col-2">n</span>
<span data-type="char" class="col-2">m</span>
<span data-type="backspace" class="col-3 "><i class="iconfont icon-backspace"></i></span>
</div>
<div class="row">
<span data-type="number" class="col-4">123</span>
<span data-type="space" class="col-12">space</span>
<span data-type="return" class="col-4">return</span>
</div>
</div>
<div class="page page-number">
<div class="row">
<span data-type="char" class="col-2">1</span>
<span data-type="char" class="col-2">2</span>
<span data-type="char" class="col-2">3</span>
<span data-type="char" class="col-2">4</span>
<span data-type="char" class="col-2">5</span>
<span data-type="char" class="col-2">6</span>
<span data-type="char" class="col-2">7</span>
<span data-type="char" class="col-2">8</span>
<span data-type="char" class="col-2">9</span>
<span data-type="char" class="col-2">0</span>
</div>
<div class="row">
<span data-type="char" class="col-2 offset-1">-</span>
<span data-type="char" class="col-2">/</span>
<span data-type="char" class="col-2">:</span>
<span data-type="char" class="col-2">;</span>
<span data-type="char" class="col-2">(</span>
<span data-type="char" class="col-2">)</span>
<span data-type="char" class="col-2">$</span>
<span data-type="char" class="col-2">&</span>
<span data-type="char" class="col-2">@</span>
</div>
<div class="row">
<span data-type="symbol" class="col-3">#+=</span>
<span data-type="char" class="col-2">.</span>
<span data-type="char" class="col-2">,</span>
<span data-type="char" class="col-2">?</span>
<span data-type="char" class="col-2">!</span>
<span data-type="char" class="col-2">'</span>
<span data-type="char" class="col-2">"</span>
<span data-type="char" class="col-2">\`</span>
<span data-type="backspace" class="col-3"><i class="iconfont icon-backspace"></i></span>
</div>
<div class="row">
<span data-type="lowercase" class="col-4">ABC</span>
<span data-type="space" class="col-12">space</span>
<span data-type="return" class="col-4">return</span>
</div>
</div>
<div class="page page-symbol">
<div class="row">
<span data-type="char" class="col-2">[</span>
<span data-type="char" class="col-2">]</span>
<span data-type="char" class="col-2">{</span>
<span data-type="char" class="col-2">}</span>
<span data-type="char" class="col-2">#</span>
<span data-type="char" class="col-2">%</span>
<span data-type="char" class="col-2">^</span>
<span data-type="char" class="col-2">*</span>
<span data-type="char" class="col-2">+</span>
<span data-type="char" class="col-2">=</span>
</div>
<div class="row">
<span data-type="char" class="col-2 offset-1">_</span>
<span data-type="char" class="col-2">\</span>
<span data-type="char" class="col-2">|</span>
<span data-type="char" class="col-2">~</span>
<span data-type="char" class="col-2"><</span>
<span data-type="char" class="col-2">></span>
<span data-type="char" class="col-2">¥</span>
<span data-type="char" class="col-2">€</span>
<span data-type="char" class="col-2">￡</span>
</div>
<div class="row">
<span data-type="number" class="col-3">123</span>
<span data-type="char" class="col-2">.</span>
<span data-type="char" class="col-2">,</span>
<span data-type="char" class="col-2">?</span>
<span data-type="char" class="col-2">!</span>
<span data-type="char" class="col-2">'</span>
<span data-type="char" class="col-2">"</span>
<span data-type="char" class="col-2">\`</span>
<span data-type="backspace" class="col-3"><i class="iconfont icon-backspace"></i></span>
</div>
<div class="row">
<span data-type="lowercase" class="col-4">ABC</span>
<span data-type="space" class="col-12">space</span>
<span data-type="return" class="col-4">return</span>
</div>
</div>
<div class="page page-uppercase">
<div class="row">
<span data-type="char" class="col-2">Q</span>
<span data-type="char" class="col-2">W</span>
<span data-type="char" class="col-2">E</span>
<span data-type="char" class="col-2">R</span>
<span data-type="char" class="col-2">T</span>
<span data-type="char" class="col-2">Y</span>
<span data-type="char" class="col-2">U</span>
<span data-type="char" class="col-2">I</span>
<span data-type="char" class="col-2">O</span>
<span data-type="char" class="col-2">P</span>
</div>
<div class="row">
<span data-type="char" class="col-2 offset-1">A</span>
<span data-type="char" class="col-2">S</span>
<span data-type="char" class="col-2">D</span>
<span data-type="char" class="col-2">F</span>
<span data-type="char" class="col-2">G</span>
<span data-type="char" class="col-2">H</span>
<span data-type="char" class="col-2">J</span>
<span data-type="char" class="col-2">K</span>
<span data-type="char" class="col-2">L</span>
</div>
<div class="row">
<span data-type="lowercase" class="col-3"><i class="iconfont icon-caps"></i></span>
<span data-type="char" class="col-2">Z</span>
<span data-type="char" class="col-2">X</span>
<span data-type="char" class="col-2">C</span>
<span data-type="char" class="col-2">V</span>
<span data-type="char" class="col-2">B</span>
<span data-type="char" class="col-2">N</span>
<span data-type="char" class="col-2">M</span>
<span data-type="backspace" class="col-3"><i class="iconfont icon-backspace"></i></span>
</div>
<div class="row">
<span data-type="number" class="col-4">123</span>
<span data-type="space" class="col-12">space</span>
<span data-type="return" class="col-4">return</span>
</div>
</div> 

`
    let $root = document.createElement('div')
    $root.innerHTML = template
    this.$root = $root
    console.log(this.$root)
    $root.classList.add('keyboard')
    document.body.appendChild($root)
  }
}


document.querySelectorAll('.input').forEach($target => {
  new Keyboard($target)
})
