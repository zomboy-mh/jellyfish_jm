<template>
	<view class="wh  bg87E4C8">
		<view class="head">
			<view class="green_back display-flex" @tap="jump()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			
		</view>
		<view v-for="(item,index) in list" :key="index" class="box">
			<view class="flex justify-between align-center padding-bottom">
				<view class="font-25 font-bold">{{item.headline}}</view>
				<view @tap="jumpPlan(item)" class="font-20 cl-00A475">查看详情>></view>
			</view>
			<view @tap="jumpPlan(item)" class="main position-r">
				<view class="position-a width" style="bottom: 0;z-index: 999;">
					<view class="flex justify-between" style="padding: 0 35rpx 20rpx 35rpx;">
						<view v-if="item.typeNum == 1"><text class="font-18">新用户专享优惠 \n 7天AI阅读体验课</text></view>
						<view v-if="item.typeNum == 2"><text class="font-18">习惯养成专享优惠 \n 21天绘本阅读AI课</text></view>
						<view v-if="item.typeNum == 3"><text class="font-18">让孩子轻松学英语 \n 90天绘本阅读AI课</text></view>
						<view v-if="item.typeNum == 4"><text class="font-18">精心挑选属于你的绘本阅读 \n 365天绘本阅读AI课</text></view>
						<view class="text-right">
							<view class="font-38 font-bold" style="color: #FF0000;">¥ {{item.present_price}}</view>
							<view class="font-23 cl-black6 text-through padding-top-5">¥ {{item.original_price}}</view>
						</view>
					</view>
				</view>
				<image class="wh" :src="imageUrl + 'meal' + item.typeNum + '.png'" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../../config/index.js'
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				list:[
					{
						headline:'能力测试',
						typeNum:1,
						present_price:1,
						original_price:1
					},
					{
						headline:'7天畅读卡',
						typeNum:2,
						present_price:1,
						original_price:1
					},
					{
						headline:'年卡',
						typeNum:3,
						present_price:1,
						original_price:1
					},
					{
						headline:'季卡',
						typeNum:4,
						present_price:10,
						original_price:1
					}
				]
			}
		},
		onLoad() {
			// this.$forceUpdate()
		},
		methods: {
			jumpPlan(item){
				uni.reLaunch({
						url: 'purchasePlan?typeNum=' + item.typeNum
				})
			},
			jump() {
				uni.reLaunch({
						url: '../../user/index'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.bg87E4C8{
		background: linear-gradient(#87E4C8 0%, #C3F3E4 0%);
	}
	.head{
			display: flex;
			position: fixed;
			left: 0;
			top: 0;
			height: 70rpx;
			z-index: 200;
			// overflow-y: hidden;
			.green_back{
				position: absolute;
				left: 3%;
				top: 50%;
				margin-top: -26rpx;
				margin-left: 16rpx;
				z-index: 999;
				.green_back_img{
					width: 34rpx;
					height: 34rpx;
			}
		}
	}
.box {
		padding: 20rpx 100rpx 10rpx;
		.main {
			height: 300rpx;
		
			.main_img {
				border-radius: 30rpx;
			}
		}
	}

	
</style>
