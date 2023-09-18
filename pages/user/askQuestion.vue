<template>
	<view class="content">
		<view class="head">
			<view class="green_back display-flex" @tap="jump()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="library_title">
				<view class="library_title_txt  font-16">{{bookName}}</view>
			</view>
		</view>
		
		<view class="bodyBox">
			<view class="textArea">
				<view class="tabItem" v-for="(item,index) in tabList" :key="index">
					<view class="tabTop" @tap="item.show=!item.show">
						<view class="margin-left-10">{{item.name}}</view>
						<view  class="icon3" :class="item.show?'icon-hover3':''"></view>
					</view>
					<view class="tabTxt" v-if="item.show"></view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../config/index.js'
	import {getMoerduoList,getMoerduoDetail} from '../../api/index.js'
	import {Audio,voiceStart} from "../../utils/utils.js"
	export default {
		components: {
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				bookName:'常见问题',
				show:false,
				tabList:[
					{
						name:'登录',
						show:false
					},
					{
						name:'注册使用',
						show:false
					},
					{
						name:'在线支付',
						show:false
					},
					{
						name:'伴读课堂',
						show:false
					},
					{
						name:'关于机器型号',
						show:false
					},
					{
						name:'留言咨询',
						show:false
					},
					
				]
				
			}
		},
		onLoad() {
			
		},
		methods: {
			jump() {
				uni.reLaunch({
						url: 'index'
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
			.head{
				display: flex;
				position: relative;
				left: 0;
				top: 0;
				width: 100%;
				height: 50rpx;
				z-index: 100;
				.green_back{
					position: absolute;
					left: 3%;
					top: 50%;
					margin-top: -16rpx;
					z-index: 999;
					.green_back_img{
						width: 30rpx;
						height: 30rpx;
					}
				}
				.library_title {
						position: fixed;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
						z-index: 50;
						width: 100%;
						height: 50rpx;
						// background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/mechanism_ngt_g.png');
						background: #169F7A;
						// background-repeat: no-repeat;
						// background-size: 100% 100%;
						.library_title_txt {
							width: 100%;
							height: 50rpx;
							line-height: 50rpx;
							text-align: center;
							color: #FFFFFF;
						}
					}
			}
			
			.bodyBox{
				display: flex;
				position: fixed;
				left: 0;
				top: 50rpx;
				width: 100%;
				height: 100%;
				// background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/letter_bg.png');
				background: #FFFFFF;
				z-index: 1;
				.textArea{
					width: 600rpx;
					height: 70%;
					position: absolute;
					left: 50%;
					top: 10%;
					margin-left: -300rpx;
					overflow: auto;
					.tabItem{
						width: 100%;
						margin-top: 5rpx;
						.tabTop{
							width: 100%;
							height: 30rpx;
							display: flex;
							justify-content: space-between;
							align-items: center;
							background: #f8f4f8;
							line-height: 20rpx;
							.icon3 {
								border-top: 5px solid #434343;
								border-left: 5px solid #434343;
								border-bottom: 5px solid transparent;
								border-right: 5px solid transparent;
								height: 5px;
								width: 5px;
								margin-right: 8rpx;
								margin-bottom: 3rpx;
								transform: rotate(225deg);
								transition: .2s;
							}
							.icon-hover3 {
								transform: rotate(45deg);
							}
						}
						.tabTxt{
							width: 100%;
							height: 100rpx;
							background: #f8f4f8;
						}
					}
					
				}
				
			}
		}
</style>
