import React from 'react';
import CreateMessage from './CreateMessage';
import SendAllMessages from './SendAllMessages';
import ReplayMessages from './ReplayMessages';
import { useParams } from 'react-router-dom';


const MessagingPage = () => {
    const { userId1, userId2 } = useParams(); // Get user IDs from the route

    const handleMessageSent = () => {
      // Refresh message list after sending a new message
    };
  
    const handleReplySent = () => {
      // Refresh message list after sending a reply
    };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Messaging</h1>
      <CreateMessage userId1={userId1} userId2={userId2} />
      <SendAllMessages senderId={userId1} receiverId={userId2} onMessageSent={handleMessageSent} />
      {/* Replying should be done per message, add a ReplyMessage component accordingly */}
    </div>
   
  )
}

export default MessagingPage