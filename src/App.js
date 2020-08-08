import React from "react";
import { Chart, Cards, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
//try with this API : https://api.covid19api.com/country/india (later)

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
