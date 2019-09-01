'use strict'
import MyButton from './components/my-button'

const components = [
  MyButton
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
