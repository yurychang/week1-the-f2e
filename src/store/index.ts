import create from 'zustand'
import gsap from 'gsap'

export type BgColor = 'light' | 'dark'

export interface StoreState {
    bgColor: BgColor
    setBgColor: (theme: BgColor) => void
    globalTl: gsap.core.Timeline
}

const useStore = create<StoreState>()((set) => ({
    bgColor: 'dark',
    setBgColor: (bgColor) => set(() => ({ bgColor })),
    globalTl: gsap.timeline(),
}))

export default useStore
