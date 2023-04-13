import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";
import { useState } from "react";

function App() {
	const [result, setResult] = useState("");
	return (
		<div className="App">
			<Header />
			<Form setResult={setResult} />
			<Result result={result} />
		</div>
	);
}

export default App;
