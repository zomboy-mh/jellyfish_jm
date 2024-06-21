<template>
	<view class="box zhezhaocengBa">
		<view class="head flex position-a">
			<image @click="jump('fh')" class="return_img" :src="imageUrl + 'fanhui2.png'" mode=""></image>
		</view>
		<image class="bgview1" :src="imageUrl + 'book_guide_bg .png'" mode=""></image>
		<!-- 报告 -->
		<view class="bookBox" >
			
			<view class="bookBoxItem2 position-r" @click="jumpPhonics2()">
				<image  class="wh position-a" :src="imageUrl + 'letterBookBgS.png'" mode="aspectFit"></image>
				<image  style="width: 92%;height: 90%;margin-left: 2%;margin-top: 3%; position-a" :src="formalUrl+itmDataIcon1" mode="aspectFit"></image>
				<view class="itmDataName">Letter Name</view>
			</view>
			<view class="bookBoxItem3 position-r" @click="jumpPhonics3()">
				<image  class="wh position-a" :src="imageUrl + 'letterBookBgH.png'" mode="aspectFit"></image>
				<image  style="width: 92%;height: 96%;margin-left: 4%; position-a" :src="formalUrl+itmDataIcon2" mode="aspectFit"></image>
				<view class="itmDataName">Letter Sound</view>
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
	import {getPrdListByPrdId} from '../../../api/index.js'
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
			
			this.recordId = uni.getStorageSync('letterBookId');
			this.getPhonicsListUrl(this.recordId)

		},
		methods: {
			
			getPhonicsListUrl(data) {
				getPrdListByPrdId({
					'phonicsId': data
				}).then(res => {
					console.log(res)
					if (res.status == 200) {
						this.itmDataIcon1 = res.data.itemVos[0].itmDataIcon;
						this.itmDataName1 = res.data.itemVos[0].itmDataName;
						this.itmDataId1 = res.data.itemVos[0].itmDataId;
						this.itmDataIcon2 = res.data.itemVos[1].itmDataIcon
						this.itmDataName2 = res.data.itemVos[1].itmDataName
						this.itmDataId2 = res.data.itemVos[1].itmDataId
						
					}
				})
			},
			jumpPhonics2(){
				uni.reLaunch({
						url: 'phonicRoll?phonicsId=' + this.itmDataId1
				})
			},
			jumpPhonics3(){
				uni.reLaunch({
						url: 'phonicRoll?phonicsId=' + this.itmDataId2
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
		padding-left: 50rpx;
		.bookBoxItem2{
			width: 122rpx;
			height: 182rpx;
			// background: #fff;
			margin-right: 50rpx;
			.itmDataName{
				position: absolute;
				bottom: -30rpx;
				left: 0;
				width: 120rpx;
				height: 30rpx;
				line-height: 30rpx;
				text-align: center;
				font-size: 20rpx;
				color: #ffffff;
				font-weight: bolder;
			}
		}
		.bookBoxItem3{
			width: 290rpx;
			height: 180rpx;
			// background: #55ffff;
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
