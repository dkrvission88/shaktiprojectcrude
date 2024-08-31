import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const ReplayMessages = ({ messageId, senderId, onReplySent }) => {
    const [content, setContent] = useState('');

    const sendReply = async () => {
        try {
            const res = await axios.post(`http://localhost:8000/api/v1/messageall/reply/${messageId}`, {
                senderId,
                content
            });
           

            if (res.data.success) {
                toast.success('Reply sent successfully!');
                setContent('');
                onReplySent(); // Callback to refresh the messages list
            }
        } catch (error) {
            toast.error('Failed to send reply');
            console.error('Error sending reply', error);
        }
    };

    return (
        <div className="mt-4">
            <textarea
                className="w-full p-2 text-white border border-gray-300 rounded-lg"
                rows="2"
                placeholder="Type your reply here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button
                onClick={sendReply}
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
                Send Reply
            </button>
        </div>


    )
}

export default ReplayMessages