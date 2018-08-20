/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_loading__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_zhengji__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_baoming__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_baoming_From__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_toupiao__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ZPList__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_liuyan__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_zuopinDetails__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_PriceDetai__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Winners__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ArtShow__ = __webpack_require__(12);

















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
  { path: '/home', component: __WEBPACK_IMPORTED_MODULE_0__components_home__["a" /* default */].Home },					//01加载
  { path: '/loading', component: __WEBPACK_IMPORTED_MODULE_1__components_loading__["a" /* default */].loading },					//02首页
  { path: '/zhengji', component: __WEBPACK_IMPORTED_MODULE_2__components_zhengji__["a" /* default */].zhengji },					//03征集
  { path: '/baoming', component: __WEBPACK_IMPORTED_MODULE_3__components_baoming__["a" /* default */].baoming },					//04报名
  { path: '/baoming_From/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_baoming_From__["a" /* default */].baoming_From },					//05报名信息提交表单
  { path: '/toupiao', component: __WEBPACK_IMPORTED_MODULE_5__components_toupiao__["a" /* default */].toupiao },					//06投票页
  { path: '/ZPList/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_ZPList__["a" /* default */].ZPList },					//07作品列表
  { path: '/liuyan', component: __WEBPACK_IMPORTED_MODULE_7__components_liuyan__["a" /* default */].liuyan },					//08留言区
  { path: '/zuopinDetails/:ins/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_zuopinDetails__["a" /* default */].zuopinDetails },					//09作品详情页		ins:进入的入口
  { path: '/PriceDetai/:rank/:sty/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_PriceDetai__["a" /* default */].PriceDetai },					//10获奖作品详情
  { path: '/Winners', component: __WEBPACK_IMPORTED_MODULE_10__components_Winners__["a" /* default */].Winners },					//11获奖名单页
  { path: '/ArtShow', component: __WEBPACK_IMPORTED_MODULE_11__components_ArtShow__["a" /* default */].ArtShow },					//12文艺汇演
  
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 首页
const tempStr = `
	<div id="home">
		<img src="img/home.jpg" alt="" class="imgsize"/>
		<img @click="get_a()" src="img/music.png" alt="" class="musicImg music_Play"/>
		
		<div class="homeBox">
			<div class="liulan">浏览量：{{seeNum}}</div>
			
			<div v-if="actiSty != 3" class="EntranceOne" @click="takePartin01()">
				<img src="img/BtnBg01.png" class="Entrance_Bg"/>
				<div class="Entrance_Txt">
					<div class="lingh10">才艺比拼</div>
					<div class="fs35 lingh8">(作品征集时间8月3日-8月26日)</div>
				</div>
			</div>			
			<div v-if="actiSty != 3" class="EntranceTwo" @click="takePartin02()">
				<img src="img/BtnBg02.png" class="Entrance_Bg"/>
				<div class="color_gray Entrance_Txt">
					<div class="lingh10">文艺汇演</div>
					<div class="fs35 lingh8">(敬请期待)</div>
				</div>
			</div>	
			
			
			<div v-if="actiSty == 3" class="EntranceOne" @click="takePartin02()">
				<img src="img/BtnBg01.png" class="Entrance_Bg"/>
				<div class="Entrance_Txt">
					<div class="lingh10">文艺汇演</div>
					<div class="fs35 lingh8">(火热进行中)</div>
				</div>
			</div>			
			<div v-if="actiSty == 3" class="EntranceTwo" @click="takePartin01()">
				<img src="img/BtnBg01.png" class="Entrance_Bg"/>
				<div class="Entrance_Txt lingh18">才艺展示</div>
			</div>			
			
		</div>	
		
		
		
		<div id="spinner">
			<div class="spinner">
			  <div class="spinner-container container1">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container2">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container3">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			</div>			
		</div>			

	</div>
`;

var data = {
	seeNum:1225,		//浏览量
	actiSty:1,			//目前活动的状态 1为征集  2为投票	3为获奖
	withCredentials:true,
};

const Home = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
		this.shareUrlFn();
	},
	methods: {
		init: function() {
			var that = this;
			
    		//拿去音乐动画缓存
    		var musiconoff = sessionStorage.getItem("musiconoff") || false;
    		console.log(musiconoff)
    		if(musiconoff == 'true' || musiconoff == true){		//真，音乐关闭状态
	            $('.musicImg').removeClass('music_Play');
	            console.log(1)
    		}else if(musiconoff == 'false' || musiconoff == false){
	            $('.musicImg').addClass('music_Play');
	            console.log(2)
    		}  		
    		
			
			//获取活动状态
			$('#spinner').fadeIn()
			$.ajax({
				url: that.publicUrl,
				data: {
					a: 'get_now_info',
				},
				dataType: "json",
				xhrFields: {
					withCredentials: that.withCredentials
				},
				success: function(result) {
					console.log(result)
					$('#spinner').fadeOut()
					if(result.errorCode == 0) {
						that.actiSty = result.result.act_info;
						that.seeNum = result.result.say_nums;
					} else {
						alert(result.errorMsg);
					}
				}
			})			
		},
  		//音乐开关
		get_a:function(){
	        var audio = document.getElementById('myaudio');
	        if (audio.paused) {
	            audio.play();
	            $('.musicImg').addClass('music_Play');
	            sessionStorage.setItem("musiconoff",false)	
	        } else {
	            audio.pause();
	            $('.musicImg').removeClass('music_Play');
	            sessionStorage.setItem("musiconoff",true)	
	        }
		},  		
		//03点击才艺比拼
		takePartin01: function() {
			var that = this;
			if(that.actiSty == 1){
				that.$router.push('/zhengji');
			}else if(that.actiSty == 2){
				that.$router.push('/toupiao');
			}else if(that.actiSty == 3){
				that.$router.push('/Winners');
			}
			
		},
		//04点击文艺汇演
		takePartin02: function() {
			var that = this;
			if(that.actiSty == 3){
				that.$router.push('/ArtShow');
			}			
		},
		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},
		//01分享
		shareUrlFn: function() {
			var that = this;
			$.ajax({
				url: "http://sf-college.szbiu.com/zgame/",
				data: {
					m: 'biu_common',
					a: 'get_share_info',
					nowurl: window.location.href
				},
				success: function(result) {
					var tmp = JSON.parse(result);
					var jssdk_info = tmp.other_info.jssdkinfo;
					wx.config({
						debug: false,
						appId: jssdk_info.appId,
						timestamp: jssdk_info.timestamp,
						nonceStr: jssdk_info.nonceStr,
						signature: jssdk_info.signature,
						jsApiList: [
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'hideMenuItems',
						]
					});
					wx.ready(
						function() {
							wx.onMenuShareAppMessage({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})

								},
								cancel: function() {}
							});
							wx.onMenuShareTimeline({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})
								},
								cancel: function() {}
							});
							wx.hideMenuItems({
								menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email'],
							});
						}
					);
				},
			})
		},

	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	Home
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// loading页
const tempStr = `
	<div id="loading">
		<div class="loading_perTxt">{{Percent}}%</div>
		<div class="loading_perTxt01">加载中...</div>
		<div class="loading_ImgBox">
			<img class="loading_Img01" src="img/loadingtiao01.png"/>
			<div class="loading_tiaoBox">
				<img id="loading_move" src="img/loadingtiao02.png"/>
			</div>
		</div>
	</div>
`;

var data = {
	Percent:'',
	jiazaiTxt:'玩命加载中...',
	indexs:0,
};


const loading = {
    template: tempStr,
    data: function () {
        return data;
    },
    mounted(){
		this.loadingFn();
   	},    
    methods:{
    	//实例化加载器
		loadingFn:function(){
			var that = this ;
			var manifest;
			var preload;
			manifest = [
				'img/home.jpg',
				'img/loading.jpg',
				'img/search.jpg',
				'img/stutas01.jpg',
				'img/stutas02.jpg',
				'img/stutas_Btn01.jpg',
				'img/zuopin07.jpg',
				'img/zuopingBg.jpg',
				'img/baoming.png',
				'img/huoxuan_head.png',
				'img/liuyan_head.png',
				'img/loadingtiao01.png',
				'img/loadingtiao02.png',
				'img/price01.png',
				'img/price02.png',
				'img/price03.png',
				'img/price04.png',
				'img/price05.png',
				'img/price06.png',
				'img/price07.png',
				'img/rule.png',
				'img/share_mask.png',
				'img/stutas_mask01.png',
				'img/tip.png',
				'img/title.png',
				'img/video.png',
				'img/video01.png',
				'img/ZP_detail01.png',
				'img/ZP_detail02.png',
				'img/ZP_detail03.png',
				'img/ZP_detail04.png',
				'img/ZP_detail05.png',
				'img/ZP_detail06.png',
				'img/zuopin01.png',
				'img/zuopin02.png',
				'img/zuopin03.png',
				'img/zuopin04.png',
				'img/zuopin05.png',
				'img/zuopin06.png',
				'img/BtnBg01.png',
				'img/BtnBg02.png',
				'img/success.png',
				'img/success02.png',					
				'img/success03.png',					
				'img/close.png',	
				'img/background-music.mp3'
			];

			//开始预加载
			function startPreload() {
			    preload = new createjs.LoadQueue(true);
			    //注意加载音频文件需要调用如下代码行
			    preload.installPlugin(createjs.Sound);         
			    preload.on("fileload", handleFileLoad);
			    preload.on("progress", handleFileProgress);
			    preload.on("complete", loadComplete);
			    preload.on("error", loadError);
			    preload.loadManifest(manifest);
			 
			}
			
			//处理单个文件加载
			function handleFileLoad(event) {
			    console.log("文件类型: " + event.item.type);
			    if(event.item.id == "logo"){
			        console.log("logo图片已成功加载");
			    }
			}
			 
			//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
			function loadError(evt) {
			    console.log("加载出错！",evt.text);
			}
			 
			//已加载完毕进度 
			function handleFileProgress(event) {
				console.log(preload.progress)
				
		        var Lwidth = $(".loadbox").width();
		        that.Percent = parseInt(preload.progress*100) ;
		        var moveSuper = -(100-parseInt(preload.progress*100));
		        console.log(moveSuper)
		        $('#loading_move').css("left",moveSuper+'%');					
				
			}
			
			//全度资源加载完毕
			function loadComplete(event) {
			    console.log("已加载完毕全部资源");
			    
			    that.$router.push('/home');
			}
			
			//实例化资源
			startPreload();





		    
		    
		},	

		
		
    }
}


/* harmony default export */ __webpack_exports__["a"] = ({ loading });






















/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 征集首页
const tempStr = `
	<div id="zhengji">
		<img src="img/stutas01.jpg" class="imgsize"/>
		<img @click="get_a()" src="img/music.png" alt="" class="musicImg music_Play"/>
		<div class="zhengji_Box">
			<div class="see_price_entry"></div>
			
			
			<div class="works_Box01">
				<div v-for="Product in newProduct" :key="Product.id" @click="goOther(Product.id,Product.type)" v-if="Product.type == 1 || Product.type == 2" class="works">
					<img :src="Product.image" class="imgsize Product_image01"/>
				</div>
			</div>	
			<div class="works_Box02">
				<div v-for="Product in newProduct" :key="Product.id" @click="goOther(Product.id,Product.type)" v-if="Product.type == 3" class="works">
					<img :src="Product.image" class="imgsize Product_image02"/>
				</div>
			</div>				
			<div class="works_Box03">
				<div v-for="Product in newProduct" :key="Product.id" @click="goOther(Product.id,Product.type)" v-if="Product.type == 5" class="works">
					<img :src="Product.image" class="imgsize Product_image03"/>
					<div class="ZP_ImgShow_Play">
						<img src="img/play.png" class="ZP_ImgShow_PlayIoc"/>
					</div>					
				</div>
			</div>			
			<div class="works_Box04">
				<div v-for="Product in newProduct" :key="Product.id" @click="goOther(Product.id,Product.type)" v-if="Product.type == 4" class="works">
					<img :src="Product.image" class="imgsize Product_image04"/>
					<div class="ZP_ImgShow_Play">
						<img src="img/play.png" class="ZP_ImgShow_PlayIoc"/>
					</div>					
				</div>
			</div>
			<div class="works_Box05">
				<div v-for="Product in newProduct" :key="Product.id" @click="goOther(Product.id,Product.type)" v-if="Product.type == 7" class="works">
					<img :src="Product.image" class="imgsize Product_image05"/>
					<div class="ZP_ImgShow_Play">
						<img src="img/play.png" class="ZP_ImgShow_PlayIoc"/>
					</div>					
				</div>
			</div>			
			<div class="works_Box06">
				<div v-for="Product in newProduct" :key="Product.id" @click="goOther(Product.id,Product.type)" v-if="Product.type == 9" class="works">
					<img :src="Product.image" class="imgsize Product_image06"/>
					<div class="ZP_ImgShow_Play">
						<img src="img/play.png" class="ZP_ImgShow_PlayIoc"/>
					</div>					
				</div>
			</div>	
			
			
			
		</div>
		
		<img @click="maskFadeIn('.Mask_xuzhi')" src="img/stutas_Btn01.jpg" class="zhengji_Btn"/>
		
		<div class="Mask_xuzhi">
			<div @click="maskFadeOut('.Mask_xuzhi')" class="xuzhi_close"></div>
			<div @click="maskFadeOut('.Mask_xuzhi')" class="xuzhi_no"></div>
			<div @click="beginFn()" class="xuzhi_yes"></div>
		</div>		
		
		
		<div id="spinner">
			<div class="spinner">
			  <div class="spinner-container container1">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container2">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container3">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			</div>			
		</div>		
		
	</div>
	
`;

var data = {
	newProduct:[],		//最新作品预览
	withCredentials:true,
	
};

const zhengji = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
		this.shareUrlFn();
	},
	methods: {
		init: function() {
			var that = this;

    		//拿去音乐动画缓存
    		var musiconoff = sessionStorage.getItem("musiconoff") || false;
    		console.log(musiconoff)
    		if(musiconoff == 'true' || musiconoff == true){		//真，音乐关闭状态
	            $('.musicImg').removeClass('music_Play');
	            console.log(1)
    		}else if(musiconoff == 'false' || musiconoff == false){
	            $('.musicImg').addClass('music_Play');
	            console.log(2)
    		} 

			//获取活动状态
			$('#spinner').fadeIn()
			$.ajax({
				url: that.publicUrl,
				data: {
					a: 'get_neweast_info',
				},
				dataType: "json",
				xhrFields: {
					withCredentials: that.withCredentials
				},
				success: function(result) {
					console.log(result)
					$('#spinner').fadeOut()
					if(result.errorCode == 0) {
						that.newProduct= result.result;
						
						that.$nextTick(function(){
							for(var i = 0 ; i< that.newProduct.length ; i++){
								that.TestingTel(that.newProduct[i].image,i,'.Product_image01')
								that.TestingTel(that.newProduct[i].image,i,'.Product_image02')
								that.TestingTel(that.newProduct[i].image,i,'.Product_image03')
								that.TestingTel(that.newProduct[i].image,i,'.Product_image04')
								that.TestingTel(that.newProduct[i].image,i,'.Product_image05')
								that.TestingTel(that.newProduct[i].image,i,'.Product_image06')
							}
						})						
						
					} else {
						alert(result.errorMsg);
					}
				}
			})


		},
  		//音乐开关
		get_a:function(){
	        var audio = document.getElementById('myaudio');
	        if (audio.paused) {
	            audio.play();
	            $('.musicImg').addClass('music_Play');
	            sessionStorage.setItem("musiconoff",false)	
	        } else {
	            audio.pause();
	            $('.musicImg').removeClass('music_Play');
	            sessionStorage.setItem("musiconoff",true)	
	        }
		}, 
		//03
		beginFn: function() {
			var that = this;

			that.$router.push('/baoming');

		},

		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},
		
		goOther: function(id,type) {
			var that = this 
			localStorage.setItem('sty',type)
			that.$router.push('/zuopinDetails/1/'+id)			
			
		},

		//检测手机种类
		TestingTel:function(srcUrl,i,aclass){
			var that = this 
			
		    var u = navigator.userAgent, app = navigator.appVersion;
		    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
		    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		    var ismobile =  !!u.match(/AppleWebKit.*Mobile.*/)
		        if(!(ismobile && isIOS)) // 不是iphone
		        {
		        	var w = $('.works').width()
		        	var h = $('.works').height()		        	
		            
		            var new_img = new Image();
		            new_img.src = srcUrl;
		            console.log('w:'+w)
		            console.log('h:'+h)
		            new_img.onload = function(){
		                EXIF.getData(new_img, function(){
		                        EXIF.getAllTags(this);
		                        var a = EXIF.getTag(this, 'Orientation');
		                        if(a == 3)
		                        {
		                        	$(aclass).eq(i).css("transform",'rotate(180deg)')
		                        	$(aclass).eq(i).css("transform-origin",'50% 50%')
			                        $(aclass).eq(i).height(w)	
		                        }
		                        if(a == 6)
		                        {	
		                        	$(aclass).eq(i).css("transform",'rotate(90deg)')
		                        	$(aclass).eq(i).css("transform-origin",'50% 50%')
			                        $(aclass).eq(i).height(w)	
		                        }
		                        if(a == 8)
		                        {
		                        	$(aclass).eq(i).css("transform",'rotate(270deg)')
		                        	$(aclass).eq(i).css("transform-origin",'50% 50%')
			                        $(aclass).eq(i).height(w)	
		                        }
		                    });
		            }
		        }			
			
		},


		//01分享
		shareUrlFn: function() {
			var that = this;
			$.ajax({
				url: "http://sf-college.szbiu.com/zgame/",
				data: {
					m: 'biu_common',
					a: 'get_share_info',
					nowurl: window.location.href
				},
				success: function(result) {
					var tmp = JSON.parse(result);
					var jssdk_info = tmp.other_info.jssdkinfo;
					wx.config({
						debug: false,
						appId: jssdk_info.appId,
						timestamp: jssdk_info.timestamp,
						nonceStr: jssdk_info.nonceStr,
						signature: jssdk_info.signature,
						jsApiList: [
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'hideMenuItems',
						]
					});
					wx.ready(
						function() {
							wx.onMenuShareAppMessage({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})

								},
								cancel: function() {}
							});
							wx.onMenuShareTimeline({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})
								},
								cancel: function() {}
							});
							wx.hideMenuItems({
								menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email'],
							});
						}
					);
				},
			})
		},

	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	zhengji
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 报名
const tempStr = `
	<div id="baoming">		
		<img src="img/baoming.png" class="imgsize"/>
		<img @click="get_a()" src="img/music.png" alt="" class="musicImg music_Play"/>
		<div class="baoming_Box">
			<div class="baoming_num">投稿总数：{{tougaoNum}}</div>
			<div class="baoming_entryBox">
				<router-link to="/baoming_From/0" class="baoming_entry"></router-link>
				<router-link to="/baoming_From/3" class="baoming_entry"></router-link>
				<router-link to="/baoming_From/4" class="baoming_entry"></router-link>
				<router-link to="/baoming_From/5" class="baoming_entry"></router-link>
				<router-link to="/baoming_From/7" class="baoming_entry"></router-link>
				<router-link to="/baoming_From/9" class="baoming_entry"></router-link>						
			</div>					
		</div>	
		
		
		<div id="spinner">
			<div class="spinner">
			  <div class="spinner-container container1">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container2">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container3">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			</div>			
		</div>		
		
	</div>
`;

var data = {
		tougaoNum:0,		//投稿总数
		withCredentials:true,

	
	
};

const baoming = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
		this.shareUrlFn();
	},
	methods: {
		init: function() {
			var that = this;

    		//拿去音乐动画缓存
    		var musiconoff = sessionStorage.getItem("musiconoff") || false;
    		console.log(musiconoff)
    		if(musiconoff == 'true' || musiconoff == true){		//真，音乐关闭状态
	            $('.musicImg').removeClass('music_Play');
	            console.log(1)
    		}else if(musiconoff == 'false' || musiconoff == false){
	            $('.musicImg').addClass('music_Play');
	            console.log(2)
    		} 


			//获取活动状态
			$('#spinner').fadeIn()
			//获取投稿数
			$.ajax({
				url: that.publicUrl,
				data: {
					a: 'get_vote_nums',
				},
				dataType: "json",
				xhrFields: {
					withCredentials: that.withCredentials
				},
				success: function(result) {
					console.log(result)
					$('#spinner').fadeOut()
					if(result.errorCode == 0) {
						that.tougaoNum= result.result || 0;
					} else {
						alert(result.errorMsg);
					}
				}
			})		
			//获取投稿数
			$.ajax({
				url: that.publicUrl,
				data: {
					a: 'get_neweast_info',
				},
				dataType: "json",
				xhrFields: {
					withCredentials: that.withCredentials
				},
				success: function(result) {
					console.log(result)
					$('#spinner').fadeOut()
					if(result.errorCode == 0) {
						that.newProduct= result.result.newProduct;
					} else {
						alert(result.errorMsg);
					}
				}
			})



		},
  		//音乐开关
		get_a:function(){
	        var audio = document.getElementById('myaudio');
	        if (audio.paused) {
	            audio.play();
	            $('.musicImg').addClass('music_Play');
	            sessionStorage.setItem("musiconoff",false)	
	        } else {
	            audio.pause();
	            $('.musicImg').removeClass('music_Play');
	            sessionStorage.setItem("musiconoff",true)	
	        }
		}, 
		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},

		//01分享
		shareUrlFn: function() {
			var that = this;
			$.ajax({
				url: "http://sf-college.szbiu.com/zgame/",
				data: {
					m: 'biu_common',
					a: 'get_share_info',
					nowurl: window.location.href
				},
				success: function(result) {
					var tmp = JSON.parse(result);
					var jssdk_info = tmp.other_info.jssdkinfo;
					wx.config({
						debug: false,
						appId: jssdk_info.appId,
						timestamp: jssdk_info.timestamp,
						nonceStr: jssdk_info.nonceStr,
						signature: jssdk_info.signature,
						jsApiList: [
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'hideMenuItems',
						]
					});
					wx.ready(
						function() {
							wx.onMenuShareAppMessage({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})

								},
								cancel: function() {}
							});
							wx.onMenuShareTimeline({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})
								},
								cancel: function() {}
							});
							wx.hideMenuItems({
								menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email'],
							});
						}
					);
				},
			})
		},

	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	baoming
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//报名表单
const tempStr = `
	<div id="baoming_From">
		<img @click="get_a()" src="img/music.png" alt="" class="musicImg music_Play"/>

		<form action="" method="post">
			<img src="img/zuopin01.png" class="BM_From_ioc01"/>
			<div v-if="sty == 0" class="BM_From_radio">
				<div @click="checkedFN(2)" class="BM_From_radio_chirld">
				    <input id="shape1" name="box-shape" type="radio"  checked="" value="2" />
				    <label for="shape1">子女组</label>
				</div>
				<div @click="checkedFN(1)" class="BM_From_radio_chirld">
				    <input id="shape2" name="box-shape" type="radio"  checked="checked" value="1"/>
				    <label for="shape2">员工组</label>
				</div>				
				<div class="clearfix"></div>
			</div>
			
			<input @focus="PromptFadeOut()" @blur="PromptFadeOut()" id="ZPName" type="text" class="BM_From_in" placeholder="请输入作品名称" maxlength="10"/>
			
			<textarea @focus="PromptFadeOut()" @blur="PromptFadeOut()" id="ZPExplain" maxlength="150" name="" class="BM_From_textarea" :placeholder="placeholders"></textarea>
			
			<input @focus="PromptFadeOut()" @blur="PromptFadeOut()" v-if="sty > 3" id="ZPlink" type="text" class="BM_From_in marginTop15" :placeholder="placeholders09" />


			<img v-if="sty <= 3" src="img/zuopin04.png" class="upFileBtn FileBtn" />
			<img v-if="sty > 3" src="img/zuopin0401.png" class="upFileBtn FileBtn" />

			<img src="img/zuopin05.png" class="BM_From_ioc01"/>

			<p v-if="sty == 3" class="BM_From_text">
				(1) 符合作品主题要求；<br />
				(2) 参赛作品为JPGE格式，像素大于1M，建议作品尺寸比例为4:3；<br />
				(3) 投稿作品原始摄影必须是作者本人用照相机或手机拍摄，除对影调、色彩进行适度调整及构图剪裁以外，不得对原始图像进行任何足以影响其真实性、透视度以及准确性的Photoshop。<br />
			</p>
			<p v-if="sty == 0" class="BM_From_text">
				(1) 符合作品主题要求；<br />
				(2) 初次参赛作品请用电子投稿(照片或扫描件，JPEG格式，大于3M，书法内容清晰可见)；<br />
				(3) 书法作品毛笔，硬笔均可；<br />
				(4) 绘画作品包括国画、西画(油画、漫画、版画等)，表现形式不限，电脑绘画除外；<br />
				<span v-if="realSty == 2">
					(5) 作品必须标注作者姓名+地区+父/母姓名。<br />
				</span>
				<span v-if="realSty == 1">
					(5) 作品必须标注地区+工号+姓名。<br />
				</span>				
			</p>					
			<p v-if="sty == 4" class="BM_From_text">
				(1) 符合作品主题要求；<br />
				(2) 歌曲内容正能量，类型不限；<br />
				(3) 使用全民K歌录制，提供作品链接。<br />
			</p>
			<p v-if="sty == 5" class="BM_From_text">
				(1) 符合作品主题要求；<br />
				(2) 时间控制在3分钟以内；<br />
				(3) 使用美拍制作，提供作品链接；<br />
				(4) 拍摄画面清晰，编辑完整；<br />
				(5) 片中不能插入其他与比赛无关的LOGO和标识。<br />
			</p>					
			<p v-if="sty == 7" class="BM_From_text">
				(1) 符合作品主题要求；<br />
				(2) 朗诵内容不限，可以是诗歌、散文、小说等；<br />
				(3) 使用喜马拉雅FM制作，用户可通过分享给微信好友，在微信右上角复制链接获得作品链接；<br />
				(4) 录音时间控制在3分钟以内。<br />
			</p>					
			<p v-if="sty == 9" class="BM_From_text">
				(1) 符合作品主题要求；<br />
				(2) 节目类型不限，舞蹈、歌唱、武术、乐器等才艺均可；<br />
				(3) 使用腾讯视频上传才艺视频，提供作品链接。<br />	
			</p>					
			
			
			<img src="img/zuopin06.png" class="BM_From_ioc01"/>
			<input @focus="PromptFadeOut()" @blur="PromptFadeOut()" id="select_contact" type="text" class="BM_From_in marginTop15" placeholder="请选择地区"/>		
			
			
			<input @focus="PromptFadeOut()" @blur="PromptFadeOut()" v-if="realSty == 2" id="familyName" type="text" class="BM_From_in marginTop15" placeholder="请输入子女姓名"/>	
			
			<input @focus="PromptFadeOut()" @blur="PromptFadeOut()" v-if="realSty != 2" id="JopNumber" type="text" class="BM_From_in marginTop15" placeholder="请输入工号"/>
			<input @focus="PromptFadeOut()" @blur="PromptFadeOut()" v-if="realSty == 2" id="familyNumber" type="text" class="BM_From_in marginTop15" placeholder="请输入父/母工号"/>
			
			<input @focus="PromptFadeOut()" @blur="PromptFadeOut()" v-if="realSty != 2" id="YouName" type="text" class="BM_From_in marginTop15" placeholder="请输入姓名"/>
			<input @focus="PromptFadeOut()" @blur="PromptFadeOut()" v-if="realSty == 2" id="YoufamilyName" type="text" class="BM_From_in marginTop15" placeholder="请输入父/母姓名"/>
			
			<input @focus="PromptFadeOut()" @blur="PromptFadeOut()" id="telp" type="number" class="BM_From_in marginTop15" placeholder="请输入联系电话" oninput="if(value.length>11)value=value.slice(0,11)" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"/>

			<img @click="submitFn()" src="img/zuopin07.jpg" class="BM_From_Btn"/>					
		</form>
		
		<div class="Mask_baomingSu"></div>	
		
		<form id="form">
		    <input id="js-file" type="file" style="display:none;"/>
		</form>			
		
		
		<div id="spinner">
			<div class="spinner">
			  <div class="spinner-container container1">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container2">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container3">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			</div>			
		</div>			
		
		
		<div class="Mask_Que">
			<div class="Mask_Txt">{{errorTxt}}</div>			
			<div @click="maskFadeOut('.Mask_Que')" class="Mask_Insure"></div>			
		</div>
		
		
		
	</div>
`;

var data = {
	sty:0,			//进入种类  1友书画员工组   2工友书画家属组  3 摄影  4 好声音  5视屏   6广告语(线下)   7朗诵   8文章(线下)  9好节目
	realSty:1,			//真实投稿种类	1工友书画员工组   2工友书画家属组  3 摄影  4 好声音  5视屏   6广告语(线下)   7朗诵   8文章(线下)  9好节目
	ZPimg:'',			//作品地址
	Area:'',			//地区
	innerHeight:'',
	withCredentials:true,
	placeholders:"",
	placeholders09:'',
	errorTxt:'请输入作品名称',
};

const baoming_From = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
		this.shareUrlFn();
        this.$nextTick(function () {
            this.flieUpFn();
            this.areaFn();
        }); 		
	},
	methods: {
		init: function() {
			var that = this;
			that.sty = that.$route.params.id
			
    		//拿去音乐动画缓存
    		var musiconoff = sessionStorage.getItem("musiconoff") || false;
    		console.log(musiconoff)
    		if(musiconoff == 'true' || musiconoff == true){		//真，音乐关闭状态
	            $('.musicImg').removeClass('music_Play');
	            console.log(1)
    		}else if(musiconoff == 'false' || musiconoff == false){
	            $('.musicImg').addClass('music_Play');
	            console.log(2)
    		} 			
			
			if(that.sty == 9){
				that.placeholders="请输入作品介绍及学习该项才艺的时间、曾获得的奖项等。"
				that.placeholders09='请输入作品链接'
			}else{
				that.placeholders="请输入作品介绍(限150字内)"
				that.placeholders09='请输入作品链接'
			}
			
			
			
    		that.innerHeight = window.innerHeight; 	//获取视口高度，后面备用
    		$('#baoming_From').css("height",that.innerHeight);			
			
			if(that.sty == 0){
				that.realSty = 1
			}else{
				that.realSty = that.sty
			}

			console.log(that.sty)
			



		},
  		//音乐开关
		get_a:function(){
	        var audio = document.getElementById('myaudio');
	        if (audio.paused) {
	            audio.play();
	            $('.musicImg').addClass('music_Play');
	            sessionStorage.setItem("musiconoff",false)	
	        } else {
	            audio.pause();
	            $('.musicImg').removeClass('music_Play');
	            sessionStorage.setItem("musiconoff",true)	
	        }
		}, 		
		//选择身份
		checkedFN: function(a) {
			var that = this;			
			that.realSty = a
		},		
		
		//提交信息
		submitFn: function() {
			var that = this;
			var ZPName = $('#ZPName').val()
			var ZPExplain = $('#ZPExplain').val();
			var ZPlink = $('#ZPlink').val();
			var telp = $('#telp').val();
			
			console.log(that.Area)
			
			var Name01,Name02,JopNumber;
			
			if(that.realSty == 2){
				Name01 = $('#familyName').val();
				Name02 = $('#YoufamilyName').val();
				JopNumber = $('#familyNumber').val();
			}else{
				Name01 = $('#YouName').val();
				Name02 = $('#YouName').val();
				JopNumber = $('#JopNumber').val();
			}
			
			if(ZPName == '' || ZPName == null){
				that.errorTxt = '请输入作品名称'
				that.maskFadeIn('.Mask_Que')
				return false
			}
			if(ZPExplain == '' || ZPExplain == null){
				that.errorTxt = '请输入作品介绍'
				that.maskFadeIn('.Mask_Que')
				return false
			}	
			if(that.realSty > 3){
				if(ZPlink == '' || ZPlink == null){
					that.errorTxt = '请输入作品链接'
					that.maskFadeIn('.Mask_Que')
					return false
				}				
			}
	
			if(Name01 == '' || Name01 == null){
				that.errorTxt = '请输入姓名'	
				that.maskFadeIn('.Mask_Que')
				return false
			}
			if(Name02 == '' || Name02 == null){
				that.errorTxt = '请输入姓名'
				that.maskFadeIn('.Mask_Que')
				return false
			}	
			if(JopNumber == '' || JopNumber == null){
				that.errorTxt = '请输入工号'
				that.maskFadeIn('.Mask_Que')
				return false
			}				
			if(that.Area == '' || that.Area == null){
				that.errorTxt = '请输入地区'
				that.maskFadeIn('.Mask_Que')
				return false
			}			
			if(telp == '' || telp == null){
				that.errorTxt = '请输入联系电话'
				that.maskFadeIn('.Mask_Que')
				return false
			}			
			if(that.ZPimg == '' || that.ZPimg == null){
				that.errorTxt = '请上传作品封面'
				that.maskFadeIn('.Mask_Que')
				return false
			}
			
			
			//上传信息
			$('#spinner').fadeIn()
			$.ajax({
				url: that.publicUrl,
				data: {
					a: 'submit_join_info',
					type: that.realSty,
					title: ZPName,
					info: ZPExplain,
					other_info: ZPlink || 1,
					image: that.ZPimg,
					address: that.Area,
					workno: JopNumber,
					workname:Name01,
					phone: telp,
					self_name:Name02,
				},
				dataType: "json",
				xhrFields: {
					withCredentials: that.withCredentials
				},
				success: function(result) {
					console.log(result)
					$('#spinner').fadeOut()
					if(result.errorCode == 0) {
						$('.Mask_baomingSu').fadeIn()
						setTimeout(function(){
							that.$router.push('/home');
						},400)						
					} else {
						alert(result.errorMsg);
					}
				}
			})			
			
		},
    	//input获取焦点重置元素高度兼容安卓
    	PromptFadeOut:function(){
    		var that = this ;   		
    		var c = document.getElementById('baoming_From');
    		c.setAttribute('height', that.innerHeight);
    	},

		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},

    	//地区选择插件
		areaFn:function(){
			var that = this;
		   	var selectContactDom = $('#select_contact');
		    
		    selectContactDom.bind('click', function () {
		        var sccode = selectContactDom.attr('data-city-code');
		        var scname = selectContactDom.attr('data-city-name');
		
		        var oneLevelId = selectContactDom.attr('data-province-code');
		        var twoLevelId = selectContactDom.attr('data-city-code');
		        var iosSelect = new IosSelect(2, 
		            [iosProvinces, iosCitys],
		            {
		                title: '地址选择',
		                itemHeight: 35,
		                relation: [1, 1],
		                oneLevelId: oneLevelId,
		                twoLevelId: twoLevelId,
		                callback: function (selectOneObj, selectTwoObj) {
		
		                    selectContactDom.attr('data-province-code', selectOneObj.id);
		                    selectContactDom.attr('data-city-code', selectTwoObj.id);

		                    selectContactDom.val(selectTwoObj.value);
		                    that.Area = selectTwoObj.value 
		                }
		        });
		    });

		}, 


		//05文件上传腾讯云
		flieUpFn:function(){
			var that = this 
            //TODO 以下几个值请确保填上再调用示例里的sdk方法
            //具体可以到https://console.qcloud.com/cos 进行查看
            var bucket = 'yuxiu';
            var appid = '1254105281';
            var sid = 'AKIDytgNuGibbR6cw5t8xa9XksvpaAdv71oP';
            var region = 'gz';
            //TODO 以上几个值请确保填上再调用示例里的sdk方法

            var myFolder = '/aaa/';//需要操作的目录

            //初始化逻辑
            //特别注意: JS-SDK使用之前请先到console.qcloud.com/cos 对相应的Bucket进行跨域设置
            var cos = new CosCloud({
                appid: appid, // APPID 必填参数
                bucket: bucket, // bucketName 必填参数
                region: region, // 地域信息 必填参数 华南地区填gz 华东填sh 华北填tj
                getAppSign: function (callback) {//获取签名 必填参数

				$.ajax({
			            // async : false,
			        url:"http://sf-gh.sf-companion.com/zgame/?m=sf_gh",
			        data: {
			            a:'get_cos_sign_info',
			            folder:'/'
			        },
					success:function(result){
						callback(result)
					},
				})


                },
                getAppSignOnce: function (callback) {//单次签名，参考上面的注释即可

					$.ajax({
            			url:"http://sf-gh.sf-companion.com/zgame/?m=sf_gh",
				        data: {
				            a:'get_cos_sign_info',
				            folder:'/'
				        },
						success:function(result){
							callback(result)
						},
					})
                }
            });

            var successCallBack = function (result) {
                console.log(result);
                that.ZPimg = result.data.access_url
                $(".FileBtn").attr('src',result.data.access_url);
            };

            var errorCallBack = function (result) {
                result = result || {};
               
            };

            var progressCallBack = function (curr, sha1) {
                var sha1CheckProgress = ((sha1 * 100).toFixed(2) || 100) + '%';
                var uploadProgress = ((curr || 0) * 100).toFixed(2) + '%';
                var msg = 'upload progress:' + uploadProgress + '; sha1 check:' + sha1CheckProgress + '.';
                $("#result").val(msg);
            };

            var lastTaskId;
            var taskReady = function (taskId) {
                lastTaskId = taskId;
            };

            //上传文件,适合小于20M的文件上传            
            $('.FileBtn').on('click', function () {
                $('#js-file').off('change').on('change', function (e) {
                    var file = e.target.files[0];
					$('#spinner').fadeIn()
				    $.ajax({
				        url: "http://sf-gh.sf-companion.com/zgame/?m=sf_gh",
				        data: {
				            a:"get_update_url_info",
				            tail:file.name,     
				        },
				        dataType: "json",
				        xhrFields:{withCredentials:false},
				        cache: false,
				        success: function (data) {
				        	$('#spinner').fadeOut()
				            if (data.errorCode != 0) {
				                alert(data.errorMsg)
				            } else {	
				            	//insertOnly==0 表示允许覆盖文件 1表示不允许
				            	cos.uploadFile(successCallBack, errorCallBack, progressCallBack, bucket,data.result, file, 1, taskReady);
				            }

				        }
				    });                    
                    $('#form')[0].reset();
                    return false;
                });

                setTimeout(function () {
                    $('#js-file').click();
                }, 0);

                return false;
            });        		
    	},			
		//01分享
		shareUrlFn: function() {
			var that = this;
			$.ajax({
				url: "http://sf-college.szbiu.com/zgame/",
				data: {
					m: 'biu_common',
					a: 'get_share_info',
					nowurl: window.location.href
				},
				success: function(result) {
					var tmp = JSON.parse(result);
					var jssdk_info = tmp.other_info.jssdkinfo;
					wx.config({
						debug: false,
						appId: jssdk_info.appId,
						timestamp: jssdk_info.timestamp,
						nonceStr: jssdk_info.nonceStr,
						signature: jssdk_info.signature,
						jsApiList: [
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'hideMenuItems',
						]
					});
					wx.ready(
						function() {
							wx.onMenuShareAppMessage({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})

								},
								cancel: function() {}
							});
							wx.onMenuShareTimeline({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})
								},
								cancel: function() {}
							});
							wx.hideMenuItems({
								menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email'],
							});
						}
					);
				},
			})
		},

	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	baoming_From
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 投票页
const tempStr = `
	<div id="toupiao">
		<img src="img/stutas02.jpg" class="imgsize"/>
		<img @click="get_a()" src="img/music.png" alt="" class="musicImg music_Play"/>
		<div class="baoming_Box">
			<div @click="maskFadeIn('.Mask_baomingRule')" class="toupiao_rule"></div>
			<div class="toupiao_entryBox">
				<router-link to="/ZPList/1" class="toupiao_entry"></router-link>
				<router-link to="/ZPList/2" class="toupiao_entry"></router-link>
				<router-link to="/ZPList/3" class="toupiao_entry"></router-link>
				<router-link to="/ZPList/4" class="toupiao_entry"></router-link>
				<router-link to="/ZPList/5" class="toupiao_entry"></router-link>
				<router-link to="/ZPList/7" class="toupiao_entry"></router-link>
				<router-link to="/ZPList/8" class="toupiao_entry"></router-link>
				<router-link to="/liuyan" class="toupiao_entry"></router-link>
			</div>	
									
			
			<div class="baoming_paomadeng"></div>
			
			<div class="Mask_baomingRule">
				<div @click="maskFadeOut('.Mask_baomingRule')" class="baomingRule_close"></div>
			</div>		
			
			
		</div>	
		
		
		
		
		
		<div id="spinner">
			<div class="spinner">
			  <div class="spinner-container container1">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container2">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container3">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			</div>			
		</div>		
		
	</div>
`;

var data = {
	page:0,
	item:[],		//弹幕数据容器
	index:0,		//当前弹幕索引值
	looper:function(){},	//弹幕定时器
	withCredentials:true,
};

const toupiao = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
		this.shareUrlFn();
	},
	methods: {
		init: function() {
			var that = this;

    		//拿去音乐动画缓存
    		var musiconoff = sessionStorage.getItem("musiconoff") || false;
    		console.log(musiconoff)
    		if(musiconoff == 'true' || musiconoff == true){		//真，音乐关闭状态
	            $('.musicImg').removeClass('music_Play');
	            console.log(1)
    		}else if(musiconoff == 'false' || musiconoff == false){
	            $('.musicImg').addClass('music_Play');
	            console.log(2)
    		} 

			$('#spinner').fadeIn()
			//获取投稿数
			$.ajax({
				url: that.publicUrl,
				data: {
					a: 'get_vote_nums',
				},
				dataType: "json",
				xhrFields: {
					withCredentials: that.withCredentials
				},
				success: function(result) {
					console.log(result)
					$('#spinner').fadeOut()
					if(result.errorCode == 0) {
						that.tougaoNum= result.result || 0;
					} else {
						alert(result.errorMsg);
					}
				}
			})
			
			//获留言
			$.ajax({
				url: that.publicUrl,
				data: {
					a: 'get_message',
					page:that.page,
				},
				dataType: "json",
				xhrFields: {
					withCredentials: that.withCredentials
				},
				success: function(result) {
					console.log(result)
					if(result.errorCode == 0) {
						var detail = result.result;
						if(detail.length > 0){
							that.item = []
							for(var i=0;i<detail.length;i++){
								var bottom = parseInt(Math.random()*(40-1+1)+1,10);
								var item={
								   img:detail[i].icon, //图片 
								   info:detail[i].message, //文字 
								   href:'', //链接 
								   close:true, //显示关闭按钮 
								   speed:15, //延迟,单位秒,默认8
								   bottom:bottom, //距离底部高度,单位px,默认随机 
								   color:'#fff', //颜色,默认白色 
								   old_ie_color:'#000000', //ie低版兼容色,不能与网页背景相同,默认黑色 
								}								
								that.item.push(item)
							}							
							that.barraFn();		
						}
					} else {
						alert(result.errorMsg);
					}
				}
			})			


		},
  		//音乐开关
		get_a:function(){
	        var audio = document.getElementById('myaudio');
	        if (audio.paused) {
	            audio.play();
	            $('.musicImg').addClass('music_Play');
	            sessionStorage.setItem("musiconoff",false)	
	        } else {
	            audio.pause();
	            $('.musicImg').removeClass('music_Play');
	            sessionStorage.setItem("musiconoff",true)	
	        }
		}, 		
		//获取留言
		getLiuYan: function(a) {
			var that = this 
			that.page++
			//获留言数
			$.ajax({
				url: that.publicUrl,
				data: {
					a: 'get_message',
					page:that.page,
				},
				dataType: "json",
				xhrFields: {
					withCredentials: that.withCredentials
				},
				success: function(result) {
					console.log(result)
					if(result.errorCode == 0) {
						var detail = result.result;
						if(detail.length > 0){
							that.item = []
							for(var i=0;i<detail.length;i++){
								var bottom = parseInt(Math.random()*(40-1+1)+1,10);
								var item={
								   img:detail[i].icon, //图片 
								   info:detail[i].message, //文字 
								   href:'', //链接 
								   close:true, //显示关闭按钮 
								   speed:15, //延迟,单位秒,默认8
								   bottom:bottom, //距离底部高度,单位px,默认随机 
								   color:'#fff', //颜色,默认白色 
								   old_ie_color:'#000000', //ie低版兼容色,不能与网页背景相同,默认黑色 
								}
								
								that.item.push(item)
							}			
						}else{
							that.page = 0
						}
					} else {
						alert(result.errorMsg);
					}
				}
			})				
		},		
		//执行弹幕播放
		barraFn: function() {
			var that = this 
			that.looper = setInterval(function(){			
				$('.baoming_paomadeng').barrager(that.item[that.index]);
				that.index++;	
				if(that.index >= that.item.length){
					that.index = 0 ;
					that.getLiuYan();
				}
			},3500)
		},		

		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},
		goOther:function(a){
			var that = this;
			that.$router.push(a);
		},
		
		//01分享
		shareUrlFn: function() {
			var that = this;
			$.ajax({
				url: "http://sf-college.szbiu.com/zgame/",
				data: {
					m: 'biu_common',
					a: 'get_share_info',
					nowurl: window.location.href
				},
				success: function(result) {
					var tmp = JSON.parse(result);
					var jssdk_info = tmp.other_info.jssdkinfo;
					wx.config({
						debug: false,
						appId: jssdk_info.appId,
						timestamp: jssdk_info.timestamp,
						nonceStr: jssdk_info.nonceStr,
						signature: jssdk_info.signature,
						jsApiList: [
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'hideMenuItems',
						]
					});
					wx.ready(
						function() {
							wx.onMenuShareAppMessage({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})

								},
								cancel: function() {}
							});
							wx.onMenuShareTimeline({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})
								},
								cancel: function() {}
							});
							wx.hideMenuItems({
								menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email'],
							});
						}
					);
				},
			})
		},

	},
    beforeDestroy:function(){
        var that = this 
         clearInterval(that.looper);
    },
    destroyed:function(){
        clearInterval(this.looper);
    }
    
    
    
}

/* harmony default export */ __webpack_exports__["a"] = ({
	toupiao
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 作品列表
const tempStr = `
	<div id="ZPList">
		<div class="pr">
			<img src="img/huoxuan_head.png" class="imgsize"/>
			<div v-if="sty == 1" class="ZPList_headtxt">工友好书画-员工组</div>
			<div v-if="sty == 2" class="ZPList_headtxt">工友好书画-子女组</div>
			<div v-if="sty == 3" class="ZPList_headtxt">工友好摄影</div>
			<div v-if="sty == 4" class="ZPList_headtxt">工友好声音</div>
			<div v-if="sty == 5" class="ZPList_headtxt">工友微视频</div>
			<div v-if="sty == 7" class="ZPList_headtxt">工友好朗诵</div>
			<div v-if="sty == 8" class="ZPList_headtxt">工友好文章</div>
		</div>
		
		<img @click="get_a()" src="img/music.png" alt="" class="musicImg music_Play"/>
		
		<div class="ZPList_searchBox">
			<input type="text" class="ZPList_search" placeholder="请输入姓名搜索" id="home_search_Input"/>
			<div @click="searchFn()" class="search_Ioc"></div>
		</div>
		
	  	<div class="home_momListBox">
	  	 
	  		<div v-for="(Lists,index) in ZPLists" :key="Lists.id" class="home_momListBigBox">
	  			<img @click="goOther(Lists.id)" :src="Lists.image ? Lists.image : 'img/timg.jpg'" :class="{'home_momList_info_img':true,'Product_image':true,'fr':index%2 != 0,'fl':index%2 == 0}"/>
	  			<div @click="goOther(Lists.id)" :class="{'home_momList_info_txt':true,'fr':index%2 != 0,'fl':index%2 == 0}">
	  				<div class="padding">
	  					<div class="home_momName">{{Lists.id}}号&nbsp;&nbsp;&nbsp;&nbsp;{{Lists.workname}}</div>
	  					
	  					<!--<div v-if="sty != 2" class="home_ranking">工&nbsp;&nbsp;号：{{Lists.workno}}</div>	  					
	  						<div v-if="sty == 2" class="home_ranking">父/母工号：{{Lists.workno}}</div>-->
	  					
	  					<div v-if="sty == 2" class="home_ranking">父/母姓名：{{Lists.self_name}}</div>
	  					
	  					<div class="home_ranking">作品名称：{{Lists.title}}</div>
	  					<div class="home_ranking">票&nbsp;&nbsp;数：{{Lists.vote}}</div>	 	  					
	  				</div>	  				
	  			</div>
				<div @click="voteTA(Lists.id,index)" :class="{'home_TP_Btn':true,'pleft':index%2 != 0,'pright':index%2 == 0}">
					<img v-if="Lists.isVote == 1" src="img/tp01.png" class="home_TP_Btn_Bg"/>
					<img v-if="Lists.isVote == 2" src="img/tp02.png" class="home_TP_Btn_Bg"/>
					<div v-if="Lists.isVote == 1" class="home_TP_Box">投TA一票</div>
					<div v-if="Lists.isVote == 2" class="home_TP_Box">投票成功</div>
				</div>	  			
	  		</div>
	  		
	  	</div>		
		
		<div @click="maskFadeOut('.Mask_TPsuccess')" class="Mask_TPsuccess"></div>
		
		<div class="m-style M-box11"></div>
		
		
		<div id="spinner">
			<div class="spinner">
			  <div class="spinner-container container1">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container2">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container3">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			</div>			
		</div>		
		
	</div>
`;

var data = {
	sty:1,			//1友书画员工组   2工友书画家属组  3 摄影  4 好声音  5视屏   6广告语(线下)   7朗诵   8文章(线下)  9好节目
	ZPLists:[] ,
	allNum:'',
	withCredentials:true,
	voteBg:'img/ZP_detail06.png',
	isVote:1,
	
};

const ZPList = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
		this.shareUrlFn();
		this.fenyeFn();
	},
	methods: {
		init: function() {
			var that = this;
			that.sty = that.$route.params.id
			localStorage.setItem('sty',that.sty)			
			that.ZPLists = []
			
    		//拿去音乐动画缓存
    		var musiconoff = sessionStorage.getItem("musiconoff") || false;
    		console.log(musiconoff)
    		if(musiconoff == 'true' || musiconoff == true){		//真，音乐关闭状态
	            $('.musicImg').removeClass('music_Play');
	            console.log(1)
    		}else if(musiconoff == 'false' || musiconoff == false){
	            $('.musicImg').addClass('music_Play');
	            console.log(2)
    		} 			
			
			
			$('#spinner').fadeIn()
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'get_rank_info_by_type',
	                type:that.sty ,
	                page:1,	
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
	            	console.log(result)
	            	$('#spinner').fadeOut()
					if(result.errorCode == 0){
						var zp = result.result.detail_info;
						that.allNum = result.result.allNum;					
						if(that.allNum == 0 || result.result == ''){						
							$('.M-box11').hide()
						}else{
							that.fenyeFn();
							for(var i = 0 ; i< zp.length ; i++){
								zp[i].isVote = 1								
							}	
							that.ZPLists = zp							
							that.$nextTick(function(){
								for(var i = 0 ; i< that.ZPLists.length ; i++){
									that.ZPLists[i].isVote = 1
									that.TestingTel(that.ZPLists[i].image,i)
								}								
							})							
						}								
					}else{
						alert(result.errorMsg);
					}		            			            	
	            }
	        })
	        
	        
        

		},
		
  		//音乐开关
		get_a:function(){
	        var audio = document.getElementById('myaudio');
	        if (audio.paused) {
	            audio.play();
	            $('.musicImg').addClass('music_Play');
	            sessionStorage.setItem("musiconoff",false)	
	        } else {
	            audio.pause();
	            $('.musicImg').removeClass('music_Play');
	            sessionStorage.setItem("musiconoff",true)	
	        }
		}, 
		//投他一票
		voteTA:function(id,index){
			var that = this;

			$('#spinner').fadeIn()
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'try_vote',
	                id:id ,
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
	            	console.log(result)
	            	$('#spinner').fadeOut()
					if(result.errorCode == 0){	
						$('.Mask_TPsuccess').fadeIn()
						
						that.ZPLists[index].isVote = 2 ;
						
						setTimeout(function(){
							$('.Mask_TPsuccess').fadeOut()
						},400)
					}else{
						alert(result.errorMsg);
					}		            			            	
	            }
	        })				
			
		},		
		goOther: function(a) {
			var that = this;
			that.$router.push('/zuopinDetails/2/'+a);

		},		
    	//搜索
    	searchFn:function(a){
    		var that = this;
    		var query_info = $('#home_search_Input').val();
	        //获取列表信息
	        $('#spinner').fadeIn()
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'get_rank_info_by_type',
	                type:that.sty ,
	                query_info:query_info,
	                page:1,	
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
	            	console.log(result)
	            	$('#spinner').fadeOut()
					if(result.errorCode == 0){	
						var zp = result.result.detail_info;
						that.allNum = result.result.allNum;					
						if(that.allNum == 0 || result.result == ''){
							alert('暂无搜索结果！')
							$('.M-box11').hide()
						}else{
							that.fenyeFn();
							for(var i = 0 ; i< zp.length ; i++){
								zp[i].isVote = 1								
							}	
							that.ZPLists = zp							
							that.$nextTick(function(){
								for(var i = 0 ; i< that.ZPLists.length ; i++){
									that.ZPLists[i].isVote = 1
									that.TestingTel(that.ZPLists[i].image,i)
								}								
							})							
						}						
						
					}else{
						alert(result.errorMsg);
					}		            			            	
	            }
	        })   		

    		
    	},  		
		//获取排行榜列表数据
		fenyeFn:function(){
			var that = this ;
			//分页插件
			$('.M-box11').pagination({
				totalData:that.allNum,		//数据总条数
				showData:5,			//每页显示数据条数
				count:7,			//当前页前后显示数据条数
				mode: 'fixed',
			    callback: function (api) {
			        console.log(api.getCurrent())
			        var nowpage = api.getCurrent();
			        var query_info = $('#home_search_Input').val();
			        //获取列表信息
			        $('#spinner').fadeIn()
			        $.ajax({
			            url: that.publicUrl,
			            data: {
			                a:'get_rank_info_by_type',
			                type:that.sty ,
			                query_info:query_info,
			                page:nowpage,		                
			            },
			            dataType:"json",
			            xhrFields:{withCredentials:that.withCredentials},
			            success: function (result) {
			            	console.log(result)
			            	$('#spinner').fadeOut()
							if(result.errorCode == 0){	
								var zp = result.result.detail_info;
								that.allNum = result.result.allNum;					
								if(that.allNum == 0 || result.result == ''){
									alert('暂无搜索结果！')
								}else{
									for(var i = 0 ; i< zp.length ; i++){
										zp[i].isVote = 1								
									}	
									that.ZPLists = zp							
									that.$nextTick(function(){
										for(var i = 0 ; i< that.ZPLists.length ; i++){
											that.ZPLists[i].isVote = 1
											that.TestingTel(that.ZPLists[i].image,i)
										}								
									})							
								}								
								
							}else{
								alert(result.errorMsg);
							}		            			            	
			            }
			        })			        
			        
			    }			    
			});	
		},	
		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},
		//检测手机种类
		TestingTel:function(srcUrl,i){
			var that = this 
			
		    var u = navigator.userAgent, app = navigator.appVersion;
		    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
		    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		    var ismobile =  !!u.match(/AppleWebKit.*Mobile.*/)
		        if(!(ismobile && isIOS)) // 不是iphone
		        {
		        	var w = $('.works').width()
		        	var h = $('.works').height()		        	
		            
		            var new_img = new Image();
		            new_img.src = srcUrl;
		            console.log('w:'+w)
		            console.log('h:'+h)
		            new_img.onload = function(){
		                EXIF.getData(new_img, function(){
		                        EXIF.getAllTags(this);
		                        var a = EXIF.getTag(this, 'Orientation');
		                        if(a == 3)
		                        {
		                        	$('.Product_image').eq(i).css("transform",'rotate(180deg)')
		                        	$('.Product_image').eq(i).css("transform-origin",'50% 50%')
			                        $('.Product_image').eq(i).height(w)	
		                        }
		                        if(a == 6)
		                        {	
		                        	$('.Product_image').eq(i).css("transform",'rotate(90deg)')
		                        	$('.Product_image').eq(i).css("transform-origin",'50% 50%')
			                        $('.Product_image').eq(i).height(w)	
		                        }
		                        if(a == 8)
		                        {
		                        	$('.Product_image').eq(i).css("transform",'rotate(270deg)')
		                        	$('.Product_image').eq(i).css("transform-origin",'50% 50%')
			                        $('.Product_image').eq(i).height(w)	
		                        }
		                    });
		            }
		        }			
			
		},

		//01分享
		shareUrlFn: function() {
			var that = this;
			$.ajax({
				url: "http://sf-college.szbiu.com/zgame/",
				data: {
					m: 'biu_common',
					a: 'get_share_info',
					nowurl: window.location.href
				},
				success: function(result) {
					var tmp = JSON.parse(result);
					var jssdk_info = tmp.other_info.jssdkinfo;
					wx.config({
						debug: false,
						appId: jssdk_info.appId,
						timestamp: jssdk_info.timestamp,
						nonceStr: jssdk_info.nonceStr,
						signature: jssdk_info.signature,
						jsApiList: [
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'hideMenuItems',
						]
					});
					wx.ready(
						function() {
							wx.onMenuShareAppMessage({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})

								},
								cancel: function() {}
							});
							wx.onMenuShareTimeline({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})
								},
								cancel: function() {}
							});
							wx.hideMenuItems({
								menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email'],
							});
						}
					);
				},
			})
		},

	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	ZPList
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 留言区
const tempStr = `
	<div id="liuyan" @touchstart="TestingDistance($event)" @touchmove="TestingDistance($event)" @touchend="moreRanking($event)">
		<img @click="get_a()" src="img/music.png" alt="" class="musicImg music_Play"/>
		<img src="img/liuyan_head.png" class="liuyan_Ioc"/>
		
		<div class="liuyan_Num">{{liuyanList.length}}条留言</div>
		
		<div class="liuyan_Box">
			
			<div v-for="liuyan in liuyanList" :key="liuyan.id" class="liuyan_list">
				<div class="liuyan_List_TopBox">
					<img :src="liuyan.icon ? liuyan.icon : 'img/timg.jpg'" class="liuyan_tou"/>
					<div class="liuyan_Name_Time">						
						<div class="liuyan_Time">{{liuyan.logtime | time}}</div>
						<div class="liuyan_Name">{{liuyan.name}}</div>
					</div>
				</div>
				<div class="liuyan_Info liuyan_Info_More">{{liuyan.message}}</div>
				<div class="seemore" v-show="liuyan.message.length > 42">阅读更多</div>
			</div>

			
			<div class="liuyan_nomore">————&nbsp;&nbsp;&nbsp;到底了，留言去吧&nbsp;&nbsp;&nbsp;————</div>
		</div>
		
		<div class="liuyan_inBox">
			<input type="text" class="liuyan_input" id="liuyan_input" placeholder="写下你的留言" maxlength="60"/>
			<button @click="SbumiLiuyan()" class="liuyan_submit">发送</button>
		</div>

		<div class="Mask_LiuyanSu"></div>

		<div id="spinner">
			<div class="spinner">
			  <div class="spinner-container container1">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container2">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container3">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			</div>			
		</div>		
		
	</div>
`;

var data = {
	page:0,
	Distance: 0, //留言上滑距离
	liuyanList:[],
	withCredentials:true,
	
};

const liuyan = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
		this.shareUrlFn();
	},
	methods: {
		init: function() {
			var that = this;

    		//拿去音乐动画缓存
    		var musiconoff = sessionStorage.getItem("musiconoff") || false;
    		console.log(musiconoff)
    		if(musiconoff == 'true' || musiconoff == true){		//真，音乐关闭状态
	            $('.musicImg').removeClass('music_Play');
	            console.log(1)
    		}else if(musiconoff == 'false' || musiconoff == false){
	            $('.musicImg').addClass('music_Play');
	            console.log(2)
    		} 

			//获取排行榜数组
			that.getLiuYan()


		},
  		//音乐开关
		get_a:function(){
	        var audio = document.getElementById('myaudio');
	        if (audio.paused) {
	            audio.play();
	            $('.musicImg').addClass('music_Play');
	            sessionStorage.setItem("musiconoff",false)	
	        } else {
	            audio.pause();
	            $('.musicImg').removeClass('music_Play');
	            sessionStorage.setItem("musiconoff",true)	
	        }
		}, 		
		//排行榜下滑距离计算    加载更多
		TestingDistance: function(e) {
			var that = this;
			that.Distance++;
			console.log(that.Distance);

		},		
		//加载更多
		moreRanking: function() {
			var that = this;
			if(that.Distance > 10) {
				console.log("加载数据");				
				that.getLiuYan();
			}
			that.Distance = 0;			
		},		
		//获数据
		getLiuYan:function(Url){
			var that = this ;
			that.page++
			//获留言数
			$.ajax({
				url: that.publicUrl,
				data: {
					a: 'get_message',
					page:that.page,
				},
				dataType: "json",
				xhrFields: {
					withCredentials: that.withCredentials
				},
				success: function(result) {
					console.log(result)
					if(result.errorCode == 0) {
						var detail = result.result;
						if(detail.length > 0){
							for(var i=0;i<detail.length;i++){
								that.liuyanList.push(detail[i])
							}
							
							that.$nextTick(function(){
								that.seeMoreFn()
							})
						}else{
							$('.liuyan_nomore').fadeIn()
						}
					} else {
						alert(result.errorMsg);
					}
				}
			})			
			
		},	
		SbumiLiuyan: function() {
			var that = this ;
			var message = $('#liuyan_input').val()
			$('#spinner').fadeIn()
			//获留言数
			$.ajax({
				url: that.publicUrl,
				data: {
					a: 'leave_message',
					message:message,
				},
				dataType: "json",
				xhrFields: {
					withCredentials: that.withCredentials
				},
				success: function(result) {
					console.log(result)
					$('#spinner').fadeOut()
					if(result.errorCode == 0) {
						$('.Mask_LiuyanSu').fadeIn()					
						setTimeout(function(){
							window.location.reload()
						},600)
					} else {
						alert(result.errorMsg);
					}
				}
			})				

		},
		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},
		seeMoreFn:function(a) {
			var that = this;
		  $('.seemore').each(function(i){
			  $(this).click(function(){
				  $(".liuyan_Info").eq(i).toggleClass("liuyan_Info_More");
			  });
		  })			
			
		},

		//01分享
		shareUrlFn: function() {
			var that = this;
			$.ajax({
				url: "http://sf-college.szbiu.com/zgame/",
				data: {
					m: 'biu_common',
					a: 'get_share_info',
					nowurl: window.location.href
				},
				success: function(result) {
					var tmp = JSON.parse(result);
					var jssdk_info = tmp.other_info.jssdkinfo;
					wx.config({
						debug: false,
						appId: jssdk_info.appId,
						timestamp: jssdk_info.timestamp,
						nonceStr: jssdk_info.nonceStr,
						signature: jssdk_info.signature,
						jsApiList: [
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'hideMenuItems',
						]
					});
					wx.ready(
						function() {
							wx.onMenuShareAppMessage({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})

								},
								cancel: function() {}
							});
							wx.onMenuShareTimeline({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})
								},
								cancel: function() {}
							});
							wx.hideMenuItems({
								menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email'],
							});
						}
					);
				},
			})
		},

	},
	//过滤器
    filters: {  
        time(value) {
			var date = new Date(parseInt(value) * 1000);
			var Y = date.getFullYear() + '.';
			var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
			var D = date.getDate();
			var h = date.getHours() + ':';
			var m = date.getMinutes();
			//s = date.getSeconds();
			
		    return Y+M+D+' '+h+m;
        }
    },	
}



/* harmony default export */ __webpack_exports__["a"] = ({
	liuyan
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 作品详情
const tempStr = `
	<div id="zuopinDetails">
		<img @click="get_a()" src="img/music.png" alt="" class="musicImg music_Play"/>
		
		<div class="liuyan_Ioc pr">
			<img src="img/ZP_detail01.png" class="imgsize"/>
			<button v-if="ZPDetail.type == 1" class="ZP_Details_head">工友好书画-员工组</button>
			<button v-if="ZPDetail.type == 2" class="ZP_Details_head">工友好书画-子女组</button>
			<button v-if="ZPDetail.type == 3" class="ZP_Details_head">工友好摄影</button>
			<button v-if="ZPDetail.type == 4" class="ZP_Details_head">工友好声音</button>
			<button v-if="ZPDetail.type == 5" class="ZP_Details_head">工友微视频</button>
			<button v-if="ZPDetail.type == 7" class="ZP_Details_head">工友好朗诵</button>
			<button v-if="ZPDetail.type == 8" class="ZP_Details_head">工友好文章</button>
			<button v-if="ZPDetail.type == 9" class="ZP_Details_head">工友好节目</button>
		</div>
		
		
		
		<div @click="goOther(ZPDetail.other_info)" class="ZP_Details_Img_BigBox">
			<img src="img/ZP_detail02.png" class="imgsize"/>
			<div class="ZP_Details_Img_smallBox">
				<div id="ZP_ImgShowBox">
					<img :src="ZPDetail.image ? ZPDetail.image : 'img/timg.jpg'" class="imgsize" id="ZP_ImgShow"/>
					<div v-if="ZPDetail.type > 3" class="ZP_ImgShow_Play">
						<img src="img/play.png" class="ZP_ImgShow_PlayIoc"/>
					</div>
				</div>
				<div class="ZP_ImgShow_info">
					<div v-if="ins == 2 " class="ZP_ImgShow_info01">票数：<span class="fs35">{{ZPDetail.vote}}</span></div>
					<div v-if="ins == 2 " class="ZP_ImgShow_info02">排名：<span class="fs35">{{ZPDetail.rank}}名</span></div>					
				</div>
			</div>			
		</div>
		
		<div class="ImgBigBox" @click="maskFadeOut('.ImgBigBox')">
			<img :src="ZPDetail.image ? ZPDetail.image : 'img/timg.jpg'" id="ZP_ImgShowBig"/>
		</div>
		
		
		<div class="ZP_Details_Data01">
			——&nbsp;&nbsp;&nbsp;投稿信息&nbsp;&nbsp;&nbsp;——
		</div>
		<div class="ZP_Details_Data02">
			<img :src="ZPDetail.icon ? ZPDetail.icon : 'img/timg.jpg'" class="ZP_MyHeader"/>
			<div class="ZP_DData_ListBox">作品名称：{{ZPDetail.title}}</div>	
			<div class="ZP_DData_ListBox">
				<div class="ZP_DData_ListBox01">作品编号：{{ZPDetail.id}}</div>
				<div class="ZP_DData_ListBox01">作者：{{ZPDetail.workname}}</div>
			</div>
			<div class="ZP_DData_ListBox">
				<div class="ZP_DData_ListBox01">地区：{{ZPDetail.address}}</div>
				<!--<div v-if="sty != 2" class="ZP_DData_ListBox01">工号：{{ZPDetail.workno}}</div>-->
				<div v-if="sty == 2" class="ZP_DData_ListBox01">父/母姓名：{{ZPDetail.self_name}}</div>
			</div>	
			<!--<div v-if="sty == 2" class="ZP_DData_ListBox">
				<div v-if="sty == 2" class="ZP_DData_ListBox01">父/母工号：{{ZPDetail.self_name}}</div>			
			</div>-->	
			
					
		</div>

		<div class="ZP_Details_Data01">
			——&nbsp;&nbsp;&nbsp;作品介绍&nbsp;&nbsp;&nbsp;——
		</div>
		<div class="ZP_Details_Data02">{{ZPDetail.info}}</div>
		
		
		<div v-if="sty == 8" class="ZP_Details_Data01">
			——&nbsp;&nbsp;&nbsp;作品内容&nbsp;&nbsp;&nbsp;——
		</div>
		<div v-if="sty == 8" class="ZP_Details_Data02">{{ZPDetail.text}}</div>		
		

		<div v-if="ins == 2" class="ZP_Details_Data01">
			——&nbsp;&nbsp;&nbsp;TA的粉丝&nbsp;&nbsp;&nbsp;——
		</div>
		<div v-if="ins == 2" class="ZP_Details_Data02">
			<div class="nofire">TA还没有粉丝，投TA一票吧~</div>
			
			<div v-for="fans in ZPDetail.fans" class="fire">
				<img :src="fans.icon ? fans.icon : 'img/timg.jpg'" class="fire_Header"/>
				<div class="fire_Name">{{fans.name}}</div>				
			</div>
						
			
			<div class="clearfix"></div>
		</div>

		<div v-if="ins == 2" class="ZP_D_Bottom">
			<div @click="voteTA()" class="ZP_D_Bottom_Btn">
				<img :src="voteBg" class="imgsize"/>
				<div class="ZP_D_Bottom_BtnTxt">{{voteText}}</div>
			</div>
			<div @click="maskFadeIn('.Mask_share')" class="ZP_D_Bottom_Btn">
				<img src="img/ZP_detail06.png" class="imgsize"/>
				<div class="ZP_D_Bottom_BtnTxt">为TA拉票</div>
			</div>			
			<div class="clearfix"></div>
		</div>


		<div @click="maskFadeOut('.Mask_TPsuccess')" class="Mask_TPsuccess"></div>

		<div @click="maskFadeOut('.Mask_share')" class="Mask_share"></div>


		<div id="spinner">
			<div class="spinner">
			  <div class="spinner-container container1">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container2">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container3">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			</div>			
		</div>		
		
	</div>
`;

var data = {
	id:'',
	ZPDetail:{},
	voteBg:'img/ZP_detail06.png',
	is_this_id:false,
	alltimes:'',
	voteText:'投TA一票',
	sty:'',
	withCredentials:true,
	UserName:'',
	ins:'',					//进入作品详情入口
	shareUrl:'',
};

const zuopinDetails = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
		this.shareUrlFn();
	},
	methods: {
		init: function() {
			var that = this;
			that.id = that.$route.params.id
			that.ins = that.$route.params.ins
			that.sty = localStorage.getItem('sty')
			
			if(that.ins == 1){
				that.shareUrl = that.resultUrl
				that.title = that.shareTitle
				that.shareTxt = that.shareDesc
			}else if(that.ins == 2){
				that.shareUrl = 'http://weixinback.sf-companion.com/zgame/?m=biu_common&a=sfgh_auth&actname=sfgh&tempCode=' + that.id 
				that.title = '我参加了第二届网络文化艺术节，请投我一票'
				that.shareTxt = '挥洒青春色彩，张扬梦想的翅膀'				
			}
			

    		//拿去音乐动画缓存
    		var musiconoff = sessionStorage.getItem("musiconoff") || false;
    		console.log(musiconoff)
    		if(musiconoff == 'true' || musiconoff == true){		//真，音乐关闭状态
	            $('.musicImg').removeClass('music_Play');
	            console.log(1)
    		}else if(musiconoff == 'false' || musiconoff == false){
	            $('.musicImg').addClass('music_Play');
	            console.log(2)
    		} 
			
			$('#spinner').fadeIn()
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'get_one_detail_info',
	                id:that.id ,
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
	            	console.log(result)
	            	$('#spinner').fadeOut()
					if(result.errorCode == 0){	
						that.ZPDetail = result.result;	
						that.UserName = result.result.self_name;
						var fans =  result.result.fans;
						if(fans.length == 0 ){
							$('.nofire').show()
						}
						that.$nextTick(function(){
							that.TestingTel('ZP_ImgShow')
							that.TestingTel('ZP_ImgShowBig')
						})						
					}else{
						alert(result.errorMsg);
					}		            			            	
	            }
	        })
	        
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'get_self_vote_this_info',
	                id:that.id ,
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
	            	console.log(result)
	            	$('#spinner').fadeOut()
					if(result.errorCode == 0){	
						that.is_this_id = result.result.is_this_id;	
						that.alltimes = result.result.alltimes ;
						if(that.is_this_id == false && that.alltimes < 3){		//没投票
							that.voteBg = 'img/ZP_detail06.png'
							that.voteText = '投TA一票'
						}else if(that.is_this_id == true && that.alltimes < 3){		//投过票了
							that.voteBg = 'img/ZP_detail05.png'
							that.voteText = '投TA一票'
						}else if(that.is_this_id == true && that.alltimes == 3){		//投过票了
							that.voteBg = 'img/ZP_detail05.png'
							that.voteText = '今日票数已用完'
						}
					}else{
						alert(result.errorMsg);
					}		            			            	
	            }
	        })	        

		},
		
  		//音乐开关
		get_a:function(){
	        var audio = document.getElementById('myaudio');
	        if (audio.paused) {
	            audio.play();
	            $('.musicImg').addClass('music_Play');
	            sessionStorage.setItem("musiconoff",false)	
	        } else {
	            audio.pause();
	            $('.musicImg').removeClass('music_Play');
	            sessionStorage.setItem("musiconoff",true)	
	        }
		}, 
		
		//投他一票
		voteTA:function(){
			var that = this;
			if(!that.is_this_id){
				$('#spinner').fadeIn()
		        $.ajax({
		            url: that.publicUrl,
		            data: {
		                a:'try_vote',
		                id:that.id ,
		            },
		            dataType:"json",
		            xhrFields:{withCredentials:that.withCredentials},
		            success: function (result) {
		            	console.log(result)
		            	$('#spinner').fadeOut()
						if(result.errorCode == 0){	
							$('.Mask_TPsuccess').fadeIn()
							that.voteBg = 'img/ZP_detail05.png'
							setTimeout(function(){
								$('.Mask_TPsuccess').fadeOut()
							},400)
						}else{
							alert(result.errorMsg);
						}		            			            	
		            }
		        })				
			}

		},
		
		//检测手机种类
		TestingTel: function(b) {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
			var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			var ismobile = !!u.match(/AppleWebKit.*Mobile.*/)
			if(!(ismobile && isIOS)) // 不是iphone
			{
				var old_img = document.getElementById(b)

				var image = new Image();
				image.setAttribute("crossOrigin", 'Anonymous')
				image.src = old_img.src;
				image.onload = function() {
					EXIF.getData(image, function() {
						EXIF.getAllTags(this);
						var a = EXIF.getTag(this, 'Orientation');
						if(a == 3 || a == 6 || a == 8) {
							var width = image.width;
							var height = image.height;

							var canvas = document.createElement("canvas")
							var ctx = canvas.getContext('2d');

							if(a == 3) {
								canvas.height = height;
								canvas.width = width;
								ctx.rotate(Math.PI);
								ctx.translate(-width, -height);

								ctx.drawImage(image, 0, 0)
								var imageDate = canvas.toDataURL('image/png')
								old_img.src = imageDate;
							}
							if(a == 6) {
								canvas.height = width;
								canvas.width = height;
								ctx.rotate(Math.PI / 2);
								ctx.translate(0, -height);

								ctx.drawImage(image, 0, 0, width, height)
								var imageDate = canvas.toDataURL('image/png')
								old_img.src = imageDate;
							}
							if(a == 8) {
								canvas.height = width;
								canvas.width = height;
								ctx.rotate(-Math.PI / 2);
								ctx.translate(-height, 0);

								ctx.drawImage(image, 0, 0)
								var imageDate = canvas.toDataURL('image/png')
								old_img.src = imageDate;
							}
						}
					});
				}
			}
		},

		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},
		goOther: function(a) {
			var that = this 
			if(that.sty > 3){
				window.open(a)
			}else if(that.sty <= 3){
				$('.ImgBigBox').fadeIn()
			}			
		},
		//01分享
		shareUrlFn: function() {
			var that = this;

			$.ajax({
				url: "http://sf-college.szbiu.com/zgame/",
				data: {
					m: 'biu_common',
					a: 'get_share_info',
					nowurl: window.location.href
				},
				success: function(result) {
					console.log(that.shareTitle,that.shareDesc,that.resultUrl)
					
					var tmp = JSON.parse(result);
					var jssdk_info = tmp.other_info.jssdkinfo;
					wx.config({
						debug: false,
						appId: jssdk_info.appId,
						timestamp: jssdk_info.timestamp,
						nonceStr: jssdk_info.nonceStr,
						signature: jssdk_info.signature,
						jsApiList: [
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'hideMenuItems',
						]
					});
					wx.ready(
						function() {
							wx.onMenuShareAppMessage({
								title: that.title, // 分享标题
								desc: that.shareTxt, // 分享描述
								link: that.shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {



										}
									})

								},
								cancel: function() {}
							});
							wx.onMenuShareTimeline({
								title: that.title, // 分享标题
								desc: that.shareTxt, // 分享描述
								link: that.shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})
								},
								cancel: function() {}
							});
							wx.hideMenuItems({
								menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email'],
							});
						}
					);
				},
			})
		},

	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	zuopinDetails
});












































/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 获奖作品详情
const tempStr = `
	<div id="PriceDetai">
		<img @click="get_a()" src="img/music.png" alt="" class="musicImg music_Play"/>
		<div class="liuyan_Ioc pr">
			<img src="img/price07.png" class="imgsize"/>
			<button class="ZP_Details_head">{{HeaderTitle}}</button>
		</div>
		
		<img :src="rankPriceImg" class="PriceD_ioc01"/>
		
		<div @click="goOther(PriceDetail.other_info)" id="PriceD_Img">
			<img :src="PriceDetail.image ? PriceDetail.image : 'img/timg.jpg'" alt="" class="imgsize" id="ZP_ImgShow" />
			<div v-if="PriceDetail.type > 3" class="ZP_ImgShow_Play">
				<img src="img/play.png" class="ZP_ImgShow_PlayIoc"/>
			</div>			
		</div>
		<div class="PriceD_author_Info">
			<img :src="PriceDetail.icon ? PriceDetail.icon : 'img/timg.jpg'" class="PriceD_author_MyHeader"/>			
			<div class="PriceD_Data_info01">{{PriceDetail.self_name}}&nbsp;&nbsp;{{PriceDetail.address}}</div>
			<div class="PriceD_Data_info02">{{PriceDetail.title}}</div>	
		</div>
		
		<div class="ImgBigBox" @click="maskFadeOut('.ImgBigBox')">
			<img :src="PriceDetail.image ? PriceDetail.image : 'img/timg.jpg'" id="ZP_ImgShowBig"/>
		</div>		

		<div class="ZP_Details_Data01">
			——&nbsp;&nbsp;&nbsp;作品介绍&nbsp;&nbsp;&nbsp;——
		</div>
		<div class="ZP_Details_Data02">{{PriceDetail.info}}</div>



		<div v-if="sty == 8" class="ZP_Details_Data01">
			——&nbsp;&nbsp;&nbsp;作品内容&nbsp;&nbsp;&nbsp;——
		</div>
		<div v-if="sty == 8" class="ZP_Details_Data02">{{PriceDetail.text}}</div>



		<div id="spinner">
			<div class="spinner">
			  <div class="spinner-container container1">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container2">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container3">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			</div>			
		</div>		
		
	</div>
`;

var data = {
	rank: '', //等级
	id: '', //作品ID
	rankPriceImg: '', //等级图
	PriceDetail: {}, //获奖作品信息
	HeaderTitle: '',
	sty:'',
	withCredentials:true,
};

const PriceDetai = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
		this.shareUrlFn();
	},
	methods: {
		init: function() {
			var that = this;

			that.id = that.$route.params.id
			that.sty = that.$route.params.sty
			that.rank = that.$route.params.rank
			that.HeaderTitle = localStorage.getItem('HeaderTitle')
			
    		//拿去音乐动画缓存
    		var musiconoff = sessionStorage.getItem("musiconoff") || false;
    		console.log(musiconoff)
    		if(musiconoff == 'true' || musiconoff == true){		//真，音乐关闭状态
	            $('.musicImg').removeClass('music_Play');
	            console.log(1)
    		}else if(musiconoff == 'false' || musiconoff == false){
	            $('.musicImg').addClass('music_Play');
	            console.log(2)
    		} 
			
			if(that.rank == 1) {
				that.rankPriceImg = 'img/price02.png'
			} else if(that.rank == 2) {
				that.rankPriceImg = 'img/price03.png'
			} else if(that.rank == 3) {
				that.rankPriceImg = 'img/price04.png'
			}

			$('#spinner').fadeIn()
			$.ajax({
				url: that.publicUrl,
				data: {
					a: 'get_one_detail_info',
					id: that.id,
				},
				dataType: "json",
				xhrFields: {
					withCredentials: that.withCredentials
				},
				success: function(result) {
					console.log(result)
					$('#spinner').fadeOut()
					if(result.errorCode == 0) {
						that.PriceDetail = result.result;
						that.$nextTick(function() {
							that.TestingTel('ZP_ImgShow')
						})
					} else {
						alert(result.errorMsg);
					}
				}
			})

		},
  		//音乐开关
		get_a:function(){
	        var audio = document.getElementById('myaudio');
	        if (audio.paused) {
	            audio.play();
	            $('.musicImg').addClass('music_Play');
	            sessionStorage.setItem("musiconoff",false)	
	        } else {
	            audio.pause();
	            $('.musicImg').removeClass('music_Play');
	            sessionStorage.setItem("musiconoff",true)	
	        }
		}, 
		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},

		//检测手机种类
		TestingTel: function(b) {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
			var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			var ismobile = !!u.match(/AppleWebKit.*Mobile.*/)
			if(!(ismobile && isIOS)) // 不是iphone
			{
				var old_img = document.getElementById(b)

				var image = new Image();
				image.setAttribute("crossOrigin", 'Anonymous')
				image.src = old_img.src;
				image.onload = function() {
					EXIF.getData(image, function() {
						EXIF.getAllTags(this);
						var a = EXIF.getTag(this, 'Orientation');
						if(a == 3 || a == 6 || a == 8) {
							var width = image.width;
							var height = image.height;

							var canvas = document.createElement("canvas")
							var ctx = canvas.getContext('2d');

							if(a == 3) {
								canvas.height = height;
								canvas.width = width;
								ctx.rotate(Math.PI);
								ctx.translate(-width, -height);

								ctx.drawImage(image, 0, 0)
								var imageDate = canvas.toDataURL('image/png')
								old_img.src = imageDate;
							}
							if(a == 6) {
								canvas.height = width;
								canvas.width = height;
								ctx.rotate(Math.PI / 2);
								ctx.translate(0, -height);

								ctx.drawImage(image, 0, 0, width, height)
								var imageDate = canvas.toDataURL('image/png')
								old_img.src = imageDate;
							}
							if(a == 8) {
								canvas.height = width;
								canvas.width = height;
								ctx.rotate(-Math.PI / 2);
								ctx.translate(-height, 0);

								ctx.drawImage(image, 0, 0)
								var imageDate = canvas.toDataURL('image/png')
								old_img.src = imageDate;
							}
						}
					});
				}
			}
		},
		
		goOther: function(a) {
			var that = this 
			if(that.sty > 3){
				window.open(a)
			}else if(that.sty <= 3){
				$('.ImgBigBox').fadeIn()
			}			
		},


		//01分享
		shareUrlFn: function() {
			var that = this;
		
			$.ajax({
				url: "http://sf-college.szbiu.com/zgame/",
				data: {
					m: 'biu_common',
					a: 'get_share_info',
					nowurl: window.location.href
				},
				success: function(result) {
					var tmp = JSON.parse(result);
					var jssdk_info = tmp.other_info.jssdkinfo;
					wx.config({
						debug: false,
						appId: jssdk_info.appId,
						timestamp: jssdk_info.timestamp,
						nonceStr: jssdk_info.nonceStr,
						signature: jssdk_info.signature,
						jsApiList: [
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'hideMenuItems',
						]
					});
					wx.ready(
						function() {
							wx.onMenuShareAppMessage({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})

								},
								cancel: function() {}
							});
							wx.onMenuShareTimeline({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})
								},
								cancel: function() {}
							});
							wx.hideMenuItems({
								menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email'],
							});
						}
					);
				},
			})
		},

	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	PriceDetai
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 获奖名单
const tempStr = `
	<div id="Winners">
		<img src="img/price01.png" class="imgsize"/>
		<img @click="get_a()" src="img/music.png" alt="" class="musicImg music_Play"/>
		
		<div class="liuyan_Ioc pr">
			<img src="img/price07.png" class="imgsize"/>
			<button class="ZP_Details_head">{{zhuName}}</button>
		</div>
		
		<img src="img/price02.png" class="PriceD_ioc01"/>
		
		<router-link :to="'/PriceDetai/1/'+sty+'/'+onePri.id">
			<img :src="onePri.image ? onePri.image : 'img/timg.jpg'" alt="" class="Winners_Img"/>
			<div  class="Winners_Info">
				<div class="Winners_Info01">{{onePri.self_name}}&nbsp;&nbsp;{{onePri.address}}</div>
				<div class="Winners_Info02">{{onePri.title}}</div>	
			</div>
		</router-link>
		
		
		<img src="img/price03.png" class="PriceD_ioc01"/>
		<router-link v-for="two in twoPri" :to="'/PriceDetai/2/'+sty+'/'+two.id" class="Winners_Two">
			<img :src="two.image ? two.image : 'img/timg.jpg'" class="Winners_Two_Img"/>
			<div class="Winners_Two_txt01">{{two.title}}</div>
			<div class="Winners_Two_txt02">{{two.self_name}}&nbsp;&nbsp;{{two.address}}</div>
		</router-link>



		<img src="img/price04.png" class="PriceD_ioc01"/>
		<router-link v-for="(threes,index) in threePri" :to="'/PriceDetai/3/'+sty+'/'+threes.id" class="Winners_Three">
			<img :src="threes.image ? threes.image : 'img/timg.jpg'" :class="{'Winners_Three_Img':true,'fr':index%2 != 0,'fl':index%2 == 0}"/>
			<div :class="{'Winners_Three_Txt':true,'fr':index%2 != 0,'fl':index%2 == 0}">
				<div class="Winners_Three_txt01">{{threes.title}}</div>
				<div class="Winners_Three_txt02">{{threes.self_name}}&nbsp;&nbsp;{{threes.address}}</div>				
			</div>
		</router-link>
		





		<div class="Winners_Tab">
			<div @click="getPriceFn(1,0)" class="Winners_TabList Winners_TabActive">书画<br />员工组</div>
			<div @click="getPriceFn(2,1)" class="Winners_TabList">书画<br />子女组</div>
			<div @click="getPriceFn(3,2)" class="Winners_TabList">工友<br />好摄影</div>
			<div @click="getPriceFn(4,3)" class="Winners_TabList">工友<br />好声音</div>
			<div @click="getPriceFn(5,4)" class="Winners_TabList">工友<br />微视频</div>
			<div @click="getPriceFn(7,5)" class="Winners_TabList">工友<br />好朗诵</div>			
			<div @click="getPriceFn(8,6)" class="Winners_TabList">工友<br />好文章</div>
		</div>


		<div id="spinner">
			<div class="spinner">
			  <div class="spinner-container container1">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container2">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container3">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			</div>			
		</div>		
		
	</div>
`;

var data = {
	ZPLists:[],
	onePri:{},			//一等奖
	twoPri:[],			//二等奖
	threePri:[],		//三等奖
	sty:'',				//类型
	zhuName:'',			//分组名
	withCredentials:true,
};

const Winners = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
		this.shareUrlFn();
	},
	methods: {
		init: function() {
			var that = this;
			
    		//拿去音乐动画缓存
    		var musiconoff = sessionStorage.getItem("musiconoff") || false;
    		console.log(musiconoff)
    		if(musiconoff == 'true' || musiconoff == true){		//真，音乐关闭状态
	            $('.musicImg').removeClass('music_Play');
	            console.log(1)
    		}else if(musiconoff == 'false' || musiconoff == false){
	            $('.musicImg').addClass('music_Play');
	            console.log(2)
    		} 			
			
			that.getPriceFn(1,0)

		},
  		//音乐开关
		get_a:function(){
	        var audio = document.getElementById('myaudio');
	        if (audio.paused) {
	            audio.play();
	            $('.musicImg').addClass('music_Play');
	            sessionStorage.setItem("musiconoff",false)	
	        } else {
	            audio.pause();
	            $('.musicImg').removeClass('music_Play');
	            sessionStorage.setItem("musiconoff",true)	
	        }
		}, 		
		//获取列表数据
		getPriceFn:function(id,i){
			var that = this ;
			var ids = id ;
			that.sty = ids
			$('.Winners_TabList').removeClass('Winners_TabActive')
			$('.Winners_TabList').eq(i).addClass('Winners_TabActive')
			if(ids == 1){
				that.zhuName = '工友好书画-员工组'
			}else if(ids == 2){
				that.zhuName = '工友好书画-子女组'
			}else if(ids == 3){
				that.zhuName = '工友好摄影'
			}else if(ids == 4){
				that.zhuName = '工友好声音'
			}else if(ids == 5){
				that.zhuName = '工友微视频'
			}else if(ids == 6){
				that.zhuName = '工友广告语'
			}else if(ids == 7){
				that.zhuName = '工友好朗诵'
			}else if(ids == 8){
				that.zhuName = '工友好文章'
			}	
			
			$('#spinner').fadeIn()
	        $.ajax({
	            url: that.publicUrl,
	            data: {
	                a:'get_rank_info_by_type',
	                type:ids ,
	                page:1,	
	            },
	            dataType:"json",
	            xhrFields:{withCredentials:that.withCredentials},
	            success: function (result) {
	            	console.log(result)
	            	$('#spinner').fadeOut()
					if(result.errorCode == 0){	
						that.ZPLists = result.result.detail_info;
						localStorage.setItem('HeaderTitle',that.zhuName)
						that.onePri = {}
						that.twoPri = []
						that.threePri = []
						if(that.ZPLists.length == 5){
							that.onePri = that.ZPLists[0]
							
							that.twoPri.push(that.ZPLists[1])
							that.twoPri.push(that.ZPLists[2])
							that.twoPri.push(that.ZPLists[3])	
							
							that.threePri.push(that.ZPLists[4])
							
					        $.ajax({
					            url: that.publicUrl,
					            data: {
					                a:'get_rank_info_by_type',
					                type:ids ,
					                page:2,	
					            },
					            dataType:"json",
					            xhrFields:{withCredentials:that.withCredentials},
					            success: function (result) {
					            	console.log(result)
					            	$('#spinner').fadeOut()
									if(result.errorCode == 0){	
										that.ZPLists = result.result.detail_info;

										if(that.ZPLists.length == 5){
											that.threePri.push(that.ZPLists[0])
											that.threePri.push(that.ZPLists[1])
											that.threePri.push(that.ZPLists[2])											
										}
									}else{
										alert(result.errorMsg);
									}		            			            	
					            }
					        })							
							
						}
					}else{
						alert(result.errorMsg);
					}		            			            	
	            }
	        })
		},	
		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},


		//01分享
		shareUrlFn: function() {
			var that = this;
			$.ajax({
				url: "http://sf-college.szbiu.com/zgame/",
				data: {
					m: 'biu_common',
					a: 'get_share_info',
					nowurl: window.location.href
				},
				success: function(result) {
					var tmp = JSON.parse(result);
					var jssdk_info = tmp.other_info.jssdkinfo;
					wx.config({
						debug: false,
						appId: jssdk_info.appId,
						timestamp: jssdk_info.timestamp,
						nonceStr: jssdk_info.nonceStr,
						signature: jssdk_info.signature,
						jsApiList: [
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'hideMenuItems',
						]
					});
					wx.ready(
						function() {
							wx.onMenuShareAppMessage({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})

								},
								cancel: function() {}
							});
							wx.onMenuShareTimeline({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})
								},
								cancel: function() {}
							});
							wx.hideMenuItems({
								menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email'],
							});
						}
					);
				},
			})
		},

	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	Winners
});












































/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 文艺汇演
const tempStr = `
	<div id="ArtShow">
		<img @click="get_a()" src="img/music.png" alt="" class="musicImg music_Play"/>

		<div class="liuyan_Ioc pr">
			<img src="img/price07.png" class="imgsize"/>
			<button class="ZP_Details_head">文艺汇演直播间</button>
		</div>
		
		<div class="ArtShow_video">
			<img src="img/video.png" class="imgsize"/>
			<img @click="goOther()" src="img/video01.png" class="ArtShow_videoPaly"/>
		</div>
		
		<div class="ArtShow_showInfo">{{shuomingTxt}}</div>
		

		<div class="ZP_Details_Data01">
			——&nbsp;&nbsp;&nbsp;节目清单&nbsp;&nbsp;&nbsp;——
		</div>
		<div class="ZP_Details_Data02">
		
			<div v-for="(jiemu,index) in jiemuList" class="Art_List">
				<div class="Art_Name">{{jiemu.lingdao}}</div>
				<div class="Art_Explain">
					<div class="Art_author">{{jiemu.peopleList}}</div>
					<div class="Art_time">{{jiemu.time}}</div>
					<div class="clearfix"></div>
				</div>
				<div class="Art_List_Tip">
					<img src="img/tip.png" class="imgsize"/>
					<div class="Art_List_Tip_Txt">{{index+1}}</div>
				</div>
			</div>
			
		</div>



		<div id="spinner">
			<div class="spinner">
			  <div class="spinner-container container1">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container2">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			  <div class="spinner-container container3">
			    <div class="circle1"></div>
			    <div class="circle2"></div>
			    <div class="circle3"></div>
			    <div class="circle4"></div>
			  </div>
			</div>			
		</div>		
		
	</div>
`;

var data = {
		jiemuList:[
			{lingdao:'领导致辞',peopleList:'李主席，宋朱旭',time:'2018-08-09',id:1},
			{lingdao:'领导致辞',peopleList:'李主席，宋朱旭',time:'2018-08-09',id:1}
		],
		OtherUrl:'',
		shuomingTxt:'灰色的以及，丢灰色的以及，丢灰色的以及，丢灰的以及，丢灰色的以及，丢灰色的以及，丢灰色的以及，丢灰色的',
		withCredentials:true,
};

const ArtShow = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
		this.shareUrlFn();
	},
	methods: {
		init: function() {
			var that = this;

    		//拿去音乐动画缓存
    		var musiconoff = sessionStorage.getItem("musiconoff") || false;
    		console.log(musiconoff)
    		if(musiconoff == 'true' || musiconoff == true){		//真，音乐关闭状态
	            $('.musicImg').removeClass('music_Play');
	            console.log(1)
    		}else if(musiconoff == 'false' || musiconoff == false){
	            $('.musicImg').addClass('music_Play');
	            console.log(2)
    		} 

		},
  		//音乐开关
		get_a:function(){
	        var audio = document.getElementById('myaudio');
	        if (audio.paused) {
	            audio.play();
	            $('.musicImg').addClass('music_Play');
	            sessionStorage.setItem("musiconoff",false)	
	        } else {
	            audio.pause();
	            $('.musicImg').removeClass('music_Play');
	            sessionStorage.setItem("musiconoff",true)	
	        }
		}, 		
		goOther: function() {
			var that = this 
			window.location.href= that.OtherUrl ;			
		},		
		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},
		//01分享
		shareUrlFn: function() {
			var that = this;
			$.ajax({
				url: "http://sf-college.szbiu.com/zgame/",
				data: {
					m: 'biu_common',
					a: 'get_share_info',
					nowurl: window.location.href
				},
				success: function(result) {
					var tmp = JSON.parse(result);
					var jssdk_info = tmp.other_info.jssdkinfo;
					wx.config({
						debug: false,
						appId: jssdk_info.appId,
						timestamp: jssdk_info.timestamp,
						nonceStr: jssdk_info.nonceStr,
						signature: jssdk_info.signature,
						jsApiList: [
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'hideMenuItems',
						]
					});
					wx.ready(
						function() {
							wx.onMenuShareAppMessage({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})

								},
								cancel: function() {}
							});
							wx.onMenuShareTimeline({
								title: that.shareTitle, // 分享标题
								desc: that.shareDesc, // 分享描述
								link: that.resultUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
								imgUrl: that.shareImgUrl, // 分享图标
								type: '', // 分享类型,music、video或link，不填默认为link
								dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
								success: function() {
									$.ajax({
										url: that.publicUrl,
										data: {
											a: "submit_share_info",
										},
										dataType: "json",
										xhrFields: {
											withCredentials: that.withCredentials
										},
										cache: false,
										success: function(result) {

										}
									})
								},
								cancel: function() {}
							});
							wx.hideMenuItems({
								menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:QZone', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email'],
							});
						}
					);
				},
			})
		},
	},
	//过滤器
    filters: {  
        time(value) {
			var date = new Date(parseInt(value) * 1000);
			var Y = date.getFullYear() + '.';
			var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
			var D = date.getDate();
			var h = date.getHours() + ':';
			var m = date.getMinutes();
			//s = date.getSeconds();
			
		    return Y+M+D+' '+h+m;
        }
    },	
	
	
	
	
	
	
}

/* harmony default export */ __webpack_exports__["a"] = ({
	ArtShow
});












































/***/ })
/******/ ]);