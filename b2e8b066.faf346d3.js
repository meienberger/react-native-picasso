(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return g})),a.d(t,"rightToc",(function(){return N})),a.d(t,"default",(function(){return f}));var n=a(2),l=a(6),b=a(0),r=a.n(b),c=a(91),i=a(103),d=a(89),o=a(76),s=a.n(o);const m=37,p=39;var j=function(e){const{block:t,children:a,defaultValue:n,values:l,groupId:c}=e,{tabGroupChoices:o,setTabGroupChoices:j}=Object(i.a)(),[O,u]=Object(b.useState)(n),[g,N]=Object(b.useState)(!1);if(null!=c){const e=o[c];null!=e&&e!==O&&l.some(t=>t.value===e)&&u(e)}const h=e=>{u(e),null!=c&&j(c,e)},f=[],y=e=>{e.metaKey||e.altKey||e.ctrlKey||N(!0)},x=()=>{N(!1)};return Object(b.useEffect)(()=>{window.addEventListener("keydown",y),window.addEventListener("mousedown",x)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(d.a)("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(d.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),style:g?{}:{outline:"none"},key:e,ref:e=>f.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case m:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),y(e)},onFocus:()=>h(e),onClick:()=>{h(e),N(!1)},onPointerDown:()=>N(!1)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},b.Children.toArray(a).filter(e=>e.props.value===O)[0]))};var O=function(e){return r.a.createElement("div",null,e.children)},u={id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/getting-started"},g={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Native Picasso. It should cover enough for you to know how to build your own design system, and give you the background that you need to dive deeper into the more advanced parts of Picasso.",source:"@site/docs/2-getting-started.md",slug:"/getting-started",permalink:"/react-native-picasso/docs/getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/2-getting-started.md",version:"current",sidebar_label:"Getting started",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/react-native-picasso/docs/"},next:{title:"Customizing the theme",permalink:"/react-native-picasso/docs/customization"}},N=[{value:"Base (Available for all components)",id:"base-available-for-all-components",children:[]},{value:"View specific",id:"view-specific",children:[]},{value:"Text specific",id:"text-specific",children:[]},{value:"Examples",id:"examples",children:[]}],h={rightToc:N};function f(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Native Picasso. It should cover enough for you to know how to build your own design system, and give you the background that you need to dive deeper into the more advanced parts of Picasso."),Object(c.b)("h1",{id:"installation"},"Installation"),Object(c.b)("p",null,"Install the required packages in your React Native project:"),Object(c.b)(j,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(c.b)(O,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-picasso\n"))),Object(c.b)(O,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-native-picasso\n")))),Object(c.b)("h1",{id:"usage"},"Usage"),Object(c.b)("p",null,"Picasso ships with a set of drop in replacements components. You can import the following three components : View, SafeAreaView, Text"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { View, Text, SafeAreaView } from 'react-native-picasso'\n")),Object(c.b)("p",null,"All those components are sharing the same API as their usual react-native counter party. But they have an aditionnal prop called ",Object(c.b)("inlineCode",{parentName:"p"},"className"),". The className property consists of a string of pre-defined classes separated by a space."),Object(c.b)("p",null,"Classes are constructed the following way : ",Object(c.b)("inlineCode",{parentName:"p"},"{property}-{value}")),Object(c.b)("p",null,"Using this string, you can describe the apparence of your components."),Object(c.b)("p",null,"For example the following ",Object(c.b)("inlineCode",{parentName:"p"},'className="ml-md p-lg"')," would be translated to ",Object(c.b)("inlineCode",{parentName:"p"},"margin-left: medium; padding: large"),"."),Object(c.b)("p",null,"All the values are declared in a defaultTheme variable. Which is :"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"{\n  colors: {\n    background: '#eeeeee',\n    primary: '#00B386',\n    secondary: '#dedede',\n  },\n  textColors: {\n    primary: '#333333',\n    secondary: '#666666',\n    white: '#ffffff',\n  },\n  font: {\n    family: 'Helvetica',\n    sizes: {\n      sm: 12,\n      md: 16,\n      lg: 24,\n      xl: 32,\n      xxl: 40,\n    },\n    weights: {\n      light: '100',\n      normal: 'normal',\n      bold: 'bold',\n      extrabold: '800',\n    },\n  },\n  elevated: {\n    shadowColor: '#000000',\n    shadowOffset: { width: 0, height: 5 },\n    shadowOpacity: 0.2,\n    shadowRadius: 3,\n    elevation: 5,\n  },\n  radius: {\n    sm: 5,\n    md: 10,\n    lg: 20,\n    xl: 40,\n    round: 1000,\n  },\n  spacing: {\n    sm: 8,\n    md: 16,\n    lg: 24,\n    xl: 32,\n    xxl: 40,\n  },\n}\n")),Object(c.b)("p",null,'If we take the previous example, margin and padding are using the "spacing" values. So the final result of ',Object(c.b)("inlineCode",{parentName:"p"},'className="ml-md p-lg"')," would be :"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"{\n    marginLeft: 16,\n    padding: 24\n}\n")),Object(c.b)("p",null,"Here is a table of all the possible properties and values you can use inside a className."),Object(c.b)("h3",{id:"base-available-for-all-components"},"Base (Available for all components)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Possible values"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"p"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"padding"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"paddingLeft"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pr"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"paddingRight"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pt"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"paddingTop"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pb"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"paddingBottom"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"px"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"paddingHorizontal"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"py"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"paddingVertical"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--------"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-------------------"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"---------------------")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"m"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"margin"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ml"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"marginLeft"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mr"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"marginRight"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mt"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"marginTop"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mb"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"marginBottom"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mx"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"marginHorizontal"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"my"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"marginVertical"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"--------"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-------------------"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"---------------------")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"flex"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"row, column"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"flexDirection"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"flex"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"flex: value"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"alignself"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"center, flex-start, flex-end, stretch, baseline"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"alignSelf"))))),Object(c.b)("h3",{id:"view-specific"},"View specific"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Possible values"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"elevated"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"no value")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Adds a drop shadow to your view"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"radius"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, round"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"borderRadius"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bg"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"primary, secondary, background"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"backgroundColor"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"alignitems"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"center, flex-start, flex-end, stretch, baseline"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"alignItems"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"justifycontent"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"center, flex-start, flex-end, stretch, baseline"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"justifyContent"))))),Object(c.b)("h3",{id:"text-specific"},"Text specific"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Possible values"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"weight"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"light, normal, bold, extrabold"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"fontWeight"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"align"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"center, left, right, justify"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"textAlign"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"color"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"primary, secondary, white"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"color"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"size"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm, md, lg, xl, xxl"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"fontSize"))))),Object(c.b)("p",null,"Each value of each property is mapped to a specific section of the theme."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'<View className="p-md radius-md elevated">{/* Content */}<View>\n')),Object(c.b)("p",null,"Translates into"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<View style={{\n    padding: 16,\n    borderRadius: 10,\n    shadowColor: '#000000',\n    shadowOffset: { width: 0, height: 5 },\n    shadowOpacity: 0.2,\n    shadowRadius: 3,\n    elevation: 5\n}}>\n    {/* Content */}\n<View>\n")))}f.isMDXComponent=!0}}]);