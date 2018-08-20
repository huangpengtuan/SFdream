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

export default {
	ZPList
};