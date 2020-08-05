import React from "react";
import { Chart, Cards, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};
	}


	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}

	render() {
		const { data } = this.state;
		return (
			<div className={styles.container}>
				<h1>lol</h1>
				<Cards data={data} />
				<Chart />
				<CountryPicker />
			</div>
		);
	}
}

export default App;
