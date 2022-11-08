import Button from './Button'
import el from '@master/style-element.react'

type Theme = 'light' | 'dark'

const NavLink = el.a`${({ $theme }) =>
    $theme === 'dark'
        ? 'text-light'
        : 'text-dark'} opacity-70 transition-colors hover:text-primary-focus`

const Divider = el.a`h-[27px] w-[1px] ${({ $theme }) =>
    $theme === 'dark' ? 'bg-light' : 'bg-dark'}`

const Title = el.span`${({ $theme }) =>
    $theme === 'dark' ? 'text-light' : 'text-dark'} text-[30px]`

const Header = ({ theme = 'light' }: { theme?: Theme }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-end items-center gap-6">
            <Title $theme={theme}>The F2E</Title>
            <Divider $theme={theme} />
            <NavLink $theme={theme} href="">
                關卡資訊
            </NavLink>
            <NavLink $theme={theme} href="">
                攻略資源
            </NavLink>
            <NavLink $theme={theme} href="">
                求職專區
            </NavLink>
            <Button>註冊報名</Button>
            <Button>登入</Button>
        </header>
    )
}

export default Header
