import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Header from 'components/Header'

import Section1 from 'screens/Screen1'
import Section2 from 'screens/Screen2'

gsap.registerPlugin(ScrollTrigger)

function App() {
    return (
        <div className="h-screen">
            <Header />
            <Section1 />
            <Section2 />
        </div>
    )
}

export default App
