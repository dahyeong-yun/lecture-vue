import View from './View.js'

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

// 이벤트 바인딩 역할 함수
// -> 바인딩은 계속 추가 될 수 있으므로 아마 이벤트 자체와 분리한 것 같다.
// setup() 함수의 추상화 수준을 동일하게 가져가는 효과도 얻을 수 있다. 
FormView.bindEvents = function() {
  this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
}

// 키업 이벤트 함수
FormView.onKeyup = function() {
  this.showResetBtn(this.inputEl.value.length)
}

export default FormView