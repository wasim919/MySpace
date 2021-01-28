import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
	gridStyle: {
		[theme.breakpoints.up("md")]: {
			height: "100vh"
		}
	},
	innerGridStyle: {
		marginTop: "2rem"
	},
	myName: {
		fontFamily: "Special Elite, cursive"
	},
	bioStyle: {
		marginTop: "1rem"
	},
	myPhotoStyle: {
		width: 0,
		height: 0
	},
	[theme.breakpoints.up("md")]: {
		myPhotoStyle: {
			width: "512px",
			height: "512px"
		}
	}
}))