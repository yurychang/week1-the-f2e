import { styledEl } from './styledEl'

const htmlTags: (keyof JSX.IntrinsicElements)[] = ['div', 'span']

const el = Object.fromEntries(htmlTags.map((tag) => [tag, styledEl(tag)]))

export default el
