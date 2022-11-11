import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Header from 'components/Header'
import Banner from 'screens/Banner'
import Question1 from 'screens/Question1'
import Question2 from 'screens/Question2'
import Question3 from 'screens/Question3'
import Activity1 from 'screens/Activity1'

gsap.registerPlugin(ScrollTrigger)

function App() {
    return (
        <>
            <Header />
            <div className="relative z-10">
                <Banner />
                <Question1 />
                <Question2 />
                <Question3 />
            </div>
            <Activity1 />
            {/* <Activity1 /> */}
        </>
    )
}

export default App
