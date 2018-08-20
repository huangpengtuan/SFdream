
import Home from "./components/home";
import loading from "./components/loading";
import zhengji from "./components/zhengji";
import baoming from "./components/baoming";
import baoming_From from "./components/baoming_From";
import toupiao from "./components/toupiao";
import ZPList from "./components/ZPList";
import liuyan from "./components/liuyan";
import zuopinDetails from "./components/zuopinDetails";
import PriceDetai from "./components/PriceDetai";
import Winners from "./components/Winners";
import ArtShow from "./components/ArtShow";




//全局变量
//Vue.prototype.publicUrl = "http://newtest2.szbiu.com/zgame/?m=sf_gh" //挂载到Vue实例上面
Vue.prototype.publicUrl = "http://sf-gh.sf-companion.com/zgame/?m=sf_gh" //挂载到Vue实例上面
Vue.prototype.withCredentials = true 
Vue.prototype.shareTitle = '顺丰梦·劳动美   第二届网络文化艺术节'
Vue.prototype.shareDesc = '这是我们的舞台，这是我们的未来，让你我绽放不一样的光芒。'
Vue.prototype.resultUrl = 'http://weixinback.sf-companion.com/zgame/?m=biu_common&a=sfgh_auth&actname=sfgh'
Vue.prototype.shareImgUrl = 'http://newtest2.szbiu.com/test/hpt/SFdream/img/share.png'




// 2. 定义路由
const routes = [
  { path: '/', redirect:"/loading" },  //初始页面重定向为home
  { path: '/home', component: Home.Home },					//01加载
  { path: '/loading', component: loading.loading },					//02首页
  { path: '/zhengji', component: zhengji.zhengji },					//03征集
  { path: '/baoming', component: baoming.baoming },					//04报名
  { path: '/baoming_From/:id', component: baoming_From.baoming_From },					//05报名信息提交表单
  { path: '/toupiao', component: toupiao.toupiao },					//06投票页
  { path: '/ZPList/:id', component: ZPList.ZPList },					//07作品列表
  { path: '/liuyan', component: liuyan.liuyan },					//08留言区
  { path: '/zuopinDetails/:ins/:id', component: zuopinDetails.zuopinDetails },					//09作品详情页		ins:进入的入口
  { path: '/PriceDetai/:rank/:sty/:id', component: PriceDetai.PriceDetai },					//10获奖作品详情
  { path: '/Winners', component: Winners.Winners },					//11获奖名单页
  { path: '/ArtShow', component: ArtShow.ArtShow },					//12文艺汇演
  
]





// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
const app = new Vue({
  router
}).$mount('#zhaolian')
// 现在，应用已经启动了！