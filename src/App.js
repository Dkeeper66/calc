import "./App.css";
import { useState } from "react";
import Display from "./components/display";

function App() {
	const [currentNum, setCurrentNum] = useState([]);
	setCurrentNum([100, 20]);
	return (
		<>
			<Display currentNum={currentNum} />
		</>
	);
}

export default App;
