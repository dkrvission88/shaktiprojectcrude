import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'

const MessageContainer = () => {
    return (
        <div className='md:min-w-[550px] flex flex-col'>
            <div className='flex gap-2 items-center  bg-zinc-800 text-white px-4 py-2 mb-2'>
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
            <Messages/>
            <SendInput/>
        </div>
    )
}

export default MessageContainer