import { styledEl } from './styleEl'

const htmlTags: (keyof JSX.IntrinsicElements)[] = ['div', 'span']

const el = Object.fromEntries(htmlTags.map((tag) => [tag, styledEl(tag)]))

export { styledEl }
export default el
