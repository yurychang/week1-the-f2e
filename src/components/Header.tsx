import Button from './Button'
import el from './styleEl'

type Theme = 'light' | 'dark'

const NavLink = el.a`${({ theme }: { theme: Theme }) =>
    theme === 'light'
        ? 'text-light'
        : 'text-dark'} opacity-70 transition-colors hover:text-primary-btn-hover`

const Divider = el.a`h-[27px] w-[1px] ${({ theme }: { theme: Theme }) =>
    theme === 'light' ? 'bg-light' : 'bg-dark'}`

const Title = el.span`${({ theme }: { theme: Theme }) =>
    theme === 'light' ? 'text-light' : 'text-dark'} text-[30px]`

const Header = ({ theme = 'dark' }: { theme?: Theme }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-end items-center gap-6">
            <Title>The F2E</Title>
            <Divider />
            <NavLink href="">關卡資訊</NavLink>
            <NavLink href="">攻略資源</NavLink>
            <NavLink href="">求職專區</NavLink>
            <Button>註冊報名</Button>
            <Button>登入</Button>
        </header>
    )
}

export default Header
