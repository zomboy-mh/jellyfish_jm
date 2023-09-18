<template>
	<view class="box">
		<view class="title">测试报告列表</view>
		<view class="return">
			<image @tap="jump('fh')" class="return_img" :src="imageUrl + 'user_fh.png'" mode=""></image>
		</view>
		<view class="list_box">
			<view class="list_item" v-for="(item,index) in examList" :key="index" @tap="getexam(item)">
				<view class="font-15 cl-white">{{item.exam_name}}</view>
				<image class="list_item_img" :src="imageUrl + 'detail_jump.png'" mode=""></image>
			</view>
			
		</view>
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../config/index.js'
	import {getUserInfo,pushUserHeaderImg,loginOut,updateUserInfo} from '../../api/index.js'
	
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				examList:[
					{
						exam_name:'定级能力测评'
					},
					{
						exam_name:'A-升级报告1'
					},
					{
						exam_name:'A-升级报告2'
					},
					{
						exam_name:'B-升级报告1'
					},
					{
						exam_name:'B-升级报告2'
					},
				]
			}
		},
		onLoad() {
			// this.getUserExaminationListUL();
		},
		methods: {
			//跳转 
			jump(item) {
				if (item == 'fh') {
					uni.redirectTo({
						url: '../user/learnDetails'
					})
				}
			},
			getUserExaminationListUL(){
				getUserExaminationList().then((res)=>{
					this.examList = res.data
				})
			},
			getexam(item){
				if(item.type==1){
					uni.redirectTo({
						url: '../checkout/rankReport?data='+JSON.stringify(item)
					})
				}else{
					uni.redirectTo({
						url: '../checkout/upgradeReport?data='+JSON.stringify(item)
					})
				}
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.box{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		// background: linear-gradient(0deg,#1F2B46,#3B4C70);
		background: linear-gradient(to top, #87E4C8, #C3F3E4);
		// color: #ACBBE5;
		
		.title{
			width: 100%;
			height: 50rpx;
			line-height: 50rpx;
			position: fixed;
			text-align: center;
			font-size: 18rpx;
			background: linear-gradient(0deg,#87E4C8, #C3F3E4);
			z-index: 333;
		}
		.return {
			position: fixed;
			top: 6rpx;
			z-index: 333;
			.return_img {
				width: 63rpx;
				height: 35rpx;
			}
		}
		.list_box{
			position: absolute;
			top: 80rpx;
			left: 10%;
			width: 80%;
			height: 260rpx;
			// margin-left: 10%;
			// margin-top: 80rpx;
			// height: 200rpx;
			background: #429a8c;
			border-radius: 10rpx;
			// border-top-left-radius: 10rpx;
			// border-top-right-radius: 10rpx;
			padding: 10rpx;
			flex-direction: column;
			overflow: auto;
			.list_item{
				width: 100%;
				height: 40rpx;
				// text-align: center;
				line-height: 40rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx #bef4e4 solid; 
				.list_item_img{
					width: 10rpx;
					height: 15rpx;
				}
			}
		}
	}
</style>
