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

export default {
	Winners
};










































