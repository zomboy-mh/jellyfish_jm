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
				<image class="green_back_img" :src="imageUrl + 'buttonC.png'" mode=""></image>
			</view>
			<view class="green_add" v-if="buttonAShow && buttonShow"  @tap="addCurrent()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="boxItem" v-if="swiperCurrent == 0">
				<view class="letterBigALeft">
					<image @tap="switchLetter" v-show="letterShow" class="letterBigA" :src="imageUrl + 'letterBigC.png'" mode="aspectFit"></image>
					<image v-show="!letterShow"  class="letterBigA" :src="imageUrl + 'letterBigCDark.png'" mode="aspectFit"></image>
					<view class="antBox">
						<image class="antImg" :src="imageUrl + 'carC.png'" mode="aspectFit"></image>
					</view>
				</view>
				<view class="letterBigARight">
					<image @tap="switchSmallLetter" v-show="letterSmallShow" class="letterBigA" :src="imageUrl + 'letterSmallC.png'" mode="aspectFit"></image>
					<image v-show="!letterSmallShow" class="letterBigA" :src="imageUrl + 'letterSmallCDark.png'" mode="aspectFit"></image>
					<view class="antBox">
						<image class="antImg" :src="imageUrl + 'carC.png'" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="boxItem" v-if="swiperCurrent == 1">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallC.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallC.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigARight1">
					<image class="letterBigA" :src="imageUrl + 'carC.png'" mode="aspectFit"></image>
				</view>
				<view class="letterStarDown" v-if="letterStarShow">
					<image  class="letterStar1" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar2" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar3" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar4" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar5" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
				</view>
				<view class="letterText" v-if="letterText">ar</view>
				<!-- <view class="letterbox"></view> -->
			</view>
			<view class="boxItem2" v-if="swiperCurrent == 2">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallC.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallC.png'" mode="aspectFit"></image>
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
						<image  class="letterBigA" :src="imageUrl + 'catC1.jpg'" mode="aspectFill"></image>
					</view>
				</view>
				<view class="letterText" v-if="letterText">at</view>
			</view>
			<view class="boxItem3" v-if="swiperCurrent == 3">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallC.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallC.png'" mode="aspectFit"></image>
				</view>
				<view class="letterStarDown" v-if="letterStarShow">
					<image  class="letterStar1" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar2" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar3" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar4" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar5" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
				</view>
				<view class="letterText" v-if="letterText">andy</view>
				<view class="angryBox">
					<view class="angry_center" @tap="switchLetter1">
						<image  class="letterBigA" :src="imageUrl + 'candyC.png'" mode="aspectFill"></image>
					</view>
				</view>
				<image  class="candy_1" :src="imageUrl + 'candy_1.png'" mode="aspectFit"></image>
				<image  class="candy_2" :src="imageUrl + 'candy_2.png'" mode="aspectFit"></image>
				<image  class="candy_3" :src="imageUrl + 'candy_5.png'" mode="aspectFit"></image>
				<image  class="candy_4" :src="imageUrl + 'candy_4.png'" mode="aspectFit"></image>
				<image  class="candy_5" :src="imageUrl + 'candy_3.png'" mode="aspectFit"></image>
				<image  class="candy_6" :src="imageUrl + 'candy_6.png'" mode="aspectFit"></image>
				<image  class="candy_7" :src="imageUrl + 'candy_7.png'" mode="aspectFit"></image>
				<image  class="candy_8" :src="imageUrl + 'candy_8.png'" mode="aspectFit"></image>
				<image  class="candy_9" :src="imageUrl + 'candy_9.png'" mode="aspectFit"></image>
				<image  class="candy_10" :src="imageUrl + 'candy_6.png'" mode="aspectFit"></image>
				<image  class="candy_11" :src="imageUrl + 'candy_7.png'" mode="aspectFit"></image>
				<image  class="candy_12" :src="imageUrl + 'candy_8.png'" mode="aspectFit"></image>
				<image  class="candy_13" :src="imageUrl + 'candy_9.png'" mode="aspectFit"></image>
			</view>
			<view class="appleTree" v-if="swiperCurrent == 4" >
				<image class="appleTreeImg" :src="imageUrl + 'treeBg_bg.png'" mode="center"></image>
				<movable-area class="easydragBox" id="areaBox0">
					<view class="easydragitem" :style="{'top':item.oy+'%','left':item.ox+'%'}"
						@touchstart.stop="touchStart(index,$event)" @touchmove="touchMove(item,$event)" @touchend="touchEnd(item,index)"
						v-for="(item,index) in easydragQues" :key="index" :id="'appLi' + index">
						<image class="wh z-index9 position-a"  v-if="item.show"  :src="imageUrl + item.imageUrl" mode="aspectFit"></image>
						<!-- <image class="easydragitemBg" v-if="item.show"  :src="imageUrl + 'clock_bg.png'" mode="aspectFit"></image> -->
					</view>
					<movable-view v-if="moviewShow"  :animation="false"  :x="moveX" :y="moveY" direction="all"   class="easydragmov " mode="widthFix">
						<image class="wh" :src="imageUrl + movImageUrl" mode="aspectFit"></image>
					</movable-view>
				</movable-area>
				<view class="easydragAns" v-for="(item,indexX) in easydragAns"  :key="indexX">
					<view class="easydragAnsTop" :style="{'top':item.oy+'%','left':item.ox + 2 +'%'}">
						<image class="wh" :src="imageUrl + 'clock_bg_top.png'" mode=""></image>
					</view>	
					<view	class="easydragAnsBox"  :style="{'top':item.oy+'%','left':item.ox+'%'}" :id="'item' + indexX">
						<image class="easydragItem  position-a" :style="item.opacityIf?'opacity:0.6':'opacity:1'" :src="imageUrl + item.imageUrl" mode="aspectFit"></image>
						<image class="easydragitemBg" :src="imageUrl + 'clock_bg.png'" mode="aspectFit"></image>
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
				easydragQues: [
					      { key: 'image1',imageUrl:'clock_bottom_c.png',ox:45,oy:80,show:true},
					      { key: 'image2',imageUrl:'clock_bottom_l.png',ox:75,oy:80,show:true},
					      { key: 'image3',imageUrl:'clock_bottom_o.png',ox:60,oy:80,show:true},
					      { key: 'image1',imageUrl:'clock_bottom_c.png',ox:30,oy:80,show:true},
					      { key: 'image5',imageUrl:'clock_bottom_k.png',ox:15,oy:80,show:true},
				],
				easydragAns: [
					      { key: 'image1',imageUrl:'clock_top_c.png',ox:15,oy:0,show:true,opacityIf:true},
					      { key: 'image2',imageUrl:'clock_top_l.png',ox:30,oy:0,show:true,opacityIf:true},
					      { key: 'image3',imageUrl:'clock_top_o.png',ox:45,oy:0,show:true,opacityIf:true},
					      { key: 'image1',imageUrl:'clock_top_c.png',ox:60,oy:0,show:true,opacityIf:true},
					      { key: 'image5',imageUrl:'clock_top_k.png',ox:75,oy:0,show:true,opacityIf:true},
				],
				pretextLeftIndex:0,
				pretextRightIndex:0,
				easydragAnswer:[],
				touchItem:'',
				movImageUrl:'',
				letterStarShow:false,
				preserveIf:false,
				buttonShow:true
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
				}
			}
		},
		computed: {
		  
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
					_this.easydragQues.forEach((item, idx) => {
						
						_this.getDomInfo('appLi' + idx, res => {
							item.x = res.left - info.left;
							item.y = res.top - info.top;
						});
					});
					_this.easydragAns.forEach((item, idx) => {
						
						_this.getDomInfo('item' + idx, res => {
							item.x = res.left - info.left;
							item.y = res.top - info.top;
						});
					});
				});
			},
			touchStart(index, event) {
				this.touchItem = this.easydragQues[index].key;
				this.movImageUrl = this.easydragQues[index].imageUrl
				this.moviewShow = true;
				this.moveX = this.easydragQues[index].x;
				this.moveY = this.easydragQues[index].y;
				
				var x = event.changedTouches[0].clientX - this.areaBoxInfo.left;
				var y = event.changedTouches[0].clientY - this.areaBoxInfo.top;
				this.inBoxXY = {
					x: x - this.easydragQues[index].x,
					y: y - this.easydragQues[index].y,
				}
				
			},
			touchMove(item,event) {
				
				let areaBoxTop = this.areaBoxInfo.top;
				let areaBoxLeft = this.areaBoxInfo.left;
				var x = event.changedTouches[0].clientX - areaBoxLeft;
				var y = event.changedTouches[0].clientY - areaBoxTop;
				this.moveX = x - this.inBoxXY.x;
				this.moveY = y - this.inBoxXY.y;
				
				
				this.easydragAns.map((itm)=>{
					if(itm.x - 25 < this.moveX && this.moveX < itm.x + 25 && itm.y  > this.moveY -38 && this.moveY + 38 > itm.y ){
						console.log("移动",true)
						
						if(item.key == itm.key){
							itm.opacityIf = false
						}else{
							itm.opacityIf = true
						}
					}else{
						if(!itm.opacityIf){
							return
						}else{
							itm.opacityIf = true
						}
					}
				})
			},
			touchEnd(item,index) {
				var that = this;
				const query = uni.createSelectorQuery().in(that);
				
				this.easydragAns.map((itm)=>{
					if(itm.x - 25 < this.moveX && this.moveX < itm.x + 25 && itm.y  > this.moveY -38 && this.moveY + 38 > itm.y ){
						console.log("移动",true)
						if(item.key == itm.key){
							itm.opacityIf = false
						}else{
							itm.opacityIf = true
						}
						
					}else{
						if(!itm.opacityIf){
							return
						}else{
							itm.opacityIf = true
						}
					}
				})
				this.moviewShow = false;
			},
			jump() {
				uni.reLaunch({
						url: 'letter'
				})
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
				background: #00aa00;
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
					top: 20%;
					z-index: 2;
					animation: directoryShow 2s 1 linear;
					animation-fill-mode:forwards;
					.letterBigA{
						width: 100%;
						height: 100%;
					}
					.antBox{
						position: absolute;
						left: 30rpx;
						bottom: 10rpx;
						width: 80rpx;
						height: 55rpx;
						z-index: -1;
						transform: rotateY(180deg);
						animation: antShow1 4s 1 linear;
						animation-fill-mode:forwards;
						.antImg{
							width: 100%;
							height: 100%;
						}
					}
					
				}
				@keyframes directoryShow{
					0%{
						left: -25%;
						
					}
					100%{
						left: 25%;
					}
				}
				@keyframes antShow1{
					0%{
						transform: rotateY(180deg);
						left: -30rpx;
					}
					50%{
						transform: rotateY(180deg);
						left: -30rpx;
					}
					51%{
						transform: rotateY(0);
						left: -30rpx;
					}
					100%{
						transform: rotateY(0);
						left: -350rpx;
					}
				}
				
				.letterBigARight{
					width: 20%;
					height: 50%;
					position: absolute;
					top: 20%;
					z-index: 2;
					animation: directoryShow1 8s 1 linear;
					animation-fill-mode:forwards;
					.letterBigA{
						width: 100%;
						height: 100%;
					}
					.antBox{
						position: absolute;
						left: 20rpx;
						bottom: 10rpx;
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
					
				}
				@keyframes directoryShow1{
					0%{
						right: -25%;
					}
					50%{
						right: -25%;
					}
					75%{
						right: 25%;
					}
					100%{
						right: 25%;
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
						left: 34%;
						top: 53%;
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
				}
				.letterText{
					position: absolute;
					bottom: 12%;
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
			.boxItem3{
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: #00aa00;
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
						width: 100%;
						height: 100%;
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
						bottom: 12%;
						left: 47%;
						font-size: 60rpx;
					}
					
				.candy_1{
					width: 100rpx;
					height: 60rpx;
					animation: candy_1 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 10%;
					margin-top: -60rpx;
				}
				.candy_2{
					width: 100rpx;
					height: 60rpx;
					animation: candy_2 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 20%;
					margin-top: -60rpx;
				}
				.candy_3{
					width: 55rpx;
					height: 110rpx;
					animation: candy_3 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 30%;
					margin-top: -110rpx;
				}
				.candy_4{
					width: 100rpx;
					height: 60rpx;
					animation: candy_4 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 40%;
					margin-top: -60rpx;
				}
				.candy_5{
					width: 100rpx;
					height: 60rpx;
					animation: candy_5 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 50%;
					margin-top: -60rpx;
				}
				.candy_6{
					width: 55rpx;
					height: 110rpx;
					animation: candy_6 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 66%;
					margin-top: -110rpx;
				}
				.candy_7{
					width: 100rpx;
					height: 60rpx;
					animation: candy_7 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 70%;
					margin-top: -60rpx;
				}
				.candy_8{
					width: 100rpx;
					height: 60rpx;
					animation: candy_8 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 80%;
					margin-top: -60rpx;
				}
				.candy_9{
					width: 100rpx;
					height: 60rpx;
					animation: candy_9 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 90%;
					margin-top: -60rpx;
				}
				.candy_10{
					width: 100rpx;
					height: 60rpx;
					animation: candy_10 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 75%;
					margin-top: -60rpx;
				}
				.candy_11{
					width: 100rpx;
					height: 60rpx;
					animation: candy_11 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 65%;
					margin-top: -60rpx;
				}
				.candy_12{
					width: 100rpx;
					height: 60rpx;
					animation: candy_12 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 25%;
					margin-top: -60rpx;
				}
				.candy_13{
					width: 100rpx;
					height: 60rpx;
					animation: candy_13 6s 1 ease-in;
					animation-fill-mode:forwards;
					position: absolute;
					left: 15%;
					margin-top: -60rpx;
				}
				@keyframes candy_1{
					0%{
						top: -100rpx;
					}
					60%{
						top: 100%;
					}
					70%{
						top: 90%;
					}
					100%{
						top: 100%;
					}
				}
				@keyframes candy_2{
					0%{
						top: -100rpx;
					}
					60%{
						top: 100%;
					}
					70%{
						top: 85%;
					}
					100%{
						top: 100%;
					}
				}
				@keyframes candy_3{
				0%{
					top: -100rpx;
				}
				60%{
					top: 100%;
				}
				70%{
					top: 90%;
				}
				100%{
					top: 100%;
				}
				}
				@keyframes candy_4{
					0%{
						top: -100rpx;
					}
					60%{
						top: 100%;
					}
					70%{
						top: 80%;
					}
					100%{
						top: 100%;
					}
				}
				@keyframes candy_5{
					0%{
						top: -100rpx;
					}
					60%{
						top: 100%;
					}
					70%{
						top: 90%;
					}
					100%{
						top: 100%;
					}
				}
				@keyframes candy_6{
					0%{
						top: -100rpx;
					}
					60%{
						top: 100%;
					}
					70%{
						top: 86%;
					}
					100%{
						top: 100%;
					}
				}
				@keyframes candy_7{
					0%{
						top: -100rpx;
					}
					60%{
						top: 100%;
					}
					70%{
						top: 80%;
					}
					100%{
						top: 100%;
					}
				}
				@keyframes candy_8{
					0%{
						top: -100rpx;
					}
					60%{
						top: 100%;
					}
					70%{
						top: 90%;
					}
					100%{
						top: 100%;
					}
				}
				@keyframes candy_9{
					0%{
						top: -100rpx;
					}
					60%{
						top: 100%;
					}
					70%{
						top: 85%;
					}
					100%{
						top: 100%;
					}
				}
				@keyframes candy_10{
					0%{
						top: -100rpx;
					}
					60%{
						top: 100%;
					}
					70%{
						top: 83%;
					}
					100%{
						top: 100%;
					}
				}
				@keyframes candy_11{
					0%{
						top: -100rpx;
					}
					60%{
						top: 100%;
					}
					70%{
						top: 90%;
					}
					100%{
						top: 100%;
					}
				}
				@keyframes candy_12{
					0%{
						top: -100rpx;
					}
					60%{
						top: 100%;
					}
					70%{
						top: 75%;
					}
					100%{
						top: 100%;
					}
				}
				@keyframes candy_13{
					0%{
						top: -100rpx;
					}
					60%{
						top: 100%;
					}
					70%{
						top: 80%;
					}
					100%{
						top: 100%;
					}
				}
			}
			.boxItem2{
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: #00aa00;
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
						width: 100%;
						height: 100%;
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
				.letterText{
					position: absolute;
					bottom: 12%;
					left: 47%;
					font-size: 80rpx;
				}
				
			}
			.appleTree{
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				.easydragBox{
					position: absolute;
					width: 100%;
					height: 100%;
					z-index: 100;
					.easydragitem {
						position: absolute;
						width: 80rpx;
						height: 80rpx;
						z-index: 888;
					}
					.easydragitemBg{
						position: absolute;
						left: 0;
						top: 0;
						width: 80rpx;
						height: 80rpx;
						z-index: 666;
					}
				}
				.easydragAns{
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100rpx;
					.easydragAnsTop{
						position: relative;
						width: 56rpx;
						height: 30rpx;
						z-index: 888;
						animation: easydragAnsTop 4s 1 linear;
						animation-fill-mode:forwards;
					}
					@keyframes easydragAnsTop{
						0%{
							height: 30rpx;
						}
						50%{
							height: 120rpx;
						}
						100%{
							height: 0rpx;
						}
					}
					.easydragAnsBox{
						position: relative;
						.easydragItem{
							width: 86rpx;
							height: 80rpx;
							z-index: 888;
						}
						.easydragitemBg{
							position: absolute;
							left: 0;
							top: 0;
							width: 86rpx;
							height: 80rpx;
							z-index: 666;
						}
					}
				}
				
				.easydragmov{
					width: 50rpx;
					height: 50rpx;
					z-index: 999;
				}
				.appleBigA1{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					top: 18%;
					left: 36%;
					z-index: 250;
				}
				.appleBigA2{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					top: 20%;
					left: 58%;
					z-index: 250;
				}
				.appleBigA3{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					top: 10%;
					left: 45%;
					z-index: 250;
				}
				.appleBigA4{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					top: 22%;
					left: 43%;
					z-index: 250;
				}
				.appleBigA5{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					top:28%;
					left: 50%;
					z-index: 250;
				}
				.appleBigA6{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					top:16%;
					left: 52%;
					z-index: 250;
				}
				.appleBigA7{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					top:34%;
					left: 40%;
					z-index: 250;
				}
				.appleBigA8{
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					top:34%;
					left: 57%;
					z-index: 250;
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
