(this["webpackJsonpbank-of-react-page"]=this["webpackJsonpbank-of-react-page"]||[]).push([[0],{25:function(e,t,n){},42:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),c=n(34),s=n.n(c),i=(n(42),n(21)),o=n.n(i),u=n(35),j=n(14),b=n(6),d=n(7),l=n(9),h=n(8),p=n(5),O=n(2),m=n(0),x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(a.Component),f=x,v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Bank of React"}),Object(m.jsx)(p.b,{to:"/userProfile",children:"User Profile"}),Object(m.jsx)(f,{accountBalance:this.props.accountBalance}),Object(m.jsx)(p.b,{to:"/login",children:"Logout"}),Object(m.jsx)("br",{}),Object(m.jsx)(p.b,{to:"/debit",children:"Debit"}),Object(m.jsx)("br",{}),Object(m.jsx)(p.b,{to:"/credit",children:"Credit"})]})}}]),n}(a.Component),g=v,C=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"User Profile"}),Object(m.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(m.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(m.jsx)(p.b,{to:"/",children:"Return to Home"})]})}}]),n}(a.Component),y=C,I=(n(25),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(j.a)({},e.state.pay),a=t.target.name,r=t.target.value;n[a]=r,e.setState({pay:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.addDebit(e.state.pay),e.props.debitInfo.push(e.state.pay),e.displayItems()},e.displayItems=function(){for(var t="",n=0;n<e.props.debitInfo.length;n++)t=t+Object(m.jsx)("br",{})+"Date:  "+e.props.debitInfo[n].date.substring(0,10)+" Item:   "+e.props.debitInfo[n].description+" Cost:"+e.props.debitInfo[n].amount+"\n";return t.split(Object(m.jsx)("br",{}))};var a=new Date,r=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();return e.state={pay:{amount:"",description:"",date:r},redirect:!1},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:this.displayItems()}),Object(m.jsx)("h1",{children:"DEBIT"}),Object(m.jsx)(f,{accountBalance:this.props.accountBalance}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"Reason",children:"Reason"}),Object(m.jsx)("input",{type:"text",name:"description",onChange:this.handleChange,value:this.state.pay.description}),Object(m.jsx)("label",{htmlFor:"Amount",children:"Amount"}),Object(m.jsx)("input",{type:"number",name:"amount",onChange:this.handleChange,value:this.state.pay.amount})]}),Object(m.jsx)("button",{children:"Add Debit"})]}),Object(m.jsxs)("p",{id:"test",children:[Object(m.jsx)(p.b,{to:"./",children:"Home "}),Object(m.jsx)(p.b,{to:"/userprofile",children:"UserProfile "}),Object(m.jsx)(p.b,{to:"/credit",children:"Credit"})]})]})}}]),n}(a.Component)),B=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(j.a)({},e.state.gain),a=t.target.name,r=t.target.value;n[a]=r,e.setState({gain:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.addCredit(e.state.gain),e.props.creditInfo.push(e.state.gain),e.displayItems()},e.displayItems=function(){for(var t="",n=0;n<e.props.creditInfo.length;n++)t=t+Object(m.jsx)("br",{})+"Date:  "+e.props.creditInfo[n].date.substring(0,10)+" Item:   "+e.props.creditInfo[n].description+" Cost:   "+e.props.creditInfo[n].amount;return t.split(Object(m.jsx)("br",{}))};var a=new Date,r=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate();return e.state={gain:{amount:"",description:"",date:r},redirect:!1},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:this.displayItems()}),Object(m.jsx)("h1",{children:"CREDIT"}),Object(m.jsx)(f,{accountBalance:this.props.accountBalance}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"Reason",children:"Reason"}),Object(m.jsx)("input",{type:"text",name:"description",onChange:this.handleChange,value:this.state.gain.description}),Object(m.jsx)("label",{htmlFor:"Amount",children:"Amount"}),Object(m.jsx)("input",{type:"number",name:"amount",onChange:this.handleChange,value:this.state.gain.amount})]}),Object(m.jsx)("button",{children:"Add Credit"})]}),Object(m.jsxs)("p",{id:"test",children:[Object(m.jsx)(p.b,{to:"./",children:"Home "}),Object(m.jsx)(p.b,{to:"/userprofile",children:"UserProfile "}),Object(m.jsx)(p.b,{to:"/debit",children:"Debit"})]})]})}}]),n}(a.Component),S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(j.a)({},e.state.user),a=t.target.name,r=t.target.value;n[a]=r,e.setState({user:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(d.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(m.jsx)(O.a,{to:"/userProfile"}):Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(m.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password"})]}),Object(m.jsx)("button",{children:"Log In"})]})})}}]),n}(a.Component),k=n(23),D=n.n(k),F=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(j.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.addDebit=function(t){var n=e.state.accountBalance;n=parseFloat(e.state.accountBalance)-t.amount,e.setState({accountBalance:Math.round(100*n)/100})},e.addCredit=function(t){var n=e.state.accountBalance;alert(t.amount),""!==t.amount?(n=parseFloat(e.state.accountBalance)+parseFloat(t.amount),e.setState({accountBalance:Math.round(100*n)/100})):e.setState({accountBalance:Math.round(100*n)/100})},e.state={accountBalance:0,currentUser:{userName:"joe_shmo",memberSince:"07/23/96"},debits:[],credits:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://moj-api.herokuapp.com/debits");case 2:return t=e.sent,e.next=5,D.a.get("https://moj-api.herokuapp.com/credits");case 5:n=e.sent,t=t.data,n=n.data,a=0,r=0,t.forEach((function(e){a+=e.amount})),n.forEach((function(e){r+=e.amount})),c=Number.parseFloat(r-a).toFixed(2),this.setState({debits:t,credits:n,accountBalance:c});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(m.jsx)(p.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(O.b,{exact:!0,path:"/",render:function(){return Object(m.jsx)(g,{accountBalance:e.state.accountBalance})}}),Object(m.jsx)(O.b,{exact:!0,path:"/userProfile",render:function(){return Object(m.jsx)(y,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(m.jsx)(O.b,{exact:!0,path:"/login",render:function(){return Object(m.jsx)(S,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(m.jsx)(O.b,{exact:!0,path:"/debit",render:function(){return Object(m.jsx)(I,{accountBalance:e.state.accountBalance,addDebit:e.addDebit,debitInfo:e.state.debits})}}),Object(m.jsx)(O.b,{exact:!0,path:"/credit",render:function(){return Object(m.jsx)(B,{accountBalance:e.state.accountBalance,addCredit:e.addCredit,creditInfo:e.state.credits})}})]})})}}]),n}(a.Component),N=F,U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),U()}},[[70,1,2]]]);
//# sourceMappingURL=main.c01b4353.chunk.js.map