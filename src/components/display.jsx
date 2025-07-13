import { useState } from "react";

export default function Display({ currentNum }) {
	return (
		<>
			<div className="display" value={currentNum}></div>
		</>
	);
}
