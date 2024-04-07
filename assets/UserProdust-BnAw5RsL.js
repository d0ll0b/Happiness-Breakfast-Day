import{F as v}from"./FairyLoading-BmbdhaJQ.js";import{A}from"./AlertMessages-JIZeSrfZ.js";import{_ as b,a as y,c as P,d as _,w as x,b as s,t as a,e as c,v as L,x as w,F as V,r as p,o as E}from"./index-FcHiHiKZ.js";import{c as M}from"./cartStore-miyaYOZU.js";var I={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"dollob_api",BASE_URL:"/Happiness-Breakfast-Day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let g="";const{VITE_APP_API_URL:u,VITE_APP_API_NAME:h}=I,T={data(){return{product:{},qty:1,isLoading:!1}},components:{FairyLoading:v,AlertMessages:A},methods:{get_product(){this.isLoading=!0;const o=`${u}/api/${h}/product/${g}`;this.axios.get(o).then(e=>{const{product:n}=e.data;this.product=n}).catch(e=>{this.$refs.AlertMessages.show_alert(e==null?void 0:e.response.data.message,1300,"error")}).finally(()=>{this.isLoading=!1})},add_cart(o,e=1,n){let r="",t="";const l=`加入購物車成功，新增${e}筆商品~~`;this.isLoading=!0,n==="new"?(r=`${u}/api/${h}/cart`,t="post"):(r=`${u}/api/${h}/cart/${n}`,t="put");const d={product_id:o,qty:e};this.axios[t](r,{data:d}).then(i=>{this.$refs.AlertMessages.show_toast(l),this.get_cart()}).catch(i=>{this.$refs.AlertMessages.show_alert(i==null?void 0:i.response.data.message,1300,"error")}).finally(()=>{this.isLoading=!1})},toastMsg(o){this.$refs.messageToast.show_toast(o)},...y(M,["get_cart"])},mounted(){g=this.$route.params.id,this.get_product()}},U=s("h1",null,"產品頁面",-1),D={class:"container"},$={class:"bg-primary text-white rounded-pill py-1 mb-1"},B={class:"h5 mb-0"},N={class:"mb-1"},R={class:"row"},S={class:"col-sm-6"},k=["src"],F={class:"col-sm-6 text-start"},q={class:"badge bg-primary rounded-pill"},C=s("br",null,null,-1),O=s("br",null,null,-1),H=s("br",null,null,-1),j={class:"h6"},z={class:"h5"},G={class:"input-group mt-3"};function J(o,e,n,r,t,l){const d=p("fairy-loading"),i=p("VueLoading"),f=p("alert-messages");return E(),P(V,null,[U,_(i,{active:t.isLoading},{default:x(()=>[_(d)]),_:1},8,["active"]),_(f,{ref:"AlertMessages"},null,512),s("div",D,[s("div",$,[s("div",B,[s("span",null,a(t.product.title),1)])]),s("div",N,[s("div",R,[s("div",S,[s("img",{class:"img-fluid",src:t.product.imageUrl,alt:""},null,8,k)]),s("div",F,[s("span",q,a(t.product.category),1),s("p",null,[c("商品描述："),C,c(a(t.product.description),1)]),O,s("p",null,[c("商品內容："),H,c(a(t.product.content),1)]),s("del",j,"原價 "+a(t.product.origin_price)+" 元",1),s("div",z,"現在只要 "+a(t.product.price)+" 元",1),s("div",null,[s("div",G,[L(s("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":e[0]||(e[0]=m=>t.qty=m)},null,512),[[w,t.qty,void 0,{number:!0}]]),s("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=m=>l.add_cart(t.product.id,t.qty,"new"))},"加入購物車")])])])])])])],64)}const Y=b(T,[["render",J]]);export{Y as default};
