(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(13),i=a.n(r),l=a(27),c=a(18),o={searchInput:"",searchResults:[]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0,a=e;switch(t.type){case"SAVE_SEARCH_TERM":a.searchInput=t.term;break;case"SAVE_SEARCH_RESULTS":a.searchResults=t.results;break;case"@@INIT":break;default:console.log('Reducer does not understand the "'+t.type+'" action.',t,e)}return a},h=a(4),m=a(8),p=a(6),d=a(5),v=a(7),b=a(169),g=a(170),f=a(168),E=a(59),y=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return"waiting"===this.props.searchStatus?null:s.a.createElement("svg",{style:{display:"none"}},s.a.createElement("symbol",{id:"producer",viewBox:"0 0 64 64"},s.a.createElement("path",{d:"M32,2c0,0,7.2,10,7.2,21.6s-7.1,20.8-7.1,20.8s-7.4-9.2-7.4-20.8S32,2,32,2z M4.5,21.1c0,0,3,9,10.2,15.4s15.9,8,15.9,8s-2.4-8.7-9.6-15.1S4.5,21.1,4.5,21.1z M59.7,21.1c0,0-3,9-10.2,15.4s-15.9,8-15.9,8s2.4-8.7,9.6-15.1S59.7,21.1,59.7,21.1z M59,44.5c0,0-5.7,3.9-12.6,4.2s-12.5-2.9-12.5-2.9s5.2-3.9,12.1-4.3C53,41.1,59,44.5,59,44.5z M5.3,44.5c0,0,5.7,3.9,12.6,4.2s12.5-2.9,12.5-2.9s-5.2-3.9-12.1-4.3C11.4,41.1,5.3,44.5,5.3,44.5z M45.8,56.1c0,0-4.4-0.6-7.8-3.3s-4.7-6.6-4.7-6.6s4.1,0.3,7.6,3.1C44.3,52,45.8,56.1,45.8,56.1z M18.5,56.7c0,0,4.4-0.6,7.8-3.3s4.7-6.6,4.7-6.6s-4.1,0.3-7.6,3.1C19.9,52.6,18.5,56.7,18.5,56.7z M33.1,45.1h-1.8c0,0,0.5,11.4,5,17.7c0.5,0.2,1.9-0.4,2.9-0.4s1.4-0.9,1.4-0.9S34.4,56.6,33.1,45.1z"})),s.a.createElement("symbol",{id:"tier-1",viewBox:"0 0 64 64"},s.a.createElement("text",{x:"40",y:"62",className:"svg-icon-text"},"1")),s.a.createElement("symbol",{id:"tier-2",viewBox:"0 0 64 64"},s.a.createElement("text",{x:"40",y:"62",className:"svg-icon-text"},"2")),s.a.createElement("symbol",{id:"tier-3",viewBox:"0 0 64 64"},s.a.createElement("text",{x:"40",y:"62",className:"svg-icon-text"},"3")),s.a.createElement("symbol",{id:"medical",viewBox:"0 0 64 64"},s.a.createElement("path",{d:"M49.4,40.7c-3.5,0-6.4,2.7-6.8,6.1H31.3v-6.2l9.8-15c0.3-0.4,0.6-0.9,0.9-1.4l0.2-0.3l0,0c1-1.9,1.6-4,1.6-6.3V1.1h-7.2v2.5h1.8V2.9H42v14.7c0,2.1-0.5,4-1.5,5.6l-0.8,1.2c-2.1,2.8-5.4,4.6-9.2,4.6c-3.5,0-6.7-1.6-8.8-4.2l-1.3-2l0,0c-0.8-1.6-1.3-3.4-1.3-5.3V2.9h3.5v0.7h1.8V1.1h-7.1v16.6c0,3.2,1.1,6.1,3,8.4l9.3,14.2v6.6h-9.1c-4.6,0-8.4,3.8-8.4,8.4s3.8,8.4,8.4,8.4H23c4.6,0,8.4-3.8,8.4-8.4v-6.6h11.4c0.5,3.2,3.3,5.7,6.7,5.7c3.8,0,6.8-3.1,6.8-6.8C56.3,43.8,53.2,40.7,49.4,40.7z M29.5,55.2c0,3.6-3,6.6-6.6,6.6h-2.5c-3.6,0-6.6-3-6.6-6.6s3-6.6,6.6-6.6h9.1V55.2L29.5,55.2z M30.6,38.5l-5.8-8.9c1.7,0.8,3.7,1.3,5.8,1.3s4.1-0.5,5.9-1.4L30.6,38.5z M49.4,52.5c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S52.2,52.5,49.4,52.5z"})),s.a.createElement("symbol",{id:"processor",viewBox:"0 0 64 64"},s.a.createElement("path",{d:"M36.7,12.5V9.7H38c0.7,0,1.2-0.6,1.2-1.3v-5c0-0.7-0.5-1.3-1.2-1.3H11.4c-0.7,0-1.2,0.6-1.2,1.3v5c0,0.7,0.5,1.3,1.2,1.3h1.2v2.9c-4.4,1.9-7.2,6.3-7.2,11.3v33.4c0,2.8,2.2,5,4.8,5h29c2.7,0,4.8-2.2,4.8-5V23.8C44,18.9,41.1,14.4,36.7,12.5z M10,23.4c0.5,0,0.9-0.4,0.9-0.9c0.1-1.6,1.6-3.7,3-4.1c0.5-0.1,0.7-0.6,0.6-1.2c-0.1-0.5-0.6-0.8-1.1-0.6c-2.2,0.6-4.2,3.5-4.3,5.9C9.1,22.9,9.5,23.4,10,23.4z M5.4,27.9H44v27.4H5.4V27.9z M8.6,32h10.1 M13.6,44.9V32 M8.6,51.2H44 M8.6,47.9h8.2 M29.2,45V31 M21.8,44.9V31 M21.6,37.9h7.1 M39.8,34.6c0-3.5-6.5-3.8-6.5,0s0,2.1,0,6.3s6.5,4.3,6.5,0 M49.3,4.9l-3.8,0.4c-0.3,0-0.5,0.2-0.7,0.4c-0.1,0.2-0.2,0.5-0.1,0.8l2.4,7l-0.5,0.1C45,13.7,43.8,15.4,44,17l7.5,44.4c0.1,0.5,0.5,0.8,1,0.7l2.5-0.3c0.2,0,0.5-0.2,0.6-0.3c0.1-0.2,0.2-0.4,0.2-0.6l-2.5-45c0-0.8-0.5-1.6-1.1-2.2c-0.6-0.5-1.4-0.7-2.2-0.6l-0.5,0.1l0.9-7.3c0-0.3-0.1-0.5-0.3-0.7C49.9,4.9,49.6,4.8,49.3,4.9z M49.9,52.4l5.4-0.7"})),s.a.createElement("symbol",{id:"retailer",viewBox:"0 0 64 64"},s.a.createElement("path",{d:"M63,45v16c0,1.1-0.9,2-2,2H3c-1.1,0-2-0.9-2-2V45H63z M3,45v-6l2-2h54l2,2v6 M59,37V14c0-1.1-0.8-2-1.9-2c0,0-0.1,0-0.1,0h-3 M5,37V14c0-1.1,0.8-2,1.9-2c0,0,0.1,0,0.1,0h3 M27,1h26c0.6,0,1,0.4,1,1v12c0,0.6-0.4,1-1,1H27c-0.6,0-1-0.4-1-1V2C26,1.4,26.4,1,27,1z M30,5h20v6H30V5z M1,49h24l1,4h12l1-4h24 M28,49h8 M26,24h4v-4h-4 M34,20h4v4h-4V20z M42,20h4v4h-4V20z M42,28h4v4h-4V28z M34,28h4v4h-4V28z M26,28h4v4h-4V28z M6,41h2 M56,41h2 M10,41h44 M10,5h12v15H10V5z M22,12h4 M10,24h12v8H10V24z M50,19h4v13h-4V19z M8,20h16 M10,28h12 M13,9h6 M13,13h2 M17,13h2 M5,55v3c0,0.5,0.4,1,1,1c0,0,0,0,0,0h3"})),s.a.createElement("symbol",{id:"transportation",viewBox:"0 0 64 64"},s.a.createElement("path",{d:"M15.7,43.3c3,0,5.5,2.5,5.5,5.5s-2.5,5.5-5.5,5.5s-5.5-2.5-5.5-5.5C10.2,45.7,12.6,43.3,15.7,43.3 M47,43.3c3,0,5.5,2.5,5.5,5.5S50,54.3,47,54.3s-5.5-2.5-5.5-5.5C41.5,45.7,43.9,43.3,47,43.3 M24.2,48.8h14.3 M7.1,48.8H4c-0.8,0-1.6-0.5-1.9-1.2c-0.2-0.6-0.5-1.4-0.5-2.4c0-2.8,0-28.1,0-28.1s0-2.7,2.3-2.7h34.7c1.5,0,2.7,1.2,2.8,2.6v0.1c0,0,4.3,0,7.5,0s4.7,2.5,4.7,2.5s5.5,8.2,7.1,10.6s1.4,3.7,1.4,3.7s0,8.7,0,12.8c0,2.1-0.7,2.1-1.4,2.1s-5.1,0-5.1,0 M41.4,17v20.6 M41.4,37.6H1.7 M44.7,22v10.4c0,1.1,0.9,2,2,2h8.2c1.1,0,2-0.9,2-2v-0.7c0-0.6-0.2-1.3-0.6-1.8L50,21.3c-0.4-0.5-1-0.8-1.7-0.8h-2.2C45.4,20.4,44.7,21.1,44.7,22z"})))}}]),t}(n.Component),j=a(19),O=a(167),k=a(3),C=a(76),N=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).toggle=a.toggle.bind(Object(j.a)(Object(j.a)(a))),a.state={isOpen:!1},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.props.location.pathname;return s.a.createElement(k.i,{dark:!0,expand:"sm",className:"navbar"},s.a.createElement(k.j,{tag:O.a,to:"/"},"Good Greens"),s.a.createElement(k.k,{onClick:this.toggle}),s.a.createElement(k.b,{isOpen:this.state.isOpen,navbar:!0},s.a.createElement(k.f,{className:"ml-auto",navbar:!0},s.a.createElement(k.g,null,s.a.createElement(k.h,{tag:O.a,to:"/",active:"/"===e||""===e},"Search")),s.a.createElement(k.g,null,s.a.createElement(k.h,{tag:O.a,to:"/naughty/",active:"/naughty/"===e},"Naughty List")),s.a.createElement(k.g,null,s.a.createElement(k.h,{tag:O.a,to:"/about/",active:"/about/"===e},"About & FAQ ")))))}}]),t}(n.Component),w=Object(C.a)(N),S=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement(k.c,{id:"footer"},s.a.createElement(k.l,null,s.a.createElement(k.a,{xs:"12"},"This site is in no way affiliated with any of the companies or brands listed."),s.a.createElement(k.a,{xs:"12"},"Information provided by the ",s.a.createElement("a",{href:"https://data.lcb.wa.gov/",target:"_blank",rel:"noopener noreferrer"},"Washington State Liquor and Cannabis Control Board")," API and may not be completly up-to-date."),s.a.createElement(k.a,{xs:"12"},"Made with; ",s.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),", ",s.a.createElement("a",{href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer"},"Redux"),", ",s.a.createElement("a",{href:"https://reacttraining.com/react-router/",target:"_blank",rel:"noopener noreferrer"},"React Router"),", ",s.a.createElement("a",{href:"https://reactstrap.github.io/",target:"_blank",rel:"noopener noreferrer"},"reactstrap"),", ",s.a.createElement("a",{href:"https://github.com/AdeleD/react-paginate",target:"_blank",rel:"noopener noreferrer"},"React Paginate"),", ",s.a.createElement("a",{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},"SASS"),", and hosted on ",s.a.createElement("a",{href:"# put repo link here",rel:"noopener noreferrer"},"GitHub"))))}}]),t}(n.Component),x=a(26),M=a.n(x),L=a(58),z=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).renderDetailSubBox=function(e){return"naughtyList"===a.props.type?a.renderViolations(e.violations):a.renderTypes(e.license_number,e.types)},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"renderTypes",value:function(e,t){var a=[];return t.forEach(function(t){var n=t.replace(/-/g," "),r="lic-"+e+"-type-"+t,i=t.split("-")[0],l=[s.a.createElement("use",{key:r+"-icon",className:"type-icon type-"+t,title:n,href:"#"+i})];if("producer"===i){var c=t.split("-")[2];l.push(s.a.createElement("use",{key:r+"-tier-number",className:"tier-number",title:"Tier "+c,href:"#tier-"+c}))}a.push(s.a.createElement("svg",{key:r},l))}),a}},{key:"renderViolations",value:function(e){return s.a.createElement("h3",{className:"violations"},e,s.a.createElement("i",null,"Violations"))}},{key:"render",value:function(){var e=this.props.data;if(void 0===e||void 0===e.license||void 0===e.organization)return null;var t=["search-result"],a="";"ACTIVE"===e.active.substr(0,6)?(a="",t.push("lic-active")):"PENDING"===e.active.substr(0,7)?(a="(Pending)",t.push("lic-pending")):(a=e.active,t.push("lic-unknown")),e.types=e.type.replace(/MARIJUANA /g,"").toLowerCase().replace(/ /g,"-").split("/"),t.push.apply(t,Object(L.a)(e.types));var n=e.organization.toLowerCase().replace(/[^a-z0-9]+/g,"-");return s.a.createElement(k.e,{key:"licnumkey"+e.license,className:t.join(" ")},s.a.createElement(O.a,{to:"/details/"+e.license+"/"+n},s.a.createElement(k.l,{className:"d-flex"},s.a.createElement(k.a,{xs:"auto",className:"mr-auto"},s.a.createElement("h4",null,e.organization)," ",s.a.createElement("h5",null,a," License# ",e.license),s.a.createElement("br",null),s.a.createElement("address",null,e.address+" "+(void 0!==e.address_line_2?e.address_line_2:"")+" "+e.city+", "+e.county+" county "+e.state)),s.a.createElement(k.a,{xs:"auto",className:"extra"},this.renderDetailSubBox(e)))))}}]),t}(n.Component),V=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=void 0===this.props.pageNumber?1:this.props.pageNumber;if("waiting"===this.props.searchStatus){return s.a.createElement(k.l,{className:"search-message"},s.a.createElement(k.a,{className:"waiting"},""))}var t="Searching the Washington State Liquor and Cannabis Control Board API...",a="searching";if("completed"===this.props.searchStatus){a="searched";var n="";this.props.resultCount>this.props.resultsPerPage&&(n=", showing results "+((e-1)*this.props.resultsPerPage+1)+" to "+e*this.props.resultsPerPage),0===this.props.resultCount?(a+=" none-found",t="Unable to find any orginizations that match your search."):t=this.props.resultCount<1e3?"Found "+this.props.resultCount+" licenses matching your search"+n+".":"Found at least 1,000 licenses matching your search"+n+"."}return s.a.createElement(k.l,{className:"search-message"},s.a.createElement(k.a,{className:a},t))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).updateSearch=function(e){e.preventDefault();var t=e.target.querySelector("#search-term").value,n=a.state;n.input=t,n.searchStatus="searching",a.setState(n),a.props.saveSearchTerm(t),a.getSearchResults()},a.getSearchResults=function(){var e=a.state.input.toUpperCase(),t=["https://data.lcb.wa.gov/resource/bhbp-x4eb.json?"];t.push("$where=organization%20like%20%27%25"+e+"%25%27"),t.push("or license%20like%20%27"+e+"%25%27"),t.push("or ubi%20like%20%27"+e+"%25%27"),t.push("&$order=%20organization"),fetch(t.join("")).then(function(e){return e.json()}).then(a.storeSearchResults)},a.storeSearchResults=function(e){var t=a.state;t.results=e,t.searchStatus="completed",a.setState(t),a.props.saveSearchResults(e)},a.displaySearchResults=function(){var e=a.props.match.params.page;e=void 0===e?1:e;var t=[];if(a.state.results.length>0)for(var n=(e-1)*a.state.pageCount;n<e*a.state.pageCount;n++)void 0!==a.state.results[n]&&t.push(s.a.createElement(z,{data:a.state.results[n],key:"searchResultsLic"+a.state.results[n].license}));return t},a.handlePageChange=function(e){a.props.history.push("/search/"+(e.selected+1))},a.state={input:a.props.searchInput,results:a.props.searchResults,searchStatus:"waiting",pageCount:50},a.state.results.length>0&&(a.state.searchStatus="completed"),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement(k.c,null,s.a.createElement(k.l,null,s.a.createElement(k.a,null,s.a.createElement("p",null))),s.a.createElement("form",{onSubmit:this.updateSearch,id:"main-search-form",className:"row"},s.a.createElement("input",{placeholder:"Enter a orginization name, license number, or UBI number.",id:"search-term",name:"search-term",type:"search",defaultValue:this.state.input,className:"col"}),s.a.createElement("button",{className:"col-sm-2"},"Search")),s.a.createElement(V,{searchStatus:this.state.searchStatus,resultCount:this.state.results.length,resultsPerPage:this.state.pageCount,pageNumber:this.props.match.params.page}),s.a.createElement(k.d,{className:"row",flush:!0},this.displaySearchResults()),s.a.createElement(M.a,{containerClassName:this.state.results.length<=this.state.pageCount?"pagination hidden":"pagination justify-content-center",pageCount:Math.ceil(this.state.results.length/this.state.pageCount),pageRangeDisplayed:5,marginPagesDisplayed:3,onPageChange:this.handlePageChange,pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active",breakClassName:"page-link page-item disabled",previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link",nextLinkClassName:"page-link",disabledClassName:"disabled"}))}}]),t}(n.Component),_=Object(l.b)(function(e){return e},function(e){return{saveSearchTerm:function(t){e({type:"SAVE_SEARCH_TERM",term:t})},saveSearchResults:function(t){e(function(e){return{type:"SAVE_SEARCH_RESULTS",results:e}}(t))}}})(D),R=a(20),A=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).outputSimilarResults=function(){var e=[];return a.props.similars.forEach(function(t){e.push(s.a.createElement(z,{data:t,key:"searchResultsLic"+t.license}))}),e},a.combinedDetails=function(){var e=[a.props.current.license],t="";return a.props.similars.forEach(function(a){e.push(a.license),""===t&&(t=a.organization)}),"/details/"+e.join(",")+"/"+t.toLowerCase().replace(/[^a-z0-9]/g,"-")},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return null===this.props.similars||0===this.props.similars.length?null:s.a.createElement(k.c,{className:"similar-box"},s.a.createElement(k.l,null,s.a.createElement("h3",{className:"fancy"},"Similar Licenses")),s.a.createElement(k.l,null,s.a.createElement(k.a,null,this.outputSimilarResults())),s.a.createElement(k.l,null,s.a.createElement(k.a,{className:"combine-link justify-content-end"},s.a.createElement(O.a,{to:this.combinedDetails(),className:"btn  btn-outline-primary"},"Combine all above orginizations"))))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).licenseNavDisplay=function(){return a.props.licenses.length>1?s.a.createElement("span",{className:"license-traversal-btn"},s.a.createElement("button",{onClick:a.updateDisplayedLicense,className:"btn btn-outline-primary",disabled:a.licenseNavDisabled(-1),"data-adjustment":-1,id:"lic-back-b"},"Back"),s.a.createElement("span",{className:"btn not-a-btn"},a.state.displayed+1," of ",a.props.licenses.length),s.a.createElement("button",{onClick:a.updateDisplayedLicense,className:"btn btn-outline-primary",disabled:a.licenseNavDisabled(1),"data-adjustment":1,id:"lic-forward-b"},"Forward")):null},a.licenseNavDisabled=function(e){return e<0?a.state.displayed+e<0:e>0&&(e>0&&a.state.displayed+e>=a.props.licenses.length)},a.updateDisplayedLicense=function(e){var t=parseInt(e.target.dataset.adjustment),n=a.state.displayed+t;if(n>=0&&n<a.props.licenses.length){var s=a.state;s.displayed=n,a.setState(s)}},a.state={displayed:0},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){if(void 0===this.props.licenses[this.state.displayed].address)return null;var e=this.props.licenses[this.state.displayed];return s.a.createElement(k.c,null,s.a.createElement(k.l,{className:"lic-orgname"},s.a.createElement(k.a,{xs:"auto",className:"mr-auto",tag:"h1"},e.organization),s.a.createElement(k.a,{xs:"auto"},this.licenseNavDisplay())),s.a.createElement(k.l,{className:"lic-details"},s.a.createElement(k.a,{xs:"2"},"Address"),s.a.createElement(k.a,{xs:"10"},e.address+" "+(void 0!==e.address_line_2?e.address_line_2:"")+" "+e.city+", "+e.state+" "+e.zip),s.a.createElement(k.a,{xs:"2"},"County"),s.a.createElement(k.a,{xs:"4"},e.county),s.a.createElement(k.a,{xs:"2"},"Phone Number"),s.a.createElement(k.a,{xs:"4"},e.dayphone),s.a.createElement(k.a,{xs:"2"},"Type"),s.a.createElement(k.a,{xs:"10"},e.type),s.a.createElement(k.a,{xs:"2"},"UBI"),s.a.createElement(k.a,{xs:"4"},e.ubi),s.a.createElement(k.a,{xs:"2"},"License Number"),s.a.createElement(k.a,{xs:"4"},e.license),s.a.createElement(k.a,{xs:"2"},"Creation Date"),s.a.createElement(k.a,{xs:"4"},e.createdate),s.a.createElement(k.a,{xs:"2"},"Status"),s.a.createElement(k.a,{xs:"4"},e.active)))}}]),t}(n.Component),H=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=[],a=!1;return this.props.visitRecord.records.forEach(function(n,r){var i=a?"":e.props.visitRecord.date;a=!0;var l=null;e.props.showLic&&(l=s.a.createElement("td",null,n.license_number));var c=n.activity;"violation"===n.type&&(c=s.a.createElement("div",{key:"violation"+r,className:"activity violation"},s.a.createElement("span",{className:"wac-code"},s.a.createElement("a",{href:"http://apps.leg.wa.gov/wac/default.aspx?cite="+n.wac_code.replace(/\(.+\)/,""),target:"_blank",rel:"noopener noreferrer"},n.wac_code)),n.violation_type,s.a.createElement("i",null,n.penalty_type))),t.push(s.a.createElement("tr",{key:e.props.visitRecord.index+"-"+r},s.a.createElement("td",{className:"date"},i),l,s.a.createElement("td",null,c)))}),t}}]),t}(n.Component),I=function(e){function t(e){var a;Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).getLicenseDetails=function(e){var t=["https://data.lcb.wa.gov/resource/bhbp-x4eb.json?"];t.push('$where=license in ("'+a.state.license.join('","')+'") '),fetch(t.join("")).then(function(e){return e.json()}).then(a.storeAPIResults.bind(null,"licDetails"))},a.getSimilarLicenses=function(e){if(null===a.state.similarLicenses){var t=a.state;t.similarLicenses=[],a.setState(t);var n=["https://data.lcb.wa.gov/resource/bhbp-x4eb.json?"];n.push('$where=organization like "'+a.state.name+'" '),n.push("or ubi%20like%20%27"+a.state.ubi+"%25%27"),fetch(n.join("")).then(function(e){return e.json()}).then(a.storeAPIResults.bind(null,"similarLicenses"))}},a.getVisits=function(e){var t=["https://data.lcb.wa.gov/resource/w7wg-8m52.json?"];t.push('$where=license_number in ("'+a.state.license.join('","')+'") '),t.push("&$order=date desc"),fetch(t.join("")).then(function(e){return e.json()}).then(a.storeAPIResults.bind(null,"visits"))},a.getViolations=function(e){var t=["https://data.lcb.wa.gov/resource/dgm4-3cm6.json?"];t.push('$where=license_number in ("'+a.state.license.join('","')+'") '),t.push("&$order=visit_date desc"),fetch(t.join("")).then(function(e){return e.json()}).then(a.storeAPIResults.bind(null,"violations"))},a.storeAPIResults=function(e,t){var n=a.state;switch(e){case"violations":case"visits":null===n[e]&&(n[e]=[]),n[e]=n[e].concat(t);break;case"licDetails":n.licenseDetails=t,n.name=t[0].organization,a.getSimilarLicenses();break;case"similarLicenses":t.forEach(function(e){a.state.license.indexOf(e.license)<0&&n.similarLicenses.push(e)});break;default:throw new Error('Unable to store the "'+e+'" type API results.')}a.setState(n),null!==n.visits&&null!==n.violations&&a.combineVisitsViolations()},a.combineVisitsViolations=function(){var e=function(){return{date:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",hasViolation:!1,records:[]}},t={};a.state.visits.forEach(function(a,n){var s=a.date.substr(0,10);void 0===t[s]&&(t[s]=e(s)),t[s].records.push(Object(R.a)({type:"visit"},a))}),a.state.violations.forEach(function(a,n){var s=a.visit_date.substr(0,10);void 0===t[s]&&(t[s]=e(s)),t[s].hasViolation=!0,t[s].records.push(Object(R.a)({type:"violation"},a))}),t=Object.keys(t).map(function(e){return t[e]});var n=a.state;n.vvOrdered=t,a.setState(n)},a.displayVisits=function(){if(null===a.state.vvOrdered)return null;if(0===a.state.vvOrdered.length)return s.a.createElement("div",null,s.a.createElement("h3",{className:"fancy"},"Visits & Violations"),s.a.createElement(k.l,{className:"no-visit-message"},s.a.createElement(k.a,null,"There or no visits or violations associated with this license.")));var e=a.state.license.length>1,t=[];a.state.vvOrdered.forEach(function(n,r){n.index=r,t.push(s.a.createElement(H,{key:n.date,showLic:e,visitRecord:n,visits:a.state.visits,violations:a.state.violations}))});var n=a.state.visits.length+" visits and ";return a.state.violations.length>0?n+=a.state.violations.length+" violations.":n+="no violations.",s.a.createElement("div",null,s.a.createElement("h3",{className:"fancy"},"Visits & Violations"),s.a.createElement("div",{className:"visit-violation-summary"},n),s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Date"),e?s.a.createElement("th",null,"License"):null,s.a.createElement("th",null,"Details"))),s.a.createElement("tbody",null,t)))};var n=e.match.params.license.split(",");return a.state={name:"",license:n,licenseDetails:[{organization:""}],similarLicenses:null,displayedLicense:0,visits:null,violations:null,vvOrdered:null},a.getLicenseDetails(),a.getVisits(),a.getViolations(),a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement(k.c,{location:this.props.location.pathname},s.a.createElement(P,{licenses:this.state.licenseDetails}),s.a.createElement(A,{current:this.state.licenseDetails[this.state.displayedLicense],similars:this.state.similarLicenses}),this.displayVisits())}}]),t}(n.Component),B=a(56),T=a.n(B),$=a(57),U=a.n($),W=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).state={readme:""},e}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch(U.a).then(function(e){return e.text()}).then(function(t){return e.setState({readme:t})})}},{key:"render",value:function(){return s.a.createElement(k.c,null,s.a.createElement(T.a,{className:"readme-markdown",source:this.state.readme}))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).saveData=function(e,t){return new Promise(function(n,s){var r=a.state;switch(t){case"violatorsOrdered":r.violatorsOrdered=e;break;case"violatorsData":e.forEach(function(e){r.violatorsData[e.license]=e});break;default:s(new Error('saveData does not know what to do with "'+t+'" type data.'))}a.setState(r),n(e)})},a.getNaughty=function(){var e=["https://data.lcb.wa.gov/resource/dgm4-3cm6.json?"];e.push("$select=license_number,count(penalty_type)"),e.push("&$group=(license_number)&$order=count(penalty_type)desc"),fetch(e.join("")).then(function(e){return e.json()}).then(function(e){return a.saveData(e,"violatorsOrdered")}).then(a.getLicenseData)},a.getLicenseData=function(e){var t=e.map(function(e){return e.license_number}),n=["https://data.lcb.wa.gov/resource/bhbp-x4eb.json?"];n.push('$where=license in ("'+t.join('","')+'") '),fetch(n.join("")).then(function(e){return e.json()}).then(function(e){return a.saveData(e,"violatorsData")}).then(a.cleanNaughtyList)},a.cleanNaughtyList=function(){var e=a.state.violatorsOrdered.map(function(e){return e.license_number}),t=a.state;e.forEach(function(e,n){void 0===a.state.violatorsData[e]&&t.violatorsOrdered.splice(n,1)}),a.setState(t)},a.displayList=function(){var e=a.props.match.params.page;void 0===e&&(e=1);for(var t=[],n=(e-1)*a.state.pageSize;n<e*a.state.pageSize;n++)if(void 0!==a.state.violatorsOrdered[n]){var r=a.state.violatorsOrdered[n].license_number,i=Object(R.a)({violations:a.state.violatorsOrdered[n].count_penalty_type},a.state.violatorsData[r]);t.push(s.a.createElement(z,{data:i,type:"naughtyList",key:"naughtyList"+r}))}return t},a.handlePageChange=function(e){a.props.history.push("/naughty/"+(e.selected+1))},a.render=function(){return s.a.createElement(k.c,null,s.a.createElement("p",{className:"naughty-note"},"This page lists all licenses by number of violations; records do not combine similar licenses, see ",s.a.createElement(O.a,{to:"/about/"},"About")," for more details. "),s.a.createElement(k.d,{className:"row",flush:!0},a.displayList()),s.a.createElement(M.a,{pageCount:Math.ceil(a.state.violatorsOrdered.length/a.state.pageSize),pageRangeDisplayed:5,marginPagesDisplayed:3,onPageChange:a.handlePageChange,containerClassName:a.state.violatorsOrdered.length<=a.state.pageSize?"pagination hidden":"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active",breakClassName:"page-link page-item disabled",previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link",nextLinkClassName:"page-link",disabledClassName:"disabled"}))},a.state={violatorsData:{},violatorsOrdered:[],pageSize:50},a.getNaughty(),a}return Object(v.a)(t,e),t}(n.Component),G=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement(b.a,{basename:"/good-greens/"},s.a.createElement(E.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(w,null),s.a.createElement(g.a,null,s.a.createElement(f.a,{exact:!0,path:"/",component:_,key:"Home"}),s.a.createElement(f.a,{exact:!0,path:"/search/:page",component:_,key:"Home"}),s.a.createElement(f.a,{path:"/details/:license/:prettyname",component:I,key:"Details"}),s.a.createElement(f.a,{exact:!0,path:"/about/",component:W,key:"About"}),s.a.createElement(f.a,{exact:!0,path:"/naughty/",component:F,key:"NaughtyList"}),s.a.createElement(f.a,{exact:!0,path:"/naughty/:page",component:F,key:"NaughtyList"})),s.a.createElement(S,null),s.a.createElement(y,null))))}}]),t}(n.Component);a(160),a(162),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=Object(c.b)(window.devToolsExtension?window.devToolsExtension():function(e){return e})(c.c)(u);i.a.render(s.a.createElement(l.a,{store:q},s.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,a){e.exports=a.p+"static/media/README.1c27cfa5.md"},60:function(e,t,a){e.exports=a(165)}},[[60,2,1]]]);
//# sourceMappingURL=main.ffc3a784.chunk.js.map