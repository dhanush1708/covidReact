import React from "react";
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import styles from "./Cards.module.css"


const Cards = (props) => {
	const { confirmed, recovered, deaths, lastUpdate } = props.data;
	if (!confirmed) {
		return 'Loading...';
	}
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Infected</Typography>
						<Typography variant="h5">
							<CountUp end={confirmed.value} duration={1} separator="," />
						</Typography>
						<Typography color="textSecondary">as on {new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of active COVID-19 cases</Typography>
					</CardContent>

				</Grid>
				<Grid item component={Card}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Recovered</Typography>
						<Typography variant="h5">
							<CountUp end={recovered.value} duration={1} separator="," />
						</Typography>
						<Typography color="textSecondary">as on {new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of Recovered COVID-19 cases</Typography>
					</CardContent>

				</Grid>
				<Grid item component={Card}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Deaths</Typography>
						<Typography variant="h5">
							<CountUp end={deaths.value} duration={1} separator="," />
						</Typography>
						<Typography color="textSecondary">as on {new Date(lastUpdate).toDateString()}</Typography>
						<Typography variant="body2">Number of deaths due to COVID-19</Typography>
					</CardContent>

				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
