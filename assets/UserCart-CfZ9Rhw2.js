import{F as A}from"./FairyLoading-DdcXap8q.js";import{A as L}from"./AlertMessages-DfjWVE3-.js";import{_ as $,c as l,b as m,w as k,a as t,n as _,F as y,k as w,t as p,q as P,r as b,o as r,d as x,p as M,v as V}from"./index-DC0eWpiD.js";var T={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"dollob_api",BASE_URL:"/Happiness-Breakfast-Day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:u,VITE_APP_API_NAME:h}=T,E={data(){return{carts:{},total:"",finalTotal:"",isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{FairyLoading:A,AlertMessages:L},methods:{add_cart(n,s=1,i){let o="",e="";const c=`加入購物車成功，新增${s}筆商品~~`;this.isLoading=!0,i==="new"?(o=`${u}/api/${h}/cart`,e="post"):(o=`${u}/api/${h}/cart/${i}`,e="put");const f={product_id:n,qty:s};this.axios[e](o,{data:f}).then(d=>{this.get_cart(),this.$refs.AlertMessages.show_toast(c)}).catch(d=>{this.$refs.AlertMessages.show_alert(d==null?void 0:d.response.data.message,1300,"error")}).finally(()=>{this.isLoading=!1})},get_cart(){this.isLoading=!0;const n=`${u}/api/${h}/cart`;this.axios.get(n).then(s=>{const{carts:i,total:o,finalTotal:e}=s.data.data;this.carts=i,this.total=o,this.finalTotal=e}).catch(s=>{this.$refs.AlertMessages.show_alert(s==null?void 0:s.response.data.message,1300,"error")}).finally(()=>{this.isLoading=!1})},delete_cart(n=null){let s="",i="",o="";this.isLoading=!0,n===null?(o=confirm("是否清空購物車？"),s=`${u}/api/${h}/carts`,i="購物車已清空 ಥ_ಥ"):(o=confirm("是否刪除品項？"),s=`${u}/api/${h}/cart/${n}`,i="已從購物車刪除 ಥ_ಥ"),o&&this.axios.delete(s).then(e=>{this.get_cart(),this.$refs.AlertMessages.show_toast(i)}).catch(e=>{this.$refs.AlertMessages.show_alert(e==null?void 0:e.response.data.message,1300,"error")}).finally(()=>{this.isLoading=!1})},onSubmit(){const n=`${u}/api/${h}/order`;this.isLoading=!0,this.axios.post(n,{data:this.form}).then(s=>{this.get_cart(),this.$refs.form.resetForm(),this.form.message="",this.$refs.AlertMessages.show_toast("訂單已成交，謝謝~~")}).catch(s=>{this.$refs.AlertMessages.show_alert(s==null?void 0:s.response.data.message,1300,"error")}).finally(()=>{this.isLoading=!1})}},mounted(){this.get_cart()}},C={class:"container"},I={class:"d-flex row"},U={class:"d-flex mt-4 justify-content-between"},B=t("div",null,[t("h2",null,"購物車")],-1),D={class:"table align-middle border-primary border-top border-start border-end mt-4"},N=t("thead",{class:"table-primary"},[t("tr",null,[t("th",{class:"text-start"},"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",{class:"text-end"},"單價"),t("th")])],-1),F={class:"text-start d-flex justify-content-around"},R={key:0,class:"text-success"},S=["src"],q={class:"input-group input-group-sm"},j={class:"input-group mb-3"},O=["onUpdate:modelValue","disabled","onBlur"],z={class:"input-group-text",id:"basic-addon2"},H={class:"text-end"},G={key:0,class:"text-success"},J=["onClick"],K={key:0,class:"fas fa-spinner fa-pulse"},Q=t("td",{colspan:"3",class:"text-end"},"總計",-1),W={class:"text-end"},X={key:0},Y=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),Z={class:"text-end text-success"},tt={class:"text-end mb-4"};function st(n,s,i,o,e,c){const f=b("fairy-loading"),d=b("VueLoading"),v=b("alert-messages");return r(),l(y,null,[m(d,{active:e.isLoading},{default:k(()=>[m(f)]),_:1},8,["active"]),m(v,{ref:"AlertMessages"},null,512),t("div",C,[t("div",I,[t("div",U,[B,t("div",null,[e.carts.length?(r(),l("button",{key:0,class:"btn btn-outline-danger",type:"button",onClick:s[0]||(s[0]=a=>c.delete_cart())},"清空購物車")):_("",!0)])]),t("table",D,[N,t("tbody",null,[e.carts?(r(!0),l(y,{key:0},w(e.carts,a=>(r(),l("tr",{key:a.id},[t("td",F,[x(p(a.product.title)+" ",1),a.coupon?(r(),l("div",R," 已套用優惠券 ")):_("",!0),t("img",{class:"img-fluid",src:a.product.imageUrl,alt:"",width:"150",height:"150"},null,8,S)]),t("td",null,[t("div",q,[t("div",j,[M(t("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":g=>a.qty=g,disabled:e.isLoading,onBlur:g=>c.add_cart(a.product_id,a.qty,a.id)},null,40,O),[[V,a.qty,void 0,{number:!0}]]),t("span",z,p(a.product.unit),1)])])]),t("td",H,[a.coupon?(r(),l("small",G,"折扣價：")):_("",!0),x(" "+p(a.product.price),1)]),t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:g=>c.delete_cart(a.id)},[e.isLoading?(r(),l("i",K)):_("",!0),x(" x ")],8,J)])]))),128)):_("",!0)]),t("tfoot",null,[t("tr",null,[Q,t("td",W,p(e.total),1)]),e.carts.total!==e.carts.finalTotal?(r(),l("tr",X,[Y,t("td",Z,p(e.finalTotal),1)])):_("",!0)])]),t("div",tt,[t("button",{class:P(["btn btn-primary",{disabled:!e.carts.length}]),type:"button",onClick:s[1]||(s[1]=a=>c.delete_cart())},"結帳",2)])])])],64)}const nt=$(E,[["render",st]]);export{nt as default};
