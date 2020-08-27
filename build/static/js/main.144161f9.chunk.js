(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{215:function(e,t,l){e.exports=l(377)},224:function(e,t,l){},377:function(e,t,l){"use strict";l.r(t);var n=l(117),a=l.n(n),r=l(183),s=l(205),i=l(13),c=l(26),o=l(27),u=l(29),h=l(28),d=l(0),m=l.n(d),f=l(12),p=l.n(f),b=l(58),v=l(204),E=(l(223),l(390)),g=l(392),C=l(393),y=l(391),_=l(203),x=l(389),O=(l(224),l(387)),k=function(e){Object(u.a)(l,e);var t=Object(h.a)(l);function l(e){var n;return Object(c.a)(this,l),(n=t.call(this,e)).state={open:!0},n}return Object(o.a)(l,[{key:"render",value:function(){var e=this;return m.a.createElement(O.a,{size:"tiny",open:this.state.open,onClose:function(){return e.setState({open:!1})},onOpen:function(){return e.setState({open:!0})}},m.a.createElement(O.a.Header,null,"Old data"),m.a.createElement(O.a.Content,null,m.a.createElement(O.a.Description,null,m.a.createElement("p",null,"Right now, Bilkent Offerings has no schedule data for some reason. ",m.a.createElement("br",null),m.a.createElement("br",null),'This may be because "Weekly course schedules have been completely redesigned for the 2020-21 academic year," as they said. If that\'s the case, I will also change stuff to fit the "completely redesigned" scheduler format.',m.a.createElement("br",null),m.a.createElement("br",null),"However, until they decide to tell us exactly how things are going to be, this site will continue to operate on old course data. Unfortunately, I didn't do any backups, so the latest data is from August 16th, and there might be some differences from reality."))))}}]),l}(m.a.Component),j=Object(d.lazy)((function(){return l.e(3).then(l.bind(null,395))})),w=[];l.e(4).then(l.t.bind(null,396,3)).then((function(e){return e.data.forEach((function(e){w.push({value:e,label:e})}))}));var S,H=Object(v.a)(),T=[],M=[],R=[],A=[],F=function(e){Object(u.a)(l,e);var t=Object(h.a)(l);function l(e){var n;return Object(c.a)(this,l),(n=t.call(this,e)).state={visible:!1},n}return Object(o.a)(l,[{key:"render",value:function(){var e=this,t=[];for(var l in this.props.all_sections)for(var n in this.props.all_sections[l])t.push({value:l+"-"+this.props.all_sections[l][n],label:l+"-"+this.props.all_sections[l][n]});var a=[];for(var r in this.props.all_instructors)for(var s in this.props.all_instructors[r])a.push({value:r+"-"+this.props.all_instructors[r][s],label:r+"-"+this.props.all_instructors[r][s]});return m.a.createElement("div",{style:{padding:"0 0 2%"}},m.a.createElement("div",{style:{position:"absolute",top:"4.5%",padding:"3% 0px 2%"}},m.a.createElement(E.a,{icon:"angle double right",onClick:function(){return e.setState({visible:!0})},size:"huge",color:"blue"})),m.a.createElement("div",null,m.a.createElement(g.a,{columns:1},m.a.createElement(g.a.Column,null,m.a.createElement(C.a,{as:y.a,animation:"overlay",icon:"labeled",inverted:!0,onHide:function(){return e.setState({visible:!1})},vertical:!0,visible:this.state.visible,direction:"left",style:{width:"min(100%, 450px)"}},m.a.createElement(y.a.Item,{as:"a"},m.a.createElement("div",null,m.a.createElement(_.a,{content:"Exclude Section",color:"blue"}),m.a.createElement(b.a,{closeMenuOnSelect:!1,components:H,defaultValue:[],isMulti:!0,options:t,onChange:function(t){R=t,e.props.refresh()},theme:function(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:8,colors:Object(i.a)(Object(i.a)({},e.colors),{},{primary50:"hsl(0, 0%, 30%)",dangerLight:"#E68900",danger:"black",primary25:"grey",neutral0:"black",neutral50:"hsl(0, 0%, 70%)",neutral10:"hsl(0, 0%, 20%)",neutral80:"white"})})},className:"select"}))),m.a.createElement(y.a.Item,{as:"a"},m.a.createElement("div",null,m.a.createElement(_.a,{content:"Exclude Instructor",color:"blue"}),m.a.createElement(b.a,{closeMenuOnSelect:!1,components:H,defaultValue:[],isMulti:!0,options:a,onChange:function(t){S=t,e.props.refresh()},theme:function(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:8,colors:Object(i.a)(Object(i.a)({},e.colors),{},{primary50:"hsl(0, 0%, 30%)",dangerLight:"#E68900",danger:"black",primary25:"grey",neutral0:"black",neutral50:"hsl(0, 0%, 70%)",neutral10:"hsl(0, 0%, 20%)",neutral80:"white"})})},className:"select"}))),m.a.createElement(y.a.Item,null,m.a.createElement(E.a,{content:"Cancel",color:"red",onClick:function(){return e.setState({visible:!1})}})))))))}}]),l}(m.a.Component),I=function(e){Object(u.a)(l,e);var t=Object(h.a)(l);function l(e){var n;return Object(c.a)(this,l),(n=t.call(this,e)).state={course_codes:{},prefix_options:[]},fetch("course_codes.json").then((function(e){return e.json()})).then((function(e){return n.setState({course_codes:e})})),n}return Object(o.a)(l,[{key:"refresh_course_codes",value:function(e){for(var t=[],l=0;l<this.state.course_codes[e].length;l++)t.push({value:this.state.course_codes[e][l],label:this.state.course_codes[e][l]});this.setState({prefix_options:t})}},{key:"course_prefix_select",value:function(){var e=this;return m.a.createElement(b.a,{closeMenuOnSelect:!0,components:H,defaultValue:[],options:w,onChange:function(t){e.refresh_course_codes(t.value)},theme:function(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:8,colors:Object(i.a)(Object(i.a)({},e.colors),{},{primary50:"hsl(0, 0%, 30%)",primary:"#737373",danger:"black",primary25:"grey",neutral0:"white",neutral50:"black",neutral10:"hsl(0, 0%, 20%)",neutral40:"hsl(0, 0%, 90%)",neutral80:"black"})})},className:"select"})}},{key:"getColor",value:function(){return"hsl("+360*Math.random()+","+(25+70*Math.random())+"%,"+(75+10*Math.random())+"%)"}},{key:"handle_course_codes",value:function(e){var t=[];null!=e&&e.forEach((function(e){return t.push(e.value)})),T=t,A.push(this.getColor()),this.props.onNewCourse()}},{key:"course_code_select",value:function(e){var t=this;return m.a.createElement(b.a,{closeMenuOnSelect:!1,components:H,defaultValue:[],isMulti:!0,options:e,onChange:function(e){t.handle_course_codes(e)},theme:function(e){return Object(i.a)(Object(i.a)({},e),{},{borderRadius:8,colors:Object(i.a)(Object(i.a)({},e.colors),{},{primary:"#737373",primary50:"hsl(0, 0%, 30%)",dangerLight:"#E68900",danger:"red",primary25:"grey",neutral0:"white",neutral50:"black",neutral10:"hsl(0, 0%, 20%)",neutral80:"white"})})},className:"select"})}},{key:"render",value:function(){return m.a.createElement("div",null,this.course_prefix_select(),this.course_code_select(this.state.prefix_options))}}]),l}(m.a.Component),z=function(e){Object(u.a)(l,e);var t=Object(h.a)(l);function l(e){var n;return Object(c.a)(this,l),(n=t.call(this,e)).state={selected:!1},n}return Object(o.a)(l,[{key:"render",value:function(){var e=this;return m.a.createElement(x.a.Cell,{style:this.state.selected?{backgroundColor:"#737373"}:{},onClick:function(){e.setState({selected:!e.state.selected}),e.props.onClick(e.state.selected)}},this.props.value?m.a.createElement(_.a,{style:{width:"100%","font-size":this.props.value.length>8?"min(1.6vw, 14px)":"min(2vw, 14px)",backgroundColor:A[T.indexOf(this.props.value.split("-")[0])]}},this.props.value):"")}}]),l}(m.a.Component),W=function(e){Object(u.a)(l,e);var t=Object(h.a)(l);function l(){return Object(c.a)(this,l),t.apply(this,arguments)}return Object(o.a)(l,[{key:"renderCell",value:function(e,t){var l=this;return m.a.createElement(z,{value:this.props.schedule_table[5*e+t],onClick:function(n){return l.props.blockCell(t,e,n)}})}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{class:"table"},m.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"index.css"}),m.a.createElement(x.a,{singleLine:!0,unstackable:!0,style:{"table-layout":"fixed"},color:"grey",textAlign:"center"},m.a.createElement(x.a.Header,null,m.a.createElement(x.a.Row,{as:"tr"},m.a.createElement(x.a.HeaderCell,null),m.a.createElement(x.a.HeaderCell,null,"Mon"),m.a.createElement(x.a.HeaderCell,null,"Tue"),m.a.createElement(x.a.HeaderCell,null,"Wed"),m.a.createElement(x.a.HeaderCell,null,"Thu"),m.a.createElement(x.a.HeaderCell,null,"Fri"))),m.a.createElement(x.a.Body,null,m.a.createElement(x.a.Row,null,m.a.createElement(x.a.HeaderCell,{style:{height:"40px"}},"8:40-9:30"),this.renderCell(0,0),this.renderCell(0,1),this.renderCell(0,2),this.renderCell(0,3),this.renderCell(0,4)),m.a.createElement(x.a.Row,null,m.a.createElement(x.a.HeaderCell,{style:{height:"40px"},textAlign:"center"},"9:40-10:30"),this.renderCell(1,0),this.renderCell(1,1),this.renderCell(1,2),this.renderCell(1,3),this.renderCell(1,4)),m.a.createElement(x.a.Row,null,m.a.createElement(x.a.HeaderCell,{style:{height:"40px"},textAlign:"center"},"10:40-11:30"),this.renderCell(2,0),this.renderCell(2,1),this.renderCell(2,2),this.renderCell(2,3),this.renderCell(2,4)),m.a.createElement(x.a.Row,null,m.a.createElement(x.a.HeaderCell,{style:{height:"40px"},textAlign:"center"},"11:40-12:30"),this.renderCell(3,0),this.renderCell(3,1),this.renderCell(3,2),this.renderCell(3,3),this.renderCell(3,4)),m.a.createElement(x.a.Row,null,m.a.createElement(x.a.HeaderCell,{style:{height:"40px"},textAlign:"center"},"12:40-13:30"),this.renderCell(4,0),this.renderCell(4,1),this.renderCell(4,2),this.renderCell(4,3),this.renderCell(4,4)),m.a.createElement(x.a.Row,null,m.a.createElement(x.a.HeaderCell,{style:{height:"40px"},textAlign:"center"},"13:40-14:30"),this.renderCell(5,0),this.renderCell(5,1),this.renderCell(5,2),this.renderCell(5,3),this.renderCell(5,4)),m.a.createElement(x.a.Row,null,m.a.createElement(x.a.HeaderCell,{style:{height:"40px"},textAlign:"center"},"14:40-15:30"),this.renderCell(6,0),this.renderCell(6,1),this.renderCell(6,2),this.renderCell(6,3),this.renderCell(6,4)),m.a.createElement(x.a.Row,null,m.a.createElement(x.a.HeaderCell,{style:{height:"40px"},textAlign:"center"},"15:40-16:30"),this.renderCell(7,0),this.renderCell(7,1),this.renderCell(7,2),this.renderCell(7,3),this.renderCell(7,4)),m.a.createElement(x.a.Row,null,m.a.createElement(x.a.HeaderCell,{style:{height:"40px"},textAlign:"center"},"16:40-17:30"),this.renderCell(8,0),this.renderCell(8,1),this.renderCell(8,2),this.renderCell(8,3),this.renderCell(8,4))))))}}]),l}(m.a.Component),N=function(e){Object(u.a)(l,e);var t=Object(h.a)(l);function l(e){var n;return Object(c.a)(this,l),(n=t.call(this,e)).state={schedule_table:[],recvd_data:[],valid_combos:[],blocked_cells:{Mon:[],Tue:[],Wed:[],Thu:[],Fri:[]},schedule_no:0,all_sections:{},all_instructors:{}},n}return Object(o.a)(l,[{key:"product",value:function(e){return e.reduce((function(e,t){var l=[];return e.forEach((function(e){t.forEach((function(t){l.push(e.concat(t))}))})),l}),[[]])}},{key:"check_time_collision",value:function(e){var t=this;for(var l in R){var n=R[l].value.split("-");if(e[T.indexOf(n[0])]===n[1])return!1}for(var a in S){var r=S[a].value.split("-");if(this.state.recvd_data[T.indexOf(r[0])][e[T.indexOf(r[0])]][0]===r[1])return!1}for(var i={},c=0;c<e.length;c++){var o=this.state.recvd_data[c][e[c]][1],u=function(e){var l;if(e in i||(i[e]=[]),o[e].some((function(t){return i[e].includes(t)}))||o[e].some((function(l){return t.state.blocked_cells[e].includes(l)})))return{v:!1};(l=i[e]).push.apply(l,Object(s.a)(o[e]))};for(var h in o){var d=u(h);if("object"===typeof d)return d.v}}return!0}},{key:"create_table",value:function(e){for(var t=[],l=["Mon","Tue","Wed","Thu","Fri"],n=0;n<10;n++)for(var a=0;a<5;a++)for(var r=0;r<e.length;r++){var s=e[r],i=T[r],c=this.state.recvd_data[r][s][1];c[l[a]]&&c[l[a]].includes(n)?t[5*n+a]=i+"-"+s:t[5*n+a]||(t[5*n+a]="")}this.setState({schedule_table:t})}},{key:"get_schedules",value:function(){var e=Object(r.a)(a.a.mark((function e(){var t,l,n,r,s,i,c,o,u,h,d,m,f=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T.length){e.next=4;break}return M=T,this.setState({schedule_no:0,schedule_table:[],valid_combos:[]}),e.abrupt("return");case 4:if(M===T){e.next=9;break}return t=T.join(","),e.next=8,fetch("http://54.159.35.2:3000/api",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+t}).then((function(e){return e.json()})).then((function(e){f.setState({recvd_data:e.data})}));case 8:M=T;case 9:return l=[],n=[],e.next=13,this.state.recvd_data.forEach((function(e){n.push(Object.keys(e))}));case 13:return l=this.product(n),r=[],e.next=17,l.forEach((function(e){f.check_time_collision(e)&&r.push(e)}));case 17:for(s={},i=0;i<r.length;i++)for(c=0;c<r[i].length;c++)s[T[c]]||(s[T[c]]=[]),s[T[c]].includes(r[i][c])||s[T[c]].push(r[i][c]);if(s.length)for(o=0;o<T.length;o++)s[T[o]].sort();for(u={},h=0;h<r.length;h++)for(d=0;d<r[h].length;d++)u[T[d]]||(u[T[d]]=[]),u[T[d]].includes(this.state.recvd_data[d][r[h][d]][0])||u[T[d]].push(this.state.recvd_data[d][r[h][d]][0]);if(u.length)for(m=0;m<T.length;m++)u[T[m]].sort();this.setState({all_instructors:u,all_sections:s,valid_combos:r}),r.length?this.create_table(this.state.valid_combos[0]):this.setState({schedule_table:[]}),this.setState({schedule_no:0});case 26:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"nextSchedule",value:function(e){var t=this.state.schedule_no+e,l=this.state.valid_combos.length;t=(t%l+l)%l,this.state.valid_combos[t]&&this.create_table(this.state.valid_combos[t]),this.setState({schedule_no:t})}},{key:"blockCell",value:function(e,t,l){var n=this.state.blocked_cells;l?0===e?n.Mon.indexOf(t)>-1&&n.Mon.splice(n.Mon.indexOf(t),1):1===e?n.Tue.indexOf(t)>-1&&n.Tue.splice(n.Tue.indexOf(t),1):2===e?n.Wed.indexOf(t)>-1&&n.Wed.splice(n.Wed.indexOf(t),1):3===e?n.Thu.indexOf(t)>-1&&n.Thu.splice(n.Thu.indexOf(t),1):n.Fri.indexOf(t)>-1&&n.Fri.splice(n.Fri.indexOf(t),1):0===e?n.Mon.push(t):1===e?n.Tue.push(t):2===e?n.Wed.push(t):3===e?n.Thu.push(t):n.Fri.push(t),this.setState({blocked_cells:n})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{style:{position:"relative",width:"100%"}},m.a.createElement(k,null),m.a.createElement(F,{all_sections:this.state.all_sections,all_instructors:this.state.all_instructors,refresh:function(){return e.get_schedules()}}),m.a.createElement("h1",{style:{"text-align":"center",padding:"3% 0 2%","font-size":"min(8vw, 2.7em)"}},"Bilkent Scheduler"),m.a.createElement("div",{style:{position:"relative",left:"50%",transform:"translateX(-50%)",width:"100%","max-width":"800px"}},m.a.createElement("div",{style:{padding:"3% 0 3%"}},m.a.createElement(I,{onNewCourse:function(){return e.get_schedules()}})),m.a.createElement("p",{style:{"text-align":"center","font-size":"1.2em"}},"Combination ",this.state.valid_combos.length?this.state.schedule_no+1:0," out of ",this.state.valid_combos.length?this.state.valid_combos.length:0),m.a.createElement("div",{style:{overflow:"auto"}},m.a.createElement(W,{schedule_table:this.state.schedule_table,blockCell:function(t,l,n){e.blockCell(t,l,n),e.get_schedules()}}),m.a.createElement("div",{class:"prevbutton"},m.a.createElement(E.a,{onClick:function(){return e.nextSchedule(-1)},floated:"left",color:"blue",size:"medium"},"Prev")),m.a.createElement("div",{class:"nextbutton"},m.a.createElement(E.a,{onClick:function(){return e.nextSchedule(1)},floated:"right",color:"blue",size:"medium"},"Next"))),m.a.createElement("div",{style:{"text-align":"center",margin:"auto",position:"relative",left:"0",bottom:"0",width:"100%",padding:"110px 0 10px"}},"Do you have suggestions or want to contribute?",m.a.createElement("br",null),"Send a bug report or pull request: ",m.a.createElement("a",{href:"https://github.com/scarypercentage/bilkent-course-scheduler",title:"Github"},"Github"),m.a.createElement("br",null),"This site uses everything Google Analytics offers for fun. ",m.a.createElement("br",null)," Google Analytic uses your cookies and identifiers. ",m.a.createElement("br",null)," You may choose to ",m.a.createElement("a",{href:"https://tools.google.com/dlpage/gaoptout/",title:"optout"},"opt-out"),". For more info see the ",m.a.createElement(d.Suspense,{fallback:m.a.createElement("div",null,"Loading...")},m.a.createElement(j,null)),m.a.createElement("br",null),"Icons made by ",m.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," from ",m.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"),m.a.createElement("br",null),"Powered by React.js\xa0\xa0\xa0\xa0\xa0Theme by Semantic-UI")))}}]),l}(m.a.Component);p.a.render(m.a.createElement(N,null),document.getElementById("root"))}},[[215,1,2]]]);
//# sourceMappingURL=main.144161f9.chunk.js.map