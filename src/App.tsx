import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useGlobalEvent from 'beautiful-react-hooks/useGlobalEvent'

import Header from 'components/Header'
import Banner from 'screens/Banner'
import Question1 from 'screens/Question1'
import Question2 from 'screens/Question2'
import Question3 from 'screens/Question3'
import Challenge from 'screens/Challenge'
import Weeks from 'screens/Weeks'

gsap.registerPlugin(ScrollTrigger)

function App() {
    const onBeforeunLoad = useGlobalEvent('beforeunload')
    onBeforeunLoad(() => window.scrollTo(0, 0))

    return (
        <>
            <Header />
            <Banner />
            <Question1 />
            <Question2 />
            <Question3 />
            <Weeks />
        </>
    )
}

export default App
