import{A as y}from"./AlertMessages-DfjWVE3-.js";import{M as E,D as I,P as U}from"./PaginationBtn-DfvzNBqZ.js";import{_ as $,o as i,c as d,a as t,b as p,t as m,p as _,v as r,x as S,r as u,w as T,F as C,k as N,n as g,d as M}from"./index-DC0eWpiD.js";import{F as R}from"./FairyLoading-DdcXap8q.js";var B={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"dollob_api",BASE_URL:"/Happiness-Breakfast-Day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:v,VITE_APP_API_NAME:A}=B;let h;const O={data(){return{tempCoupons:{},CouponsModal:"",title:""}},components:{AlertMessages:y},mounted(){this.CouponsModal=new E(this.$refs.CouponsModal,{keyboard:!1})},methods:{show_Modal(a,e){switch(a){case"new":this.isNew=!0,h=new Date().toISOString().split("T"),this.tempCoupons.due_date=h[0],this.title="新增",this.CouponsModal.show();break;case"edit":this.isNew=!1,this.tempCoupons={...e},h=new Date(this.tempCoupons.due_date*1e3).toISOString().split("T"),this.tempCoupons.due_date=h[0],this.title="編輯",this.CouponsModal.show();break}},Update_Coupons(a){let e="";this.isNew===!0?(this.tempCoupons.due_date=Math.floor(new Date(this.tempCoupons.due_date)/1e3),e=`${v}/api/${A}/admin/coupon`,this.axios.post(e,{data:this.tempCoupons}).then(s=>{this.$refs.AlertMessages.show_toast("新增優惠卷成功!!!"),this.getData(),this.CouponsModal.hide()}).catch(s=>{this.tempCoupons.due_date=new Date(this.tempCoupons.due_date*1e3).toLocaleDateString(),this.$refs.AlertMessages.show_alert(s==null?void 0:s.response.data.message,1300,"error")})):(this.tempCoupons.due_date=Math.floor(new Date(this.tempCoupons.due_date)/1e3),e=`${v}//api/${A}/admin/coupon/${a}`,this.axios.put(e,{data:this.tempCoupons}).then(s=>{this.$refs.AlertMessages.show_toast("更新優惠卷成功!!!"),this.getData(),this.CouponsModal.hide()}).catch(s=>{this.tempCoupons.due_date=new Date(this.tempCoupons.due_date*1e3).toLocaleDateString(),this.$refs.AlertMessages.show_alert(s==null?void 0:s.response.data.message,1300,"error")}))},getData(){this.$emit("get_data")}}},F={id:"CouponsModal",ref:"CouponsModal",class:"modal fade text-start",tabindex:"-1","aria-labelledby":"CouponsModalLabel","aria-hidden":"true"},G={class:"modal-dialog"},H={class:"modal-content border-0"},j={class:"modal-header bg-dark text-white"},q={id:"CouponsModalLabel",class:"modal-title"},z=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),J={class:"modal-body"},K={class:"mb-3"},Q=t("label",{for:"title",class:"form-label"},"標題",-1),W={class:"mb-3"},X=t("label",{for:"title",class:"form-label"},"優惠碼",-1),Y={class:"mb-3"},Z=t("label",{for:"title",class:"form-label"},"到期日",-1),tt={class:"mb-3"},et=t("label",{for:"title",class:"form-label"},"折扣百分比",-1),st={class:"mb-3"},ot={class:"form-check"},nt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),at={class:"modal-footer"},lt=t("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal"}," 關閉 ",-1);function it(a,e,s,f,o,c){const b=u("alert-messages");return i(),d("div",F,[t("div",G,[t("div",H,[p(b,{ref:"AlertMessages"},null,512),t("div",j,[t("h5",q,[t("span",null,m(o.title)+"優惠卷",1)]),z]),t("div",J,[t("div",K,[Q,_(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[0]||(e[0]=n=>o.tempCoupons.title=n)},null,512),[[r,o.tempCoupons.title]])]),t("div",W,[X,_(t("input",{id:"code",type:"text",class:"form-control",placeholder:"請輸入優惠碼","onUpdate:modelValue":e[1]||(e[1]=n=>o.tempCoupons.code=n)},null,512),[[r,o.tempCoupons.code]])]),t("div",Y,[Z,_(t("input",{id:"due_date",type:"date",class:"form-control",placeholder:"請輸入到期日","onUpdate:modelValue":e[2]||(e[2]=n=>o.tempCoupons.due_date=n)},null,512),[[r,o.tempCoupons.due_date]])]),t("div",tt,[et,_(t("input",{id:"code",type:"number",class:"form-control",placeholder:"請輸入折扣百分比","onUpdate:modelValue":e[3]||(e[3]=n=>o.tempCoupons.percent=n)},null,512),[[r,o.tempCoupons.percent,void 0,{number:!0}]])]),t("div",st,[t("div",ot,[_(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=n=>o.tempCoupons.is_enabled=n)},null,512),[[S,o.tempCoupons.is_enabled]]),nt])])]),t("div",at,[lt,t("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=n=>c.Update_Coupons(o.tempCoupons.id))}," 新增優惠卷 ")])])])],512)}const dt=$(O,[["render",it]]);var pt={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"dollob_api",BASE_URL:"/Happiness-Breakfast-Day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:D,VITE_APP_API_NAME:w}=pt,ut={data(){return{coupons:[],pagination:{},DateTime:"",isLoading:!1}},components:{CouponsModal:dt,DelModal:I,AlertMessages:y,PaginationBtn:U,FairyLoading:R},methods:{getCoupons(a=1){this.isLoading=!0;const e=`${D}/api/${w}/admin/coupons?page=${a}`;this.axios.get(e).then(s=>{const{coupons:f,pagination:o}=s.data;this.coupons=f,this.pagination=o}).catch(s=>{this.$refs.AlertMessages.show_alert(s==null?void 0:s.response.data.message,1300,"error")}).finally(()=>{this.isLoading=!1})},Delete_coupon(a){this.isLoading=!0;const e=`${D}/api/${w}/admin/coupon/${a}`;this.axios.delete(e).then(s=>{this.$refs.AlertMessages.show_toast("刪除優惠卷完成!!!"),this.getCoupons(),this.$refs.DelModal.hide_Modal()}).catch(s=>{this.$refs.AlertMessages.show_alert(s==null?void 0:s.response.data.message,1300,"error")}).finally(()=>{this.isLoading=!1})}},mounted(){this.getCoupons()}},ct=t("h1",{class:"mt-3"},"優惠卷頁面",-1),_t={class:"container"},rt={class:"mt-4"},ht={class:"text-end"},mt={class:"table align-middle"},ft=t("thead",null,[t("tr",null,[t("th",null,"名稱"),t("th",null,"折扣比率"),t("th",null,"到期日"),t("th",null,"是否啟用"),t("th",null,"編輯")])],-1),bt={class:"h5 font-weight-bold text-warning"},gt={key:0,class:"text-success"},Ct={key:1},Mt={class:"btn-group btn-group-sm"},vt=["onClick"],At={key:0,class:"fas fa-spinner fa-pulse"},Dt=["onClick"],wt={key:0,class:"fas fa-spinner fa-pulse"};function yt(a,e,s,f,o,c){const b=u("fairy-loading"),n=u("VueLoading"),P=u("coupons-modal"),k=u("del-modal"),x=u("alert-messages"),L=u("pagination-btn");return i(),d(C,null,[ct,p(n,{active:o.isLoading},{default:T(()=>[p(b)]),_:1},8,["active"]),t("div",_t,[t("div",rt,[p(P,{ref:"CouponsModal",onGet_data:c.getCoupons},null,8,["onGet_data"]),p(k,{ref:"DelModal",temp:o.coupons,onDelcoupon:c.Delete_coupon},null,8,["temp","onDelcoupon"]),p(x,{ref:"AlertMessages"},null,512),t("div",ht,[t("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=l=>this.$refs.CouponsModal.show_Modal("new"))},"新增優惠卷")]),t("table",mt,[ft,t("tbody",null,[o.coupons?(i(!0),d(C,{key:0},N(o.coupons,l=>(i(),d("tr",{key:l.id},[t("td",bt,m(l.title),1),t("td",null,m(l.percent)+" % ",1),t("td",null,m(new Date(l.due_date*1e3).toLocaleDateString()),1),t("td",null,[l.is_enabled?(i(),d("span",gt,"啟用")):(i(),d("span",Ct,"未啟用"))]),t("td",null,[t("div",Mt,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:V=>this.$refs.CouponsModal.show_Modal("edit",l)},[o.isLoading?(i(),d("i",At)):g("",!0),M(" 修改 ")],8,vt),t("button",{type:"button",class:"btn btn-outline-danger",onClick:V=>this.$refs.DelModal.show_Modal("coupon",l)},[o.isLoading?(i(),d("i",wt)):g("",!0),M(" 刪除 ")],8,Dt)])])]))),128)):g("",!0)])])]),p(L,{pagination:o.pagination,onChange_page:c.getCoupons},null,8,["pagination","onChange_page"])])],64)}const Lt=$(ut,[["render",yt]]);export{Lt as default};
