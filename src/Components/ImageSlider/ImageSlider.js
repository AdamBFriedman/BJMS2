import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import coin from "../../img/coin.jpg";
import suit from "../../img/suit.jpg";

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
    width: "90%",
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  listItem: {
    padding: '0 !important'
  },
  img: { height: "100%", width: '100%'},
}));

export default function ImageSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem className={classes.listItem} key={item.img}>
            <img className={classes.img} src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
