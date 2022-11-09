import create from 'zustand'

export type BgColor = 'light' | 'dark'

export interface StoreState {
    bgColor: BgColor
    setBgColor: (theme: BgColor) => void
}

const useStore = create<StoreState>()((set) => ({
    bgColor: 'dark',
    setBgColor: (bgColor) => set(() => ({ bgColor })),
}))

export default useStore
