import React from "react";
import { Chart, Cards, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
	async componentDidMount() {
		const data = await fetchData();
		console.log(data);
	}

	render() {
		return (
			<div className={styles.container}>
				<h1>lol</h1>
				<Chart />
				<Cards />
				<CountryPicker />
			</div>
		);
	}
}

export default App;
