import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  list: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    listStyleType: "none",
    margin: theme.spacing(0, 3),
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      transform: "translateY(0)",
      alignItems: "center",
      height: "auto",
    },
  },
  listItem: {
    width: "60px",
    height: "60px",
    textAlign: "center",
    lineHeight: "60px",
    fontSize: "35px",
    borderRadius: "50%",
    background: "black",
    position: "relative",
    margin: theme.spacing(3, 0),
    "&:hover": {
      transform: "translateX(20px)",
      transition: ".3s",
    },
    [theme.breakpoints.up("xl")]: {
      width: "100px",
      height: "100px",
      lineHeight: "100px",
      fontSize: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(2, 0),
      "&:hover": {
        transform: "translateX(0)",
        transition: "0s",
      },
    },
  },
  icon: {
    color: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  facebook: {
    background: "#4267b2",
  },
  youtube: {
    background: "#ED3833",
  },
  linkedin: {
    background: "#0077b5",
  },
  instagram: {
    background:
      "radial-gradient(circle at 30% 100%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
  },
  tiktok: {
    background: "radial-gradient(circle at 30% 100%, #00f2ea, #ff0050)",
  },
}));

const socialMedia = [
  {
    name: "facebook",
    href: "https://www.facebook.com/joeydp8trow/",
    className: `classes.facebook`,
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/channel/UC4ePL-afZ7oPyiW075k0AJA",
    className: `classes.youtube`,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/joseph-dipietro-aa398b171/",
    className: `classes.linkedin`,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/bigjoeymagicshowy/",
    className: `classes.instagram`,
  },
  {
    name: "tiktok",
    href: "https://www.tiktok.com/@bigjoeymagicshow?lang=en",
    className: `classes.tiktok`,
  },
];

const chooseSocialMedia = (variant, name, className) => {
  if (variant === "css") {
    return name === "facebook"
      ? "#4267b2"
      : name === "youtube"
      ? "#ED3833"
      : name === "linkedin"
      ? "#0077b5"
      : name === "instagram"
      ? "radial-gradient(circle at 30% 100%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
      : "radial-gradient(circle at 30% 100%, #00f2ea, #ff0050)";
  } else {
    return name === "facebook" ? (
      <FaFacebook className={className} />
    ) : name === "youtube" ? (
      <FaYoutube className={className} />
    ) : name === "linkedin" ? (
      <FaLinkedin className={className} />
    ) : name === "instagram" ? (
      <FaInstagram className={className} />
    ) : (
      <FontAwesomeIcon className={className} icon={faTiktok} />
    );
  }
};

export const SocialMedia = () => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {socialMedia.map((it, i) => (
        <li
          key={i}
          className={classes.listItem}
          style={{
            background: chooseSocialMedia("css", it.name),
          }}
        >
          <a href={it.href} target="_blank" rel="noreferrer">
            {chooseSocialMedia("icon", it.name, classes.icon)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
