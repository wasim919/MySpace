import React from "react"

import { Grid, AppBar, Tabs, Tab, makeStyles, Typography, List } from "@material-ui/core"

import { experienceTypes, aiExperience, softExperience, freeLanceExperience } from "../content"
import ExperienceListComponent from "./ExperienceListComponent"
import { titleFontFamily } from "../theme"

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		marginTop: "5rem"
	},
	titleStyle: {
		fontFamily: titleFontFamily,
		marginBottom: "2rem"
	},
	tabs: {
		backgroundColor: theme.palette.type === "dark" ? "dark" : "#90caf9"
	},
	tab: {
		color: theme.palette.type === "dark" ? "white" : "rgba(0, 0, 0, 0.87)",
		fontWeight: 700
	},
	tabPanel: {
		[theme.breakpoints.up("md")]: {
			width: "38.5rem"
		},
		backgroundColor: theme.palette.type === "light" ? "white" : "dark"
	}
}))

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div role="tabpanel" id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && <Typography>{children}</Typography>}
		</div>
	)
}

export default function Experience({ id }) {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	const classes = useStyles()
	return (
		<Grid className={classes.mainContainer} container>
			<Typography className={classes.titleStyle} variant="h4">
				Experience
			</Typography>
			<Grid container>
				<Grid item xs={12} md={6}>
					<AppBar position="static">
						<Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="Experience Tabs">
							{(experienceTypes || []).map((ele, index) => (
								<Tab className={classes.tab} value={index} label={ele} key={index} />
							))}
						</Tabs>
					</AppBar>
				</Grid>
			</Grid>
			<Grid id={id} className={classes.tabPanel} container>
				<TabPanel value={value} index={0}>
					<List>
						<ExperienceListComponent experience={softExperience} />
					</List>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<List>
						<ExperienceListComponent experience={aiExperience} />
					</List>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<List>
						<ExperienceListComponent experience={freeLanceExperience} />
					</List>
				</TabPanel>
			</Grid>
		</Grid>
	)
}
