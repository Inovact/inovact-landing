/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Smart from "assets/feature/smart.svg";
import Winner from "assets/feature/winner.svg";
import Cloud from "assets/feature/cloud.svg";
import Setting from "assets/feature/setting.svg";
import Design from "assets/feature/design.svg";
import Chat from "assets/feature/chat.svg";

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: "Smart",
    title: "Student Instructors",
    text: "An opportunity for selected subject matter expert students to share their knowledge and skills with peers effectively and earn a side hustle too.",
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: "Performance",
    title: "Post course assessment",
    text: "Assessments are provided to students after the training program to evaluate the understanding of each student as well as the instructor.",
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: "Content",
    title: "Project Based Certification",
    text: "Projects are assigned to students to gain practical knowledge of concepts and certificates are issued only upon the successful completion of the project",
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: "Customization",
    title: "Affordable pricing",
    text: "Our training programs are priced in the range of Rs 49 – Rs 199",
  },
];

export default function ComFeature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader title="Our training program structure" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      "37px 0",
      null,
      "45px 30px",
      null,
      "50px 30px",
      null,
      null,
      "90px 70px",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
