import { HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import el from '@master/style-element.react'

const Dot = el.div`mt-7 w-[45px] h-[45px] rounded-full bg-[#FDD609]`

const IntroStep = ({
    title,
    children,
    className,
    ...props
}: {
    title?: string
} & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={classNames('flex flex-col', className)} {...props}>
            <div className="mb-4 text-[54px] text-secondary">{title}</div>
            <div className="grow text-[40px] text-light">{children}</div>
            <Dot />
        </div>
    )
}

export default IntroStep
