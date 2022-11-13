import element from '@master/style-element.react'
import IntroCard from 'components/IntroCard'

const Card = element(IntroCard)`w-[560px] shrink-0`

const Weeks = () => {
    return (
        <div className="z-10 h-screen pt-[90px] px-12 flex gap-6 items-center bg-dark">
            <Card
                title="Week 1"
                desc="The F2E 活動網站設計"
                labels={['視差滾動', '版塊設計']}
                image={<></>}
            ></Card>
            <Card
                title="Week 2"
                desc="今晚，我想來點點簽"
                labels={['Canvas', '凱鈿行動科技']}
                image={<></>}
            ></Card>
            <Card
                title="Week 3"
                desc="Scrum 新手村"
                labels={['JS draggable', '鈦坦科技']}
                image={<></>}
            ></Card>
        </div>
    )
}

export default Weeks
