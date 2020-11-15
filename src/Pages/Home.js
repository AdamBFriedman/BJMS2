import $ from "jquery";
import { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";
import splitFace from "../img/splitface.jpg";

// const useStyles = makeStyles({
//   rightButtons: {
//     position: "absolute",
//     right: "5%",
//     width: "50%",
//     color: "red",
//     background: "blue",
//   },
// });

const styles = {
  paperContainer: {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${splitFace})`,
    backgroundSize: "cover",
  },
  leftSide: {
    position: "absolute",
    left: 0,
    width: "50%",
    height: "100%",
    background: "green",
  },
  rightSide: {
    position: "absolute",
    right: 0,
    width: "50%",
    height: "100%",
    background: "red",
  },
};

function Home(props) {
  // const classes = useStyles;

  const [cursor, setCursor] = useState("");

  $(window).on("mousemove", function (e) {
    var leftSide = $(this).width() / 2;
    var cursorPosition = e.pageX < leftSide ? "cursorL" : "cursorR";
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
        {cursor === "left" ? (
          <>
            <div style={styles.leftSide}>
              <Button>{cursor}</Button>
              <Button>{cursor}</Button>
              <Button>{cursor}</Button>
            </div>
          </>
        ) : (
          <>
            <div style={styles.rightSide}>
              <Button>{cursor}</Button>
              <Button>{cursor}</Button>
              <Button>{cursor}</Button>
            </div>
          </>
        )}
      </Paper>
    </>
  );
}

export default Home;
