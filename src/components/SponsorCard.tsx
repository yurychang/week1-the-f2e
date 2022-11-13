import { HTMLAttributes } from 'react'

const SponsorCard = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className="p-6 w-[285px] h-[285px] flex items-center justify-center overflow-hidden rounded-2xl bg-white"
            style={{
                boxShadow: '0px 0px 30px 0px #00000014',
            }}
            {...props}
        />
    )
}

export default SponsorCard
