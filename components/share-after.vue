<template>
	<view v-if="preserveIf" class="zhezhaoceng sharebox">
		<view @tap="preserveIf = false" class="zhezhaocengBa"></view>
		<view class="flex-vertical-level wh position-r">
			<view class="share animated bounceInDown">
				<view class="share_img width position-r">
					<view class="share_tit1 width text-center position-a font-20 font-bold cl-white z-index999">
						非常棒
					</view>
					<view class="share_tit2 width text-center position-a font-15 font-bold z-index999">
						小朋友，恭喜你完成了。
					</view>
					<view class="star_move z-index999">
						<!-- <image class="yellowstar1" :src="imageUrl + 'yellowstar1.png'"></image>
						<image class="redstar1" :src="imageUrl + 'redstar1.png'"></image> -->
						<image class="yellowstar1" :src="imageUrl + 'gradeSun1.gif'">
							
						</image>
						<view class="gradeSum font-28">100</view>
					</view>
					<view style="bottom: 40rpx;" class=" width text-center position-a font-20 font-bold cl-0B0B4B z-index999">
						<button class="button" @tap="jump()" hover-class="none">主页</button>
					</view>
					<image class="wh" :src="imageUrl + 'share1.png'" mode=""></image>
				</view>
				<view class="share_but flex justify-center">
					<image @tap="jump()" class="share_but_img" :src="imageUrl + 'home.png'" mode=""></image>
					<image @tap="jump()" class="share_but_img padding-left-20" :src="imageUrl + 'refresh.png'"
						mode=""></image>
					<image @tap="jump()" class="share_but_img padding-lr-20" :src="imageUrl + 'shut.png'"
						mode="">
					</image>
					<image @tap="jump()" class="share_but_img " :src="imageUrl + 'share_wx.png'"
						mode="">
					</image>
					<image @tap="jump()" class="share_but_img padding-left-20" :src="imageUrl + 'share_pyq.png'"
						mode="">
					</image>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"share-after",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
		.sharebox{
				z-index: 10000;
				.share {
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
			}
</style>