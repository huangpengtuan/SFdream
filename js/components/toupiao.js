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

export default {
	toupiao
};