/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";
const faqs = [
  {
    title: "When is the launch of Mobile application?",
    contents: (
      <div>
        The mobile application launch had been tentatively scheduled by the end
        of January,2022.
      </div>
    ),
  },
  {
    title: "How do i search on INOVACT?",
    contents: (
      <div>
        The search bar has been provided at the top of the website. You can
        search for people, skills, projects & ideas.
      </div>
    ),
  },
  {
    title: `How can I arrange my feed?`,
    contents: (
      <div>
        A sort option has been provided on the feed page. You can sort your post
        by newest, oldest, projects, ideas & thoughts.
      </div>
    ),
  },
  {
    title: ` How do i share my project/idea/thought`,
    contents: (
      <div>
        A share box has been provided for new project/idea/thought on the feed
        page named as, 'What's on your mind?'
      </div>
    ),
  },
  {
    title: `If I am interested in a project/idea, how can I notify the host about my interest?`,
    contents: (
      <div>
        You can notify the host by clicking on, 'Request to join the team'
        button. This is possible if the host is looking for team members and
        mentors.
      </div>
    ),
  },
  {
    title: ` Where can I find my settings page?`,
    contents: (
      <div>
        You'll be able to find a settings icon on the navigation bar, beside
        your profile.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: "section.faq" }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
