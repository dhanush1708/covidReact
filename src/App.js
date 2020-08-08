import React from "react";
import { Chart, Cards, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			country: "Global",
		};
	}

	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}

	handleSelectChange = async (country) => {
		const fetchedData = await fetchData(country);
		console.log(fetchedData);
		this.setState({ data: fetchedData, country: country });
	};

	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<Cards data={data} />
				<CountryPicker handleSelectChange={this.handleSelectChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
