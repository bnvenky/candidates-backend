const Candidate = require('../models/Candidate');

exports.getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCandidate = async (req, res) => {
  const { name, phone, email, gender, experience, skills } = req.body;
  try {
    const candidate = new Candidate({ name, phone, email, gender, experience, skills });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
