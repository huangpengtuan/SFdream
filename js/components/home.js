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

export default {
	Home
};