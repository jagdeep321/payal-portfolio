import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "charcoal",
  colors: {
    charcoal: [
      "#f6f5f7",
      "#e4e1e8",
      "#c2bdce",
      "#9e96b3",
      "#7f7499",
      "#665b82",
      "#4f4666",
      "#39324b",
      "#24212A", // primary deep charcoal
      "#15131a",
    ],
    lavender: [
      "#f7f4fb",
      "#EAE2F5", // soft lilac
      "#d7c8ed",
      "#c4aee4",
      "#B8A4D8", // muted lavender
      "#9d84c5",
      "#8265b3",
      "#674d94",
      "#4f3b74",
      "#362852",
    ],
    blush: [
      "#fcf7f8",
      "#f8edf0",
      "#f1dbe1",
      "#E8C7CB", // blush accent
      "#ddb1b7",
      "#ce949c",
      "#bb7680",
      "#a25a64",
      "#7f444c",
      "#5c2f35",
    ],
  },
  fontFamily: "var(--font-plus-jakarta), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  headings: {
    fontFamily: "var(--font-outfit), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontWeight: "700",
  },
  cursorType: "pointer",
});
