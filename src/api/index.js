import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
	try {
		let modUrl = url;
		if (country && country !== "Global") {
			modUrl = `${url}/countries/${country}`;
		}
		const response = await axios.get(modUrl);
		const modifiedData = {
			confirmed: response.data.confirmed,
			recovered: response.data.recovered,
			deaths: response.data.deaths,
			lastUpdate: response.data.lastUpdate,
		};
		return modifiedData;
	} catch (error) {
		return error;
	}
};

export const fetchDailyData = async () => {
	try {
		const response = await axios.get(url + "/daily");
		return response.data;
	} catch (error) {}
};

export const fetchCountryData = async () => {
	try {
		const res = await axios.get(url + "/countries");
		const countries = res.data.countries.map((d) => {
			return d.name;
		});
		// console.log(countries);
		return countries;
	} catch (error) {}
};
