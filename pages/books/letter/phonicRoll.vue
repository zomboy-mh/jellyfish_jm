<template>
	<view class="zhezhaocengBa setting">
		<view class="z-index4 width position-f">
			<view class="head flex align-center position-a">
				<image @tap="returnJump" class="return_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view v-if="prepareIf" @tap="$refs.pages.pagesIf = true"
				class="pagination position-a flex align-center justify-center">
				<image class="pagination_img" :src="imageUrl+'pageNum1_g.png'" mode=""></image>
				<view class="font-14 cl-black9 padding-left-10">{{swiperCurrent + 1}}/{{swiperList.length}}</view>
			</view>
			<view class="transBtn font-18" @tap="transBtn()">译</view>
			<view class="transBtn1 font-18" @tap="sliderBtn()">字号</view>
		</view>
		<view class="sliderShow" v-if="sliderShow">
			<slider value="50" @change="sliderChange" show-value />
		</view>
		<view :class="awardedIf?'':'visibility'" class="awarded position-f wh flex-vertical-level opacity">
			<view :class="awardedIf?'awarded_num':''" class="flex align-center padding-left-20">
				<image class="star position-r" :src="imageUrl+'starfish2.png'" mode=""></image>
				<view class="integral bg-white font-15 font-weight8">{{eggAmount}}</view>
			</view>
		</view>

		<view class="position-a wh swiper-no-swiping">
			<!-- <view v-if="!staticIf" class="wh position-f z-index3"></view> -->
			<image v-if="!prepareIf" @tap="prepareFn" class="beginRead_img position-a z-index4 padding-top-40"
				:src="imageUrl + 'beginRead.png'" mode=""></image>
			</image>

			<view v-if="!prepareIf" class="height position-r flex justify-center align-center padding-top-20">
				<image v-if="bookLogo" class="cot_img bg-white radius-9" :src="formalUrl + bookLogo" mode="aspectFit"></image>
				<view class="cot_article margin-left">
					<view class="wh flex-vertical position-r">
						<view class="line-height25 padding-bottom-50">
							<view class="font-20 font-bold">
								<span v-for="(items,indexs) in bookName" :key="indexs" >
									{{items + ' '}}
								</span>
							</view>
							<view class="pattern font-18 padding-top-20">下面将对这本绘本进行录音小朋友做好准备哟~~</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 读的过程 -->
			<view v-if="readNoW" class="sliding">
				<view class="sliding_box">
					<view class="read_img">
						<!-- <image v-if="!dataItem.recordIf" @tap="hintVoice" class="wh" :src="imageUrl + 'recordRead1.png'"
							mode=""></image> -->
						<image v-if="dataItem.recordIf" @tap="stopRecord" class="wh" :src="imageUrl + 'stopRead1_g.png'"
							mode="">
						</image>
					</view>

				</view>
				<view class="height flex justify-center align-center padding-top-20">
					<view class="cot_img position-r">

						<image class="wh bg-white radius-9"
							:src="formalUrl + swiperList[swiperCurrent].pagePicfile"
							mode="aspectFit">
						</image>
					</view>
					<view class="cot_article margin-left">
						<view class="wh flex-vertical hidden scroll">
							<view class="line-height25 padding-bottom-50">

								<view class="text_left" v-if="swiperCurrent == 0">
									<view v-if="swiperCurrent == 0" class=" font-20 font-bold ">
										<span v-for="(items,indexs) in bookName" :key="indexs" >
											{{items + ' '}}
										</span>
									</view>
									<view v-if="swiperCurrent == 0"  class="margin-top-10 " :style="{'fontSize':textSize+'px'}"
										v-for="(itm,indx) in contents_item[0]" :key="indx">
										<span v-for="(itm1,indx1) in itm" :key="indx1" >
											{{itm1 + ' '}}
										</span>
									</view>
								</view>
								<view class="text_left_box2"
									v-if="swiperCurrent > 0">
									<view class="text_item" :style="{'fontSize':textSize+'px'}"
										v-for="(itm,indx) in contents_item[swiperCurrent]" :key="indx">
										<span class="spacer" v-for="(itm1,indx1) in itm" :key="indx1"
											>
											{{itm1 + ' '}}
										</span>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="transTips" v-if="transTips">
						<view class="transTipstxt">哪里不会点哪里</view>
						<view class="transTipsicon"></view>
					</view>
					<image v-show="transMaxlen" @tap="transClose" class="trans_close1 z-index9"
						:src="imageUrl + 'trans_close.png'" mode="">
					</image>
					<view :class="transMaxlen?'translation2':'translation1'" v-show="translf">
						<image v-show="!transMaxlen" @tap="transClose" class="trans_close":src="imageUrl + 'trans_close.png'" mode="">
						</image>
						<view class="font-15 cl-white">{{transQuery}}</view>
					</view>
				</view>
			</view>
			<!-- 读之前过程 -->
			<view v-if="prepareIf" class="position-a flex z-index4" style="left: 50vw;bottom: 10vh;">
				<view  class="read_img">
					<image v-if="!dataItem.recordIf" @tap="hintVoice" class="wh" :src="imageUrl + 'recordRead1_g.png'"
						mode=""></image>
				</view>
				<view v-if="dataItem.selfAudio" class="flex">
					<image v-show="!readIf&&!dataItem.recordIf" @tap="hintVoice" class="read_img"
						:src="imageUrl + 'recordRead1.png'" mode="">
					<image v-if="!readIf" @tap="playReadFn" class="read_img margin-left-20"
						:src="imageUrl + 'playRead1_g.png'" mode="">
					</image>
					<image v-if="readIf" @tap="playReadFn" class="read_img margin-left-20"
						:src="imageUrl + 'anewRead1_g.png'" mode="">
					</image>
					<!-- 保存 -->
					<view @tap="saveReadFn" v-if="preserveIf" class="read_img">
						<image v-if="!saveReadIf" class="read_img margin-left-20" :src="imageUrl + 'saveRead1.png'"
							mode=""></image>
						<image v-if="saveReadIf" class="read_img margin-left-20" :src="imageUrl + 'saveRead2.png'"
							mode=""></image>
					</view>
					<!-- 小手提示 -->
					<view v-if="saveXsIf && preserveIf" class="zhezhaoceng">
						<view @tap="saveXsIf = false" class="zhezhaocengBa"></view>
						<view class="save_xsa">
							<image class="save_xs" :src="imageUrl + 'save_xs1.png'" mode="aspectFit"></image>
						</view>

						<!-- <view class="save_text flex-shrink font-11 font-bold">你已经完成全部录音记得保存录音哟~</view> -->
					</view>
				</view>
			</view>
			<!-- 读之后过程 -->
			<swiper v-if="prepareIf && !readNoW" class="wh" :current="swiperCurrent" @change="swiperChange">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<view class="height flex justify-center align-center padding-top-20">
						<view class="cot_img position-r">
							<view class="voiceLaba position-a z-index100">

								<image v-if="!voiceLabaIf" class="wh" :src="imageUrl + 'march_laba1_g.png'" mode=""></image>
								<image v-if="voiceLabaIf" @tap="voiceFn" class="wh" :src="imageUrl + 'voiceLaba_g.png'" mode=""></image>
							</view>
							<image class="wh bg-white radius-9"
								:src="formalUrl + item.pagePicfile" mode="aspectFit">
							</image>
						</view>
						<view class="cot_article margin-left">
							<view class="wh flex-vertical hidden scroll">
								<view class="line-height25 padding-bottom-50">
									<view class="text_left" v-if="index == 0">
										<view v-if="index == 0" class="font-20 font-bold" >
											<span v-for="(items,indexs) in bookName" :key="indexs"
												>
												{{items + ' '}}
											</span>
										</view>
										<view v-if="index == 0" class=" margin-top-10 " :style="{'fontSize':textSize+'px'}"
											v-for="(itm,indx) in contents_item[0]" :key="indx">

											<span v-for="(itm1,indx1) in itm" :key="indx1" >
												{{itm1 + ' '}}
											</span>

										</view>
									</view>
									<view class="text_left_box2" v-if="index > 0">
										<view class=" text_item" :style="{'fontSize':textSize+'px'}"
											v-for="(itm,indx) in contents_item[index]" :key="indx">
											<span class="spacer" v-for="(itm1,indx1) in itm" :key="indx1">
												{{itm1 + ' '}}
											</span>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="transTips" v-if="transTips">
							<view class="transTipstxt">哪里不会点哪里</view>
							<view class="transTipsicon"></view>
						</view>
						<image v-show="transMaxlen" @tap="transClose" class="trans_close1 z-index9"
							:src="imageUrl + 'trans_close.png'" mode="">
						</image>
						<view :class="transMaxlen?'translation2':'translation1'" v-show="translf">
							<image v-show="!transMaxlen" @tap="transClose" class="trans_close"
								:src="imageUrl + 'trans_close.png'" mode="">
							</image>
							<view class="font-15 cl-white">{{transQuery}}</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 对话 -->
		<view v-if="dialogueIf" class="zhezhaoceng">
			<view @tap="closedialogue" class="zhezhaocengBa"></view>
			<view class="dialogue width position-a flex justify-center align-center">
				<view class="long_txt bg-white">
					<view style="width: 80%;" class="height flex align-center padding-lr margin-auto">
						<view class="flex flex-wrap font-18 font-weight5">
							<text style="padding-right: 4px;" v-for="(textIm,inx) in detailsList1"
								:class="textIm.score>6?'cl-00A475':'cl-F64D04'" :key="inx"
								>{{textIm.text}}</text>
						</view>
					</view>
				</view>
				<view class="padding-left-20">
					<image @tap="hintVoice" class="long_but" :src="imageUrl + 'anew1.png'" mode=""></image>
					<image v-if="swiperCurrent + 1 < swiperList.length" @tap="addFn" class="long_but padding-top-10"
						:src="imageUrl + 'nextNot1.png'" mode=""></image>
					<image v-if="swiperCurrent + 1 == swiperList.length" @tap="dialogueIf = false"
						class="long_but padding-top-10" :src="imageUrl + 'nextNot1.png'" mode=""></image>
				</view>
				<view class="gradeBox">
					<view class="font-17 cl-white gradeBoxTxt">{{gradeNum}}</view>
					<view class="gradeTop">
						<view class="gradeOne">
							<image v-show="gradeNum>1" class="gradeOneImg" :src="imageUrl + 'gradeYes.png'" mode=""></image>
							<image  v-show="gradeNum<1" class="gradeOneImg" :src="imageUrl + 'gradeNo.png'" mode=""></image>
						</view>
						<view class="gradeTwo">
							<image v-show="gradeNum>=50" class="gradeTwoImg" :src="imageUrl + 'gradeYes.png'" mode=""></image>
							<image v-show="gradeNum<50" class="gradeTwoImg" :src="imageUrl + 'gradeNo.png'" mode=""></image>
						</view>
						<view class="gradeThree">
							<image v-show="gradeNum==100" class="gradeThreeImg" :src="imageUrl + 'gradeYes.png'" mode=""></image>
							<image v-show="gradeNum<100"  class="gradeThreeImg" :src="imageUrl + 'gradeNo.png'" mode=""></image>
						</view>
					</view>
				</view>
				
			</view>
		</view>
		<view v-if="voiceIf" class="width position-f">
			<view class="underway margin-auto cl-white flex align-center justify-center">
				<view class="font-18 font-bold">{{audioDuration == '' ? '' : audioDuration}}</view>
				<view class="icon iconyuyin padding-left-10"></view>
			</view>
		</view>

		<!-- 模式 -->
		<view v-if="!translf" class="schema position-f z-index4">
			<image @tap="hintIf = true" class="margin-bottom-10" :src="imageUrl + 'hintRead.png'" mode=""></image>
			<view @tap="patternFn">
				<image v-if="patternIf" :src="imageUrl + 'autoRead.png'" mode="">
				</image>
				<image v-if="!patternIf" :src="imageUrl + 'manualRead.png'" mode="">
				</image>
			</view>
		</view>
		<!-- 提示 -->
		<view v-if="hintIf && !translf" class="zhezhaoceng">
			<view @tap="hintIf = false" class="zhezhaocengBa"></view>
			<view class="hint wh flex-vertical-level">
				<view class="hint_img position-r">
					<view @tap="hintIf = false" class="position-a icon iconguanbi1 guanbi cl-white"></view>
					<image class="wh" :src="imageUrl + 'hintReadPop.png'" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 页数 -->
		<page-index ref="pages" :index="swiperCurrent" :list="swiperList"></page-index>
		<!-- 分享 -->
		<!-- <share-pup ref="share"></share-pup> -->
		<view v-if="shareIf" class="zhezhaoceng z-index4">
			<view @tap="shareIf = false" class="zhezhaocengBa"></view>
			<view class="flex-vertical-level wh position-r z-index">
				<view class="share animated bounceInDown">
					<view class="share_img width position-r">
						<view class="share_tit1 width text-center position-a font-20 font-bold cl-white showindex">
							非常棒
						</view>
						<view class="share_tit2 width text-center position-a font-15 font-bold showindex">
							小朋友，恭喜你完成读绘本。
						</view>
						<view class="star_move showindex">
							<!-- <image class="yellowstar1" :src="imageUrl + 'yellowstar1.png'"></image>
							<image class="redstar1" :src="imageUrl + 'redstar1.png'"></image> -->
							<image class="yellowstar1" :src="imageUrl + 'gradeSun1.gif'">
								
							</image>
							<view class="gradeSum font-28">{{gradeTatal}}</view>
						</view>
						<view style="bottom: 36rpx;" class="width text-center position-a font-18 font-bold cl-0B0B4B showindex">
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
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pageIndex from '@/components/page-index.vue';
	import {Audio,voiceStart} from "../../../utils/utils.js";
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getBookPage} from '../../../api/index.js'
	 var socketTask;
	 const recorderManager = uni.getRecorderManager(); //微信录音机
	 var sig = undefined; //计算签名
	export default {
		components: {
			pageIndex,
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				mRightVoice: imageUrl + "audio/right.mp3",
				vueappurl: 'http://192.168.124.7:8081',
				swiperCurrent: 0,
				allAmount: 0,
				eggAmount: 2,
				eggs: 0,
				staticIf: false,
				voiceIf: false,
				prepareIf: false, //准备
				hintIf: false, //提示
				patternIf: false, //模式
				dialogueIf: false, //对话
				awardedIf: false, //加蛋
				preserveIf: false, //保存
				saveXsIf: true,
				saveReadIf: false, //保存状态
				swiperList: [],
				detailsList: [],
				detailsList1: [],
				dataItem: {},
				bookName: [],
				bookLogo: '',
				notRecord: 1,
				audioUrl: '',
				audioDuration: '',
				Bcounts: 0,
				howLongDate: 0, //记录时间
				shareIf: false,
				addegg: 0,
				type: '',
				nextpath: '',
				nextname: '完成',
				readIf: false,
				contents: [],
				dialogTxt: '',
				voiceLabaIf: true,
				contents_item: [],
				translf: false,
				transList: [],
				transQuery: '',
				ukPhonetic: '',
				phonetic: '',
				speakUrl: '',
				transMaxlen: false,
				transTips: true,
				readNoW: false,
				speechRecognition:'/userRecord/pushAudioRecord',
				isVip:true,
				bookPageId:0,
				isVipShow:false,
				gradeNum:0,
				gradeTatal:0,
				isPay:false,
				newBookList:[],
				token:'',
				tmpaudiofiles:[],
				tmpaudiofilesItem:{},
				sliderShow:false,
				textSize:45
			}
		},
		watch: {
			swiperCurrent() {
				this.translf = false;
				this.Bcounts = 0;
				this.dialogueIf = false;
				this.audioUrl = '';
				this.refText = this.swiperList[this.swiperCurrent].pageContent;
				this.audioUrl = this.swiperList[this.swiperCurrent].pageAudiofile;
				this.dataItem = this.swiperList[this.swiperCurrent];
				this.bookPageId = this.swiperList[this.swiperCurrent].pageId;
				
				// Audio.stop();
				setTimeout(() => {
					this.voiceFn();
				}, 1000)
				if (this.notRecord == 1) return;
				this.stopRecord();
			},
			audioUrl() {
				// let moreErr = this.swiperList[this.swiperCurrent].moreErr;
				// if (moreErr == true) return;
				if (this.audioUrl == '') return;
				Audio.stop();
				setTimeout(() => {
					this.voiceFn();
				}, 1000)

			},
			dialogueIf() {
				if (this.patternIf == false) return;
				if (this.anewIf == false) return;
				if (this.dialogueIf == false) {
					if (this.swiperCurrent + 1 == this.swiperList.length) return;
					setTimeout(() => {
						this.swiperCurrent++;
					}, 1000)
				}
			},
			tmpaudiofiles() {
				if(this.tmpaudiofiles){
					if(this.tmpaudiofiles.length == this.swiperCurrent + 2){
						this.tmpaudiofiles.splice(this.swiperCurrent,1)
						
					}
					console.log("数组",this.tmpaudiofiles)
				}
				
			}
		},
		onShow() {
		},
		// onShareAppMessage(res) {
		// 	this.shareReportUl();
		// 	return {
		// 		title: this.shareText,
		// 		path: '/pages/books/reportLearn/learn?shareId=' + this.recordId
		// 	}
		// },
		// onShareTimeline() {
		// 	this.shareReportUl();
		// 	return {
		// 		title: '来看我的学习报告',
		// 		query: 'shareId=' + this.recordId,
		
		// 	}
		// },
		onLoad(open) {
			console.log("ssssss",open)
			this.itm_id = open.phonicsId;
			this.getBookPageUl();
			
		},
		onReady() {
			let that = this;
			recorderManager.onStop((res) => {
				const tempFilePath = res.tempFilePath;
				uni.uploadFile({
					url: that.vueappurl + that.speechRecognition,
					filePath: tempFilePath,
					name: 'audioFile',
					header: {"token": that.token},
					formData: {
						'content': that.refText
					},
					success: (uploadFileRes) => {
						let a = JSON.parse(uploadFileRes.data);
						let overall = a.data.EngineResult.score;
						that.audioDuration = '';
						clearInterval(that.aud);
						that.readNoW = false;
						that.anewIf = true;
						that.voiceIf = false;
						that.staticIf = true;
						that.notRecord = 1;
						that.swiperList[that.swiperCurrent].recordIf = false;
						// that.swiperList[that.swiperCurrent].moreErr = false;
						that.dialogueIf = true;
						that.dialogTxt = res;
						that.detailsList = a.data.EngineResult.lines[0].words;
						that.detailsList1=[];
						that.detailsList.map((item,index)=>{
							if(item.type == 1 ||item.type==2||item.type==4||item.type==8){
								that.detailsList1.push(item)
							}else{
								return
							}
						})
						let detailYes = [];
						that.detailsList1.map((item,index)=>{
							if(item.score>6){
								detailYes.push(item)
							}
						})
						that.gradeNum = Math.round((detailYes.length/that.detailsList1.length)*100);
						that.swiperList[that.swiperCurrent].gradeNum = that.gradeNum;
						
						that.tmpaudiofilesItem={}
						that.tmpaudiofilesItem.score = that.gradeNum;
						that.tmpaudiofilesItem.audioUrl = a.data.filePath;
						that.tmpaudiofilesItem.pageId = that.swiperList[that.swiperCurrent].pageId;
						that.tmpaudiofilesItem.pageIndex = that.swiperList[that.swiperCurrent].pageIndex;
						that.tmpaudiofiles.push(that.tmpaudiofilesItem)
						var item = that.swiperList[that.swiperCurrent];
						item.selfAudio = a.data.filePath;
						// that.saveBookSoundRecordUl(item.selfAudio);
						item.finishedsIf = true;
						let BcountsList = []
						that.swiperList.map(item => {
							if (item.finishedsIf == true) {
								BcountsList.push(item)
							}
						})
						if (BcountsList.length == that.swiperList.length) {
							// item.moreErr = true;
							that.preserveIf = true;
						} else if (that.swiperCurrent + 1 == that.swiperList.length) {
							setTimeout(() => {
								that.$refs.pages.pagesIf = true
							}, 2000)

						}
					},
				})

			});
			
		},
		methods: {
			transClose() {
				this.transMaxlen = false;
				this.translf = false
			},
			sliderBtn(){
				this.sliderShow = !this.sliderShow
			},
			sliderChange(e) {
				this.textSize = e.detail.value
			},
			//翻译
			transBtn(){
				console.log("内容",this.swiperList)
				this.transQuery = this.swiperList[this.swiperCurrent].pageCntranslate;
				this.translf = true;
				let transListLength = 0;
				transListLength = this.transQuery.length
				if (transListLength > 120) {
					this.transMaxlen = true
				} else {
					this.transMaxlen = false
				}
			},
			closedialogue() {
				this.dialogueIf = false;
				// this.swiperList[this.swiperCurrent].moreErr = true;
			},
			getBookPageUl(){
				
				getBookPage({
					'bookId':this.itm_id
				}).then((res)=>{
					this.swiperList = res.data.pageList;
					
					this.bookLogo = res.data.bookLogo;
					this.bookName = res.data.bookName.split(" ");
					this.bookPageId = this.swiperList[0].pageId;
					this.swiperList.map((item, index) => {
						item.finishedsIf = false;
						// item.moreErr = false;
						item.recordIf = false;
						item.readIf = false;
						item.selfAudio = '';
						if (item.pageContent.replace('<br/>', '').length > 130) {
							item.lengthif = false
						} else {
							item.lengthif = true
						}
						let Illustrated = item.pageContent.split("<br/>");
						item.finishedsIf = false;
						this.contents.push(Illustrated)
					});
					this.contents_item = [];
					this.contents.map((item, index) => {
						let contents_item2 = [];
						item.map((itm, inx) => {
							contents_item2.push(itm.split(" "));
						})
						this.contents_item.push(contents_item2)
					})
					console.log("听绘本书本",res)
				})
			},
			
			// 开始录音
			voiceRecord1() {
				Audio.stop();
				let innerAudioContext = null;
				if (uni.createInnerAudioContext) {
					innerAudioContext = uni.createInnerAudioContext();
				} else {
					innerAudioContext = uni.createAudioContext();
				}
				this.detailsList = [];
				this.dialogTxt = '';
				this.anewIf = false;
				this.voiceIf = true;
				this.staticIf = false;
				
				this.audioDuration = parseInt(this.swiperList[this.swiperCurrent].pageDuration) + 10;
				this.aud = setInterval(() => {
					this.audioDuration--;
					if (this.audioDuration == 0) {
						clearInterval(this.aud)
					}
				}, 1000)
				this.notRecord = 2;
				this.swiperList[this.swiperCurrent].recordIf = true;
				
				/*引擎启动成功，可以启动录音机开始录音，并将音频片传给引擎*/
				const options = {
					duration: this.audioDuration * 1000, //指定录音的时长，单位 ms
					sampleRate: 16000, //采样率
					format: 'mp3', //音频格式，有效值aac/mp3
				};
				//开始录音,在开始录音回调中feed音频片
				recorderManager.start(options);
				//监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
				recorderManager.onFrameRecorded((res) => {
					const {
						frameBuffer
					} = res
				});
			},
			/*调用微信停止录音接口，并触发服务端返回评测结果*/
			stopRecord() {
				this.readNoW = false;
				this.audioDuration = '';
				clearInterval(this.aud);
				this.anewIf = true;
				this.voiceIf = false;
				this.staticIf = true;
				this.notRecord = 1;
				this.swiperList[this.swiperCurrent].recordIf = false;
				// this.swiperList[this.swiperCurrent].moreErr = false;
				/******先把微信录音机停掉,再停掉驰声引擎******/
				recorderManager.stop();
			},
			stopTouchMove() {
				let item = this.swiperList[this.swiperCurrent];
				if (item.recordIf) {
					return true
				} else {
					return false
				}
			},
			swiperChange(val) {
				this.swiperList[this.swiperCurrent].moreErr = false;
				this.swiperCurrent = val.detail.current;
			},
			// 播放录音
			voiceFn() {
				let item = this.swiperList[this.swiperCurrent];
				if (item.recordIf) return
				this.detailsList = [];
				this.voiceLabaIf = false;
				// console.log(this.swiperCurrent, item.moreErr)
				// item.moreErr = false;
				
				voiceStart(this.formalUrl + this.audioUrl).then(() => {
					item.senCol = 'cl-black3';
					
				})
				Audio.onEnded(() => {
					// item.moreErr = true;
					this.voiceLabaIf = true;
					if (item.readIf == true) {
						item.readIf = false;
					}
				})
			},
			// 提示音
			hintVoice() {
				if (this.readIf) return
				Audio.stop();
				this.preserveIf = false;
				this.readIf = false;
				this.anewIf = false;
				this.dialogueIf = false;
				voiceStart(this.imageUrl + 'bdspeech_recognition_start.mp3').then(() => {
					this.voiceRecord1();
					this.readNoW = true;
				});
			},
			// 播放已录
			playReadFn() {
				if (this.swiperList[this.swiperCurrent].recordIf) return
				if (this.readIf) {
					Audio.stop();
					this.readIf = false;
				} else {
					this.readIf = true;
					this.audioUrl = this.swiperList[this.swiperCurrent].selfAudio;
					voiceStart(this.audioUrl).then(() => {
						this.readIf = false;
					});
				}
			},
			// 开始
			prepareFn() {
				setTimeout(() => {
					this.transTips = false
				}, 3000)
				this.prepareIf = true;
				this.staticIf = true;
				this.audioUrl = this.swiperList[0].pageAudiofile;
				this.refText = this.bookName + ' ' + this.swiperList[0].pageContent;
				this.dataItem = this.swiperList[0];
			},
			// 切换模式
			patternFn() {
				this.patternIf = !this.patternIf;
				if (this.patternIf == true) {
					// this.$api.msg('录音自动翻页模式');
				} else {
					// this.$api.msg('录音手动翻页模式');
				}
			},
			// 加分
			
			addFn() {
				this.anewIf = false;
				this.dialogueIf = false;
				this.swiperCurrent++;
			},
			// 保存
			saveReadFn() {
				this.saveReadIf = true;
				this.saveXsIf = false;
				let gradeNumlist = [];
				this.swiperList.map((item,index)=>{
					gradeNumlist.push(item.gradeNum)
				})
				let gradeNumTatal = 0;
				for(var i = 0;i<this.swiperList.length;i++){
					gradeNumTatal+=this.swiperList[i].gradeNum
				}
				this.gradeTatal = Math.round(gradeNumTatal/this.swiperList.length);
			
				pushBookRecord({
					bookId:this.bookId,
					pageDtoList:this.tmpaudiofiles
				}).then((res)=>{
					console.log("上传书页录音",res)
					
				})
				setTimeout(() => {
					this.saveReadIf = false;
					this.shareIf = true;
				}, 1500)

			},
			saveBookSoundRecordUl(audioUrl){
				pushBookRecord({
					bookIdentifier:this.bookIdentifier,
					bookPageId:this.bookPageId,
					audioUrl:audioUrl
				}).then((res)=>{
					console.log("上传成功",res)
				})
			},
		
			returnJump() {
				Audio.stop();
				uni.reLaunch({
					url: 'letterBookIndex'
				})

			},
			shareFn(type) {
					Audio.stop();
				if (type == 1) {
					uni.reLaunch({
						url: 'letterBookIndex'
					})
				} else if (type == 2) {
					uni.reLaunch({
						url: 'letterBookIndex'
					})
				} else if (type == 3) {
					uni.reLaunch({
						url: 'letterBookIndex'
					})
				}
			},
			Jump() {
				Audio.stop();
				uni.reLaunch({
					url: 'letterBookIndex'
				})

			}
		}
	}
</script>

<style lang="less" scoped>
	.vip_box{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: linear-gradient(0deg, #FFFFFF 0%, #C9E0F6 100%);
		z-index: 999;
		.head {
			margin-top: 10rpx;
			top: 3vh;
			left: 30rpx;
			.return_img {
				width: 35rpx;
				height: 35rpx;
			}
		}
		.img_box{
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -280rpx;
			margin-top: -140rpx;
			.img_viptips{
				width: 560rpx;
				height: 280rpx;
			}
			.vip_bottom_left{
				position: absolute;
				bottom: 13rpx;
				left: 198rpx;
				width: 160rpx;
				height: 40rpx;
				
			}
			.vip_bottom_right{
				position: absolute;
				bottom: 13rpx;
				right: 22rpx;
				width: 160rpx;
				height: 40rpx;
				
			}
		}
	}
	.sliding {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		.sliding_box {
			position: absolute;
			display: flex;
			left: 50vw;
			bottom: 10vh;
			z-index: 999;
		}
	}

	.save_xsa {
		position: absolute;
		top: 62%;
		left: 66%;
		.save_xs {
			height: 60rpx;
			width: 100rpx;
		}
	}


	.save_text {
		width: 94rpx;
		color: #0B815F;
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

	.beginRead_img {
		width: 135rpx;
		height: 48rpx;
		right: 220rpx;
		bottom: 18vh;
	}

	.pattern {
		width: 216rpx;
		height: 42rpx;
		font-family: PingFang SC;
	}

	.hint_img {
		width: 553rpx;
		height: 249rpx;
	}

	.voiceLaba {
		top: 4rpx;
		left: 4rpx;
		width: 34rpx;
		height: 36rpx;
	}

	.read_img {
		width: 40rpx;
		height: 40rpx;
	}

	.schema {
		top: 30vh;
		right: 40rpx;

		image {
			width: 41rpx;
			height: 41rpx;
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

	.swiperitem {
		pointer-events: none;
	}
	.sliderShow{
		position: absolute;
		left: 35%;
		top: 15vh;
		width: 300rpx;
		height: 50rpx;
		background: #aaaaff;
		box-shadow: 0 0 2rpx 0 rgba(0, 0, 0, 0.4);
		z-index: 100;
		line-height: 40rpx;
		border-radius: 10rpx;
	}
	.awarded {
		z-index: 99;

		.awarded_num {
			transition: 0.8s;
			transform: translate(-74vh, -42vh);
		}
	}

	.dialogue {
		bottom: 0;
		height: 170rpx;
		background: rgba(0, 0, 0, 0.6);
		animation: myfirstup 0.3s;

		.long_img {
			top: -20rpx;
			left: 45rpx;
			width: 129rpx;
			height: 95rpx;
		}

		.long_but {
			width: 53rpx;
			height: 56rpx;
		}

		.long_txt {
			font-family: PingFang SC;
			width: 600rpx;
			height: 126rpx;
			border-radius: 5rpx;
		}
		.gradeBox{
			position: absolute;
			top: -10rpx;
			right: 100rpx;
			width: 120rpx;
			height: 70rpx;
			background: url(https://readrsc.oss-cn-hangzhou.aliyuncs.com/read61v2_rsc/DEFT_IMG/wx/gradeBg.png) no-repeat;
			background-size: 100% 100%;
			.gradeTop{
				width: 100%;
				margin-top: -50rpx;
				display: flex;
				justify-content: center;
				.gradeOne{
					margin-top: 5rpx;
					.gradeOneImg{
						width: 30rpx;
						height: 30rpx;
					}
				}
				.gradeTwo{
					// margin-top: 5rpx;
					.gradeTwoImg{
						width: 30rpx;
						height: 30rpx;
					}
				}
				.gradeThree{
					margin-top: 5rpx;
					.gradeThreeImg{
						width: 30rpx;
						height: 30rpx;
					}
				}
			}
			.gradeBoxTxt{
				width: 100%;
				margin-top: 3rpx;
				text-align: center;
			}
		}
	}

	@keyframes myfirstup {
		from {
			height: 0;
		}

		to {
			height: 170rpx;
		}
	}

	.head {
		top: 3vh;
		left: 35rpx;
		.return_img {
			width: 35rpx;
			height: 35rpx;
		}
		.iconguanbi1 {
			font-size: 28rpx;
		}
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

	.cot_img {
		width: 260rpx;
		height: 260rpx;
		box-shadow: 1rpx 0 9rpx 0 rgba(46, 36, 28, 0.23);
	}

	.translation1 {
		position: absolute;
		right: 10rpx;
		bottom: 20rpx;
		// top: 88rpx;
		width: 135rpx;
		// height: 150rpx;
		background: rgba(0, 0, 0, 0.75);
		border-radius: 10rpx;
		padding: 5rpx;

		.trans_close {
			position: absolute;
			top: -5rpx;
			right: -5rpx;
			width: 20rpx;
			height: 20rpx;
		}
	}

	.translation2 {
		position: absolute;
		right: 10rpx;
		// bottom: 20rpx;
		top: 50rpx;
		width: 135rpx;
		height: 240rpx;
		background: rgba(0, 0, 0, 0.75);
		border-radius: 10rpx;
		padding: 5rpx;
		justify-content: center;
		flex-direction: column;
		overflow: auto;

	}

	.trans_close1 {
		position: absolute;
		top: 45rpx;
		right: 2rpx;
		width: 20rpx;
		height: 20rpx;
	}

	.cot_article {
		width: 280rpx;
		height: 250rpx;
		display: flex;
		flex-direction: column;

		// z-index: 999;
		.text_left {
			margin-top: 50rpx;
			display: flex;
			// align-items: center;
			justify-content: center;
			flex-direction: column;
			height: 180rpx;
			width: 250rpx;
			overflow: auto;

		}

		.text_left_box1 {
			margin-top: 50rpx;
			position: absolute;
			top: 0;

			justify-content: center;
			flex-direction: column;
			height: 200rpx;
			width: 250rpx;
			overflow: auto;
			text-align: center;
			z-index: 999;
				background: #0B815F;
			.text_item {
				line-height: 40rpx;
				.spacer {
					line-height: 40rpx;
					// word-wrap: break-word;
					// word-break:keep-all;
				}
			}
		}

		.text_left_box2 {
			margin-top: 50rpx;
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
			height: 200rpx;
			width: 250rpx;
			overflow: auto;
			z-index: 999;
			.text_item {
				line-height: 40rpx;
				.spacer {
					line-height: 40rpx;
					// word-wrap: break-word;
					// word-break:keep-all;
				}
			}
		}
	}
	.transBtn{
		top: 3vh;
		position: absolute;
		left: 420rpx;
		// top: 50rpx;
		color: #00a475;
		width: 50rpx;
		min-height: 32rpx;
		line-height: 32rpx;
		text-align: center;
		background: #FFFFFF;
		box-shadow: 0 0 2rpx 0 rgba(0, 0, 0, 0.4);
		border-radius: 5rpx;
	}
	.transBtn1{
		top: 3vh;
		position: absolute;
		left: 350rpx;
		// top: 50rpx;
		color: #00a475;
		width: 50rpx;
		min-height: 32rpx;
		line-height: 32rpx;
		text-align: center;
		background: #FFFFFF;
		box-shadow: 0 0 2rpx 0 rgba(0, 0, 0, 0.4);
		border-radius: 5rpx;
	}
	.transTips {
		position: absolute;
		left: 450rpx;
		top: 50rpx;

		// text-align: center;
		.transTipsicon {
			width: 0;
			height: 0;
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-top: 20px solid #00a475;

			animation: shou1 1s infinite;
		}

		.transTipstxt {
			font-size: 16rpx;
			color: #00a475;
			animation: shou1 1s infinite;
		}
	}

	@keyframes shou1 {
		0% {
			transform: translate3d(0, 0, 0);
		}

		50% {
			transform: translate3d(0, 4rpx, 0);
		}

		100% {
			transform: translate3d(0, 0, 0);
		}
	}

	.share {
		width: 340rpx;

		.share_img {
			height: 285rpx;
			.showindex{
				z-index:999
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
</style>
