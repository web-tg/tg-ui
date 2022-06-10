import { App } from 'vue'
export {
  textDefaultProps, textStylePropNames, TextComponentProps,
  imageDefaultProps, imageStylePropsNames, ImageComponentProps,
  AllComponentProps
} from './defaultProps'

import LText from './components/ZText'
import LImage from './components/ZImage'

const components = [
  LText,
  LImage,
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  LText,
  LImage,
  install
}
export default {
  install
}
