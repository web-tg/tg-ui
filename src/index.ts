import { App } from 'vue'
export {
  textDefaultProps, textStylePropNames, TextComponentProps,
  imageDefaultProps, imageStylePropsNames, ImageComponentProps,
  AllComponentProps
} from './defaultProps'

import ZText from './components/ZText'
import ZImage from './components/ZImage'
import ZButton from './components/ZButton'

const components = [
  ZText,
  ZImage,
  ZButton,
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  ZText,
  ZImage,
  ZButton,
  install
}
export default {
  install
}
