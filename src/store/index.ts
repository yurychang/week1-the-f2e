import create from 'zustand'

type HeaderTheme = 'light' | 'dark'

interface StoreState {
    headerTheme: HeaderTheme
    setHeaderTheme: (theme: HeaderTheme) => void
}

const useStore = create<StoreState>()((set) => ({
    headerTheme: 'dark',
    setHeaderTheme: (headerTheme) => set(() => ({ headerTheme })),
}))

export default useStore
