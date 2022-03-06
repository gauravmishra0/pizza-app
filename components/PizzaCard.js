import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function PizzaCard() {
    const [cat, setCat] = React.useState();
    const [open, setOpen] = React.useState(false);

    const styles = {
        flex: {
            display: "flex",
            gap: 50,
            justifyContent: "center",
            flexWrap: "wrap",
            padding: 10,
            paddingTop: 100,
        },
    };
    function getData() {
        const baseURL =
            "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";
        axios.get(baseURL).then((response) => {
            setCat(response.data);
        });
    }
    React.useEffect(() => {
        getData();
    }, []);

    if (!cat) return null;

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        "& .MuiDialogContent-root": {
            padding: theme.spacing(2),
        },
        "& .MuiDialogActions-root": {
            padding: theme.spacing(1),
        },
    }));

    const BootstrapDialogTitle = (props) => {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label='close'
                        onClick={onClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
        );
    };

    BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={styles.flex}>
            {cat.map((i, n) => (
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component='img'
                            height='194'
                            image={i.img_url}
                        />
                        <CardContent>
                            <h2>{i.name}</h2>
                            <Typography variant='body2' color='text.secondary'>
                                {i.description}
                            </Typography>
                            <Rating
                                name='half-rating-read'
                                defaultValue={i.rating}
                                precision={0.5}
                                readOnly
                            />
                            <Typography
                                variant='h6'
                                gutterBottom
                                component='div'>
                                Price: {i.price}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    "& > *": {
                                        m: 1,
                                    },
                                }}>
                                <ButtonGroup
                                    color='secondary'
                                    aria-label='medium secondary button group'>
                                    <Button key='one'>-</Button>
                                    <Button key='two'>0</Button>
                                    <Button
                                        onClick={handleClickOpen}
                                        key='three'>
                                        +
                                    </Button>
                                </ButtonGroup>
                            </Box>
                        </CardContent>
                    </Card>
                    <div>
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby='customized-dialog-title'
                            open={open}>
                            <BootstrapDialogTitle
                                id='customized-dialog-title'
                                onClose={handleClose}>
                                Customise
                            </BootstrapDialogTitle>
                            <DialogContent
                            >
                                {i.size.map((s) => (
                                    <div>
                                        <h5>{s.title}             </h5>
                                        {s.items.map((it) => (
                                            <div>
                                                <ButtonGroup
                                                    variant='text'
                                                    aria-label='text button group'>
                                                    <Button>{it.size}</Button>
                                                </ButtonGroup>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    autoFocus
                                    onClick={handleClose}></Button>
                            </DialogActions>
                        </BootstrapDialog>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PizzaCard;
