import{F as U}from"./FairyLoading-D2FY1WSv.js";import{A as q}from"./AlertMessages-DNcVSF8R.js";import{l as $,n as z,p as H,q as L,s as k,_ as G,e as X,c as R,b as M,w as I,a,t as S,u as Y,v as J,F as N,r as P,o as V,j as K,k as Q}from"./index-BGtsc3lz.js";import{c as W}from"./cartStore-BQgaJrU4.js";import{N as Z}from"./navigation-B8a3BEZc.js";function ee(f){let{swiper:e,extendParams:_,on:d}=f;_({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,v=!1;e.thumbs={swiper:null};function g(){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const t=s.clickedIndex,o=s.clickedSlide;if(o&&o.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let c;s.params.loop?c=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10):c=t,e.params.loop?e.slideToLoop(c):e.slideTo(c)}function h(){const{thumbs:s}=e.params;if(r)return!1;r=!0;const t=e.constructor;if(s.swiper instanceof t)e.thumbs.swiper=s.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(z(s.swiper)){const o=Object.assign({},s.swiper);Object.assign(o,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(o),v=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",g),!0}function u(s){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const o=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let c=1;const l=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(c=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(c=1),c=Math.floor(c),t.slides.forEach(p=>p.classList.remove(l)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let p=0;p<c;p+=1)H(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+p}"]`).forEach(n=>{n.classList.add(l)});else for(let p=0;p<c;p+=1)t.slides[e.realIndex+p]&&t.slides[e.realIndex+p].classList.add(l);const m=e.params.thumbs.autoScrollOffset,T=m&&!t.params.loop;if(e.realIndex!==t.realIndex||T){const p=t.activeIndex;let n,y;if(t.params.loop){const i=t.slides.filter(x=>x.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];n=t.slides.indexOf(i),y=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,y=n>e.previousIndex?"next":"prev";T&&(n+=y==="next"?m:-1*m),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(n)<0&&(t.params.centeredSlides?n>p?n=n-Math.floor(o/2)+1:n=n+Math.floor(o/2)-1:n>p&&t.params.slidesPerGroup,t.slideTo(n,s?0:void 0))}}d("beforeInit",()=>{const{thumbs:s}=e.params;if(!(!s||!s.swiper))if(typeof s.swiper=="string"||s.swiper instanceof HTMLElement){const t=$(),o=()=>{const l=typeof s.swiper=="string"?t.querySelector(s.swiper):s.swiper;if(l&&l.swiper)s.swiper=l.swiper,h(),u(!0);else if(l){const m=T=>{s.swiper=T.detail[0],l.removeEventListener("init",m),h(),u(!0),s.swiper.update(),e.update()};l.addEventListener("init",m)}return l},c=()=>{if(e.destroyed)return;o()||requestAnimationFrame(c)};requestAnimationFrame(c)}else h(),u(!0)}),d("slideChange update resize observerUpdate",()=>{u()}),d("setTransition",(s,t)=>{const o=e.thumbs.swiper;!o||o.destroyed||o.setTransition(t)}),d("beforeDestroy",()=>{const s=e.thumbs.swiper;!s||s.destroyed||v&&s.destroy()}),Object.assign(e.thumbs,{init:h,update:u})}function te(f){let{swiper:e,extendParams:_,emit:d,once:r}=f;_({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function v(){if(e.params.cssMode)return;const u=e.getTranslate();e.setTranslate(u),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function g(){if(e.params.cssMode)return;const{touchEventsData:u,touches:s}=e;u.velocities.length===0&&u.velocities.push({position:s[e.isHorizontal()?"startX":"startY"],time:u.touchStartTime}),u.velocities.push({position:s[e.isHorizontal()?"currentX":"currentY"],time:L()})}function h(u){let{currentPos:s}=u;if(e.params.cssMode)return;const{params:t,wrapperEl:o,rtlTranslate:c,snapGrid:l,touchEventsData:m}=e,p=L()-m.touchStartTime;if(s<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(s>-e.maxTranslate()){e.slides.length<l.length?e.slideTo(l.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(m.velocities.length>1){const b=m.velocities.pop(),w=m.velocities.pop(),F=b.position-w.position,O=b.time-w.time;e.velocity=F/O,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(O>150||L()-b.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,m.velocities.length=0;let n=1e3*t.freeMode.momentumRatio;const y=e.velocity*n;let i=e.translate+y;c&&(i=-i);let x=!1,A;const E=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let C;if(i<e.maxTranslate())t.freeMode.momentumBounce?(i+e.maxTranslate()<-E&&(i=e.maxTranslate()-E),A=e.maxTranslate(),x=!0,m.allowMomentumBounce=!0):i=e.maxTranslate(),t.loop&&t.centeredSlides&&(C=!0);else if(i>e.minTranslate())t.freeMode.momentumBounce?(i-e.minTranslate()>E&&(i=e.minTranslate()+E),A=e.minTranslate(),x=!0,m.allowMomentumBounce=!0):i=e.minTranslate(),t.loop&&t.centeredSlides&&(C=!0);else if(t.freeMode.sticky){let b;for(let w=0;w<l.length;w+=1)if(l[w]>-i){b=w;break}Math.abs(l[b]-i)<Math.abs(l[b-1]-i)||e.swipeDirection==="next"?i=l[b]:i=l[b-1],i=-i}if(C&&r("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(c?n=Math.abs((-i-e.translate)/e.velocity):n=Math.abs((i-e.translate)/e.velocity),t.freeMode.sticky){const b=Math.abs((c?-i:i)-e.translate),w=e.slidesSizesGrid[e.activeIndex];b<w?n=t.speed:b<2*w?n=t.speed*1.5:n=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&x?(e.updateProgress(A),e.setTransition(n),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating=!0,k(o,()=>{!e||e.destroyed||!m.allowMomentumBounce||(d("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(A),k(o,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(d("_freeModeNoMomentumRelease"),e.updateProgress(i),e.setTransition(n),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,k(o,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(i),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&d("_freeModeNoMomentumRelease");(!t.freeMode.momentum||p>=t.longSwipesMs)&&(d("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:v,onTouchMove:g,onTouchEnd:h}})}var se={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"dollob_api",BASE_URL:"/Happiness-Breakfast-Day/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let j="";const{VITE_APP_API_URL:B,VITE_APP_API_NAME:D}=se,ie={data(){return{product:{},img:{},qty:1,isLoading:!1}},components:{FairyLoading:U,AlertMessages:q},setup(){let f="";return{thumbsSwiper:f,setThumbsSwiper:_=>{f=_},modules:[te,Z,ee]}},methods:{get_product(){this.isLoading=!0;const f=`${B}/api/${D}/product/${j}`;this.axios.get(f).then(e=>{const{product:_}=e.data;this.product=_}).catch(e=>{this.$refs.AlertMessages.show_alert(e==null?void 0:e.response.data.message,1300,"error")}).finally(()=>{this.isLoading=!1})},add_cart(f,e=1,_){let d="",r="";const v=`加入購物車成功，新增${e}筆商品~~`;this.isLoading=!0,_==="new"?(d=`${B}/api/${D}/cart`,r="post"):(d=`${B}/api/${D}/cart/${_}`,r="put");const g={product_id:f,qty:e};this.axios[r](d,{data:g}).then(h=>{this.$refs.AlertMessages.show_toast(v),this.get_cart()}).catch(h=>{this.$refs.AlertMessages.show_alert(h==null?void 0:h.response.data.message,1300,"error")}).finally(()=>{this.isLoading=!1})},toastMsg(f){this.$refs.messageToast.show_toast(f)},...X(W,["get_cart"])},mounted(){j=this.$route.params.id,this.get_product()}},oe=a("h1",null,"產品頁面",-1),ne={class:"container"},re={class:"bg-primary text-white rounded-pill py-1 mb-1"},ae={class:"h5 mb-0"},le={class:"mb-1"},ce={class:"row"},de={class:"col-sm-6"},ue=["src","alt"],me=["src","alt"],pe={class:"col-sm-6 text-start"},fe={class:"badge bg-primary rounded-pill"},he=a("p",{class:"h5"},"描述：",-1),be=a("br",null,null,-1),_e=a("br",null,null,-1),we={class:"h6 text-danger"},ve={class:"h5"},ge={class:"input-group mt-3"};function Te(f,e,_,d,r,v){const g=P("fairy-loading"),h=P("VueLoading"),u=P("alert-messages"),s=P("v-swiper-slide"),t=P("v-swiper");return V(),R(N,null,[oe,M(h,{active:r.isLoading},{default:I(()=>[M(g)]),_:1},8,["active"]),M(u,{ref:"AlertMessages"},null,512),a("div",ne,[a("div",re,[a("div",ae,[a("span",null,S(r.product.title),1)])]),a("div",le,[a("div",ce,[a("div",de,[M(t,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},spaceBetween:10,thumbs:{swiper:d.thumbsSwiper},modules:d.modules,class:"mySwiper2"},{default:I(()=>[M(s,null,{default:I(()=>[a("img",{src:r.product.imageUrl,class:"main_product_img w-auto h-auto",alt:r.product.title},null,8,ue)]),_:1}),(V(!0),R(N,null,K(r.product,o=>(V(),Q(s,{key:o.id},{default:I(()=>[a("img",{src:o.imagesUrl,class:"main_product_img w-auto h-auto",alt:o.title},null,8,me)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"])]),a("div",pe,[a("span",fe,S(r.product.category),1),he,be,a("p",null,S(r.product.description),1),_e,a("del",we,"原價 NT$"+S(r.product.origin_price)+" 元",1),a("div",ve,"現在只要 NT$"+S(r.product.price)+" 元",1),a("div",null,[a("div",ge,[Y(a("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":e[0]||(e[0]=o=>r.qty=o)},null,512),[[J,r.qty,void 0,{number:!0}]]),a("button",{type:"button",class:"btn btn-secondary text-light",onClick:e[1]||(e[1]=o=>v.add_cart(r.product.id,r.qty,"new"))},"加入購物車")])])])])])])],64)}const Ae=G(ie,[["render",Te]]);export{Ae as default};
