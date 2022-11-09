import { useRef } from 'react'

import Header from 'components/Header'
import useStore from 'store'

import Section1 from 'screens/Screen1'
import Section2 from 'screens/Screen2'

function App() {
    const globalTl = useStore((s) => s.globalTl)

    const section1Ref = useRef<HTMLDivElement>(null)

    return (
        <div className="h-screen">
            <Header />
            <Section1 ref={section1Ref} />
            <Section2 />
        </div>
    )
}

export default App
