<template>
	<view >
		<view class="exam_start" v-show="!exam_start">
			<view @tap="jump()" class="position-a icon iconguanbi1 guanbi1 cl-white"></view>
			<view class="exam_box">
				<image class="exam_text" :src="imageUrl + 'exam_text.png'" mode=""></image>
				<view class="exam_content">
					<view class="content_top">
						<view class="content_left">
							<view class="left_name">权威</view>
							<view class="left_txt">
								国际权威的阅读能力测试体系
							</view>
						</view>
						<view class="content_left margin-left-40">
							<view class="left_name">评定</view>
							<view class="left_txt">
								精确评定学生适合的阅读区间
							</view>
						</view>
					</view>
					<view class="content_bottom">
						<view class="left_name">测评说明</view>
						<view class="left_txt">
							1、本测评耗时15-25分钟，请您耐心完成；
						</view>	
						<view class="left_txt">
							2、本测评由30-35道单选题，5道读一读，1道读后感构成，不支持退出测评界面返回作答；
						</view>
						<view class="left_txt">
							3、为保证测评结果的科学性，请孩子自主完成，不要在做题过程中使用词典等辅助工具；
						</view>
						<view class="left_txt">
							4、本测评为虚拟内容服务，购买成功后不支持退费。
						</view>
					</view>
					
				</view>
			</view>
			<view class="exam_btn" @tap="examStart">
				开始答题吧
			</view>
		</view>
		<view class="zhezhaocengBa" v-show="exam_start">
			<view class="position-a wh z-index-">
				<image class="serialImg margin-top-50" src="https://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/exam_bg.png" mode=""></image>
			</view>
			<view  v-if="!recordIf" class="width position-f z-index9">
				<view class="underway margin-auto cl-white flex align-center justify-center">
					<view class="font-18 font-bold">{{audioDuration == '' ? '' : audioDuration}}</view>
					<view class="icon iconyuyin padding-left-10"></view>
				</view>
			</view>
			<view class="serial flex align-center">
				<view @tap="jump()" class="position-a icon iconguanbi1 guanbi1 cl-white"></view>
				<view class="serial_box">
					<scroll-view class="wh" scroll-x scroll-with-animation :scroll-left="scrollLeft">
						<view class="position-r height flex align-center" :style="{right:xhLeft+'px'}"
							style="transition: 0.3s;">
							<view v-for="(serIm,serIx) in itemlist" :key="serIx" @tap="serialFn(serIx)" 
							class="serial_item  flex-shrink text-center">
								<view :class="[serIx==serLockIx?'serial_Not':'serial_list',serIm.serialIf?'serial_ready':'']"
									class="font-16 margin-auto font-bold">
									{{serIx+1}}
								</view>
							</view>
							<view v-if="completeIf" class="padding-lr-10">
								<view @tap="submitFn" class="submit cl-white flex-shrink text-center font-15 font-weight5">提交</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="serialBox">
				
			</view>
			<!-- 1音频选图片，2.判断题 3看句子选图片,4看图选句子,5.阅读短句内容6.阅读段落7.自由阅读，8.文字选文字 -->
			<view class="serialBox1" v-if="questions.exs_flg == 1 || questions.exs_flg == 3 || questions.exs_flg == 4 || questions.exs_flg == 8"  @touchmove="touchmove" @touchstart="touchstart" @touchend="touchend">
				<view class="boxText">
					{{questions.exs_desc}}
				</view>
				<view class="boxTopic" v-if="questions.exs_flg == 1 || questions.exs_flg == 3 || questions.exs_flg == 8">
					{{questions.content}}
				</view>
				<view class="boxVideo" v-if="questions.exs_flg == 1 " @tap="voiceFn()">
					<image class="voiceLaba_g" :src="imageUrl + 'voiceLaba_g.png'" mode=""></image>
				</view>
				<view class="boxTopic_img" v-if="questions.exs_flg == 4" >
					<image class="wh"  :src="formalUrl + questions.image" mode="aspectFit"></image>
				</view>
				<view class="boxAnswer" v-if="questions.exs_flg == 8">
					<view class="answerItem" v-for="(item,index) in questions.list" :key="index" @tap="answerFn(item,index)">
						<view  :class="item.optionIf?'bg_not':'bg-white'" class="answerNumb">{{item.key}}</view>
						<view class="answerCenter">
							<view v-if="questions.exs_flg == 8" :class="item.value.length > 10?'answerTextLong':'answerText'">{{item.value}}</view>
						</view>
					</view>
				</view>
				<view class="boxAnswer" v-if="questions.exs_flg == 1 || questions.exs_flg == 3 ">
					<view class="answerItem" v-for="(item,index) in questions.list" :key="index" @tap="answerFn(item,index)">
						<view  :class="item.optionIf?'bg_not':'bg-white'" class="answerNumb">{{item.key}}</view>
						<view class="answerCenterImg">
							<image  v-if="questions.exs_flg == 1 || questions.exs_flg == 3" class="wh" :src="formalUrl +item.image" mode="aspectFit"></image>
						</view>
					</view>
				</view>
				<view class="boxAnswer_judge"  v-if="questions.exs_flg == 4">
					<view class="answerItem" v-for="(item,index) in questions.list" :key="index" @tap="answerFn(item,index)">
						<view class="answerNumb" :class="item.optionIf?'bg_not':'bg-white'" >{{item.key}}</view>
						<view class="answerCenter">
							<view   :class="item.value.length > 10?'answerTextLong':'answerText'">{{item.value}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="serialBox1" v-if="questions.exs_flg == 6 || questions.exs_flg == 7" @touchmove="touchmove" @touchstart="touchstart" @touchend="touchend">
				<view class="read_box">
					<view class="read_box_left" >
						<view class="font-20 font-bold text-center">{{questions.exs_desc}}</view>
						<view  v-for="(items,indexs) in contents[0]" :key="indexs">{{items}}</view>
						<view v-if="questions.exs_flg == 7" v-for="(item,index) in questions.content" :key="index">
							<view v-if="index == 0" class=" ">{{questions.content[0]}}</view>
							<view class="  ">
								<view v-if="index > 0" class="cl-00A475  ">{{index + ","}}{{questions.content[index]}}</view>
							</view>
						</view>
					</view>
					<view class="read_box_right">
						<view class="box_right_top">
							<image class="right_top_img" src="https://lbzyk.read61.cn/read61v3_rsc/RDMST_BookEntity/cover/24639eeb88244473a62a6c4f124ab51b.png" mode="aspectFit"></image>
						</view>
						<view class="box_right_bottom">	
							<view class="read_img">
								<image  v-show="anewIf1" class="wh " :src="imageUrl + 'bofang1_g.png'"mode=""></image>
								<image @tap="playReadFn" v-show="!anewIf1 && pause" class="wh " :src="imageUrl + 'bofang2_g.png'"mode=""></image>
								<image @tap="playReadFn" v-show="!anewIf1 && !pause" class="wh " :src="imageUrl + 'pause.png'"mode=""></image>
							</view>
							<view class="read_img2 flex justify-center align-center" v-if="recordIf1">
								<view v-for="(able1Im,able1Ix) in 4" :key="able1Ix+ '-only'" class="syllableup":class="[syllableIf?'syllable_infinite' : '', 'syllableOne' + able1Ix]">
								</view>
								<image v-show="recordIf&&questions.exs_flg == 6"  @tap="voiceRecord" class="wh horn_img" :src="imageUrl + 'luyin1_g.png'" mode=""></image>
								<image v-show="recordIf&&questions.exs_flg == 7"  @tap="hintVoice7" class="wh horn_img" :src="imageUrl + 'luyin1_g.png'" mode=""></image>
								<image v-show="!recordIf"  @tap="stopRecord" class="wh horn_img" :src="imageUrl + 'luyin2_g.png'" mode=""></image>
								<!-- <image v-show="!recordIf&&questions.exs_flg == 7"  @tap="stopRecord" class="wh horn_img" :src="imageUrl + 'luyin2_g.png'" mode=""></image> -->
								
								<view v-for="(able2Im,able2Ix) in 4" :key="able2Ix" class="syllableup" :class="[syllableIf?'syllable_infinite' : '', 'syllableOne' + able2Ix]">
								</view>
							</view>
							
							<view class="read_img">
								<image v-show="saveReadIf1" class="wh"  :src="imageUrl + 'baocun2.png'"mode=""></image>
								<image v-show="!saveReadIf1"  class="wh" @tap="saveReadFn" :src="imageUrl + 'baocun1.png'"mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
			
		</view>
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getAssessDetail,pushAssess,asrParam,chivoxParam} from '../../../api/index.js'
	import {Audio,voiceStart} from "../../../utils/utils.js";
	const recorderManager = uni.getRecorderManager(); //微信录音机
	var sig = undefined; //计算签名
	var socketTask ;
	var appkey = 'lt4gt6nrho4vzgjrmmdxsgp7wvuxdlr2kevfi4iy';
	var time = 0;
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				vueappurl:'http://192.168.124.7:8081',
				exam_start:false,
				scrollLeft: 0,
				serLockIx: -1, //当前题号
				xhLeft: 0,
				completeIf: false,
				itemlist: [], 
				//总数组
				questions:{},
				recordIf1:true,
				syllableIf: false,
				anewIf1:true,
				saveReadIf1:true,
				readquestions:{},
				atrId:0,
				audioDuration: 0,
				totalPoints: 0,
				recordIf:true,
				refText: '',
				contents:[],
				detailsList6: [],
				detailsList7:[],
				questionJson8: [],
				pause: true,
				appraisalId:0
			}
		},
		watch:{
			serLockIx() {
				Audio.stop();
				this.contents = [];
				
				let item = this.itemlist[this.serLockIx];
				if(item){
					this.questions = {};
					this.questions = item;
					if(typeof this.questions.content !== 'string') return
					let Illustrated1 = this.questions.content.split("<bl/>");
					if (Illustrated1.length == 1) {
						this.content_title = ''
						Illustrated1 = this.questions.content.split("<br/>")
					} else {
						this.content_title = Illustrated1[0];
						Illustrated1 = Illustrated1[1].split("<br/>")
					}
					
					this.contents.push(Illustrated1);
					console.log("内容",this.contents)
					if (item.audio) {
						this.audioUrl = item.audio;
					}
				}
				
				
			},
			audioUrl() {
				Audio.stop();
				this.voiceFn();
			}
		},
		
		onLoad(open) {
			console.log("点开",open)
			this.atrId = open.atr_id;
			this.userName = open.userName;
			this.age = open.age;

			this.learnTime = open.learnTime;
			this.token = uni.getStorageSync('token');
			// this.serialFn(0)
			this.getAssessDetailUl();
			this.asrParam()
		},
		onReady() {
		
			
			
			let that = this;
			recorderManager.onStop((res) => {
				
				console.log("结束",res.tempFilePath)
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
				if(that.refText){
					that.refText = that.refText.replace(/(<bl\/>|<br\/>)/g,'')
				}else{
					that.refText = ''
				}
					const tempFilePath = res.tempFilePath;
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
							
							that.selfAudio = a.data.filePath
							that.itemlist[that.serLockIx].recordIf = false;
							// that.recordIf1 = false;
							that.anewIf = true;
							that.anewIf1 = false;
							that.saveReadIf1 = false;
							that.saveReadIf = true;
							
							console.log("录音文件",a)
						},
					})
				
				
			});
			
		},
		methods: {
			jump(){
				uni.navigateTo({
					url: '../../index/index'
				});
			},
			asrParam(){
				asrParam().then((res)=>{
					
					sig = res.data.sign;
					appkey = res.data.appKey;
					time = res.data.time
				})
			},
			getAssessDetailUl(){
				getAssessDetail({
					'atrId':this.atrId,
					'learnTime':this.learnTime,
					'age':this.age,
					'userName':this.userName,
				}).then((res)=>{
					this.data = res.data;
					this.itemlist = res.data.itemlist;
					this.appraisalId = res.data.appraisalId
					 uni.setStorageSync('appraisalId',this.appraisalId);
					this.itemlist.map(item => {
						item.serialIf = false;
						item.list.map(its => {
							its.optionIf = false;
						})
						item.score = -1;
					})
					console.log("详情",res)
				})
			},
			completeFn(){
				
			},
			// 点击序号
			serialFn(index) {
				Audio.stop();
				this.serLockIx = index;
				this.iseven = 0;
				uni.getSystemInfo({
					success: res => {
						let left = this.itemlist[index].xhLefts;
						this.srnWidth = res.screenWidth / 2;
						this.scrollLeft = (left - this.srnWidth) - (this.serialWidth / 2);
					}
				});
			},
			// 点击选题
			answerFn(item,index) {
				
				let items = this.itemlist[this.serLockIx];
				let answer = items.answer;
				let arrStr8 = {
					queNum: this.serLockIx + 1,
					query: items,
					value: item.key
				};
				if (items.exs_flg == 8) {
					let inta = 1;
					for (let i = 0; i <= this.questionJson8.length - 1; i++) {
						if (this.questionJson8[i].queNum == this.serLockIx + 1) {
							this.questionJson8[i].value = item.key;
							inta = 2;
						}
					}
					if (inta == 1) {
						this.questionJson8.push(arrStr8);
					}
				}
				items.serialIf = true;
				items.list.map(ies => {
					if (ies.optionIf == true) {
						ies.optionIf = false;
					}
				})
				
				item.optionIf = true;
				items.list[index].optionIf = item.optionIf;
				this.$forceUpdate()
				if (answer == item.key) {
					items.score = items.sigsore;
			
				} else {
					items.score = 0;
			
				}
				console.log("选项1",this.questions)
			},
			returnJump() {
				// Audio.stop();
				uni.reLaunch({
					url: '../../index/index'
				})
			},
			saveReadFn() {
				// console.log("index",this.index)
				let items = this.itemlist[this.serLockIx];
				console.log("内容",this.audioMation)
				if (this.audioMation !== '') {
					let arrStr = {
						queNum: this.serLockIx + 1,
						query: items,
						value: this.audioMation
					};
					let inta = 1;
					if (items.exs_flg == 6) {
						for (let i = 0; i <= this.detailsList6.length - 1; i++) {
							if (this.detailsList6[i].queNum == this.serLockIx + 1) {
								this.detailsList6[i].value = this.audioMation;
								inta = 2;
							}
						}
						if (inta == 1) {
							this.detailsList6.push(arrStr);
						}
					} else if (items.exs_flg == 7) {
						if (this.detailsList7 != 0) {
							this.detailsList7.value = this.audioMation;
			
						} else {
							this.detailsList7.push(arrStr);
						}
					}
					if (this.timerId == 0) {
						this.timerId
					} else {
						clearTimeout(this.timerId)
					}
					uni.showToast({
						title: '保存成功',
						duration: 500,
						icon: 'none'
					});
					this.degreeNum++;
					
					this.timerId = setTimeout(() => {
						items.score = items.sigsore;
						this.recordIf1 = true;
						this.anewIf1 = true;
						this.saveReadIf1 = true;
						items.serialIf = true;
						this.audioMation = '';
						this.serLockIx++;
						this.timerId = false;
						if (this.serLockIx + 1 == this.itemlist.length && this.degreeNum + 1 ==this.itemlist.length){
							console.log(this.degreeNum, this.itemlist.length)
							this.completeIf = true
							uni.showToast({
								title: '全部完成,请点击上方提交按钮',
								duration: 1000,
								icon: 'none'
							});
							return;
						} 
					}, 1000)
					
				} else {
					// this.$api.msg('请先录音');
					this.saveReadIf = false;
				};
			
			},
			// 开始录音
			voiceRecord() {
				this.recordIf = false;
				this.syllableIf = true;
				
				Audio.stop();
				this.refText = this.itemlist[this.serLockIx].content;
				this.audioDuration = 5;
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
						
						that.audioMation = data;
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
							  	'coreType': 'en.sent.pron',
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
				/*引擎启动成功，可以启动录音机开始录音，并将音频片传给引擎*/
				const options = {
					duration:  that.audioDuration * 1000, //指定录音的时长，单位 ms
					sampleRate: 16000, //采样率
					format: 'mp3', //音频格式，有效值aac/mp3
				};
				console.log("开始",options)
				//开始录音,在开始录音回调中feed音频片
				recorderManager.start(options);
				//监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
				recorderManager.onFrameRecorded((res) => {
					const {
						frameBuffer
					} = res
				});
			},
			stopRecord(){
				this.recordIf = true;
				this.syllableIf = false;
				recorderManager.stop();
				
				uni.showToast({
					title: '语音识别中...',
					duration: 2000,
					icon: 'none'
				});
			},
			// 播放已录
			playReadFn() {
				// const Audio = uni.createInnerAudioContext();
				
				if (!this.pause) {
					Audio.stop();
					this.pause = true;
					
				} else {
				
					this.pause = false;
					this.audioSelUrl = this.selfAudio;
					voiceStart(this.audioSelUrl).then(() => {
						
						// this.pause = true;
					});
					Audio.onEnded(()=>{
						this.pause = true;
					})
				}
			},
			// 保存
			// saveReadFn() {
			// 	let items = this.readquestions;
			// 	if(this.audioMation !== ''){
			// 		let arrStr = {query:items, value:this.audioMation};
			// 		let inta = 1;
			// 		console.log(this.detailsList6.length == 0)
			// 		if(this.detailsList6.length == 0){
			// 			this.detailsList6.push(arrStr);
			// 				uni.showToast({
			// 					title:'保存成功',
			// 					duration: 2000,
			// 					icon: 'none'
			// 				});
			// 				setTimeout(()=>{
			// 					this.bgshow = !this.bgshow;
			// 					this.num++;
			// 				},2000)
			// 				setTimeout(()=>{
			// 					this.bgshow = !this.bgshow
			// 					this.questions.exs_flg++;
			// 					this.anewIf1 = true;
			// 					this.saveReadIf1 = true;
			// 				},5000)
			// 		}else{
			// 			this.detailsList6 = [];
			// 			this.detailsList6.push(arrStr);
			// 		}
			// 	}else{
			// 		this.$api.msg('请先录音');
			// 		this.saveReadIf = false;
			// 	};
			// },
			// 提示音
			hintVoice7() {
				voiceStart(this.imageUrl + 'bdspeech_recognition_start.mp3').then(() => {
					this.record7();
				});
			},
			record7() {
				this.audioMation='';
				this.result = "",
				this.itemlist[this.serLockIx].recordIf = true;
				this.recordIf = false;
				this.syllableIf = true;
				this.openSocket()
			},
			// stop7() {
			// 		recorderManager.stop();
			// 		this.recordIf = false;
			// 		this.syllableIf = false;
			// 		uni.showToast({
			// 			title: '语音识别中...',
			// 			duration: 2000,
			// 			icon: 'none'
			// 		});
			// },
			openSocket() {
				this.audioDuration = 5;
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
						
						that.audioMation = data;
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
							  	'coreType': 'en.asr.rec',
							  	'res': 'en.asr.G4',
							  	'attachAudioUrl': 1,
								'result': {
								      'details':{
								        'ext_cur_wrd': 1,
								        'gop_adjust': 0.8
								    }
								  }
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
				/*引擎启动成功，可以启动录音机开始录音，并将音频片传给引擎*/
				const options = {
					duration:  that.audioDuration * 1000, //指定录音的时长，单位 ms
					sampleRate: 16000, //采样率
					format: 'mp3', //音频格式，有效值aac/mp3
				};
				console.log("开始",options)
				//开始录音,在开始录音回调中feed音频片
				recorderManager.start(options);
				//监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
				recorderManager.onFrameRecorded((res) => {
					const {
						frameBuffer
					} = res
				});
			},
			// 点击提交
			submitFn() {
				this.degreeNum = 0;
				this.degreeNum2 = 0;
				this.totalPoints = 0;
				this.listening = 0;
				this.reading = 0;
			
				let nolist = [];
				let iscom = 0;
				this.itemlist.forEach((item, index) => {
					if (item.score >= 0) {
						this.degreeNum++;
						this.totalPoints += item.score;
					} else {
						// this.scrollLeft = (item.xhLefts - this.srnWidth) - (this.serialWidth / 2);
						if (item.score == -1) {
							nolist.push(index + 1)
						}
					}
					if (item.question_type == "listening") {
						this.degreeNum2++;
						this.listening += item.score;
					} else if (item.question_type == "reading") {
						this.degreeNum2++;
						this.reading += item.score;
					}
				})
				console.log("分数",this.totalPoints)
				this.data.totalPoints = this.totalPoints;
				this.data.itemlist = this.itemlist;
				this.data.chiShengJson6 = this.detailsList6;
				this.data.chiShengJson7 = this.detailsList7;
				this.data.questionJson8 = this.questionJson8;
				this.data.listeningScore = this.listening;
				this.data.readingScore = this.reading;
				console.log("提交",this.data)
				let obj = JSON.stringify(this.data)
				pushAssess({
					'appraisalId':this.appraisalId,
					'examinationPaper':obj,
					'totalPoints':this.totalPoints
				}).then((res)=>{
					
					if(res.status == 200){
								uni.showToast({
									title: '提交成功',
									duration: 2000,
									icon: 'none'
								});
					}
					}
				)
				
			},
			// 点击屏幕
			touchstart(event) {
				
				this.direction = 0;
				event.preventDefault();
				this.startX = event.changedTouches[0].pageX;
			},
			// 移动
			touchmove(event) {
				event.preventDefault();
				var moveEndX = event.changedTouches[0].pageX;
				this.direction = moveEndX - this.startX;
			},
			// 放手
			touchend(event) {
				event.preventDefault();
				let item = this.itemlist[this.serLockIx];
				if (item.questionTypes == 'reorder'){
					if(!this.submitIf) return
				}
				// if(!this.submitIf) return
				// if (item.questionTypes == 'reorder') return
				if (this.direction < 0) {
					if (this.direction < -50) {
						
						if (this.serLockIx + 1 == this.itemlist.length){
							console.log(this.degreeNum, this.itemlist.length)
							this.completeIf = true
							uni.showToast({
								title: '全部完成以后,请点击上方提交按钮',
								duration: 1000,
								icon: 'none'
							});
							return;
						} 
						this.serLockIx++;
						
					}
				} else {
					if (this.direction > 50) {
						if (this.serLockIx == 0) return;
						this.serLockIx--;
					}
				}
				console.log(this.serLockIx,this.itemlist.length)
				
			},
			examStart(){
				this.exam_start = true;
				this.serialFn(0)
			},
			// 播放录音
			voiceFn() {
				voiceStart(formalUrl + this.audioUrl);
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.exam_start{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: url('https://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/exam_bg.png');
		background-size: 100% 100%;
		.exam_box{
			width: 600rpx;
			height: 250rpx;
			background: #fff;
			border-radius: 10rpx;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -300rpx;
			margin-top: -130rpx;
			.exam_text{
				position: absolute;
				left: 50%;
				top: -20rpx;
				margin-left: -125rpx;
				width: 250rpx;
				height: 50rpx;
			}
			.exam_content{
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				.content_top{
					width: 100%;
					height: 60rpx;
					margin-top: 20rpx;
					display: flex;
					.content_left{
						width: 40%;
						padding-left: 5%;
						margin-top: 15rpx;
						height: 100%;
						.left_name{
							font-size: 15rpx;
							color: #FF7800;
							font-weight: bold;
							line-height: 20rpx;
						}
						.left_txt{
							font-size: 13rpx;
							line-height: 15rpx;
							margin-top: 10rpx;
						}
					}
				}
				.content_bottom{
					width: 100%;
					height: 150rpx;
					margin-top: 20rpx;
					
					.left_name{
						width: 40%;
						padding-left: 5%;
						margin-top: 15rpx;
						font-size: 15rpx;
						color: #FF7800;
						font-weight: bold;
						line-height: 20rpx;
					}
					.left_txt{
						padding-left: 5%;
						margin-top: 15rpx;
						font-size: 13rpx;
						line-height: 15rpx;
						margin-top: 10rpx;
					}
				}
			}
		}
		.exam_btn{
			position: absolute;
			left: 50%;
			bottom: 10rpx;
			height: 30rpx;
			width: 160rpx;
			margin-left: -80rpx;
			background: #FF7700;
			color: #fff;
			text-align: center;
			line-height: 30rpx;
			border-radius: 5rpx;
		}
	}
	.serialImg{
		width: 130%;
		height: 130%;
		
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
	.serial {
		background: linear-gradient(0,#4CB460, #369D4A);
		.head {
			top: 3vh;
			left: 25rpx;
			.green_back_img{
				width: 36rpx;
				height: 36rpx;
			}
		}
		.serial_top{
			height: 40rpx;
			display: flex;
			align-items: center;
			.list1{
				position: absolute;
				left: 40%;
				margin: 0 auto;
				font-size: 20rpx;
				color: #FFFFFF;
			}
		}
		
		.submit {
			width: 56rpx;
			height: 32rpx;
			line-height: 32rpx;
			background: #a1d4ab;
			color: #67a772;
			// border: 1rpx solid #FFFFFF;
			border-radius: 9rpx;
		}
	
		.serial_box {
			width: 80%;
			height: 59rpx;
			margin-left: 80rpx;
			.serial_item {
				width: 40rpx;
				// line-height: 50rpx;
				color: #127625;
				.serial_list {
					width: 28rpx;
					height: 28rpx;
					line-height: 28rpx;
					background: rgba(157, 215, 168, 1.0);
					border-radius: 14rpx;
				}
	
				.serial_ready {
					background: #186427;
					color: #a1eeb0;
				}
	
				.serial_Not {
					width: 35rpx;
					height: 35rpx;
					line-height: 35rpx;
					color: #127625;
					background: #c0e6c8;
					border: 2rpx solid #FFFFFF;
					border-radius: 18rpx;
				}
			}
		}
	}
	.serialBox{
		width: 90%;
		height: 80%;
		margin-left: 5%;
		border-radius: 0px 0px 40px 40px;
		background: #fff;
		opacity: 0.7;
		
	}
	.serialBox1{
		width: 90%;
		height: 80%;
		position: absolute;
		left: 5%;
		top: 70rpx;
	
		.boxVideo{
			width: 30rpx;
			height: 30rpx;
			margin-left: 40rpx;
			.voiceLaba_g{
				width: 100%;
				height: 100%;
			}
			
		}
		.boxText{
			width: 90%;
			height: 20rpx;
			line-height: 20rpx;
			padding: 5rpx 0 0 5%;
			font-weight: bold;
			font-size: 16rpx;
		}
		.boxTopic{
			width: 90%;
			height: 20rpx;
			line-height: 20rpx;
			padding: 5rpx 0 0 5%;
			font-size: 15rpx;
		}
		.boxTopic_img{
			position: absolute;
			left: 5%;
			top: 15%;
			width: 40%;
			height: 70%;
			background: #FFFFFF;
			border-radius: 10rpx;
			
		}
		.boxAnswer{
			width: 100%;
			height: 40%;
			position: absolute;
			top: 17%;
			display: flex;
			flex-wrap: wrap;
			.answerItem{
				width: 276rpx;
				height: 80%;
				margin: 20rpx 26rpx 0 25rpx;
				display: flex;
				align-items: center;
				
				.answerCenterImg{
					margin-left: 10rpx;
					width: 100rpx;
					height: 100rpx;
					border: 2px solid #eee;
					background: #eee;
				}
				.answerNumb{
					width: 40rpx;
					height: 40rpx;
					border-radius: 20rpx;
					border: 1px solid #41a855;
					// background: #FFFFFF;
					text-align: center;
					line-height: 40rpx;
					font-size: 20rpx;
				}
				.bg_not {
					background: linear-gradient(0deg, #F9BF00, #FFFF00);
					animation: transSize 0.3s linear 0s;
				
				}
				@keyframes transSize {
					from {
						transform: scale(0.8);
					}
				
					to {
						transform: scale(1.3);
					}
				}
				.answerCenter{
					width: 200rpx;
					height: 80rpx;
					border-radius: 10rpx;
					box-shadow: 1px 0px 3px 0px #084130;
					background: #FFFFFF;
					margin-left: 20rpx;
					
					.answerTextLong{
						width: 100%;
						line-height: 20rpx;
						margin-top: 10rpx;
						font-size: 19rpx;
						text-align: center;
						white-space: pre-wrap;
						overflow: auto;
					}
					.answerText{
						width: 100%;
						line-height: 40rpx;
						margin-top: 20rpx;
						font-size: 19rpx;
						text-align: center;
						white-space: pre-wrap;
						overflow: auto;
					}
				}
			}
		}
		.boxAnswer_judge{
			width: 50%;
			height: 100%;
			position: absolute;
			left: 50%;
			top: 0;
			flex-wrap: wrap;
			.answerItem{
				width: 276rpx;
				height: 24%;
				// margin: 20rpx 26rpx 0 25rpx;
				display: flex;
				align-items: center;
				
				.answerNumb{
					width: 40rpx;
					height: 40rpx;
					border-radius: 20rpx;
					border: 1px solid #41a855;
					background: #FFFFFF;
					text-align: center;
					line-height: 40rpx;
					font-size: 20rpx;
				}
				.bg_not {
					background: linear-gradient(0deg, #F9BF00, #FFFF00);
					animation: transSize 0.3s linear 0s;
				
				}
				.answerCenter{
					width: 200rpx;
					height: 60rpx;
					border-radius: 10rpx;
					box-shadow: 1px 0px 3px 0px #084130;
					background: #FFFFFF;
					margin-left: 20rpx;
					
					.answerTextLong{
						width: 100%;
						line-height: 16rpx;
						margin-top: 10rpx;
						font-size: 19rpx;
						text-align: center;
						white-space: pre-wrap;
						overflow: auto;
					}
					.answerText{
						width: 100%;
						// line-height: 40rpx;
						margin-top: 20rpx;
						font-size: 19rpx;
						text-align: center;
						white-space: pre-wrap;
						overflow: auto;
					}
				}
			}
		}
		
		.read_box{
			display: flex;
			position: absolute;
			left: 5%;
			top: 2%;
			width: 80%;
			height: 80%;
			// background: pink;
			.read_box_left{
				position: absolute;
				left: 0;
				top: 0;
				padding: 10rpx;
				height: 100%;
				width: 50%;
				// color: #FFFFFF;
				overflow:auto;
				font-size: 20rpx;
			}
			.read_box_right{
				margin-left:50rpx;
				position: absolute;
				left: 50%;
				top: 0;
				width: 50%;
				height: 100%;
				.box_right_top{
					width: 100%;
					height: 60%;
					 border: 2rpx solid #127625;
					border-radius: 10rpx;
					.right_top_img{
						height: 100%;
						width: 100%;
						// margin: 0 auto;
					}
				}
				.box_right_bottom{
					margin-top: 10%;
					width: 100%;
					height:30%;
					display: flex;
					justify-content: center;
					align-items: center;
					box-shadow: 1px 1px 2px 0px #158d29;
					border-radius: 40px 40px 40px 40px;
					border-radius: 15rpx;
					opacity: 1;
					.read_img{
						width: 35rpx;
						height: 35rpx;
					}
					.read_img2{
						width: 50%;
						height: 80%;
						margin: 0 15rpx;
						// bottom: 153rpx;
						.syllableup {
							background-color: #127525;
							width: 3rpx;
							height: 30rpx;
							border-radius: 4rpx;
							margin: 0 3rpx;
							animation-fill-mode: both;
							}
						.horn_img {
							width: 66rpx;
							height: 66rpx;
							margin: 0 3rpx;
						}
					}
				}
			}
		}
	}
</style>
