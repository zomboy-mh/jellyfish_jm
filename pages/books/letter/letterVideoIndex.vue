<template>
	<view class="box zhezhaocengBa">
		<view class="head flex position-a">
			<image @click="jump('fh')" class="return_img" :src="imageUrl + 'fanhui2.png'" mode=""></image>
		</view>
		<image class="bgview1" :src="imageUrl + 'book_guide_bg .png'" mode=""></image>
		<!-- 报告 -->
		<view class="bookBox" >
			
			<view class="bookBoxItem2 position-r" @click="jumpPhonics2()">
				<!-- <image  class="wh position-a" :src="imageUrl + 'letterBookBgS.png'" mode="aspectFit"></image> -->
				<image  style="width: 100%;height: 100%;margin-left: 2%; position-a" :src="imageUrl+'letterNameIcon1.png'" mode="aspectFit"></image>
				<!-- <view class="itmDataName">Letter Name 1</view> -->
			</view>
			<view class="bookBoxItem3 position-r" @click="jumpPhonics3()">
				<!-- <image  class="wh position-a" :src="imageUrl + 'letterBookBgH.png'" mode="aspectFit"></image> -->
				<image  style="width: 100%;height: 100%;margin-left: 4%; position-a" :src="imageUrl+'letterNameIcon2.png'" mode="aspectFit"></image>
				<!-- <view class="itmDataName">Letter Name 2</view> -->
			</view>
			
		</view>
		<!-- 乌龟 -->

		<!-- 海草 -->
		<view class="seaweed">
			<view class="left_red">
				<image class="left_red_img" :src="imageUrl + 'left_red.png'" mode=""></image>
			</view>
			<view class="left_green">
				<image class="left_green_img" :src="imageUrl + 'left_green.png'" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		imageUrl,
		formalUrl
	} from '../../../config/index.js'
	import {getPrdListByPrdId, getWordCard} from '../../../api/index.js'
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:'https://lbzyk.read61.cn/read61v2_rsc/',
				indexData: {},
				allTotal: 0,
				score: 0,
				eggs: 0,
				indexDataIf: false,
				pathlists: [],
				show_report: false,
				startDate: '',
				activity: false,
				itmDataIcon1:'',
				itmDataIcon2:'',
				itmDataId1:'',
				itmDataId2:'',
				itmDataName1:'',
				itmDataName2:''
			}
		},
		onLoad(open) {
			
			this.recordId = uni.getStorageSync('letterType');
			this.getPhonicsListUrl(this.recordId)

		},
		methods: {
			
			getPhonicsListUrl(data) {
				getWordCard({
					wordLetter: data
				}).then(res => {
					console.log(res)
					if (res.status == 200) {
						this.itmDataId1 = res.data[5].wordVideo;
						
						this.itmDataId2 = res.data[6].wordVideo
						
					}
				})
			},
			jumpPhonics2(){
				uni.reLaunch({
						url: 'letterName?videoUrl=' + this.itmDataId1
				})
			},
			jumpPhonics3(){
				uni.reLaunch({
						url: 'letterName?videoUrl=' + this.itmDataId2
				})
			},
			
			jump(item) {
				uni.reLaunch({
					url: 'letter'
				})

			}
		}
	}
</script>

<style lang="less" scoped>
	.bookBox{
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -270rpx;
		margin-top: -100rpx;
		width: 500rpx;
		height: 150rpx;
		display: flex;
		// justify-content: space-between;
		align-items: center;
		padding-left: 25rpx;
		.bookBoxItem2{
			width: 205rpx;
			height: 180rpx;
			margin-right: 50rpx;
			.itmDataName{
				position: absolute;
				bottom: -30rpx;
				left: 0;
				width: 100%;
				height: 30rpx;
				line-height: 30rpx;
				text-align: center;
				font-size: 20rpx;
				color: #ffffff;
				font-weight: bolder;
			}
		}
		.bookBoxItem3{
			width: 205rpx;
			height: 180rpx;
			.itmDataName{
				position: absolute;
				bottom: -30rpx;
				left: 0;
				width: 100%;
				height: 30rpx;
				line-height: 30rpx;
				text-align: center;
				font-size: 20rpx;
				color: #ffffff;
				font-weight: bolder;
			}
		}
	}
	
	.head {
		margin-top: 10rpx;
		top: 3vh;
		left: 30rpx;
	}

	.return_img {
		width: 35rpx;
		height: 35rpx;
	}
.bgview1{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
		}
	.seaweed {
		position: absolute;
		right: 60rpx;
		bottom: -110rpx;

		.left_red {
			animation: seaweedimg 6s infinite;

			.left_red_img {
				width: 100rpx;
				height: 200rpx;
			}
		}

		.left_green {
			position: absolute;
			left: 50rpx;
			top: 10rpx;
			animation: seaweedimg2 3s infinite;
			z-index: 2;

			.left_green_img {
				width: 100rpx;
				height: 200rpx;
			}
		}

	}

	@keyframes seaweedimg {
		0% {
			transform: rotate(10deg);
			transform-origin: 50rpx 200rpx;
		}

		50% {
			transform: rotate(15deg);
			transform-origin: 50rpx 200rpx;
		}

		100% {
			transform: rotate(10deg);
			transform-origin: 50rpx 200rpx;
		}
	}

	@keyframes seaweedimg2 {
		0% {
			transform: rotate(5deg);
			transform-origin: 50rpx 200rpx;
		}

		50% {
			transform: rotate(10deg);
			transform-origin: 50rpx 200rpx;
		}

		100% {
			transform: rotate(5deg);
			transform-origin: 50rpx 200rpx;
		}
	}

	
</style>
