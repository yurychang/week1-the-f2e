import el from '@master/style-element.react'
import { HTMLAttributes, ReactNode } from 'react'
import OutlineText from './OutlineText'

const Card = el.div`w-[1010px] h-[737px] shadow-xl bg-white p-6`

const Question = el.div`absolute-center whitespace-nowrap text-[54px]`

const BgText = el(
    OutlineText
)`text-center text-[220px] leading-[1.1] opacity-30`

const QuestionCard = ({
    question,
    bgText,
    ...props
}: {
    question: ReactNode
    bgText: ReactNode
} & HTMLAttributes<HTMLDivElement>) => {
    return (
        <Card {...props}>
            <Question>{question}</Question>
            <BgText strokeColor="black">{bgText}</BgText>
        </Card>
    )
}

export default QuestionCard
