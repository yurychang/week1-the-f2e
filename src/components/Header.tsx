import el from '@master/style-element.react'
import useStore, { BgColor } from 'store'
import Button from './Button'

const textColor = {
    light: 'text-dark',
    dark: 'text-light',
}

const dividerColor = {
    light: 'bg-dark',
    dark: 'bg-light',
}

const NavLink = el.a`${({ $theme }) =>
    textColor[
        $theme as BgColor
    ]} opacity-70 transition-colors hover:text-primary-focus`

const Divider = el.a`h-[27px] w-[1px] transition-colors duration-500 ${({
    $theme,
}) => dividerColor[$theme as BgColor]}`

const Title = el.span`transition-colors duration-500 ${({ $theme }) =>
    textColor[$theme as BgColor]} text-[30px]`

const Header = () => {
    const theme = useStore((state) => state.bgColor)

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
