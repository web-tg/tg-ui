import { App } from 'vue'
import ZButton from './ZButton.vue'
ZButton.install = (app: App) => {
  app.component(ZButton.name, ZButton)
}

export default ZButton
