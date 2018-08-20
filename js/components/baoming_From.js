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

export default {
	baoming_From
};