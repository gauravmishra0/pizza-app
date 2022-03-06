import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
        background: "red"
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position='static' style={{background:'#efac0f', position:'fixed'}}>
            <Toolbar>
                <Typography variant='h4' className={classes.logo}>
                    Pizza App
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
