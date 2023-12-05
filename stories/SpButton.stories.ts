import "@sp-design/components-web-components";

export default {
  title: "sp-button",
  tags: ['autodocs'],
  render(params) {
    const el = document.createElement("sp-button");
    el.setAttribute("label", params.label ?? "Button");
    params.type && el.setAttribute("type", params.type);
    params.appearance && el.setAttribute("appearance", params.appearance);
    params.size && el.setAttribute("size", params.size);
    params.disabled && el.setAttribute("disabled", params.disabled);
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
    },
    disabled: { type: "boolean" }
  },
}

export const Default = {
}

export const FilledButton = {
  args: {
    appearance: "fill",
  }
}

export const OutlinedButton = {
  args: {
    appearance: "outline",
  }
}

export const DisabledButton = {
  args: {
    disabled: true,
  }
}
