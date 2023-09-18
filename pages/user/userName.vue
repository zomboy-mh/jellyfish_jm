<template>
	<view class="box">
		<view class="title">宝贝信息</view>
		<view class="return">
			<image @tap="jump('fh')" class="return_img" :src="imageUrl + 'green_back.png'" mode=""></image>
		</view>
		<view class="data">
			<image class="head_img" :src="headImg" mode="" @tap="chooseHead"></image>
			<input :value="chageName" @input="chageNamebtn" class="user_name" placeholder="宝贝昵称(最多12位中文/英文/数字)"></input>
		</view>
		<view @tap="saveNamebtn" class="submit text-center font-18 margin-auto">保存</view>
		<!-- <button type="default" open-type="contact">打开客服</button> -->
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../config/index.js'
	import {getUserInfo,pushUserHeaderImg,loginOut,updateUserInfo,updateNickName} from '../../api/index.js'
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				chageName:'',
				saveName:'',
				headImg:''
			};
		},
		onLoad() {
			this.getUserInfoUl()
		},
		methods: {
			getUserInfoUl(){
				
				getUserInfo().then((res)=>{
					this.headImg = res.data.userImg
					this.bookTypeTxt  = res.data.userName
					console.log(res)
				})
			},
			chooseHead(){
				let that = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						const tempFilePaths = res.tempFilePaths;
						const token = uni.getStorageSync('token')
						uni.uploadFile({
									url: 'http://192.168.124.7:8081/user/pushUserHeaderImg', //仅为示例，非真实的接口地址
									filePath: tempFilePaths[0],
									name: 'headImg',
									header:{
										'token':token
									},
									success: (uploadFileRes) => {
										
										let data = JSON.parse(uploadFileRes.data)
										console.log(data)
										that.headImg = data.data
										// console.log(uploadFileRes.data);
									}
						});
					}
				});
			},
			//修改名字
			chageNamebtn(e){
				console.log(e.detail.value)
				this.chageName = e.detail.value
			},
			saveNamebtn(){
				
					updateUserInfo({
						"userName":this.chageName
					}).then((res)=>{
						uni.showToast({
							title:'修改成功',
							duration: 2000,
							icon: 'none'
						});
						uni.redirectTo({
							url: '../user/index'
						})
						console.log("111",res)
					})
			},
			//跳转
			jump(item) {
				if (item == 'fh') {
					uni.redirectTo({
						url: '../user/index'
					})
				}
			},
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
		background: linear-gradient(0deg,#87E4C8,#C3F3E4);
		color: #000000;
		.title{
			width: 100%;
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
			font-size: 18rpx;
			font-family: PingFang-SC-Bold, PingFang-SC;
			font-weight: bold;
			background: linear-gradient(0deg,#87E4C8,#C3F3E4);
		}
		.return {
			position: fixed;
			top: 6rpx;
			left: 15rpx;
			.return_img {
				width: 32rpx;
				height: 32rpx;
			}
		}
		.data{
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 20rpx;
			.head_img{
				width: 60rpx;
				height: 60rpx;
				border-radius: 30rpx;
				border: 2rpx #59DEC9 solid;
				margin-right: 20rpx;
			}
			.user_name{
				padding: 5rpx;
				padding-left: 8rpx;
				font-size: 16rpx;
				width:300rpx;
				height: 30rpx;
				border-radius: 20rpx;
				background: #FFFFFF;
				// border: 1rpx #BBC8C4 solid;
			}
		}
		.submit {
			margin-top: 70rpx;
			width: 180rpx;
			height: 40rpx;
			line-height: 40rpx;
			color: #ffffff;
			background: #24a591;
			border-radius: 20rpx;
		}
	}
</style>
