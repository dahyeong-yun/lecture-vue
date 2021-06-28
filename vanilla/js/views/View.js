const tag = '[View]'

export default {
    init(el) {
        if(!el) throw el
        this.el = el
        return this
    },
    
    on(evnet, handler) { // 특정 이벤트에 대한 행동을 정의 -> 이벤트에서 할 일을 만드는 것
        this.el.addEventListener(event, handler) 
        return this
    },

    emit(event, data) { // 스스로 어떤 이벤트를 방출하는 기능 -> 이벤트를 만드는 것
        const evt = new CustomEvent(event, {detail : data}) // TODO add class discription
        this.el.dispatchEvent(evt) // TODO add function discription
        return this
    },

    hide() {
        this.el.style.display = 'none'
        return this
    },

    show() {
        this.el.style.display = ''
        return this
    }   
}

// ? return을 주지 않고 상태 값이 변하는 것은 안되는 것인지?