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
    title: "Upload projects, Ideas & thoughts",
    text: "Get your blood tests delivered at let home collect sample from the victory of the managements.",
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: "Performance",
    title: "Meet and manage your Team",
    text: "Get your blood tests delivered at let home collect sample from the victory of the managements.",
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: "Content",
    title: "Meet your mentor",
    text: "Get your blood tests delivered at let home collect sample from the victory of the managements.",
  },
  // {
  //   id: 4,
  //   imgSrc: Setting,
  //   altText: "Customization",
  //   title: "Fund Your Project ",
  //   text: "Get your blood tests delivered at let home collect sample from the victory of the managements.",
  // },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="We are young and enthusiastic entrepreneurs aspiring to cover the gap between students and the industry."
          title="Our Exciting Features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              // text={item.text}
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
