(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"s",(function(){return r})),n.d(t,"l",(function(){return o})),n.d(t,"m",(function(){return i})),n.d(t,"k",(function(){return a})),n.d(t,"n",(function(){return c})),n.d(t,"o",(function(){return s})),n.d(t,"p",(function(){return u})),n.d(t,"q",(function(){return l})),n.d(t,"r",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"g",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return v})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"i",(function(){return b})),n.d(t,"j",(function(){return O})),n.d(t,"h",(function(){return x}));var r="SET_UP_MAIN_CONTENT",o="FETCH_MOVIES_START",i="FETCH_MOVIES_SUCCESS",a="FETCH_MOVIES_FAIL",c="FETCH_NOW_PLAYING",s="FETCH_POPULAR",u="FETCH_TOP_RATED",l="SEARCH_MOVIES",d="SEARCH_MOVIES_INIT",h="AUTH_USER_BEGIN",p="AUTH_USER_SUCCESS",f="AUTH_USER_FAIL",v="AUTH_USER_INIT",j="ADD_MOVIE_START",m="ADD_MOVIE_SUCCESSS",g="ADD_MOVIE_FAIL",b="FETCH_FAV_MOVIES_START",O="FETCH_FAV_MOVIES_SUCCESS",x="FETCH_FAV_MOVIES_FAIL"},,,,function(e,t,n){"use strict";n.d(t,"h",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"k",(function(){return u})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"f",(function(){return f})),n.d(t,"e",(function(){return v})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(2),o=n(14),i=n.n(o),a=n(12),c=function(){return{type:r.l}},s=function(e,t,n){return function(o){i.a.get(e).then((function(e){var i=function(e){return e.map((function(e){return{title:e.title,overview:e.overview,rating:e.vote_average,language:e.original_language,posterPath:a.b+e.poster_path,backdropPath:a.b+e.backdrop_path,isFavorite:!1}}))}(e.data.results);o(function(e,t){return{type:r.m,subType:t,movies:e}}(i,t)),n(i[0].title,i[0])})).catch((function(e){o(function(e){return{type:r.k,error:e}}(e))}))}},u=function(e){return{type:r.s,movieData:e}},l=function(e){return{type:r.q,event:e}},d=function(){return{type:r.r}},h=n(5),p=function(e,t,n){return function(o){var c=Object(h.a)({userId:t},e);o({type:r.b}),i.a.post(a.a+"/favMovies.json",c).then((function(e){console.log(e),n(),o({type:r.c})})).catch((function(e){o(function(e){return{type:r.a,error:e}}(e))}))}},f=function(){return{type:r.i}},v=function(e,t){return function(n){n(f());var o='&orderBy="userId"&equalTo="'+e+'"';i.a.get(a.a+"/favMovies.json?"+o).then((function(e){var o;n((o=e.data,{type:r.j,movies:o})),t()})).catch((function(e){n(function(e){return{type:r.h,error:e}}(e))}))}},j=function(){return localStorage.removeItem("refreshToken"),localStorage.removeItem("localId"),{type:r.f}},m=function(e,t){return{type:r.g,refreshToken:e,localId:t}},g=function(e,t){return function(n){n(j()),n({type:r.d}),i.a.post(e,{email:t.email,password:t.password,returnSecureToken:!0}).then((function(e){localStorage.setItem("refreshToken",e.data.refreshToken),localStorage.setItem("localId",e.data.localId),n(m(e.data.refreshToken,e.data.localId))})).catch((function(e){n(function(e){return{type:r.e,error:e}}(e.response.data.error.message))}))}},b=function(){return function(e){var t=localStorage.getItem("refreshToken"),n=localStorage.getItem("localId");e(t?m(t,n):j())}}},,,,,,function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r="https://api.themoviedb.org/3/movie/now_playing?api_key=b8d315eb0e211e00d9a1598237e544f5",o="https://api.themoviedb.org/3/movie/top_rated?api_key=b8d315eb0e211e00d9a1598237e544f5",i="https://api.themoviedb.org/3/movie/popular?api_key=b8d315eb0e211e00d9a1598237e544f5",a="https://image.tmdb.org/t/p/original",c="https://netflix-clone-6a4cd-default-rtdb.firebaseio.com"},,,,,,,,function(e,t,n){e.exports={Continue:"_3TXLeGQIGSk_3eMw50T2k3",Cancel:"_3jKS36zoA6ObDtSjQl7PyK",Fill:"_3RtjH9GVvFIFsKXde5BycR",isFavorite:"_1h5QFS-UjhXrra-JdLEZwJ"}},,,function(e,t,n){e.exports={SpecialMovie:"_2Kt7vn9hjeYCVSWu_ovKz4",Details:"ewRecy7gdXT-LVI_hxV8V",Preview:"WjpmeiifprdzKGDtDMnLr",Icon:"_2uBEd2XN-5AwKRgiu_gV-2",IconMobile:"_3dLyAXE1y3eXhtdqQEDtBd"}},function(e,t,n){e.exports={HomeLoader:"TBvwqnJmlVJHcd7jwUG6S",Flex1:"_3cypp2eQCQ1NA2die59sPq",Flex2:"_3Q5X86afZ_FI6uSadUu1sk",Flex3:"_28QKMmLrC6fL-K5PyM-VSr"}},,,,function(e,t,n){e.exports={BoxItem:"_3MsoUnZRzcdYElYxLq8ULc",Loading:"_1ZgcN3JtIU5AncuL1DFnVx",loading:"_2SNzx3HKCdC2HLC4whxo04"}},function(e,t,n){e.exports={SideBar:"_3849X3fDIaTVVYzjN9awSc",Open:"BaZaayiwh7f4RCZRGHsjM",Close:"_1qsVDCnLQ5dZM-lU809WzQ"}},,function(e,t,n){"use strict";n(0);var r=n(20),o=n.n(r),i=n(1);t.a=function(e){var t=[o.a.Continue];"cancel"===e.type&&(t=e.filled?[o.a.Cancel,o.a.Fill]:[o.a.Cancel]);var n="+ My list",r=!1;return e.isFavorite&&(r=!0,t=[o.a.isFavorite],n="Added to list"),Object(i.jsx)("button",{disabled:r,onClick:e.clicked,className:t.join(" "),children:e.children?e.children:n})}},,,function(e,t,n){e.exports={NavigationItem:"UivwTkgXn5FLwRgvsUTHT",Active:"_2DU1WooSIo4d_HG_vSfI6e"}},,,function(e,t,n){e.exports={Input:"_3cc5JUlEnDaeT0COqxfuRM",Valid:"_3uVmQNBhxCt1St-Hfo5a87"}},function(e,t,n){e.exports={SpecialMoviesContainer:"_15m68wtd-fYhFFUUp91oa7",SpecialMovies:"_1q1MidGuZfLwb5F4JD6UUn"}},function(e,t,n){e.exports={Auth:"_1w3toNAhLoa6tDxHziEbjF",moveIn:"H8wca_jyoMnatxyPZfhJk"}},function(e,t,n){"use strict";n(0);var r=n(61),o=n.n(r),i=n(1);t.a=function(e){return Object(i.jsx)("div",{className:o.a.loader,children:"Loading..."})}},function(e,t,n){"use strict";n(0);var r=n(23),o=n.n(r),i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACM0lEQVRoge2ZMW4TQRSGvzfx2vIdKHyDxE1KpHTI4gLUICEouALhCBRISFwgF8COEII6QshOHxRkQgENSigix9l9FJCGsNn37NlxUPZrd3b+//ebnbezhoaGm43EnGzWH9wTeAKsA92/Lp8C+4o874xf78TSjBZgvjF4qsK2SVTZzibDZzF0SwOcb9wZFBJeAL0YQkvwOaCPW+PR6F8XQ9ldhYSXrN48QE+RV2UXSwP8L5QGCOhD4DChlzIOER6s2kRDw3WlspGdrd/dJBR7KcxcQovN9mT3w1VDKrfRrDX/Es+RjywLldqVFVCQeX9wCnSiuLIzy8bDroBeNaiyAgKK8jWeLzNHVebB2omFFSwjNWlaXyWmSzhZEDFpmgKoSPIKqEasgBgni4kE249mChC0SL6Egmq8JZSvVe/Hsclzm6YpQJuz5BVod21Vtz0DH98eAydLOfJxInsjk57jRJZwJxL7tm0OoNgeqhio2noAOAKk3ErF2IXBEyBhM/NoXdMlZNeyV6BI1wtE7VrmAHkrXTfOsxoq0DnmCMP7eQS086Mwnz/sS+hgNAO+L2TJgcK3P1omvJ8Wa19G4tRwBRDqP5l5NVwBNMHRUrXOCqToxqHGChQaan8GrEfJC3wVWAuffHb8iMqBa7xnsIKc9wdThVs+W2am2XjYs3wPusC7CymF3gdyt7VqiqDFI495WOAvpmx/9EZEthDeo/z03n+J33O8E9XbrcnucOn5GhpuGL8Aw7m37bo4V0wAAAAASUVORK5CYII=",a=n(42),c=n(1),s=function(e){var t=e.showRemoveIcon?Object(c.jsx)("img",{className:o.a.Icon,onClick:e.iconClicked,src:i,alt:"icon remove"}):null,n=e.showRemoveIcon?Object(c.jsx)("img",{className:o.a.IconMobile,onClick:e.iconClicked,src:i,alt:"icon remove"}):null;return Object(c.jsxs)("a",{href:"#home-page",className:o.a.SpecialMovie,onClick:e.clicked,children:[n,Object(c.jsxs)("div",{className:o.a.Details,children:[t,Object(c.jsx)("h4",{children:e.title}),Object(c.jsxs)("strong",{children:[e.rating,"/10"]}),Object(c.jsx)("p",{children:e.overview})]}),Object(c.jsx)(a.a,{sources:[{srcSet:e.posterPath,media:"(max-width: 600px)"},{srcSet:e.backdropPath,media:"(min-width: 600px)"}]})]})},u=n(38),l=n.n(u);t.a=function(e){var t=e.movies.map((function(t){return Object(c.jsx)(s,{clicked:function(){return e.clicked(t.title,t)},iconClicked:function(n){return e.iconClicked(n,t.id,t.title,t)},title:t.title,overview:t.overview,rating:t.rating,posterPath:t.posterPath,backdropPath:t.backdropPath,showRemoveIcon:e.showRemoveIcon},t.title)}));return Object(c.jsxs)("div",{className:l.a.SpecialMoviesContainer,children:[Object(c.jsx)("h1",{children:e.heading}),Object(c.jsx)("div",{className:l.a.SpecialMovies,children:t})]})}},,,,,,,,,,,,function(e,t,n){e.exports={App:"_2vBGDjWDi9-6QYyuXTdXZZ"}},function(e,t,n){e.exports={NavigationBar:"_2jPVP6ygCPcEdrDVZ9a-kw"}},function(e,t,n){e.exports={SideBarToggler:"_3Uk2l_g-FoZFeusuExoTvt"}},,function(e,t,n){e.exports={BoxLoader:"_1kguv-Uk3WpIMj3ISyiDWH"}},function(e,t,n){e.exports={MyList:"_3bz44rSeYaYtAICGDeloOb"}},function(e,t,n){e.exports={SearchMovieItems:"_1deqW4j6blqOkkjNX7W65y"}},function(e,t,n){e.exports={SearchMovieItem:"uXEolbvmCwwNgNVokUdjT"}},function(e,t,n){e.exports={loader:"_25DpGkjvssm2axgcDcx_18",load8:"_11JyyZrQA3LMpi4W7vVaKh"}},function(e,t,n){e.exports={Backdrop:"_1DQZgBuQbOpKYprWsLV9Bf"}},,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(25),a=n.n(i),c=n(51),s=n(30),u=n(7),l=n(21),d=(n(72),n(5)),h=n(15),p=n(16),f=n(18),v=n(17),j=n(53),m=n.n(j),g=n(34),b=n.n(g),O=n(1),x=function(e){return Object(O.jsx)(l.b,{to:e.path,exact:!0,className:b.a.NavigationItem,activeClassName:b.a.Active,children:e.children})},S=n(54),y=n.n(S),A=n(6),C=n(37),I=n.n(C),w=function(e){var t=[I.a.Input];return e.isValid&&t.push(I.a.Valid),Object(O.jsx)("input",{className:t.join(" "),type:e.type,onChange:e.onChangeListener,placeholder:e.placeholder,value:e.value})},M=n(55),k=n.n(M),_=function(e){return Object(O.jsxs)("div",{className:k.a.SideBarToggler,onClick:e.toggleSideBar,children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})},F=Object(u.b)((function(e){return{searchQuery:e.searchMovies.searchQuery,isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{searchMovies:function(t){return e(A.i(t))}}}))((function(e){var t=[{name:"home",path:"/"},{name:"top rated",path:"/top-rated"},{name:"now playing",path:"/now-playing"}];e.isAuthenticated&&t.push({name:"my list",path:"/my-list"});var n=t.map((function(e){return Object(O.jsx)(x,{path:e.path,children:e.name},e.name)})),r=Object(O.jsx)(x,{path:"/auth",children:"Sign In"});return e.isAuthenticated&&(r=Object(O.jsx)(x,{path:"/logout",children:"Logout"})),Object(O.jsxs)("div",{className:y.a.NavigationBar,children:[Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",alt:"netflix-logo"}),Object(O.jsx)(_,{toggleSideBar:e.toggleSideBar}),Object(O.jsx)("nav",{children:n}),Object(O.jsx)(w,{onChangeListener:function(t){return e.searchMovies(t)},type:"text",value:e.searchQuery,placeholder:"Search over 1000 movies"}),r]})})),L=n(3),E=n(41),N=n(28),T=n.n(N),V=function(){return Object(O.jsx)("figure",{className:T.a.BoxItem,children:Object(O.jsx)("div",{className:[T.a.BoxItem,T.a.Loading].join(" ")})})},B=n(57),D=n.n(B),U=function(){for(var e=[],t=0;t<20;t++)e.push(Object(O.jsx)(V,{},t));return Object(O.jsx)("div",{className:D.a.BoxLoader,children:e})},R=n(58),P=n.n(R),H=n(14),Q=n.n(H),q=n(12),z=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={redirect:!1},e.userId=localStorage.getItem("localId"),e.updateMovie=function(t,n){var r=n;e.props.favList.map((function(e){return e.title===t&&(console.log("true"),r=Object(d.a)(Object(d.a)({},e),{},{isFavorite:!1})),null})),e.props.setUpMainContent(r)},e.onIconClick=function(t,n,r,o){t.stopPropagation(),Q.a.delete(q.a+"/favMovies/"+n+".json").then((function(t){e.props.fetchFavMovies(e.userId),e.updateMovie(r,o)})).catch((function(e){return console.log(e)}))},e.onClick=function(t,n){e.props.setUpMainContent(n),e.setState({redirect:!0})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchFavMovies(this.userId)}},{key:"render",value:function(){var e=this,t=Object(O.jsx)(E.a,{showRemoveIcon:!0,clicked:function(t,n){return e.onClick(t,n)},movies:this.props.favList,heading:"My List",iconClicked:function(t,n,r,o){return e.onIconClick(t,n,r,o)}});this.props.favList.length<=0&&(t=Object(O.jsx)("h1",{style:{color:"#fff",fontSize:"2rem"},children:"No movie found in your list! Add some"})),this.props.loading&&(t=Object(O.jsx)(U,{}));var n=this.state.redirect?Object(O.jsx)(L.a,{to:"/fav-list"}):null;return Object(O.jsxs)("div",{className:P.a.MyList,children:[n,t]})}}]),n}(r.Component),K=Object(u.b)((function(e){return{title:e.movie.title,favList:e.favMovieList.movies,loading:e.favMovieList.fetchLoading,error:e.favMovieList.error}}),(function(e){return{setUpMainContent:function(t){return e(A.k(t))},fetchFavMovies:function(t){return e(A.e(t))}}}))(z),W=n(59),X=n.n(W),J=n(60),Z=n.n(J),G=function(e){return Object(O.jsxs)("div",{className:Z.a.SearchMovieItem,onClick:e.clicked,children:[Object(O.jsx)("img",{src:e.posterPath,alt:"poster"}),Object(O.jsx)("p",{children:e.title})]})},Y=Object(u.b)(null,(function(e){return{setUpMainContent:function(t){return e(A.k(t))},searchMoviesInitializer:function(){return e(A.j())}}}))((function(e){var t=e.movies.filter((function(t){return""!==e.searchQuery&&t.title.toLowerCase().includes(e.searchQuery.toLowerCase())})).map((function(t){return Object(O.jsx)(G,{clicked:function(){return e.clicked(t.title,t)},posterPath:t.posterPath,title:t.title},t.title)}));return Object(O.jsx)("div",{className:X.a.SearchMovieItems,onClick:e.searchMoviesInitializer,children:t})})),$=n(2),ee=n(26),te=n(31),ne=n(39),re=n.n(ne),oe=function(e,t){return Object(d.a)(Object(d.a)({},e),t)},ie=n(40),ae=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={authForm:{email:{config:{value:"",type:"text",placeholder:"Email"},auth:{isValid:!1,isRequired:{email:!0,password:!1}}},password:{config:{value:"",type:"password",placeholder:"Password"},auth:{isValid:!1,isRequired:{email:!1,password:!0}}}}},e.onChangeEmail=function(t){e.setState({email:t.target.value})},e.onChangePassword=function(t){e.setState({password:t.target.value})},e.authentication=function(t,n){var r=oe(e.state.authForm[n].config,{value:t.target.value}),o=oe(e.state.authForm[n].auth,{isValid:e.isValid(e.state.authForm[n].auth.isRequired,r.value)}),i=oe(e.state.authForm[n],{config:r,auth:o}),a=oe(e.state.authForm,Object(ee.a)({},n,i)),c=oe(e.state,{authForm:a});e.setState(c)},e.isValid=function(e,t){return e.email?t.trim().includes("@")&&t.trim().endsWith(".com")&&!t.trim().includes('~!#$%^&*()_+{}|:"<>?`-=[];.,/'):e.password?t.trim().length>6:t.trim()>0},e.errorFormatter=function(e){return e.split("_").join(" ")},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.authForm)t.push({id:n,config:this.state.authForm[n].config,isValid:this.state.authForm[n].auth.isValid});var r=t.map((function(t){return Object(O.jsx)(w,{isValid:t.isValid,onChangeListener:function(n){return e.authentication(n,t.id)},placeholder:t.config.placeholder,type:t.config.type},t.id)})),o=this.props.isAuthenticated?Object(O.jsx)(L.a,{to:"/top-rated"}):null,i=null;this.props.loading&&(i=Object(O.jsx)("div",{className:re.a.Auth,children:Object(O.jsx)(ie.a,{})}));var a=null;return this.props.error&&(a=Object(O.jsx)("p",{style:{color:"#d2342d",fontSize:"1.6rem",textAlign:"center"},children:this.errorFormatter(this.props.error)})),Object(O.jsxs)("div",{className:re.a.Auth,children:[i,a,o,r,Object(O.jsxs)("div",{style:{textAlign:"left",marginTop:".5rem"},children:[Object(O.jsx)(te.a,{clicked:function(){return e.props.signIn("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC7yv6BjFqcLu4vvY4W1EgNdqHfhdR-kko",{email:e.state.authForm.email.config.value,password:e.state.authForm.password.config.value})},type:"continue",children:"Sign In"}),Object(O.jsx)(te.a,{clicked:function(){return e.props.signUp("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC7yv6BjFqcLu4vvY4W1EgNdqHfhdR-kko",{email:e.state.authForm.email.config.value,password:e.state.authForm.password.config.value})},type:"cancel",children:"Create new Account"})]})]})}}]),n}(r.Component),ce=Object(u.b)((function(e){return{error:e.auth.error,isAuthenticated:e.auth.isAuthenticated,loading:e.auth.loading}}),(function(e){return{signIn:function(t,n){return e(A.b(t,n))},signUp:function(t,n){return e(A.b(t,n))}}}))(ae),se=n(24),ue=n.n(se),le=function(){return Object(O.jsxs)("div",{className:ue.a.HomeLoader,children:[Object(O.jsxs)("div",{className:ue.a.Flex1,children:[Object(O.jsx)(V,{}),Object(O.jsxs)("div",{className:ue.a.Flex2,children:[Object(O.jsx)(V,{}),Object(O.jsxs)("div",{className:ue.a.Flex3,children:[Object(O.jsx)(V,{}),Object(O.jsx)(V,{}),Object(O.jsx)(V,{}),Object(O.jsx)(V,{}),Object(O.jsx)(V,{}),Object(O.jsx)(V,{}),Object(O.jsx)(V,{}),Object(O.jsx)(V,{}),Object(O.jsx)(V,{}),Object(O.jsx)(V,{})]})]})]}),Object(O.jsx)(U,{})]})},de=n(29),he=n.n(de),pe=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){var t=[he.a.SideBar];e.show?t.push(he.a.Open):t.push(he.a.Close);var n=[{name:"home",path:"/"},{name:"top rated",path:"/top-rated"},{name:"now playing",path:"/now-playing"}];e.isAuthenticated&&n.push({name:"my list",path:"/my-list"});var r=n.map((function(e){return Object(O.jsx)(x,{path:e.path,children:e.name},e.name)}));return Object(O.jsxs)("div",{className:t.join(" "),onClick:e.toggleSideBar,children:[Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",alt:"netflix-logo"}),Object(O.jsx)("nav",{children:r})]})})),fe=n(62),ve=n.n(fe),je=function(e){return e.show?Object(O.jsx)("div",{className:ve.a.Backdrop,onClick:e.toggleSideBar}):null},me=function(e){return function(t){Object(f.a)(r,t);var n=Object(v.a)(r);function r(){var e;Object(h.a)(this,r);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).state={component:null},e}return Object(p.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(O.jsx)(e,Object(d.a)({},this.props)):null}}]),r}(r.Component)},ge=me((function(){return n.e(3).then(n.bind(null,104))})),be=me((function(){return n.e(7).then(n.bind(null,105))})),Oe=me((function(){return n.e(5).then(n.bind(null,106))})),xe=me((function(){return n.e(6).then(n.bind(null,107))})),Se=me((function(){return n.e(4).then(n.bind(null,108))})),ye=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).localId=localStorage.getItem("localId"),e.state={show:!1},e.toggleSideBar=function(){e.setState({show:!e.state.show})},e.fetchAllMovies=function(){e.props.fetchMovies(q.c,$.n,(function(t,n){return e.setUpContent(t,n)})),e.props.fetchMovies(q.e,$.p,(function(t,n){return e.setUpContent(t,n)})),e.props.fetchMovies(q.d,$.o,(function(t,n){return e.setUpContent(t,n)}))},e.setUpContent=function(t,n){e.props.fetchFavMovies(e.localId,(function(){return e.updateMovie(t,n)}))},e.updateMovie=function(t,n){var r=n;e.props.favMovies.map((function(e){return e.title===t&&(r=Object(d.a)(Object(d.a)({},e),{},{isFavorite:!0})),null})),e.props.setUpMainContent(r)},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchMoviesStart(),this.props.authUserStart(),this.fetchAllMovies()}},{key:"render",value:function(){var e=this,t=null;this.props.loading&&(t=Object(O.jsx)(le,{}));var n=this.props.isAuthenticated?Object(O.jsx)(L.b,{path:"/my-list",exact:!0,component:K}):null;return Object(O.jsxs)("div",{className:m.a.App,children:[t,Object(O.jsx)(F,{toggleSideBar:this.toggleSideBar}),Object(O.jsx)(je,{toggleSideBar:this.toggleSideBar,show:this.state.show}),Object(O.jsx)(pe,{toggleSideBar:this.toggleSideBar,show:this.state.show}),Object(O.jsx)(Y,{clicked:function(t,n){return e.setUpContent(t,n)},movies:this.props.allMovies,searchQuery:this.props.searchQuery}),Object(O.jsxs)(L.d,{children:[n,Object(O.jsx)(L.b,{path:"/logout",exact:!0,component:be}),Object(O.jsx)(L.b,{path:"/fav-list",exact:!0,component:ge}),Object(O.jsx)(L.b,{path:"/top-rated",exact:!0,component:xe}),Object(O.jsx)(L.b,{path:"/now-playing",exact:!0,component:Se}),Object(O.jsx)(L.b,{path:"/",component:Oe})]}),Object(O.jsx)(L.b,{path:"/auth",component:ce})]})}}]),n}(r.Component),Ae=Object(u.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,favMovies:e.favMovieList.movies,allMovies:e.movie.allMovies,loading:e.movie.loading,searchQuery:e.searchMovies.searchQuery}}),(function(e){return{setUpMainContent:function(t){return e(A.k(t))},authUserStart:function(){return e(A.d())},fetchMoviesStart:function(){return e(A.h())},fetchMovies:function(t,n,r){return e(A.g(t,n,r))},fetchFavMovies:function(t,n){return e(A.e(t,n))}}}))(ye),Ce=function(e){return Array.from(new Set(e.map((function(e){return e.title})))).map((function(t){return e.find((function(e){return e.title===t}))}))},Ie={title:"",overview:"",rating:"",language:"",posterPath:"",backdropPath:"",isFavorite:!1,allMovies:[],popular:[],topRated:[],nowPlaying:[],error:null,loading:!1},we=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case $.l:return oe(t,{loading:!0});case $.m:switch(n.subType){case $.o:return e={loading:!1,popular:n.movies,allMovies:Ce(t.allMovies.concat(n.movies)),error:null},oe(t,e);case $.n:return e={loading:!1,nowPlaying:n.movies,allMovies:Ce(t.allMovies.concat(n.movies)),error:null},oe(t,e);case $.p:return e={loading:!1,topRated:n.movies,allMovies:Ce(t.allMovies.concat(n.movies)),error:null},oe(t,e);default:return t}case $.k:return oe(t,{error:n.error,loading:!1});case $.s:return e={title:n.movieData.title,overview:n.movieData.overview,rating:n.movieData.rating,language:n.movieData.language,posterPath:n.movieData.posterPath,backdropPath:n.movieData.backdropPath,isFavorite:n.movieData.isFavorite,loading:!1},oe(t,e);default:return t}},Me={searchQuery:""},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.q:return oe(e,{searchQuery:t.event.target.value});case $.r:return oe(e,{searchQuery:""});default:return e}},_e={movies:[],addLoading:!1,fetchLoading:!1,error:null},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.b:return oe(e,{addLoading:!0,error:null});case $.c:return oe(e,{addLoading:!1,error:null});case $.a:return oe(e,{addLoading:!1,error:t.error});case $.i:return oe(e,{fetchLoading:!0,error:null});case $.j:var n=[];for(var r in t.movies)n.push(Object(d.a)({id:r},t.movies[r]));return oe(e,{movies:Ce(n),fetchLoading:!1,error:null});case $.h:return oe(e,{fetchLoading:!1,error:t.error});default:return e}},Le={refreshToken:null,localId:null,error:null,isAuthenticated:!1,loading:!1},Ee=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case $.f:return oe(t,e={refreshToken:null,localId:null,error:null,isAuthenticated:!1,loading:!1});case $.d:return oe(t,e={loading:!0,isAuthenticated:!1});case $.g:return e={refreshToken:n.refreshToken,localId:n.localId,error:null,isAuthenticated:!0,loading:!1},oe(t,e);case $.e:return e={error:n.error,isAuthenticated:!1,loading:!1},oe(t,e);default:return t}},Ne=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,109)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),i(e),a(e)}))},Te=Object(s.b)({movie:we,searchMovies:ke,favMovieList:Fe,auth:Ee}),Ve=Object(s.c)(Te,Object(s.a)(c.a));a.a.render(Object(O.jsx)(u.a,{store:Ve,children:Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(l.a,{children:Object(O.jsx)(Ae,{})})})}),document.getElementById("root")),Ne()}],[[99,1,2]]]);
//# sourceMappingURL=main.a74eb5cd.chunk.js.map