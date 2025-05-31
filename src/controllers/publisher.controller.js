import Publisher from "../models/publisher.model.js";

class PublisherController {
    static findPublishers = async (req, res) => {
        try {
            const publisherList = await Publisher.find();
            res.status(200).json(publisherList);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static findPublisherById = async (req, res) => {
        try {
            const id = req.params.id;

            const publisher = await Publisher.findById(id);
            if (!publisher) {
                return res.status(404).json({ message: "publisher not found." });
            }
            res.status(200).json(publisher);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static createPublisher = async (req, res) => {
        try {
            const body = req.body;

            const newPublisher = new Publisher(body);

            const insertedPublisher = await newPublisher.save();
            res.status(201).json(insertedPublisher);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static updatePublisher = async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;

            const updatedPublisher = await Publisher.findByIdAndUpdate(
                id,
                { $set: body },
                { new: true, runValidators: true }
            );

            if (!updatedPublisher) {
                return res.status(400).json({ message: "publisher not found." });
            }
            res.status(200).json(updatedPublisher);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static deletePublisher = async (req, res) => {
        try {
            const id = req.params.id;

            const deletedPublisher = await Publisher.findByIdAndDelete(id);
            if (!deletedPublisher) {
                return res.status(400).json({ message: "publisher not found." });
            }
            res.status(200).json({ message: `publisher ${deletedPublisher.name} deleted.` });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}

export default PublisherController;