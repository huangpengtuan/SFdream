// loading页
const tempStr = `
	<div id="loading">
		<div class="loading_perTxt">{{Percent}}%</div>
		<div class="loading_perTxt01">加载中...</div>
		<div class="loading_ImgBox">
			<img class="loading_Img01" src="img/loadingtiao01.png"/>
			<div class="loading_tiaoBox">
				<img id="loading_move" src="img/loadingtiao02.png"/>
			</div>
		</div>
	</div>
`;

var data = {
	Percent:'',
	jiazaiTxt:'玩命加载中...',
	indexs:0,
};


const loading = {
    template: tempStr,
    data: function () {
        return data;
    },
    mounted(){
		this.loadingFn();
   	},    
    methods:{
    	//实例化加载器
		loadingFn:function(){
			var that = this ;
			var manifest;
			var preload;
			manifest = [
				'img/home.jpg',
				'img/loading.jpg',
				'img/search.jpg',
				'img/stutas01.jpg',
				'img/stutas02.jpg',
				'img/stutas_Btn01.jpg',
				'img/zuopin07.jpg',
				'img/zuopingBg.jpg',
				'img/baoming.png',
				'img/huoxuan_head.png',
				'img/liuyan_head.png',
				'img/loadingtiao01.png',
				'img/loadingtiao02.png',
				'img/price01.png',
				'img/price02.png',
				'img/price03.png',
				'img/price04.png',
				'img/price05.png',
				'img/price06.png',
				'img/price07.png',
				'img/rule.png',
				'img/share_mask.png',
				'img/stutas_mask01.png',
				'img/tip.png',
				'img/title.png',
				'img/video.png',
				'img/video01.png',
				'img/ZP_detail01.png',
				'img/ZP_detail02.png',
				'img/ZP_detail03.png',
				'img/ZP_detail04.png',
				'img/ZP_detail05.png',
				'img/ZP_detail06.png',
				'img/zuopin01.png',
				'img/zuopin02.png',
				'img/zuopin03.png',
				'img/zuopin04.png',
				'img/zuopin05.png',
				'img/zuopin06.png',
				'img/BtnBg01.png',
				'img/BtnBg02.png',
				'img/success.png',
				'img/success02.png',					
				'img/success03.png',					
				'img/close.png',	
				'img/background-music.mp3'
			];

			//开始预加载
			function startPreload() {
			    preload = new createjs.LoadQueue(true);
			    //注意加载音频文件需要调用如下代码行
			    preload.installPlugin(createjs.Sound);         
			    preload.on("fileload", handleFileLoad);
			    preload.on("progress", handleFileProgress);
			    preload.on("complete", loadComplete);
			    preload.on("error", loadError);
			    preload.loadManifest(manifest);
			 
			}
			
			//处理单个文件加载
			function handleFileLoad(event) {
			    console.log("文件类型: " + event.item.type);
			    if(event.item.id == "logo"){
			        console.log("logo图片已成功加载");
			    }
			}
			 
			//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
			function loadError(evt) {
			    console.log("加载出错！",evt.text);
			}
			 
			//已加载完毕进度 
			function handleFileProgress(event) {
				console.log(preload.progress)
				
		        var Lwidth = $(".loadbox").width();
		        that.Percent = parseInt(preload.progress*100) ;
		        var moveSuper = -(100-parseInt(preload.progress*100));
		        console.log(moveSuper)
		        $('#loading_move').css("left",moveSuper+'%');					
				
			}
			
			//全度资源加载完毕
			function loadComplete(event) {
			    console.log("已加载完毕全部资源");
			    
			    that.$router.push('/home');
			}
			
			//实例化资源
			startPreload();





		    
		    
		},	

		
		
    }
}


export default { loading };




















