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
				<image class="green_back_img" :src="imageUrl + 'buttonD.png'" mode=""></image>
			</view>
			<view class="green_add" v-if="buttonAShow && buttonShow"  @tap="addCurrent()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="boxItem" v-if="swiperCurrent == 0">
				<view class="letterBigALeft">
					<image @tap="switchLetter" v-show="letterShow" class="letterBigA" :src="imageUrl + 'letterBigD.png'" mode="aspectFit"></image>
					<image v-show="!letterShow"  class="letterBigA" :src="imageUrl + 'letterBigDDark.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigARight">
					<image @tap="switchSmallLetter" v-show="letterSmallShow" class="letterBigA" :src="imageUrl + 'letterSmallD.png'" mode="aspectFit"></image>
					<image v-show="!letterSmallShow" class="letterBigA" :src="imageUrl + 'letterSmallDDark.png'" mode="aspectFit"></image>
				</view>
				<image class="stage_bg1" :src="imageUrl + 'stage_bg.png'" mode="aspectFit"></image>
				<image class="stage_bg2" :src="imageUrl + 'stage_bg.png'" mode="aspectFit"></image>
			</view>
			<view class="boxItem" v-if="swiperCurrent == 1">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallD.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallD.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigARight1">
					<image class="letterBigA1" v-show="letterBigA1" :src="imageUrl + 'duckD1.png'" mode="aspectFit"></image>
					<image class="letterBigA2" v-show="!letterBigA1" :src="imageUrl + 'duckD2.png'" mode="aspectFit"></image>
				</view>
				<view class="letterStarDown" v-if="letterStarShow">
					<image  class="letterStar1" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar2" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar3" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar4" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar5" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
				</view>
				<view class="letterText" v-if="letterText">uck</view>
				<!-- <view class="letterbox"></view> -->
			</view>
			<view class="boxItem2" v-if="swiperCurrent == 2">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallD.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallD.png'" mode="aspectFit"></image>
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
						<image  class="letterBigA" :src="imageUrl + 'dog_D.gif'" mode="aspectFill"></image>
					</view>
				</view>
				<view class="letterText" v-if="letterText">og</view>
			</view>
			<view class="boxItem3" v-if="swiperCurrent == 3">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallD.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallD.png'" mode="aspectFit"></image>
				</view>
				<view class="letterStarDown" v-if="letterStarShow">
					<image  class="letterStar1" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar2" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar3" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar4" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar5" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
				</view>
				<view class="letterText" v-if="letterText">ress</view>
				<view class="angryBox">
					<view class="angry_center" @tap="switchLetter1">
						<image  class="letterBigA" :src="imageUrl + 'dress_d.png'" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<view class="boxItem3" v-if="swiperCurrent == 4" >
				<!-- <image class="appleTreeImg" :src="imageUrl + 'treeBg_bg.png'" mode="center"></image> -->
				<view class="answerBox" v-if="easydragAnsIndex == index" v-for="(item,index) in easydragAns" :key="index">
					<view class="answerText" v-if="wordShow">{{item.key}}</view>
					<view class="answerItem" v-if="!wordShow">
						<view class="answerItem_one" v-for="(itm,inx) in item.list" :key="inx"   :style="{'background':itm.currentStyle}" @tap="answerTap(itm)">
							<view class="answerItem_one_border"></view>
							<image class="answerItem_oneImg" :src="imageUrl + itm.imageUrl" mode="aspectFit"></image>
						</view>
					</view>
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
				aspectFit:'',
				letterText:false,
				moviewShow: false,
				moveX: 0,
				moveY: 0,
				easydragAns: [
							{	key:'Duck',
								list:[
															  { currentStyle: '#fff',imageUrl:'appleA.png',ox:15,oy:0,show:false,opacityIf:true},
															  { currentStyle: '#fff',imageUrl:'duckD1.png',ox:30,oy:0,show:true,opacityIf:true},
															  { currentStyle: '#fff',imageUrl:'ballB.png',ox:45,oy:0,show:false,opacityIf:true},
															  { currentStyle: '#fff',imageUrl:'carC.png',ox:60,oy:0,show:false,opacityIf:true}
								]
							},
							{	key:'Dog',
								list:[
															  { currentStyle: '#fff',imageUrl:'appleA.png',ox:15,oy:0,show:false,opacityIf:true},
															  { currentStyle: '#fff',imageUrl:'duckD1.png',ox:30,oy:0,show:true,opacityIf:true},
															  { currentStyle: '#fff',imageUrl:'ballB.png',ox:45,oy:0,show:false,opacityIf:true},
															  { currentStyle: '#fff',imageUrl:'carC.png',ox:60,oy:0,show:false,opacityIf:true}
								]
							},
					     
				],
				pretextLeftIndex:0,
				pretextRightIndex:0,
				easydragAnswer:[],
				touchItem:'',
				movImageUrl:'',
				letterStarShow:false,
				preserveIf:false,
				letterBigA1:true,
				buttonShow:true,
				wordShow:true,
				easydragAnsIndex:0
			}
		},
		onReady() {
		},
		onLoad() {
			
		},
		mounted() {
			
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
				console.log("第几页",this.swiperCurrent)
				if(this.swiperCurrent > 5){
					this.preserveIf = true
				}else if(this.swiperCurrent == 1){
						setTimeout(()=>{
							this.letterBigA1 = !this.letterBigA1;
						},1000)
				}else if(this.swiperCurrent == 4){
					this.easydragAnsIndex = 0
					setTimeout(()=>{
						this.wordShow = !this.wordShow;
					},3000)
				}
			},
			// letterBigA1(){
			// 	setTimeout(()=>{
			// 		this.letterBigA1 = !this.letterBigA1;
			// 	},1000)
			// }
		},
		computed: {
		  
		},
		methods: {
			jump() {
				uni.reLaunch({
						url: 'letter'
				})
			},
			answerTap(item){
				if(item.show){
					item.currentStyle = 'gold';
					setTimeout(()=>{
						this.easydragAnsIndex = this.easydragAnsIndex + 1;
						this.wordShow = !this.wordShow;
						setTimeout(()=>{
							this.wordShow = !this.wordShow;
						},3000)
					},2000)
					console.log("123",this.easydragAnsIndex,this.easydragAns.length)
					if(this.easydragAnsIndex == this.easydragAns.length - 1){
						setTimeout(()=>{
							this.swiperCurrent = this.swiperCurrent + 1
						},2000)
					}
				}else{
					item.currentStyle = 'deeppink'
					setTimeout(()=>{
						item.currentStyle = '#fff'
					},1000)
				}
				
			},
			addCurrent(){
				this.buttonAShow = false;
				setTimeout(()=>{
					this.swiperCurrent = this.swiperCurrent + 1;
					this.buttonAShow = true;
					
				},1000)
			},
			backCurrent(){
				this.swiperCurrent = this.swiperCurrent - 1
			},
			switchLetter(){
				this.letterShow = false;
				setTimeout(()=>{
					this.letterShow = true;
				},500)
			},
			switchSmallLetter(){
				this.letterSmallShow = false;
				setTimeout(()=>{
					this.letterSmallShow = true;
				},500)
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
					z-index: 999;
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
					z-index: 999;
					// transform: rotateY(180deg);
					transform: perspective(1000px) translate3d(0, 0, 0) scaleX(-1);
					// perspective:1000;
					.green_back_img{
						width: 34rpx;
						height: 34rpx;
				}
				
			}
			.green_back{
					position: absolute;
					left: 4%;
					bottom: 5%;
					z-index: 999;
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
				background: #0055ff;
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
				.duck_box{
					position: absolute;
					display: flex;
					animation: duck_box_bottom 18s linear ;
					animation-fill-mode: forwards;
					animation-direction: normal;
					animation-iteration-count: infinite;
				}
				@keyframes duck_box_bottom{
					0%{
						left: 100%;
						bottom: -10rpx;
						transform: rotate(0);
					}
					25%{
						left: -230rpx;
						bottom: -10rpx;
						transform: rotate(0);
					}
					26%{
						left: -90rpx;
						bottom: -230rpx;
						transform: rotate(90deg);
					}
					50%{
						left: -90rpx;
						bottom: 140%;
						transform: rotate(90deg);
					}
					51%{
						left: -230rpx;
						bottom: 140%;
						transform: rotate(0);
					}
					52%{
						left: -230rpx;
						bottom: 88%;
						transform: rotate(0);
					}
					75%{
						left: 113%;
						bottom: 88%;
						transform: rotate(0);
					}
					76%{
						left: 82%;
						bottom: 120%;
						transform: rotate(-90deg);
					}
					77%{
						left: 82%;
						bottom: 120%;
						transform: rotate(-90deg);
					}
					100%{
						left: 82%;
						bottom: -230rpx;
						transform: rotate(-90deg);
					}
				}
				.duck_boxTop{
					position: absolute;
					left: 0;
					top: -10rpx;
					display: flex;
				}
				.duck_box,.duck_boxTop{
					.duck_bg{
						height: 88rpx;
					}
					.duck_bg1{
						height: 88rpx;
					}
					.duck_bg2{
						height: 88rpx;
						
					}
				}
				
				.letterBigALeft{
					width: 20%;
					height: 50%;
					position: absolute;
					top: 18%;
					left: 18%;
					z-index: 2;
					animation: directoryShow 2s 1 linear;
					animation-fill-mode:forwards;
					.letterBigA{
						width: 120%;
						height: 120%;
					}
				}
				@keyframes directoryShow{
					0%{
						opacity: 0;
					}
					99%{
						opacity: 0;
					}
					100%{
						opacity: 1;
					}
				}
				.stage_bg1{
					position: absolute;
					top: 0%;
					// width: 50%;
					width: 40%;
					animation: stage_bg1 2s 1 linear;
					animation-fill-mode:forwards;
				}
				@keyframes stage_bg1{
					0%{
						left: 30%;
						height: 50%;
					}
					100%{
						left: 10%;
						height: 72%;
					}
				}
				.stage_bg2{
					position: absolute;
					top: 0%;
					width: 40%;
					animation: stage_bg2 4s 1 linear;
					animation-fill-mode:forwards;
				}
				@keyframes stage_bg2{
					0%{
						right: 30%;
						height: 50%;
						opacity: 0;
					}
					50%{
						right: 30%;
						height: 50%;
						opacity: 0;
					}
					51%{
						right: 30%;
						height: 50%;
						opacity: 1;
					}
					100%{
						right: 10%;
						height: 72%;
					}
				}
				.letterBigARight{
					width: 20%;
					height: 50%;
					position: absolute;
					top: 18%;
					right: 23%;
					z-index: 2;
					animation: directoryShow1 4s 1 linear;
					animation-fill-mode:forwards;
					.letterBigA{
						width: 120%;
						height: 120%;
					}
				}
				@keyframes directoryShow1{
					0%{
						opacity: 0;
					}
					99%{
						opacity: 0;
					}
					100%{
						opacity: 1;
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
						width: 120%;
						height: 120%;
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
						width: 120%;
						height: 120%;
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
					width: 20%;
					height: 50%;
					position: absolute;
					top: 30%;
					right: 28%;
					z-index: 2;
					.letterBigA1{
						position: absolute;
						top: 0;
					}
					.letterBigA2{
						position: absolute;
						top: 0;
					}
				}
				.letterText{
					position: absolute;
					bottom: 8%;
					left: 48%;
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
			.boxItem3{
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: #0055ff;
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
				
				.letterBigALeft1{
					width: 20%;
					height: 50%;
					position: absolute;
					left: 25%;
					top: 10%;
					z-index: 2;
					.letterBigA{
						width: 120%;
						height: 120%;
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
						width: 120%;
						height: 120%;
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
				.angryBox{
					width: 100%;
					height: 70%;
					position: absolute;
					.angry_center{
						width: 100%;
						height: 100%;
						z-index: 2;
						.letterBigA{
							width: 100%;
							height: 100%;
							}
						}
				}
					.letterText{
						position: absolute;
						bottom: 9%;
						left: 48%;
						font-size: 60rpx;
					}
				.answerBox{
					width: 100%;
					height: 50%;
					// background: #fff;
					position: relative;
					top: 25%;
					.answerText{
						position: absolute;
						width: 100%;
						text-align: center;
						font-size: 150rpx;
						color: #fff;
						animation: letterStar3 2s infinite ;
					}
					.answerItem{
						width: 100%;
						height: 200rpx;
						position: absolute;
						left: 0;
						top: 50%;
						margin-top: -100rpx;
						display: flex;
						justify-content: space-around;
						align-items: center;
						.answerItem_one_show1{
							animation: answerItemFalse 2s 1 linear;
							animation-fill-mode:forwards;
						}
						@keyframes answerItemFalse{
							0%{
								transform: scale(100%);
							}
							100%{
								transform: scale(150%);
							}
						}
						.answerItem_one_show2{
							background: deeppink;
						}
						.answerItem_one{
							position: relative;
							width: 100rpx;
							height: 100rpx;
							animation: answerItem 2s 1 linear;
							animation-fill-mode:forwards;
							.answerItem_one_border{
								position: absolute;
								width: 100%;
								height: 100%;
								border-radius: 5rpx;
								margin-left: -10rpx;
								margin-top: -10rpx;
								animation: huerotate 6s infinite linear;
								border: 10rpx solid;
								border-image: linear-gradient(45deg, gold, deeppink) 1;
								// border-image: linear-gradient(45deg, #00aa00, #ffffff) 1;
								clip-path: inset(0px round 10px);
								filter: hue-rotate(360deg);
								z-index: 50;
							}
							.answerItem_oneImg{
								width: 90rpx;
								height: 90rpx;
								position: absolute;
								margin-left: 5rpx;
								margin-top: 5rpx;
								z-index: 100;
							}
							@keyframes huerotate{
								0%{
									filter: hue-rotate(0deg);
								}
								100%{
									 filter: hue-rorate(360deg);
								}
							}
							@keyframes answerItem{
								0%{
									transform: rotateY(0deg);
								}
								50%{
									transform: rotateY(180deg);	
								}
								100%{
									transform: rotateY(0deg);
								}
							}
							@keyframes answerItems{
								0%{
									transform: rotateY(0deg);
								}
								50%{
									transform: rotateY(180deg);	
								}
								100%{
									transform: rotateY(0deg);
								}
							}
						}
					}
				}	
			}
			.boxItem2{
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: #0055ff;
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
				
				.angryBox{
					width: 100%;
					height: 70%;
					position: absolute;
					.angry_center{
						width: 100%;
						height: 100%;
						z-index: 2;
						.letterBigA{
							width: 100%;
							height: 100%;
							}
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
						width: 120%;
						height: 120%;
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
						width: 120%;
						height: 120%;
					}
				}
				.letterText{
					position: absolute;
					bottom: 9%;
					left: 48%;
					font-size: 80rpx;
				}
				
			}
			.appleTree{
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
			}
			.appleTree1{
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: #00aa00;
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
			.pretextLeft{
				position: absolute;
				left: 20%;
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
				right: 20%;
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
</style>
