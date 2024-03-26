import { Meta } from "@storybook/html";
import "@sp-design/token/lib/speeda-tokens.css";
import "./button.css";

type Args = {
	label: string;
	size: "medium" | "large" | "xLarge" | "width160" | "width80";
	appearance: "outline" | "fill" | "text";
	type: "default" | "destructive";
	disabled: false;
};

const meta: Meta<Args> = {
	title: "button/button",
	tags: ["autodocs"],
	render: (args) => {
		const size = "size__" + args.size ?? "size__medium";
		const appearance =
			"appearance__" + args.appearance ?? "appearance__outline";
		const type = "type__" + args.type ?? "type__default";
		const disabled = args.disabled ? "disabled" : "";
		const label = args.label ?? "Button";
		return `
        <button ${disabled} class="base ${size} ${appearance} ${type}"><span>${label}</span></button>
    `;
	},
	argTypes: {
		label: { type: "string" },
		size: {
			control: { type: "select" },
			options: ["medium", "large", "xLarge", "width160", "width80"],
		},
		appearance: {
			control: { type: "select" },
			options: ["outline", "fill", "text"],
		},
		type: {
			control: { type: "select" },
			options: ["default", "destructive"],
		},
		disabled: { type: "boolean" },
	},
	args: {
		size: "medium",
		appearance: "fill",
		type: "default",
		disabled: false,
	},
};

export default meta;
export const Default = {
	args: {
		disabled: false,
	},
};
