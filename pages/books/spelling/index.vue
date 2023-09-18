<template>
	<view class="content">
		<view class="head">
			<view class="green_back display-flex" @tap="jump()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="library_title">
				<view class="library_title_txt  font-16">自然拼读-N</view>
			</view>
		</view>
		
		<view class="bodyBox">
			<view class="bookBox" >
				<view class="bookBoxItem" :style="{'background':color_bg}" @tap="jumpPhonics1()">
					<view class="bookType" :style="{'background':color_bg}">
						<view class="bookNumb">1</view>
					</view>
					<view class="bookBg">
						<image class="bookImg" :src="formalUrl+phonicsLogo" mode=""></image>
					</view>
					<view class="book_ont">
						<view class="not_nt1" :style="{'background':color_bg1}"></view>
						<view class="not_nt2" :style="{'background':'linear-gradient(90deg,'+color_bg+',#FF8950)'}" ></view>
						<view class="not_nt3"></view>
					</view>
				</view>
				<view class="bookBoxItem2" @tap="jumpPhonics2()">
					<view class="bookType">
						<view class="bookNumb">2</view>
					</view>
					<view class="bookBg">
						<image  class="bookImg" :src="formalUrl+itmDataIcon1" mode=""></image>
					</view>
					<view class="book_ont">
						<view class="not_nt1" :style="{'background':'#d34e0d'}"></view>
						<view class="not_nt2" :style="{'background':'linear-gradient(90deg,#ff8950, #FFD35C)'}"></view>
						<view class="not_nt3" :style="{'background':'#c8950c'}"></view>
					</view>
				</view>
				<view class="bookBoxItem3">
					<view class="bookType">
						<view class="bookNumb">3</view>
					</view>
					<view class="bookBg">
						<image class="bookImg" :src="formalUrl+itmDataIcon2" mode=""></image>
					</view>
				</view>
				
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getPhonicsDetail,getPhonicsPrdList} from '../../../api/index.js'
	export default {
		components: {
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				bookName:'自然拼读',
				bookList:[],
				bookListDto:{},
				color_bg:'',
				color_bg1:'',
				phonicsLogo:'',
				itmDataIcon1:'',
				itmDataIcon2:'',
				phonicsId1:''
			}
		},
		onLoad(open) {
			
			this.color_bg = uni.getStorageSync('currentStyle')
			this.phonicsId = uni.getStorageSync('phonicsId');
			
				this.getPhonicsPrdListUl()
			if(this.color_bg == '#f71312'){
				this.color_bg1 = '#a23534'
			}if(this.color_bg == '#f59a0e'){
				this.color_bg1 = '#ba750a'
			}if(this.color_bg == '#eee106'){
				this.color_bg1 = '#bab005'
			}if(this.color_bg == '#576dff'){
				this.color_bg1 = '#1b31c6'
			}if(this.color_bg == '#9102db'){
				this.color_bg1 = '#650d92'
			}
		
		},
		methods: {
			
			jump() {
				uni.reLaunch({
						url: 'spelling'
				})
			},
			jumpPhonics1(){
				uni.reLaunch({
						url: 'phonic?phonicsId=' + this.phonicsId1
				})
			},
			jumpPhonics2(){
				uni.reLaunch({
						url: 'phonicRoll?phonicsId=' + this.phonicsId2
				})
			},
			jumpBook(id){
				
				uni.reLaunch({
					url: '../index'
				})
			},
			getPhonicsPrdListUl(){
				getPhonicsPrdList({
					'phonicsId':this.phonicsId
				}).then((res)=>{
					console.log("列表",res)
					this.phonicsLogo = res.data.phonicsVo.phonicsLogo;
					this.phonicsId1 = res.data.phonicsVo.phonicsId;
					this.phonicsId2 = res.data.itemVos[0].itmDataId;
					this.itmDataIcon1 = res.data.itemVos[0].itmDataIcon
					this.itmDataIcon2 = res.data.itemVos[1].itmDataIcon
					
					
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
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 70rpx;
				z-index: 100;
				.green_back{
					position: absolute;
					left: 3%;
					top: 50%;
					margin-top: -26rpx;
					z-index: 999;
					.green_back_img{
						width: 34rpx;
						height: 34rpx;
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
						background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/mechanism_ngt_g.png');
						background-repeat: no-repeat;
						background-size: 100% 100%;
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
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/letter_bg.png');
				background-repeat: no-repeat;
				background-size: 100% 100%;
				z-index: 1;
				.bookBox{
					position: absolute;
					left: 50%;
					top: 50%;
					margin-left: -250rpx;
					margin-top: -60rpx;
					width: 500rpx;
					height: 150rpx;
					display: flex;
					// justify-content: space-between;
					align-items: center;
					.bookBoxItem2{
						margin-left: 25rpx;
						background: #f75d12;
						z-index: 1;
						.bookType{
								background: #f75d12;
						}
					}
					.bookBoxItem3{
						margin-left: 25rpx;
						background: #ffba00;
						.bookType{
							background: #ffba00;
						}
					}
					.bookBoxItem3,.bookBoxItem2,.bookBoxItem{
						width: 140rpx;
						height: 140rpx;
						// background: #f71312;
						border-radius: 40rpx;
						position: relative;
						.bookType{
							width: 36rpx;
							height: 36rpx;
							
							border: 5rpx #FFFFFF solid;
							border-radius: 5rpx;
							position: absolute;
							left: 50%;
							margin-left: -18rpx;
							top: -18rpx;
							transform: rotate(45deg);
							.bookNumb{
								position: absolute;
								left: 50%;
								top: 50%;
								width: 36rpx;
								height: 36rpx;
								text-align: center;
								line-height: 36rpx;
								margin-left: -18rpx;
								margin-top: -18rpx;
								transform: rotate(-45deg);
								color: #fff;
								font-size: 24rpx;
							}
						}
						.bookBg{
							position: absolute;
							left: 50%;
							top: 50%;
							width: 84rpx;
							height: 60rpx;
							margin-left: -42rpx;
							margin-top: -30rpx;
							z-index: 5;
							.bookImg{
								width: 84rpx;
								height: 60rpx;
							}
						}
						.book_ont{
							position: absolute;
							right: -55rpx;
							top: 50%;
							width: 80rpx;
							height: 20rpx;
							margin-top: -10rpx;
							.not_nt1{
								position: absolute;
								left: 0;
								top: 0;
								width: 20rpx;
								height: 20rpx;
								border-radius: 10rpx;
								background: #a23534;
							}
							.not_nt2{
								position: absolute;
								left: 10rpx;
								top: 5rpx;
								width: 60rpx;
								height: 10rpx;
								border-radius: 10rpx;
								
								z-index: 3;
							}
							.not_nt3{
								position: absolute;
								left: 60rpx;
								top: 0rpx;
								width: 20rpx;
								height: 20rpx;
								border-radius: 10rpx;
								background: #d34e0d;
								z-index: 2;
							}
						}
					}
				}
			}
		}
</style>
