(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(3),r=n.n(l),c=n(1),s=n(4),i=n(5),u=n(7),d=n(6),h=n(8),m=(n(14),n(15),function(e){var t=e.goods,n=e.handleReverse,a=e.handleSortAZ,l=e.handleSortByLength,r=e.handleReset,c=e.handleSelect,s=e.optionSelected;return o.a.createElement("div",{className:"goods"},o.a.createElement("button",{type:"button",onClick:n,className:"goods__btn"},"Reverse"),o.a.createElement("button",{type:"button",onClick:a,className:"goods__btn"},"Sort Alphabetically"),o.a.createElement("button",{type:"button",onClick:l,className:"goods__btn"},"Sort By Length"),o.a.createElement("button",{type:"button",onClick:r,className:"goods__btn"},"Reset"),o.a.createElement("select",{onChange:c,value:s,className:"goods__select"},o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10")),o.a.createElement("ul",{className:"goods__list"},t.map((function(e){return o.a.createElement("li",{key:e,className:"goods__item"},e)}))))});m.defaultProps={optionSelected:10};var g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={isStartButton:!1,goods:[].concat(g),initialGoods:[].concat(g)},n.handleStart=function(){n.setState({isStartButton:!0})},n.handleReverse=function(){n.setState((function(e){return{goods:Object(c.a)(e.goods).reverse()}}))},n.handleSortAZ=function(){n.setState((function(e){return{goods:Object(c.a)(e.goods).sort((function(e,t){return e.localeCompare(t)}))}}))},n.handleSortByLength=function(){n.setState((function(e){return{goods:Object(c.a)(e.goods).sort((function(e,t){return e.length-t.length}))}}))},n.handleReset=function(){n.setState((function(e){return{goods:e.initialGoods}}))},n.handleSelect=function(e){var t=[].concat(g),a=e.target.value;n.setState((function(e){return{goods:t.filter((function(e){return e.length<=a}))}}))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isStartButton,n=e.goods;return o.a.createElement("div",{className:"App"},t?o.a.createElement(m,{goods:n,handleReverse:this.handleReverse,handleSortAZ:this.handleSortAZ,handleReset:this.handleReset,handleSortByLength:this.handleSortByLength,handleSelect:this.handleSelect}):o.a.createElement("button",{type:"button",onClick:this.handleStart,className:"start-btn"},"Start"))}}]),t}(a.Component);r.a.render(o.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.b17db80e.chunk.js.map