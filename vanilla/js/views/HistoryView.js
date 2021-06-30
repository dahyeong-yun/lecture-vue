import View from './View.js'

const tag = '[HistoryView]'

const HistoryView = Object.create(View)

HistoryView.setup = function(el) {
    this.init(el)
    return this
}

HistoryView.render = function(data) {
    this.el.innerHTML = data.length ? this.getHistoryHtml(data) : '검색기록이 없습니다.'
    this.bindClickEvent()
    this.show()
}

HistoryView.getHistoryHtml = function(data) {
    return data.reduce((html, item, index) => {
        html += `<li data-keyword="${item.keyword}">
            <span class="number">${index + 1}</span>
            ${item.keyword}
          </li>`
        return html
    }, `<ul class="list">`) + `</ul>`
}

HistoryView.bindClickEvent = function() {
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.addEventListener('click', e => this.onClickHistory(e))
    }) // Array가 아니고 유사 배열이기 때문에 배열로 변경하는 과정이 필요
}

HistoryView.onClickHistory = function(e) {
    const {keyword} = e.currentTarget.dataset // TODO 이것이 오브젝트로 리턴 되는 이유
    this.emit('@click', {keyword})// 클릭 했을 경우 검색 결과로 이동해야하지만 이 부분이 키워드 뷰의 역할인가? 아니고 컨트롤러로 위임
}

export default HistoryView