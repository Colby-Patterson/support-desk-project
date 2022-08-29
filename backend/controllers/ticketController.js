const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get tickets" });
});

const createTicket = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Create ticket" });
});

module.exports = {
  getTickets,
  createTicket,
};
