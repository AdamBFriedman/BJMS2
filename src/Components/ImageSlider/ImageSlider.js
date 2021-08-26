import { makeStyles } from "@material-ui/core/styles";
import coin from "../../img/coin.jpg";
import suit from "../../img/suit.jpg";
import Carousel from "react-material-ui-carousel";

const itemData = [
  {
    img: coin,
    title: "Coin",
  },
  {
    img: suit,
    title: "Suit",
  },
  {
    img: coin,
    title: "Coin",
  },
  {
    img: suit,
    title: "Suit",
  },
  {
    img: coin,
    title: "Coin",
  },
  {
    img: suit,
    title: "Suit",
  },
  {
    img: coin,
    title: "Coin",
  },
  {
    img: suit,
    title: "Suit",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: 500,
    height: 500,
    backgroundSize: "100% 100%",
    [theme.breakpoints.down("md")]: {
      width: 350,
      height: 350,
    },
    [theme.breakpoints.down("xs")]: {
      width: 200,
      height: 200,
    },
  },
  img: {
    width: 500,
    height: 500,
    [theme.breakpoints.down("md")]: {
      width: 350,
      height: 350,
    },
    [theme.breakpoints.down("xs")]: {
      width: 200,
      height: 200,
    },
  },
}));

export default function ImageSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Carousel className={classes.imageList}>
        {itemData.map((item, i) => (
          <img
            key={i}
            alt={item.title}
            src={item.img}
            className={classes.img}
          />
        ))}
      </Carousel>
    </div>
  );
}
