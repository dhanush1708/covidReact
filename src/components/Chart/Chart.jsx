import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import { red } from "@material-ui/core/colors";
import styles from "./Chart.module.css";

const Chart = () => {
	const [dailyData, setDailyData] = useState({});

	useEffect(() => {
		const fetchapi = async () => {
			setDailyData(await fetchDailyData());
		};
		fetchapi();
	}, []);

	const lineChart =
		dailyData[0] != null ? (
			<Line
				data={{
					labels: dailyData.map((data) => {
						return data.reportDate;
					}),
					datasets: [
						{
							data: dailyData.map((data) => {
								return data.totalConfirmed;
							}),
							label: "Infected",
							borderColor: "blue",
							backgroundColor: "rgba(0,0,255,0.2)",
							fill: true,
						},
						{
							data: dailyData.map((data) => {
								return data.deaths.total;
							}),
							label: "Sacrificed",
							borderColor: "red",
							backgroundColor: "rgba(255,0,0,0.2)",
							fill: true,
						},
					],
				}}
			/>
		) : null;

	return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
