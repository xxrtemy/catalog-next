import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [],
  framework: {
    name: "@storybook/nextjs",
    options: {
      appDirectory: true,
    },
  }
};

export default config;
