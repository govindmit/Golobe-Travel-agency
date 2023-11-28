import { Grid } from "@mui/material";
import ReviewCard from "./ReviewCard";
import Wrapper from "../../assets/wrapper/Reviews";
import ContentTitle from "./contentTitle";
import ReviewImg1 from "../../assets/images/review-img/rev-img1.png";
import ReviewImg2 from "../../assets/images/review-img/rev-img2.png";
import ReviewImg3 from "../../assets/images/review-img/rev-img3.png";

const data = [
  {
    id: 1,
    title: "A real sense of community, nurtured",
    desc: "Really appreciate the help and support from the staff during these tough times Shoutout to Katie for helping me always even when I was out of the country And always available when needed",
    name: "Olga",
    city: "Weave Studios – Kai Tak",
    rating: "5",
    img: ReviewImg1,
  },
  {
    id: 2,
    title: "A real sense of community, nurtured",
    desc: "Really appreciate the help and support from the staff during these tough times Shoutout to Katie for helping me always even when I was out of the country And always available when needed",
    name: "Olga",
    city: "Weave Studios – Kai Tak",
    rating: "5",
    img: ReviewImg2,
  },
  {
    id: 3,
    title: "A real sense of community, nurtured",
    desc: "Really appreciate the help and support from the staff during these tough times Shoutout to Katie for helping me always even when I was out of the country And always available when needed",
    name: "Olga",
    city: "Weave Studios – Kai Tak",
    rating: "5",
    img: ReviewImg3,
  },
];

const Reviews = () => {
  return (
    <Wrapper>
      <div className="main-div">
        <ContentTitle
          title="Reviews"
          desc="What people says about Golobe facilities"
          btn="see all"
        />
        <Grid container spacing={3}>
          {data.map((value) => (
            <ReviewCard key={value.id} {...value} />
          ))}
        </Grid>
      </div>
    </Wrapper>
  );
};
export default Reviews;
