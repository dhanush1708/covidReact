import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";

const Chart = () => {
	const [dailyData, setDailyData] = useState({});

	useEffect(() => {
		const fetchapi = async () => {
			setDailyData(await fetchDailyData());
		};
		fetchapi();
	}, []);
	console.log(dailyData);
	return <h1>Chart</h1>;
};

export default Chart;
