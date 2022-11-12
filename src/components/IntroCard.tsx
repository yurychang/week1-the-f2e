import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { HTMLAttributes } from 'react'
import Button from './Button'

const IntroCard = ({
    title,
    desc,
    image,
    labels,
    className,
    ...props
}: {
    title: string
    desc: string
    image: ReactNode
    labels: string[]
} & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={classNames(
                'p-10 flex flex-col rounded-2xl shadow-xl bg-[#424242]',
                className
            )}
            {...props}
        >
            <div className="mb-4 text-[54px] text-secondary">{title}</div>
            <div className="mb-4 text-[40px] text-light">{desc}</div>
            <div className="grow">{image}</div>
            <div className="flex gap-2 mb-6">
                {labels.map((t, i) => (
                    <div
                        key={i}
                        className="border rounded-sm text-[40px] text-light"
                    >
                        #{t}
                    </div>
                ))}
            </div>
            <Button
                variant="secondary"
                block
                className="text-[40px] leading-tight"
            >
                查看關卡細節
            </Button>
        </div>
    )
}

export default IntroCard
