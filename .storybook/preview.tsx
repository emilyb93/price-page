import React from "react";
import type { Preview } from "@storybook/react";
import "../src/index.css";
import ThemeWrapper from "../src/components/wrappers/ThemeWrapper/ThemeWrapper";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeWrapper>
          <Story />
        </ThemeWrapper>
      );
    },
  ],
};

export default preview;
