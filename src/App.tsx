import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useGlobalEvent from 'beautiful-react-hooks/useGlobalEvent'

import Header from 'components/Header'
import Banner from 'screens/Banner'
import Question1 from 'screens/Question1'
import Question2 from 'screens/Question2'
import Question3 from 'screens/Question3'
import Weeks from 'screens/Weeks'
import Introduction from 'screens/Introduction'
import Award from 'screens/Award'
import SignUp from 'screens/SignUp'
import Sponsor from 'screens/Sponsor'

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
            <Introduction />
            <Award></Award>
            <SignUp></SignUp>
            <Sponsor></Sponsor>
        </>
    )
}

export default App
