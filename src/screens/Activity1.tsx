import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const Activity1 = () => {
    const backgroundRef = useRef(null)
    const text1Ref = useRef(null)

    useEffect(() => {
        ScrollTrigger.create({
            trigger: backgroundRef.current,
            start: 'top top',
            end: '+=600',
            pin: true,
            pinSpacing: false,
        })

        gsap.to(text1Ref.current, {
            scrollTrigger: {
                trigger: text1Ref.current,
                start: 'center bottom',
                end: '+=200',
                markers: true,
            },
            x: 400,
            duration: 0.25,
        })
    }, [])

    return (
        <>
            <div
                ref={backgroundRef}
                className="relative h-screen w-screen bg-dark"
            ></div>
            <div
                ref={text1Ref}
                className="relative -left-[300px] w-[300px] h-[300px] bg-light"
            ></div>
        </>
    )
}

export default Activity1
