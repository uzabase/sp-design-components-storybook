import "@sp-design/components-web-components";

export default {
  title: "sp-button",
  tags: ['autodocs'],
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
