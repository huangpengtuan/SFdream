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

export default {
	zuopinDetails
};










































