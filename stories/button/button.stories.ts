import { Meta } from "@storybook/html";
import "@sp-design/token/lib/speeda-tokens.css";
import "./button.css";

type Args = {
	label: string;
	size: "Medium" | "Large" | "XLarge" | "Width160" | "Width80";
	appearance: "Outline" | "Fill" | "Text";
	type: "Default" | "Destructive";
	disabled: false;
};

const meta: Meta<Args> = {
	title: "button/button",
	tags: ["autodocs"],
	render: (args) => {
		const size = "-size" + args.size ?? "-sizeMedium";
		const appearance =
			"-appearance" + args.appearance ?? "-appearanceOutline";
		const type = "-type" + args.type ?? "-typeDefault";
		const disabled = args.disabled ? "disabled" : "";
		const label = args.label ?? "Button";
		return `
        <button ${disabled} class="spdsButton ${size} ${appearance} ${type}"><span>${label}</span></button>
    `;
	},
	argTypes: {
		label: { type: "string" },
		size: {
			control: { type: "select" },
			options: ["Medium", "Large", "XLarge", "Width160", "Width80"],
		},
		appearance: {
			control: { type: "select" },
			options: ["Outline", "Fill", "Text"],
		},
		type: {
			control: { type: "select" },
			options: ["Default", "Destructive"],
		},
		disabled: { type: "boolean" },
	},
	args: {
		size: "Medium",
		appearance: "Fill",
		type: "Default",
		disabled: false,
	},
};

export default meta;
export const Default = {
	args: {
		disabled: false,
	},
};
