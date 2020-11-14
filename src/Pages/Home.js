import $ from "jquery";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";
import splitFace from "../img/splitface.jpg";

const useStyles = makeStyles({});

const styles = {
  paperContainer: {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${splitFace})`,
    backgroundSize: "cover",
  },
};

function Home(props) {
  const classes = useStyles;

  const [cursor, setCursor] = useState("");

  document.addEventListener("DOMContentLoaded", function (e) {
    const leftSide = $(this).width() / 2;
    const cursorPosition = e.pageX < leftSide ? "cursorL" : "cursorR";
    if (cursorPosition === "cursorL") {
      setCursor("left");
    } else {
      setCursor("right");
    }
  });

  return (
    /* Add ternary operator to render one Paper with one bg style and another
      with another depending on whether or not left/right */

    /* Add styling to add blur effect to unused side of screen */
    <>
      <Paper style={styles.paperContainer}>
        <Button>{cursor}</Button>
      </Paper>
    </>
  );
}

export default Home;
