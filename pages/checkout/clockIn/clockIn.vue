<template>
	<view>
		<view class="loading" v-if="loading">
			<image class="loading_img" :src="imageUrl + 'loading.gif'" mode=""></image>
		</view>
		<view class="zhezhaoceng">
			<image class="home_bg" :src="imageUrl + 'letter_bg.png'" mode=""></image>
			<view class="return">
				<image @tap="jump('fh')" class="return_img" :src="imageUrl + 'user_fh.png'" mode=""></image>
			</view>
			<view class="flex align-center star_box">
				<image class="star" :src="imageUrl + 'gold1.png'" mode=""></image>
				<view class="integral bg-white font-17 font-weight8">{{gold}}</view>
			</view>
			<view v-if="bookshow" class="font-16 join_rule1" @tap = "openRule">打卡规则</view>
		</view>
		<view class="bigbox" v-if="!bookshow">
			<view class="box_left">
				<view class="tabcard_one" :class="item.chose?'bg-0D79DE':'bg-EFF4F7'" v-for="(item,index) in tabList" :key="index" @tap="choseTap(item)">
					<view class="font-15">{{item.product_name}}</view>
					<image class="tabcard_jup" :src="imageUrl + 'detail_jump.png'" mode=""></image>
				</view>
				<view class="font-15 cl-white join_options" @tap="openBuy">参与打卡</view>
				<view class="font-13 join_rule" @tap = "openRule">打卡规则</view>
			</view>
			<view class="box_right">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
							:duration="duration" :display-multiple-items="3" :current="swiperCurrent">
					<swiper-item v-for="(item,index) in bookList" :key="index">
						<view class="swiper-item">
							<view class="book_box">
								<image class="book_img font-12" :src="formalUrl + item.bookImg" mode="aspectFit"></image>
								<view class="book_frame">
									<image class="book_frame1" :src="imageUrl + 'book_frame.png'" mode=""></image>
									<image class="book_frame2" :src="imageUrl + 'book_frame.png'" mode=""></image>
								</view>
								<view class="book_tips">
									<view class="font-16 cl-white book_tipstxt">{{(index+1)}}</view>
									<image class="book_tipsimg" :src="imageUrl + 'book_tips.png'" mode=""></image>
						 		</view>
								<view class="book_level cl-white font-17">
									{{item.bookLevel}}
								</view>
							</view>
							
							<view class="lock font-15">
								未解锁
							</view>
							<view class="swiper-itembox" v-if="true">
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		
		<view class="bigbox1" v-if="bookshow">
			
			<view class="box_right">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
							:duration="duration" :display-multiple-items="4" :current="swiperCurrent">
					<swiper-item v-for="(item,index) in paybookList" :key="index"  @tap="bookJump(item)">
						<view class="swiper-item">
							<view class="book_box">
								<image class="book_img font-12" :src="formalUrl + item.book_img" mode=""></image>
								<view class="book_frame">
									<image class="book_frame1" :src="imageUrl + 'book_frame.png'" mode=""></image>
									<image class="book_frame2" :src="imageUrl + 'book_frame.png'" mode=""></image>
								</view>
								<view class="book_tips">
									<view class="font-16 cl-white book_tipstxt">{{index+1}}</view>
									<image class="book_tipsimg" :src="imageUrl + 'book_tips.png'" mode=""></image>
								</view>
								<view class="book_level cl-white font-17">
									{{item.reading_level}}
								</view>
							</view>
							<view v-if="item.finish_state == 0">
								<view class="lockbox">
									
								</view>
								<view class="lock font-15">
									未解锁
								</view>
								<view class="swiper-itembox" >
									
								</view>
								<image class="lockimg" :src="imageUrl + 'lock.png'" mode=""></image>
							</view>
							<image v-if="index%2==0" class="dotted1" :src="imageUrl + 'dotted_top.png'" mode=""></image>
							<image v-else class="dotted" :src="imageUrl + 'dotted_bottom.png'" mode=""></image>
							<image v-if="item.finish_state == 2 && item.is_share == 1" class="finish_medal" :src="imageUrl + 'finish_medal.png'" mode=""></image>
							<view v-if="item.finish_state != 0" class="finish_time font-14">{{item.date_string}}</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="zhezhaoceng z-index9" v-if="ruleshow">
			<view class="zhezhaocengBa" @tap="ruleshow = false"></view>
			<view class="rule_tips">
				<image class="rule_tipsimg" :src="imageUrl + 'rule_tips1.png'" mode="">
					<view class="look_rule" @tap="jump('look')"></view>
					<view class="pay_rule" @tap="jump('pay')"></view>
					<view class="close_rule" @tap="ruleshow = false"></view>
				</image>
				
			</view>
		</view>
	</view>
</template>

<script>
	import {Audio,voiceStart} from "../../../utils/utils.js";
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getPhonicsDetail} from '../../../api/index.js'
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				indicatorDots: false,
				tabList:[
					{
						product_name:'7天0元学'
					},
					{
						product_name:'21天0元学'
					}
				],
				autoplay: false,
				interval: 2000,
				duration: 500,
				swiperCurrent: 0,
				ruleshow:false,
				bookshow:false,
				list7:[],
				list21:[],
				bookList:[
					{
						bookImg:'RDMST_BookEntity/cover/1a398408130d41bb9fdca01113491615.png',
						bookLevel:'A'
					},
					{
						bookImg:'RDMST_BookEntity/cover/864f069fb2614cc78d8c594cd9881885.png',
						bookLevel:'A'
					},
					{
						bookImg:'RDMST_BookEntity/cover/24639eeb88244473a62a6c4f124ab51b.png',
						bookLevel:'A'
					},
					{
						bookImg:'RDMST_BookEntity/cover/f526a1e124464d4391b7b3fb203b69dc.png',
						bookLevel:'A'
					},
				],
				productId:1,
				paybookList:[],
				gold:0,
				loading:false
			}
		},
		onLoad() {
			// this.queryClockPlanUL();
		},
		methods: {
			queryClockPlanUL(){
				queryClockPlan().then(res=>{
					console.log("数据",res)
					this.list7 = res.data.list7;
					this.list21 = res.data.list21;
					this.bookList = this.list7;
					this.tabList = res.data.product;
					this.gold = res.data.gold;
					if(res.data.isPay == 1){
						if(res.data.isExam == 0){
							uni.setStorageSync('isactivity', 1);
							uni.reLaunch({
								url: '/pages/checkout/survey'
							})
						}else{
							this.bookshow = true;
							this.paybookList = res.data.dtos[res.data.dtos.length-1].list
						}
						
					}else{
						this.bookshow = false
					}
					setTimeout(()=>{
						this.loading = false
					},300)
					console.log("书本",this.paybookList)
					// this.tabList.map(())
				})
			},
			jump(item){
				if(item == 'fh'){
					uni.reLaunch({
						url: '../../index/index'
					})
				}else if(item == 'look'){
					uni.reLaunch({
						url: '/pagesA/activity/activityRule'
					})
				}else if(item == 'pay'){
					uni.navigateTo({
						url: '/pages/checkout/activityBuy?productId='+this.productId
					})
				}
			},
			openRule(){
				uni.reLaunch({
					url: '/pagesA/activity/activityRule'
				})
			},
			choseTap(item){
				
				this.productId = item.id
				this.tabList.map((its,index)=>{
					its.chose = false;
				})
				item.chose = true;
				this.$forceUpdate()
				if(item.id == 1){
					this.bookList = this.list7
				}else{
					this.bookList = this.list21
				}
			},
			bookJump(item) {
			
				if (item.is_today == 1) return;
				uni.navigateTo({
					url: '../../pagesB/books/index?activity='+ true
				})
				uni.setStorageSync('activity', true);
				uni.setStorageSync('recordId', item.record_id);
			},
			openBuy(){
				this.ruleshow = !this.ruleshow
			}
		}
	}
</script>

<style lang="scss" scoped>
	.loading{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #FFFFFF;
		z-index: 999;
		.loading_img{
			width: 200rpx;
			height: 200rpx;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -100rpx;
			margin-left: -100rpx;
		}
	}
	page{
		padding: 0;
		margin: 0;
	}
	.home_bg{
		width: 100%;
		height: 100%;
		z-index: 50;
	}
	.return {
		position: fixed;
		top: 4%;
		left: 0;
		z-index: 100;
		.return_img {
			width: 63rpx;
			height: 35rpx;
		}
	}
	.join_rule1{
			position: absolute;
			top: 20rpx;
			right: 15%;
				width: 66rpx;
				color: #FFFFFF;
				border-bottom: 1rpx #FFFFFF solid;
				z-index: 1;
			}
	.star_box{
		position: fixed;
		left:9%;
		top: 4%;
		.star {
			position: absolute;
			width: 35rpx;
			height: 35rpx;
			z-index: 1;
		}
		
		.integral {
			margin-left: 24rpx;
			padding: 5rpx 23rpx 5rpx 27rpx;
			box-shadow: 0 1rpx 4rpx 0 rgba(0, 0, 0, 0.4);
			border-radius: 0 16rpx 16rpx 0;
		}
	}
	.bigbox{
		position: absolute;
		top: 20%;
		left: 8%;
		width: 93%;
		height: 236rpx;
		display: flex;
		z-index: 100;
		.box_left{
			width: 23%;
			height: 100%;
			background: #FFFFFF;
			border-radius: 15rpx;
			padding: 22rpx 12rpx 0rpx 12rpx;
				text-align: center;
			.tabcard_one{
				width: 100%;
				height: 35rpx;
				// background: #0D79DE;
				border-radius: 5rpx;
				line-height: 35rpx;
				display: flex;
				justify-content: center;
				text-align: center;
				// color: #FFFFFF;
				position: relative;
				margin-bottom: 5rpx;
				.tabcard_jup{
					// margin-left: 20rpx;
					position: absolute;
					right: 8rpx;
					top: 12rpx;
					// margin: 9rpx 10rpx 5rpx;
					width: 8rpx;
					height: 12rpx;
				}
			}
			.join_options{
				width: 66%;
				height: 34rpx;
				line-height: 34rpx;
				text-align: center;
				background: #FA1F44;
				border-radius: 17rpx;
				margin-left: 17%;
				margin-top: 50%;
			}
			.join_rule{
				width: 53rpx;
				margin: 0 auto;
				margin-top: 5rpx;
				color: #FA1F44;
				
				border-bottom: 1rpx #FA1F44 solid;
			}
		}
		
		.box_right{
			width: 80%;
			height: 100%;
			border-radius: 10rpx;
			background: #FFFFFF;
			margin-left: 10rpx;
			
			.swiper{
				margin-top: 5%;
				margin-left: 5%;
				height: 80%;
				.swiper-item{
					width: 85%;
					height: 100%;
					background: #FFFFFF;
					border-radius: 20rpx;
					// padding: 10rpx;
					
					box-shadow: 0 2rpx 5rpx 0 rgba(15, 84, 64, 0.45);
					// box-shadow: -1rpx 0 2rpx 2rpx #000000;
					.book_box{
						width: 96%;
						height: 70%;
						// background: #FFFFFF;
						border-radius: 10rpx;
						position: relative;
						border: 5rpx #5592CC solid;
						.book_level{
							position: absolute;
							left: -1rpx;
							bottom: -2rpx;
							width: 40rpx;
							height: 20rpx;
							line-height: 20rpx;
							
							text-align: center;
							background: url(https://readrsc.oss-cn-hangzhou.aliyuncs.com/read61v2_rsc/DEFT_IMG/wx/book_level.png);
							background-size: 100% 100%;
						}
						.book_img{
							width: 100%;
							height: 100%;
							border-radius: 5rpx;
						}
						.book_frame{
							position: absolute;
							left: -13rpx;
							top: 25%;
							.book_frame1{
								width: 26rpx;
								height: 11rpx;
							}
							.book_frame2{
								margin-top: 40rpx;
								width: 26rpx;
								height: 11rpx;
							}
						}
						.book_tips{
							position: absolute;
							top: -7rpx;
							right: 8rpx;
							.book_tipstxt{
								position: absolute;
								top: 7rpx;
								right: 17rpx;
								
								
							}
							.book_tipsimg{
								width: 35rpx;
								height: 32rpx;
							}
						}
					}
					.lock{
						width: 70rpx;
						height: 30rpx;
						line-height: 30rpx;
						border-radius: 15rpx;
						text-align: center;
						margin: 0 auto;
						margin-top: 10rpx;
						background: #E6EFF5;
						color: #999999;
					}
					.swiper-itembox{
						position: absolute;
						left: 0;
						top: 0;
						width: 85%;
						height: 100%;
						background: #000000;
						opacity: 0.15;
						border-radius: 20rpx;
						
					}
					
				}
				
			}
		}
	}
	.bigbox1{
		position: absolute;
		top: 20%;
		left: 8%;
		width: 93%;
		height: 236rpx;
		display: flex;
		z-index: 100;
		// background: #FFFFFF;
		.box_right{
			width: 100%;
			height: 100%;
			border-radius: 10rpx;
			// background: #FFFFFF;
			margin-left: 10rpx;
			
			.swiper{
				margin-top: 5%;
				margin-left: 3%;
				height: 80%;
				
				.swiper-item{
					width: 83%;
					height: 100%;
					background: #FFFFFF;
					border-radius: 20rpx;
					padding: 15rpx 15rpx 0 15rpx;
					box-shadow: 3px 2px 9px 0px rgba(19, 65, 103, 0.32);
					.book_box{
						width: 100%;
						height: 80%;
						background: #FFFFFF;
						border-radius: 10rpx;
						position: relative;
						border: 5rpx #5592CC solid;
						.book_level{
							position: absolute;
							left: 0;
							bottom: -3rpx;
							width: 42rpx;
							height: 20rpx;
							line-height: 20rpx;
							
							text-align: center;
							background: url(https://readrsc.oss-cn-hangzhou.aliyuncs.com/read61v2_rsc/DEFT_IMG/wx/book_level.png);
							background-size: 100% 100%;
						}
						.book_img{
							width: 100%;
							height: 100%;
							border-radius: 5rpx;
						}
						.book_frame{
							position: absolute;
							left: -13rpx;
							top: 25%;
							.book_frame1{
								width: 26rpx;
								height: 11rpx;
							}
							.book_frame2{
								margin-top: 40rpx;
								width: 26rpx;
								height: 11rpx;
							}
						}
						.book_tips{
							position: absolute;
							top: -7rpx;
							right: 8rpx;
							.book_tipstxt{
								position: absolute;
								top: 7rpx;
								right: 16rpx;
							}
							.book_tipsimg{
								width: 35rpx;
								height: 32rpx;
							}
						}
						
						
						
					}
					.lock{
						width: 70rpx;
						height: 30rpx;
						line-height: 30rpx;
						border-radius: 15rpx;
						text-align: center;
						margin: 0 auto;
						margin-top: 10rpx;
						background: #E6EFF5;
						color: #999999;
					}
					.swiper-itembox{
						position: absolute;
						left: 0;
						top: 0;
						width: 83%;
						height: 100%;
						background: #000000;
						opacity: 0.15;
						border-radius: 20rpx;
						
					}
					.lockimg{
						position: absolute;
						left:50%;
						top: 50%;
						width: 48rpx;
						height: 36rpx;
						margin-top: -20rpx;
						margin-left: -40rpx;
						
					}
					.lockbox{
						position: absolute;
						left:50%;
						top: 50%;
						margin-top: -35rpx;
						margin-left: -50rpx;
						width: 70rpx;
						height: 70rpx;
						background: #010101;
						opacity: 0.5;
						border-radius: 35rpx;
						
					}
					.dotted{
						position: absolute;
						right: 0;
						top: 70rpx;
						width: 28rpx;
						height: 70rpx;
					}
					.dotted1{
						position: absolute;
						right: 0;
						top: 30rpx;
						width: 28rpx;
						height: 70rpx;
					}
					.finish_medal{
						position: absolute;
						bottom: 0;
						right: 30rpx;
						width: 60rpx;
						height: 80rpx;
					}
					.finish_time{
						width: 100%;
						height: 20rpx;
						line-height: 20rpx;
						margin-top: 10rpx;
						color: #5592CC;
					}
					
				}
				
			}
			}
	}
	.rule_tips{
		position: relative;
		left: 50%;
		top: 50%;
		margin-top: -125rpx;
		margin-left: -160rpx;
		
		.rule_tipsimg{
			width: 320rpx;
			height: 250rpx;
		}
		.look_rule{
			width: 100rpx;
			height: 30rpx;
			position: absolute;
			bottom: 30rpx;
			left: 40rpx;
			// background: red;
		}
		.pay_rule{
			width: 100rpx;
			height: 30rpx;
			position: absolute;
			bottom: 35rpx;
			left: 170rpx;
			// background: blue;
		}
		.close_rule{
			width: 20rpx;
			height: 20rpx;
			position: absolute;
			top: 10rpx;
			left: 290rpx;
			// background: blue;
		}
	}
</style>
