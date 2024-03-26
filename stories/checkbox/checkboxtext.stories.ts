import {Meta} from "@storybook/html";
import "@sp-design/token/lib/speeda-tokens.css";
import "./checkboxtext.css";

type Args = {
    label: string;
    disabled: false;
    indeterminate: false;
};

const meta: Meta<Args> = {
    title: "checkbox/checkboxText",
    tags: ["autodocs"],
    render: (args) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("checkWrapper");

        const label = document.createElement("label");
        label.classList.add("spdsCheckbox");

        const checkmark = document.createElement("span");
        checkmark.classList.add("spdsCheckbox__checkmark");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("input");
        checkbox.indeterminate = args.indeterminate;
        if (args.disabled) checkbox.setAttribute("disabled", "");

        const checktext = document.createElement("span");
        checktext.classList.add("spdsCheckbox__text");
        const initialtext = args.label ?? "checkbox";
        checktext.textContent = initialtext;

        wrapper.appendChild(label);
            label.appendChild(checkmark);
            checkmark.appendChild(checkbox);
        label.appendChild(checktext);
        wrapper.appendChild(label);




        //return labelElement;
        return wrapper;

    },
    argTypes: {
        label: {type: "string"},
        disabled: {type: "boolean"},
        indeterminate: {type: "boolean"},
    },
    args: {
        disabled: false,
        indeterminate: false,
    },
};

export default meta;
export const Default = {
    args: {
        disabled: false,
    },
};
