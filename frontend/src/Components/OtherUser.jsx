import React from 'react'

const OtherUser = () => {
    return (
        <div>
            <div className='flex gap-2 items-center hover:bg-zinc-200 rounded-sm p-2 cursor-pointer'>
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src='https://play-lh.googleusercontent.com/LeX880ebGwSM8Ai_zukSE83vLsyUEUePcPVsMJr2p8H3TUYwNg-2J_dVMdaVhfv1cHg' alt='user-profile' />

                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between  gap-2 '>
                        <p>my love</p>

                    </div>
                </div>

            </div>
            <div className='divider my-0 py-0 h-1'></div>

        </div>
    )
}

export default OtherUser