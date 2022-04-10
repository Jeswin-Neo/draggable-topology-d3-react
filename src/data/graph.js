import GoogleImg from "../images/google.png";
import BlackIcon from "../images/black.png";
import GreenIcon from "../images/green.png";
import CircleImg from "../images/circle.png";

export default {
  nodes: [
    {
      x:
        localStorage.getItem("rect0.rect0.dx") !== null
          ? localStorage.getItem("rect0.rect0.dx")
          : 400,
      y:
        localStorage.getItem("rect0.rect0.dy") !== null
          ? localStorage.getItem("rect0.rect0.dy")
          : 175,
    },
    {
      x:
        localStorage.getItem("rect1.rect1.dx") !== null
          ? localStorage.getItem("rect1.rect1.dx")
          : 200,
      y:
        localStorage.getItem("rect1.rect1.dy") !== null
          ? localStorage.getItem("rect1.rect1.dy")
          : 500,
    },
    {
      x:
        localStorage.getItem("rect2.rect2.dx") !== null
          ? localStorage.getItem("rect2.rect2.dx")
          : 500,
      y:
        localStorage.getItem("rect2.rect2.dy") !== null
          ? localStorage.getItem("rect2.rect2.dy")
          : 500,
    },
    {
      x:
        localStorage.getItem("rect3.rect3.dx") !== null
          ? localStorage.getItem("rect3.rect3.dx")
          : 800,
      y:
        localStorage.getItem("rect3.rect3.dy") !== null
          ? localStorage.getItem("rect3.rect3.dy")
          : 500,
    },
    {
      x:
        localStorage.getItem("rect4.rect4.dx") !== null
          ? localStorage.getItem("rect4.rect4.dx")
          : 1100,
      y:
        localStorage.getItem("rect4.rect4.dy") !== null
          ? localStorage.getItem("rect4.rect4.dy")
          : 500,
    },
    {
      x:
        localStorage.getItem("rect5.rect5.dx") !== null
          ? localStorage.getItem("rect5.rect5.dx")
          : 1400,
      y:
        localStorage.getItem("rect5.rect5.dy") !== null
          ? localStorage.getItem("rect5.rect5.dy")
          : 500,
    },
  ],
  content: [
    {
      image: BlackIcon,
      google: GoogleImg,
      text: "Google",
      x:
        localStorage.getItem("rect0.rect0.dx") !== null
          ? localStorage.getItem("rect0.rect0.dx")
          : 400,
      y:
        localStorage.getItem("rect0.rect0.dy") !== null
          ? localStorage.getItem("rect0.rect0.dy")
          : 175,
      source: 0,
      target: 0,
    },
    {
      image: GreenIcon,
      text: "New York-Sites",
      x:
        localStorage.getItem("rect1.rect1.dx") !== null
          ? localStorage.getItem("rect1.rect1.dx")
          : 200,
      y:
        localStorage.getItem("rect1.rect1.dy") !== null
          ? localStorage.getItem("rect1.rect1.dy")
          : 500,
      source: 1,
      target: 0,
      circle: { img1: CircleImg, text1: "Q2KN-M" },
    },
    {
      image: GreenIcon,
      text: "New Jersey-Sites",
      x:
        localStorage.getItem("rect2.rect2.dx") !== null
          ? localStorage.getItem("rect2.rect2.dx")
          : 500,
      y:
        localStorage.getItem("rect2.rect2.dy") !== null
          ? localStorage.getItem("rect2.rect2.dy")
          : 500,
      source: 2,
      target: 0,
      circle: { img1: CircleImg, text1: "Q2KN-G" },
    },
    {
      image: GreenIcon,
      text: "Vermont-Sites",
      x:
        localStorage.getItem("rect3.rect3.dx") !== null
          ? localStorage.getItem("rect3.rect3.dx")
          : 800,
      y:
        localStorage.getItem("rect3.rect3.dy") !== null
          ? localStorage.getItem("rect3.rect3.dy")
          : 500,
      source: 3,
      target: 0,
      circle: { img1: CircleImg, text1: "Q2KN-G" },
    },
    {
      image: GreenIcon,
      text: "Massachusetts-Sites",
      x:
        localStorage.getItem("rect4.rect4.dx") !== null
          ? localStorage.getItem("rect4.rect4.dx")
          : 1100,
      y:
        localStorage.getItem("rect4.rect4.dy") !== null
          ? localStorage.getItem("rect4.rect4.dy")
          : 500,
      source: 4,
      target: 0,
      circle: {
        img1: CircleImg,
        img2: CircleImg,
        text1: "Q2KN-N",
        text2: "Q2KN-P",
      },
    },
    {
      image: GreenIcon,
      text: "California-Sites",
      x:
        localStorage.getItem("rect5.rect5.dx") !== null
          ? localStorage.getItem("rect5.rect5.dx")
          : 1400,
      y:
        localStorage.getItem("rect5.rect5.dy") !== null
          ? localStorage.getItem("rect5.rect5.dy")
          : 500,
      source: 5,
      target: 0,
      circle: {
        img1: CircleImg,
        img2: CircleImg,
        img3: CircleImg,
        img4: CircleImg,
        img5: CircleImg,
        img6: CircleImg,
        text1: "Q2KN-PJ",
        text2: "Q2KN-K",
        text3: "IO18-FW",
        text4: "I228-FW",
        text5: "Q2KN-73",
        text6: "Q2KN-N",
      },
    },
  ],
};
