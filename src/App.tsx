import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Header from 'components/Header'
import Banner from 'screens/Banner'
import Screen2 from 'screens/Screen2'
import Screen3 from 'screens/Screen3'
import Screen4 from 'screens/Screen4'
import Screen5 from 'screens/Screen5'

gsap.registerPlugin(ScrollTrigger)

function App() {
    return (
        <div>
            <Header />
            <Banner />
            <Screen2 />
            <Screen3 />
            <Screen4 />
            <Screen5 />
        </div>
    )
}

export default App
