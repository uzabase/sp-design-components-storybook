import { Meta } from "@storybook/html";
// @ts-ignore
import html from "./Button.html?inline";

type Args = {
  label: string;
  color: "primary" | "secondary" | "active";
  size: "small" | "medium" | "large";
};

const meta: Meta<Args> = {
  title: "Button",
  tags: ['autodocs'],
  render: (args) => {
    const factory = document.createElement("div");
    factory.innerHTML = html;
    const button = factory.firstElementChild as HTMLElement;
    button.classList.add(args.color ?? "primary");
    button.classList.add(args.size ?? "medium");
    button.innerText = args.label ?? "Button";
    return button;
  },
  argTypes: {
    label: { type: "string" },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "active"]
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    }
  }
};

export default meta;

export const Primary = {
  color: "primary",
};

export const Secondary = {
  color: "secondary",
};
