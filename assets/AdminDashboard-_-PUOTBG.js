import{_ as m,u as d,o as h,c as p,b as o,a as s,w as n,d as i,s as k,F as A,r as c}from"./index-DC0eWpiD.js";import{A as x}from"./AlertMessages-DfjWVE3-.js";var $={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"dollob_api",BASE_URL:"/Happiness-Breakfast-Day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:_}=$,b={data(){return{isLogin:!1}},components:{AlertMessages:x},methods:{checkAdmin(){const t=`${_}/api/user/check`;d.post(t).then(e=>{this.isLogin=!0}).catch(e=>{this.$refs.AlertMessages.show_alert(e==null?void 0:e.response.data.message,1300,"error"),this.$router.push("/login")})},signout(){const t=`${_}/logout`;d.post(t).then(e=>{document.cookie="hexToken=;expires=;path=/",this.$refs.AlertMessages.show_toast("已成功登出~~"),this.$router.push("/login")}).catch(e=>{this.$refs.AlertMessages.show_alert(e==null?void 0:e.response.data.message,1300,"error"),this.$router.push("/login")})}},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.axios.defaults.headers.common.Authorization=t,this.checkAdmin()}},w={class:"nav sidebar position-fixed flex-column h-100 bg-black text-white fw-bold px-2 overflow-hidden justify-content-start"},M=s("div",null,[s("li",{class:"nav-item mt-2"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/dollob_api/1711251316866.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mktI3HWO3w9YqWZCy71jMXTTggBMgUtbGJ1VEizol73xK9QQmc3d%2FUkeOHg42F7Po1RToxZZ6ZmdVrl8oHJIkK7nnRF3COgy1S8sivLpDChVXl%2FHbvqsnx8WR0rIqVRcujN5uXbnl1dYZ5S2%2FWdYiRSr1nmYWfSwisVIeQBJyEnsndP3w5xf0Yf7vEMj2fAt1lGQ1Z%2FpAqQbxTssMCocAZzCTVlM5f5MooH%2BBY3VX7TeibPRIcl7B5WoKb4XyPtvWGlKvO28Mym%2F4zNPuwnhLUoA9ggiyNxG29VPv2ktyD9kL8T3sNYhDvgvJrySB%2BmrkM%2FSfbWXtytV4a4EqjsQpA%3D%3D",alt:"好不幸福早餐店"})])],-1),P={class:"nav-item mt-4"},V={class:"nav-item mt-4"},E={class:"nav-item mt-4"},R={class:"nav-item mt-4"},T={class:"nav-item mt-4"};function y(t,e,u,f,v,l){const r=c("alert-messages"),a=c("RouterLink");return h(),p(A,null,[o(r,{ref:"AlertMessages"},null,512),s("ul",w,[M,s("div",null,[s("li",P,[o(a,{to:"/",class:"nav-link h4"},{default:n(()=>[i("返回前台")]),_:1})]),s("li",V,[o(a,{to:"/admin/products",class:"nav-link h4"},{default:n(()=>[i("產品列表")]),_:1})]),s("li",E,[o(a,{to:"/admin/orders",class:"nav-link h4"},{default:n(()=>[i("訂單列表")]),_:1})]),s("li",R,[o(a,{to:"/admin/Coupons",class:"nav-link h4"},{default:n(()=>[i("優惠卷列表")]),_:1})]),s("li",T,[s("a",{href:"#",class:"nav-link h4",onClick:e[0]||(e[0]=k((...g)=>l.signout&&l.signout(...g),["prevent"]))},"登出")])])])],64)}const B=m(b,[["render",y]]),I={components:{AdminNavbar:B}},N={class:"container-fluid ps-0"},D={class:"row"},F={class:"col-2"},L={class:"col-10"};function S(t,e,u,f,v,l){const r=c("AdminNavbar"),a=c("router-view");return h(),p("div",N,[s("div",D,[s("div",F,[o(r)]),s("div",L,[o(a)])])])}const U=m(I,[["render",S]]);export{U as default};
