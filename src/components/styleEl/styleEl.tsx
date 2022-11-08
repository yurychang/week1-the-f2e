import React from 'react'
import classNames from 'classnames'

export function styledEl<P>(
    Comp: React.ComponentType<P> | keyof JSX.IntrinsicElements
) {
    return function <P2>(strings?: TemplateStringsArray, ...params: any[]) {
        return (props: P & P2) => {
            const className = strings?.reduce((cls, fragment, i) => {
                const vOrFn = params[i]
                const v = typeof vOrFn === 'function' ? vOrFn(props) : vOrFn
                return cls + fragment + (v ?? '')
            }, '')

            return (
                <Comp
                    {...props}
                    className={classNames(className, (props as any).className)}
                />
            )
        }
    }
}
