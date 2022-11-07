import el, { styledEl } from './styleEl'

const AdaptColor = el.span`${({ bg }: { bg: 'light' | 'dark' }) =>
    bg === 'light' ? 'text-light' : 'text-dark'}`

const NavLink = styledEl(
    AdaptColor
)` opacity-70 transition-colors  hover:text-primary`

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-end items-center gap-6">
            <span className="text-[30px] text-light">The F2E</span>
            <span className=""></span>
            <NavLink href="">關卡資訊</NavLink>
        </header>
    )
}

export default Header
