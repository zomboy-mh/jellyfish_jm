<template>
	<view class="position-f wh">
		<view class="loading" v-if="loading">
			<image class="loading_img" :src="imageUrl + 'loading.gif'" mode=""></image>
		</view>
		<view class="head z-index9">
			<view class="green_back display-flex" @tap="jump()">
				<image class="green_back_img" :src="imageUrl + 'guide_left.png'" mode="aspectFit"></image>
			</view>
		</view>
	
		<!-- 	<view class="green_back_left" v-if="swiperCurrent > 0"  @tap="backCurrent()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="buttonA" v-if="!buttonAShow">
				<image class="green_back_img1" :src="imageUrl + 'button'+letterNumber+'.png'" mode=""></image>
			</view>
			<view class="green_add" v-if="buttonAShow && buttonShow"  @tap="addCurrent()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view> -->
		<!-- <view class="position-a wh bg-ffaa00 " v-if="swiperCurrent == 0&&letterNumber!='A'&&letterNumber!='B'&&letterNumber!='C'&&letterNumber!='D'">
			<view class="letterBigALeft">
				<image @tap="switchLetter" v-show="letterShow" class="letterBigA" :src="imageUrl + 'letterBig'+letterNumber+'.png'" mode="aspectFit"></image>
				<image v-show="!letterShow"  class="letterBigA" :src="imageUrl + 'letterBig'+letterNumber+'Dark.png'" mode="aspectFit"></image>
			</view>
			<view class="letterBigARight">
				<image @tap="switchSmallLetter" v-show="letterSmallShow" class="letterBigA" :src="imageUrl + 'letterSmall'+letterNumber+'.png'" mode="aspectFit"></image>
				<image v-show="!letterSmallShow" class="letterBigA" :src="imageUrl + 'letterSmall'+letterNumber+'Dark.png'" mode="aspectFit"></image>
			</view>
			<view class="position-a-100-0" >
				<image  class="wh" :src="formalUrl + letterDetailList[0].wordImg" mode="aspectFill"></image>
			</view>
		</view> -->
		<!-- A -->
		<!-- <view class=" position-a wh bg-ffbedb " v-if="swiperCurrent == 0&&letterNumber=='A'">
			<view class="letterBigALeftA">
				<image  @tap="switchLetter" v-show="letterShow" class="wh" :src="imageUrl + 'letterBigA.png'" mode="aspectFit"></image>
				<image v-show="!letterShow" class="wh" :src="imageUrl + 'letterBigADark.png'" mode="aspectFit"></image>
				<view class="antBox1A">
					<image class="wh" :src="imageUrl + 'ant.png'" mode="aspectFit"></image>
				</view>
				<view class="antBox2A">
					<image class="wh" :src="imageUrl + 'ant.png'" mode="aspectFit"></image>
				</view>
			</view>
			<view class="letterBigARightA">
				<image @tap="switchSmallLetter" v-show="letterSmallShow" class="wh" :src="imageUrl + 'letterSmallA.png'" mode="aspectFit"></image>
				<image v-show="!letterSmallShow" class="wh" :src="imageUrl + 'letterSmallADark.png'" mode="aspectFit"></image>
				<view class="antBox3A">
					<image class="wh" :src="imageUrl + 'ant.png'" mode="aspectFit"></image>
				</view>
				<view class="antBox4A">
					<image class="wh" :src="imageUrl + 'ant.png'" mode="aspectFit"></image>
				</view>
			</view>
		</view> -->
		<!-- B -->
		<!-- <view class="position-a wh bg-aaff7f " v-if="swiperCurrent == 0&&letterNumber=='B'">
			<view class="letterBigALeftB">
				<image @tap="switchLetter" v-show="letterShow" class="wh" :src="imageUrl + 'letterBigB.png'" mode="aspectFit"></image>
				<image v-show="!letterShow"  class="wh" :src="imageUrl + 'letterBigBDark.png'" mode="aspectFit"></image>
				<view class="antBox1B">
					<image class="wh" :src="imageUrl + 'beeB.png'" mode=""></image>
				</view>
				<view class="antBox2B">
					<image class="wh" :src="imageUrl + 'beeB.png'" mode=""></image>
				</view>
			</view>
			<view class="letterBigARightB">
				<image @tap="switchSmallLetter" v-show="letterSmallShow" class="wh" :src="imageUrl + 'letterSmallB.png'" mode="aspectFit"></image>
				<image v-show="!letterSmallShow" class="wh" :src="imageUrl + 'letterSmallBDark.png'" mode="aspectFit"></image>
				<view class="antBox3B">
					<image class="wh" :src="imageUrl + 'beeB.png'" mode=""></image>
				</view>
				<view class="antBox4B">
					<image class="wh" :src="imageUrl + 'beeB.png'" mode=""></image>
				</view>
			</view>
		</view>
		<view class="position-a wh bg-00aa00 " v-if="swiperCurrent == 0&&letterNumber=='C'">
			<view class="letterBigALeftC">
				<image @tap="switchLetter" v-show="letterShow" class="wh" :src="imageUrl + 'letterBigC.png'" mode="aspectFit"></image>
				<image v-show="!letterShow"  class="wh" :src="imageUrl + 'letterBigCDark.png'" mode="aspectFit"></image>
				<view class="antBox1C">
					<image class="wh" :src="imageUrl + 'carC.png'" mode="aspectFit"></image>
				</view>
			</view>
			<view class="letterBigARightC">
				<image @tap="switchSmallLetter" v-show="letterSmallShow" class="wh" :src="imageUrl + 'letterSmallC.png'" mode="aspectFit"></image>
				<image v-show="!letterSmallShow" class="wh" :src="imageUrl + 'letterSmallCDark.png'" mode="aspectFit"></image>
				<view class="antBox3C">
					<image class="wh" :src="imageUrl + 'carC.png'" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<view class="position-a wh bg-0055ff " v-if="swiperCurrent == 0&&letterNumber=='D'">
			<view class="letterBigALeftD">
				<image @tap="switchLetter" v-show="letterShow" class="wh-120" :src="imageUrl + 'letterBigD.png'" mode="aspectFit"></image>
				<image v-show="!letterShow"  class="wh-120" :src="imageUrl + 'letterBigDDark.png'" mode="aspectFit"></image>
			</view>
			<view class="letterBigARightD">
				<image @tap="switchSmallLetter" v-show="letterSmallShow" class="wh-120" :src="imageUrl + 'letterSmallD.png'" mode="aspectFit"></image>
				<image v-show="!letterSmallShow" class="wh-120" :src="imageUrl + 'letterSmallDDark.png'" mode="aspectFit"></image>
			</view>
			<image class="stage_bg1D" :src="imageUrl + 'stage_bg.png'" mode="aspectFit"></image>
			<image class="stage_bg2D" :src="imageUrl + 'stage_bg.png'" mode="aspectFit"></image>
		</view> -->
		<videw class="position-a wh bg-ffbedb" >
			<video class="bgview" :src="formalUrl+videoUrl" autoplay="true" loop="true"></video>
		</videw>
		<share-after ref="share" ></share-after>
		
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import shareAfter from '@/components/share-after.vue';
	import {Audio,voiceStart} from "@/utils/utils";
	import {getWordCard} from '../../../api/index.js'
	export default {
		components: {
			shareAfter,
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				loading:false,
				buttonAShow:true,
				buttonShow:true,
				swiperCurrent:0,
				wordShow:true,
				letterShow:true,
				letterSmallShow:true,
				letterText:false,
				letterStarShow:false,
				letterBigShow:false,
				letterImgShow:true,
				letterNumber:'',
				letterHeadImg:'',
				letterList:'',
				letterLittle:'',
				letterDetailList:[],
				audioUrl:'',
				videoUrl:''
			}
		},
		watch:{
			letterBigShow(){
				if(this.letterBigShow){
					setTimeout(()=>{
						this.letterStarShow = true;
					},2000)
				}
			},
			swiperCurrent(){
				this.letterShowDown = false;
				this.letterStarShow = false;
				this.letterText = false;
				this.letterBigShow = false
				this.letterImgShow = true
				if(this.swiperCurrent <=3){
					this.audioUrl = this.formalUrl + this.letterDetailList[this.swiperCurrent].wordAudio
					
				}else{
					this.letterStarShow = false;
				}
				if(this.swiperCurrent == 4){
					setTimeout(()=>{
						this.buttonShow = true;
						this.buttonAShow = true
					},1000)
				}else{
					this.buttonShow = false;
				}
				console.log("第几页",this.swiperCurrent)
				if(this.swiperCurrent > 4){
					this.$refs.share.preserveIf = true
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
			easydragAnsCTrue(){
			
				console.log("做对了",this.easydragAnsCTrue)
				if(this.easydragAnsCTrue == 5){
					uni.showToast({
						title: '完成游戏，准备进行下一步',
						duration: 1500,
						icon: 'none'
					});
					setTimeout(()=>{
						this.swiperCurrent = this.swiperCurrent + 1
					},2500)
				}
			},
			audioUrl(){
				this.playMusic()
			}
		},
		onLoad(open) {
			this.videoUrl = open.videoUrl;
			//  this.getWordCardUl(this.letterNumber)
			// setTimeout(()=>{
			// 	this.audioUrl = this.imageUrl + this.letterNumber + '_name.mp3';
			// },1000)
		},
		methods: {
			jump() {
				Audio.stop();
				uni.reLaunch({
						url: 'letterVideoIndex'
				})
			},
			getWordCardUl(data){
				getWordCard({
					wordLetter:data
				}).then((res)=>{
					console.log("sss",res)
					this.letterDetailList = res.data;
					this.letterDetailList.map((item,index)=>{
						if(item.wordContent == 'fox'||item.wordContent == 'ox'){
							item.letterLittle = item.wordContent.substring(item.wordContent.length-1);
							item.wordContent = item.wordContent.substring(0, item.wordContent.length-1);
						}else{
							item.letterLittle = item.wordContent.substring(0, 1);
							item.wordContent = item.wordContent.substring(1);
						}
						
					})
				})
			},
			playMusic(){
				voiceStart(this.audioUrl).then(() => {
					this.audioUrl = ''
				})
				const isContainSound = this.audioUrl.includes('sound');
			},
			addCurrent() {
				this.buttonAShow = false;
				this.audioUrl = this.imageUrl + this.letterNumber + '_sound.mp3';
				setTimeout(() => {
					this.swiperCurrent = this.swiperCurrent + 1;
					this.buttonAShow = true;
				}, 1000)
			},
			backCurrent(){
				this.swiperCurrent = this.swiperCurrent - 1
			},
			switchLetter(){
				this.letterShow = false;
				this.audioUrl = this.imageUrl + this.letterNumber + '_name.mp3';
				setTimeout(()=>{
					
					this.letterShow = true;
					this.buttonShow = true;
					this.buttonAShow = true
				},500)
				
			},
			switchSmallLetter(){
				this.letterSmallShow = false;
				this.audioUrl = this.imageUrl + this.letterNumber + '_name.mp3';
				setTimeout(()=>{
					this.letterSmallShow = true;
					this.buttonShow = true;
					this.buttonAShow = true
				},500)
			},
			switchLetter1(){
				this.letterText = true
				this.letterShowDown = true
				this.buttonShow = true;
				this.letterImgShow = false
			
				this.audioUrl = this.imageUrl + this.letterNumber + '_name.mp3';
			}
			
			
		}
	}
</script>

<style lang="less">
 .bgview {
 	position: absolute;
 	top: 10%;
 	left: 50%;
 	margin-left: -275rpx;
 	width: 550rpx;
 	height: 300rpx;
 }
  @media (min-height: 431px) {
	  .bgview {
	  	position: absolute;
	  	top: 10%;
	  	left: 50%;
	  	margin-left: -300rpx;
	  	width: 600rpx;
	  	height: 400rpx;
	  }
  }
</style>
