import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const SendAllMessages = ({ senderId, receiverId, onMessageSent }) => {
    const [content, setContent] = useState('');

    const sendMessage = async () => {
        try {
            const res = await axios.post('http://localhost:8000/api/v1/messageall/send', {
                senderId,
                receiverId,  // http://localhost:8000/api/v1/user/register
                content
            });

            if (res.data.success) {
                toast.success('Message sent successfully!');
                setContent('');
                onMessageSent(); 
            }
        } catch (error) {
            toast.error('Failed to send message');
            console.error('Error sending message', error);
        }
    };
    return (
        <div className="mt-4">
            <textarea
                className="w-full p-2 text-white border border-gray-300 rounded-lg"
                rows="4"
                placeholder="Type your message here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button
                onClick={sendMessage}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                Send Message
            </button>
        </div>

    )
}

export default SendAllMessages