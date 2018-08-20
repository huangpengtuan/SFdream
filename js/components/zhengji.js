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

export default {
	zhengji
};