import React from 'react'
import classNames from 'classnames'

export const styledEl =
    (Comp: React.ComponentType | keyof JSX.IntrinsicElements) =>
    (strings?: TemplateStringsArray, ...params: any[]) =>
    (props: React.ComponentProps<any>) => {
        const className = strings?.reduce((cls, fragment, i) => {
            const vOrFn = params[i]
            const v = typeof vOrFn === 'function' ? vOrFn(props) : vOrFn
            return cls + fragment + (v ?? '')
        }, '')

        return (
            <Comp
                {...props}
                className={classNames(className, props.className)}
            />
        )
    }
