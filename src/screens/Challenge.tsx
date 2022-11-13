import OutlineText from 'components/OutlineText'
import { ReactComponent as Hooray } from 'assets/hooray.svg'

const Challenge = () => {
    return (
        <div data-anim="pin-container">
            <section className="relative h-screen w-screen flex flex-col justify-center bg-dark">
                <OutlineText
                    strokeColor="hsl(var(--p))"
                    className="text-center text-[270px] font-bold"
                >
                    網頁設計
                </OutlineText>
                <div className="-mt-[200px] text-center font-bold text-[122px] text-primary">
                    互動式
                </div>
                <div className="mt-8 text-center text-[54px] text-light">
                    兩個角色進行攜手合作
                </div>
                <div className="relative mt-[70px] flex justify-center items-center">
                    <div
                        data-anim="ui-designer"
                        className="w-[610px] text-right text-[122px] font-bold -translate-x-full opacity-0"
                    >
                        <span className=" mr-5 text-primary">UI</span>
                        <OutlineText as="span" strokeColor="hsl(var(--p))">
                            設計師
                        </OutlineText>
                    </div>
                    <Hooray
                        data-anim="hooray"
                        className="mx-4 translate-y-full opacity-0"
                    />
                    <div
                        data-anim="f2e"
                        className="text-[122px] font-bold translate-x-full opacity-0"
                    >
                        <span className=" text-primary">前端</span>
                        <OutlineText as="span" strokeColor="hsl(var(--p))">
                            工程師
                        </OutlineText>
                    </div>
                </div>
                <div
                    data-anim="challenge-bg"
                    className="absolute inset-0 bg-dark opacity-0"
                ></div>
            </section>
            <section>
                <div
                    data-anim="challenge-content"
                    className="h-screen w-screen flex flex-col justify-center opacity-0"
                >
                    <OutlineText
                        strokeColor="hsl(var(--p))"
                        className="text-center text-[122px] font-bold leading-snug"
                    >
                        年度最強合作
                        <br />
                        🤘<span className="text-primary">三大主題</span>
                        來襲🤘
                    </OutlineText>
                    <div className="mt-[70px] text-center text-[54px] text-light opacity-70">
                        各路廠商強強聯手，
                        <br />
                        共同設計出接地氣的網頁互動挑戰關卡
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Challenge
