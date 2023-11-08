import {
  Button,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
// import Wrapper from "../../assets/wrapper/Reviews";
import ReviewCard from "./ReviewCard";
import Wrapper from "../../assets/wrapper/Reviews";
import ContentTitle from "./contentTitle";

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
          <ReviewCard
            title="A real sense of community, nurtured"
            desc="Really appreciate the help and support from the staff during these tough times Shoutout to Katie for helping me always even when I was out of the country And always available when needed"
            name="Olga"
            city="Weave Studios – Kai Tak"
            rating={5}
            img="https://s3-alpha-sig.figma.com/img/9ef0/fb29/2d9afcfc8f6b2105b415f4d1a3703551?Expires=1700438400&Signature=G5lJehMRmMumo71oIrUunnSbL~dXrW~SIF3ikl5l0pb1B3362zlbNLwJAZFvilpGyA8w2WytdtF9t56wYJf0d4ZJekiTBt3bchb8dCDtoEj3zAr1MHsDVW9uG9Wm9OHyTC3E94WIgsDDWrOYX0m-DQNPcvtvSf7a1vdn2FfQjdgx0B5mmvDHcXFHIPpVIkjOMt1~duLjIY33DJIg2ixSwtvS~eSNVgWCytw0XDgDk~IhI3s9S7Ik1eZnd9fUwyYKGMt-U0Vyd~X8katPnMrMCXgAnlhkUFj8T~oF6wv9tUyv1vRmc-JryfNL12wXiFVGxhqXAdsPpEkbsxo5srJ9~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />

          <ReviewCard
            title="A real sense of community, nurtured"
            desc="Really appreciate the help and support from the staff during these tough times Shoutout to Katie for helping me always even when I was out of the country And always available when needed"
            name="Olga"
            city="Weave Studios – Kai Tak"
            rating={5}
            img="https://s3-alpha-sig.figma.com/img/9ef0/fb29/2d9afcfc8f6b2105b415f4d1a3703551?Expires=1700438400&Signature=G5lJehMRmMumo71oIrUunnSbL~dXrW~SIF3ikl5l0pb1B3362zlbNLwJAZFvilpGyA8w2WytdtF9t56wYJf0d4ZJekiTBt3bchb8dCDtoEj3zAr1MHsDVW9uG9Wm9OHyTC3E94WIgsDDWrOYX0m-DQNPcvtvSf7a1vdn2FfQjdgx0B5mmvDHcXFHIPpVIkjOMt1~duLjIY33DJIg2ixSwtvS~eSNVgWCytw0XDgDk~IhI3s9S7Ik1eZnd9fUwyYKGMt-U0Vyd~X8katPnMrMCXgAnlhkUFj8T~oF6wv9tUyv1vRmc-JryfNL12wXiFVGxhqXAdsPpEkbsxo5srJ9~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <ReviewCard
            title="A real sense of community, nurtured"
            desc="Really appreciate the help and support from the staff during these tough times Shoutout to Katie for helping me always even when I was out of the country And always available when needed"
            name="Olga"
            city="Weave Studios – Kai Tak"
            rating={5}
            img="https://s3-alpha-sig.figma.com/img/9ef0/fb29/2d9afcfc8f6b2105b415f4d1a3703551?Expires=1700438400&Signature=G5lJehMRmMumo71oIrUunnSbL~dXrW~SIF3ikl5l0pb1B3362zlbNLwJAZFvilpGyA8w2WytdtF9t56wYJf0d4ZJekiTBt3bchb8dCDtoEj3zAr1MHsDVW9uG9Wm9OHyTC3E94WIgsDDWrOYX0m-DQNPcvtvSf7a1vdn2FfQjdgx0B5mmvDHcXFHIPpVIkjOMt1~duLjIY33DJIg2ixSwtvS~eSNVgWCytw0XDgDk~IhI3s9S7Ik1eZnd9fUwyYKGMt-U0Vyd~X8katPnMrMCXgAnlhkUFj8T~oF6wv9tUyv1vRmc-JryfNL12wXiFVGxhqXAdsPpEkbsxo5srJ9~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
        </Grid>
      </div>
    </Wrapper>
  );
};
export default Reviews;
