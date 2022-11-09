import { forwardRef, HTMLAttributes } from 'react'
import { MdOutlineArrowDownward } from 'react-icons/md'
import classNames from 'classnames'
import useStore from 'store'

const textColor = {
    light: 'text-dark',
    dark: 'text-light',
}

const ScrollDown = forwardRef<HTMLDivElement>(
    (
        {
            className,
            ...props
        }: { className?: string } & HTMLAttributes<HTMLDivElement>,
        ref
    ) => {
        const bgColor = useStore((s) => s.bgColor)

        return (
            <div
                ref={ref}
                className={classNames(
                    `fixed right-[32px] bottom-[32px] z-50 flex items-center ${textColor[bgColor]} opacity-30 transition-colors`,
                    className
                )}
                {...props}
            >
                Scroll down
                <MdOutlineArrowDownward className="ml-2" />
            </div>
        )
    }
)

export default ScrollDown