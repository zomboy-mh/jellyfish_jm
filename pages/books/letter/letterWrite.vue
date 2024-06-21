<template>
	<view class="position-f wh">
		<view class="head">
			<view class="green_back display-flex" @tap="jump()">
				<image class="green_back_img" :src="imageUrl + 'guide_left.png'" mode="aspectFit"></image>
			</view>
		</view>
		<view class="position-a wh" v-if="!canvasShow">
			<video class="bgview z-index100" :src="imageUrl + videoUrl+ '.mp4'" autoplay="true" loop="true" @ended="onVideoEnd"></video>
		</view>
		<image class="bgview1" :src="imageUrl + 'letterWrite_bg.png'" mode="aspectFill"></image>
		<view class="box" v-if="canvasShow">
			
			<view class="bgview2">
				<image class="wh" :src="imageUrl + 'letterWrite_bg1.png'" mode="aspectFit"></image>
				<view class="writeBg" v-if="letterBig=='big'">
					<image class="wh" :src="imageUrl + 'write'+letter+'.gif'" mode="aspectFit"></image>
				</view>
				<view class="writeBg" v-if="letterBig=='small'">
					<image class="wh" :src="imageUrl + 'writeSmall'+letter+'.gif'" mode="aspectFit"></image>
				</view>
				<view class="container">
					<canvas canvas-id="letterCanvas" @touchmove="drawOnCanvas"
						style="width: 320px; height: 400px;"></canvas>
				</view>
			</view>
			<view class="transBtn font-18" @click="drawImage()">
				重绘
			</view>
			<view v-if="letterBig=='big'" class="transBtn1 font-18 " @click="nextImage()">
				下一步
			</view>
			<view v-if="letterBig=='small'" class="transBtn1 font-18 " @click="closeBtn()">
				完成
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
				videoUrl:'',
				ctx: null,
				canvasShow:false,
				letterBig:'big',
				letter:''
			}
		},
		onReady() {
			this.ctx = uni.createCanvasContext('letterCanvas', this);
			this.initCanvas();
		},
		onLoad(open) {
			
			this.videoUrl = 'letter_'+open.letter;
			this.letter = open.letter;
		},
		methods: {
			jump() {
				uni.reLaunch({
						url: 'letter'
				})
			},
			initCanvas() {
				this.ctx.setStrokeStyle('black');
				this.ctx.setLineWidth(3);
				const image = imageUrl + 'write_'+this.letter+'.png' ; // 替换为您的图片路径
				uni.getImageInfo({
					src: image,
					success: (res) => {
						// 设置图像的透明度
						this.ctx.globalAlpha = 0.4;
						// 绘制图像
						this.ctx.drawImage(res.path, 40, 50, 240, 300);
						// 重置透明度
						this.ctx.globalAlpha = 1.0;
			
						this.ctx.draw();
					},
					fail: (err) => {
						console.error('图像加载失败', err);
					}
				});
			},
			drawOnCanvas(event) {
				const touch = event.touches[0];
				const x = touch.x;
				const y = touch.y;
				this.ctx.setStrokeStyle('red');
				this.ctx.setLineWidth(45);
				this.ctx.beginPath();
				this.ctx.arc(x, y, 1, 0, 2 * Math.PI);
				this.ctx.fill();
				this.ctx.stroke();
				this.ctx.draw(true); // 立即渲染变化
			
			},
			nextImage(){
				this.letterBig = 'small'
				 this.clearCanvas(); // 首先清除 canvas
				this.ctx.setStrokeStyle('black');
				this.ctx.setLineWidth(3);
				const image = imageUrl + 'button'+this.letter+'.png'; // 替换为您的图片路径
				uni.getImageInfo({
					src: image,
					success: (res) => {
						// 设置图像的透明度
						this.ctx.globalAlpha = 0.4;
						// 绘制图像
						this.ctx.drawImage(res.path, 40, 50, 240, 300);
						// 重置透明度
						this.ctx.globalAlpha = 1.0;
							
						this.ctx.draw();
					},
					fail: (err) => {
						console.error('图像加载失败', err);
					}
				});
			},
			closeBtn(){
				uni.reLaunch({
						url: 'letter'
				})
			},
			 clearCanvas() {
			      this.ctx = uni.createCanvasContext('letterCanvas', this);
			
			      // 清除整个 canvas
			      this.ctx.clearRect(0, 0, 320, 400); // 替换 canvasWidth 和 canvasHeight 为您的 canvas 尺寸
			
			      this.ctx.draw();
			 },
			
			drawImage() {
			      this.clearCanvas(); // 首先清除 canvas
				  if(this.letterBig == 'big'){
					  this.initCanvas()
				  }else{
					  this.nextImage()
				  }
				  
			},
			onVideoEnd() {
			      // 视频播放结束时执行的操作
			      console.log('视频播放已结束');
				  this.canvasShow = true;
				  this.$nextTick(() => {  // 确保 DOM 更新完成后再初始化 canvas
				        this.drawImage();
				      });
				 
			      // 这里可以添加其他您想执行的代码
			    }
		}
	}
</script>

<style lang="less" scoped>
	
	 .bgview {
	 	position: absolute;
	 	top: 10%;
	 	left: 50%;
	 	margin-left: -275rpx;
	 	width: 550rpx;
	 	height: 300rpx;
	 }
	 
	
.bgview1 {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}

	.bgview2 {
		width: 610rpx;
		height: 364rpx;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-left: -305rpx;
		margin-top: -182rpx;

		.container {

			position: absolute;
			left: 55%;
			width: 50%;
			top: 10%;
			height: 90%;
			// background: #55aaff;
		}

		.writeBg {
			position: absolute;
			left: 10%;
			width: 40%;
			top: 25%;
			height: 50%;
			// background: #ffff7f;
		}

	}

	.transBtn {
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
	.transBtn1{
		top: 3vh;
		position: absolute;
		left: 550rpx;
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
	.box {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		touch-action: none;
	}
	
	@media (min-height: 431px) {
			  .bgview {
			  	position: absolute;
			  	top: 10%;
			  	left: 50%;
			  	margin-left: -300rpx;
			  	width: 600rpx;
			  	height: 400rpx;
			  }
	}
</style>
