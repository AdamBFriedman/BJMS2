import { makeStyles } from "@material-ui/core/styles";
import coin from "../../img/coin.jpg";
import suit from "../../img/suit.jpg";
import joey_kid_happy from "../../img/joey_kid_happy.png";
import joey_kid_happy2 from "../../img/joey_kid_happy2.png";
import joey_kids from "../../img/joey_kids.png";
import joey_kids2 from "../../img/joey_kids2.png";
import joey_kids3 from "../../img/joey_kids3.png";
import joey_kids4 from "../../img/joey_kids4.png";
import joey_kids5 from "../../img/joey_kids5.png";
import joey_pointer from "../../img/joey_pointer.png";
import joey_ball from "../../img/joey_ball.png";
import joey_card_fan from "../../img/joey_card_fan.png";
import logo_face from "../../img/logo_face.png";
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
    img: joey_kid_happy,
    title: "Performing Kids",
  },
  {
    img: joey_kid_happy2,
    title: "Performing Kids 2",
  },
  {
    img: joey_ball,
    title: "Performing Ball",
  },
  {
    img: joey_kids,
    title: "Performing Kids 3",
  },
  {
    img: joey_kids2,
    title: "Performing Kids 4",
  },
  {
    img: joey_pointer,
    title: "Joey",
  },
  {
    img: joey_kids3,
    title: "Performing Kids 5",
  },
  {
    img: joey_card_fan,
    title: "Card Fan",
  },
  {
    img: joey_kids5,
    title: "Performing Kids 6",
  },
  {
    img: joey_kids4,
    title: "Performing Kids 7",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundImage: `url('${logo_face}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%'
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
