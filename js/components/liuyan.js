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



export default {
	liuyan
};