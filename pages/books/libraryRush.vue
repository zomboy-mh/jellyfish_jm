<template>
	<view class="zhezhaocengBa">
		<view class="position-a wh z-index-">
			<image class="wh" src="http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/letter_bg.png" mode=""></image>
		</view>
		<!-- 序号 -->
		<view class="serial flex align-center">
			<!-- <view @tap="returnJump" class="icon iconguanbi1 cl-white padding-lr"></view> -->
			<view class="head flex align-center position-a">
				<image @tap="returnJump" class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="serial_box">
				<scroll-view class="wh" scroll-x scroll-with-animation :scroll-left="scrollLeft">
					<view class="position-r height flex align-center" :style="{right:xhLeft+'px'}"
						style="transition: 0.3s;">
						<view v-for="(serIm,serIx) in itemlist" :key="serIx" @tap="serialFn(serIx)"
							class="serial_item  flex-shrink text-center">
							<view
								:class="[serIx==serLockIx?'serial_Not':'serial_list',serIm.serialIf?'serial_ready':'']"
								class="font-16 margin-auto font-bold">
								{{serIx+1}}
							</view>
						</view>
						<view v-if="completeIf" class="padding-lr-10">
							<view @tap="completeFn" class="submit cl-white flex-shrink text-center font-15 font-weight5">提交</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<!-- 查看全文 -->
		<!-- <view class="lookbook" @tap="ifbook = true">
			<image class="lookbook_img" :src="imageUrl + 'lookbook.png'" mode=""></image>
		</view> -->
		<view class="book" v-if="ifbook">
			<view class="zhezhaocengBa" @tap="ifbook = false"></view>
			<view class="book_box">
				<view @tap="ifbook = false" class="icon iconguanbi2 cl-white"></view>
				<view class="book_length font-14 cl-black9 padding-left-10">{{swiperCurrent + 1}}/{{swiperList.length}}
				</view>

				<swiper class="swiper" :current="swiperCurrent" @change="swiperChange">
					<swiper-item v-for="(item,index) in swiperList" :key="index">
						<view class="content flex justify-center">
							<view class="cot_img bg-white">
								<image class="cot_img_item"
									:src="formalUrl + item.img_url + '?x-oss-process=style/w630h600'" mode="aspectFit">
								</image>
							</view>
							<view class="cot_article margin-left">
								<view class="wh flex-vertical hidden scroll">
									<view class="padding-bottom-50">
										<view class="text_left" v-if="index == 0">
											<view v-if="index == 0" class="font-22 font-bold">
												<span v-for="(items,indexs) in bookName" :key="indexs">
													{{items + ' '}}
												</span>
											</view>
											<view v-if="index == 0" class="font-18 margin-top-10"
												v-for="(itm,indx) in contents_item[0]" :key="indx">
												<span v-for="(itm1,indx1) in itm" :key="indx1">
													{{itm1 + ' '}}
												</span>
											</view>
										</view>
										<view :class="item.lengthif? 'text_left_box2':'text_left_box1'"
											v-if="index > 0">
											<view class="font-20 text_item" v-for="(itm,indx) in contents_item[index]"
												:key="indx">
												<span class="spacer" v-for="(itm1,indx1) in itm" :key="indx1">
													{{itm1 + ' '}}
												</span>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 内容 -->
		<view class="itemCard" @touchmove="touchmove" @touchstart="touchstart" @touchend="touchend">
			<view class="font-16 font-weight5 padding-top-20">{{exsDesc}}</view>
			<view v-if="questions.questionTypes == 'choose'">
				<view class="flex questionCard">
					<image v-if="imageif" class="judge_img radius-18 position-r" :src="formalUrl + questions.image"
						mode="aspectFit">
					</image>
					<image v-if="questions.audio" class="voice_laba" @tap="voiceFn" :src="imageUrl + 'voiceLaba_g.png'"
						mode=""></image>
					<!-- <view v-if="imageif" class="font-18 cl-black font-weight5 margin-left-50 voice_content">{{questions.content}}</view> -->
					<view v-if="!imageif" :class="questions.content.length > 70 ?'font-15':'font-18'"
						class=" cl-black font-weight5 margin-left-20 voice_content">
						{{questions.content}}

					</view>

				</view>
				<view v-if="imageif" class="padding-bottom answer_box1">
					<view v-if="imageif" class="font-18 cl-black font-weight5 voice_content">{{questions.content}}
					</view>
					<!-- <view v-if="!imageif" class="font-18 cl-black font-weight5 margin-left-50 voice_content">{{questions.content}}</view> -->
					<view class="answer_box">
						<view class="answer padding-top-20" v-for="(item,index) in questions.items" :key="index">
							<view @tap="answerFn(index)" class="answer_img">
								<image v-show="!item.choiceIf" :src="imageUrl + 'aggCs1.png'" mode="aspectFit"></image>
								<view v-show="item.choiceIf">
									<image v-show="item.resultIf" :src="imageUrl + 'eggDui1.png'" mode="aspectFit">
									</image>
									<image v-show="!item.resultIf" :src="imageUrl + 'aggCuo1.png'" mode="aspectFit">
									</image>
								</view>
							</view>
							<image class="wh" v-show="item.image" :src="formalUrl + item.image" mode="aspectFit">
							</image>
							<view v-if="item.value" :class="item.value.length>35?'font-13':'font-16'"
								class="cl-black font-weight5 answer_value">
								{{item.value}}
							</view>
						</view>
					</view>

				</view>
				<view v-if="!imageif" class="flex flex-wrap answer_box2">
					<view class="answer padding-top-20  flex align-center" v-for="(item,index) in questions.items"
						:key="index">
						<view @tap="answerFn(index)" class="answer_img">
							<image v-show="!item.choiceIf" :src="imageUrl + 'aggCs1.png'" mode="aspectFit"></image>
							<view v-show="item.choiceIf">
								<image v-show="item.resultIf" :src="imageUrl + 'eggDui1.png'" mode="aspectFit"></image>
								<image v-show="!item.resultIf" :src="imageUrl + 'aggCuo1.png'" mode="aspectFit"></image>
							</view>
						</view>
						<image v-if="item.audio" class="voice_laba" @tap="voiceFnitem(item.audio)"
							:src="imageUrl + 'voiceLaba_g.png'" mode=""></image>
						<view :class="item.value.length>35?'font-13':'font-16'"
							class="cl-black font-weight5 answer_value">
							{{item.value}}
							<!-- they both come from a wheat plant the both come from a wheat plant weater -->
						</view>
					</view>
				</view>
			</view>
			<!-- 判断 -->
			<view v-if="questions.questionTypes == 'judge'" class="questionCard">
				<view  class="font-18 cl-black font-weight5">
					{{questions.content}}
				</view>
				<image v-if="questions.judgeType == 2" class="voice_laba" @tap="voiceFn" :src="imageUrl + 'voiceLaba_g.png'"
					mode=""></image>

				<view v-if="questions.judgeType == 1">
					<view class="judge_txt　flex">
						<image class="voice_laba margin-top-20" @tap="voiceFn" :src="imageUrl + 'voiceLaba_g.png'" mode="">
						</image>
						<view class="font-18 cl-black font-weight5 margin-left-14 margin-top-20">{{questions.content}}
						</view>
					</view>


					<view class="padding-bottom flex align-center">
						<view class="padding-top-20 flex align-center judge_answers margin-top-50"
							v-for="(item,index) in questions.items" :key="index">
							<view @tap="answerFn(index)" class="answer_img">
								<image v-show="!item.choiceIf" :src="imageUrl + 'aggCs1.png'" mode="aspectFit"></image>
								<view v-show="item.choiceIf">
									<image v-show="item.resultIf" :src="imageUrl + 'eggDui1.png'" mode="aspectFit">
									</image>
									<image v-show="!item.resultIf" :src="imageUrl + 'aggCuo1.png'" mode="aspectFit">
									</image>
								</view>
							</view>
							<view class="font-19 cl-black font-weight5">{{item.key}}</view>
						</view>
					</view>
				</view>
				<view class="flex align-center" v-if="questions.judgeType != 1">

					<view style="margin-right: 130rpx;">
						<image class="judge_img2 radius-18 " :src="formalUrl + questions.image" mode="aspectFit">
						</image>
					</view>

					<view class="padding-bottom ">
						<view class="padding-top-20 flex align-center judge_answers"
							v-for="(item,index) in questions.items" :key="index">
							<view @tap="answerFn(index)" class="answer_img">
								<image v-show="!item.choiceIf" :src="imageUrl + 'aggCs1.png'" mode="aspectFit"></image>
								<view v-show="item.choiceIf">
									<image v-show="item.resultIf" :src="imageUrl + 'eggDui1.png'" mode="aspectFit">
									</image>
									<image v-show="!item.resultIf" :src="imageUrl + 'aggCuo1.png'" mode="aspectFit">
									</image>
								</view>
							</view>
							<view class="font-19 cl-black font-weight5">{{item.key}}</view>
						</view>
					</view>
				</view>


			</view>
			<!-- 填空 -->
			<view v-if="questions.questionTypes == 'fill'"class="questionCard">
				<view class="flex padding-top-20" >
					<image class="judge_img radius-18 " :src="formalUrl + questions.image" mode="aspectFit">
					</image>
					<view class="padding-top position-r" style="padding-left: 20rpx;">
						<view class="flex flex-wrap filltext">
							<view class="self-end font-19" v-for="(item,index) in questions.items" :key="index"
								style="padding-right: 6rpx;">
								<view v-if="item.key == '____'" class="judge_input position-r text-center"
									:style="'width:'+ item.answer.length * 3 + 2 +'rpx'">
									<view v-if="questions.publishIf" class="judge_answer position-a"
										style="bottom: 0;right: 0;">
										<image class="wh" v-if="!item.answerIf" :src="imageUrl + 'tzCha.png'"
											mode="aspectFit"></image>
										<image class="wh" v-if="item.answerIf" :src="imageUrl + 'tzGou.png'"
											mode=" aspectFit"></image>
									</view>
									<input class="padding-lr-10 judge_text" :disabled="questions.publishIf" type="text"
										v-model="item.filling" />
								</view>
								<view v-else>{{item.key}}</view>
							</view>
						</view>
						<view v-if="questions.publishIf" class="position-a" style="bottom: 20rpx;">
							<view class="font-19">正确答案：</view>
							<view class="flex flex-wrap font-18">
								<view v-for="(item,index) in questions.items" :key="index" style="padding-right: 6rpx;">
									<view v-if="item.key == '____'" class="cl-00A475">{{item.answer}}</view>
									<view v-else>{{item.key}}</view>
								</view>
							</view>
						</view>
						<view v-if="!questions.publishIf" @tap="judgeSubmit"
							class="submit position-a font-18 cl-white font-weight5 text-center radius-9">提交
						</view>
					</view>
				</view>
			</view>
			<!-- 拖拽 -->
			<view v-if="questions.questionTypes == 'reorder'" class="reorderCard">
			
				<movable-area class="easydrags" id="areaBox0">
					<view class="easydragQuestion" >
						<view class="easydragitem font-16 " @touchstart.stop="touchStart(index,$event)" @touchmove="touchMove" @touchend="touchEnd(item,index)"
							v-for="(item,index) in easydragQues" :key="index" :id="'appLi' + index">
							{{item.key}}
						</view>
					</view>
					<movable-view v-if="moviewShow"  :animation="false"  :x="moveX" :y="moveY" direction="all"   class="easydragmov font-16 " mode="widthFix">
						{{touchItem}}
					</movable-view>
					<view class="amswerTxt font-16 cl-black font-weight5 padding-top-8 padding-bottom-8"> 排序结果</view>
					<view class="easydragAnswer" >
					<view class="easydragitem font-16" v-for="(item,index) in easydragAnswer" :key="index">
						<view v-if="submitIf" :class="item.isCorrectIf?'cl-00A475':'cl-F94600'">{{item.key}}</view>
						<view class="wh" v-if="!submitIf">{{item.key}}</view>
					</view>
					<view v-if="submitIf">
						<image v-if="!questions.isElectIf" class="result_img padding-right-20":src="imageUrl + 'tzCha.png'" mode="aspectFit"></image>
						<image v-if="questions.isElectIf" class="result_img padding-right-20":src="imageUrl + 'tzGou.png'" mode="aspectFit"></image>
					</view>
					</view>
					<view v-if="isMove" @tap="reorderSubmit" class="reorder_submit position-a font-18 cl-white  text-center">提 交</view>
					<view v-if="isStartover" @tap="reorderStartover" class="reorder_startover position-a font-18 cl-white  text-center">重 来</view>
				</movable-area>
				
			</view>
		</view>
		<!-- 分享 -->
		<view v-if="shareIf" class="zhezhaoceng z-index4">
			<view @tap="shareIf = false" class="zhezhaocengBa"></view>
			<view class="flex-vertical-level wh position-r z-index">
				<view class="share animated bounceInDown">
					<view class="share_img width position-r">
						<view class="share_tit1 width text-center position-a font-20 font-bold cl-white showindex">
							非常棒
						</view>
						<view class="share_tit2 width text-center position-a font-15 font-bold showindex">
							小朋友，恭喜你完成习题。
						</view>
						<view class="star_move showindex">
							<image class="yellowstar1" :src="imageUrl + 'yellowstar1.png'"></image>
							<image class="redstar1" :src="imageUrl + 'redstar1.png'"></image>
						</view>
						<view style="bottom: 36rpx;" class="width text-center position-a font-18 font-bold cl-0B0B4B showindex">
							<button class="button" @tap="Jump" hover-class="none">{{nextname}}</button>
						</view>
						<image class="wh " :src="imageUrl + 'share1.png'" mode=""></image>
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
	import {
		Audio,
		voiceStart
	} from "@/utils/utils";
	import {imageUrl,formalUrl} from '../../config/index.js'
	import {getBookQuiz,pushQuizRecord} from'../../api/index.js'
	export default {
		components: {
			
		},
		data() {
			return {
				mErrorVoice: imageUrl + "audio/error.mp3",
				mRightVoice: imageUrl + "audio/right.mp3",
				formalUrl: formalUrl,
				imageUrl: imageUrl,
				scrollLeft: 0,
				serLockIx: -1, //当前题号
				xhLeft: 0,
				cellW: 80,
				cellH: 40,
				questions: {},
				itemlist: [], //总数组
				resultList: [], //拖拽后数组
				correctList: [], //正确数组
				audioUrl: '',
				isMove: false,
				submitIf: false,
				degreeIf: false,
				completeIf: false,
				degreeNum: 0,
				howLongDate: 0, //记录时间
				shareIf: false,
				addEggs: 0,
				nextpath: '',
				nextname: '完成',
				cardeggs: 0,
				exsDesc: '',
				imageif: false,
				inputnum: 20,
				swiperList: [],
				swiperCurrent: -1,
				contents: [],
				contents_item: [],
				ifbook: false,
				
				translateX: 0, // 位移x坐标 单位px
				translateY: 0, // 位移y坐标 单位px
				distance: 0, // 双指接触点距离
				scale: 1, // 缩放倍数
				rotate: 0, // 旋转角度
				oldRotate: 0, // 上一次旋转停止后的角度
				startMove: { // 起始位移距离
					x: 0,
					y: 0,
				},
				moveX: 0,
				moveY: 0,
				areaBoxInfo: null,
				moviewShow: false,
				easydragQues: [],
				oldEasydragQues:[],
				easydragAnswer: [],
				x: 0,
				y: 0,
				old: {
					x: 0,
					y: 0
				},
				touchItem:'',
				isStartover:false,
				isPay:false,
				quizDtoList:[]
			}
		},
		computed: {
			moveViewSize() {
				if (this.areaBoxInfo && this.areaBoxInfo.width) {
					console.log("完成")
					return this.areaBoxInfo.width / 5
				} else {
					return 0
				}
			}
		},
		watch: {
			degreeIf() {
				if (this.degreeIf == true) {
					this.degreeNum = 0;
					this.itemlist.forEach(item => {
						if (item.serialIf == true) {
							this.degreeNum++;
							if (this.degreeNum == this.itemlist.length) {
								this.completeIf = true;
							}
						}
					})
				}
			},
			serLockIx() {
				Audio.stop();
				let item = this.itemlist[this.serLockIx];
				
				this.questions = {};
				this.questions = item;
				console.log("第几题", item)
				if (this.questions.exsDesc) {
					let Illustrated = this.questions.exsDesc.split(".")
					this.exsDesc = Illustrated[1];
					if (item.questionTypes == 'reorder') {
						this.exsDesc = '拖拽方块字按照正确顺序排序到下面的方框中。',
						
						this.$nextTick(() => {
							console.log("运行到这1")
							setTimeout(() => {
								this.resetListDom();
							}, 200)
						})
					}
				}

				if (item.audio) {
					this.audioUrl = item.audio;
				}
				if (item.image) {
					this.imageif = true
				} else {
					this.imageif = false
				}
				if (item.questionTypes == 'reorder') {
					let list = item.items;
					list.map(itm => {
						itm.strLength = itm.key.length * 10 + 10;
					})
					var orginUp = list.concat([]);
					var upData = orginUp.sort((x, y) => {
						return (x.answer > y.answer) ? 1 : -1;
					});
					this.correctList = upData;

				}
				if (this.completeIf == false) {
					this.degreeIf = false;
				}
			},
			audioUrl() {
				Audio.stop();
				this.voiceFn();
			},

			//
		},
		onLoad(open) {
			this.bookId = uni.getStorageSync('bookId')
			this.token = uni.getStorageSync('token');
			this.getBookDetailUl();

		},
		methods: {
		
			getDomInfo(id, callBack) {
				const query = uni.createSelectorQuery().in(this);
				query.select('#' + id)
					.boundingClientRect()
					.exec(res => {
						callBack(res[0]);
					});
			},
			resetListDom() {
				setTimeout(()=>{
					let _this = this;
					this.getDomInfo('areaBox0', info => {
						_this.areaBoxInfo = info;
						_this.easydragQues.forEach((item, idx) => {
							_this.getDomInfo('appLi' + idx, res => {
								item.x = res.left - info.left;
								item.y = res.top - info.top;
							});
						});
					});
				},300)
				
				
			},
			touchStart(index, event) {
				this.touchItem = this.easydragQues[index].key;
				this.moviewShow = true;
				this.moveX = this.easydragQues[index].x;
				this.moveY = this.easydragQues[index].y;
				var x = event.changedTouches[0].clientX - this.areaBoxInfo.left;
				var y = event.changedTouches[0].clientY - this.areaBoxInfo.top;
				this.inBoxXY = {
					x: x - this.easydragQues[index].x,
					y: y - this.easydragQues[index].y,
				}
			},
			touchMove(event) {
				// const touches = e.touches
				// const {
				// 	pageX: onePageX,
				// 	pageY: onePageY
				// } = touches[0]
				// this.translateX = onePageX - this.startMove.x
				// this.translateY = onePageY - this.startMove.y
				let areaBoxTop = this.areaBoxInfo.top;
				let areaBoxLeft = this.areaBoxInfo.left;
				
				var x = event.changedTouches[0].clientX - areaBoxLeft;
				var y = event.changedTouches[0].clientY - areaBoxTop;
				this.moveX = x - this.inBoxXY.x;
				this.moveY = y - this.inBoxXY.y;
			},
			touchEnd(item,index) {
				
					var that = this;
					const query = uni.createSelectorQuery().in(that);
					query.select('.easydragAnswer').boundingClientRect(data => {
						let X = this.moveX - data.left;
						let Y = Math.abs(this.moveY - data.top);
						if (Y < 320 && Y > 100 && X < 650 && X > -135) {
							console.log("里面",X,Y)
							this.isStartover = true
							let easydragQuesList = [];
							this.easydragQues.map((itm,inx)=>{
								if(index == inx){
									this.easydragQues.splice(index,0)
									
								}else{
									easydragQuesList.push(itm)
								}
							})
							this.easydragQues = easydragQuesList;
							this.easydragAnswer.push(item);
							this.resetListDom();
							if(this.easydragQues.length == 0){
								this.isMove = true;
								this.resultList = this.easydragAnswer
							}
							
						} else {
							console.log("外面",X,Y)
							return
						}
					}).exec();
					this.moviewShow = false;
			
			},
			saveBookQuizRecordUl(value, data) {
				let item = this.itemlist[this.serLockIx];
				
				let quizDtoListItem = {};
				quizDtoListItem.answer = data;
				quizDtoListItem.isCorrect = value;
				quizDtoListItem.quizId = item.id;
				quizDtoListItem.quizIndex = item.quizIndex;
				quizDtoListItem.quizType = item.questionTypes
				
				this.quizDtoList.push(quizDtoListItem)
				console.log("做完", this.quizDtoList)
			},
			swiperChange(val) {
				this.transTips = false;
				this.swiperCurrent = val.detail.current;
				
			},
			getBookDetailUl() {
				getBookQuiz({
					'bookId':this.bookId
				}).then(res => {
					let list = res.data;
					console.log("题目", list)
					list.map(item => {
						item.serialIf = false;
						item.isCorrectIf = false;
						if (item.questionTypes == 'fill') {
							item.publishIf = false;
						}
						if (item.questionTypes == 'reorder') {
							this.easydragQues = item.items;
							this.easydragQues.map((item,index)=>{
								item.x = 0;
								item.y = 0
							})
							this.oldEasydragQues = this.easydragQues;
						}
						item.items.map(items => {
							items.resultIf = false;
							if (items.key == '____') {
								items.filling = '';
								items.answerIf = false;
							}
						})
					})
					this.itemlist = list;
					this.serLockIx = 0;
					setTimeout(() => {
						let sub = uni.createSelectorQuery().select(".serial_item");
						sub.boundingClientRect(data => {
							this.serialWidth = data.width;
							list.map((ite, idx) => {
								ite.xhLefts = data.width * (idx + 1);
							})
						}).exec()
					})
				})
			},
			// 播放录音
			voiceFn() {
				voiceStart(this.formalUrl + this.audioUrl);
			},
			// 播放录音
			voiceFnitem(item) {

				Audio.stop();
				voiceStart(this.formalUrl + item);
			},
			// 点击序号
			serialFn(index) {
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
			// 题目选择
			answerFn(index) {
				if (this.questions.serialIf == true) return;
				this.questions.serialIf = true;
				this.degreeIf = true;
				let item = this.itemlist[this.serLockIx].items[index];
				item.choiceIf = true;
				if (item.is_correct == false) {
					setTimeout(() => {
						voiceStart(this.mErrorVoice)
					}, 500)
					item.resultIf = false;
					this.saveBookQuizRecordUl(0, item.key)
					this.itemlist[this.serLockIx].items.map(list => {
						if (list.is_correct == true) {
							list.choiceIf = true;
							list.resultIf = true;
						}
					})
				} else {
					item.resultIf = true;
					this.saveBookQuizRecordUl(1, item.key)
					setTimeout(() => {
						voiceStart(this.mRightVoice)
					}, 500)
				}
			},
			// 填空
			judgeSubmit() {
				let item = this.itemlist[this.serLockIx];
				item.items.map(item => {
					if (item.filling == '') {
						this.$api.msg('请在横线上输入一个单词');
					} else {
						if (item.key == '____') {
							// item.filling = item.filling.replace(/\s*/g,'')
							item.filling = item.filling.trim()
							if (item.filling == item.answer) {
								item.answerIf = true;
								this.saveBookQuizRecordUl(1, item.filling)
							} else {
								item.answerIf = false;
								this.saveBookQuizRecordUl(0, item.filling)
							}
							this.questions.publishIf = true;
							this.questions.serialIf = true;
							this.degreeIf = true;
						}
					}
				})
			},
			// 拖拽
			SortChange(val) {
				if (this.isMove == false) return;
				this.resultList = [];
				this.resultList = val;

			},
			reorderStartover(){
				this.easydragAnswer = [];
				this.easydragQues = this.oldEasydragQues;
				this.resetListDom();
				this.submitIf = false;
				this.isMove =false
			},
			reorderSubmit() {
				this.submitIf = true;
				this.isStartover = false;
				this.questions.serialIf = true;
				this.degreeIf = true;
				let easydragAnswerList = [];
				let easydragAnswerValue = []
				this.easydragAnswer.map((item,index)=>{
					easydragAnswerValue.push(item.key)
					if(item.answer == index + 1){
						item.isCorrectIf = true;
						easydragAnswerList.push(item.key)
					}else{
						item.isCorrectIf = false
					}
				})
				if(easydragAnswerList.length == this.easydragAnswer.length){
					this.questions.isElectIf = true;
					this.saveBookQuizRecordUl(1, easydragAnswerValue.toString())
				}else{
					this.questions.isElectIf = false;
					this.saveBookQuizRecordUl(0, easydragAnswerValue.toString())
				}
				
				
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
				if (item.questionTypes == 'reorder') {
					if (!this.submitIf) return
				}
				// if(!this.submitIf) return
				// if (item.questionTypes == 'reorder') return
				if (this.direction < 0) {
					if (this.direction < -50) {
						if (this.serLockIx + 1 == this.itemlist.length) return;
						this.serLockIx++;

					}
				} else {
					if (this.direction > 50) {
						if (this.serLockIx == 0) return;
						this.serLockIx--;
					}
				}
			},
			
			returnJump() {
				Audio.stop();
				uni.reLaunch({
					url: 'index'
				})
			},
			completeFn() {
				console.log("结果",this.quizDtoList)
				pushQuizRecord({
					'bookId':this.bookId,
					'quizDtoList':this.quizDtoList
				}).then((res)=>{
					console.log("res",res)
				})
				this.shareIf = true;
			},
			shareFn(type) {
				Audio.stop();
				if (type == 1) {
					uni.reLaunch({
						url: 'index'
					})

				} else if (type == 2) {
					uni.reLaunch({
						url: 'libraryRush'
					})
				} else if (type == 3) {
					uni.reLaunch({
						url: 'index'
					})
				}
			},
			Jump() {
				Audio.stop();
				uni.navigateTo({
					url: 'index'
				})

			}
		}
	}
</script>

<style lang="less" scoped>
	.lookbook {
		position: absolute;
		top: 70rpx;
		right: 20rpx;
		z-index: 999;

		.lookbook_img {
			width: 41rpx;
			height: 41rpx;
		}
	}

	.vip_box {
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

		.img_box {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -280rpx;
			margin-top: -140rpx;

			.img_viptips {
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

	.book {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 99;

		.book_box {
			height: 240rpx;
			width: 520rpx;
			position: absolute;
			background: url(http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/hearHb1.png);
			background-repeat: no-repeat;
			background-size: 100% 100%;
			top: 50%;
			left: 50%;
			margin-top: -120rpx;
			margin-left: -260rpx;
			border-radius: 10rpx;

			.book_length {
				position: absolute;
				right: 10rpx;
				top: 10rpx;
			}

			.iconguanbi2 {
				position: absolute;
				right: -23rpx;
				top: -23rpx;
				font-size: 28rpx;

			}

			.swiper {
				width: 100%;
				height: 100%;

				.content {
					.cot_img {
						width: 220rpx;
						height: 220rpx;
						margin-top: 10rpx;
						margin-left: 10rpx;
						box-shadow: 1rpx 0 9rpx 0 rgba(46, 36, 28, 0.23);
						border-radius: 9rpx;

						.cot_img_item {
							padding: 5rpx;
							width: 96%;
							height: 96%;
						}
					}

					.cot_article {
						width: 280rpx;
						height: 250rpx;
						display: flex;
						flex-direction: column;

						.text_left {
							display: flex;
							// align-items: center;
							justify-content: center;
							flex-direction: column;
							height: 180rpx;
							width: 250rpx;
							overflow: auto;

						}

						.text_left_box1 {
							position: absolute;
							top: 10rpx;
							justify-content: center;
							flex-direction: column;
							overflow: auto;
							height: 200rpx;
							width: 250rpx;

							.text_item {

								.spacer {
									// word-wrap: break-word;
									// word-break:keep-all;
								}
							}

						}

						.text_left_box2 {
							display: flex;
							justify-content: center;
							flex-direction: column;
							height: 200rpx;
							width: 250rpx;
							overflow: auto;

							.text_item {
								.spacer {
									// word-wrap: break-word;
									// word-break:keep-all;
								}

							}
						}

					}
				}
			}
		}

	}

	

	.judge_input {
		// margin-top: 6rpx;
		// width: 80rpx;
		padding-top: 5rpx;
		border-bottom: 1rpx solid #000000;

		.judge_answer {
			width: 20rpx;
			height: 20rpx;
		}

		.judge_text {
			height: 30rpx;
		}
	}

	.result {
		height: 52rpx;
		width: 550rpx;
		background: rgba(255, 255, 255, 0.6);

		.result_img {
			width: 28rpx;
			height: 21rpx;
		}
		
	}
	.easydrags{
		width: 550rpx;
		height: 200rpx;
		// background: rgba(255, 255, 255, 0.6);
		.easydragQuestion {
			height: 50rpx;
			width: 550rpx;
			border: 3rpx dashed #3cbc9b;
			background: rgba(255, 255, 255, 0.6);
			border-radius: 18rpx;
			margin-top: 10rpx;
			display: flex;
		
			.easydragitem {
				margin-top: 10rpx;
				position: relative;
				padding: 0 5rpx;
				height: 30rpx;
				line-height: 30rpx;
				border-radius: 5rpx;
				background: #3cbc9b;
				color: #fff;
				margin-left: 10rpx;
				text-align: center;
				z-index: 666;
			}
		
			.amswerTxt {
				position: absolute;
				left: 10rpx;
				bottom: 60rpx;
		
			}
		}
		.easydragmov{
			
			padding: 0 5rpx;
			width: 50rpx;
			height: 30rpx;
			line-height: 30rpx;
			border-radius: 5rpx;
			background: #3cbc9b;
			color: #fff;
			margin-left: 10rpx;
			text-align: center;
			z-index: 999;
		}
		.easydragAnswer {
			height: 50rpx;
			width: 550rpx;
			border: 3rpx dashed #3cbc9b;
			background: rgba(255, 255, 255, 0.6);
			border-radius: 18rpx;
			margin-top: 10rpx;
			display: flex;
			align-items: center;
		
			.easydragitem {
				// width: 80rpx;
				padding: 0 5rpx;
				height: 30rpx;
				line-height: 30rpx;
				border-radius: 5rpx;
				background: #3cbc9b;
				color: #fff;
				margin-left: 10rpx;
				text-align: center;
			}
		}
		.reorder_submit {
			bottom: -10rpx;
			right: 100rpx;
			width: 83rpx;
			height: 40rpx;
			line-height: 40rpx;
			border-radius: 9rpx;
			background: #3cbc9b;
		}
		.reorder_startover{
			bottom: -10rpx;
			left: 100rpx;
			width: 83rpx;
			height: 40rpx;
			line-height: 40rpx;
			border-radius: 9rpx;
			background: #3cbc9b;
		}
		.result_img {
			width: 28rpx;
			height: 21rpx;
		}
	}
	.easydragQuestion {
		height: 50rpx;
		width: 550rpx;
		border: 3rpx dashed #3cbc9b;
		background: rgba(255, 255, 255, 0.6);
		border-radius: 18rpx;
		margin-top: 10rpx;
		display: flex;
		// flex-wrap:wrap;
		align-items: center;

		.easydragitem {
			margin-top: 10rpx;
			position: relative;
			// width: 100%;
			// width: 80rpx;
			padding: 0 5rpx;
			height: 30rpx;
			line-height: 30rpx;
			border-radius: 5rpx;
			background: skyblue;
			margin-left: 10rpx;
			text-align: center;
			z-index: 999;
		}

		.amswerTxt {
			position: absolute;
			left: 10rpx;
			bottom: 60rpx;

		}

		// .easydragAnswer {
		// 	position: absolute;
		// 	left: 0;
		// 	bottom: 10rpx;
		// 	height: 50rpx;
		// 	width: 550rpx;
		// 	border: 3rpx dashed #0D79DE;
		// 	background: rgba(255, 255, 255,0.2);
		// 	border-radius: 18rpx;
		// 	margin-top: 10rpx;
		// 	display: flex;
		// 	align-items: center;
		// z-index: 100;
		// 	.easydragitem {
		// 		// width: 80rpx;
		// 		padding: 0 5rpx;
		// 		height: 30rpx;
		// 		line-height: 30rpx;
		// 		border-radius: 5rpx;
		// 		background: skyblue;
		// 		margin-left: 10rpx;
		// 		text-align: center;
		// 	}
		// }
	}

	.easydragAnswer {
		height: 50rpx;
		width: 550rpx;
		border: 3rpx dashed #0D79DE;
		background: rgba(255, 255, 255, 0.6);
		border-radius: 18rpx;
		margin-top: 10rpx;
		display: flex;
		align-items: center;

		.easydragitem {
			// width: 80rpx;
			padding: 0 5rpx;
			height: 30rpx;
			line-height: 30rpx;
			border-radius: 5rpx;
			background: skyblue;
			margin-left: 10rpx;
			text-align: center;
		}
	}

	.easydrag {
		height: 250rpx;
		width: 550rpx;
		border: 3rpx dashed #0D79DE;
		background: rgba(255, 255, 255, 0.6);
		border-radius: 18rpx;
		margin-top: 10rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;
		overflow: auto;

		.reorderBox {
			// display: flex;
			// // justify-content: center;
			// flex-direction: column;
			// overflow:auto;
			padding-left: 140rpx;
			width: 800rpx;

		}
	}

	.filltext {
		width: 400rpx;
		height: 70rpx;
	}

	.submit {
		position: absolute;
		right: 100rpx;
		bottom: 13rpx;
		width: 83rpx;
		height: 38rpx;
		line-height: 38rpx;
		background: #3cbc9b;
	}

	.itemCard {
		margin-left: 12%;
		width: 100%;
		height: 100%;
		position: relative;
		
		.questionCard{
			position: absolute;
			top: 50%;
			margin-top: -170rpx;
			// margin-left: -300rpx;
			// margin-top: -300rpx;
		}
		.reorderCard{
			position: absolute;
			top: 50%;
			margin-top: -130rpx;
		}
		.judge_txt {
			width: 50%;
			margin-right: 60rpx;
		}

		.judge_img {
			width: 200rpx;
			height: 240rpx;
		}

		.judge_img2 {
			width: 180rpx;
			height: 240rpx;
		}

		.answer_box1 {
			position: absolute;
			width: 300rpx;
			height: 300rpx;
			left: 250rpx;
			top: 50%;
			margin-top: -150rpx;
			// height: 80rpx;

			.answer_box {
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;

				.answer {
					display: flex;
					justify-content: flex-start;
					width: 150rpx;
					height: 100rpx;

					.answer_value {
						padding-top: 15rpx;
						margin-left: 5rpx;
						// width: 300rpx;
						height: 60rpx;
						word-wrap: break-word;

						overflow: auto;
					}

					.voice_laba {
						width: 30rpx;
						height: 30rpx;
					}
				}
			}

		}

		.answer_box2 {
			position: absolute;
			left: 0rpx;
			top: 80rpx;

			// height: 80rpx;
			.answer {
				width: 300rpx;

				.answer_value {
					padding-top: 15rpx;
					margin-left: 5rpx;
					width: 300rpx;
					height: 60rpx;
					word-wrap: break-word;
					overflow: auto;
				}

				.voice_laba {
					width: 30rpx;
					height: 30rpx;
				}
			}
		}

		.judge_answers {
			width: 40%;
		}

		.voice_laba {
			width: 30rpx;
			height: 30rpx;
		}

		.voice_content {
			width: 560rpx;
			// height: 66rpx;
		}
	}

	.answer_img {
		padding-right: 4rpx;

		image {
			width: 58rpx;
			height: 58rpx;
		}
	}

	.serial {
		background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/mechanism_ngt_g.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		.head {
			top: 3vh;
			left: 25rpx;
			.green_back_img{
				width: 36rpx;
				height: 36rpx;
			}
		}
		.submit {
			width: 56rpx;
			height: 32rpx;
			line-height: 32rpx;
			background: #08815f;
			border: 1rpx solid #FFFFFF;
			border-radius: 9rpx;
		}

		.serial_box {
			width: 80%;
			height: 59rpx;
			margin-left: 80rpx;
			.serial_item {
				width: 40rpx;
				// line-height: 50rpx;
				color: #e7e7e7;
				.serial_list {
					width: 28rpx;
					height: 28rpx;
					line-height: 28rpx;
					background: rgba(159, 201, 242, 0.7);
					border-radius: 14rpx;
				}

				.serial_ready {
					background: #F9BF00;
					color: #FFFFFF;
				}

				.serial_Not {
					width: 35rpx;
					height: 35rpx;
					line-height: 35rpx;
					color: #fff;
					background: #9FC9F2;
					border: 2rpx solid #FFFFFF;
					border-radius: 18rpx;
				}
			}
		}
	}

	.iconguanbi1 {
		font-size: 28rpx;
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
					width: 60rpx;
					height: 60rpx;
					margin-right: 20rpx;
					animation: starmove2 3s infinite;
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
