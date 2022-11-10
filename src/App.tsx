import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Header from 'components/Header'

import Screen1 from 'screens/Screen1'
import Screen2 from 'screens/Screen2'
import Screen3 from 'screens/Screen3'
import Screen4 from 'screens/Screen4'

gsap.registerPlugin(ScrollTrigger)

function App() {
    return (
        <div>
            <Header />
            <Screen1 />
            <Screen2 />
            <Screen3 />
            <Screen4 />
        </div>
    )
}

export default App
