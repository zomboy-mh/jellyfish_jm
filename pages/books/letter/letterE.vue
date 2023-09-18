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
				<image class="green_back_img" :src="imageUrl + 'buttonE.png'" mode=""></image>
			</view>
			<view class="green_add" v-if="buttonAShow && buttonShow"  @tap="addCurrent()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="boxItem" v-if="swiperCurrent == 0">
				<view class="letterBigALeft">
					<image @tap="switchLetter" v-show="letterShow" class="letterBigA" :src="imageUrl + 'letterBigE.png'" mode="aspectFit"></image>
					<image v-show="!letterShow"  class="letterBigA" :src="imageUrl + 'letterBigEDark.png'" mode="aspectFit"></image>
					<view class="antBox">
						<!-- <image class="antImg" :src="imageUrl + 'eggE.png'" mode=""></image> -->
					</view>
					<!-- <view class="antBox1">
						<image class="antImg" :src="imageUrl + 'eggE.png'" mode=""></image>
					</view> -->
				</view>
				<view class="letterBigARight">
					<image @tap="switchSmallLetter" v-show="letterSmallShow" class="letterBigA" :src="imageUrl + 'letterSmallE.png'" mode="aspectFit"></image>
					<image v-show="!letterSmallShow" class="letterBigA" :src="imageUrl + 'letterSmallEDark.png'" mode="aspectFit"></image>
					<view class="antBox">
					</view>
					<!-- <view class="antBox1">
						<image class="antImg" :src="imageUrl + 'eggE.png'" mode=""></image>
					</view> -->
				</view>
			</view>
			<view class="boxItem2" v-if="swiperCurrent == 1">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallE.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallE.png'" mode="aspectFit"></image>
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
						<image  class="letterBigA" :src="imageUrl + 'eggsE.png'" mode="aspectFill"></image>
					</view>
				</view>
				<view class="letterText" v-if="letterText">ggs</view>
			</view>
			<view class="boxItem2" v-if="swiperCurrent == 2">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallE.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallE.png'" mode="aspectFit"></image>
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
						<image  class="letterBigA" :src="imageUrl + 'elephantE.png'" mode="aspectFill"></image>
					</view>
				</view>
				<view class="letterText" v-if="letterText">lephant</view>
			</view>
			<view class="boxItem2" v-if="swiperCurrent == 3">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallE.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallE.png'" mode="aspectFit"></image>
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
						<image  class="letterBigA" :src="imageUrl + 'eagleE.png'" mode="aspectFill"></image>
					</view>
				</view>
				<view class="letterText" v-if="letterText">agle</view>
			</view>
			<view class="appleTree1" v-if="swiperCurrent == 4" >
				<view class="answerBox" v-if="easydragAnsIndex == index" v-for="(item,index) in easydragAns" :key="index">
					<view class="answerText"
					:style="{'color':answerTextColor,'background':answerTextBg}"
					 :class="{'answerTextShowRightBottom': answerTextShow&&answerTextInx_one == 0,
							  'answerTextShowLeftBottom': answerTextShow&&answerTextInx_one == 1, 
							  'answerTextShowRightTop': answerTextShow&&answerTextInx_one == 2,
							  'answerTextShowLeftTop': answerTextShow&&answerTextInx_one == 3,}" 
					@tap="answerTextTap()"
					>{{item.key}}</view>
					<view class="answerItem" >
						<view class="answerItem_box">
							<view class="answerItem_one" 
							v-if="inx == 0||inx == 1" 
							v-for="(itm,inx) in item.list" :key="inx"
							:style="{'top':itm.oy + '%','left':itm.ox+ '%','background':itm.currentStyle}"
							:class="{'answerItemShowLeftTop': itm.opacityIf&&inx == 0,'answerItemShowRightTop': itm.opacityIf&&inx == 1}" 
							@tap="answerTap(itm,inx)">
								
								<view class="answerItem_one_border"></view>
								<image class="answerItem_oneImg" :src="imageUrl + itm.imageUrl" mode="aspectFit"></image>
							</view>
						</view>
						
						<view class="answerItem_box">
							<view class="answerItem_one" v-if="inx == 2||inx == 3" v-for="(itm,inx) in item.list" :key="inx"
							:style="{'top':itm.oy + '%','left':itm.ox+ '%','background':itm.currentStyle}"
							:class="{'answerItemShowLeftBottom': itm.opacityIf&&inx == 2,'answerItemShowRightBottom': itm.opacityIf&&inx == 3}"  
							@tap="answerTap(itm,inx)">
								<view class="answerItem_one_border"></view>
								<image class="answerItem_oneImg" :src="imageUrl + itm.imageUrl" mode="aspectFit"></image>
							</view>
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
				buttonShow:true,
				easydragAns: [
							{	key:'Duck',
								list:[
															  { currentStyle: '#fff',imageUrl:'appleA.png',ox:20,oy:15,show:false,opacityIf:false},
															  { currentStyle: '#fff',imageUrl:'duckD1.png',ox:67,oy:15,show:true,opacityIf:false},
															  { currentStyle: '#fff',imageUrl:'ballB.png',ox:20,oy:33,show:false,opacityIf:false},
															  { currentStyle: '#fff',imageUrl:'carC.png',ox:67,oy:33,show:false,opacityIf:false}
								]
							},
							{	key:'Dog',
								list:[
															  { currentStyle: '#fff',imageUrl:'appleA.png',ox:20,oy:15,show:false,opacityIf:false},
															  { currentStyle: '#fff',imageUrl:'duckD1.png',ox:67,oy:15,show:true,opacityIf:false},
															  { currentStyle: '#fff',imageUrl:'ballB.png',ox:20,oy:33,show:false,opacityIf:false},
															  { currentStyle: '#fff',imageUrl:'carC.png',ox:67,oy:33,show:false,opacityIf:false}
								]
							},
					     
				],
				answerTextIf:false,
				answerTextShow:false,
				easydragAnsIndex:0,
				answerTextInx:-1,
				answerTextInx_one:-1,
				answerTextColor:'#aaaaff',
				answerTextBg:'#fff',
				answerItemIf:false
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
				}else if(this.swiperCurrent == 4){
					this.easydragAnsIndex = 0
				}
			},
			answerItemIf(){
				console.log("点击了1")
				if(this.answerTextIf){
					console.log("答案",this.answerTextInx_one)
					this.answerTextShow = true;
					this.answerTextInx_one = this.answerTextInx;
					this.easydragAns[this.easydragAnsIndex].list[this.answerTextInx].opacityIf = true
					if(this.easydragAns[this.easydragAnsIndex].list[this.answerTextInx].show){
						setTimeout(()=>{
							this.answerTextBg = '#fff'
							this.answerTextColor = '#aaaaff'
							this.answerTextIf = false
							this.easydragAns[this.easydragAnsIndex].list[this.answerTextInx].currentStyle = '#55ff7f'
							this.answerItemIf = false;
							this.answerTextInx_one = -1
							this.easydragAns[this.easydragAnsIndex].list[this.answerTextInx].opacityIf = false;
							setTimeout(()=>{
								this.easydragAnsIndex = this.easydragAnsIndex + 1;
								if(this.easydragAnsIndex == this.easydragAns.length ){
									this.swiperCurrent = this.swiperCurrent + 1
								}
							},1000)
							
						},2000)
					}else{
						setTimeout(()=>{
							this.answerTextBg = '#fff'
							this.answerTextColor = '#aaaaff'
							this.answerTextIf = false
							this.easydragAns[this.easydragAnsIndex].list[this.answerTextInx].currentStyle = '#ff5500'
							this.answerItemIf = false;
							this.answerTextInx_one = -1
							this.easydragAns[this.easydragAnsIndex].list[this.answerTextInx].opacityIf = false
						},2000)
					}
					
				}
			},
			answerTextIf(){
				console.log("点击了2")
				if(this.answerItemIf){
					console.log("答案1",this.answerTextInx_one)
					this.answerTextShow = true;
					this.answerTextInx_one = this.answerTextInx;
					this.easydragAns[this.easydragAnsIndex].list[this.answerTextInx].opacityIf = true
					if(this.easydragAns[this.easydragAnsIndex].list[this.answerTextInx].show){
						setTimeout(()=>{
							this.answerTextBg = '#fff'
							this.answerTextColor = '#aaaaff'
							this.answerTextIf = false
							this.easydragAns[this.easydragAnsIndex].list[this.answerTextInx].currentStyle = '#55ff7f'
							this.answerItemIf = false;
							this.answerTextInx_one = -1
							this.easydragAns[this.easydragAnsIndex].list[this.answerTextInx].opacityIf = false;
							setTimeout(()=>{
								this.easydragAnsIndex = this.easydragAnsIndex + 1;
								if(this.easydragAnsIndex == this.easydragAns.length ){
									this.swiperCurrent = this.swiperCurrent + 1
								}
							},1000)
						},2000)
					}else{
						setTimeout(()=>{
							this.answerTextBg = '#fff'
							this.answerTextColor = '#aaaaff'
							this.answerTextIf = false
							this.easydragAns[this.easydragAnsIndex].list[this.answerTextInx].currentStyle = '#ff5500'
							this.answerItemIf = false;
							this.answerTextInx_one = -1
							this.easydragAns[this.easydragAnsIndex].list[this.answerTextInx].opacityIf = false
						},2000)
					}
				}
			}
		},
		methods: {
			answerTextTap(){
				this.answerTextIf = true;
				this.answerTextBg = '#aaaaff'
				this.answerTextColor = '#fff'
			},
			answerTap(item,inx){
				this.answerItemIf = true;
				item.currentStyle = '#aaaaff';
				this.answerTextInx = inx;
				
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
			background: #55aaff;
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
				top:20%;
				left: 25%;
				z-index: 2;
				
				.letterBigA{
					width: 100%;
					height: 100%;
					animation: directoryShow 2s 1 linear;
					animation-fill-mode:forwards;
				}
				.antBox{
					position: absolute;
					left: 10rpx;
					width: 100rpx;
					height: 100rpx;
					z-index: -1;
					transform: rotateY(180deg);
					animation: antShow1 2s 1 linear;
					animation-fill-mode:forwards;
					.antImg{
						width: 100%;
						height: 100%;
					}
				}
			}
			
			.letterBigARight{
				width: 20%;
				height: 50%;
				position: absolute;
				right: 25%;
				top: 20%;
				z-index: 2;
				
				.letterBigA{
					width: 100%;
					height: 100%;
					animation: directoryShow 2s 1 linear;
					animation-fill-mode:forwards;
				}
				.antBox{
					position: absolute;
					left: 10rpx;
					width: 100rpx;
					height: 100rpx;
					z-index: -1;
					animation: antShow1 2s 1 linear;
					animation-fill-mode:forwards;
					.antImg{
						width: 100%;
						height: 100%;
					}
				}
			}
			@keyframes directoryShow{
				0%{
					opacity: 0
				}
				100%{
					opacity: 1
				}
			}
			@keyframes antShow1{
				0%{
					bottom: 400rpx;
					background: url('https://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/eggE.png') no-repeat;
					background-size: 100% 100%;
				}
				99%{
					bottom: -22rpx;
					background: url('https://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/eggE.png') no-repeat;
					background-size: 100% 100%;
				}
				100%{
					bottom: -22rpx;
					background: url('https://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/eggE_down.png') no-repeat;
					background-size: 100% 100%;
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
				height: 40%;
				width: 20%;
				top: 30%;
				right: 28%;
				z-index: 2;
				.letterBigA{
					width:100%;
					height:100%
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
			
		}
		.boxItem2{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background: #55aaff;
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
						opacity: 0;
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
				bottom: 8%;
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
			background: #55aaff;
			.bgview{
					position: fixed;
					top:14%;
					left: 50%;
					margin-left: -300rpx;
					width: 600rpx;
					height: 400rpx;
					z-index: -1;
			}
			.answerBox{
				width: 100%;
				height: 50%;
				// background: #fff;
				position: relative;
				top: 25%;
				.answerText{
					position: absolute;
					top: 50%;
					left: 50%;
					margin-top: -50rpx;
					margin-left: -100rpx;
					width: 200rpx;
					height: 100rpx;
					line-height: 100rpx;
					text-align: center;
					font-size: 70rpx;
					border-radius: 10rpx;
					z-index: 666;
				}
				@keyframes answerText{
					0%{
						transform: scale(100%);
						margin-top: -50rpx;
						margin-left: -100rpx;
					}
					51%{
						transform: scale(150%);
						margin-top: 20rpx;
						margin-left: 40rpx;
					}
					100%{
						transform: scale(140%);
						margin-top: -50rpx;
						margin-left: -100rpx;
					}
				}
				.answerTextShowLeftTop{
					animation: answerTextShowLeftTop 2s 1 linear;
					animation-fill-mode:backwards;
				}
				.answerTextShowRightTop{
					animation: answerTextShowRightTop 2s 1 linear;
					animation-fill-mode:backwards;
				}
				.answerTextShowLeftBottom{
					animation: answerTextShowLeftBottom 2s 1 linear;
					animation-fill-mode:backwards;
				}
				.answerTextShowRightBottom{
					animation: answerTextShowRightBottom 2s 1 linear;
					animation-fill-mode:backwards;
				}
				.answerItemShowLeftTop{
					animation: answerItemShowLeftTop 2s 1 linear;
					animation-fill-mode:backwards;
				}
				.answerItemShowRightTop{
					animation: answerItemShowRightTop 2s 1 linear;
					animation-fill-mode:backwards;
				}
				.answerItemShowRightBottom{
					animation: answerItemShowRightBottom 2s 1 linear;
					animation-fill-mode:backwards;
				}
				.answerItemShowLeftBottom{
					animation: answerItemShowLeftBottom 2s 1 linear;
					animation-fill-mode:backwards;
				}
				@keyframes answerTextShowLeftTop{
					0%{
						transform: scale(100%);
						margin-left: 0rpx;
					}
					50%{
						transform: scale(140%);
						margin-left: -200rpx;
					}
					100%{
						transform: scale(150%);
						margin-left: 0rpx;
					}
				}
				@keyframes answerTextShowRightTop{
					0%{
						transform: scale(100%);
						margin-left: 0rpx;
					}
					50%{
						transform: scale(140%);
						margin-left: 100rpx;
					}
					100%{
						transform: scale(150%);
						margin-left: 0rpx;
					}
				}
				@keyframes answerTextShowRightBottom{
					0%{
						transform: scale(100%);
						margin-left: 0rpx;
						
					}
					50%{
						transform: scale(140%);
						margin-left: 100rpx;
					}
					100%{
						transform: scale(150%);
						margin-left: 0rpx;
					}
				}
				@keyframes answerTextShowLeftBottom{
					0%{
						transform: scale(100%);
						margin-left: 0rpx;
					}
					50%{
						transform: scale(140%);
						margin-left: -200rpx;
					}
					100%{
						transform: scale(150%);
						margin-left: 0rpx;
					}
					
				}
				@keyframes answerItemShowLeftTop{
					0%{
						transform: scale(100%);
						
						margin-top: 0rpx;
						margin-left: 0rpx;
					}
					50%{
						transform: scale(140%);
						margin-top: -50rpx;
						margin-left: -100rpx;
					}
					100%{
						transform: scale(140%);
						margin-top: 0rpx;
						margin-left: 0rpx;
					}
				}
				@keyframes answerItemShowRightTop{
					0%{
						transform: scale(100%);
						margin-top: 0rpx;
						margin-left: 0rpx;
					}
					50%{
						transform: scale(140%);
						margin-top: -50rpx;
						margin-left: 100rpx;
					}
					100%{
						transform: scale(140%);
						margin-top: 0rpx;
						margin-left: 0rpx;
					}
				}
				@keyframes answerItemShowRightBottom{
					0%{
						transform: scale(100%);
						margin-top: 0rpx;
						margin-left: 0rpx;
						
					}
					50%{
						transform: scale(140%);
						margin-top: 50rpx;
						margin-left: 100rpx;
					}
					100%{
						transform: scale(140%);
						margin-top: 0rpx;
						margin-left: 0rpx;
					}
				}
				@keyframes answerItemShowLeftBottom{
					0%{
						transform: scale(100%);
						margin-top: 0rpx;
						margin-left: 0rpx;
					}
					50%{
						transform: scale(140%);
						margin-top: 50rpx;
						margin-left: -100rpx;
					}
					100%{
						transform: scale(140%);
						margin-top: 0rpx;
						margin-left: 0rpx;
					}
					
				}
				.answerItem{
					width: 100%;
					height: 400rpx;
					position: absolute;
					left: 0;
					top: 50%;
					margin-top: -200rpx;
					display: flex;
					
					justify-content: center;
					flex-direction: column;
					// align-items: center;
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
					.answerItem_box{
						width: 100%;
						height: 50%;
						position: relative;
						justify-content: space-around;
						align-items: center;
						display: flex;
						.answerItem_oneShow_true{
							animation: answerItem 2s 1 linear;
							animation-fill-mode:forwards;
						}
						
						.answerItem_one{
							// position: fixed;
							position: absolute;
							width: 100rpx;
							height: 100rpx;
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
