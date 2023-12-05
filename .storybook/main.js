import { mergeConfig } from 'vite';
import babel from "vite-plugin-babel";

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-vite",
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: (config) => {
    return mergeConfig(config, {
      plugins: [
        babel({
          babelConfig: {
            babelrc: false,
            configFile: false,
            plugins: [
              [
                "@babel/plugin-proposal-decorators",
                { loose: true, version: "2022-03" },
              ],
            ],
          },
        }),
      ],
    });
  },
};
export default config;
