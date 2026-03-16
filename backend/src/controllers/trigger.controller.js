const Trigger = require('../models/trigger.model');

exports.createTrigger = async (req, res) => {
    try {
        const trigger = new Trigger(req.body);
        await trigger.save();
        res.status(201).json(trigger);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTriggers = async (req, res) => {
    try {
        const triggers = await Trigger.find();
        res.json(triggers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTrigger = async (req, res) => {
    try {
        await Trigger.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
