import { useLayoutEffect, useRef, useState } from 'react'
import useGlobalEvent from 'beautiful-react-hooks/useGlobalEvent'

import Header from 'components/Header'
import ScrollDown from 'components/ScrollDown'
import useStore from 'store'

import Section1 from 'sections/Section1'
import Section2 from 'sections/Section2'
import gsap from 'gsap'

function App() {
    const globalTl = useStore((s) => s.globalTl)
    const [location, setLocation] = useState(1)

    const scrollDownRef = useRef<HTMLDivElement>(null)
    const section1Ref = useRef<HTMLDivElement>(null)

    const onWheel = useGlobalEvent<WheelEvent>('wheel')
    const handleWheel = (e: WheelEvent) => {
        if (e.deltaY > 0 && location === 1) {
            setLocation(2)
        }
    }
    onWheel(handleWheel)

    return (
        <div className="h-screen overflow-hidden">
            <ScrollDown ref={scrollDownRef} />
            <Header />
            <Section1 ref={section1Ref} />
            <div className="h-screen">
                <Section2 />
            </div>
        </div>
    )
}

export default App
