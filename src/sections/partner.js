/** @jsx jsx */
import { jsx, Container, Box, Grid } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";

import Partner from "assets/partner.png";
import SponsorOne from "assets/sponsor-one.png";
import SponsorTwo from "assets/sponsor-two.png";

const data = {
  subTitle: "",
  title: "Our Entrepreneurship Cell partners",
  description:
    "To improve the entrepreneurial activity in Undergrad Universities/colleges, Inovact hosts events like hackathon, Ideathon, Business model canvas competition, Shark Tank like competitions etc \
    Entrepreneurial talent is then diverted to E-cells and mentors that Inovact has partnered with \
    Inovact also conducts fun games like treasure hunt, squid game, open mic etc to always keep the students active and enthusiastic.",
  btnName: "Get Started",
  btnURL: "#",
};

export default function PartnerSection() {
  return (
    <section sx={{ variant: "section.partner" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
          />
        </Box>
        {/* a column with two rows for adding images */}
        <Grid sx={styles.grid}>
          <Box sx={styles.imageBox}>
            <Image src={SponsorOne} alt="Partner" />
          </Box>
          <Box sx={styles.imageBox}>
            <Image src={SponsorTwo} alt="Partner" />
          </Box>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", 450, 550, "350px", "410px", "650px"],
    mx: "auto",
    pb: ["30px", null, null, 0],
    ".description": {
      pr: [0, null, null, null, 4],
    },
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
    width: ["100%", null, null, "100%", "100%", "100%"],
  },
};
