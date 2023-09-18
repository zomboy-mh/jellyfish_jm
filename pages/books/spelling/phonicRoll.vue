<template>
	<view>
		<view class="head flex align-center position-a">
			<view @tap="returnJump" class="icon iconguanbi1 cl-00A475"></view>
		</view>
		<view class="wh">
			<view class="pagination position-a flex align-center justify-center">
				<view class="font-14 cl-black9 padding-left-10">{{swiperCurrent + 1}}/{{swiperList.length}}</view>
			</view>
			<view  class="swiper width">
				<swiper  class="wh swiperbox" :current="swiperCurrent" @change="swiperChange">
					<swiper-item  v-for="(item,index) in swiperList" :key="index">
						<view class="text_word font-40" >
							<view class="wordshow1" v-if="voiceType == 1">
								<span class="cl-FE0000 ">
									{{wordcapital}}
								</span>
							</view>
							<view class="wordshow2" v-if="voiceType == 2">
								<span    :class="itm.show?'cl-FE0000':'cl-0F7E5D'"  v-for="(itm,inx) in item.wordList" :key="inx">
									{{itm.value}}
								</span>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="phonicRoll_gif">
				<image class="wh" v-if="openGif" :src="imageUrl + 'phonicRoll_gif.gif'" mode=""></image>
				<image class="wh" v-if="!openGif" :src="imageUrl + 'phonicRoll_png1.png'" mode=""></image>
			</view>
			
		</view>
		<view v-if="shareIf" class="zhezhaoceng z-index4">
			<view @tap="shareIf = false" class="zhezhaocengBa"></view>
			<view class="flex-vertical-level wh position-r z-index">
				<view class="share animated bounceInDown">
					<view class="share_img width position-r">
						<view class="share_tit1 width text-center position-a font-20 font-bold cl-white">
							非常棒
						</view>
						<view class="share_tit2 width text-center position-a font-15 font-bold">
							小朋友，恭喜你完成了。
						</view>
						<view class="star_move">
							<image class="yellowstar1" :src="imageUrl + 'yellowstar1.png'"></image>
							<image class="redstar1" :src="imageUrl + 'redstar1.png'"></image>
		
						</view>
						<view style="bottom: 36rpx;" class="width text-center position-a font-18 font-bold cl-0B0B4B">
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
	import {Audio,voiceStart} from "../../../utils/utils.js";
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getPhonicsDetail} from '../../../api/index.js'
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				swiperCurrent: 0,
				swiperList:[],
				voiceType:1,
				voiceUrl: '',
				shareIf:false,
				nextname: '完成',
				openGif:false,
				wordcapital:'',
				wordList:[],
				phonics_pron1:''
			};
		},
		watch: {
			swiperCurrent() {
				this.voiceType = 1;
				Audio.stop();
				this.voiceUrl = this.phonics_pron1;
				
			},
			voiceUrl() {
				Audio.stop();
				this.voiceFn();
			},
			shareIf(){
				if(this.shareIf){
					let usr_id=  uni.getStorageSync('usr_id')
					let value = loginEnCode({
						"itm_id":this.itm_id,
						"attr_3":1,
						"usr_id":usr_id,
					})
					mobSaveHomeWorkRecored({
						json: value
					}).then((res)=>{
					let data = loginDeCode(res.datas)
						console.log("上传完成", data)
					})
					Audio.stop();
					console.log("结束")
				}
			}
		},
		onLoad(open) {
			console.log("ssssss",open)
			this.itm_id = open.phonicsId;
			// this.bookId = uni.getStorageSync('phonicsId')
			// this.getHomeWorkRecoredTextUl()
			this.getPhonicsDetailUl()
		},
		onShareAppMessage(res) {
			return {
				title: 'RAZ阅读营',
				path: '/pages/checkout/inquiry',
		
			}
		},
		methods: {
			getPhonicsDetailUl(){
				getPhonicsDetail({
					"phonicsId":this.itm_id,
				}).then((res)=>{
					console.log("sss",res)
					this.swiperList = res.data.phonicsDetailVos;
					// this.wordcapital = data.phonics_capital;
					this.wordRoot = data.phonics_capital.split('')
					this.swiperList.map((item, index) => {
						item.finishedsIf = false;
						item.word = item.phonicsexWord.split('')
						item.wordList = []
						item.word.map((itm,inx)=>{
							let words = {};
							words.value = itm
							this.wordRoot.map((itms,inxs)=>{
									if(itm===itms){
										words.show = true;
									}
							})
							item.wordList.push(words)
						})
					});
					// this.voiceUrl = data.phonics_pron1;
					// this.phonics_pron1 = data.phonics_pron1;
					console.log("作业333",data)
				})
			},
			swiperChange(val) {
				this.transTips = false;
				this.swiperCurrent = val.detail.current;
			},
			// 播放录音
			voiceFn() {
				
				voiceStart(this.voiceUrl).then(() => {
					this.openGif = true
					setTimeout(()=>{
						this.openGif = false
					},3000)
				})
				Audio.onEnded(() => {
					this.voiceType = 2;
					
					this.voiceUrl = this.swiperList[this.swiperCurrent].phonicsex_wordaudio;
					this.swiperList[this.swiperCurrent].finishedsIf = true;
					let BcountsList = []
					this.swiperList.map(item => {
						if (item.finishedsIf == true) {
							BcountsList.push(item)
						}
					})
					if (BcountsList.length == this.swiperList.length) {
						if(this.voiceType == 2){
							setTimeout(() => {
								this.shareIf = true;
							}, 2500)
						}
						
					}
				})
			},
			returnJump() {
				Audio.stop();
				uni.reLaunch({
					url: 'index'
				})
			},
			shareFn(type) {
				if (type == 1) {
					uni.reLaunch({
						url: '../../index'
					})
				}else if (type == 3) {
					uni.reLaunch({
						url: '../expandDetail'
					})
				}
			},
			Jump() {
				Audio.stop();
				uni.reLaunch({
					url: '../expandDetail'
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
	.swiper {
		z-index: 1;
		width: 520rpx;
		height: 260rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -260rpx;
		margin-top: -130rpx;
		box-shadow: 1rpx 0 9rpx 0 rgba(46, 36, 28, 0.23);
		border-radius: 9rpx;
		background: #404040;
		color: #FFFFFF;
		border: 10rpx #da8726 solid;
		.swiperbox{
			.text_word{
				width: 100%;
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				position: absolute;
				top: 50%;
				margin-top: -20rpx;
				.wordshow1{
					position: fixed;
					width: 100%;
					text-align: center;
					animation: starmovemin 3s 1;
				}
				.wordshow2{
					position: fixed;
					width: 100%;
					text-align: center;
					animation: starmovemax 3s 1;
				}
				
			}
			@keyframes starmovemin {
				0% {
					
					transform: scale(1,1);
				}
				100% {
					transform: scale(0.5,0.5);
				}
			}
			@keyframes starmovemax {
				0% {
					transform: scale(1,1);
				}
				100% {
					transform: scale(1.5,1.5);
				}
			}
			.text_sen{
				width: 100%;
				margin-top: 20rpx;
				height: 20rpx;
				line-height: 20rpx;
				text-align: center;
			}
		}
		
		
	}
	.phonicRoll_gif{
		position: absolute;
		z-index: 10;
		left: 30rpx;
		bottom: 0rpx;
		width: 150rpx;
		height: 180rpx;
	}
	.share {
		width: 340rpx;
	
		.share_img {
			height: 285rpx;
	
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
