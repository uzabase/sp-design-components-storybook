import { Meta } from "@storybook/html";
import "@acab/reset.css";
import "@sp-design/token/lib/speeda-tokens.css";
import "../foundation.css";
import "./dropdownAction.css";

type Args = {
	disabled: false;
};
const meta: Meta<Args> = {
	title: "dropdownAction/dropdownAction",
	tags: ["autodocs"],
	render: (args) => {
		const disabled = args.disabled ? "disabled" : "";

		return `
           <div class="spdsDropdownAction">
            <button class="spdsDropdownAction__selected" ${disabled} onclick="{
                document.addEventListener('click', function(event) {
                    
					// どっかをクリックしたらspdsDropdown__menuはすべて閉じる 
					const allspdsDropdownMenuElements = document.querySelectorAll('.spdsDropdownAction__menu');
					if(allspdsDropdownMenuElements.length){
							Array.from( allspdsDropdownMenuElements ).map((x) => x.classList.remove('-show'));
					 }
                    // クリックされた要素を取得
					const target = event.target;
					// トリガーをクリックしたらmenuを表示
					if (target.classList.contains('spdsDropdownAction__selected')) {
						const siblings = target.nextElementSibling;
						siblings.classList.add('-show');
						// const menuWidth = parseInt(getComputedStyle(siblings).width) +30;
						// siblings.style.width = menuWidth + 'px';
					  
						//for使うならmap使ったほうがナウイよ
						//Array.from( siblings ).map((x) => x.classList.add('-show'));
					}
					//menuを選択したらmenu自体消す
					if (target.classList.contains('spdsDropdownAction__item')) {
						const parents = target.closest('.spdsDropdownAction__menu');
						parents.classList.remove('-show');
					}
                }
                );
            }">資料自動作成</button>
            <div class="spdsDropdownAction__menu">
                <ul class="spdsDropdownAction__menuInner">
                    <li class="spdsDropdownAction__menuList">
                        <button class="spdsDropdownAction__item">標準タイプ：PDF</button>
                    </li>
                    <li class="spdsDropdownAction__menuList">
                        <button class="spdsDropdownAction__item">標準タイプ：PowerPoint</button>
                    </li>
                    <li class="spdsDropdownAction__menuList">
                        <button class="spdsDropdownAction__item">標準タイプ：Word</button>
                    </li>
                </ul>
            </div>
        </div>`;
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
