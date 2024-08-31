import { Messageall } from "../models/allMessageModel.js";
// import { usermodel } from "../models/usermodel.js";

// Send a message

export const sendMessages = async (req, res) => {
  const { senderId, receiverId, content } = req.body;

  try {
    const newMessage = new Messageall({
      sender: senderId,
      receiver: receiverId,
      content,
    });
    await newMessage.save();

    res
      .status(201)
      .json({ message: "Message sent successfully!", success: true });
  } catch (error) {
    res.status(500).json({ message: "Failed to send message", success: false });
  }
};

// View all messages between two users
// router.get('/view/:userId1/:userId2', async (req, res) => {
export const sendMessageBetweenTwoUsers = async (req, res) => {
  const { userId1, userId2 } = req.params;

  try {
    const messages = await Messageall
      .find({
        $or: [
          { sender: userId1, receiver: userId2 },
          { sender: userId2, receiver: userId1 },
        ],
      })
      .populate("sender receiver", "fullname email");

    res.status(200).json({ messages, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch messages", success: false });
  }
};

// Reply to a message
// router.post('/reply/:messageId', async (req, res) => {
export const replyToMessage = async (req, res) => {
  const { messageId } = req.params;
  const { senderId, content } = req.body;

  try {
    const message = await Messageall.findById(messageId);
    if (!message) {
      return res
        .status(404)
        .json({ message: "Message not found", success: false });
    }

    message.replies.push({ sender: senderId, content });
    await message.save();

    res
      .status(200)
      .json({ message: "Reply sent successfully!", success: true });
  } catch (error) {
    res.status(500).json({ message: "Failed to send reply", success: false });
  }
};
