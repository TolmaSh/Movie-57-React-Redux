(this["webpackJsonpmovie-database-react-redux"]=this["webpackJsonpmovie-database-react-redux"]||[]).push([[0],{32:function(e,a,t){e.exports=t(52)},46:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(15),o=t.n(i),m=t(9),r=t(7),c=t(31),s=t(14),d="SET_FAVOURITE",u="UNSET_FAVOURITE",v=function(e){return{type:u,payload:e}},g={films:[]},f=t(24),E=t(28),b=t.n(E),p=Object(r.b)({filmData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:return Object(s.a)(Object(s.a)({},e),{},{films:[].concat(Object(c.a)(e.films),[a.payload])});case u:return Object(s.a)(Object(s.a)({},e),{},{films:e.films.filter((function(e){return e.id!==a.payload}))});default:return e}}}),h={key:"root",storage:b.a},w=Object(f.a)(h,p),N=(t(43),t(44),t(46),t(11)),P=t(2),D=t(10),x=t(29),M=t.n(x),k=function(e){var a=Object(m.b)(),t=Object(m.c)((function(e){return e.filmData.films})).some((function(a){return a.id===e.modalPage.filmData.id})),l=function(){var l;a(t?v(e.modalPage.filmData.id):(l=e.modalPage.filmData,{type:d,payload:l}))};return n.a.createElement("div",{className:"modal-bg",style:{backgroundImage:"url(http://image.tmdb.org/t/p/original/".concat(e.modalPage.filmData.poster_path,")"),width:"100%",height:"100vh",backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"rgb(0, 0, 0, 0.7)"}},n.a.createElement("div",{className:"modal-container"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("div",{className:"left-button-desktop active-button",onClick:function(){e.setModalPage({filmData:null,id:0,totalFilms:0})}},n.a.createElement("svg",{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",className:"bi bi-arrow-left-circle",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),n.a.createElement("path",{fillRule:"evenodd",d:"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"})),n.a.createElement("span",{className:"button-text"},"Back to list")),n.a.createElement("div",{className:"left-button-mobile active-button",onClick:function(){e.setModalPage({filmData:null,id:0,totalFilms:0})}},n.a.createElement("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:"bi bi-arrow-left-short",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"})),n.a.createElement("span",{className:"button-text"},"Back")),e.modalPage.id>=e.modalPage.totalFilms?null:n.a.createElement("div",{className:"right-button-desktop active-button ",onClick:function(){return e.setNextFilm(e.modalPage.id)}},n.a.createElement("span",{className:"button-text"},"Next Movie"),n.a.createElement("svg",{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",className:"bi bi-arrow-right-circle",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),n.a.createElement("path",{fillRule:"evenodd",d:"M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"}))),e.modalPage.id>=e.modalPage.totalFilms?null:n.a.createElement("div",{className:"right-button-mobile active-button ",onClick:function(){return e.setNextFilm(e.modalPage.id)}},n.a.createElement("span",{className:"button-text"},"Next"),n.a.createElement("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:"bi bi-arrow-right-short",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"})))),n.a.createElement("div",{className:"modal-main"},n.a.createElement("div",{className:"modal-image"},n.a.createElement("img",{src:"http://image.tmdb.org/t/p/w342/".concat(e.modalPage.filmData.poster_path),alt:"Coming sooon....."})),n.a.createElement("div",{className:"main-information"},n.a.createElement("div",{className:"modal-information-title-desktop"},n.a.createElement("h1",null,e.modalPage.filmData.original_title," (",parseInt(e.modalPage.filmData.release_date),")"),n.a.createElement("button",{type:"button",className:"btn btn-outline-secondary favorite-button",onClick:l},t?"UnFavorite":"Add to favorite")),n.a.createElement("div",{className:"modal-information-desktop"},n.a.createElement("div",{className:"modal-information-score"},n.a.createElement("span",null,"Score:  ",e.modalPage.filmData.vote_average),n.a.createElement("span",null,"Rating:  ",e.modalPage.filmData.adult?"R":"PG-13"),n.a.createElement("span",null,"Realese Date:  ",e.modalPage.filmData.release_date)),n.a.createElement("div",{className:"modal-information-overview-desktop"},n.a.createElement("p",null,e.modalPage.filmData.overview))),n.a.createElement("div",{className:"modal-information-mobile"},n.a.createElement("div",{className:"modal-information-score"},n.a.createElement("span",null,n.a.createElement("b",null,"Score:"),e.modalPage.filmData.vote_average),n.a.createElement("span",null,n.a.createElement("b",null,"Rating:"),"  ",e.modalPage.filmData.adult?"R":"PG-13"),n.a.createElement("span",null,n.a.createElement("b",null,"Realese Date:"),"  ",e.modalPage.filmData.release_date)),n.a.createElement("button",{type:"button",className:"btn btn-outline-secondary favorite-button mobile-favorite-button",onClick:l},t?n.a.createElement("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:"bi bi-star-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})):n.a.createElement("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:"bi bi-star",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})))))),n.a.createElement("div",{className:"modal-information-title-mobile"},n.a.createElement("h1",null,e.modalPage.filmData.original_title," (",parseInt(e.modalPage.filmData.release_date),")")),n.a.createElement("div",{className:"modal-information-overview-mobile"},n.a.createElement("p",null,e.modalPage.filmData.overview)))," ")},z=function(e){return n.a.createElement("div",{className:"header-wrapper"},n.a.createElement("div",{className:"left-header"},n.a.createElement("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:"bi bi-globe",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4H2.255a7.025 7.025 0 0 1 3.072-2.472 6.7 6.7 0 0 0-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5h-2.49c.062-.89.291-1.733.656-2.5H3.82a13.652 13.652 0 0 0-.312 2.5zM4.847 5H7.5v2.5H4.51A12.5 12.5 0 0 1 4.846 5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5H7.5V11H4.847a12.5 12.5 0 0 1-.338-2.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v2.923c-.67-.204-1.335-.82-1.887-1.855A7.97 7.97 0 0 1 5.145 12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11H1.674a6.958 6.958 0 0 1-.656-2.5h2.49c.03.877.138 1.718.312 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12h2.355a7.967 7.967 0 0 1-.468 1.068c-.552 1.035-1.218 1.65-1.887 1.855V12zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5h-2.49A13.65 13.65 0 0 0 12.18 5h2.146c.365.767.594 1.61.656 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z"})),n.a.createElement(N.b,{to:"/",onClick:function(){e.setModalPage({filmData:null,id:0,totalFilms:0})}},n.a.createElement("h3",null,"Movies"))),n.a.createElement("div",{className:"right-header"},n.a.createElement("div",{className:"dropdown"},n.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},n.a.createElement("span",{className:"btn-text"},"My account")),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},n.a.createElement(N.b,{className:"dropdown-item",to:"/",onClick:function(){e.setModalPage({filmData:null,id:0,totalFilms:0})}},"Main Page"),n.a.createElement(N.b,{className:"dropdown-item",to:"/favorite",onClick:function(){e.setModalPage({filmData:null,id:0,totalFilms:0})}},"Favorite")))))},C=function(e){var a=Object(l.useState)({filmData:null,id:0,totalFilms:0}),t=Object(D.a)(a,2),i=t[0],o=t[1],m=Object(l.useState)([]),r=Object(D.a)(m,2),c=r[0],s=r[1],d=Object(l.useState)(1),u=Object(D.a)(d,2),v=u[0],g=u[1],f=Object(l.useState)(1),E=Object(D.a)(f,2),b=E[0],p=E[1],h=Object(l.useState)(0),w=Object(D.a)(h,2),N=w[0],P=w[1];Object(l.useEffect)((function(){fetch("http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=".concat(v)).then((function(e){return e.json()})).then((function(e){g(e.page),s(e.results),P(e.results.length),p(e.total_results)})).catch((function(e){return console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",e)}))}),[v]);var x=c.map((function(e,a){return n.a.createElement("div",{key:e.id,onClick:function(){!function(e,a){o({filmData:e,id:a,totalFilms:N})}(e,a+1)},className:"poster-wrap"},n.a.createElement("div",{className:"image-wrap"},n.a.createElement("img",{src:"http://image.tmdb.org/t/p/w342/".concat(e.poster_path),alt:"Coming sooon....."}),n.a.createElement("div",{className:"image-text"},n.a.createElement("div",null,n.a.createElement("strong",null,e.original_title)))))}));return null===(null===i||void 0===i?void 0:i.filmData)?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:null===(null===i||void 0===i?void 0:i.filmData)?"":"modal-menu"},n.a.createElement(z,{setModalPage:o,modalPage:i})),n.a.createElement("div",{className:"main-container"},n.a.createElement("div",{className:"main-title"},n.a.createElement("h2",null,"Latest Releases")),n.a.createElement("div",{className:"main-content"},x),n.a.createElement("div",{className:"main-footer"},n.a.createElement("div",{className:"footer-paginate"},n.a.createElement(M.a,{activePage:v,itemsCountPerPage:20,totalItemsCount:b,pageRangeDisplayed:3,onChange:g,prevPageText:"Prev",nextPageText:"Next",firstPageText:"First",lastPageText:"Last",hideDisabled:!0,itemClass:"page-item",linkClass:"page-link"}))))):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:null===(null===i||void 0===i?void 0:i.filmData)?"":"modal-menu"},n.a.createElement(z,{setModalPage:o,modalPage:i})),n.a.createElement(k,{setModalPage:o,modalPage:i,setNextFilm:function(e){o({filmData:c[e],id:e+1,totalFilms:N})}}))},O=function(e){var a=Object(m.b)(),t=Object(m.c)((function(e){return e.filmData.films})),i=Object(l.useState)({filmData:null,id:0,totalFilms:t.length}),o=Object(D.a)(i,2),r=o[0],c=o[1],s=t.length>0?t.map((function(e,l){return n.a.createElement("div",{className:"favorite-main",key:e.id},n.a.createElement("div",{className:"favorite-main-img ",onClick:function(){c({filmData:e,id:l+1,totalFilms:t.length})}},n.a.createElement("img",{src:"http://image.tmdb.org/t/p/w342/".concat(e.poster_path),alt:"Coming sooon....."})),n.a.createElement("div",{className:"favorite-main-information"},n.a.createElement("div",{className:"favorite-information-title"},n.a.createElement("h2",null,e.original_title),n.a.createElement("button",{type:"button",className:"btn btn-outline-secondary button-favorite-page",onClick:function(){return t=e.id,a(v(t));var t}},"Unfavorite")),n.a.createElement("div",{className:"favorite-information-overview"},n.a.createElement("p",null,e.overview))))})):n.a.createElement("p",null,"You dont have favourites films ;(");return null===(null===r||void 0===r?void 0:r.filmData)?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:null===(null===r||void 0===r?void 0:r.filmData)?"":"modal-menu"},n.a.createElement(z,{setModalPage:c,modalPage:r})),n.a.createElement("div",{className:"main-container"},n.a.createElement("div",{className:"main-title"},n.a.createElement("h2",null,"My favorite")),s)):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:null===(null===r||void 0===r?void 0:r.filmData)?"":"modal-menu"},n.a.createElement(z,{setModalPage:c,modalPage:r})),n.a.createElement(k,{setModalPage:c,modalPage:r,setNextFilm:function(e){c({filmData:t[e],id:e+1,totalFilms:t.length})}}))};t(51);var j=function(e){return n.a.createElement("div",{className:"App"},n.a.createElement(N.a,null,n.a.createElement(P.c,null,n.a.createElement(P.a,{exact:!0,path:"/Movie-57-React-Redux"},n.a.createElement(C,null)),n.a.createElement(P.a,{path:"/favorite"},n.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(30),F=function(){var e=Object(r.c)(w);return{store:e,persistor:Object(f.b)(e)}}(),H=F.store,R=F.persistor;o.a.render(n.a.createElement(m.a,{store:H},n.a.createElement(y.a,{loading:null,persistor:R},n.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.5b0af702.chunk.js.map