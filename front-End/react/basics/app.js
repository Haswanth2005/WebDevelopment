import { circle } from "./function.js"
import box from './function.js'

const div = () => {
  return React.createElement('div', null, [circle(), box()])
}

export default div