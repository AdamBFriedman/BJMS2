import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: `3px solid ${theme.palette.grey.main}`,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "50%",
        height: "50%",
        [theme.breakpoints.down("xs")]: {
          width: "90%",
          overflow: "auto",
        },
      },
      p: {
        fontFamily: "Open Sans Condensed, sans-serif",
        textAlign: "left",
        color: "#fff",
        paddingLeft: "25px",
        paddingRight: "25px",
        [theme.breakpoints.up("xl")]: {
          fontSize: "2.2em",
          lineHeight: "2em",
        },
        [theme.breakpoints.down("lg")]: {
          fontSize: "1.7em",
        },
        [theme.breakpoints.down("md")]: {
          fontSize: "1.4em",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "1.3em",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "1em",
        },
    
        "&:p:first-letter": {
          float: "left",
          fontSize: "92px",
          lineHeight: "1",
          fontWeight: "bold",
          color: theme.palette.primary.main,
          marginRight: ".3rem",
        },
      },
}));

export const CustomModal = (open, onClose) => {
  const classes = useStyles();

  return (
    <Modal
        className={classes.modal}
        open={open === true}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open === true}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Meet Joey</h2>
            <p id="transition-modal-description">
                {`IS IT OPEN: ${open}`}
              Big Joey Magic Showy is an award-winning magician specializing in
              close-up magic. Whether it's his expert sleight of hand or his
              jaw-dropping illusions, the audience is always left stunned. From
              a young age, he has been drawn to the art of prestidigitation
              (fancy word for performing magic) - and has continued to perfect
              his craft over the last 25 years. His unique style of fast-paced,
              comedic magic has been enjoyed by all - including celebrities and
              Fortune 500 companies. As a professional magician and mentalist,
              his ability to read an audience is as impeccable as his ability to
              read their minds.
            </p>
          </div>
        </Fade>
      </Modal>
  );
};

export default CustomModal;