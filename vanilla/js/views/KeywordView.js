import View from './View.js'

const tag = '[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.messages = {
    NO_KEYWORDS: '추천 검색어가 없습니다.'
}

KeywordView.setup = function(el) {
  this.init(el)
  // this.bindClickEvent() -> 여기서 render()로 옮긴 이유 : 검색어 DOM이 생기고 난 후에 바인딩을 하기 위해서
  return this
}

KeywordView.render = function(data) {
    this.el.innerHTML = data.length ? this.getKeywordHtml(data) : KeywordView.messages.NO_KEYWORDS
    this.bindClickEvent()
    this.show()
}

KeywordView.getKeywordHtml = function(data) {
    return data.reduce((html, item, index) => {
        html += `<li data-keyword="${item.keyword}">
            <span class="number">${index + 1}</span>
            ${item.keyword}
          </li>`
        return html
    }, `<ul class="list">`) + `</ul>`
}

KeywordView.bindClickEvent = function() {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.addEventListener('click', e => this.onClickKeyword(e))
    }) // Array가 아니고 유사 배열이기 때문에 배열로 변경하는 과정이 필요
}

KeywordView.onClickKeyword = function(e) {
  const {keyword} = e.currentTarget.dataset // TODO 이것이 오브젝트로 리턴 되는 이유
  this.emit('@click', {keyword})// 클릭 했을 경우 검색 결과로 이동해야하지만 이 부분이 키워드 뷰의 역할인가? 아니고 컨트롤러로 위임
}

export default KeywordView