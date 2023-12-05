import "@sp-design/components-web-components";

export default {
  title: "sp-button",
  tags: ['autodocs'],
  render(params) {
    const el = document.createElement("sp-button");
    el.setAttribute("label", params.label ?? "Button");
    el.setAttribute("label", params.label ?? "Button");
    return el;
  },
  argTypes: {
    label: { type: "string" },
    type: {
      control: { type: "select" },
      options: ["default", "destructive"],
    },
    appearance: {
      control: { type: "select" },
      options: ["outline", "fill", "text"],
    },
    size: {
      control: { type: "select" },
      options: ["medium", "large", "xLarge", "width160", "width80"],
    }
  },
}

export const Default = () => {
  return `<sp-button label="hoge" appearance="fill" disabled></sp-button>`
}

export const FilledButton = () => {
  return `<sp-button label="hoge" appearance="fill"></sp-button>`
}

export const OutlinedButton = () => {
  return `<sp-button label="hoge" appearance="outline"></sp-button>`
}

export const DisabledButton = () => {
  return `<sp-button label="hoge" disabled></sp-button>`
}
