import React from "react";
import type { Preview } from "@storybook/react";
import "../src/index.css";
import "../src/globals.css";
import ThemeWrapper from "../src/components/wrappers/ThemeWrapper/ThemeWrapper";

const preview: Preview = {
  parameters: {
    layout: "centered",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <ThemeWrapper>
            <Story />
          </ThemeWrapper>
        </div>
      );
    },
  ],
};

export default preview;
