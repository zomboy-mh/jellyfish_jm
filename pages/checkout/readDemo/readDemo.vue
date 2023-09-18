<template>
	<view>
		<view class="startBtn0" @tap="retun()">返回</view>
		<canvas canvas-id="myCanvas" style="width: 200px; height: 200px;"></canvas>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				data:''
			}
		},
		onLoad() {
			
		},
		onReady() {
			const context = uni.createCanvasContext('myCanvas', this);
			    
			    context.beginPath();
			    context.arc(100, 100, 100, 0, 2 * Math.PI); // 绘制圆形，参数依次为圆心x坐标、圆心y坐标、半径、起始角度、结束角度
			    context.setFillStyle('red'); // 设置填充颜色
			    context.fill(); // 填充圆形
			    context.stroke(); // 绘制边框
			    
			    context.draw(); // 将绘制内容显示在canvas上
		},
		methods: {
			
			retun(){
				uni.reLaunch({
					url: '../../index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.startBtn0{
		position: absolute;
		top: 50rpx;
		left: 50rpx;
		width: 100rpx;
		height: 20rpx;
		background: #ccc;
		line-height: 20rpx;
		text-align: center;
	}
</style>
