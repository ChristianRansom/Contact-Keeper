const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();

// @route   Get api/contacts
// @desc    Get all users contacts
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route   Post api/contacts
// @desc    Add new contact
// @access  Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route   Put api/contacts/:id
// @desc    Update conctact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route   Delete api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete Contact");
});

module.exports = router;