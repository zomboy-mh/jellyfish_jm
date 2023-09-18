<template>
	<view class="box">
		<view class="user_box1">
			
		</view>
		<view class="user_box2">
			
		</view>
		<view class="green_back display-flex" @tap="jump()">
			<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
		</view>
		<view class="userBox">
			<view class="userImgBox">
				<image class="userImg" :src="headImg" mode="" @tap="chooseHead"></image>
			</view>
			
			<view class="txt_input">{{bookTypeTxt}}</view>
			<!-- <input class="txt_input" v-model="bookTypeTxt" placeholder="昵称"></input> -->
			<!-- <view class="chageName" @tap="updateUserInfoUl">修改</view> -->
		</view>
	
		<image class="customer" :src="imageUrl + 'kefu_g.png'" @tap="jumpkefu()" mode=""></image>
		<image class="customer1" :src="imageUrl + 'user_set_g.png'" @tap="jumpAsk()" mode=""></image>
		<!-- 账号中心 -->
		<view class="account_centerBor">
			<view class="account_center">
				<view class="learndetail border_bottom padding-top-20" @tap="jump('learn')">
					<view class="learn_left">
						<image class="learn_img" :src="imageUrl + 'user_learn.png'" mode=""></image>
						<view class="learn_txt">学习报告</view>
					</view>
					<image class="learn_jump" :src="imageUrl + 'userIn_g.png'" mode=""></image>
				</view>
				<view class="learndetail border_bottom padding-top-20" @tap="jump('plan')">
					<view class="learn_left">
						<image class="learn_img" :src="imageUrl + 'lav_g.png'" mode=""></image>
						<view class="learn_txt">法律条款和隐私中心</view>
					</view>
					<image class="learn_jump" :src="imageUrl + 'userIn_g.png'" mode=""></image>
				</view>
				<view class="learndetail border_bottom padding-top-20" @tap="jump('vip')">
					<view class="learn_left">
						<image class="learn_img" :src="imageUrl + 'user_vip.png'" mode=""></image>
						<view class="learn_txt">闯关全部解锁</view>
					</view>
					<image class="learn_jump" :src="imageUrl + 'userIn_g.png'" mode=""></image>
				</view>
				<view class="learndetail padding-top-20" @tap="getloginOut">
					<view class="learn_left">
						<image class="learn_img" :src="imageUrl + 'loginout_g.png'" mode=""></image>
						<view class="learn_txt">退出登录</view>
					</view>
					<image class="learn_jump" :src="imageUrl + 'userIn_g.png'" mode=""></image>
				</view>
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
				bookTypeTxt:'',
				vueappurl:'',
				headImg:''
			}
		},
		onLoad() {
			this.getUserInfoUl()
		},
		methods: {
			jump(data){
				if(data === 'learn'){
					uni.navigateTo({
						url: 'learnDetails',
						
					});
				}else if(data === 'vip'){
					uni.navigateTo({
						url: '../checkout/purchasePlan/index',
						
					});
				}else{
					uni.navigateTo({
						url: '../index/index',
						
					});
				}
				
			},
			getUserInfoUl(){
				
				getUserInfo().then((res)=>{
					this.headImg = res.data.userImg
					this.bookTypeTxt  = res.data.userName
					console.log(res)
				})
			},
			updateUserInfoUl(){
				updateUserInfo({
					"userName":this.bookTypeTxt
				}).then((res)=>{
					console.log("111",res)
				})
			},
			jumpAsk(){
				uni.navigateTo({
					url: 'askQuestion',
					
				});
			},
			jumpkefu(){
				uni.navigateTo({
					url: 'feedBack',
					
				});
			},
			getloginOut(){
				loginOut().then((res)=>{
					 uni.clearStorage()
					 uni.navigateTo({
					 	url: '../logon/logon',
					 	
					 });
				})
			},
			chooseHead(){
				uni.navigateTo({
					url: 'userName',
					
				});
				
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		position: fixed;
		width: 100%;
		height: 100%;
		background: #cccccc;
		.user_box1{
			width: 100%;
			height: 100%;
			position: fixed;
			background: linear-gradient(#87E4C8 0%, #C3F3E4 0%);
			z-index: -1;
		}
		.green_back{
			position: absolute;
			left: 2%;
			top: 5%;
			z-index: 999;
			.green_back_img{
				width: 32rpx;
				height: 32rpx;
			}
		}
		.customer{
			position: absolute;
			right: 25%;
			top: 10%;
			width: 60rpx;
			height: 60rpx;
			border-radius: 30rpx;
		}
		.customer1{
			position: absolute;
			right: 15%;
			top: 10%;
			width: 60rpx;
			height: 60rpx;
			border-radius: 30rpx;
		}
		.userBox{
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 140rpx;
			height: 50rpx;
			position: absolute;
			left: 15%;
			top: 8%;
			.userImgBox{
				width: 66rpx;
				height: 66rpx;
				background: linear-gradient(to bottom, #23A591, #54E3CD);
				border-radius: 33rpx;
				.userImg{
					width: 60rpx;
					height: 60rpx;
					margin-left: 3rpx;
					margin-top: 3rpx;
					// border-width: 2rpx;
					border-radius: 30rpx;
					// border: 2px solid ;
					box-shadow: 0 4rpx 6rpx 0 rgba(89, 89, 89, 0.2000);
				}
			}
			
			.txt_input{
				width: 60rpx;
				height: 30rpx;
				font-family: PingFang-SC-Heavy, PingFang-SC;
				font-weight: 800;
				color: #0F805E;
				line-height: 30rpx;
				font-size: 18rpx;
			}
			.chageName{
				width: 50rpx;
				height: 30rpx;
				background-color: #F7F7FB;
				box-shadow: 0 4rpx 6rpx 0 rgba(89, 89, 89, 0.2000);
				border-radius: 5rpx;
				color: #666666;
				line-height: 30rpx;
				font-size: 14rpx;
				text-align: center;
			}
			
		}
		.account_centerBor{
			position: absolute;
			left: 14%;
			top: 30%;
			width: 72%;
			height:220rpx;
			background: linear-gradient(to top, #23A591, #54E3CD);
			box-shadow: 0 4rpx 6rpx 0 #28BD98;
			border-radius: 8rpx;
			.account_center {
				width: 98%;
				height: 96%;
				margin-left: 1%;
				margin-top: 1%;
				background: #ffffff;
				
				border-radius: 8rpx;
				// border-radius: 20rpx;
				overflow: auto;
				.learndetail {
					width: 90%;
					height: 20rpx;
					margin-left: 20rpx;
					padding-bottom: 10rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.learn_left {
						display: flex;
						
						.learn_img {
						
							width: 42rpx;
							height: 42rpx;
						}
						
						.learn_txt {
							margin-left: 20rpx;
							font-size: 16rpx;
							text-align: center;
							line-height: 42rpx;
						}
					}
						
					.learn_jump {
						width: 10rpx;
						height: 15rpx;
					}
						
				}
						
				.border_bottom {
					border: 1rpx #e5f1ed solid;
					
					border-left: transparent;
					border-top: transparent;
					border-right: transparent;
				}
			}
		}
		
		.logonOut{
			position: absolute;
			right: 50rpx;
			bottom: 20rpx;
			width: 60rpx;
			height: 30rpx;
			background: #F7F7FB;
			border: 1px solid #000;
			text-align: center;
			line-height: 30rpx;
		}
	}
</style>
