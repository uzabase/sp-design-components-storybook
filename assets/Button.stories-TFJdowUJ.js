const d=`<button class="sample">
  ログイン
</button>
`,p={title:"Button",tags:["autodocs"],render:t=>{const s=document.createElement("div");s.innerHTML=d;const e=s.firstElementChild;return e.classList.add(t.color??"primary"),e.classList.add(t.size??"medium"),e.innerText=t.label??"Button",e},argTypes:{label:{type:"string"},color:{control:{type:"select"},options:["primary","secondary","active"]},size:{control:{type:"select"},options:["small","medium","large"]}}},r={color:"primary"},o={color:"secondary"};var a,c,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  color: "primary"
}`,...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var l,i,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  color: "secondary"
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const u=["Primary","Secondary"];export{r as Primary,o as Secondary,u as __namedExportsOrder,p as default};
