import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import stage from "../img/stage.jpg";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    fontFamily: "Roboto, sans-serif",
    backgroundImage: `url(${stage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "center",
    },
  },
  contactCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "40%",
    padding: theme.spacing(3),
    border: `2px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  formHeader: {
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  contactForm: {
    display: "grid",
    rowGap: theme.spacing(1),
    width: "100%",
  },
  underline: {
    borderTop: "none",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
  button: {
    background: theme.palette.primary.main,
    color: "#fff",
    marginTop: theme.spacing(3),
    "&:hover": {
      color: "#000",
      background: theme.palette.secondary.main,
    },
  },
}));

function Contact() {
  const classes = useStyles();
  const [eventType, setEventType] = React.useState("");
  const [locationType, setLocationType] = React.useState("");


  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleLocationTypeChange = (event) => {
    setLocationType(event.target.value);
  };

  return (
    <div className={classes.contactContainer}>
      <Card className={classes.contactCard}>
        <Typography className={classes.formHeader} component="h2" variant="h3">
          Book BJMS
        </Typography>
        <form
          className={classes.contactForm}
          noValidate
          autoComplete="off"
          action="https://formspree.io/f/xeqvlyzv"
          method="POST"
        >
          <TextField
            InputProps={{ classes: { underline: classes.underline } }}
            name="Name"
            label="Name"
          />
          <FormControl>
            <InputLabel>Event Type</InputLabel>
            <Select
              value={eventType}
              onChange={handleEventTypeChange}
              name="Event Type"
              label="Event Type"
            >
              <MenuItem value={"Birthday"}>Birthday</MenuItem>
              <MenuItem value={"Anniversary"}>Anniversary</MenuItem>
              <MenuItem value={"Wedding"}>Wedding</MenuItem>
              <MenuItem value={"School"}>School</MenuItem>
              <MenuItem value={"Camp"}>Camp</MenuItem>
              <MenuItem value={"Corporate"}>Corporate</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Location Type</InputLabel>
            <Select
              value={locationType}
              onChange={handleLocationTypeChange}
              name="Location Type"
              label="Location Type"
            >
              <MenuItem value={"Indoor"}>Indoor</MenuItem>
              <MenuItem value={"Outdoor"}>Outdoor</MenuItem>
            </Select>
          </FormControl>
          <TextField
            InputProps={{ classes: { underline: classes.underline } }}
            name="Email"
            label="Email"
          />
          <TextField
            InputProps={{ classes: { underline: classes.underline } }}
            name="Phone"
            label="Phone"
          />
          <TextField
            id="standard-number"
            name="Number of Guests"
            label="# of Guests"
            type="number"
            InputProps={{ classes: { underline: classes.underline } }}
            onChange={(e) => {
              if (e.target.value < 0) {
                e.target.value = 0;
              }
            }}
          />
          <TextField
            InputProps={{ classes: { underline: classes.underline } }}
            name="Message"
            label="Type your message here..."
            multiline
            rows={5}
          />
          <Button type="submit" className={classes.button}>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Contact;
