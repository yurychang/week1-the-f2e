import OutlineText from 'components/OutlineText'
import SponsorCard from 'components/SponsorCard'
import blockStudio from 'assets/block-studio.png'
import titansoft from 'assets/titansoft.png'
import kdanMobile from 'assets/kdan-mobile.png'

const Sponsor = () => {
    return (
        <div className="relative py-[90px] h-screen flex flex-col items-center justify-center bg-light">
            <div className="mb-[80px] text-[122px] font-bold">
                <span className="text-primary">鑽石級贊助單位</span>
                <OutlineText as="span" strokeColor="hsl(var(--p))" className="">
                    太棒惹
                </OutlineText>
            </div>
            <div className="flex items-center justify-center gap-10">
                <SponsorCard>
                    <img src={blockStudio} alt="blockStudio" />
                </SponsorCard>
                <SponsorCard>
                    <img src={titansoft} alt="titansoft" />
                </SponsorCard>
                <SponsorCard>
                    <img src={kdanMobile} alt="kdanMobile" />
                </SponsorCard>
            </div>
            <div className="absolute-x-center bottom-2 text-black opacity-30">
                Copyright © 2022 HexSchool, Chihling Kuo. All rights reserved.
            </div>
        </div>
    )
}

export default Sponsor
