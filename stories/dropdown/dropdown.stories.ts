import { Meta } from "@storybook/html";
import "@acab/reset.css";
import "@sp-design/token/lib/speeda-tokens.css";
import "../foundation.css";
import "./dropdown.css";

type Args = {
	disabled: false;
};
const meta: Meta<Args> = {
	title: "dropdown/dropdown",
	tags: ["autodocs"],
	render: (args) => {
		const disabled = args.disabled ? "disabled" : "";

		return `
                <div class="spdsDropdown">
                	<button class="spdsDropdown__selected" ${disabled} onclick="{

// document.addEventListener('click', function(event) {
//     // どっかをクリックしたらspdsDropdown__menuはすべて閉じる 
// 	const allspdsDropdownMenuElements = document.querySelectorAll('.spdsDropdown__menu');
//     if(allspdsDropdownMenuElements.length){
//             Array.from( allspdsDropdownMenuElements ).map((x) => x.classList.remove('-show'));
//      }
//     // クリックされた要素を取得
//   	const target = event.target;
//   	// トリガーをクリックしたらmenuを表示
// 	if (target.classList.contains('spdsDropdown__selected')) {
// 		const siblings = target.nextElementSibling;
// 		siblings.classList.add('-show');
//         const menuWidth = parseInt(getComputedStyle(siblings).width) +30;
//         siblings.style.width = menuWidth + 'px';
//       
// 		//for使うならmap使ったほうがナウイよ
// 		//Array.from( siblings ).map((x) => x.classList.add('-show'));
// 	}
//     //menuを選択したらmenu自体消す、選択したmemuのテキストを渡す
//   	if (target.classList.contains('spdsDropdown__item')) {
//          const selectedText = target.innerText;
//          const selected = target.closest('.spdsDropdown__menu').previousElementSibling;
//          selected.innerText = selectedText;
// 		const parents = target.closest('.spdsDropdown__menu');
// 		parents.classList.remove('-show');
//   	}
//
// });
  }">選んでちょ</button>
					<div class="spdsDropdown__menu">
					<ul class="spdsDropdown__menuInner">
						<li class="spdsDropdown__menuList"><button class="spdsDropdown__item">かつお</button></li>
						<li class="spdsDropdown__menuList"><button class="spdsDropdown__item">ひらめ</button></li>
						<li class="spdsDropdown__menuList"><button class="spdsDropdown__item">まぐろ</button></li>
						<li class="spdsDropdown__menuList"><button class="spdsDropdown__item">ふぐ</button></li>
						<li class="spdsDropdown__menuList"><button class="spdsDropdown__item">ウケグチノホソミオナガノオキナハギ</button></li>	
					</ul>
					</div>
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

