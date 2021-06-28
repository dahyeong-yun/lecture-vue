export default {
    data: [
        {keyword:'검색기록2', date: '12.03'},
        {keyword:'검색기록1', date: '12.02'},
        {keyword:'검색기록0', date: '12.01'}
    ],

    list() {
        return Promise.resolve(this.data) // TODO what is resolve
    },

    add(keyword = '') {
        keyword = keyword.trim()
        if(!keyword) return
        if(this.data.some(item => item.keyword === keyword )) { //  what is some? https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some
            this.remove(keyword)
        }

        const date = '12.31'
        this.data = [{keyword, date}, ...this.data] // TODO what is ...? https://ddalpange.github.io/2018/01/11/js-es6-three-dots/

    },

    remove(keyword) {
        this.data = this.data.filter(item => item.keyword !== keyword)
    }
}