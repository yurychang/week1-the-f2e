import React from 'react'
import classNames from 'classnames'

export const styledEl =
    (Comp: React.ComponentType | keyof JSX.IntrinsicElements) =>
    (strings?: TemplateStringsArray, ...params: any[]) =>
    (props: React.ComponentProps<any>) => {
        const className = strings?.reduce(
            (s, c, i) => s + c + (params[i] ?? ''),
            ''
        )
        return (
            <Comp
                className={classNames(className, props.className)}
                {...props}
            />
        )
    }
