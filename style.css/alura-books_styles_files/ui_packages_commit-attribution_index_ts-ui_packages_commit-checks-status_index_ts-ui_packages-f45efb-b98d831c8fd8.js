"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-f45efb"],{41156:(e,t,r)=>{r.d(t,{A:()=>a});let a={diffSquare:"DiffSquares-module__diffSquare--h5kjy",addition:"DiffSquares-module__addition--jeNtt",deletion:"DiffSquares-module__deletion--hKV3q",neutral:"DiffSquares-module__neutral--VlyoP"}},29089:(e,t,r)=>{r.d(t,{h:()=>v,j:()=>O});var a=r(74848),i=r(57402),l=r(22726),n=r(75177),o=r(86519);function s(e){return e.path?.startsWith("/apps/")??!1}var c=r(80577);function d({renderTooltip:e,author:t,children:r}){return!1===e?(0,a.jsx)(a.Fragment,{children:r}):(0,a.jsx)(c.m,{text:`commits by ${t.login}`,direction:"se",children:r})}try{d.displayName||(d.displayName="AuthorTooltip")}catch{}var h=r(14744),u=r.n(h),x=r(96540);let f={fontWeight:"bold",fontColor:"fg.default",includeTooltip:!1,avatarSize:void 0},p=(0,x.createContext)(f);function m({authorSettings:e,children:t}){let r=u()(f,e??{});return(0,a.jsx)(p.Provider,{value:r,children:t})}function g(){return(0,x.useContext)(p)||f}try{p.displayName||(p.displayName="AuthorSettingsContext")}catch{}try{m.displayName||(m.displayName="AuthorSettingsProvider")}catch{}var y=r(30631),j=r(69909);let b=["150px","150px","200px"];function N({displayName:e,authorSettings:t}){return(0,a.jsx)(y.A,{title:e,maxWidth:b,inline:!0,children:(0,a.jsx)(j.A,{sx:{fontWeight:t.fontWeight,whiteSpace:"nowrap",color:t.fontColor},children:e})})}try{N.displayName||(N.displayName="AuthorDisplayName")}catch{}function v({author:e,repo:t,sx:r={}}){let c=g();if(!e)return null;let h=(0,a.jsx)(i.r,{"aria-label":`${e.login||"author"}`,src:e.avatarUrl,alt:`${e.login||"author"}`,sx:{mr:2,mt:"-1px",ml:"1px"},size:c.avatarSize,square:s(e)});return(0,a.jsxs)(n.A,{sx:{display:"flex",flexDirection:"row",alignItems:"center",...r},"data-testid":"author-avatar",children:[e.path?(0,a.jsx)(o.A,{href:e.path,"data-testid":"avatar-icon-link","data-hovercard-url":e.login?(0,l.dC)({owner:e.login}):void 0,children:h}):h,e.login?(0,a.jsx)(d,{author:e,renderTooltip:c.includeTooltip,children:(0,a.jsx)(o.A,{muted:!0,href:(0,l.jQ)({repo:t,author:e.login}),"aria-label":`commits by ${e.login}`,"data-hovercard-url":(0,l.dC)({owner:e.login}),sx:{fontWeight:c.fontWeight,whiteSpace:"nowrap",color:c.fontColor,"&:hover":{color:c.fontColor,textDecoration:"underline"}},children:e.login})}):(0,a.jsx)(N,{displayName:e.displayName,authorSettings:c})]})}try{v.displayName||(v.displayName="AuthorAvatar")}catch{}var C=r(17909),S=r(86079);function k({authors:e,repo:t}){let r=e.length,[i,l]=(0,x.useState)(!1),n=(0,x.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.A,{as:"button","aria-label":`Show ${r} authors`,"data-testid":"authors-dialog-anchor",onClick:()=>{l(!0)},sx:{mx:1},ref:n,muted:!0,children:[r," ","people"]}),i&&(0,a.jsx)(S.l,{title:`${r} authors`,onClose:()=>{l(!1),setTimeout(()=>n.current?.focus(),25)},width:"medium",height:r>=12?"small":"auto",renderBody:()=>(0,a.jsx)(C.l,{sx:{overflowY:"auto",py:2},"data-testid":"contributor-dialog-list",children:e.map((e,r)=>(0,a.jsx)(A,{author:e,repo:t},`${e.login}_${r}`))})})]})}function A({author:e,repo:t}){return(0,a.jsxs)(C.l.LinkItem,{sx:{display:"flex",flexDirection:"row",fontSize:1,py:2,color:"fg.default","&:hover":{backgroundColor:"canvas.subtle"}},"data-testid":"contributor-dialog-row",href:(0,l.jQ)({repo:t,author:e.login??""}),children:[(0,a.jsx)(i.r,{src:e.avatarUrl,alt:e.login??e.displayName,sx:{mr:2},"aria-hidden":"true",square:s(e)}),(0,a.jsx)(y.A,{inline:!0,title:e.login??e.displayName??"",children:e.login??e.displayName})]})}try{k.displayName||(k.displayName="AuthorsDialog")}catch{}try{A.displayName||(A.displayName="AuthorRow")}catch{}var w=r(90305);function D({authors:e,onBehalfOf:t}){let r=g();return(0,a.jsxs)(w.A,{children:[e.slice(0,5).map((e,t)=>(0,a.jsx)(i.r,{"data-testid":"commit-stack-avatar",src:e.avatarUrl,alt:e.login??e.displayName,"data-hovercard-url":(0,l.dC)({owner:e.login??""}),square:s(e),size:r.avatarSize},`${e.login}_${t}`)),t&&(0,a.jsx)(i.r,{"data-testid":"commit-stack-avatar",src:t.avatarUrl,alt:t.login??t.displayName,"data-hovercard-url":(0,l.qs)({owner:t.login??""}),square:!0,size:r.avatarSize},`${t.login}_on_behalf_of`)]})}try{D.displayName||(D.displayName="CommitAuthorStack")}catch{}function I({author:e,repo:t,sx:r={}}){let i=g();return e?(0,a.jsx)(n.A,{sx:{display:"flex",flexDirection:"row",alignItems:"center",...r},"data-testid":"author-link",children:e.login?(0,a.jsx)(d,{author:e,renderTooltip:i.includeTooltip,children:(0,a.jsx)(o.A,{muted:!0,href:(0,l.jQ)({repo:t,author:e.login}),"aria-label":`commits by ${e.login}`,"data-hovercard-url":(0,l.dC)({owner:e.login}),sx:{fontWeight:i.fontWeight,whiteSpace:"nowrap",color:i.fontColor,"&:hover":{color:i.fontColor,textDecoration:"underline"}},children:e.login})}):(0,a.jsx)(N,{displayName:e.displayName,authorSettings:i})}):null}try{I.displayName||(I.displayName="AuthorLink")}catch{}var $=r(20053);let T={orgLink:"OrgLink-module__orgLink--pOGLv"};function L({org:e,className:t}){return e?(0,a.jsx)("div",{className:(0,$.A)("d-flex flex-row flex-items-center",t),children:(0,a.jsx)(o.A,{muted:!0,href:e.path,"aria-label":`${e.login}'s org home page`,"data-hovercard-url":(0,l.qs)({owner:e.login}),className:T.orgLink,children:e.login})}):null}try{L.displayName||(L.displayName="OrgLink")}catch{}function B({author:e,repo:t}){return(0,a.jsx)(v,{author:e,repo:t})}function z({author:e,committer:t,committerAttribution:r,onBehalfOf:i,repo:l}){let n=[e];return t&&r&&n.push(t),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{authors:n,onBehalfOf:i}),(0,a.jsx)(I,{author:e,repo:l,sx:{pl:1}})]})}function P({authors:e,onBehalfOf:t,repo:r}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{authors:e,onBehalfOf:t}),e.map((t,i)=>(0,a.jsxs)(x.Fragment,{children:[(0,a.jsx)(I,{author:t,repo:r,sx:{pl:1}}),i!==e.length-1&&(0,a.jsx)("span",{className:"pl-1",children:"and"})]},`${t.login}_${i}`))]})}function _({authors:e,onBehalfOf:t,repo:r}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(D,{authors:e,onBehalfOf:t}),(0,a.jsx)(k,{authors:e,repo:r})]})}function O({authors:e,committer:t,committerAttribution:r,onBehalfOf:i,repo:l,children:o,includeVerbs:s=!0,authorSettings:c}){let d=1===e.length&&!r&&!i,h=1===e.length&&(r||i),u=2===e.length&&!r,x=e[0],f=s?"pl-1":"";return(0,a.jsx)(n.A,{sx:{display:"flex",flexDirection:"row",flexWrap:["wrap","wrap","wrap","nowrap"],alignItems:"center"},children:(0,a.jsxs)(m,{authorSettings:c,children:[d&&x&&(0,a.jsx)(B,{author:x,repo:l}),h&&x&&(0,a.jsx)(z,{author:x,committer:t,committerAttribution:r,onBehalfOf:i,repo:l}),u&&(0,a.jsx)(P,{authors:e,onBehalfOf:i,repo:l}),!d&&!h&&!u&&(0,a.jsx)(_,{authors:e,onBehalfOf:i,repo:l}),r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"pl-1",children:s?"authored and":"and"}),(0,a.jsx)(I,{author:t,repo:l,sx:{pl:1}}),(0,a.jsx)("span",{className:f,children:s&&"committed"})]}):(0,a.jsx)("span",{className:f,children:s&&"committed"}),i&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"pl-1",children:"on behalf of"}),(0,a.jsx)(L,{org:i,className:"pl-1"})]}),o]})})}try{B.displayName||(B.displayName="SingleAuthor")}catch{}try{z.displayName||(z.displayName="AuthorByline")}catch{}try{P.displayName||(P.displayName="TwoAuthors")}catch{}try{_.displayName||(_.displayName="MultipleAuthors")}catch{}try{O.displayName||(O.displayName="CommitAttribution")}catch{}},99306:(e,t,r)=>{r.d(t,{xC:()=>j,B6:()=>v,ym:()=>k});var a=r(74848),i=r(59857),l=r(30729),n=r(69909),o=r(55847),s=r(94977),c=r(87330),d=r(96540),h=r(75177),u=r(38553),x=r(86079),f=r(57402),p=r(86519);function m({checkRun:e}){let{icon:t,iconColor:r}=function(e){switch(e){case"check":return{icon:i.CheckIcon,iconColor:"success.fg"};case"dot-fill":return{icon:i.DotFillIcon,iconColor:"attention.fg"};case"stop":return{icon:i.StopIcon,iconColor:"muted.fg"};case"issue-reopened":return{icon:i.IssueReopenedIcon,iconColor:"muted.fg"};case"clock":return{icon:i.ClockIcon,iconColor:"attention.fg"};case"square-fill":return{icon:i.SquareFillIcon,iconColor:"fg.default"};case"skip":return{icon:i.SkipIcon,iconColor:"muted.fg"};case"alert":return{icon:i.AlertIcon,iconColor:"danger.fg"};default:return{icon:i.XIcon,iconColor:"danger.fg"}}}(e.icon),o="in_progress"===e.state;return(0,a.jsxs)(h.A,{"data-testid":"check-run-item",as:"li",sx:{display:"flex",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"border.default",backgroundColor:"canvas.subtle",py:2,pr:3,pl:"12px",alignItems:"center"},children:[(0,a.jsxs)(h.A,{sx:{alignSelf:"center",display:"flex"},children:[o?(0,a.jsx)(h.A,{sx:{height:"16px",width:"16px",minWidth:"16px",alignSelf:"center",mx:"7px"},children:(0,a.jsxs)("svg",{fill:"none",viewBox:"0 0 16 16",className:"anim-rotate","aria-hidden":"true",role:"img",children:[(0,a.jsx)("path",{opacity:".5",d:"M8 15A7 7 0 108 1a7 7 0 000 14v0z",stroke:"#dbab0a",strokeWidth:"2"}),(0,a.jsx)("path",{d:"M15 8a7 7 0 01-7 7",stroke:"#dbab0a",strokeWidth:"2"}),(0,a.jsx)("path",{d:"M8 12a4 4 0 100-8 4 4 0 000 8z",fill:"#dbab0a"})]})}):(0,a.jsx)(l.A,{icon:t,sx:{color:r,margin:"0px 7px",alignSelf:"center"}}),(0,a.jsx)(s.A,{"aria-label":e.avatarDescription,direction:"e",children:(0,a.jsx)(p.A,{href:e.avatarUrl,sx:{mr:2},"aria-label":"Avatar",children:(0,a.jsx)(f.r,{square:!0,src:e.avatarLogo,sx:{backgroundColor:e.avatarBackgroundColor}})})})]}),(0,a.jsxs)(n.A,{sx:{fontSize:"13px",color:"fg.muted"},children:[(0,a.jsxs)(n.A,{sx:{fontWeight:"bold",color:"fg.default",mr:"2px"},children:[e.name," "]}),e.pending?(0,a.jsx)(n.A,{sx:{fontStyle:"italic"},children:e.additionalContext}):e.additionalContext,e.description&&(0,a.jsxs)(n.A,{children:[" ","- ",e.pending?(0,a.jsx)(n.A,{sx:{fontStyle:"italic"},children:e.description}):e.description]})]}),(0,a.jsx)(p.A,{href:e.targetUrl,sx:{pl:"12px",fontSize:"13px",marginLeft:"auto"},children:"Details"})]})}try{m.displayName||(m.displayName="CheckRunItem")}catch{}function g({checkRuns:e}){return(0,a.jsx)(h.A,{as:"ul",sx:{display:"flex",flexDirection:"column",maxHeight:["230px","380px"],overflow:"auto"},children:e.map((e,t)=>(0,a.jsx)(m,{checkRun:e},t))})}try{g.displayName||(g.displayName="ChecksStatusBadgeFooter")}catch{}function y({checksHeaderState:e}){switch(e){case"SUCCEEDED":return(0,a.jsx)(n.A,{sx:{fontWeight:"bold",fontSize:2},children:"All checks have passed"});case"FAILED":return(0,a.jsx)(n.A,{sx:{color:"var(--fgColor-danger, var(--color-danger-fg))",fontWeight:"bold",fontSize:2},children:"All checks have failed"});case"PENDING":return(0,a.jsx)(n.A,{sx:{color:"var(--fgColor-attention, var(--color-attention-fg))",fontWeight:"bold",fontSize:2},children:"Some checks haven\u2019t completed yet"});default:return(0,a.jsx)(n.A,{sx:{color:"var(--fgColor-danger, var(--color-danger-fg))",fontWeight:"bold",fontSize:2},children:"Some checks were not successful"})}}try{y.displayName||(y.displayName="HeaderState")}catch{}function j(e){let{combinedStatus:t,isOpen:r,onDismiss:i}=e,l=t?(0,a.jsx)(y,{checksHeaderState:t.checksHeaderState}):"Loading...";return r?(0,a.jsx)(x.l,{onClose:i,sx:{overflowY:"auto",backgroundColor:"canvas.default",boxShadow:"none",border:"1px solid",borderColor:"border.default",borderBottom:0},title:l,subtitle:t?t.checksStatusSummary:void 0,width:"xlarge",renderBody:()=>(0,a.jsx)(x.l.Body,{sx:{padding:0},children:t?(0,a.jsx)(g,{checkRuns:t.checkRuns}):(0,a.jsx)(h.A,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,a.jsx)(u.A,{size:"medium"})})})}):null}try{j.displayName||(j.displayName="CheckStatusDialog")}catch{}let b={success:{circled:i.CheckCircleIcon,filled:i.CheckCircleFillIcon,default:i.CheckIcon,color:"var(--bgColor-success-emphasis, var(--color-success-emphasis))"},pending:{circled:i.CircleIcon,filled:i.DotFillIcon,default:i.DotFillIcon,color:"var(--bgColor-attention-emphasis, var(--color-scale-yellow-4))"},error:{circled:i.XCircleIcon,filled:i.XCircleFillIcon,default:i.XIcon,color:"var(--bgColor-danger-emphasis, var(--color-scale-red-4))"}};function N({descriptionText:e,icon:t,iconColor:r}){return(0,a.jsxs)("span",{"data-testid":"checks-status-badge-icon-only",children:[(0,a.jsx)(l.A,{icon:t,"aria-label":"See all checks",sx:{color:r}}),e&&(0,a.jsxs)(n.A,{children:[" ",e]})]})}function v(e){let{statusRollup:t,combinedStatus:r,variant:i="default",disablePopover:l,buttonSx:n,size:h="medium",descriptionText:u="",onWillOpenPopup:x}=e,[f,p]=(0,d.useState)(!1),m=(0,d.useId)(),g=(0,d.useRef)(null),y=b[t],{icon:v,iconColor:C}={icon:y?.[i]||b.error[i],iconColor:y?.color||b.error.color};return l?(0,a.jsx)(N,{descriptionText:u,icon:v,iconColor:C}):(0,a.jsxs)(a.Fragment,{children:[u?(0,a.jsx)(o.Q,{"data-testid":"checks-status-badge-button",leadingVisual:v,variant:"invisible",size:h,"aria-label":r?.checksStatusSummary??`Status checks: ${t}`,sx:{p:1,color:"fg.default",fontWeight:"normal",svg:{color:C},...n},ref:g,onClick:()=>{x?.(),p(!0)},children:u}):(0,a.jsx)(s.A,{id:m,"aria-label":r?.checksStatusSummary??t,direction:"se",sx:{mr:2},children:(0,a.jsx)(c.K,{unsafeDisableTooltip:!0,"data-testid":"checks-status-badge-icon",icon:v,variant:"invisible",size:h,"aria-labelledby":m,sx:{py:0,px:0,svg:{color:C},":hover:not([disabled])":{bg:"pageHeaderBg"},...n},ref:g,onClick:()=>{x?.(),p(!0)}})}),f&&(0,a.jsx)(j,{combinedStatus:r,isOpen:f,onDismiss:()=>{p(!1),setTimeout(()=>{g.current?.focus()},0)}})]})}try{N.displayName||(N.displayName="IconOnlyStatus")}catch{}try{v.displayName||(v.displayName="ChecksStatusBadge")}catch{}var C=r(22726),S=r(78478);function k(e,t){let[r,a]=(0,d.useState)(),[i,l]=(0,d.useState)();return[r,(0,d.useCallback)(async()=>{if(i!==e&&(l(e),a(void 0),e)){let r=(0,C.vk)(t,e),i=await (0,S.lS)(r);a(await i.json())}},[e,i,t])]}},89362:(e,t,r)=>{r.d(t,{o:()=>a});function a(e,t){let r,a,i;let l=e.slice(1).search(/\S/)||0;return e.includes("	")&&(r=e.split(RegExp("	")).length-1),{getPaddingLeft:function(){return a||(a=r?`${t*r*7}px`:l<1?"0px":`${7*l}px`)},getTextIndent:function(){return i||(i=r?`-${t*r*7+t}px`:l<1?"0px":`-${7*l+.5}px`)}}}},40582:(e,t,r)=>{function a(e){return`line-${e}`}function i(e,t,r){return`${e}${"left"===t?"L":"R"}${r}`}function l(e){return"DELETION"===e?"left":"right"}function n(e,t=!1,r=!1){if(r)return"var(--bgColor-attention-muted, var(--color-attention-subtle))";switch(e){case"ADDITION":return t?"var(--diffBlob-addition-bgColor-num, var(--color-diff-blob-addition-num-bg))":"var(--diffBlob-addition-bgColor-line, var(--color-diff-blob-addition-line-bg))";case"DELETION":return t?"var(--diffBlob-deletion-bgColor-num, var(--color-diff-blob-deletion-num-bg))":"var(--diffBlob-deletion-bgColor-line, var(--color-diff-blob-deletion-line-bg))";case"HUNK":case"EMPTY":return t?"var(--diffBlob-hunk-bgColor-num, var(--color-diff-blob-hunk-num-bg))":"var(--bgColor-accent-muted, var(--color-accent-subtle))";default:return}}function o(e){let t=0;if(e)for(let r of e)t=Math.max(t,r?.left??0,r?.right??0);return Math.max(8*t.toString().length+20,40).toString()}r.d(t,{IQ:()=>i,Sq:()=>a,XU:()=>l,c7:()=>o,gK:()=>n})},75096:(e,t,r)=>{r.d(t,{$e:()=>c.$,Ah:()=>x.A,Jg:()=>a.J,P3:()=>o.P,P4:()=>s.P,Qe:()=>h.Q,nq:()=>i.n,oW:()=>u.o,uP:()=>l.u,wj:()=>d.w,zl:()=>n.z});var a=r(87124),i=r(8874),l=r(48301),n=r(45848),o=r(35024),s=r(6534),c=r(14570),d=r(58983),h=r(95573),u=r(89362),x=r(68424)},68424:(e,t,r)=>{function a(e){return"LEFT"===e?"-":"RIGHT"===e?"+":""}function i({startDiffSide:e,endDiffSide:t,originalStartLine:r,originalEndLine:i}){return e&&t&&"number"==typeof r&&"number"==typeof i?0===r&&1===i&&e===t?"-1 to +1":e===t&&r===i?`${a(e)}${r}`:`${a(e)}${r} to ${a(t)}${i}`:""}r.d(t,{A:()=>i})},24240:(e,t,r)=>{r.d(t,{H:()=>i});var a=r(30159);function i(e,t){let{csrf_tokens:r}=(0,a.B)();return r?.[e]?.[t]}},53470:(e,t,r)=>{r.d(t,{d:()=>n,t:()=>o});var a=r(74848),i=r(96540);let l=i.createContext({});function n({repository:e,children:t}){return(0,a.jsxs)(l.Provider,{value:e,children:[" ",t," "]})}function o(){return i.useContext(l)}try{l.displayName||(l.displayName="CurrentRepositoryContext")}catch{}try{n.displayName||(n.displayName="CurrentRepositoryProvider")}catch{}},80654:(e,t,r)=>{r.d(t,{Q:()=>n,i:()=>o});var a=r(74848),i=r(96540);let l=i.createContext(void 0);function n({user:e,children:t}){return(0,a.jsxs)(l.Provider,{value:e,children:[" ",t," "]})}function o(){return i.useContext(l)}try{l.displayName||(l.displayName="CurrentUserContext")}catch{}try{n.displayName||(n.displayName="CurrentUserProvider")}catch{}},87124:(e,t,r)=>{r.d(t,{J:()=>n});var a=r(74848),i=r(93792),l=r(84597);let n=({dragging:e,isHighlighted:t,isLeftColumn:r,isSplit:n,lineAnchor:o,line:s,lineChild:c,onLineNumberClick:d})=>{let h="CONTEXT"===s.type||"INJECTED_CONTEXT"===s.type,u="ADDITION"!==s.type,x=u||!n,f="DELETION"!==s.type,p=f&&!h||!n,m=n&&h?r?s.left:s.right:s.left;return(0,a.jsxs)(a.Fragment,{children:[x&&(0,a.jsx)(l.K,{ariaLabel:`Line ${u?s.left?.toString():s.right?.toString()}`,lineType:s.type,interactiveProps:d?{onClick:d}:null,isHighlighted:t,children:u&&m}),p&&(0,a.jsx)(l.K,{ariaLabel:`Line ${f?s.right?.toString():s.left?.toString()}`,lineType:s.type,interactiveProps:d?{onClick:d}:null,isHighlighted:t,children:f&&s.right}),(0,a.jsx)(i.b,{dragging:e,isHighlighted:t,isLeftColumn:r,line:s,lineAnchor:o,lineChild:c})]})};try{n.displayName||(n.displayName="DiffLinePart")}catch{}},8874:(e,t,r)=>{r.d(t,{n:()=>l});var a=r(74848),i=r(75177);function l(){return(0,a.jsx)(i.A,{"aria-hidden":"true",as:"svg",version:"1.1",viewBox:"0 0 340 84",xmlns:"http://www.w3.org/2000/svg",sx:{bottom:"0 !important",clip:"rect(1px, 1px, 1px, 1px)",clipPath:"inset(50%)",height:"84px",position:"absolute",width:"320px"},children:(0,a.jsxs)("defs",{children:[(0,a.jsxs)("clipPath",{id:"diff-placeholder",children:[(0,a.jsx)("rect",{height:"11.9298746",rx:"2",width:"67.0175439",x:"0",y:"0"}),(0,a.jsx)("rect",{height:"11.9298746",rx:"2",width:"100.701754",x:"18.9473684",y:"47.7194983"}),(0,a.jsx)("rect",{height:"11.9298746",rx:"2",width:"37.8947368",x:"0",y:"71.930126"}),(0,a.jsx)("rect",{height:"11.9298746",rx:"2",width:"53.3333333",x:"127.017544",y:"48.0703769"}),(0,a.jsx)("rect",{height:"11.9298746",rx:"2",width:"72.9824561",x:"187.719298",y:"48.0703769"}),(0,a.jsx)("rect",{height:"11.9298746",rx:"2",width:"140.350877",x:"76.8421053",y:"0"}),(0,a.jsx)("rect",{height:"11.9298746",rx:"2",width:"140.350877",x:"17.8947368",y:"23.8597491"}),(0,a.jsx)("rect",{height:"11.9298746",rx:"2",width:"173.684211",x:"166.315789",y:"23.8597491"})]}),(0,a.jsxs)("linearGradient",{id:"animated-diff-gradient",spreadMethod:"reflect",x1:"0",x2:"0",y1:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"0",stopColor:"#eee"}),(0,a.jsx)("stop",{offset:"0.2",stopColor:"#eee"}),(0,a.jsx)("stop",{offset:"0.5",stopColor:"#ddd"}),(0,a.jsx)("stop",{offset:"0.8",stopColor:"#eee"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#eee"}),(0,a.jsx)("animateTransform",{attributeName:"y1",dur:"1s",repeatCount:"3",values:"0%; 100%; 0"}),(0,a.jsx)("animateTransform",{attributeName:"y2",dur:"1s",repeatCount:"3",values:"100%; 200%; 0"})]})]})})}try{l.displayName||(l.displayName="DiffPlaceholder")}catch{}},48301:(e,t,r)=>{r.d(t,{u:()=>n});var a=r(74848),i=r(20053),l=r(41156);function n({squares:e}){return(0,a.jsx)("div",{className:"d-flex",children:e.map((e,t)=>(0,a.jsx)("div",{"data-testid":`${e} diffstat`,className:(0,i.A)(l.A.diffSquare,l.A[e])},t))})}try{n.displayName||(n.displayName="DiffSquares")}catch{}},45848:(e,t,r)=>{r.d(t,{z:()=>s});var a=r(74848),i=r(69909),l=r(94977),n=r(48301);let o={addition:"addition",deletion:"deletion",neutral:"neutral"};function s({linesAdded:e,linesDeleted:t,linesChanged:r,tooltipDirection:s}){if(!e||!t||!r)return null;let c=[...[,,,,,].fill(o.neutral)];if(r>0){let a=Math.floor(e/r*5);e>0&&(a=Math.max(1,a));let i=Math.floor(t/r*5);t>0&&(i=Math.max(1,i));let l=5-a-i;c=[...Array(a).fill(o.addition),...Array(i).fill(o.deletion),...Array(l).fill(o.neutral)]}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.A,{className:"f6 text-bold fgColor-success pl-2",children:["+",e]}),(0,a.jsxs)(i.A,{className:"f6 text-bold fgColor-danger px-1",children:["-",t]}),(0,a.jsx)(l.A,{"aria-label":function({linesAdded:e,linesChanged:t,linesDeleted:r}){return`${t} ${1===t?"change":"changes"}: ${e} ${1===e?"addition":"additions"} & ${r} ${1===r?"deletion":"deletions"}`}({linesAdded:e,linesChanged:r,linesDeleted:t}),direction:s??"e",children:(0,a.jsx)(n.u,{squares:c})})]})}try{s.displayName||(s.displayName="DiffStats")}catch{}},93792:(e,t,r)=>{r.d(t,{b:()=>o});var a=r(74848),i=r(20053),l=r(87098),n=r(40582);let o=e=>{let{dragging:t,isHighlighted:r,isLeftColumn:o,colSpan:s,line:c,lineAnchor:d}=e,h=c.html,u="";return["ADDITION","DELETION"].includes(c.type)&&["+","-"].includes(h[0])&&(u=h[0],h=h.slice(1)),(0,a.jsx)("td",{className:(0,i.$)("diff-text-cell",{"border-left color-border-accent-emphasis":t&&r,"border-right":o&&"HUNK"!==c.type}),colSpan:s,id:d?(0,n.Sq)(d):void 0,style:{backgroundColor:(0,n.gK)(c.type,!1,r)},children:(0,a.jsxs)("code",{"data-code-marker":u,className:(0,i.$)("diff-text syntax-highlighted-line",{addition:"ADDITION"===c.type,deletion:"DELETION"===c.type}),children:[e.lineChild,(0,a.jsx)(l.mo,{className:(0,i.$)("diff-text-inner",{"color-fg-muted":"HUNK"===c.type}),html:h,style:{marginLeft:"CONTEXT"===c.type?"-7px":void 0}})]})})};try{o.displayName||(o.displayName="DiffText")}catch{}},14570:(e,t,r)=>{r.d(t,{$:()=>n});var a=r(74848),i=r(20053),l=r(84597);function n({isLeftColumn:e}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.K,{lineType:"EMPTY"}),(0,a.jsx)("td",{className:(0,i.$)("empty-diff-line",{"border-right":e}),colSpan:1})]})}try{n.displayName||(n.displayName="EmptyDiffLine")}catch{}},35024:(e,t,r)=>{r.d(t,{P:()=>o});var a=r(74848),i=r(59857),l=r(84597),n=r(93792);function o({currentLine:e,hunkButton:t,isLeftColumn:r,isSplit:o}){return o&&!r?null:(0,a.jsxs)(a.Fragment,{children:[t?(0,a.jsx)(l.K,{colSpan:o?1:2,hasExpanderButton:!0,lineType:e.type,children:t}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.K,{lineType:e.type,children:(0,a.jsx)(i.KebabHorizontalIcon,{})}),!o&&(0,a.jsx)(l.K,{lineType:e.type,children:(0,a.jsx)(i.KebabHorizontalIcon,{})})]}),(0,a.jsx)(n.b,{isHighlighted:!1,isLeftColumn:!0,colSpan:o?3:void 0,line:e})]})}try{o.displayName||(o.displayName="HunkHeaderDiffLine")}catch{}},6534:(e,t,r)=>{r.d(t,{P:()=>l});var a=r(74848),i=r(59857);function l(){return(0,a.jsx)("div",{className:"hunk-kebab-icon pr-2 pb-1",children:(0,a.jsx)(i.KebabHorizontalIcon,{})})}try{l.displayName||(l.displayName="HunkKebabIcon")}catch{}},84597:(e,t,r)=>{r.d(t,{K:()=>n});var a=r(74848),i=r(20053),l=r(40582);let n=({ariaLabel:e,children:t,hasExpanderButton:r,lineType:n,colSpan:o,interactiveProps:s,isHighlighted:c,...d})=>{let h=(0,a.jsx)("code",{className:"pr-2",children:t});return s&&(h=(0,a.jsx)("button",{className:"diff-line-number-button",...s,"aria-label":e,children:h})),(0,a.jsx)("td",{"aria-label":s?void 0:e,"data-line-number":!0,className:(0,i.$)("diff-line-number",{"has-expander":r,clickable:!!s}),colSpan:o||1,style:{backgroundColor:(0,l.gK)(n,!0,c)},...d,children:h})};try{n.displayName||(n.displayName="LineNumber")}catch{}},58983:(e,t,r)=>{r.d(t,{w:()=>i});var a=r(74848);function i(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("thead",{className:"sr-only",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",children:"Original file line number"}),(0,a.jsx)("th",{scope:"col",children:"Original file line"}),(0,a.jsx)("th",{scope:"col",children:"Diff line number"}),(0,a.jsx)("th",{scope:"col",children:"Diff line change"})]})}),(0,a.jsxs)("colgroup",{children:[(0,a.jsx)("col",{width:e.lineWidth}),(0,a.jsx)("col",{}),(0,a.jsx)("col",{width:e.lineWidth}),(0,a.jsx)("col",{})]}),(0,a.jsx)("tbody",{children:e.children})]})}try{i.displayName||(i.displayName="SplitDiffTable")}catch{}},95573:(e,t,r)=>{r.d(t,{Q:()=>i});var a=r(74848);function i(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("thead",{className:"sr-only",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",children:"Original file line number"}),(0,a.jsx)("th",{scope:"col",children:"Diff line number"}),(0,a.jsx)("th",{scope:"col",children:"Diff line change"})]})}),(0,a.jsxs)("colgroup",{children:[(0,a.jsx)("col",{width:e.lineWidth}),(0,a.jsx)("col",{width:e.lineWidth}),(0,a.jsx)("col",{width:"100%"})]}),(0,a.jsx)("tbody",{children:e.children})]})}try{i.displayName||(i.displayName="UnifiedDiffTable")}catch{}},57402:(e,t,r)=>{r.d(t,{r:()=>o});var a=r(74848),i=r(94686),l=r(78209),n=r(96540);let o=(0,n.forwardRef)(function({src:e,size:t=20,...r},o){let s=(0,n.useMemo)(()=>{let r=new URL(e,i.fV.origin);return r.searchParams.has("size")||r.searchParams.has("s")||r.searchParams.set("size",String(2*Number(t))),r.toString()},[e,t]);return(0,a.jsx)(l.A,{ref:o,src:s,size:t,"data-testid":"github-avatar",...r})});try{o.displayName||(o.displayName="GitHubAvatar")}catch{}},8104:(e,t,r)=>{r.d(t,{N:()=>d});var a=r(74848),i=r(96540),l=r(45588),n=r(84976),o=r(65086),s=r(94686),c=r(75129);let d=(0,i.forwardRef)(({to:e,reloadDocument:t,preventAutofocus:r,...d},h)=>{let{routes:u}=(0,i.useContext)(o.B),x=(0,l.o1)(e,s.fV.pathname).pathname;return t=t??!(0,l.ue)(u,x),(0,a.jsx)(n.N_,{to:e,...d,state:r?{[c.V]:!0,...d.state}:d.state,reloadDocument:t,ref:h})});d.displayName="Link";let h=(0,i.forwardRef)(function({to:e,reloadDocument:t,preventAutofocus:r,...d},h){let{routes:u}=(0,i.useContext)(o.B),x=(0,l.o1)(e,s.fV.pathname).pathname;return t=t??!(0,l.ue)(u,x),(0,a.jsx)(n.k2,{to:e,...d,state:r?{[c.V]:!0,...d.state}:d.state,reloadDocument:t,ref:h})});try{h.displayName||(h.displayName="NavLink")}catch{}}}]);
//# sourceMappingURL=ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-f45efb-3342b9a013e1.js.map