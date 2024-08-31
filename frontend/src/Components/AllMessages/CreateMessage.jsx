import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CreateMessage = ({ userId1, userId2 }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/v1/messageall/view/${userId1}/${userId2}`);
                if (res.data.success) {
                    setMessages(res.data.messages);
                }// http://localhost:8000/api/v1/user/register
            } catch (error) {
                console.error('Error fetching messages', error);
            }
        };

        fetchMessages();
    }, [userId1, userId2]);


    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Messages</h2>
            {messages.map(message => (
                <div key={message._id} className="mb-4 p-4 text-white bg-gray-100 rounded-lg">
                    <p><strong>{message.sender.fullname}:</strong> {message.content}</p>
                    <div className="pl-4 mt-2 text-white">
                        {message.replies.map((reply, index) => (
                            <p key={index}><strong>{reply.sender.fullname}:</strong> {reply.content}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    )
}

export default CreateMessage