import { useEffect } from 'react'
import gsap from 'gsap'
import useStore from 'store'
import Button from 'components/Button'
import OutlineText from 'components/OutlineText'

const SignUp = () => {
    const setBgColor = useStore((s) => s.setBgColor)

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '[data-anim="sign-up"]',
                start: 'top top',
                end: 'bottom bottom',
                onEnter: () => setBgColor('light'),
                onLeaveBack: () => setBgColor('dark'),
            },
        })
    }, [setBgColor])

    return (
        <div
            data-anim="sign-up"
            className="h-screen flex flex-col items-center justify-center bg-light"
        >
            <OutlineText className="mb-[80px] text-[122px] font-bold">
                可不可以點一下下就好
            </OutlineText>
            <Button className="rounded-2xl leading-tight text-[122px] font-bold text-dark">
                立即報名
            </Button>
        </div>
    )
}

export default SignUp
