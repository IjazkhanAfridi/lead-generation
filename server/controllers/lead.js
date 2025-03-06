const Lead = require('../model/lead');

const postLead = async (req, res) => {
  try {
    const { name, email, status } = req.body;
    const newLead = new Lead({ name, email, status });
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getLead = async (req, res) => {
  try {
    const leads = await Lead.find();
    console.log('leads: ', leads);
    res.status(200).json(leads);
  } catch (error) {
    console.log('error: ', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postLead, getLead };
