import sentimentClassifier from "./commentsModel.js";

const predictComment = async (req, res) => {
	try {
		const answer = await sentimentClassifier.find(req.body);
		res.status(200).json({ answer: answer });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err });
	}
};

export default predictComment;
