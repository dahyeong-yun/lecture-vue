import View from './View.js'

/**
 * @description form에서 이루어지는 것들에 대한 처리
 */

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
  this.init(el)
  this.inputEl = el.querySelector('[type=text]')
  this.resetEl = el.querySelector('[type=reset]')
  this.showResetBtn(false)
  this.bindEvents() 
  return this
}

FormView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? 'block' : 'none'
}


/**
 * @description 이벤트 바인딩 역할
 * 바인딩은 계속 추가 될 수 있으므로 아마 이벤트 자체와 분리한 것 같다.
 * setup() 함수의 추상화 수준을 동일하게 가져가는 효과도 얻을 수 있다. 
 */
FormView.bindEvents = function() {
  this.on('submit', e => e.preventDefault())
  this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
  this.resetEl.addEventListener('click', e => this.onC(e))
}

/**
 * @description events
 */

FormView.onKeyup = function(e) {
  const enter = 13;
  this.showResetBtn(this.inputEl.value.length)
  if(!this.inputEl.value.length) this.emit('@reset')
  if(e.keyCode !== enter) return
  this.emit('@submit', {input : this.inputEl.value})
}

FormView.onClick = function(e) {
  this.emit('@reset')
  this.showResetBtn(false)
}
export default FormView