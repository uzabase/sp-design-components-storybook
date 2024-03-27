import { Meta } from "@storybook/html";
import "@acab/reset.css";
import "@sp-design/token/lib/speeda-tokens.css";
import "../foundation.css";
import "./radio.css";

type Args = {
	disabled: false;
};

const meta: Meta<Args> = {
	title: "radio/radio",
	tags: ["autodocs"],
	render: (args) => {
		const disabled = args.disabled ? "disabled" : "";
		return `
				<div class="radioWrapper">
				<label class="spdsRadio">
                  <span class="spdsRadio__radiomark">
                    <input type="radio" class="input" value="on" name="radio" ${disabled}>
                  </span>
                  <span class="spdsRadio__text">Text</span>
                </label>
                <label class="spdsRadio">
                  <span class="spdsRadio__radiomark">
                    <input type="radio" class="input" value="on" name="radio" ${disabled}>
                  </span>
                  <span class="spdsRadio__text">Text</span>
                </label>
                <label class="spdsRadio">
                  <span class="spdsRadio__radiomark">
                    <input type="radio" class="input" value="on" name="radio" ${disabled}>
                  </span>
                  <span class="spdsRadio__text">Text</span>
                </label>
                <label class="spdsRadio">
                  <span class="spdsRadio__radiomark">
                    <input type="radio" class="input" value="on" name="radio" ${disabled}>
                  </span>
                  <span class="spdsRadio__text">About the designated survivor tradition: At least one member of the president’s Cabinet is selected to stay behind from the speech each year in case of emergency. The designated survivor goes to a distant, secure and undisclosed location outside Washington while everyone else gathers to listen to the President’s address in the Capitol.</span>
                </label>
                <label class="spdsRadio">
                  <span class="spdsRadio__radiomark">
                    <input type="radio" class="input" value="on" name="radio" ${disabled}>
                  </span>
                  <span class="spdsRadio__text">sadaosegoahsegoihaeoghakldgnoiadhg;ahegoiaheorugb;akegaehgia;ogiha;eghbahegf;ahe;ga;eoigfhauewgkebga;oghoaenfaheufha;weofaoheoghabekjgnaskhgpahsegango;hesgoeabg;aeoihga;ebgaiehgbga;oehguegba;egoeu;abg:aeiohg;arng:aiehga;erngarohg</span>
                </label>
                <label class="spdsRadio">
                  <span class="spdsRadio__radiomark">
                    <input type="radio" class="input" value="on" name="radio" ${disabled}>
                  </span>
                  <span class="spdsRadio__text">日本語</span>
                </label>
                <label class="spdsRadio">
                  <span class="spdsRadio__radiomark">
                    <input type="radio" class="input" value="on" name="radio" ${disabled}>
                  </span>
                  <span class="spdsRadio__text">ザネリとジョバンニは思いながら訊きました。ぼくが行くと鼻を鳴らしてついてくるよああ行っておいで。</span>
                </label>
                <label class="spdsRadio">
                  <span class="spdsRadio__radiomark">
                    <input type="radio" class="input" value="on" name="radio" ${disabled}>
                  </span>
                  <span class="spdsRadio__text">日本語About the designated survivor tradition: At least one member of the president’s Cabinet is selected to stay behind from the speech each year in case of emergency.</span>
                </label>
                <label class="spdsRadio">
                  <span class="spdsRadio__radiomark">
                    <input type="radio" class="input" value="on" name="radio" ${disabled}>
                  </span>
                  <span class="spdsRadio__text">Text</span>
                </label>
                </div>
                
    `;
	},
	argTypes: {
		disabled: { type: "boolean" },
	},
	args: {
		disabled: false,
	},
};

export default meta;
export const Default = {
	args: {
		disabled: false,
	},
};
