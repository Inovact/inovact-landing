/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box } from "theme-ui";
import SectionHeader from "../components/section-header";
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

export default function ComKeyFeature() {
  return (
    <section
      sx={{ variant: "section.keyFeature" }}
      id="about"
      style={{ paddingBottom: 0, paddingTop: "5rem" }}
    >
      <Container>
        {/* 2 column grid for about section */}
        <SectionHeader title="About" />
        <Grid gap={[4, null, 10]} columns={[1, null, 2]}>
          <Box>
            <h2>What Does Inovact Student Community Program Do?</h2>
            <p>
              Inovact conducts a series of training programs and fun events to
              provide a platform for the student/student entrepreneur’s overall
              skill development.
            </p>
          </Box>
          <Box>
            <h2>What Is So Special About Inovact Student Community Program </h2>
            <p>ISCP is completely run, managed, and executed by students.</p>
          </Box>
        </Grid>
      </Container>
    </section>
  );
}
