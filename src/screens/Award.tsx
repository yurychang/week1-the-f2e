import OutlineText from 'components/OutlineText'
import React from 'react'

const Award = () => {
    return (
        <>
            <div className="h-screen flex items-center justify-center bg-dark">
                <OutlineText
                    strokeColor="hsl(var(--p))"
                    className="text-[122px] font-bold"
                >
                    區區修煉已經無法滿足
                    <br />
                    了嗎?還有比賽等著你!
                </OutlineText>
            </div>
            <div className="py-[90px] px-[80px] min-h-screen flex justify-between text-light bg-dark">
                <div className="w-[45%]">
                    <div className=" mb-4 text-[54px] text-secondary">
                        Evaluation Mechanism
                    </div>
                    <div className="text-[40px] font-bold">
                        初選：將由六角學院前端、UI 評審進行第一波篩選，並於
                        12/5（五）公布初選佳作名單
                        <br />
                        決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於
                        12/23（五）公布企業得獎名單
                    </div>
                </div>
                <div className="w-[45%]">
                    <div className=" mb-4 text-[54px] text-secondary">
                        Awards
                    </div>
                    <div className="mb-[54px]">
                        <div className=" mb-4 text-[40px] font-bold">
                            初選佳作 共六十位{' '}
                            <span className="text-secondary">數位獎狀</span>
                        </div>
                        <div className="font-bold">
                            每週主題個人組十位、團體組十組
                        </div>
                    </div>
                    <div className="mb-[54px]">
                        <div className=" mb-4 text-[40px] font-bold">
                            個人企業獎 共六位{' '}
                            <span className="text-secondary">NTD 3,000/位</span>
                        </div>
                        <div className="font-bold">
                            每週主題各 2 名，設計 1 位、前端 1 位{' '}
                        </div>
                    </div>
                    <div className="mb-[54px]">
                        <div className=" mb-4 text-[40px] font-bold">
                            初選佳作 共六十位{' '}
                            <span className="text-secondary">數位獎狀</span>
                        </div>
                        <div className="font-bold">每週主題各 1 組 </div>
                    </div>
                    <div className="text-[40px] font-bold">
                        以上皆提供完賽數位獎狀
                    </div>
                </div>
            </div>
        </>
    )
}

export default Award
