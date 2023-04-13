import React, { useState } from "react";
import axios from "axios";
import "./Form.scss";

const Form = ({ setResult }) => {
	const [commentValue, setCommentValue] = useState("");
	const postComment = async () => {
		try {
			const res = await axios.post("http://127.0.0.1:3000/comments", {
				comment: commentValue,
			});
			setResult(res.data.answer[0].sentiment);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="form">
			<input
				className="input"
				type="text"
				placeholder="Enter any comment"
				value={commentValue}
				onChange={e => setCommentValue(e.target.value)}
			/>
			<button className="button" onClick={postComment}>
				Analyze
			</button>
		</div>
	);
};

export default Form;
