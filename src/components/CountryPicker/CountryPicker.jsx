import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, InputLabel } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountryData } from "../../api";

const CountryPicker = (props) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchapi = async () => {
			setCountries(await fetchCountryData());
		};
		fetchapi();
	}, []);

	// console.log(countries);
	const optArray = countries.map((d, idx) => {
		return (
			<option key={idx} value={d}>
				{d}
			</option>
		);
	});
	return (
		<FormControl className={styles.formControl}>
			<NativeSelect
				defaultValue="Global"
				onChange={(event) => {
					props.handleSelectChange(event.target.value);
				}}
			>
				<option value="Global">Global</option>
				{optArray}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
