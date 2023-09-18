<template>
	<view>
		<view>
			<image class="wh" :src="imageUrl+bugBg" mode="widthFix">
			</image>
			
		</view>
		<view v-if="notReport == 'yes'" @tap="excPup = true" class="convert position-f font-18 bg-white text-center">激活码兑换</view>
		<view  @tap="goVideo" class="convert1 position-f font-18 bg-white text-center">能力测评报告分析讲解</view>
		<view  @tap="goBack" class="convert2 position-f font-22 bg-white text-center">返回</view>
				<view class="box">
					<!-- <view class="box_top">开通会员  赠送福利 </view> -->
					<!-- <view class="box_center">
						<scroll-view class="box_center1"scroll-x>
							<view class="flex wh">
								<view :class="buys1 == index?'itemtwo':'itemtwo9'"  @tap="itembtn(item,index)" v-for="(item,index) in list" :key="index" class="margin-left-20">
									<image v-if="item.days == 0" class="itemtwo1":src="imageUrl+'welfare1.png'" mode=""></image>
									<view class="itemtwo2 font-bold">{{item.headline}}</view>
									<view class="itemtwo6">￥</view>
									<view class="itemtwo3">{{item.present_price}}</view>
									<view class="itemtwo4">{{item.present_price_describe}}</view>
										<image class="itemtwo5":src="imageUrl+'sign.png'" mode=""></image>
								</view>
							</view>
						</scroll-view>
						<view class="center_value">
							<view class="center_valueleft"  v-if="buys1 > 0">包含</view>
							<view class="center_valueright">
								<view class="margin-bottom-10" v-if="buys1 > 0" v-for="(item,index) in giftlist[0]" :key="index">{{item}}</view>
							</view>
						</view>
					</view> -->
					
					<view class="zhezhaoceng" v-if="buy2 == true">
						<view @tap="buy2 = false" class="zhezhaocengBa"></view>
						<view class="buy2">
							<view :class="coupon?'buy_btn1':'buy_btn'">
								<view　class="nobuy" @tap="nobuy">放弃福利</view>
								<view　class="nextbuy" @tap="payReadingComboUrl">继续开通</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="box_buttom_box" @tap="payReadingComboUrl">
			<view class="box_buttom">
				立即开通
			</view>
		</view>
		<!-- <view class="bgcolor1 font-20 flex align-center justify-center" >
			<u-radio-group v-model="protocolvule" class="margin-left-50">
				<u-radio shape="square"  @change="radioChange"></u-radio>
			</u-radio-group>
			<view class="font-20">我已阅读并同意</view>
			<view  @tap="jumpProtocol('protocol')">
				<view class="cl-00A475 font-20">《RAZ阅读隐私保护政策》</view></view>
			
			<view  class="font-20">和</view>
			
			<view @tap="jumpProtocol('protocoll')" class="margin-right-20">
				<view class="cl-00A475 font-20">《RAZ阅读用户服务协议》</view>
			</view>
			
		</view>
		<view class=" bgcolor font-18">*由于相关规范，iOS功能暂不可用</view> -->
		
		<!-- <view v-show="buys1 > 0">
			<image class="wh" :src="imageUrl+'activity7.png'" mode="widthFix"></image>
		</view>
		<view v-show="buys1 == 0">
			<image class="wh" :src="imageUrl+'test_bottom.png'" mode="widthFix"></image>
		</view> -->
		<!-- 购买成功 -->
		<view v-if="buyPup" class="zhezhaoceng">
			<view @tap="buyPup = false" class="zhezhaocengBa"></view>
			<view class="popup position-r bg-white margin-auto text-center" style="top: 30%;">
				<view style="padding: 63rpx 76rpx 45rpx;">
					<view class="font-36 font-weight5 padding-bottom">购买成功</view>
					<text class="font-31">Anan小朋友，你好呀！\n接下来就由我来带你挑战{{data.title}}的挑战，坚持就是胜利哟~</text>
					<view class="open font-36 font-weight5 margin-auto">开始挑战</view>
				</view>
			</view>
		</view>
		<!-- 兑换码 -->
		<view v-if="excPup" class="zhezhaoceng">
			<view @tap="excPup = false" class="zhezhaocengBa"></view>
			<view class="popup position-r bg-white margin-auto" style="top: 24%;">
				<view style="padding: 63rpx 43rpx 45rpx;">
					<view class="font-36 font-weight5 padding-bottom-50 text-center">兑换中心</view>
					<view class="flex align-center padding-top-20 padding-bottom-10">
						<view class="font-33 font-weight5 flex-shrink">卡 号：</view>
						<view class="input width">
							<input v-model="cardNumber" type="number" value="" />
						</view>
					</view>
					<view class="flex align-center padding-top">
						<view class="font-33 font-weight5 flex-shrink">密 码：</view>
						<view class="input width">
							<input v-model="password" type="text" value="" />
						</view>
					</view>
					<view @tap="excSubmit" :style="{opacity: opacity}"
						class="open cl-F64D04 margin-top-20 font-36 font-weight5 margin-auto text-center">确认兑换</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getMusicList,getVideoList,getItemByType} from '../../../api/index.js'
	export default {
		data() {
			return {
				phone:'13165951030',
				buys1:1,
				buy2:false,
				buy:false,
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				buyPup: false,
				excPup: false,
				optIf: false,
				opacity: 0.7,
				data: {},
				cardNumber: '',
				password: '',
				notReport: 'yes',
				typeNum: 4,
				list: [
					{
						headline:'免费',
						present_price:'1',
						present_price_describe:'月'
					},
					{
						headline:'免费',
						present_price:'1',
						present_price_describe:'月'
					},
					{
						headline:'免费',
						present_price:'1',
						present_price_describe:'月'
					},
					{
						headline:'免费',
						present_price:'1',
						present_price_describe:'月'
					}
					
				],
				giftlist:'',
				aimlist:{},
				coupon:false,
				couponIf:false,
				isUseCoupon:0,
				bottomshow:false,
				protocolvule:1,
				protocolState:false,
				bugBg:''
			}
		},
		onLoad(open) {
			if(open.typeNum == 1){
				this.bugBg = 'activity7.png'
			}else if(open.typeNum == 2){
				this.bugBg = 'activity21.png'
			}else if(open.typeNum == 3){
				this.bugBg = 'activity90.png'
			}else if(open.typeNum == 365){
				this.bugBg = 'activity365.png'
			}
		},
		watch: {
			cardNumber() {
				if (this.cardNumber != '' && this.password != '') {
					this.opacity = 1;
				} else {
					this.opacity = 0.7;
				}
			},
			password() {
				if (this.cardNumber != '' && this.password != '') {
					this.opacity = 1;
				} else {
					this.opacity = 0.7;
				}
			},
			optIf() {
				if (this.cardNumber != '' && this.password != '' && this.optIf == true) {
					this.opacity = 1;
				} else {
					this.opacity = 0.7;
				}
			},
		},
		methods: {
			itembtn(item,index){
				this.giftindex = true;
				this.buys1 = index;
				this.giftlist = [];
				// let giftlists = item.des
				let Illustrated =  item.des.split(",");
				this.giftlist.push(Illustrated)
				this.aimlist = item
			},
			goBack(){
				uni.redirectTo({
					url: 'index'
				})
			},
			couponBtn(){
				this.couponIf = !this.couponIf;
				if(this.couponIf){
					this.isUseCoupon = 1
				}else{
					this.isUseCoupon = 0
				}
			},
			radioChange(n){
				console.log("选择",n)
				this.protocolState = true
			},
			queryReadingCombosUrl() {
				queryReadingCombos().then(res => {
					
					this.giftlist = [];
					// this.giftlist = res.data[1].des;
					let Illustrated = res.data[1].des.split(",");
					this.giftlist.push(Illustrated)
					res.data.map(item => {
						if (item.days == 7) {
							item.typeNum = 1;
						} else if (item.days == 21) {
							item.typeNum = 2;
						} else if (item.days == 90) {
							item.typeNum = 3;
						} else if (item.days == 365) {
							item.typeNum = 4;
						}
					})
			
					this.list = res.data;
					console.log("购买",this.list)
					this.aimlist = this.list[this.buys1]
				})
				isAvailableCoupon().then(res =>{
					if(res.data){
						 this.isUseCoupon = 1
					}else{
						this.isUseCoupon = 0
					}
				})
			},
			touchstart(event) {
				event.preventDefault();
				this.startY = event.changedTouches[0].pageY;
				if(this.startY > 1000){
					this.bottomshow = true
				}else{
					this.bottomshow = false
				}
				
			},
			touchmove(event) {
				event.preventDefault();
				var moveEndY = event.changedTouches[0].pageY;
				this.direction = moveEndY - this.startY;
			},
			touchend(event) {
				event.preventDefault();
			},
			buys(){
				this.buy2 = true;
			},
			nobuy(){
				this.buy2 = false;
			},
			copyBtn(){
				 wx.setClipboardData({
				     //准备复制的数据
				      data: this.phone,
				      success: function (res) {
				        wx.showToast({
				          title: '复制成功',
				        });
				      }
				})
			},
			// 购买
			payReadingComboUrl() {
				if(this.protocolState){
					let that = this;
					wx.requestSubscribeMessage({
					  tmplIds: ['spfwTi0NqPUFAkgq4Px_CPoFjWYGu7nxs7K3sKdrPrE'],
					  success (res) {
					  },
					  complete(res){
						 uni.showLoading({
						 	title: '结算中'
						 });
						 payReadingCombo({
						 		combo_id: that.aimlist.combo_id,
								isUseCoupon: that.isUseCoupon
						 	})
						 	.then(res => {
						 		const data = res.data;
						 		if (res.status == 200) {
						 			weappPay(data).then(() => {
						 				setTimeout(() => {
						 					uni.redirectTo({
						 						url: '/pages/checkout/inquiry'
						 					})
						 				}, 3000);
						 				
						 			}).catch((res) => {
										cancelPay({
											orderNo:data.orderNo
										}).then((res)=>{
										})
						 			});
						 		}else{
									setTimeout(()=>{
										this.$api.msg(res.msg)
									},1000)
								}
						 		// uni.hideLoading();
						 	})
						 	.catch(err => {
						 		uni.showToast({
						 			title: err.msg || err.message || '失败',
						 			icon: 'none',
						 			duration: 1000
						 		});
						 		uni.hideLoading();
						 	});
					  }
					})
				}else{
					uni.showToast({
						title: '请阅读并同意RAZ用户协议',
						icon: 'none',
						duration: 2000
					});
				}
				
				
			},
			excSubmit() {
				if (this.cardNumber == '') return this.$api.msg('请输入卡号');
				if (this.password == '') return this.$api.msg('请输入密码');
				// if (this.optIf == false) return this.$api.msg('请勾选兑换卡章程');
				useReadingKey({
					readingKey: this.cardNumber, //激活码
					password: this.password //密码
				}).then(res => {
					if (res.status == 200) {
						this.excPup = false;
						this.$api.msg('兑换成功');
						setTimeout(() => {
							uni.reLaunch({
								url: '/pages/index'
							})
						}, 1500);
					}else{
						
						this.$api.msg(res.msg);
					}
				})
			},
			goVideo() {
				uni.navigateTo({
					url: '/pages/account/video'
				})
			},
			jump() {
				uni.redirectTo({
					url: '/pages/checkout/inquiry'
				})
			},
			jumpProtocol(data){
				if(data=='protocol'){
					uni.navigateTo({
						url: '/pages/checkout/protocol'
					})
				}else if(data == 'protocoll'){
					uni.navigateTo({
						url: '/pages/checkout/protocoll'
					})
				}
				
			}
		}
	}
</script>

<style lang="less" scoped>
	page{
		background-color: #eff6ff;
	}
	.EvaluationReportAnalysis{
		width: 500rpx;
		height: 250rpx;
		position: absolute;
		left: 50rpx;
		top: 350rpx;
	}
	.buy2{
		position: relative;
		top: 23%;
		left: 20%;
		// left: 50%;
		.buy2_img{
			width: 450rpx;
			height: 450rpx;
		}
		
		.phone{
			width: 300rpx;
			height: 50rpx;
			font-size: 25rpx;
			position: absolute;
			top: 375rpx;
			left: 10%;
			line-height: 50rpx;
			display: flex;
			.phone1{
				text-align: center;
				margin-left: 30rpx;
			}
			.phone2{
				margin-left: 30rpx;
				color: #0F7ADE;
			}
		}
		
		
	
	}
	
	.box{
		position: relative;
		top: 0;
		left: 0;
		// height: 50%;
		width: 100%;
		background: #eff6ff;
		.box_top{
			width: 50%;
			height: 100rpx;
			margin: 0 auto;
			text-align: center;
			line-height: 100rpx;
			font-size: 28rpx;
			// background: blue;
			color: #FA1F44;
			position: relative;
			
		}
		.box_top:before{
			content:"";
			position:absolute;
			top: 40rpx;
			left: -26rpx;
			width: 18rpx;
			height: 18rpx;
			border-radius:50%;
			background: #FA1F44;
		}
		.box_top::after{
			content:"";
			position:absolute;
			top: 40rpx;
			left: 386rpx;
			width: 18rpx;
			height: 18rpx;
			border-radius:50%;
			background: #FA1F44;
		}
		
		
		.box_center{
			width: 100%;
			
			// height: 550rpx;

			.box_center1{
				height: 300rpx;
				// width: 100%;
				// margin-bottom: 30rpx;
				.itemone{
						position: relative;
						padding-right: 240rpx;
						margin-right: 15rpx;
						width: 25%;
						height: 100%;
						top:  0;
						background-color: blue;
					}
					
					.itemtwo{
							position: relative;
							padding-right: 220rpx;
							width: 35%;
							height: 90%;
							margin-right: 12rpx;
							border: 5rpx solid red;
							border-radius: 32rpx;
							top:  0;
							background-color: #FFFFFF;
							box-shadow: 0 0 2rpx 0 rgba(0, 0, 0, 0.4);
							// border-radius: 5rpx;
							.itemtwo1{
								font-size: 20rpx;
								text-align: center;
								line-height: 45rpx;
								
								width: 128rpx;
								height: 40rpx;
								position: absolute;
								right: -1rpx;
								top:-1rpx;
								
							}
							.itemtwo2{
								font-size: 28rpx;
								// text-align: center;
								padding-left: 5rpx;
								position: absolute;
								left: 0;
								top: 15%;
								width: 100%;
								height: 50rpx;
								line-height: 50rpx;
							}
							.itemtwo3{
								font-size: 70rpx;
								text-align: center;
								position: absolute;
								left: 0;
								top: 35%;
								font-weight: bold;
								color: #FF2807;
								width: 116%;
								height: 100rpx;
								line-height: 100rpx;
								
							}
							.itemtwo6{
								font-size: 30rpx;
								text-align: center;
								position: absolute;
								left: -5%;
								top: 45%;
								font-weight: bold;
								color: #FF2807;
								width: 80rpx;
								height: 80rpx;
								line-height: 80rpx;
								margin-right: 25rpx;
							}
							.itemtwo4{
								width: 66%;
								height: 40rpx;
								background: #FFF5DC;
								color: #FF2807;
								font-size: 20rpx;
								text-align: center;
								line-height: 40rpx;
								border-radius: 25rpx;
								position: absolute;
								top: 70%;
								left: 5%;
							}
							.itemtwo5{
								width: 50rpx;
								height: 45rpx;
								// background: #FF2807;
								// color: #FFFFFF;
								font-size: 30rpx;
								text-align: center;
								line-height: 40rpx;
								position: absolute;
								right: -1rpx;
								bottom: -1rpx;
								// border-top-left-radius:30rpx;
								// border-bottom-right-radius:30rpx;
							}
						}
					.itemtwo9{
							position: relative;
							padding-right: 220rpx;
							width: 30%;
							height: 90%;
							margin-right: 12rpx;
							border-radius: 32rpx;
							top:  0;
							background-color: #FFFFFF;
							box-shadow: 3rpx 3rpx 3rpx 3rpx  rgba(0, 0, 0, 0.4);
							.itemtwo1{
								font-size: 20rpx;
								text-align: center;
								line-height: 45rpx;
								color: #FFFFFF;
								background: #FF2807;
								width: 128rpx;
								height: 40rpx;
								position: absolute;
								right: 0;
								top: 0;
								border-top-right-radius:22rpx;
								border-bottom-left-radius:22rpx;
							}
							.itemtwo2{
								font-size: 28rpx;
								// text-align: center;
								padding-left: 5rpx;
								position: absolute;
								left: 0;
								top: 15%;
								width: 100%;
								height: 50rpx;
								line-height: 50rpx;
							}
							.itemtwo3{
								font-size: 70rpx;
								text-align: center;
								position: absolute;
								left: 0;
								top: 35%;
								font-weight: bold;
								color: #CFCDCD;
								width: 116%;
								height: 100rpx;
								line-height: 100rpx;
								
							}
							.itemtwo6{
								font-size: 30rpx;
								text-align: center;
								position: absolute;
								left: -5%;
								top: 45%;
								font-weight: bold;
								color: #CFCDCD;
								width: 80rpx;
								height: 80rpx;
								line-height: 80rpx;
								margin-right: 25rpx;
							}
							.itemtwo4{
								width: 66%;
								height: 40rpx;
								background: #FFF5DC;
								color: #FF2807;
								font-size: 20rpx;
								text-align: center;
								line-height: 40rpx;
								border-radius: 25rpx;
								position: absolute;
								top: 70%;
								left: 5%;
							}
							.itemtwo5{
								display: none;
							}
						}
					.itemthree{
								position: relative;
								width: 50%;
								height: 100%;
								margin-right: 15rpx;
								top:  0;
								background-color: green;
							}
							.itemfour{
									position: relative;
									
									width: 30%;
									height: 100%;
									margin-right: 15rpx;
									top:  0;
									background-color: #FFFFFF;
								}
			}
			
			
			
			.center_value{
				display: flex;
				.center_valueleft{
					margin-left: 20rpx;
					text-align: center;
					line-height: 30rpx;
					background: #F97500;
					color: #FFFFFF;
					border-top-left-radius:15rpx;
					border-top-right-radius:15rpx;
					border-bottom-left-radius:15rpx;
					height: 30rpx;
					width: 50rpx;
					margin-right: 30rpx;
					font-size: 18rpx;
				}
				.center_valueright{
					height: 100%;
					width: 600rpx;
					font-size: 26rpx;
				}
			}
			.center_value1{
				display: none;
			}
		}
		
	}
	
	.opt1 {
		width: 21rpx;
		height: 21rpx;
		border: 1rpx solid #999999;
		margin-right: 6rpx;
	}

	.opt2 {
		width: 9rpx;
		height: 9rpx;
		border: 9rpx solid #0C6BAF;
		margin-right: 6rpx;
	}

	.input {
		border: 1rpx solid #0C6BAF;
		border-radius: 18rpx;

		input {
			padding: 18rpx 15rpx;
		}
	}

	.popup {
		width: 659rpx;
		box-shadow: 0 3rpx 18rpx 1rpx rgba(34, 97, 79, 0.27);
		border-radius: 36rpx;
		line-height: 51rpx;
	}

	.open {
		width: 535rpx;
		height: 100rpx;
		line-height: 100rpx;
		background: url(http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/sta.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.convert {
		top: 58rpx;
		left: 0;
		width: 100rpx;
		height: 35rpx;
		line-height: 35rpx;
		border-radius: 0 9rpx 9rpx 0;
		color: #0C6BAF;
	}
	.convert1 {
		top: 98rpx;
		left: 0;
		width: 230rpx;
		height: 35rpx;
		line-height: 35rpx;
		border-radius: 0 9rpx 9rpx 0;
		color: #ff2807;
	}
	.convert2{
		top: 18rpx;
		left: 0;
		width: 100rpx;
		height: 35rpx;
		line-height: 35rpx;
		border-radius: 0 9rpx 9rpx 0;
		color: #0C6BAF;
	}
	.buy_btn{
		// position: absolute;
		// left: 0;
		// bottom: -100rpx;
		width: 100%;
		background: #eff6ff;
		// height: 100rpx;
		// background: #FFFFFF;
		border-bottom-right-radius:10rpx;
		border-bottom-left-radius:10rpx;
		.nextbuy{
			text-align: center;
			line-height: 50rpx;
			width: 100px;
			height: 50rpx;
			background: #EC652B;
			color: #FFFFFF;
			border-radius: 50rpx;
			position: absolute;
			left: 240rpx;
			top: 10rpx;
		}
		.nobuy{
			text-align: center;
			line-height: 50rpx;
			width: 100px;
			height: 50rpx;
			background: #EFF0F0;
			color: #CCCCCC;
			border-radius: 50rpx;
			position: absolute;
			left: 25rpx;
			top:10rpx
		}
	}
	.buy_btn1{
		// position: absolute;
		// left: 0;
		// bottom: -180rpx;
		width:100%;
		// height: 180rpx;
		background: #eff6ff;
		// background: #FFFFFF;
		border-bottom-right-radius:10rpx;
		border-bottom-left-radius:10rpx;
		.coupon{
			width: 360rpx;
			height: 60rpx;
			margin: 5rpx auto;
			background: #FFEADB;
			border: 1rpx #EC652B solid;
			border-radius: 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.coupon_txt{
				width: 200rpx;
				color: #E23123;
			}
			.coupon_false{
				width: 40rpx;
				height: 40rpx;
			}
		}
		.nextbuy{
			text-align: center;
			line-height: 50rpx;
			width: 100px;
			height: 50rpx;
			background: #EC652B;
			color: #FFFFFF;
			border-radius: 50rpx;
			position: absolute;
			left: 240rpx;
			top: 90rpx;
		}
		.nobuy{
			text-align: center;
			line-height: 50rpx;
			width: 100px;
			height: 50rpx;
			background: #EFF0F0;
			color: #CCCCCC;
			border-radius: 50rpx;
			position: absolute;
			left: 25rpx;
			top:90rpx
		}
	}
	
	.box_buttom_box{
		width: 100%;
		height: 80rpx;
		position: fixed;
		bottom: 10rpx;
		// background: #eff6ff;
		.box_buttom{
			// position: fixed;
			width: 60%;
			height: 60rpx;
			// padding: 0 10%;
			margin-left: 20%;
			font-size: 35rpx;
			text-align: center;
			line-height: 60rpx;
			// position: absolute;
			// left: 5%;
			border-radius: 50rpx;
			background: #FF2807;
			color: #FFFFFF;
		}
	}
	.box_buttom_box1{
		position: fixed;
		width: 100%;
		height: 100rpx;
		bottom: 40rpx;
		.box_buttom{
			
			width: 80%;
			padding: 0 10%;
			margin-left: 10%;
			font-size: 47rpx;
			text-align: center;
			line-height: 100rpx;
			// position: absolute;
			// left: 5%;
			border-radius: 50rpx;
			background: #FF2807;
			color: #FFFFFF;
		}
	}
	
	.base {
		bottom: 0;
		height: 181rpx;

		.submit {
			width: 659rpx;
			height: 100rpx;
			line-height: 100rpx;
			background: url(http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/sta.png);
			background-repeat: no-repeat;
			background-size: 100% 100%;
			margin: 32rpx auto 0;
		}
	}
	.bgcolor1{
		width: 100%;
		height: 40rpx;
		background: #eff6ff;
		// padding-left: 20rpx;
		.bgcolortxt{
			height: 100%;
			color: #0061E3;
		}
	}
	.bgcolor{
		width: 100%;
		height: 40rpx;
		background: #eff6ff;
		// padding-left: 20rpx;
		
	}
</style>
