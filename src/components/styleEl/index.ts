import { ComponentProps } from 'react'
import { styledEl } from './styleEl'

const htmlTags: (keyof JSX.IntrinsicElements)[] = ['div', 'span', 'a', 'button']

const el = Object.fromEntries(
    htmlTags.map((tag) => [tag, styledEl<ComponentProps<typeof tag>>(tag)])
)

export { styledEl }
export default el
