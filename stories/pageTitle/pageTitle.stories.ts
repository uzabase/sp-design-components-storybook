import { Meta } from "@storybook/html";
import { speedaIcons } from '@sp-design/icon/styles/speeda-icons'
import "@sp-design/token/lib/speeda-tokens.css";
import "./pagetitle.css";

type Args = {
	type: "None" | "RandD"| "Trend"| "China"| "Dashboard"| "Company"| "Industry"| "Expert"| "MandA"| "Tool";
};

const meta: Meta<Args> = {
	title: "Title/pageTitle",
	tags: ["autodocs"],
	render: (args) => {

		const None = `
			<div class="spdsPageTitle">
              <div class="spdsPageTitle__details">
                <h1 class="spdsPageTitle__main">
                  <span class="spdsPageTitle__title">None</span>
                </h1>
              </div>
            </div>`;
		const RandD = `
			<div class="spdsPageTitle">
              <div class="spdsPageTitle__details">
                <h1 class="spdsPageTitle__main">
                  <span class="spdsPageTitle__title">R&D</span>
                </h1>
              </div>
              <div class="spdsPageTitle__actions">
                <div class="spdsPageTitle__actionsItem">
                  <div class="spdsDropdownAction">
            <button class="spdsDropdownAction__selected" onclick="{
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
        </div>
                </div>
                </div>
              </div>
            </div>`;
		const Trend = `
			<div class="spdsPageTitle">
              <div class="spdsPageTitle__details">
                <h1 class="spdsPageTitle__main">
                  <span class="spdsPageTitle__title">Trend</span>
                </h1>
              </div>
              <div class="spdsPageTitle__actions">
                <div class="spdsPageTitle__actionsItem">
                  <button class="spdsButton -sizeMedium -appearanceOutline -typeDefault"><span>ダウンロード</span></button>
                </div>
              </div>
            </div>`;
		const China = `
			<div class="spdsPageTitle">
              <div class="spdsPageTitle__details">
                <h1 class="spdsPageTitle__main">
                  <span class="spdsPageTitle__title">China</span>
                </h1>
              </div>
              <div class="spdsPageTitle__actions">
                <div class="spdsPageTitle__actionsItem">
                  <button class="spdsButton -sizeMedium -appearanceOutline -typeDefault"><span>メール通知</span></button>
                </div>
              </div>
            </div>`;
		const Dashboard = `
			<div class="spdsPageTitle">
              <div class="spdsPageTitle__details">
                <h1 class="spdsPageTitle__main">
                  <span class="spdsPageTitle__title">Dashboard</span>
                </h1>
                <p class="spdsPageTitle__sub">
                  <span class="spdsPageTitle__subTitle">[グループ名]</span>
                </p>
              </div>
            </div>`;
		const Company = `
<div class="spdsPageTitle">
              <div class="spdsPageTitle__details">
                <h1 class="spdsPageTitle__main">
                  <img src="../../static/USA.png" title="アメリカ合衆国" class="spdsPageTitle__flag"/>
                  <span class="spdsPageTitle__title">Company</span>
                </h1>
                <p class="spdsPageTitle__sub">
                  <span class="spdsPageTitle__subTitle">(0000)</span>
                </p>
              </div>
              
              <div class="spdsPageTitle__actions">
              <div class="spdsPageTitle__actionsItem">
                  <div class="spdsDropdownAction">
            <button class="spdsDropdownAction__selected" onclick="{
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
            </div>
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
        </div>
        <div class="spdsPageTitle__actionsItem">
                  <button class="spdsButton -sizeMedium -appearanceOutline -typeDefault"><span>メール通知</span></button>
                </div>
                        <div class="spdsPageTitle__actionsItem">
                  <button class="spdsButton -sizeMedium -appearanceOutline -typeDefault -bookmark"></button>
                </div>
</div>
</div>`;
		const Industry = `<div class="bbb">Industry</div>`;
		const Expert = `<div class="bbb">Expert</div>`;
		const MandA = `<div class="bbb">MandA</div>`;
		const Tool = `<div class="bbb">Tool</div>`;

		const values: { [key: string]: any } = {
			None,
			RandD,
			Trend,
			China,
			Dashboard,
			Company,
			Industry,
			Expert,
			MandA,
			Tool
		};
		const varName = args.type;
		const result = values[varName];
		return result !== undefined ? result : null;
		},
	argTypes: {
		type: {
			control: { type: "select" },
			options: ["None","RandD","Trend","China","Dashboard","Company","Industry","Expert","MandA","Tool"],
		}
	},
	args: {
		type: "None",
	},
};

export default meta;
export const Default = {
	args: {
	},
};
