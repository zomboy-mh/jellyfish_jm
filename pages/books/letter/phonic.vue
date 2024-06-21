<template>
	<view>
		<view class="head flex align-center position-a">
			<view @tap="returnJump" class="icon iconguanbi1 cl-3cbc9b"></view>
		</view>
		<view class="wh box">
			<view  @tap="$refs.pages.pagesIf = true" class="pagination position-a flex align-center justify-center">
				<image class="pagination_img" :src="imageUrl+'pageNum1_g.png'" mode=""></image>
				<view class="font-14 cl-black9 padding-left-10">{{swiperCurrent + 1}}/{{swiperList.length}}</view>
			</view>
			<view class="position-a wh ">
				<view  class="wh flex align-center">
					<!-- <view class="transTips" v-if="transTips">
						<view class="transTipstxt">哪里不会点哪里</view>
						<view class="transTipsicon"></view>
					</view>
					<view class="transBtn font-18" @tap="transBtn()">
						整句翻译
					</view> -->
					<swiper class="swiper width" :current="swiperCurrent" @change="swiperChange">
						<swiper-item v-for="(item,index) in swiperList" :key="index">
							<view class="content flex justify-center">
								<view class="cot_img bg-white">
									<!-- <image class="cot_img_item" :src="formalUrl + item.img_url + '?x-oss-process=style/w630h600'" mode="aspectFit"></image> -->
									<image class="cot_img_item" :src="formalUrl + item.pagePicfile " mode="aspectFit"></image>
								</view>
								<view class="cot_article margin-left">
									<view class="wh flex-vertical hidden scroll">
										<view class="padding-bottom-50">
											<view class="text_left" v-if="index == 0">
												<view v-if="index == 0" class="font-22 font-bold">
													<span v-for="(items,indexs) in bookName" :key="indexs"
														@tap="tranbtn(items)">
														{{items + ' '}}
													</span>
												</view>
												<view v-if="index == 0" class="font-18 margin-top-10"
													v-for="(itm,indx) in contents_item[0]" :key="indx">
													<span v-for="(itm1,indx1) in itm" :key="indx1" @tap="tranbtn(itm1)">
														{{itm1 + ' '}}
													</span>
												</view>
											</view>
			
											<view :class="item.lengthif? 'text_left_box2':'text_left_box1'"
												v-if="index > 0">
												<view class="font-20 text_item" v-for="(itm,indx) in contents_item[index]"
													:key="indx">
													<span class="spacer" v-for="(itm1,indx1) in itm" :key="indx1"
														@tap="tranbtn(itm1)">
														{{itm1 + ' '}}
													</span>
												</view>
											</view>
											
										</view>
									</view>
								</view>
								<image v-show="transMaxlen" @tap="transClose" class="trans_close1 z-index9"
									:src="imageUrl + 'trans_close.png'" mode="">
								</image>
								<view :class="transMaxlen?'translation2':'translation1'" v-if="translf">
									<image v-show="!transMaxlen" @tap="transClose" class="trans_close"
										:src="imageUrl + 'trans_close.png'" mode="">
									</image>
									<view class="font-15 cl-white">{{transQuery}}</view>
								<!-- 	<view class="font-13 cl-white" v-if="ukPhonetic !== ''">美:[{{ukPhonetic}}]</view>
									<view class="font-11 cl-white" v-for="(item,index) in transList" :key="index">{{item}}</view> -->
								</view>
								<view class="voiceLaba position-a">
									<image v-if="!voiceLabaIf" class="wh" :src="imageUrl + 'march_laba1_g.png'" mode="">
									</image>
									<image v-if="voiceLabaIf" @tap="voiceFnAga" class="wh"
										:src="imageUrl + 'voiceLaba_g.png'" mode=""></image>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<!-- 页数 -->
		<page-index ref="pages" :index="swiperCurrent" :list="swiperList"></page-index>
		<view v-if="shareIf" class="zhezhaoceng z-index4">
			<view @tap="shareIf = false" class="zhezhaocengBa"></view>
			<view class="flex-vertical-level wh position-r z-index">
				<view class="share1 animated bounceInDown">
					<view class="share_img width position-r">
						<view class="share_tit1 width text-center position-a font-20 font-bold cl-white z-index999">
							非常棒
						</view>
						<view class="share_tit2 width text-center position-a font-15 font-bold z-index999">
							小朋友，恭喜你完成了。
						</view>
						<view class="star_move z-index999">
							<image class="yellowstar1" :src="imageUrl + 'yellowstar1.png'"></image>
							<image class="redstar1" :src="imageUrl + 'redstar1.png'"></image>
		
						</view>
						<view style="bottom: 36rpx;" class="width text-center position-a font-18 font-bold cl-0B0B4B z-index999">
							<button class="button" @tap="Jump" hover-class="none">{{nextname}}</button>
						</view>
						<image class="wh" :src="imageUrl + 'share1.png'" mode=""></image>
					</view>
					<view class="share_but flex justify-center">
						<image @tap="shareFn(1)" class="share_but_img" :src="imageUrl + 'home.png'" mode=""></image>
						
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
	export default {
		components: {
			pageIndex,
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				// formalUrl:'https://lbzyk.read61.cn/read61v2_rsc/',
				swiperCurrent: 0,
				swiperList:[
					
				],
				voiceType:1,
				voiceUrl: '',
				shareIf:false,
				nextname: '完成',
				openGif:false,
				wordcapital:'',
				wordList:[],
				phonics_pron1:'',
				
				transTips: false,
				transMaxlen: false,
				voiceLabaIf:false,
				translf:false,
				swiperCurrent: 0,
				bookName:'',
				swiperList: [],
				contents_item: [],
				contents:[],
				iconshouIf:0,
				bookId:0,
				voiceUrl:'',
				startTime:'',
				endTime:'',
				shareIf:false,
				nextname:'完成'
			};
		},
		watch: {
			swiperCurrent() {
				Audio.stop();
				this.translf = false;
				this.iconshouIf = 0;
				this.voiceUrl = this.swiperList[this.swiperCurrent].pageAudiofile;
				
				
			},
			voiceUrl() {
				Audio.stop();
				this.voiceFn();
			},
			shareIf(){
				
			}
		},
		onLoad(open) {
			console.log("ssssss",open)
			this.itm_id = open.phonicsId;
			// this.bookId = uni.getStorageSync('phonicsId')
			// this.getHomeWorkRecoredTextUl()
			this.getPhonicsDetailUl()
		},
		methods: {
			getPhonicsDetailUl(){
				getBookPage({
					"bookId":this.itm_id
				}).then((res)=>{
					
					this.swiperList = res.data.pageList;
					this.voiceUrl = this.swiperList[0].pageAudiofile;
					this.bookName = res.data.bookName.split(" ");
					this.swiperList.map((item, index) => {
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
					console.log("sss",res)
				})
			},
			swiperChange(val) {
				this.transTips = false;
				this.swiperCurrent = val.detail.current;
			},
			// 播放录音
			voiceFn() {
				this.voiceLabaIf = false;
				voiceStart(this.formalUrl + this.voiceUrl).then(() => {
					this.voiceLabaIf = true;
				})
				Audio.onEnded(() => {
					this.swiperList[this.swiperCurrent].finishedsIf = true;
					let BcountsList = []
					this.swiperList.map(item => {
						if (item.finishedsIf == true) {
							BcountsList.push(item)
						}
					})
					if (BcountsList.length == this.swiperList.length) {
						this.shareIf = true
					} else if (this.swiperCurrent + 1 == this.swiperList.length) {
					
					}
				})
			},
			returnJump() {
				Audio.stop();
				uni.reLaunch({
					url: 'letterBookIndex'
				})
			},
			shareFn(type) {
				if (type == 1) {
					uni.reLaunch({
						url: 'letterBookIndex'
					})
				}else if (type == 3) {
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
	.head {
		top: 3vh;
		left: 35rpx;
		z-index: 100;
		.iconguanbi1 {
			font-size: 28rpx;
		}
	}
	.box {
		background: url(http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/letter_bg.png) no-repeat;
		background-size: 100% 100%;
		.transBtn{
			top: 3vh;
			position: absolute;
			left: 420rpx;
			// top: 50rpx;
			color: #00a475;
			width: 100rpx;
			min-height: 32rpx;
			line-height: 32rpx;
			text-align: center;
			background: #FFFFFF;
			box-shadow: 0 0 2rpx 0 rgba(0, 0, 0, 0.4);
			border-radius: 5rpx;
		}
	}
	.swiper {
		height: 250rpx;
		
		.content {
			.translation1 {
				position: absolute;
				right: 12rpx;
				bottom: 5rpx;
				// top: 88rpx;
				width: 145rpx;
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
				right: 12rpx;
				// bottom: 5rpx;
				top: 10rpx;
				width: 145rpx;
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
				top: 0rpx;
				right: 2rpx;
				width: 20rpx;
				height: 20rpx;
			}
	
			.cot_img {
				width: 200rpx;
				height: 200rpx;
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
					top: 0;
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
	.pagination {
		z-index: 100;
		top: 3vh;
		right: 70rpx;
		width: 76rpx;
		min-height: 32rpx;
		background: #FFFFFF;
		// box-shadow: 0 0 2rpx 0 rgba(0, 0, 0, 0.4);
		// border-radius: 5rpx;
	
		.pagination_img {
			width: 22rpx;
			height: 22rpx;
		}
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
	
			animation: shou 1s infinite;
		}
	
		.transTipstxt {
			font-size: 16rpx;
			color: #00a475;
			animation: shou 1s infinite;
		}
	}
	// .swiper {
	// 	z-index: 1;
	// 	width: 520rpx;
	// 	height: 260rpx;
	// 	position: absolute;
	// 	left: 50%;
	// 	top: 50%;
	// 	margin-left: -260rpx;
	// 	margin-top: -130rpx;
	// 	box-shadow: 1rpx 0 9rpx 0 rgba(46, 36, 28, 0.23);
	// 	border-radius: 9rpx;
	// 	background: #404040;
	// 	color: #FFFFFF;
	// 	border: 10rpx #da8726 solid;
	// 	.swiperbox{
	// 		.text_word{
	// 			width: 100%;
	// 			height: 40rpx;
	// 			line-height: 40rpx;
	// 			text-align: center;
	// 			position: absolute;
	// 			top: 50%;
	// 			margin-top: -20rpx;
	// 			.wordshow1{
	// 				position: fixed;
	// 				width: 100%;
	// 				text-align: center;
	// 				animation: starmovemin 3s 1;
	// 			}
	// 			.wordshow2{
	// 				position: fixed;
	// 				width: 100%;
	// 				text-align: center;
	// 				animation: starmovemax 3s 1;
	// 			}
				
	// 		}
	// 		@keyframes starmovemin {
	// 			0% {
					
	// 				transform: scale(1,1);
	// 			}
	// 			100% {
	// 				transform: scale(0.5,0.5);
	// 			}
	// 		}
	// 		@keyframes starmovemax {
	// 			0% {
	// 				transform: scale(1,1);
	// 			}
	// 			100% {
	// 				transform: scale(1.5,1.5);
	// 			}
	// 		}
	// 		.text_sen{
	// 			width: 100%;
	// 			margin-top: 20rpx;
	// 			height: 20rpx;
	// 			line-height: 20rpx;
	// 			text-align: center;
	// 		}
	// 	}
		
		
	// }
	.phonicRoll_gif{
		position: absolute;
		z-index: 10;
		left: 30rpx;
		bottom: 0rpx;
		width: 150rpx;
		height: 180rpx;
	}
	.share1 {
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
					width: 60rpx;
					height: 60rpx;
					margin-right: 20rpx;
					animation: starmove2 3s infinite;
				}
			}
		}
	
		@keyframes shou {
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
