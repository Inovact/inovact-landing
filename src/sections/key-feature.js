/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Vector from "assets/key-feature/vector.svg";
import Editing from "assets/key-feature/editing.svg";
import Speed from "assets/key-feature/speed.svg";

const data = [
  {
    id: 1,
    imgSrc: Vector,
    altText: "Vector",
    // title: "Vector Editing",
    text: "Help students to expand their network with students , mentors and Investors.",
  },
  {
    id: 2,
    imgSrc: Editing,
    altText: "Monitoring",
    // title: "Customize & Monitoring",
    text: "Enable students in developing latest tools and skills as per industry requirements through various technical training programs and placement training programs..",
  },
  {
    id: 3,
    imgSrc: Speed,
    altText: "Quality",
    // title: "Quality & Short-period",
    text: "Build a community inside engineering colleges which encourage students to develop their soft skills and hard skills.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="We are young and enthusiastic entrepreneurs aspiring to cover the gap between students and the industry."
          title="What we want to do?"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, "40px", null, "80px"],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ["35px 0", null, "40px 0"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    "& > div": {
      px: [0, "15px", null, "25px", null, "30px", "40px", "60px"],
    },
  },
};
