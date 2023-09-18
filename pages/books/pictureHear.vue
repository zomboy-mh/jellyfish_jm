<template>
	<view class="zhezhaocengBa">
		<view class="box width position-f">
			<view class="head flex align-center position-a ">
				<image @tap="returnJump" class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view  @tap="$refs.pages.pagesIf = true" class="pagination position-a flex align-center justify-center">
				<image class="pagination_img" :src="imageUrl+'pageNum1_g.png'" mode=""></image>
				<view class="font-14 cl-black9 padding-left-10">{{swiperCurrent + 1}}/{{swiperList.length}}</view>
			</view>
		</view>
		<view class="position-a wh ">
			<view  class="wh flex align-center">
				<view class="transTips" v-if="transTips">
					<view class="transTipstxt">哪里不会点哪里</view>
					<view class="transTipsicon"></view>
				</view>
				<view class="transBtn font-18" @tap="transBtn()">
					整句翻译
				</view>
				<swiper class="swiper width" :current="swiperCurrent" @change="swiperChange">
					<swiper-item v-for="(item,index) in swiperList" :key="index">
						<view class="content flex justify-center">
							<view class="cot_img bg-white">
								<!-- <image class="cot_img_item" :src="formalUrl + item.img_url + '?x-oss-process=style/w630h600'" mode="aspectFit"></image> -->
								<image class="cot_img_item" :src="formalUrl + item.pagePicfile + '?x-oss-process=style/w630h600'" mode="aspectFit"></image>
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
		<view  class="position-f width base flex justify-between">
			<image v-if="swiperCurrent == 0" class="previous margin-left self-end" 
				mode=""></image>
			<image v-if="swiperCurrent > 0" @tap="cutFn" class="previous margin-left self-end rotate180"
				:src="imageUrl+'subsequentone2_g.png'" mode=""></image>
			<view class="flex">
				<view v-if="iconshouIf>5" class="icon iconshou cl-00A475 self-end"></view>
				<image v-if="swiperCurrent + 1 != swiperList.length && swiperList.length>0"  @tap="addFn"
					class="previous margin-right self-end" :src="imageUrl+'subsequentone2_g.png'" mode=""></image>
				<image v-if="swiperCurrent + 1 == swiperList.length" class="previous margin-right self-end rotate180"
				mode="" @tap="$refs.pages.pagesIf = true"></image>
			</view>
		</view>
		
		<!-- 页数 -->
		<page-index ref="pages" :index="swiperCurrent" :list="swiperList"></page-index>
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
							小朋友，恭喜你完成听绘本。
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
	
	import pageIndex from '@/components/page-index.vue';
	 import {imageUrl,formalUrl} from '../../config/index.js'
	import {getBookPage,pushBookReadRecord} from '../../api/index.js'
	import {Audio,voiceStart} from "../../utils/utils.js";
	export default {
		components: {
			pageIndex,
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
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
			}
		},
		watch: {
			swiperCurrent() {
				Audio.stop();
				this.translf = false;
				this.iconshouIf = 0;
				this.voiceUrl = this.swiperList[this.swiperCurrent].pageAudiofile;
				
				this.backVoice();
			},
			voiceUrl() {
				Audio.stop();
				this.voiceFn();
				
			},
			shareIf(){
				this.pushBookReadRecordUl()
			}
		},
		onLoad(open) {
			this.getBookPageUl()
		},
		
		methods: {
			returnJump() {
				Audio.stop();
				uni.reLaunch({
					url: 'index'
				})
			},
			getBookPageUl(){
				this.bookId = uni.getStorageSync('bookId')
				getBookPage({
					'bookId':this.bookId
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
					this.startTime = this.getNowTime()
					console.log("听绘本书本",res)
				})
			},
			getNowTime() {
				var date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				var monthStr = month >= 10 ? month : "0" + month;
				let day = date.getDate();
				var dayStr = day >= 10 ? day : "0" + day;
				let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
				let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
				let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				let milliSeconds = date.getMilliseconds();
				return year +'-' +  monthStr +'-' + dayStr +' '  + hour+':' + minute +':' + second;
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
			pushBookReadRecordUl(){
				this.endTime = this.getNowTime()
				pushBookReadRecord({
					"bookId": this.bookId,
					"endTime": this.endTime,
					"startTime": this.startTime
				}).then((res)=>{
					console.log("上传成功",res)
				})
			},
			backVoice() {
				clearInterval(this.end);
				this.curTime = 0;
				this.anewVoiceIf = false;
				this.timeObj = {
					lrcs: [],
					times: []
				};
				if (!this.swiperList[this.swiperCurrent].time_nodes) return;
				let timeNode = JSON.parse(this.swiperList[this.swiperCurrent].time_nodes);
				timeNode.map(item => {
					item.start = (item.start / 1000).toFixed(2);
					this.timeObj.lrcs.push(item.text);
					this.timeObj.times.push(item.start);
				})
				let time = this.timeObj.times[this.timeObj.times.length - 1];
				this.endTimes = Math.ceil(time);
				this.end = setInterval(() => {
					this.curTime += 0.1;
					if (this.curTime > this.endTimes) {
						clearInterval(this.end);
						this.anewVoiceIf = true;
					}
				}, 100);
			},
			//翻译
			transBtn(){
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
			cutFn() {
				if (this.swiperCurrent == 0) return;
				this.swiperCurrent--;
			},
			addFn() {
				if (this.swiperCurrent == this.swiperList.length) return;
				this.transTips = false;
				this.swiperCurrent++;
			},
			transClose() {
				this.transMaxlen = false;
				this.translf = false
			},
			voiceFnAga() {
				Audio.stop();
				this.voiceFn();
			},
			swiperChange(val) {
				this.transTips = false;
				this.swiperCurrent = val.detail.current;
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
	.voiceLaba {
		top: 210rpx;
		left: 380rpx;
		width: 40rpx;
		height: 40rpx;
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

	.icon_laba {
		bottom: 12%;
		left: 51%;
		width: 34rpx;
		height: 36rpx;
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

	.base {
		bottom: 21rpx;
		display: flex;
		.previous {
			width: 36rpx;
			height: 33rpx;
			display: inline-block;
		}
	}

	.iconshou {
		font-size: 30rpx;
		animation: shou 1s infinite;
	}

	@keyframes shou {
		0% {
			transform: translate3d(0, 0, 0);
		}

		50% {
			transform: translate3d(4rpx, 0, 0);
		}

		100% {
			transform: translate3d(0, 0, 0);
		}
	}
	
	.zhezhaocengBa {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background: url(http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/letter_bg.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.rotate {
		transform: rotate(0deg) !important;
	}

	
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

	.share {
		width: 340rpx;
		z-index: 888;
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
