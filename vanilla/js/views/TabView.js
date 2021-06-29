import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.setup = function(el) {
    this.init(el)
    this.bindEvents()
    return this
}

TabView.setActiveTab = function(tabName) {
  Array.from(this.el.querySelectorAll('li')).forEach(li => {
    li.className = li.innerHTML === tabName ? 'active' : ''
  })
}

TabView.bindEvents = function() {
    this.el.addEventListener('click', e => this.onClick(e))  
}

TabView.onClick = function(e) {
  this.emit('@click', {tabName : e.target.innerHTML})
}


export default TabView