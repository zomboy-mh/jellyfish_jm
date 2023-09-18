<template>
	<view class="zhezhaocengBa setting">
		<view class="box width position-f">
			<view class="head flex align-center position-a">
				<image @tap="returnJump" class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
		</view>
		<view class="bgview">
			<!-- <image class="wh" :src="imageUrl + ''" mode=""></image> -->
		</view>
		<view  v-if="!recordIf" class="width position-f z-index9">
			<view class="underway margin-auto cl-white flex align-center justify-center">
				<view class="font-18 font-bold">{{audioDuration == '' ? '' : audioDuration}}</view>
				<view class="icon iconyuyin padding-left-10"></view>
			</view>
		</view>
		
		<view class="position-a wh">
			<view  class="wh flex align-center">
				<view class="progressBox">
					<view class="progress">
						<progress :percent="progress"  color="#ccc"  stroke-width="10" active-color="#349D6D" backgroundColor="#D9E9E2" />
					</view>
					<image class="wordProgress" :src="imageUrl + 'wordProgress.png'" mode=""></image>
					<view class="font-13"> {{BcountsList.length}}/{{CardBookList.length}}</view>
				</view>
			
				<view class="swiperPanel" @touchstart="startMove" @touchend="endMove">
					<view :class="itemStyle[index].zIndex == 9999?'rotate':''" class="swiperItem"
						v-for="(item, index) in CardBookList" :key="index"
						:style="{transform: itemStyle[index].transform, zIndex: itemStyle[index].zIndex, opacity: itemStyle[index].opacity}">
						<view :class="itemStyle[index].zIndex == 9999?'border1':'border2'"
							class="children flex-vertical-level">
							<view class="children_box padding-top-10">
								<image class="pic margin-auto" :src="formalUrl + item.itemImage + '?x-oss-process=style/w380h380'"></image>
								<view :class="itemStyle[index].zIndex == 9999?'animated rubberBand':''" v-if="item.itemWordsig.length < 10">
									<view :class="item.senCol"	class="font-27 text-center padding-top-10">
										{{item.itemWordsig}}
									</view>
									
								</view>
								<view :class="itemStyle[index].zIndex == 9999?'animated rubberBand':''"   v-if="item.itemWordsig.length > 9">
									<view :class="item.senCol" class="font-20 text-center padding-top-10 ">
										{{item.itemWordsig}}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="readImg" v-if="!preserveIf">
					<image v-if="recordIf"  @tap="hintVoice" class="wh" :src="imageUrl + 'recordRead1_g.png'" mode=""></image>
					<image v-if="!recordIf" @tap="stopRecord" class="wh" :src="imageUrl + 'stopRead1_g.png'"mode=""></image>
				</view>
			</view>
			<view v-if="preserveIf" class="zhezhaoceng sharebox">
				<view @tap="preserveIf = false" class="zhezhaocengBa"></view>
				<view class="flex-vertical-level wh position-r">
					<view class="share animated bounceInDown">
						<view class="share_img width position-r">
							<view class="share_tit1 width text-center position-a font-20 font-bold cl-white z-index999">
								非常棒
							</view>
							<view class="share_tit2 width text-center position-a font-15 font-bold z-index999">
								小朋友，恭喜你完成读绘本。
							</view>
							<view class="star_move z-index999">
								<!-- <image class="yellowstar1" :src="imageUrl + 'yellowstar1.png'"></image>
								<image class="redstar1" :src="imageUrl + 'redstar1.png'"></image> -->
								<image class="yellowstar1" :src="imageUrl + 'gradeSun1.gif'">
									
								</image>
								<view class="gradeSum font-28">{{gradeTatal}}</view>
							</view>
							<view style="bottom: 40rpx;" class=" width text-center position-a font-20 font-bold cl-0B0B4B z-index999">
								<button class="button" @tap="Jump" hover-class="none">{{nextname}}</button>
							</view>
							<image class="wh" :src="imageUrl + 'share1.png'" mode=""></image>
						</view>
						<view class="share_but flex justify-center">
							<image @tap="shareFn(1)" class="share_but_img" :src="imageUrl + 'home.png'" mode=""></image>
							<image @tap="shareFn(2)" class="share_but_img padding-left-20" :src="imageUrl + 'refresh.png'"
								mode=""></image>
							<image @tap="shareFn(3)" class="share_but_img padding-lr-20" :src="imageUrl + 'shut.png'"
								mode="">
							</image>
							<image @tap="shareFn(4)" class="share_but_img " :src="imageUrl + 'share_wx.png'"
								mode="">
							</image>
							<image @tap="shareFn(5)" class="share_but_img padding-left-20" :src="imageUrl + 'share_pyq.png'"
								mode="">
							</image>
							
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../config/index.js'
	import {getBookWord,pushWordRecord,chivoxParam} from'../../api/index.js'
	import {Audio,voiceStart} from "../../utils/utils.js";
	var socketTask;
	
	const recorderManager = uni.getRecorderManager(); //微信录音机
	var sig = undefined; //计算签名
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				mErrorVoice: imageUrl + "audio/error.mp3",
				mRightVoice: imageUrl + "audio/right.mp3",
				CardBookIndex:0,
				CardBookList:[],
				slideNote: {
					x: 0,
					y: 0
				},
				itemStyle: [],
				bookId:0,
				voiceUrl:'',
				audioDuration: 0,
				recordIf:true,
				refText:'',
				tmpaudiofiles:[],
				tmpaudiofilesItem:{},
				preserveIf:false,
				gradeTatal:50,
				nextname:'完成',
				 progress: 0,
				 BcountsList:[]
				
			};
		},
		watch:{
			voiceUrl() {
				Audio.stop();
				this.voiceFn();
			},
			tmpaudiofiles() {
				if(this.tmpaudiofiles){
					if(this.tmpaudiofiles.length == this.CardBookIndex + 2){
						this.tmpaudiofiles.splice(this.CardBookIndex,1)
					}
					
				}
				
			}
		},
		onLoad() {
			this.bookId = uni.getStorageSync('bookId')
			this.token = uni.getStorageSync('token');
			this.hearPictureBookUrl()
		},
		onReady() {
			let that = this;
			recorderManager.onStop((res) => {
				const tempFilePath = res.tempFilePath;
				console.log("结束",res.tempFilePath)
				uni.uploadFile({
					url: 'http://192.168.124.7:8081/userRecord/pushAudioRecord',
					filePath: tempFilePath,
					name: 'audioFile',
					header: {"token": that.token},
					formData: {
						'content': that.refText
					},
					success: (uploadFileRes) => {
						let a = JSON.parse(uploadFileRes.data);
						console.log("地址",a)
						that.tmpaudiofilesItem={}
						that.tmpaudiofilesItem.audioUrl = a.data.filePath;
					},
				})
						
				
				// 通过URL参数获取目录对象或文件对象
				 plus.io.resolveLocalFileSystemURL(res.tempFilePath, function(entry) {
				     entry.file(function(file) {
				         var fileReader = new plus.io.FileReader()
				         fileReader.onload = function(evt) {
							 let base64 = evt.target.result.split(',')[1]; // 获取base64字符串
							 const arrayBuffer = uni.base64ToArrayBuffer(base64); // 转换为arrayBuffer格式
							 socketTask.send({
							 	data : arrayBuffer,
							 	success(res) {
							 		console.log('发送音频成功',res)
							 	},
							 })
							 socketTask.send({
							 	data : new ArrayBuffer(0),
							 	success(res) {
							 		console.log('发送结束成功',res)
							 	},
							 })
				         }
				         fileReader.onerror = function(error) {
				            console.log('failed: ', error);
				         }
				         fileReader.readAsDataURL(file)
				     }, function(error) {
				         console.log('failed: ', error);
				     })
				 }, function(error) {
				    console.log('failed: ', error);
				 })
				
			})
			
		},
		methods:{
			hearPictureBookUrl(){
				getBookWord({
					'bookId':this.bookId
				}).then((res)=>{
					console.log("单词",res)
					this.CardBookList =res.data;
					this.voiceUrl = this.CardBookList[0].itemWordaudio;
					this.refText = this.CardBookList[0].itemWordsig;
					this.CardBookList.map((item,index)=>{
							item.finishedsIf = false;
							item.senCol = 'cl-black'
					})
					this.CardBookList.forEach((item, index) => {
						this.itemStyle.push(this.getStyle(index))
						
					})
				})
				
			},
			hintVoice(){
				Audio.stop();
				voiceStart(this.imageUrl + 'bdspeech_recognition_start.mp3').then(() => {
					this.voiceRecord1();
					this.recordIf = false;
				});
			},
			// 开始录音
			voiceRecord1() {
				Audio.stop();
				this.audioDuration = 8;
				this.aud = setInterval(() => {
					this.audioDuration--;
					if (this.audioDuration == 0) {
						clearInterval(this.aud)
					}
				}, 1000)
				// 创建 WebSocket 连接
				socketTask = uni.connectSocket({
					url: 'wss://cloud.chivox.com/ws?e=0&t=0&version=2', 
					header: {
						'content-type': 'application/json'
					},
					success(res) {
						console.log('发送WebSocket连接请求',res); 
					}
				}) 
				let that = this
				// 监听 WebSocket 接收到服务器的消息事件
				socketTask.onMessage(function (res) {
					console.log('WebSocket收到消息：' + JSON.parse(res.data)); 
					let data = JSON.parse(res.data);
					if(data){
						console.log("结果",data)
						let a = data.result;
						if(a.integrity > 50){
							that.CardBookList[that.CardBookIndex].senCol = 'cl-3cbc9b';
							setTimeout(() => {
								voiceStart(that.mRightVoice)
							}, 500)
						}else{
							that.CardBookList[that.CardBookIndex].senCol = 'cl-FF0000';
							setTimeout(() => {
								voiceStart(that.mErrorVoice)
							}, 500)
						}
						that.tmpaudiofilesItem.score = a.overall;
						that.tmpaudiofilesItem.wordId = that.CardBookList[that.CardBookIndex].itemVocabularyid;
						that.tmpaudiofilesItem.wordIndex = that.CardBookList[that.CardBookIndex].itemIndex;
						that.tmpaudiofilesItem.wordItemId = that.CardBookList[that.CardBookIndex].itemId;
						that.tmpaudiofiles.push(that.tmpaudiofilesItem)
						console.log("完成",that.tmpaudiofiles)
						var item = that.CardBookList[that.CardBookIndex];
						item.finishedsIf = true;
						that.BcountsList = []
						that.CardBookList.map(item => {
							if (item.finishedsIf == true) {
								that.BcountsList.push(item)
								that.progress = that.BcountsList.length/that.CardBookList.length * 100
							}
						})
						if (that.BcountsList.length == that.CardBookList.length) {
							that.preserveIf = true;
							that.pushWordRecordUl()
						}
						socketTask.close()
					}
					
				}) 
				// 监听 WebSocket 错误事件 
				socketTask.onError(function (res) { console.log('WebSocket连接错误！'); }) 
				// 监听 WebSocket 连接关闭事件 
				socketTask.onClose(function () { console.log('WebSocket已关闭！'); })
				//
				socketTask.onOpen(function (res) {
					console.log('WebSocket连接成功：' + res);
					chivoxParam().then((res1)=>{
						socketTask.send({
							data : JSON.stringify(res1.data),
							success(res1s) {
								console.log('发送身份校验参数成功',res1s)
							},
						})
						let datas = {
							'tokenId': uni.getStorageSync('token'),
							'audio': {
							    "audioType": "mp3",     // 音频格式
							    "channel": 1,            // 声道数
							    "sampleBytes": 2,        // 采样字节
							    "sampleRate": 16000     // 采样率
							  },
							  'request': {
							  	'coreType': 'en.word.pron',
							  	// refText: this.refText,
							  	'refText': that.refText,
							  	'rank': 100,
							  	'attachAudioUrl': 1
							  }
						}
						socketTask.send({
							data : JSON.stringify(datas),
							success(res) {
								console.log('发送评分请求成功',res)
							},
						})
					
						
					})
				}) 
				const options = {
					duration:  that.audioDuration * 1000, //指定录音的时长，单位 ms
					sampleRate: 16000, //采样率
					format: 'mp3', //音频格式，有效值aac/mp3
				};
				recorderManager.start(options);
				/*引擎启动成功，可以启动录音机开始录音，并将音频片传给引擎*/
				// const options = {
				// 	duration:  this.audioDuration * 1000, //指定录音的时长，单位 ms
				// 	sampleRate: 16000, //采样率
				// 	format: 'mp3', //音频格式，有效值aac/mp3
				// };
				// console.log("开始",options)
				// //开始录音,在开始录音回调中feed音频片
				// recorderManager.start(options);
				// //监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
				// recorderManager.onFrameRecorded((res) => {
				// 	const {
				// 		frameBuffer
				// 	} = res
				// });
			},
			stopRecord() {
				this.recordIf = true;
				this.audioDuration = '';
				clearInterval(this.aud);
				recorderManager.stop();
			},
			getStyle(e) {
				return {
					transform: 'translate(' + (e * 31) + '%,0) rotate(' + 0 + 'deg)',
					zIndex: 9999 - e,
					opacity: 0.8 / e
				}
			},
			startMove(e) {
				this.slideNote.x = e.changedTouches[0] ? e.changedTouches[0].pageX : 0;
				this.slideNote.y = e.changedTouches[0] ? e.changedTouches[0].pageY : 0;
			},
			endMove(e) {
				let newList = JSON.parse(JSON.stringify(this.itemStyle))
				if ((e.changedTouches[0].pageX - this.slideNote.x) < -30) {
					// 向左滑动
					var last = [newList.pop()]
					newList = last.concat(newList)
					this.cutCount++;
					this.addCount = 0;
				} else if ((e.changedTouches[0].pageX - this.slideNote.x) > 60) {
					// 向右滑动
					newList.push(newList[0])
					newList.splice(0, 1)
					this.addCount++;
					this.cutCount = 0;
				}
				this.itemStyle = newList;
				this.zIndexFn();
			},
			// 播放录音
			voiceFn() {
				// clearInterval(this.iconshou);
				// this.voiceLabaIf = false;
				// this.iconshouIf = 0;
				// let num = this.CardBookList.length;
				// if (this.cutCount - 1 == num - 1 || this.addCount - 1 == num - 1) return;
				console.log("地点",this.formalUrl + this.voiceUrl)
				voiceStart(this.formalUrl + this.voiceUrl).then(() => {
					// clearInterval(this.iconshou);
					// this.iconshouIf = 0;
					// // this.CardBookList[this.voiceIndex].finishedsIf = true;
					// this.iconshou = setInterval(() => {
					// 	this.iconshouIf++;
					// 	if (this.iconshouIf > 5) {
					// 		clearInterval(this.iconshou);
					// 	}
					// }, 1000)
				});
			},
			zIndexFn() {
				this.itemStyle.forEach((item, index) => {
					if (item.zIndex == 9999) {
						this.CardBookIndex = index,
						this.voiceUrl = this.CardBookList[index].itemWordaudio;
						this.refText = this.CardBookList[index].itemWordsig;
						this.voiceIndex = index;
					}
				})
			},
			pushWordRecordUl(){
				pushWordRecord({
					'bookId':this.bookId,
					'wordDtoList':this.tmpaudiofiles
				}).then((res)=>{
					console.log("单词上传完成",res)
				})
			},
			returnJump() {
				Audio.stop();
				uni.reLaunch({
					url: 'index'
				})
			},
			Jump(){
				Audio.stop();
				uni.reLaunch({
					url: 'index'
				})
			},
			shareFn(data){
				Audio.stop();
				if(data == 4){
					uni.share({
						provider: "weixin",
						scene: "WXSceneSession",
						type: 0,
						href: "http://uniapp.dcloud.io/",
						title: "RAZ分享",
						summary: "我正在使用raz阅读，赶紧跟我一起来体验！",
						imageUrl: "https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png",
						success: function (res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function (err) {
							console.log("fail:" + JSON.stringify(err));
						}
					});
				}else if(data == 5){
					uni.share({
						provider: "weixin",
						scene: "WXSceneTimeline",
						type: 0,
						href: "http://uniapp.dcloud.io/",
						title: "RAZ分享",
						summary: "我正在使用raz阅读，赶紧跟我一起来体验！",
						imageUrl: "https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png",
						success: function (res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function (err) {
							console.log("fail:" + JSON.stringify(err));
						}
					});
				}else{
					uni.reLaunch({
						url: 'index'
					})
				}
				
			}
		}
	}
</script>

<style lang="scss">


		
		.bgview {
		// height: 120%;
			position: absolute;
			top:0;
			left: 0;
			z-index: 10;
			width: 100%;
			height: 100%;
			
		}
		
		.box {
			z-index: 100;
		
			.head {
				top: 3vh;
				left: 35rpx;
				.green_back_img{
					width: 36rpx;
					height: 36rpx;
				}
				// margin-top: 6rpx;
				.iconguanbi1 {
					font-size: 28rpx;
				}
		
				.star {
					left: 18rpx;
					width: 36rpx;
					height: 37rpx;
					z-index: 1;
				}
		
				.integral {
					padding: 4rpx 20rpx 4rpx 26rpx;
					box-shadow: 0 1rpx 4rpx 0 rgba(0, 0, 0, 0.4);
					border-radius: 0 14rpx 14rpx 0;
				}
			}
		
			.pagination {
				top: 3vh;
				right: 135rpx;
				width: 76rpx;
				min-height: 32rpx;
				background: #FFFFFF;
				box-shadow: 0 0 2rpx 0 rgba(0, 0, 0, 0.4);
				border-radius: 5rpx;
		
				.pagination_img {
					width: 22rpx;
					height: 22rpx;
				}
			}
		
		}
		.progressBox{
			display: flex;
			align-items: center;
			width: 200rpx;
			height: 18rpx;
			padding: 4rpx;
			position: absolute;
			text-align: center;
			
			left: 50%;
			top: 2%;
			margin-left: -100rpx;
			z-index: 111;
			background: #FFFFFF;
			border-radius: 11rpx;
			.progress{
				width: 180rpx;
				height: 16px;
				/deep/ .uni-progress-bar{
					margin-top: 3px;
					border-radius: 10rpx;
				}
				/deep/ .uni-progress-inner-bar{
					border-radius: 10rpx;
				}
			}
			.wordProgress{
				width: 15rpx;
				height: 15rpx;
				margin: 5rpx;
			}
		}
		
		.swiperPanel {
			height: 260rpx;
			width: 100%;
			overflow: hidden;
			position: relative;
		
			.swiperItem {
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;
				transition: all .5s;
		
				.children {
					height: 240rpx;
					width: 180rpx;
					margin: 2rpx auto;
					border-radius: 18rpx;
		
					.children_box {
						height: 220rpx;
						width: 160rpx;
						background: #F4F1ED;
						border-radius: 18rpx;
		
						.pic {
							width: 150rpx;
							height: 150rpx;
							border-radius: 18rpx;
						}
					}
				}
		
				.border1 {
					border: 5rpx solid #FFFFFF;
				}
		
				.border2 {
					border: 5rpx solid rgba(0, 0, 0, 0);
				}
			}
		}
		.readImg{
			width: 50rpx;
			height: 50rpx;
			position: absolute;
			z-index: 100000;
			left: 50%;
			top: 80%;
			margin-left: -25rpx;
		}
		.underway {
			width: 100rpx;
			height: 26rpx;
			background: rgba(0, 0, 0, 0.5);
			border-radius: 0 0 12rpx 12rpx;
		
			.iconyuyin {
				font-size: 22rpx;
			}
		}
		.sharebox{
			z-index: 10000;
			.share {
				width: 340rpx;
			
				.share_img {
					height: 285rpx;
					.z-index999{
						z-index: 100001;
					}
			
					.share_tit1 {
						top: 6rpx;
						font-family: HappyZcool-2016;
						text-shadow: 0 1rpx 2rpx rgba(103, 93, 74, 0.84);
						
					}
			
					.share_tit2 {
						bottom: 90rpx;
						font-family: PingFang SC;
						color: #FE7555;
			
					}
			
					.share_tit3 {
						bottom: 45rpx;
					}
			
					.star_move {
						position: absolute;
						left: 100rpx;
						top: 80rpx;
						.redstar1 {
							position: absolute;
							left: 65rpx;
							top: 10rpx;
							width: 60rpx;
							height: 60rpx;
							animation: starmove 3s infinite;
						}
			
						.yellowstar1 {
							position: absolute;
							left: 20rpx;
							top: -5rpx;
							width: 100rpx;
							height: 100rpx;
							// margin-right: 20rpx;
							transform-origin: 40rpx 40rpx;
							// animation: starmove2 2s infinite;
						}
						.gradeSum{
							position: absolute;
							left: 20rpx;
							top: -5rpx;
							width: 100rpx;
							height: 100rpx;
							line-height: 100rpx;
							text-align: center;
							font-weight: bold;
							color: #B13545;
						}
					}
				}
			
				@keyframes starmove {
					0% {
						transform: translateY(0);
					}
			
					50% {
						transform: translateY(-15rpx);
					}
			
					100% {
						transform: translateY(0);
					}
				}
			
				@keyframes starmove2 {
					0% {
						transform: translateY(0);
					}
			
					50% {
						transform: translateY(-15rpx);
					}
			
					100% {
						transform: translateY(0);
					}
				}
			
				.button {
					background: rgba(0, 0, 0, 0);
				}
			
				.button::after {
					border: none;
				}
			
				.share_but {
					padding-top: 4rpx;
			
					.share_but_img {
						width: 48rpx;
						height: 50rpx;
					}
				}
			}
		}
	
	
</style>
