import main from './src/main'

let instance

const plugin = {
  install (Vue) {
    const Toast = Vue.extend(main)
    if (!instance) {
      instance = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild(instance.$el)
    }

    const toast = {
      show (options = {}) {
        if (instance.timer) {
          return
        }
        let defaults = {}
        for (let key in instance.$options.props) {
          defaults[key] = instance.$options.props[key].default
        }

        Object.assign(instance, defaults, options)
        instance.show = true
      }
    }

    if (!Vue.$myui) {
      Vue.$myui = {
        toast
      }
    } else {
      Vue.$myui.toast = toast
    }

    Vue.mixin({
      created () {
        this.$myui = Vue.$myui
      }
    })
  }
}

export default plugin
