<template>
	<view>
		<view class="return" @tap="jump()" >
			<image class="return_img" :src="imageUrl + 'left_white.png'" mode=""></image>
		</view>
		<view class="library_title">
			<view class="library_title_txt  font-16">视频</view>
		</view>
		<!-- <view class="zhezhao" > </view> -->
		<video class="bgview" :src="formalUrl +itm_url" autoplay="true" loop="true" objectFit='cover' x5-video-player-type='h5' x5-video-player-fullscreen='true' x5-video-orientation='portraint'></video>
		<view class="library_left"></view>
		<view class="library_right"></view>
		<view class="library_bottom"></view>
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
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getVideoDetail} from '../../../api/index.js'
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				itm_url:'',
				videoshow:true,
				shareIf:false,
				nextname: '完成',
			}
		},
		onLoad(open) {
			this.itm_id = open.itm_id;
			console.log("itm_url",this.itm_id)
			this.getVideoDetailUl()
		},
		methods: {
			jump() {
				uni.reLaunch({
						url: 'cinema'
				})
			},
			Jump() {
			uni.reLaunch({
					url: 'cinema'
			})
			},
			videoshowTap(){
				this.videoshow = !this.videoshow
			},
			getVideoDetailUl(){
				getVideoDetail({
					'vidId': this.itm_id
				}).then((res)=>{
					console.log("视频",res)
					this.itm_url = res.data.vidVideo 
				})
			},
			shareFn(type) {
				uni.reLaunch({
					url: 'cinema'
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.return {
		position: fixed;
		top: 8rpx;
		left: 30rpx;
		z-index: 666;
		width: 40rpx;
		height: 40rpx;
		.return_img {
			width: 16rpx;
			height: 25rpx;
		}
	}
	.zhezhao{
		position: fixed;
		top: 30rpx;
		left: 0;
		width: 100%;
		height: 80%;
		// z-index: 999;
	}
	.library_title {
			position: fixed;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			z-index: 100;
			width: 100%;
			height: 40rpx;
			background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/mechanism_ngt_g.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;

			.library_title_txt {
				width: 100%;
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				color: #FFFFFF;
			}
		}
		
		.bgview {
			position: fixed;
			top:14%;
			left: 50%;
			margin-left: -300rpx;
			width: 600rpx;
			height: 68%;
			z-index: -1;
		}
		.library_left{
			width: 50rpx;
			height: 100%;
			position: fixed;
			left: 0;
			top: 0;
			background: #55bca0;
		}
		.library_bottom{
			width: 100%;
			height:  50rpx;
			position: fixed;
			left: 0;
			bottom: 0;
			background: #55bca0;
		}
		.library_right{
			width: 50rpx;
			height: 100%;
			position: fixed;
			right: 0;
			top: 0;
			background: #55bca0;
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
