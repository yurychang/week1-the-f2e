import Header from 'components/Header'
import MainHeading from 'components/MainHeading'
import { ComponentProps, useState } from 'react'

function App() {
    const [headerTheme, setHeaderTheme] =
        useState<ComponentProps<typeof Header>['theme']>('light')

    return (
        <div>
            <Header theme={headerTheme}></Header>
            <MainHeading start={true}></MainHeading>
        </div>
    )
}

export default App
