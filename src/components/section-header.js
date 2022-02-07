import React from "react";
import { Box, Text, Heading } from "theme-ui";

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: "sectionHeader" }}>
      <Heading
        as="h2"
        style={{
          maxWidth: "1000px",
        }}
        sx={{
          variant: "sectionHeader.title",
          color: isWhite ? "white" : "heading_secondary",
        }}
      >
        {title}
      </Heading>
      <Text
        style={{
          textTransform: "lowercase",
          fontSize: "0.9rem",
          fontWeight: "300",
        }}
        as="p"
        sx={{
          variant: "sectionHeader.subTitle",
          color: isWhite ? "white" : "heading",
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
    </Box>
  );
}
