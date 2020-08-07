import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
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
				options={{
					responsive: true,
					legend: {
						display: true,
					},
					scales: {
						xAxes: [
							{
								gridLines: {
									display: false,
								},
								ticks: {
									autoSkip: true,
									maxTicksLimit: 12,
								},
							},
						],
						yAxes: [
							{
								scaleLabel: {
									display: true,
								},
								ticks: {
									beginAtZero: false,
									callback: function (value) {
										if (value == 0) return "0";
										return value / 100000 + " Lakhs";
									},
								},
								gridLines: {
									display: true,
									color: "rgba(0,0,0,0.3)",
								},
							},
						],
					},
				}}
				data={{
					labels: dailyData.map((data) => {
						let date = data.reportDate;
						let dconv = new Date(date);
						return dconv.toLocaleString("en", {
							month: "short",
							// year: true,
						});
					}),
					datasets: [
						{
							data: dailyData.map((data) => {
								return data.totalConfirmed;
							}),
							label: "Infected",
							borderColor: "rgba(0,0,255,0.6)",
							backgroundColor: "rgba(0,0,255,0.1)",
							pointBorderColor: "rgba(0,0,0,0)",
							pointBackgroundColor: "rgba(0,0,0,0)",
							pointRadius: 20,
							borderWidth: 3,
						},
						{
							data: dailyData.map((data) => {
								return data.deaths.total;
							}),
							label: "Deaths",
							borderColor: "rgba(255,0,0,0.6)",
							backgroundColor: "rgba(255,0,0,0.2)",
							pointBorderColor: "rgba(0,0,0,0)",
							pointBackgroundColor: "rgba(0,0,0,0)",
							pointRadius: 20,
						},
					],
				}}
			/>
		) : null;

	return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
