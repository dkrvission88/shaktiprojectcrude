import React from 'react'
import CreateMessage from './CreateMessage'
import SendAllMessages from './SendAllMessages'
import ReplayMessages from './ReplayMessages'
import MessagingPage from './MessagingPage'

const MessageSection = () => {
  return (
    <>

   <div className='min-w-96 mx-auto p-4 h-screen  items-center justify-center w-1'>
   <div>
        <CreateMessage/>

    </div>
    <div>
        <SendAllMessages/>

    </div>
    <div>
        <ReplayMessages/>

    </div>

    <div>
        <MessagingPage/>

    </div>


   </div>
    

    
    </>
  )
}

export default MessageSection