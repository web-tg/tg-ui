import { App } from 'vue'
export {
  textDefaultProps, textStylePropNames, TextComponentProps,
  imageDefaultProps, imageStylePropsNames, ImageComponentProps,
  AllComponentProps
} from './defaultProps'

import ZText from './components/ZText'
import ZImage from './components/ZImage'

const components = [
  ZText,
  ZImage,
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  ZText,
  ZImage,
  install
}
export default {
  install
}
