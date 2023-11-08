import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import CardContainer from "./CardContainer";
import Wrapper from "../../assets/wrapper/CardCss";

const Card = () => {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={0} sx={{ gap: "20px" }}>
          <CardContainer
            title="Flights"
            desc="Search Flights & Places Hire to our most popular destinations"
            image="https://s3-alpha-sig.figma.com/img/386b/9416/e96ccdb0e5e6ed83359941973439ac12?Expires=1700438400&Signature=RzszW8MeqKkO2SnWMkJ~ykFr2-RdHLAgvUhy7fP3mAO0Lel3kK4iDCyKNkeHiMyXUXqKIzMo-51u-wVxhjXi8ofhBaLGPYJ7J8ZnOA8hV3jvJec9BsYciP3fwGglggCX-Tv0VrhHRwRP3BgUlcuS3W7Exh-30y4BGtKN1qNqCSea5LdsMDiST0nwpB5gsFb2b9v71M~4CtJugDOlxj5YKKkQC0SiXQIfjWJ5ZD4dXSoQ4DMDCVjk8zKYb6uP0Tm1CPWtjg0w5TLGRJnjrVnKziB-xFDrrnrvTLzQe78TACbc8A5apq2QzuMS9-3I~QQF0s9tFSBX39xw1Wp8-OIyFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            text="Show Flights"
          />
          <CardContainer
            title="Hotels"
            desc="Search hotels & Places Hire to our most popular destinations"
            image="https://s3-alpha-sig.figma.com/img/654e/85fd/80b8b446b1d71db54d7b5f47d8ad53a0?Expires=1700438400&Signature=ljgKGCnH43ye6SnHX8H-sbLsKCFCdIZFf6F03zczWWTXduf7Je9IKnFfXDBxegNGCF5RJfTIjJ-HI7mOgAFaevXjX4ugjzCAVN9SyG9gvEVhqtHbOD5IdV3hwPCO8GYQw5yYe8AUzrclSs8TUF1PCxIBTha~L6xSyUCqaBi-1QgmO8WnR-8TCOk3onZsjK90eku8xngcvWCSd-ipAJboqXwCCbyv08kwQ7oYP3dn6V-De95cQjxRX7ojXBqIFfxjyaV0tJBpOejGEAxuhYr4XMdyuo15ctGLPj-lPRj5mr0hAOhYnRmkKmL8X8ltnsxMm9Ddc7pfLgU1-Dia-LoIwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            text="Show Hotels"
          />
        </Grid>
      </Container>
    </Wrapper>
  );
};
export default Card;
