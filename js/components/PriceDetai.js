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

export default {
	PriceDetai
};