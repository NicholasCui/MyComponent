'use strict'
import MyButton from './components/my-button'
import MyToast from './components/my-toast'

const components = [
  MyButton
]

const plugins = [
  MyToast
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  plugins.forEach(plugin => {
    Vue.use(plugin)
  })
}

export default {
  install
}
