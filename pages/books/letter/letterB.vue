<template>
	<view>
		<view class="head">
			<view class="green_back display-flex" @tap="jump()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
		</view>
		<view class="box">
			<view class="green_back"   @tap="backCurrent()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="buttonA" v-if="!buttonAShow">
				<image class="green_back_img" :src="imageUrl + 'buttonB.png'" mode=""></image>
			</view>
			<view class="green_add" v-if="buttonAShow && buttonShow"  @tap="addCurrent()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="boxItem" v-if="swiperCurrent == 0">
				<view class="letterBigALeft">
					<image @tap="switchLetter" v-show="letterShow" class="letterBigA" :src="imageUrl + 'letterBigB.png'" mode="aspectFit"></image>
					<image v-show="!letterShow"  class="letterBigA" :src="imageUrl + 'letterBigBDark.png'" mode="aspectFit"></image>
					<view class="antBox">
						<image class="antImg" :src="imageUrl + 'beeB.png'" mode=""></image>
					</view>
					<view class="antBox1">
						<image class="antImg" :src="imageUrl + 'beeB.png'" mode=""></image>
					</view>
				</view>
				<view class="letterBigARight">
					<image @tap="switchSmallLetter" v-show="letterSmallShow" class="letterBigA" :src="imageUrl + 'letterSmallB.png'" mode="aspectFit"></image>
					<image v-show="!letterSmallShow" class="letterBigA" :src="imageUrl + 'letterSmallBDark.png'" mode="aspectFit"></image>
					<view class="antBox">
						<image class="antImg" :src="imageUrl + 'beeB.png'" mode=""></image>
					</view>
					<view class="antBox1">
						<image class="antImg" :src="imageUrl + 'beeB.png'" mode=""></image>
					</view>
				</view>
			</view>
			<view class="boxItem" v-if="swiperCurrent == 1">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallB.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallB.png'" mode="aspectFit"></image>
				</view>
				<view class="letterStarDown" v-if="letterStarShow">
					<image  class="letterStar1" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar2" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar3" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar4" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar5" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigARight1">
					<image class="letterBigA" :src="imageUrl + 'ballB.png'" mode=""></image>
				</view>
				<view class="letterText" v-if="letterText">all</view>
			</view>
			<view class="boxItem2" v-if="swiperCurrent == 2">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallB.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallB.png'" mode="aspectFit"></image>
				</view>
				<view class="letterStarDown" v-if="letterStarShow">
					<image  class="letterStar1" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar2" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar3" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar4" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar5" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
				</view>
				<view class="angryBox">
					<view class="angry_center" @tap="switchLetter1">
					</view>
					<view class="busB3" @tap="switchLetter1">
						<image  class="letterBigA" :src="imageUrl + 'bus_top.png'" mode="aspectFit"></image>
						<image  class="letterbus_left" :src="imageUrl + 'bus_bottom.png'" mode="aspectFit"></image>
						<image  class="letterbus_right" :src="imageUrl + 'bus_bottom.png'" mode="aspectFit"></image>
					</view>
					
				</view>
				<view class="letterText" v-if="letterText">us</view>
			</view>
			<view class="boxItem" v-if="swiperCurrent == 3">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallB.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallB.png'" mode="aspectFit"></image>
				</view>
				<view class="letterStarDown" v-if="letterStarShow">
					<image  class="letterStar1" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar2" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar3" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar4" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar5" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigARight2">
					<image class="letterBigA" :src="imageUrl + 'balloon.png'" mode=""></image>
				</view>
				<view class="letterText" v-if="letterText">alloon</view>
			</view>
			<view class="appleTree" v-if="swiperCurrent == 4" >
				<image class="appleTreeImg" :src="imageUrl + 'balloon_bg.png'" mode=""></image>
				<movable-area class="easydragBox" id="areaBox0">
					<view class="easydragitem " v-if="ballonShow" @touchstart.stop="touchStart($event)" @touchmove="touchMove" @touchend="touchEnd()" id="appLi">
						<image class="wh"  :src="imageUrl + 'balloon_' + balloonIndex+'.png'" mode="aspectFit"></image>
					</view>
					<movable-view v-if="moviewShow"  :animation="false"  :x="moveX" :y="moveY" direction="all"   class="easydragmov " mode="widthFix">
						<image class="wh" :src="imageUrl + 'balloon_' + balloonIndex+'.png'" mode="aspectFit"></image>
					</movable-view>
				</movable-area>
				<view class="pretextLeft" >
					<image class="pretextLeftImg" :src="imageUrl + 'balloonLeft_' + pretextLeftIndex +'.png' " mode="aspectFit"></image>
				</view>
				<view class="pretextRight" >
					<image class="pretextRightImg" :src="imageUrl + 'balloonRight_' + pretextRightIndex +'.png' " mode="aspectFit"></image>
				</view>
			</view>	
			<videw class="appleTree1" v-if="swiperCurrent == 5">
				<video class="bgview" src="https://lbzyk.read61.cn/read61v2_rsc/RDMST_VideosEntity/video/27587d24e942409ab5b5bcfe18144245.mp4" autoplay="true" loop="true"></video>
			</videw>
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
		</view>
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../../config/index.js'
	// import {getLetterEnlightenment} from '../../../api/index.js'
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				swiperCurrent:0,
				buttonAShow:true,
				letterShow:true,
				letterSmallShow:true,
				letterShowDown:false,
				letterText:false,
				pretextLeftIndex:0,
				pretextRightIndex:0,
				moviewShow: false,
				moveX: 0,
				moveY: 0,
				touchItem:'',
				areaItemInfo:{},
				movImageUrl:'',
				balloonIndex:1,
				ballonShow:true,
				letterStarShow:true,
				preserveIf:false,
				buttonShow:true
			}
		},
		watch:{
			swiperCurrent(){
				this.letterShowDown = false;
				this.letterStarShow = false;
				this.letterText = false;
				this.buttonShow = false;
				setTimeout(()=>{
					this.letterStarShow = true;
				},3000)
				if(this.swiperCurrent > 5){
					this.preserveIf = true
				}
			}
		},
		methods: {
			getDomInfo(id, callBack) {
				const query = uni.createSelectorQuery().in(this);
				query.select('#' + id)
					.boundingClientRect()
					.exec(res => {
						callBack(res[0]);
					});
			},
			resetListDom() {
				let _this = this;
				this.getDomInfo('areaBox0', info => {
					
					_this.areaBoxInfo = info;
					_this.getDomInfo('appLi', res => {
						_this.areaItemInfo.x = res.left - info.left;
						_this.areaItemInfo.y = res.top - info.top;
					});
				
				});
			},
			touchStart(event) {
				this.moviewShow = true;
				this.moveX = this.areaItemInfo.x;
				this.moveY = 0;
				// if(index > 3){
				// 	this.movImageUrl = 'appleBigA1.png'
				// }else{
				// 	this.movImageUrl = 'appleSmallA.png'
				// }
				var x = event.changedTouches[0].clientX - this.areaBoxInfo.left;
				var y = event.changedTouches[0].clientY - this.areaBoxInfo.top;
				this.inBoxXY = {
					x: x - this.areaItemInfo.x,
					y: y ,
				}
				
			},
			touchMove(event) {
				let areaBoxTop = this.areaBoxInfo.top;
				let areaBoxLeft = this.areaBoxInfo.left;
				var x = event.changedTouches[0].clientX - areaBoxLeft;
				var y = event.changedTouches[0].clientY - areaBoxTop;
				this.moveX = x - this.inBoxXY.x;
				this.moveY = y - this.inBoxXY.y;
			},
			touchEnd() {
				var that = this;
				const query = uni.createSelectorQuery().in(that);
				query.select('.pretextLeft').boundingClientRect(data => {
					let X = this.moveX - data.left;
					let Y = Math.abs(this.moveY - data.top);
					console.log(X,Y)
					if (X < 140 && Y < 200) {
						console.log("对")
						if(this.balloonIndex == 1 ||this.balloonIndex == 3||this.balloonIndex == 4||this.balloonIndex == 7){
							this.ballonShow = false;
							this.pretextLeftIndex = this.pretextLeftIndex + 1
							setTimeout(()=>{
								this.balloonIndex = this.balloonIndex + 1
								this.ballonShow = true;
							},500)
						}
						// if(index > 3){
						// 	console.log("对")
						// 	// item.show = false
						// 	this.pretextLeftIndex++;
						// 	this.resetListDom();
						// }else{
						// 	console.log("错")
						// }
					} else if(X > 280 && Y < 200) {
						if(this.balloonIndex == 2 ||this.balloonIndex == 5||this.balloonIndex == 6||this.balloonIndex == 8){
							this.pretextRightIndex = this.pretextRightIndex + 1
							this.ballonShow = false;
							setTimeout(()=>{
								this.balloonIndex = this.balloonIndex + 1
								this.ballonShow = true;
							},500)
						}
						// if(index > 3){
						// 	console.log("错")
						// }else{
						// 	console.log("对")
						// 	// item.show = false
						// 	this.pretextRightIndex++
						// 	this.resetListDom();
						// }
						return
					}
				}).exec();
				this.moviewShow = false;
			},
			jump() {
				uni.reLaunch({
						url: 'letter'
				})
			},
			backCurrent(){
				this.swiperCurrent = this.swiperCurrent - 1
			},
			addCurrent(){
				this.buttonAShow = false;
				setTimeout(()=>{
					this.swiperCurrent = this.swiperCurrent + 1;
					if(this.swiperCurrent == 4){
						this.$nextTick(() => {
							setTimeout(() => {
								this.resetListDom();
							}, 200)
						})
					}
					this.buttonAShow = true;
				},1000)
			},
			switchLetter1(){
				this.letterText = true
				this.letterShowDown = true
				this.buttonShow = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.head{
				display: flex;
				position: fixed;
				left: 0;
				top: 0;
				height: 70rpx;
				z-index: 200;
				// overflow-y: hidden;
				.green_back{
					position: absolute;
					left: 3%;
					top: 50%;
					margin-top: -26rpx;
					margin-left: 16rpx;
					z-index: 1000;
					.green_back_img{
						width: 34rpx;
						height: 34rpx;
				}
			}
		}
	.box{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		// overflow: hidden;
		perspective:1000;
		.green_add{
				position: absolute;
				right: 4%;
				bottom: 5%;
				z-index: 1000;
				transform: perspective(1000px) translate3d(0, 0, 0) scaleX(-1);
				.green_back_img{
					width: 34rpx;
					height: 34rpx;
			}
			
		}
		.green_back{
				position: absolute;
				left: 4%;
				bottom: 5%;
				z-index: 1000;
				.green_back_img{
					width: 34rpx;
					height: 34rpx;
			}
		}
		.buttonA{
			position: absolute;
			right: 5%;
			bottom: 6%;
			z-index: 999;
				.green_back_img{
					width: 40rpx;
					height: 40rpx;
					animation: buttonAShow 2s 1 linear;
					animation-fill-mode:forwards;
			}
			@keyframes buttonAShow{
				0%{
					transform: translateX(100%);
					transform: scale(50%);
					opacity: 1;
				}
				100%{
					transform: translateX(150%);
					transform: scale(120%);
					opacity: 0;
				}
			}
		}
		.boxItem{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background: #aaff7f;
			.letterStarDown{
				position: absolute;
				left: 25%;
				top: 21%;
				z-index: 100;
				.letterStar1{
					position: absolute;
					left: 0;
					top: 0;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar1 2s infinite ;
				}
				.letterStar2{
					position: absolute;
					left: 100rpx;
					top: 20rpx;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar2 2s infinite ;
				}
				.letterStar3{
					position: absolute;
					left: 30rpx;
					top: 150rpx;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar3 2s infinite ;
				}
				.letterStar4{
					position: absolute;
					left: -10rpx;
					top: 80rpx;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar2 2s infinite ;
				}
				.letterStar5{
					position: absolute;
					left: 70rpx;
					top: 90rpx;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar3 2s infinite ;
				}
				@keyframes letterStar1{
					0%{
						opacity: 0;
					}
					21%{
						opacity: 1;
					}
					100%{
						opacity: 0;
					}
				}
				@keyframes letterStar2{
					0%{
						opacity: 0;
					}
					31%{
						opacity: 1;
					}
					100%{
						opacity: 0;
					}
				}
				@keyframes letterStar3{
					0%{
						opacity: 0;
					}
					51%{
						opacity: 1;
					}
					100%{
						opacity: 0;
					}
				}
			}
			.letterBigALeft{
				width: 20%;
				height: 50%;
				position: absolute;
				
				left: 25%;
				z-index: 2;
				animation: directoryShow 2s 1 linear;
				animation-fill-mode:forwards;
				.letterBigA{
					width: 100%;
					height: 100%;
				}
				.antBox{
					position: absolute;
					left: 10rpx;
					bottom: 0rpx;
					width: 50rpx;
					height: 38rpx;
					z-index: -1;
					transform: rotateY(180deg);
					animation: antShow1 4s 1 linear;
					animation-fill-mode:forwards;
					.antImg{
						width: 100%;
						height: 100%;
					}
				}
				.antBox1{
					position: absolute;
					right: 10rpx;
					bottom: 0rpx;
					width: 50rpx;
					height: 38rpx;
					z-index: -1;
					transform: rotateY(180deg);
					animation: antShow2 4s 1 linear;
					animation-fill-mode:forwards;
					.antImg{
						width: 100%;
						height: 100%;
					}
				}
			}
			@keyframes directoryShow{
				0%{
					top: -20%;
					
				}
				100%{
					top: 20%;
				}
			}
			@keyframes antShow1{
				0%{
					transform: rotateY(180deg);
					left: 10rpx;
				}
				50%{
					transform: rotateY(180deg);
					left: 10rpx;
				}
				51%{
					transform: rotateY(0);
					left: 10rpx;
				}
				100%{
					transform: rotateY(0);
					left: -3500rpx;
				}
			}
			@keyframes antShow2{
				0%{
					transform: rotateY(180deg);
					right: 10rpx;
				}
				50%{
					transform: rotateY(180deg);
					right: 10rpx;
				}
				51%{
					transform: rotateY(0);
					right: 10rpx;
				}
				100%{
					transform: rotateY(0);
					right: 350rpx;
				}
			}
			.letterBigARight{
				width: 20%;
				height: 50%;
				position: absolute;
				right: 25%;
				z-index: 2;
				animation: directoryShow1 8s 1 linear;
				animation-fill-mode:forwards;
				.letterBigA{
					width: 100%;
					height: 100%;
				}
				.antBox{
					position: absolute;
					left: 10rpx;
					bottom: 0rpx;
					width: 50rpx;
					height: 38rpx;
					z-index: -1;
					
					animation: antShow3 12s 1 linear;
					animation-fill-mode:forwards;
					.antImg{
						width: 100%;
						height: 100%;
					}
				}
				.antBox1{
					position: absolute;
					right: 10rpx;
					bottom: 0rpx;
					width: 50rpx;
					height: 38rpx;
					z-index: -1;
					animation: antShow4 12s 1 linear;
					animation-fill-mode:forwards;
					.antImg{
						width: 100%;
						height: 100%;
					}
				}
			}
			@keyframes directoryShow1{
				0%{
					top: -58%;
				}
				50%{
					top: -58%;
				}
				75%{
					top: 20%;
				}
				100%{
					top: 20%;
				}
			}
			@keyframes antShow3{
				0%{
					transform: rotateY(0);
					left: 10rpx;
				}
				50%{
					transform: rotateY(0);
					left: 10rpx;
				}
				51%{
					transform: rotateY(180deg);
					left: 10rpx;
				}
				75%{
					transform: rotateY(180deg);
					left: 350rpx;
				}
				100%{
					transform: rotateY(180deg);
					left: 350rpx;
				}
			}
			@keyframes antShow4{
				0%{
					transform: rotateY(0);
					right: 10rpx;
				}
				50%{
					transform: rotateY(0);
					right: 10rpx;
				}
				51%{
					transform: rotateY(180deg);
					right: 10rpx;
				}
				75%{
					transform: rotateY(180deg);
					right: -350rpx;
				}
				100%{
					transform: rotateY(180deg);
					right: -350rpx;
				}
			}
			.letterBigALeft1{
				width: 20%;
				height: 50%;
				position: absolute;
				left: 25%;
				top: 10%;
				z-index: 2;
				.letterBigA{
					width: 100%;
					height: 100%;
				}
			}
			.letterStarDown{
				position: absolute;
				left: 25%;
				top: 21%;
				z-index: 100;
				.letterStar1{
					position: absolute;
					left: 0;
					top: 0;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar1 2s infinite ;
				}
				.letterStar2{
					position: absolute;
					left: 100rpx;
					top: 20rpx;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar2 2s infinite ;
				}
				.letterStar3{
					position: absolute;
					left: 30rpx;
					top: 150rpx;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar3 2s infinite ;
				}
				.letterStar4{
					position: absolute;
					left: -10rpx;
					top: 80rpx;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar2 2s infinite ;
				}
				.letterStar5{
					position: absolute;
					left: 70rpx;
					top: 90rpx;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar3 2s infinite ;
				}
				@keyframes letterStar1{
					0%{
						opacity: 0;
					}
					21%{
						opacity: 1;
					}
					100%{
						opacity: 0;
					}
				}
				@keyframes letterStar2{
					0%{
						opacity: 0;
					}
					31%{
						opacity: 1;
					}
					100%{
						opacity: 0;
					}
				}
				@keyframes letterStar3{
					0%{
						opacity: 0;
					}
					51%{
						opacity: 1;
					}
					100%{
						opacity: 0;
					}
				}
			}
			
			.letterBigALeft1Down{
				width: 20%;
				height: 50%;
				position: absolute;
				z-index: 2;
				animation: directoryShowTwo 2s 1 linear;
				animation-fill-mode:forwards;
				.letterBigA{
					width: 100%;
					height: 100%;
				}
			}
			@keyframes directoryShowTwo{
				0%{
					left: 25%;
					top: 10%;
					transform: scale(100%);
				}
				10%{
					left: 25%;
					top: 10%;
					transform: scale(120%);
				}
				100%{
					left: 33%;
					top: 50%;
					transform: scale(50%);
				}
			}
			.letterBigARight1{
				position: absolute;
				right: 28%;
				z-index: 2;
				animation: letterBigARight1 2s infinite;
				.letterBigA{
					width:100%;
					height:100%
				}
			}
			@keyframes letterBigARight1{
				0%{
					height: 50%;
					width: 20%;
					top: 0;
				}
				35%{
					height: 20%;
					width: 20%;
					transform: scaleX(110%);
					top: 60%;
				}
				50%{
					height: 40%;
					width: 20%;
					top: 30%;
				}
				75%{
					height: 40%;
					width: 20%;
					top: 30%;
				}
				100%{
					height: 40%;
					width: 20%;
					top: 30%;
				}
			}
			.letterBigARight2{
				position: absolute;
				width: 300rpx;
				height: 300rpx;
				top: 25%;
				z-index: 2;
				animation: letterBigARight2 5s 1 linear;
				animation-fill-mode:forwards;
				.letterBigA{
					width:100%;
					height:100%
				}
			}
			@keyframes letterBigARight2{
				0%{
					right: 0;
				}
				100%{
					right: 20%;
					
				}
			}
			.letterText{
				position: absolute;
				bottom: 8%;
				left: 47%;
				
				font-size: 80rpx;
			}
			.letterbox{
				position: absolute;
				bottom: 10%;
				left: 38%;
				width: 70rpx;
				height: 80rpx;
				background: #ffbedb;
			}
		}
		.boxItem2{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background: #aaff7f;
			.letterBigALeft1{
				width: 20%;
				height: 50%;
				position: absolute;
				left: 25%;
				top: 10%;
				z-index: 2;
				.letterBigA{
					width: 100%;
					height: 100%;
				}
			}
			.letterStarDown{
				position: absolute;
				left: 25%;
				top: 21%;
				z-index: 100;
				.letterStar1{
					position: absolute;
					left: 0;
					top: 0;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar1 2s infinite ;
				}
				.letterStar2{
					position: absolute;
					left: 100rpx;
					top: 20rpx;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar2 2s infinite ;
				}
				.letterStar3{
					position: absolute;
					left: 30rpx;
					top: 150rpx;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar3 2s infinite ;
				}
				.letterStar4{
					position: absolute;
					left: -10rpx;
					top: 80rpx;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar2 2s infinite ;
				}
				.letterStar5{
					position: absolute;
					left: 70rpx;
					top: 90rpx;
					width: 50rpx;
					height: 50rpx;
					animation: letterStar3 2s infinite ;
				}
				@keyframes letterStar1{
					0%{
						opacity: 0;
					}
					21%{
						opacity: 1;
					}
					100%{
						opacity: 0;
					}
				}
				@keyframes letterStar2{
					0%{
						opacity: 0;
					}
					31%{
						opacity: 1;
					}
					100%{
						opacity: 0;
					}
				}
				@keyframes letterStar3{
					0%{
						opacity: 0;
					}
					51%{
						opacity: 1;
					}
					100%{
						opacity: 0;
					}
				}
			}
			
			.letterBigALeft1Down{
				width: 20%;
				height: 50%;
				position: absolute;
				z-index: 2;
				animation: directoryShowTwo 2s 1 linear;
				animation-fill-mode:forwards;
				.letterBigA{
					width: 100%;
					height: 100%;
				}
			}
			@keyframes directoryShowTwo{
				0%{
					left: 25%;
					top: 10%;
					transform: scale(100%);
				}
				10%{
					left: 25%;
					top: 10%;
					transform: scale(120%);
				}
				100%{
					left: 33%;
					top: 53%;
					transform: scale(50%);
				}
			}
			.angryBox{
				width: 100%;
				height: 70%;
				position: absolute;
				left:0;
				top: 0;
				overflow: hidden;
				// background: #fff;
				.angry_center{
					width: 100%;
					height: 100%;
					z-index: 2;
					animation: busB2 6s 1 linear;
					animation-fill-mode:forwards;
					.letterBigA{
						width: 110%;
						height: 110%;
						}
					}
			}
			.busB3{
					width: 100%;
					height: 80%;
					position: absolute;
					top: 30rpx;
					animation: busB3 6s 1 linear;
					animation-fill-mode:forwards;
					.letterBigA{
						width: 100%;
						height: 100%;
					}
					.letterbus_left{
						position: absolute;
						left: 186rpx;
						top: 210rpx;
						width: 90rpx;
						height: 90rpx;
						animation: letterbus_left 6s infinite ;
					}
					.letterbus_right{
						position: absolute;
						right: 193rpx;
						top: 210rpx;
						width: 90rpx;
						height: 90rpx;
						animation: letterbus_left 6s infinite ;
					}
				}
				.letterText{
					position: absolute;
					bottom: 10%;
					left: 47%;
					font-size: 80rpx;
				}
				@keyframes busB2{
					0%{
						background: url('https://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/busBg1.png') no-repeat;
						background-size: 100% 100%;
					}
					40%{
						
						background: url('https://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/busBg1.png') no-repeat;
						background-size: 100% 100%;
					}
					60%{
						
						background: url('https://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/busBg2.png') no-repeat;
						background-size: 100% 100%;
					}
					100%{
						
						background: url('https://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/busBg2.png') no-repeat;
						background-size: 100% 100%;
					}
				}
				@keyframes busB3{
					0%{
						left: 350rpx;
					}
					46%{
						
						left: 0;
					}
					55%{
						
						left: 0;
					}
					100%{
						
						left: -670rpx;
					}
				}
				@keyframes letterbus_left{
					0%{
						transform: rotate(0deg);
					}
					46%{
						
						transform: rotate(-180deg);
					}
					55%{
						transform: rotate(-180deg);
					}
					100%{
						transform: rotate(-360deg);
					}
				}
		}
		.appleTree{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			overflow: hidden;
			.easydragBox{
				position: absolute;
				width: 100%;
				height: 100%;
				
				z-index: 999;
				.easydragitem {
					position: absolute;
					left:40%;
					top:10rpx;
					width: 60rpx;
					height: 120rpx;
					// z-index: 999;
					animation: easydragitem 6s 1 linear;
					animation-fill-mode:forwards;
				}
				@keyframes easydragitem{
					0%{
						top:400rpx
					}
					100%{
						top:50rpx
					}
				}
			}
			
			.easydragmov{
				width: 60rpx;
				height: 120rpx;
				z-index: 999;
			}
			.appleTreeImg{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				z-index: 100;
			}
			.treeBg_treeImg{
				position: absolute;
				left: 0;
				bottom: 10%;
				// margin-left: -225rpx;
				width: 100%;
				height: 100%;
				z-index: 200;
			}
			
			.pretextLeft{
				position: absolute;
				left: 10%;
				bottom: 10%;
				width: 160rpx;
				height: 160rpx;
				z-index: 200;
				.pretextLeftImg{
					width: 100%;
					height: 100%;
				}
			}
			.pretextRight{
				position: absolute;
				right: 10%;
				bottom: 10%;
				width: 160rpx;
				height: 160rpx;
				z-index: 200;
				.pretextRightImg{
					width: 100%;
					height: 100%;
				}
			}
		}
		.appleTree1{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background: #aaff7f;
				.bgview{
					position: fixed;
					top:14%;
					left: 50%;
					margin-left: -300rpx;
					width: 600rpx;
					height: 400rpx;
					z-index: -1;
				}
		}
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
	}
</style>
