(this.webpackJsonpbettermanage=this.webpackJsonpbettermanage||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(22),s=a.n(l),r=(a(30),a(10)),o=a(1),m=a(2),c=a(4),u=a(3),d=a(5),p=a(7),g=a(13),h=(a(31),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"titlebar"},i.a.createElement("div",null,i.a.createElement(p.b,{to:"/home"},i.a.createElement("i",{className:"material-icons"},"home"))),i.a.createElement("div",{style:{fontSize:"xx-large",marginLeft:"10px"}},this.props.children))}}]),t}(n.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"addnewIconContainer"},i.a.createElement(p.b,{to:"/newbill"},i.a.createElement("i",{className:"material-icons addnewIcon"},"add_circle")))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggleIsMember=function(){a.setState({isMember:!a.state.isMember}),a.props.toggleIsPart(a.props.index)},a.state={isMember:a.props.isPart},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("span",{className:"newNameChip",onClick:this.toggleIsMember,style:this.state.isMember?this.props.isEditable?{opacity:1,pointerEvents:"auto"}:{opacity:1,pointerEvents:"none"}:{opacity:.5,pointerEvents:"auto"}},this.props.memberName,i.a.createElement("i",{className:"material-icons chipControlIcon",style:this.state.isMember?{color:"var(--red)"}:{color:"var(--green)"}},this.state.isMember?"cancel":"add_circle"))}}]),t}(n.Component),f=a(16),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.getElementById("newMemberName");t.style.borderBottom="1px solid var(--white)",""!==this.state.value?-1!==this.props.addMember(this.state.value)&&this.setState({value:""}):t.style.borderBottom="1px solid var(--red)"}},{key:"render",value:function(){return i.a.createElement("form",{id:"newMemberNames",className:"newMemberNames",onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",placeholder:"member name",className:"appInputs",id:"newMemberName",value:this.state.value,onChange:this.handleChange}),i.a.createElement("i",{className:"material-icons",onClick:this.handleSubmit},"add_circle"))}}]),t}(n.Component),S=a(12),v=a.n(S),N=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("span",{className:"notification",id:"notification",style:this.props.style},this.props.message)}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){var t,n,i;return v.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.isInEditMode){e.next=11;break}if((t=document.getElementById("newBillName")).style.borderBottom="1px solid var(--white)",""!==a.state.value){e.next=6;break}return t.style.borderBottom="1px solid var(--red)",e.abrupt("return");case 6:if(n=a.state.value.replace(" ","-").toLowerCase(),!a.allBillNames.includes(n)){e.next=11;break}return a.setState({alreadyExists:!0}),setTimeout((function(){a.setState({alreadyExists:!1})}),2e3),e.abrupt("return");case 11:if(i=a.state.value.replace(" ","-").toLowerCase(),a.setState({isLoading:!0}),!a.isInEditMode){e.next=18;break}return e.next=16,v.a.awrap(a.props.editBill(i));case 16:e.next=20;break;case 18:return e.next=20,v.a.awrap(a.props.createNewBill(i));case 20:document.getElementById("nextpagelink").click();case 21:case"end":return e.stop()}}))},a.formatBillName=function(e){return e.replace(" ","-")},a.isInEditMode=a.props.isInEditMode,a.allBillNames=a.props.existingBillNames,a.state={value:a.isInEditMode?a.props.billName:"",alreadyExists:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{name:"newBillName",className:"newBillName"},i.a.createElement(N,{message:"Bill with same exists",style:{display:this.state.alreadyExists?"block":"none"}}),i.a.createElement("input",{type:"text",placeholder:"bill name",className:"appInputs",id:"newBillName",value:this.state.value,onChange:this.handleChange,style:this.isInEditMode?{pointerEvents:"none"}:{pointerEvents:"auto"}}),i.a.createElement("i",{className:"material-icons checkIcon",onClick:this.handleSubmit},"check_circle"),i.a.createElement(p.b,{to:"/manage/".concat(this.formatBillName(this.state.value)),id:"nextpagelink"})))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getSignedInStatus=function(){return null!==localStorage.getItem("isSignedIn")&&"true"===localStorage.getItem("isSignedIn")&&(a.email=localStorage.getItem("email"),!0)},a.componentDidMount=function(){var e,t;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.state.isSignedIn){n.next=4;break}a.googleSDK(),n.next=11;break;case 4:return e=localStorage.getItem("email"),t=localStorage.getItem("name"),a.setState({isLoading:!0}),n.next=9,v.a.awrap(a.getUserFromDatabase(e,t));case 9:a.setState({isLoading:!1}),document.getElementById("linktohome").click();case 11:case"end":return n.stop()}}))},a.prepareLoginButton=function(){console.log(a.refs.googleLoginBtn),a.auth2.attachClickHandler(a.refs.googleLoginBtn,{},(function(e){var t,n,i;return v.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.getBasicProfile(),n=t.getName(),i=t.getEmail(),a.setState({name:n,email:i}),localStorage.setItem("email",i),localStorage.setItem("name",n),localStorage.setItem("isSignedIn","true"),a.setState({isLoading:!0}),l.next=10,v.a.awrap(a.getUserFromDatabase(i,n));case 10:a.setState({isLoading:!1}),document.getElementById("linktohome").click();case 12:case"end":return l.stop()}}))}),(function(e){alert("Some Error Occurred. Please try again")}))},a.getUserFromDatabase=function(e,t){return new Promise((function(a,n){var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState&&200===i.status){var e=JSON.parse(i.responseText),t=JSON.stringify(e.existingMembers),n=JSON.stringify(e.existingBillNames);localStorage.setItem("existingMembers",t),localStorage.setItem("existingBillNames",n),a(!0)}},i.open("GET","https://cors-anywhere.herokuapp.com/https://immense-coast-52535.herokuapp.com/api/v1/getuser"),i.setRequestHeader("email",e),i.setRequestHeader("name",t),i.send()}))},a.getStyle=function(){return{position:"fixed",top:"0px",bottom:"0px",left:"0px",right:"0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},a.getGoogleLoginButton=function(){return i.a.createElement("div",{style:a.getStyle()},i.a.createElement("h2",null,"You must be logged in to use this website."),i.a.createElement("div",{className:"google-btn",ref:"googleLoginBtn"},i.a.createElement("div",{className:"google-icon-wrapper"},i.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"G"})),i.a.createElement("p",{className:"btn-text"},i.a.createElement("b",null,"Sign in with google"))))},a.getLoadingScreen=function(){return i.a.createElement("div",{className:"loadingIconContainer"},i.a.createElement("i",{className:"material-icons loadingIcon"},"refresh"))},a.props.setAppState("title","Login"),a.email="",a.state={isSignedIn:a.getSignedInStatus(),isLoading:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"googleSDK",value:function(){var e=this;window.googleSDKLoaded=function(){window.gapi.load("auth2",(function(){e.auth2=window.gapi.auth2.init({client_id:"748883507287-vd5sq0o1i30l6pk7vh4fuusi77voh1mp.apps.googleusercontent.com",cookiepolicy:"single_host_origin",scope:"profile email"}),e.prepareLoginButton()}))},function(e,t,a){var n,i=e.getElementsByTagName(t)[0];e.getElementById(a)||((n=e.createElement(t)).id=a,n.src="https://apis.google.com/js/platform.js?onload=googleSDKLoaded",i.parentNode.insertBefore(n,i))}(document,"script","google-jssdk")}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p.b,{to:"/home",id:"linktohome"}),i.a.createElement("div",{style:this.state.isLoading?{opacity:.5,pointerEvents:"none"}:{opacity:1,pointerEvents:"auto"}},this.state.isSignedIn?"":this.getGoogleLoginButton()),this.state.isLoading?this.getLoadingScreen():"")}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).init=function(){return{members:[],alreadyExists:!1,isDataAvailable:!1,isSignedIn:a.getSignedInStatus(),isLoading:!1}},a.getSignedInStatus=function(){return null!==localStorage.getItem("isSignedIn")&&"true"===localStorage.getItem("isSignedIn")&&(a.email=localStorage.getItem("email"),a.existingBillNames=JSON.parse(localStorage.getItem("existingBillNames")),!0)},a.getExistingMemberObjects=function(e){var t=[];return 0!==e.length&&(t=e.map((function(e){return"ME"===e.toUpperCase()?{name:e,isPart:!0}:{name:e,isPart:!1}}))),t},a.getMembersList=function(e){return e.map((function(e,t){return i.a.createElement(E,{memberName:e.name,isPart:e.isPart,isEditable:!0,key:t,index:t,toggleIsPart:a.toggleIsPart})}))},a.addMember=function(e){for(var t=a.state.members,n=0;n<t.length;n++)if(t[n].name.toUpperCase()===e.toUpperCase())return a.setState({alreadyExists:!0}),setTimeout((function(){a.setState({alreadyExists:!1})}),2e3),-1;return a.setState({member:a.state.members.push({name:e,isPart:!0}),alreadyExists:!1}),0},a.toggleIsPart=function(e){var t=a.state.members;t[e].isPart=!t[e].isPart,a.setState({members:t})},a.createNewBill=function(e){return a.setState({isLoading:!0}),new Promise((function(t,n){var i=[],l=[],s=a.existingMembers;a.state.members.forEach((function(e){e.isPart&&(i.push(e.name),!1===s.includes(e.name)&&l.push(e.name))}));var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){a.setState({isLoading:!1});var e=JSON.parse(r.responseText).bill,n=JSON.parse(localStorage.getItem("existingBillNames")),i=JSON.parse(localStorage.getItem("existingMembers"));i=i.concat(l),n.push(e.billName),localStorage.setItem("existingMembers",JSON.stringify(i)),localStorage.setItem("existingBillNames",JSON.stringify(n)),t(!0)}},r.open("GET","https://cors-anywhere.herokuapp.com/https://immense-coast-52535.herokuapp.com/api/v1/createbill"),r.setRequestHeader("email",a.email),r.setRequestHeader("billname",e),r.setRequestHeader("members",JSON.stringify(i)),r.setRequestHeader("newmembers",JSON.stringify(l)),r.send()}))},a.getLoadingScreen=function(){return a.state.isLoading||a.getExistingAssets(),i.a.createElement("div",{className:"loadingIconContainer"},i.a.createElement("i",{className:"material-icons loadingIcon"},"refresh"))},a.getExistingAssets=function(){return new Promise((function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var t=JSON.parse(n.responseText).asset,i=t.existingBillNames;a.existingMembers=t.existingMembers;var l=a.getExistingMemberObjects(t.existingMembers);a.setState({existingBillNames:i,members:l,isDataAvailable:!0}),e(!0)}},n.open("GET","https://cors-anywhere.herokuapp.com/https://immense-coast-52535.herokuapp.com/api/v1/getexisitingassets"),n.setRequestHeader("email",localStorage.getItem("email")),n.send()}))},a.renderForm=function(){return i.a.createElement("div",{className:"newBillForm",style:a.state.isLoading?{opacity:.5,pointerEvents:"none"}:{opacity:1,pointerEvents:"auto"}},i.a.createElement(N,{message:"Select From list",style:{display:a.state.alreadyExists?"block":"none"}}),i.a.createElement(y,{addMember:a.addMember}),i.a.createElement(x,{createNewBill:a.createNewBill,setTitle:a.props.setTitle,existingBillNames:a.existingBillNames,isInEditMode:!1}),i.a.createElement("div",{className:"newMembers"},a.getMembersList(a.state.members)))},a.props.setTitle("New Bill"),a.email="",a.existingMembers=[],a.existingBillNames=[],a.state=a.init(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,this.state.isSignedIn?this.state.isDataAvailable?this.renderForm():this.getLoadingScreen():i.a.createElement(I,{setAppState:this.props.setAppState}),this.state.isLoading?this.getLoadingScreen():"")}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"error404Container"},i.a.createElement("span",{className:"errorCode",style:{fontSize:"70px"}},"404"),i.a.createElement("span",null,"Page not found"),i.a.createElement("span",null,this.props.message),i.a.createElement("span",null,"Go to:"),i.a.createElement(p.b,{to:"/home"},i.a.createElement("i",{className:"material-icons"},"home")))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getBillName=function(){var e=document.location.href.split("/");return e=e[e.length-1],JSON.parse(localStorage.getItem("existingBillNames")).includes(e)?e:""},a.getSignedInStatus=function(){return null!==localStorage.getItem("isSignedIn")&&"true"===localStorage.getItem("isSignedIn")&&(a.email=localStorage.getItem("email"),a.billName=a.getBillName(),a.existingMembers=JSON.parse(localStorage.getItem("existingMembers")),!0)},a.getExistingMemberObjects=function(e,t){var a=[];return 0!==t.length&&(a=t.map((function(t){return e.includes(t)?{name:t,isPart:!0,isEditable:!1}:{name:t,isPart:!1,isEditable:!0}}))),a},a.getMembersList=function(e){return e.map((function(e,t){return i.a.createElement(E,{memberName:e.name,isPart:e.isPart,isEditable:e.isEditable,key:t,index:t,toggleIsPart:a.toggleIsPart})}))},a.addMember=function(e){for(var t=a.state.members,n=0;n<t.length;n++)if(t[n].name.toUpperCase()===e.toUpperCase())return a.setState({alreadyExists:!0}),setTimeout((function(){a.setState({alreadyExists:!1})}),2e3),-1;return a.setState({member:a.state.members.push({name:e,isPart:!0,isEditable:!0}),alreadyExists:!1}),0},a.toggleIsPart=function(e){var t=a.state.members;t[e].isPart=!t[e].isPart,a.setState({members:t})},a.editBill=function(e){return a.setState({isLoading:!0}),new Promise((function(t,n){var i=[],l=[],s=a.existingMembers;a.state.members.forEach((function(e){e.isPart&&(i.push(e.name),!1===s.includes(e.name)&&l.push(e.name))}));var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){a.setState({isLoading:!1});var e=JSON.parse(localStorage.getItem("existingMembers"));e=e.concat(l),localStorage.setItem("existingMembers",JSON.stringify(e)),t(!0)}},r.open("GET","https://immense-coast-52535.herokuapp.com/api/v1/addmembertobill"),r.setRequestHeader("email",a.email),r.setRequestHeader("billname",e),r.setRequestHeader("members",JSON.stringify(i)),r.setRequestHeader("newmembers",JSON.stringify(l)),r.send()}))},a.getLoadingScreen=function(){return a.state.isLoading||a.getExistingAssets(),i.a.createElement("div",{className:"loadingIconContainer"},i.a.createElement("i",{className:"material-icons loadingIcon"},"refresh"))},a.getExistingAssets=function(){return new Promise((function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var t=JSON.parse(n.responseText).members,i=a.getExistingMemberObjects(t,a.existingMembers);a.setState({members:i,isDataAvailable:!0}),e(!0)}else if(4===n.readyState&&404===n.status){var l=JSON.parse(n.responseText).message;a.setState({isBillExist:!1,errorMessage:l})}},n.open("GET","https://immense-coast-52535.herokuapp.com/api/v1/getbillmembers"),n.setRequestHeader("email",a.email),n.setRequestHeader("billname",a.billName),n.send()}))},a.renderForm=function(){return i.a.createElement("div",{className:"newBillForm",style:a.state.isLoading?{opacity:.5,pointerEvents:"none"}:{opacity:1,pointerEvents:"auto"}},i.a.createElement(N,{message:"Select From list",style:{display:a.state.alreadyExists?"block":"none"}}),i.a.createElement(y,{addMember:a.addMember}),i.a.createElement(x,{setTitle:a.props.setTitle,existingBillNames:a.existingBillNames,isInEditMode:!0,billName:a.billName,editBill:a.editBill}),i.a.createElement("div",{className:"newMembers"},a.getMembersList(a.state.members)))},a.props.setAppState("title","Edit Bill"),a.email="",a.billName="",a.existingMembers=[],a.state={isSignedIn:a.getSignedInStatus(),isBillExist:!0,isDataAvailable:!1,members:[],alreadyExists:!1,errorMessage:"",isLoading:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,this.state.isSignedIn?this.state.isBillExist?this.state.isDataAvailable?this.renderForm():this.getLoadingScreen():i.a.createElement(O,{message:this.state.errorMessage}):i.a.createElement(I,{setAppState:this.props.setAppState}),this.state.isLoading?this.getLoadingScreen():"")}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleItemNameChange=function(e){a.setState({itemName:e.target.value})},a.handleItemAmountChange=function(e){a.setState({itemAmount:e.target.value})},a.getRowContainerStyles=function(){return{display:"flex",flexDirection:"row",marginTop:"5px",justifyContent:"space-between",alignItems:"center"}},a.areInputsInvalid=function(){var e=!1,t=!1,n=document.getElementById("itemName"),i=document.getElementById("itemAmount"),l=a.state.itemName,s=a.state.itemAmount;return n.style.borderBottom="1px solid var(--white)",i.style.borderBottom="1px solid var(--white)",""===l&&(n.style.borderBottom="1px solid var(--red)",e=!0),isNaN(parseFloat(s))&&(i.style.borderBottom="1px solid var(--red)",t=!0),!(!e&&!t)},a.getNameAndAmount=function(){return[a.state.itemName,parseFloat(parseFloat(a.state.itemAmount).toFixed(2))]},a.handleSubmit=function(e){if(e.preventDefault(),!a.areInputsInvalid()){var t=a.getNameAndAmount(),n=t[0],i=t[1];a.props.setNameAndAmount(n,i),"split"===e.target.id?a.props.splitChecked(n,i):a.props.splitEqually(n,i)}},a.reset=function(){a.setState({itemName:"",itemAmount:""})},a.state={itemName:"",itemAmount:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{name:"billItemForm",className:"billItemForm",onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",placeholder:"item name",id:"itemName",className:"appInputs",value:this.state.itemName,onChange:this.handleItemNameChange}),i.a.createElement("div",{style:this.getRowContainerStyles()},i.a.createElement("input",{type:"number",step:"any",placeholder:"0.00",id:"itemAmount",className:"appInputs",style:{width:"55%"},value:this.state.itemAmount,onChange:this.handleItemAmountChange}),i.a.createElement("div",null,i.a.createElement("span",{className:"text-icons",id:"split",onClick:this.handleSubmit},"Split"),i.a.createElement("span",{className:"text-icons",id:"splitequal",onClick:this.handleSubmit},"Split="))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getTitle=function(e){return e.replace("-"," ")},a.getBillName=function(){var e=document.location.href.split("/");return e=e[e.length-1],JSON.parse(localStorage.getItem("existingBillNames")).includes(e)?e:""},a.getSignedInStatus=function(){return null!==localStorage.getItem("isSignedIn")&&"true"===localStorage.getItem("isSignedIn")&&(a.email=localStorage.getItem("email"),a.billName=a.getBillName(),a.props.setAppState("title",a.getTitle(a.billName)),!0)},a.handleSplitAmountChange=function(e){var t=e.target.name,n=a.state["".concat(t)];n.amount=e.target.value,a.setState(Object(r.a)({},t,n))},a.getMembers=function(e){return e.map((function(e,t){var n=a.state["".concat(e)];return i.a.createElement("tr",{key:t},i.a.createElement("td",{width:"70%",onClick:function(){a.toggleIsChecked(e,t)}},e),i.a.createElement("td",{style:{textAlign:"right",marginRight:"5px"}},i.a.createElement("input",{type:"number",step:"any",className:"appInputs",onChange:a.handleSplitAmountChange,value:n.amount,style:{width:"70px"},name:"".concat(e),id:"".concat(t,"-splitAmount"),placeholder:"0.00",disabled:n.isChecked?"":"disabled"})),i.a.createElement("td",null,i.a.createElement("i",{className:"material-icons",style:{fontSize:"x-large"},onClick:function(){a.toggleIsChecked(e,t)}},n.isChecked?"check_circle_outline":"radio_button_unchecked")))}))},a.toggleIsChecked=function(e){var t=a.state["".concat(e)];t.isChecked=!t.isChecked,a.setState(Object(r.a)({},e,t))},a.toggleIsDue=function(e){document.getElementById("memberWiseReceipt").style.opacity=.5,document.getElementById("memberWiseReceipt").style.pointerEvents="none";var t=a.state.receipt,n=a.members.indexOf(e),i=a.state.receipt[n];i.isDue=!i.isDue,t[n]=i;var l=new XMLHttpRequest;l.onreadystatechange=function(){4===l.readyState&&200===l.status&&(document.getElementById("memberWiseReceipt").style.opacity=1,document.getElementById("memberWiseReceipt").style.pointerEvents="auto",a.setState({receipt:t}))},l.open("GET","https://cors-anywhere.herokuapp.com/https://immense-coast-52535.herokuapp.com/api/v1/updatereceipt"),l.setRequestHeader("email",a.email),l.setRequestHeader("billname",a.billName),l.setRequestHeader("receipt",JSON.stringify(t)),l.send()},a.areInputsInvalid=function(e){var t=!1,n=0;return a.members.forEach((function(e){document.getElementsByName(e)[0].style.borderBottom="1px solid var(--white)";var i=a.state["".concat(e)];i.isChecked&&(isNaN(parseFloat(i.amount))?(t=!0,document.getElementsByName(e)[0].style.borderBottom="1px solid var(--red)"):n+=parseFloat(i.amount))})),n=parseFloat(n.toFixed(2)),!!t||(a.setState({total:n,remaining:(e-n).toFixed(2)}),Math.abs(e-n)>1)},a.handleSplitFormSubmit=function(e){if(e.preventDefault(),document.getElementById("memberWiseReceipt").style.opacity=.5,document.getElementById("memberWiseReceipt").style.pointerEvents="none",!a.refs.itemForm.areInputsInvalid()){var t=a.refs.itemForm.getNameAndAmount();if(a.setNameAndAmount(t[0],t[1]),!a.areInputsInvalid(t[1])){var n=[];a.members.forEach((function(e){var t=a.state["".concat(e)];t.isChecked&&n.push({name:e,amount:parseFloat(t.amount)})}));var i={itemName:a.state.itemName,paidBy:a.state.paidBy,itemAmount:parseFloat(a.state.itemAmount),splitInto:n},l=a.generateReceipt(i),s=new XMLHttpRequest;s.onreadystatechange=function(){4===s.readyState&&200===s.status&&(document.getElementById("memberWiseReceipt").style.opacity=1,document.getElementById("memberWiseReceipt").style.pointerEvents="auto",a.setState({receipt:l}))},s.open("GET","https://cors-anywhere.herokuapp.com/https://immense-coast-52535.herokuapp.com/api/v1/updatereceipt"),s.setRequestHeader("email",a.email),s.setRequestHeader("billname",a.billName),s.setRequestHeader("receipt",JSON.stringify(l)),s.send(),a.resetSplitForm(),a.refs.itemForm.reset()}}},a.changePaidBy=function(e){a.setState({paidBy:e.target.id})},a.getMemberNameChips=function(){return a.members.map((function(e,t){return i.a.createElement("span",{key:t,className:"nameChip",id:e,onClick:a.changePaidBy,style:{opacity:a.state.paidBy===e?1:.3}},e)}))},a.getSplitForm=function(){return i.a.createElement("table",{style:{width:"100%"},className:"splitAmounts"},i.a.createElement("tbody",null,a.getMembers(a.members),i.a.createElement("tr",null,i.a.createElement("td",{width:"70%",style:{textAlign:"right",fontSize:"medium"}},"Total: "),i.a.createElement("td",{colSpan:"2"},a.state.total.toFixed(2))),i.a.createElement("tr",{style:{color:Math.abs(a.state.remaining)>1?"var(--red)":"var(--white)"}},i.a.createElement("td",{width:"70%",style:{textAlign:"right",fontSize:"medium"}},"Remaining: "),i.a.createElement("td",{colSpan:"2"},a.state.remaining)),i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"3"},"Paid By:")),i.a.createElement("tr",null,i.a.createElement("td",{className:"nameChipContainer"},a.getMemberNameChips()),i.a.createElement("td",{colSpan:"2",style:{textAlign:"right"}},i.a.createElement("i",{className:"material-icons",onClick:a.handleSplitFormSubmit},"add_circle")))))},a.setNameAndAmount=function(e,t){a.setState({itemName:e,itemAmount:t})},a.splitChecked=function(e,t){var n=0,i=0,l=[],s=!1;if(a.members.forEach((function(e){document.getElementsByName(e)[0].style.borderBottom="1px solid var(--white)";var t=a.state["".concat(e)];t.isChecked&&(""===t.amount?(++n,l.push(e)):isNaN(t.amount)?(s=!0,document.getElementsByName(e)[0].style.borderBottom="1px solid var(--red)"):i+=t.amount)})),!s){t-=i;var o=parseFloat((t/n).toFixed(2));l.forEach((function(e){var t=a.state["".concat(e)];t.amount=o,a.setState(Object(r.a)({},e,t))}))}},a.splitEqually=function(e,t){var n=[];a.members.forEach((function(e){document.getElementsByName(e)[0].style.borderBottom="1px solid var(--white)",a.state["".concat(e)].isChecked&&n.push(e)}));var i=parseFloat((t/n.length).toFixed(2));n.forEach((function(e){var t=a.state["".concat(e)];t.amount=i,a.setState(Object(r.a)({},e,t))}))},a.resetSplitForm=function(){a.members.forEach((function(e){var t=a.state["".concat(e)];t.amount="",a.setState(Object(r.a)({},e,t))}))},a.selectAllMembers=function(){a.members.forEach((function(e){var t=a.state["".concat(e)];t.isChecked=!0,a.setState(Object(r.a)({},e,t))}))},a.getSplitIntoMembers=function(e){return e.map((function(e,t){var a=e.name,n=e.amount;return i.a.createElement("tr",{key:t},i.a.createElement("td",null,a),i.a.createElement("td",{style:{textAlign:"right"}},n.toFixed(2)))}))},a.renderItem=function(e,t,a){return i.a.createElement("tr",{key:a},i.a.createElement("td",null,e),i.a.createElement("td",null,t.toFixed(2)))},a.renderReceiptItems=function(e){var t=[];return e.forEach((function(e,n){t.push(a.renderItem(e.name,e.amount,n))})),t},a.getReceiptView=function(e,t,n){var l=t.paidByMeTotal,s=t.paidForMeTotal;return i.a.createElement("div",{key:n},i.a.createElement("div",{className:"memberReceiptView"},i.a.createElement("div",null,i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("ins",null,i.a.createElement("strong",null,e)))),i.a.createElement("tr",null,i.a.createElement("td",{style:{fontSize:"small"}},"paid")),i.a.createElement("tr",null,i.a.createElement("td",null,l.toFixed(2))),i.a.createElement("tr",null,i.a.createElement("td",{style:{fontSize:"small"}},"owes")),i.a.createElement("tr",null,i.a.createElement("td",null,s.toFixed(2))),i.a.createElement("tr",null,i.a.createElement("td",{style:{fontSize:"small"}},"total")),i.a.createElement("tr",null,i.a.createElement("td",null,(l-s).toFixed(2)))))),i.a.createElement("div",null,i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"2",style:{opacity:.5}},"paid")),a.renderReceiptItems(t.paidByMe)))),i.a.createElement("div",null,i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"2",style:{opacity:.5}},"owes")),a.renderReceiptItems(t.paidForMe))))),i.a.createElement("div",{className:"dueStatus"},i.a.createElement("i",{className:"material-icons",onClick:function(){a.toggleIsDue(e)},style:{color:t.isDue?"var(--white)":"var(--green)",fontSize:"x-large"}},t.isDue?"watch_later":"done_all")))},a.renderReceipt=function(){var e=a.state.receipt,t=[];return e.forEach((function(n,i){t.push(a.getReceiptView(n.name,e[i],i))})),t},a.generateReceipt=function(e){var t=a.state.receipt,n=e.paidBy,i=a.members.indexOf(n),l=t[i];return l.paidByMe.push({name:e.itemName,amount:e.itemAmount}),l.paidByMeTotal+=e.itemAmount,e.splitInto.forEach((function(n){var i=n.name,s=a.members.indexOf(i);l=t[s];var r=n.amount;l.paidForMe.push({name:e.itemName,amount:r}),l.paidForMeTotal+=r})),t},a.getBill=function(){return new Promise((function(e,t){var n=a.state.billName,i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState&&200===i.status){var t=JSON.parse(i.responseText).bill;a.members=t.members,a.members.forEach((function(e){a.setState(Object(r.a)({},e,{isChecked:!0,amount:""}))})),a.setState({receipt:t.receipt,paidBy:a.members[0],isDataAvailable:!0}),e(!0)}},i.open("GET","https://cors-anywhere.herokuapp.com/https://immense-coast-52535.herokuapp.com/api/v1/getbill"),i.setRequestHeader("email",a.email),i.setRequestHeader("billname",n),i.send()}))},a.renderBillItemForm=function(){return i.a.createElement("div",{className:"manageBill"},i.a.createElement(w,{ref:"itemForm",splitChecked:a.splitChecked,splitEqually:a.splitEqually,setNameAndAmount:a.setNameAndAmount}),i.a.createElement("form",{name:"splitForm",className:"splitForm"},i.a.createElement("div",{style:{textAlign:"right",marginBottom:"15px"}},i.a.createElement(p.b,{to:"/editbill/".concat(a.billName)},i.a.createElement("span",{className:"text-icons",style:{fontSize:"small"}},"Add Person")),i.a.createElement("span",{className:"text-icons",style:{fontSize:"small"},onClick:a.selectAllMembers},"Select All"),i.a.createElement("span",{className:"text-icons",style:{fontSize:"small"},onClick:a.resetSplitForm},"Reset")),a.getSplitForm()),i.a.createElement("div",{className:"memberWiseReceipt",id:"memberWiseReceipt"},a.renderReceipt()))},a.getLoadingScreen=function(){return a.getBill(),i.a.createElement("div",{className:"loadingIconContainer"},i.a.createElement("i",{className:"material-icons loadingIcon"},"refresh"))},a.billName="",a.email="",a.members=[],a.currentBillId="",a.state={isSignedIn:a.getSignedInStatus(),isBillExist:""!==a.billName,isDataAvailable:!1,billName:a.billName,itemName:"",itemAmount:0,total:0,remaining:0,receipt:[],paidBy:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,this.state.isSignedIn?this.state.isBillExist?this.state.isDataAvailable?this.renderBillItemForm():this.getLoadingScreen():i.a.createElement(O,{message:"The bill you are looking for does not exist."}):i.a.createElement(I,{setAppState:this.props.setAppState}))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggleShowReceipt=function(){var e=a.state.showReceipt;a.setState({showReceipt:!e})},a.getMembers=function(e){return e.map((function(e,t){return i.a.createElement("span",{className:"billMember",key:t},e)}))},a.renderItem=function(e,t,a){return i.a.createElement("tr",{key:a},i.a.createElement("td",null,e),i.a.createElement("td",null,t.toFixed(2)))},a.renderReceiptItems=function(e){var t=[];return e.forEach((function(e,n){t.push(a.renderItem(e.name,e.amount,n))})),t},a.getReceiptView=function(e,t,n){var l=t.paidByMeTotal,s=t.paidForMeTotal;return i.a.createElement("div",{key:n},i.a.createElement("div",{className:"memberReceiptView"},i.a.createElement("div",null,i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("ins",null,i.a.createElement("strong",null,e)))),i.a.createElement("tr",null,i.a.createElement("td",{style:{fontSize:"small"}},"paid")),i.a.createElement("tr",null,i.a.createElement("td",null,l.toFixed(2))),i.a.createElement("tr",null,i.a.createElement("td",{style:{fontSize:"small"}},"owes")),i.a.createElement("tr",null,i.a.createElement("td",null,s.toFixed(2))),i.a.createElement("tr",null,i.a.createElement("td",{style:{fontSize:"small"}},"total")),i.a.createElement("tr",null,i.a.createElement("td",null,(l-s).toFixed(2)))))),i.a.createElement("div",null,i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"2",style:{opacity:.5}},"paid")),a.renderReceiptItems(t.paidByMe)))),i.a.createElement("div",null,i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"2",style:{opacity:.5}},"owes")),a.renderReceiptItems(t.paidForMe))))),i.a.createElement("div",{className:"dueStatus"},i.a.createElement("i",{className:"material-icons",style:{color:t.isDue?"var(--white)":"var(--green)",fontSize:"x-large"}},t.isDue?"watch_later":"done_all")))},a.renderReceipt=function(){var e=a.props.receipt,t=[];return e.forEach((function(n,i){t.push(a.getReceiptView(n.name,e[i],i))})),t},a.state={showReceipt:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"detailedBill"},i.a.createElement("div",{className:"billBrief",id:this.props.id},i.a.createElement("div",{className:"billBriefControls"},i.a.createElement("i",{className:"material-icons deleteIcon",onClick:function(){e.props.deleteBill(e.props.billName)}},"delete"),i.a.createElement(p.b,{to:"/manage/".concat(this.props.billName)},i.a.createElement("i",{className:"material-icons editIcon"},"edit"))),i.a.createElement("div",{className:"billBriefDetails",onClick:this.toggleShowReceipt},i.a.createElement("div",{className:"billDateAndName"},i.a.createElement("div",{className:"billName"},this.props.billName.replace("-"," ")),i.a.createElement("div",{className:"billDate"},this.props.date)),i.a.createElement("div",{className:"billMembers"},this.getMembers(this.props.members)))),i.a.createElement("div",{className:"receiptView",style:this.state.showReceipt?{display:"block"}:{display:"none"}},this.renderReceipt()))}}]),t}(n.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"alertMessage",id:"alertMessage",style:this.props.style},i.a.createElement("h3",null,"Are you sure you want to delete the bill ",i.a.createElement("span",{style:{textTransform:"capitalize"}},this.props.billName.replace("-"," ")),"?"),i.a.createElement("span",{style:{float:"right",padding:"5px 10px"},onClick:this.props.cancelDeletion},"Cancel"),i.a.createElement("span",{style:{float:"right",padding:"5px 10px"},onClick:function(){e.props.confirmDeletion(e.props.billName)}},"OK"))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getSignedInStatus=function(){return null!==localStorage.getItem("isSignedIn")&&"true"===localStorage.getItem("isSignedIn")&&(a.email=localStorage.getItem("email"),!0)},a.componentDidMount=function(){a.state.isSignedIn||document.getElementById("linktologin").click()},a.cancelDeletion=function(){a.setState({isAlertBoxRequired:!1,billToBeDeleted:""})},a.confirmDeletion=function(e){a.setState({isAlertBoxRequired:!1,billToBeDeleted:""}),document.getElementById(e).style.opacity=.5,document.getElementById(e).style.pointerEvents="none";var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){document.getElementById(e).style.opacity=1,document.getElementById(e).style.pointerEvents="auto";var n=JSON.parse(t.responseText).existingBillNames;localStorage.setItem("existingBillNames",JSON.stringify(n));var i=a.state.allBills,l=[];i.forEach((function(t){t.billName!==e&&l.push(t)})),a.setState({allBills:l})}},t.open("GET","https://cors-anywhere.herokuapp.com/https://immense-coast-52535.herokuapp.com/api/v1/deletebill"),t.setRequestHeader("Content-Type","application/json"),t.setRequestHeader("email",a.email),t.setRequestHeader("billname",e),t.send()},a.deleteBill=function(e){a.setState({isAlertBoxRequired:!0,billToBeDeleted:e})},a.getBillBrief=function(e,t){return i.a.createElement(C,{key:t,billName:e.billName,date:new Date(e.dateCreated).toDateString(),members:e.members,id:e.billName,deleteBill:a.deleteBill,receipt:e.receipt})},a.getAllBillBriefs=function(e){return e.map((function(e,t){return a.getBillBrief(e,t)}))},a.getLoadingScreen=function(){return a.getAllBills(),i.a.createElement("div",{className:"loadingIconContainer"},i.a.createElement("i",{className:"material-icons loadingIcon"},"refresh"))},a.getAllBills=function(){return new Promise((function(e,t){var n=JSON.parse(localStorage.getItem("existingBillNames")),i=new XMLHttpRequest;i.onreadystatechange=function(){if(4===i.readyState&&200===i.status){var t=JSON.parse(i.responseText).allBills;a.setState({allBills:t,isDataAvailable:!0}),e(!0)}},i.open("GET","https://cors-anywhere.herokuapp.com/https://immense-coast-52535.herokuapp.com/api/v1/getallbills"),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("email",a.email),i.setRequestHeader("billnames",JSON.stringify(n)),i.send()}))},a.props.setTitle("All Bills"),a.email="",a.state={allBills:[],isSignedIn:a.getSignedInStatus(),isDataAvailable:!1,isAlertBoxRequired:!1,billToBeDeleted:""},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p.b,{to:"/",id:"linktologin"}),i.a.createElement("div",{id:"allBillsContainer",style:this.state.isAlertBoxRequired?{pointerEvents:"none",opacity:"0.5"}:{pointerEvents:"auto",opacity:"1"}},this.state.isSignedIn?this.state.isDataAvailable?this.getAllBillBriefs(this.state.allBills):this.getLoadingScreen():i.a.createElement(I,{setAppState:this.props.setAppState})),i.a.createElement(M,{style:this.state.isAlertBoxRequired?{display:"block"}:{display:"none"},billName:this.state.billToBeDeleted,cancelDeletion:this.cancelDeletion,confirmDeletion:this.confirmDeletion}))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).init=function(){return window.resizeTo(450,450),{title:"Log in",existingMembers:[],allBillNames:[],currentBill:{}}},a.setTitle=function(e){a.setState({title:e})},a.setAppState=function(e,t){a.setState(Object(r.a)({},e,t))},a.state=a.init(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,{basename:"/"},i.a.createElement(h,null,this.state.title),i.a.createElement(g.c,null,i.a.createElement(g.a,{path:"/home"},i.a.createElement(b,null),i.a.createElement(A,{setTitle:this.setTitle,setAppState:this.setAppState})),i.a.createElement(g.a,{path:"/newbill"},i.a.createElement(B,{setTitle:this.setTitle,existingMembers:this.state.existingMembers,allBillNames:this.state.allBillNames,email:this.state.email,setAppState:this.setAppState})),i.a.createElement(g.a,{path:"/editbill/:id"},i.a.createElement(k,{setAppState:this.setAppState})),i.a.createElement(g.a,{path:"/manage/:id"},i.a.createElement(j,{setTitle:this.setTitle,setAppState:this.setAppState,currentBill:this.state.currentBill})),i.a.createElement(g.a,{path:"/"},i.a.createElement(I,{setAppState:this.setAppState}))))}}]),t}(n.Component);s.a.render(i.a.createElement(R,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.f35815d8.chunk.js.map