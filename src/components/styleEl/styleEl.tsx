import React from 'react'
import classNames from 'classnames'

export function styledEl<P>(
    Comp: React.ComponentType<P> | keyof JSX.IntrinsicElements
) {
    return (strings?: TemplateStringsArray, ...params: any[]) =>
        (props: P) => {
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
