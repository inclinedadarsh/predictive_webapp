import mongoose from "mongoose";

const sentiment_classifier = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'It must have a Comment!']
    }
})

const sentimentClassifier = mongoose.model('sentiment_classifier', sentiment_classifier, 'sentiment_classifier')
export default sentimentClassifier;