// routes/message.js
const { Router } = require("express");
const { z } = require("zod");
const { messageModel } = require("../db");

const messageRouter = Router();

const messageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

messageRouter.post("/message", async (req, res) => {
  try {
    const parsedMessage = messageSchema.parse(req.body);

    const newMessage = await messageModel.create(parsedMessage);
    res.status(201).send({
      message: "Message successfully sent!",
      data: newMessage,
    });
  } catch (error) {
    if (error.issues) {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.issues.map((e) => e.message),
      });
    }
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = { messageRouter };
