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

export default {
	ArtShow
};










































