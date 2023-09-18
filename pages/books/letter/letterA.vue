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
				<image class="green_back_img" :src="imageUrl + 'buttonA.png'" mode=""></image>
			</view>
			<view class="green_add" v-if="buttonAShow && buttonShow"  @tap="addCurrent()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="boxItem" v-if="swiperCurrent == 0">
				<view class="letterBigALeft">
					<image @tap="switchLetter" v-show="letterShow" class="letterBigA" :src="imageUrl + 'letterBigA.png'" mode="aspectFit"></image>
					<image v-show="!letterShow"  class="letterBigA" :src="imageUrl + 'letterBigADark.png'" mode="aspectFit"></image>
					<view class="antBox">
						<image class="antImg" :src="imageUrl + 'ant.png'" mode="aspectFit"></image>
					</view>
					<view class="antBox1">
						<image class="antImg" :src="imageUrl + 'ant.png'" mode="aspectFit"></image>
					</view>
				</view>
				<view class="letterBigARight">
					<image @tap="switchSmallLetter" v-show="letterSmallShow" class="letterBigA" :src="imageUrl + 'letterSmallA.png'" mode="aspectFit"></image>
					<image v-show="!letterSmallShow" class="letterBigA" :src="imageUrl + 'letterSmallADark.png'" mode="aspectFit"></image>
					<view class="antBox">
						<image class="antImg" :src="imageUrl + 'ant.png'" mode="aspectFit"></image>
					</view>
					<view class="antBox1">
						<image class="antImg" :src="imageUrl + 'ant.png'" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="boxItem" v-if="swiperCurrent == 1">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallA.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallA.png'" mode="aspectFit"></image>
				</view>
				<view class="letterStarDown" v-if="letterStarShow">
					<image  class="letterStar1" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar2" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar3" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar4" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
					<image  class="letterStar5" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigARight1">
					<image class="letterBigA" :src="imageUrl + 'appleA.png'" mode="aspectFit"></image>
				</view>
				<view class="letterText" v-if="letterText">pple</view>
			</view>
			<view class="boxItem2" v-if="swiperCurrent == 2">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallA.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallA.png'" mode="aspectFit"></image>
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
						<image  class="letterBigA" :src="imageUrl + 'angry_center.png'" mode="aspectFit"></image>
					</view>
					<view class="angry_bottomleft" @tap="switchLetter1"> 
						<image  class="letterBigA" :src="imageUrl + 'angry_bottomleft.png'" mode="aspectFit"></image>
					</view>
					<view class="angry_bottomright" @tap="switchLetter1">
						<image  class="letterBigA" :src="imageUrl + 'angry_bottomright.png'" mode="aspectFit"></image>
					</view>
					<view class="angry_topleft" @tap="switchLetter1">
						<image  class="letterBigA" :src="imageUrl + 'angry_topleft.png'" mode="aspectFit"></image>
					</view>
					<view class="angry_topright" @tap="switchLetter1">
						<image  class="letterBigA" :src="imageUrl + 'angry_topright.png'" mode="aspectFit"></image>
					</view>
				</view>
				<view class="letterText" v-if="letterText">ngry</view>
			</view>
			<view class="boxItem3" v-if="swiperCurrent == 3">
				<view class="letterBigALeft1" @tap="switchLetter1">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallA.png'" mode="aspectFit"></image>
				</view>
				<view class="letterBigALeft1Down" v-show="letterShowDown">
					<image  class="letterBigA" :src="imageUrl + 'letterSmallA.png'" mode="aspectFit"></image>
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
						<image  class="letterBigA" :src="imageUrl + '5alligator.jpeg'" mode="aspectFill"></image>
					</view>
				</view>
				<view class="letterText" v-if="letterText">lligator</view>
			</view>
			<view class="appleTree" v-if="swiperCurrent == 4" >
				<image class="appleTreeImg" :src="imageUrl + 'treeBg_bg.png'" mode="center"></image>
				<image class="treeBg_treeImg" :src="imageUrl + 'treeBg_tree.png'" mode="aspectFit"></image>
				<movable-area class="easydragBox" id="areaBox0">
					<view class="easydragitem " :style="{'top':item.oy+'%','left':item.ox+'%'}"
						@touchstart.stop="touchStart(index,$event,item)" @touchmove="touchMove" @touchend="touchEnd(item,index)"
						v-for="(item,index) in easydragQues" :key="index" :id="'appLi' + index">
						<image class="wh" v-if="item.show"  :src="imageUrl + item.imageUrl" mode="aspectFit"></image>
					</view>
					<movable-view v-if="moviewShow"  :animation="false"  :x="moveX" :y="moveY" direction="all"   class="easydragmov " mode="widthFix">
						<image class="wh" :src="imageUrl + movImageUrl" mode="aspectFit"></image>
					</movable-view>
				</movable-area>
				<view class="pretextLeft" >
					<image class="pretextLeftImg" :src="imageUrl + 'basketBig' + pretextLeftIndex +'.png' " mode="aspectFit"></image>
				</view>
				<view class="pretextRight" >
					<image class="pretextRightImg" :src="imageUrl + 'basketSmall' + pretextRightIndex +'.png' " mode="aspectFit"></image>
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
				// isDragging: false, // 标记是否正在拖拽
				// draggingImageIndex: -1, // 当前正在拖拽的图片索引
				// images: [
				//       { id: 'image1', x: 300, y: 100, width: 50, height: 50 },
				//       { id: 'image2', x: 350, y: 140, width: 50, height: 50 },
				//       { id: 'image3', x: 480, y: 80, width: 50, height: 50 }
				// ],
				// canvasWidth: 600, // Canvas 宽度
				// canvasHeight: 800 // Canvas 高度
				moviewShow: false,
				moveX: 0,
				moveY: 0,
				easydragQues: [
					      { key: 'image1',imageUrl:'appleSmallA.png',ox:16,oy:30,show:true},
					      { key: 'image2',imageUrl:'appleSmallA.png',ox:55,oy:-6,show:true},
					      { key: 'image3',imageUrl:'appleSmallA.png',ox:40,oy:40,show:true},
					      { key: 'image4',imageUrl:'appleSmallA.png',ox:15,oy:0,show:true},
					      { key: 'image5',imageUrl:'appleBigA1.png',ox:60,oy:35,show:true},
					      { key: 'image6',imageUrl:'appleBigA1.png',ox:70,oy:10,show:true},
					      { key: 'image7',imageUrl:'appleBigA1.png',ox:44,oy:10,show:true},
					      { key: 'image8',imageUrl:'appleBigA1.png', ox:25,oy:15,show:true},
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
			
			// this.ctx = uni.createCanvasContext('myCanvas', this);
			// this.imagePath = imageUrl + 'appleSmallA.png'; // 替换为您的图片路径
			// this.imageWidth = 50; // 图片宽度
			// this.imageHeight = 55; // 图片高度
			// this.imageX = 320; // 图片起始X坐标
			// this.imageY = 75; // 图片起始Y坐标
			// this.drawImage();
		},
		onLoad() {
			
		},
		mounted() {
			// const ctx = uni.createCanvasContext('myCanvas', this);
			// this.ctx = ctx;
			// this.drawImages();
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
		computed: {
		    // canvasStyle() {
		    //   return `width:${this.canvasWidth}rpx;height:${this.canvasHeight}rpx;`;
		    // },
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
				});
			},
			touchStart(index, event) {
				this.touchItem = this.easydragQues[index].key;
				
				this.moviewShow = true;
				this.moveX = this.easydragQues[index].x;
				this.moveY = this.easydragQues[index].y;
				if(index > 3){
					this.movImageUrl = 'appleBigA1.png'
				}else{
					this.movImageUrl = 'appleSmallA.png'
				}
				var x = event.changedTouches[0].clientX - this.areaBoxInfo.left;
				var y = event.changedTouches[0].clientY - this.areaBoxInfo.top;
				this.inBoxXY = {
					x: x - this.easydragQues[index].x,
					y: y - this.easydragQues[index].y,
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
			touchEnd(item,index) {
				var that = this;
				const query = uni.createSelectorQuery().in(that);
				query.select('.pretextLeft').boundingClientRect(data => {
					let X = this.moveX - data.left;
					let Y = Math.abs(this.moveY - data.top);
					if (X < 0 && Y > 15) {
						if(index > 3){
							console.log("对")
							item.show = false
							this.pretextLeftIndex++;
							
							// let easydragQuesList = [];
							// this.easydragQues.map((itm,inx)=>{
							// 	if(index == inx){
							// 		this.easydragQues.splice(index,0)
									
							// 	}else{
							// 		easydragQuesList.push(itm)
							// 	}
							// })
							// this.easydragQues = easydragQuesList;
							// console.log("题",this.easydragQues)
							// this.easydragAnswer.push(item);
							this.resetListDom();
							// if(this.easydragQues.length == 0){
							// 	this.isMove = true;
							// 	this.resultList = this.easydragAnswer
							// }
						}else{
							console.log("错")
						}
					} else {
						if(index > 3){
							console.log("错")
						}else{
							console.log("对")
							item.show = false
							this.pretextRightIndex++
							// let easydragQuesList = [];
							// this.easydragQues.map((itm,inx)=>{
							// 	itm.show = 
							// })
							// this.easydragQues = easydragQuesList;
							// console.log("题",this.easydragQues)
							// this.easydragAnswer.push(item);
							this.resetListDom();
							// if(this.easydragQues.length == 0){
							// 	this.isMove = true;
							// 	this.resultList = this.easydragAnswer
							// }
						}
						return
					}
				}).exec();
				this.moviewShow = false;
			},
			// onTouchStart(event) {
			//       const { x, y } = event.touches[0];
			     
			//       const images = this.images;
			
			//       for (let i = 0; i < images.length; i++) {
			//         const image = images[i];
			//         if (
			//           x >= image.x &&
			//           x <= image.x + image.width &&
			//           y >= image.y &&
			//           y <= image.y + image.height
			//         ) {
			//           this.isDragging = true;
			//           this.draggingImageIndex = i;
			//           break;
			//         }
			//       }
			//     },
			//     onTouchMove(event) {
			//       if (this.isDragging) {
			//         const { x, y } = event.touches[0];
			       
			//         const image = this.images[this.draggingImageIndex];
			//         image.x = x - image.width / 2;
			//         image.y = y - image.height / 2;
			//         this.drawImages();
			//       }
			//     },
			//     onTouchEnd() {
			//       this.isDragging = false;
			//       this.draggingImageIndex = -1;
			//     },
			//     drawImages() {
			//       const ctx = this.ctx;
			//       const images = this.images;
			
			//       ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
			//       for (let i = 0; i < images.length; i++) {
			//         const image = images[i];
			//         ctx.drawImage(imageUrl + 'appleSmallA.png', image.x, image.y, image.width, image.height);
			//       }
			
			//       ctx.draw();
			//     },
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
				this.buttonShow = true
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
				background: #ffbedb;
				.letterStarDown{
					position: absolute;
					left: 25%;
					top: 24%;
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
						left: -25%;
						
					}
					100%{
						left: 25%;
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
						left: 32%;
						top: 30%;
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
					bottom: 13%;
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
				background: #ffbedb;
				.letterStarDown{
					position: absolute;
					left: 25%;
					top: 24%;
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
						
						// background: #fff;
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
						bottom: 13%;
						left: 47%;
						font-size: 60rpx;
					}
					
			}
			.boxItem2{
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: #ffbedb;
				.letterStarDown{
					position: absolute;
					left: 25%;
					top: 24%;
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
					left: 22%;
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
						left: 22%;
						top: 10%;
						transform: scale(100%);
					}
					10%{
						left: 22%;
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
					width: 200rpx;
					height: 200rpx;
					position: absolute;
					left: 50%;
					top: 50%;
					// margin-left: -100rpx;
					margin-top: -100rpx;
					// background: #fff;
					.angry_center{
						width: 160rpx;
						height: 129rpx;
						position: absolute;
						left: 25rpx;
						top: 30rpx;
						z-index: 2;
						.letterBigA{
							width: 100%;
							height: 100%;
						}
					}
					.angry_bottomleft{
						width: 50rpx;
						height: 55rpx;
						position: absolute;
						left: -30rpx;
						top: 70rpx;
						z-index: 2;
						animation: angry_bottomleft 2s infinite;
						.letterBigA{
							width: 100%;
							height: 100%;
						}
					}
					.angry_bottomright{
						width: 60rpx;
						height: 50rpx;
						position: absolute;
						right: -45rpx;
						top: 50rpx;
						z-index: 2;
						animation: angry_bottomright 2s infinite;
						.letterBigA{
							width: 100%;
							height: 100%;
						}
					}
					.angry_topleft{
						width: 70rpx;
						height: 70rpx;
						position: absolute;
						left: -10rpx;
						top: -10rpx;
						z-index: 2;
						animation: angry_topleft 2s infinite;
						.letterBigA{
							width: 100%;
							height: 100%;
						}
					}
					.angry_topright{
						width: 70rpx;
						height: 70rpx;
						position: absolute;
						right: -10rpx;
						top: -15rpx;
						z-index: 2;
						animation: angry_topright 2s infinite;
						.letterBigA{
							width: 100%;
							height: 100%;
						}
					}
					@keyframes angry_bottomleft{
						0%{
							left: -30rpx;
							top: 70rpx;
							transform: scale(100%);
						}
						100%{
							left: -40rpx;
							top: 70rpx;
							transform: scale(150%);
						}
					}
					@keyframes angry_bottomright{
						0%{
							right: -45rpx;
							top: 50rpx;
							transform: scale(100%);
						}
						100%{
							right: -55rpx;
							top: 50rpx;
							transform: scale(150%);
						}
					}
					@keyframes angry_topleft{
						0%{
							left: -10rpx;
							top: -10rpx;
							transform: scale(100%);
						}
						100%{
							left: -20rpx;
							top: -20rpx;
							transform: scale(150%);
						}
					}
					@keyframes angry_topright{
						0%{
							right: -10rpx;
							top: -15rpx;
							transform: scale(100%);
						}
						100%{
							right: -20rpx;
							top: -25rpx;
							transform: scale(150%);
						}
					}
				}
				.letterText{
					position: absolute;
					bottom: 13%;
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
					width: 46%;
					height: 60%;
					margin-left: 28%;
					margin-top: 6%;
					z-index: 999;
					.easydragitem {
						position: absolute;
						width: 50rpx;
						height: 50rpx;
						z-index: 999;
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
			.appleTree1{
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				background: #ffbedb;
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
