<template>
	<view class="position-f wh">
		<view class="loading" v-if="loading">
			<image class="loading_img" :src="imageUrl + 'loading.gif'" mode=""></image>
		</view>
		<view class="head z-index9">
			<view class="green_back d
			isplay-flex" @tap="jump()">
				<image class="green_back_img" :src="imageUrl + 'guide_left.png'" mode="aspectFit"></image>
			</view>
		</view>
	
			<view class="green_back_left" v-if="swiperCurrent > 0"  @tap="backCurrent()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="buttonA" v-if="!buttonAShow">
				<image class="green_back_img1" :src="imageUrl + 'button'+letterNumber+'.png'" mode="aspectFit"></image>
			</view>
			<view class="green_add" v-if="buttonAShow && buttonShow"  @tap="addCurrent()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="letterStarDown" v-if="letterStarShow &&swiperCurrent < 4">
				<image  class="letterStar1" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
				<image  class="letterStar2" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
				<image  class="letterStar3" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
				<image  class="letterStar4" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
				<image  class="letterStar5" :src="imageUrl + 'letter_star.png'" mode="aspectFit"></image>
			</view>
		
		<view class="position-a wh bg-ffaa00 " v-if="swiperCurrent == 0&&letterNumber!='A'&&letterNumber!='B'&&letterNumber!='C'&&letterNumber!='D'">
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
		</view>
		<!-- A -->
		<view class=" position-a wh bg-ffbedb " v-if="swiperCurrent == 0&&letterNumber=='A'">
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
		</view>
		<!-- B -->
		<view class="position-a wh bg-aaff7f " v-if="swiperCurrent == 0&&letterNumber=='B'">
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
		</view>
		
		<view class="position-a wh bg-00aa00 " v-if="swiperCurrent > 0 && swiperCurrent < 4&& swiperCurrent==index&&letterNumber!='X'" v-for="(item,index) in letterDetailList" :key="index">
			<view class="letterBigALeft1 position-a z-index900" @tap="switchLetter1" v-if="letterBigShow">
				<image  class="wh" :src="imageUrl + 'letterSmall'+letterNumber+'.png'" mode="aspectFit"></image>
			</view>
			<view class="letterBigALeft1Down z-index9"  v-if="letterShowDown" :key="animationKey">
				<image  class="wh" :src="imageUrl + 'letterSmall'+letterNumber+'.png'" mode="aspectFit"></image>
			</view>
			<view class="angryBox" >
				<image  class="wh" :src="formalUrl + item.wordImg" mode="aspectFill"></image>
			</view>
			<view class="letterTextBox">
				<view class="letterTextHead" :style="letterText?'color:#ff0000':'color:#000000'">{{item.letterLittle}}</view>
				<view class="letterText" >{{item.wordContent}}</view>
			</view>
		</view>
		<view class="position-a wh bg-00aa00 " v-if="swiperCurrent > 0 && swiperCurrent < 4&& swiperCurrent==index &&letterNumber=='X'" v-for="(item,index) in letterDetailList" :key="index">
			<view class="letterBigALeft1 position-a z-index900" @tap="switchLetter1" v-if="letterBigShow">
				<image  class="wh" :src="imageUrl + 'letterSmall'+letterNumber+'.png'" mode="aspectFit"></image>
			</view>
			<view class="letterBigALeft1Down z-index9" v-if="letterShowDown">
				<image  class="wh" :src="imageUrl + 'letterSmall'+letterNumber+'.png'" mode="aspectFill"></image>
			</view>
			<view class="angryBox" >
				<image  class="wh" :src="formalUrl + item.wordImg" mode="aspectFill"></image>
			</view>
			<view class="letterTextBox" v-if="item.wordContent == 'fo'||item.wordContent == 'o'">
				<view class="letterTextHead" >{{item.wordContent}}</view>
				<view class="letterText" :style="letterText?'color:#ff0000':'color:#000000'">{{item.letterLittle}}</view>
			</view>
			<view class="letterTextBox" v-else>
				<view class="letterTextHead" :style="letterText?'color:#ff0000':'color:#000000'">{{item.letterLittle}}</view>
				<view class="letterText" >{{item.wordContent}}</view>
			</view>
		</view>
		<!-- A游戏 -->
		<!-- <view class="position-a wh " v-if="swiperCurrent == 4&&letterNumber=='A'">
			<image class="appleTreeImg" :src="imageUrl + 'treeBg_bg.png'" mode="center"></image>
			<image class="treeBg_treeImg" :src="imageUrl + 'treeBg_tree.png'" mode="aspectFit"></image>
			<movable-area class="easydragBox" id="areaBox0">
				<view class="easydragitem " :style="{'top':item.oy+'%','left':item.ox+'%'}"
					@touchstart.stop="touchStart(index,$event,item)" @touchmove="touchMove"
					@touchend="touchEnd(item,index)" v-for="(item,index) in easydragQues" :key="index"
					:id="'appLi' + index">
					<image class="wh" v-if="item.show" :src="imageUrl + item.imageUrl" mode="aspectFit"></image>
				</view>
				<movable-view v-if="moviewShow" :animation="false" :x="moveX" :y="moveY" direction="all"
					class="easydragmov " mode="widthFix">
					<image class="wh" :src="imageUrl + movImageUrl" mode="aspectFit"></image>
				</movable-view>
			</movable-area>
			<view class="pretextLeft">
				<image class="wh" :src="imageUrl + 'basketBig' + pretextLeftIndex +'.png' "
					mode="aspectFit"></image>
			</view>
			<view class="pretextRight">
				<image class="wh" :src="imageUrl + 'basketSmall' + pretextRightIndex +'.png' "
					mode="aspectFit"></image>
			</view>
		</view> -->
		<!-- B游戏 -->
		<!-- <view class="position-a wh" v-if="swiperCurrent == 4&&letterNumber=='B'" >
			<image class="appleTreeImg" :src="imageUrl + 'balloon_bg.png'" mode=""></image>
			<movable-area class="position-a wh " id="areaBox0B">
				<view class="easydragitemB z-index8" v-if="ballonShow" @touchstart.stop="touchStartB($event)" @touchmove="touchMoveB" @touchend="touchEndB()" id="appLis">
					<image class="wh"  :src="imageUrl + 'balloon_' + balloonIndex+'.png'" mode="aspectFit"></image>
				</view>
				<movable-view v-if="moviewShow"  :animation="false"  :x="moveX" :y="moveY" direction="all"   class="easydragmovB " mode="widthFix">
					<image class="wh" :src="imageUrl + 'balloon_' + balloonIndex+'.png'" mode="aspectFit"></image>
				</movable-view>
			</movable-area>
			<view class="pretextLeftB" >
				<image class="wh" :src="imageUrl + 'balloonLeft_' + pretextLeftIndex +'.png' " mode="aspectFit"></image>
			</view>
			<view class="pretextRightB" >
				<image class="wh" :src="imageUrl + 'balloonRight_' + pretextRightIndex +'.png' " mode="aspectFit"></image>
			</view>
		</view>	 -->
		<!-- C游戏 -->
	<!-- 	<view class="position-a wh" v-if="swiperCurrent == 4&&letterNumber=='C'" >
			<image class="appleTreeImg" :src="imageUrl + 'treeBg_bg.png'" mode="center"></image>
			<movable-area class="position-a wh " id="areaBox0C">
				<view class="easydragitemC position-a z-index9" :style="{'top':item.oy+'%','left':item.ox+'%'}"
					@touchstart.stop="touchStartC(index,$event)" @touchmove="touchMoveC(item,$event)" @touchend="touchEndC(item,index)" v-for="(item,index) in easydragQuesC" :key="index" :id="'appLiC' + index">
					<image class="wh z-index9 "  v-if="item.show"  :src="imageUrl + item.imageUrl" mode="aspectFit"></image>
					
				</view>
				<movable-view v-if="moviewShow"  :animation="false"  :x="moveX" :y="moveY" direction="all"   class="easydragmov " mode="widthFix">
					<image class="wh" :src="imageUrl + movImageUrl" mode="aspectFit"></image>
				</movable-view>
			</movable-area>
			<view class="easydragAnsC" v-for="(item,indexX) in easydragAnsC"  :key="indexX">
				<view class="easydragAnsTopC" :style="{'top':item.oy+'%','left':item.ox + 2 +'%'}">
					<image class="wh" :src="imageUrl + 'clock_bg_top.png'" mode=""></image>
				</view>	
				<view class="position-r"  :style="{'top':item.oy+'%','left':item.ox+'%'}" :id="'item' + indexX">
					<image class="easydragItemC  position-a" :style="item.opacityIf?'opacity:0.6':'opacity:1'" :src="imageUrl + item.imageUrl" mode="aspectFit"></image>
					<image class="easydragitemBgC" :src="imageUrl + 'clock_bg.png'" mode="aspectFit"></image>
				</view>
			</view>
		</view> -->
		<!-- D游戏 -->
	<!-- 	<view class="position-a wh bg-0055ff" v-if="swiperCurrent == 4&&letterNumber=='D'" >
			<view class="answerBox z-index8" v-if="easydragAnsDIndex == index" v-for="(item,index) in easydragAnsD" :key="index">
				<view class="answerText" v-if="wordShow">{{item.key}}</view>
				<view class="answerItem" v-if="!wordShow">
					<view class="answerItem_one" v-for="(itm,inx) in item.list" :key="inx"   :style="{'background':itm.currentStyle}" @tap="answerTap(itm)">
						<view class="answerItem_one_border"></view>
						<image class="answerItem_oneImg" :src="imageUrl + itm.imageUrl" mode="aspectFit"></image>
					</view>
				</view>
			</view>
		</view> -->
		
		<videw class="position-a wh bg-ffbedb" v-if="swiperCurrent == 4">
			<video class="bgview" :src="formalUrl+letterDetailList[4].wordVideo" autoplay="true" loop="true"></video>
		</videw>
		<!-- <videw class="position-a wh bg-ffbedb" v-if="swiperCurrent == 5&&letterNumber=='A'">
			<video class="bgview" :src="formalUrl+letterDetailList[4].wordVideo" autoplay="true" loop="true"></video>
		</videw>
		<videw class="position-a wh bg-ffbedb" v-if="swiperCurrent == 5&&letterNumber=='B'">
			<video class="bgview" :src="formalUrl+letterDetailList[4].wordVideo" autoplay="true" loop="true"></video>
		</videw>
		<videw class="position-a wh bg-ffbedb" v-if="swiperCurrent == 5&&letterNumber=='C'">
			<video class="bgview" :src="formalUrl+letterDetailList[4].wordVideo" autoplay="true" loop="true"></video>
		</videw>
		<videw class="position-a wh bg-ffbedb" v-if="swiperCurrent == 5&&letterNumber=='D'">
			<video class="bgview" :src="formalUrl+letterDetailList[4].wordVideo" autoplay="true" loop="true"></video>
		</videw> -->
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
				moviewShow: false,
				moveX: 0,
				moveY: 0,
				easydragQues: [{
						key: 'image1',
						imageUrl: 'appleSmallA.png',
						ox: 16,
						oy: 30,
						show: true
					},
					{
						key: 'image2',
						imageUrl: 'appleSmallA.png',
						ox: 55,
						oy: -6,
						show: true
					},
					{
						key: 'image3',
						imageUrl: 'appleSmallA.png',
						ox: 40,
						oy: 40,
						show: true
					},
					{
						key: 'image4',
						imageUrl: 'appleSmallA.png',
						ox: 15,
						oy: 0,
						show: true
					},
					{
						key: 'image5',
						imageUrl: 'appleBigA1.png',
						ox: 60,
						oy: 35,
						show: true
					},
					{
						key: 'image6',
						imageUrl: 'appleBigA1.png',
						ox: 70,
						oy: 10,
						show: true
					},
					{
						key: 'image7',
						imageUrl: 'appleBigA1.png',
						ox: 44,
						oy: 10,
						show: true
					},
					{
						key: 'image8',
						imageUrl: 'appleBigA1.png',
						ox: 25,
						oy: 15,
						show: true
					},
				],
				pretextLeftIndex: 0,
				pretextRightIndex: 0,
				easydragAnswer: [],
				touchItem: '',
				movImageUrl: '',
				areaItemInfo:{},
				balloonIndex:1,
				ballonShow:true,
				// C
			
				easydragQuesC: [
					      { key: 'image1',imageUrl:'clock_bottom_c.png',ox:45,oy:80,show:true},
					      { key: 'image2',imageUrl:'clock_bottom_l.png',ox:75,oy:80,show:true},
					      { key: 'image3',imageUrl:'clock_bottom_o.png',ox:60,oy:80,show:true},
					      { key: 'image1',imageUrl:'clock_bottom_c.png',ox:30,oy:80,show:true},
					      { key: 'image5',imageUrl:'clock_bottom_k.png',ox:15,oy:80,show:true},
				],
				easydragAnsC: [
					      { key: 'image1',imageUrl:'clock_top_c.png',ox:15,oy:0,show:true,opacityIf:true},
					      { key: 'image2',imageUrl:'clock_top_l.png',ox:30,oy:0,show:true,opacityIf:true},
					      { key: 'image3',imageUrl:'clock_top_o.png',ox:45,oy:0,show:true,opacityIf:true},
					      { key: 'image1',imageUrl:'clock_top_c.png',ox:60,oy:0,show:true,opacityIf:true},
					      { key: 'image5',imageUrl:'clock_top_k.png',ox:75,oy:0,show:true,opacityIf:true},
				],
				easydragAnsCTrue:0,
				easydragAnsCFalse:0,
				
				// D
				easydragAnsD: [
							{	key:'Duck',
								list:[
									{ currentStyle: '#fff',imageUrl:'appleA.png',videoUrl:'',ox:15,oy:0,show:false,opacityIf:true},
									{ currentStyle: '#fff',imageUrl:'duckD1.png',videoUrl:'',ox:30,oy:0,show:true,opacityIf:true},
									{ currentStyle: '#fff',imageUrl:'ballB.png',videoUrl:'',ox:45,oy:0,show:false,opacityIf:true},
									{ currentStyle: '#fff',imageUrl:'carC.png',videoUrl:'',ox:60,oy:0,show:false,opacityIf:true}
								]
							},
							{	key:'Dog',
								list:[
									{ currentStyle: '#fff',imageUrl:'elephantE.png',videoUrl:'',ox:15,oy:0,show:false,opacityIf:true},
									{ currentStyle: '#fff',imageUrl:'dress_d.png',videoUrl:'',ox:30,oy:0,show:false,opacityIf:true},
									{ currentStyle: '#fff',imageUrl:'dogD1.jpg',videoUrl:'',ox:45,oy:0,show:true,opacityIf:true},
									{ currentStyle: '#fff',imageUrl:'foodF.jpg',videoUrl:'',ox:60,oy:0,show:false,opacityIf:true}
								]
							},
					     
				],
				easydragAnsDIndex:0,
				// O
				letterBigO:false,
				letterSmallO:false,
				audioUrl:'',
				animationKey: 0
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
				// if(this.swiperCurrent > 4 &&this.letterNumber!='A'&&this.letterNumber!='B'&&this.letterNumber!='C'&&this.letterNumber!='D'){
				// 	this.$refs.share.preserveIf = true
				// }else if(this.swiperCurrent == 1){
				// 		setTimeout(()=>{
				// 			this.letterBigA1 = !this.letterBigA1;
				// 		},1000)
				// }else if(this.swiperCurrent == 4){
				// 	this.easydragAnsIndex = 0
				// 	setTimeout(()=>{
				// 		this.wordShow = !this.wordShow;
				// 	},3000)
				// }else if(this.swiperCurrent > 5 &&this.letterNumber=='A'){
				// 	this.$refs.share.preserveIf = true
				// }else if(this.swiperCurrent > 5 &&this.letterNumber=='B'){
				// 	this.$refs.share.preserveIf = true
				// }else if(this.swiperCurrent > 5 &&this.letterNumber=='C'){
				// 	this.$refs.share.preserveIf = true
				// }else if(this.swiperCurrent > 5 &&this.letterNumber=='D'){
				// 	this.$refs.share.preserveIf = true
				// }else if(this.swiperCurrent == 5&&this.letterNumber=='A'){
				// 	this.buttonShow = true;
				// 	this.buttonAShow = true
				// }else if(this.swiperCurrent == 5&&this.letterNumber=='B'){
				// 	this.buttonShow = true;
				// 	this.buttonAShow = true
				// }else if(this.swiperCurrent == 5&&this.letterNumber=='C'){
				// 	this.buttonShow = true;
				// 	this.buttonAShow = true
				// }else if(this.swiperCurrent == 5&&this.letterNumber=='D'){
				// 	this.buttonShow = true;
				// 	this.buttonAShow = true
				// }
				
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
			easydragAnsCFalse(){
				this.audioUrl = this.imageUrl +  'a_false.mp3';
			},
			balloonIndex(){
				if(this.balloonIndex == 9){
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
			
			this.letterNumber = open.letter;
			 this.getWordCardUl(this.letterNumber)
			setTimeout(()=>{
				this.audioUrl = this.imageUrl + this.letterNumber + '_sound.mp3';
			},1000)
			// setTimeout(()=>{
			// 	this.audioUrl = this.imageUrl + this.letterNumber + '_name.mp3';
			// },2800)
		},
		methods: {
			jump() {
				Audio.stop();
				uni.reLaunch({
						url: 'letter'
				})
			},
			getWordCardUl(data){
				getWordCard({
					wordLetter:data
				}).then((res)=>{
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
					// this.audioUrl = ''
				})
				const isContainSound = this.audioUrl.includes('sound');
				
				if (isContainSound) {
				
				} else {
					Audio.onEnded(() => {
						this.letterBigShow = true
						
					})
				}
				
			},
			addCurrent() {
				this.buttonAShow = false;
				this.playMusic()
				// this.audioUrl = '';
				// this.audioUrl = this.imageUrl + this.letterNumber + '_sound.mp3';
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
				this.audioUrl = this.imageUrl + this.letterNumber + '_sound.mp3';
				setTimeout(()=>{
					
					this.letterShow = true;
					this.buttonShow = true;
					this.buttonAShow = true
				},500)
				
			},
			switchSmallLetter(){
				this.letterSmallShow = false;
				this.audioUrl = this.imageUrl + this.letterNumber + '_sound.mp3';
				setTimeout(()=>{
					this.letterSmallShow = true;
					this.buttonShow = true;
					this.buttonAShow = true
				},500)
			},
			switchLetter1(){
				console.log("12312")
				
				this.letterText = true
				this.letterShowDown = true
				this.buttonShow = true;
				this.letterImgShow = false
				this.animationKey++;
				// setTimeout(()=>{
				// 	this.letterShowDown = false
				// },2000)
				this.audioUrl = this.imageUrl + this.letterNumber + '_sound.mp3';
			},
			
			getDomInfo(id, callBack) {
				const query = uni.createSelectorQuery().in(this);
				query.select('#' + id)
					.boundingClientRect()
					.exec(res => {
						callBack(res[0]);
					});
			},
			resetListDomA() {
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
				if (index > 3) {
					this.movImageUrl = 'appleBigA1.png'
				} else {
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
			touchEnd(item, index) {
				var that = this;
				const query = uni.createSelectorQuery().in(that);
				query.select('.pretextLeft').boundingClientRect(data => {
					let X = this.moveX - data.left;
					let Y = Math.abs(this.moveY - data.top);
					if (X < 0 && Y > 15) {
						if (index > 3) {
							item.show = false
							this.pretextLeftIndex++;
							this.audioUrl = this.imageUrl + this.letterNumber + '_name.mp3';
							console.log("对",)
							console.log("数组",this.easydragQues.length)
							let number = parseInt(this.pretextLeftIndex) + parseInt(this.pretextRightIndex)
							if(number ==this.easydragQues.length){
								this.buttonShow = true;
								this.buttonAShow = true
								uni.showToast({
									title: '完成游戏，准备进行下一步',
									duration: 1500,
									icon: 'none'
								});
								setTimeout(()=>{
									this.swiperCurrent = this.swiperCurrent + 1
								},2800)
								
							}
							// this.buttonShow = true;
							// this.buttonAShow = true
						} else {
							this.audioUrl = this.imageUrl +'a_false.mp3'
							
						}
					} else {
						if (index > 3) {
							
							this.audioUrl = this.imageUrl +'a_false.mp3'
						} else {
							
							this.audioUrl = this.imageUrl + this.letterNumber + '_name.mp3';
							item.show = false
							this.pretextRightIndex++;
							let number = parseInt(this.pretextLeftIndex) + parseInt(this.pretextRightIndex)
							if(number ==this.easydragQues.length){
								uni.showToast({
									title: '完成游戏，准备进行下一步',
									duration: 1500,
									icon: 'none'
								});
								setTimeout(()=>{
									this.swiperCurrent = this.swiperCurrent + 1
								},2800)
							}
							
						}
						return
					}
				}).exec();
				this.moviewShow = false;
			},
			
			resetListDomB() {
				let _this = this;
				this.getDomInfo('areaBox0B', info => {
					
					_this.areaBoxInfo = info;
					_this.getDomInfo('appLis', res => {
						_this.areaItemInfo.x = res.left - info.left;
						_this.areaItemInfo.y = res.top - info.top;
					});
				
				});
			},
			touchStartB(event) {
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
			touchMoveB(event) {
				let areaBoxTop = this.areaBoxInfo.top;
				let areaBoxLeft = this.areaBoxInfo.left;
				var x = event.changedTouches[0].clientX - areaBoxLeft;
				var y = event.changedTouches[0].clientY - areaBoxTop;
				this.moveX = x - this.inBoxXY.x;
				this.moveY = y - this.inBoxXY.y;
			},
			touchEndB() {
				var that = this;
				const query = uni.createSelectorQuery().in(that);
				query.select('.pretextLeftB').boundingClientRect(data => {
					let X = this.moveX - data.left;
					let Y = Math.abs(this.moveY - data.top);
					console.log(X,Y)
					if (X < 140 && Y < 200) {
						console.log("对")
						if(this.balloonIndex == 1 ||this.balloonIndex == 3||this.balloonIndex == 4||this.balloonIndex == 7){
							this.audioUrl = this.imageUrl + this.letterNumber + '_name.mp3';
							this.buttonShow = true;
							this.buttonAShow = true
							this.ballonShow = false;
							this.pretextLeftIndex = this.pretextLeftIndex + 1
							setTimeout(()=>{
								this.balloonIndex = this.balloonIndex + 1
								this.ballonShow = true;
							},500)
						}else{
							this.audioUrl = this.imageUrl +'a_false.mp3';
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
							this.audioUrl = this.imageUrl + this.letterNumber + '_name.mp3';
							this.buttonShow = true;
							this.buttonAShow = true
							this.pretextRightIndex = this.pretextRightIndex + 1
							this.ballonShow = false;
							setTimeout(()=>{
								this.balloonIndex = this.balloonIndex + 1
								this.ballonShow = true;
							},500)
						}else{
							this.audioUrl = this.imageUrl +'a_false.mp3';
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
			// C
			resetListDomC() {
				let _this = this;
				this.getDomInfo('areaBox0C', info => {
					console.log(info)
					_this.areaBoxInfo = info;
					_this.easydragQuesC.forEach((item, idx) => {
						
						_this.getDomInfo('appLiC' + idx, res => {
							item.x = res.left - info.left;
							item.y = res.top - info.top;
						});
					});
					_this.easydragAnsC.forEach((item, idx) => {
						
						_this.getDomInfo('item' + idx, res => {
							item.x = res.left - info.left;
							item.y = res.top - info.top;
						});
					});
				});
			},
			touchStartC(index, event) {
				this.touchItem = this.easydragQuesC[index].key;
				this.movImageUrl = this.easydragQuesC[index].imageUrl
				this.moviewShow = true;
				this.moveX = this.easydragQuesC[index].x;
				this.moveY = this.easydragQuesC[index].y;
				
				var x = event.changedTouches[0].clientX - this.areaBoxInfo.left;
				var y = event.changedTouches[0].clientY - this.areaBoxInfo.top;
				this.inBoxXY = {
					x: x - this.easydragQuesC[index].x,
					y: y - this.easydragQuesC[index].y,
				}
				
			},
			touchMoveC(item,event) {
				
				let areaBoxTop = this.areaBoxInfo.top;
				let areaBoxLeft = this.areaBoxInfo.left;
				var x = event.changedTouches[0].clientX - areaBoxLeft;
				var y = event.changedTouches[0].clientY - areaBoxTop;
				this.moveX = x - this.inBoxXY.x;
				this.moveY = y - this.inBoxXY.y;
				// this.easydragAnsC.map((itm)=>{
				// 	if(itm.x - 25 < this.moveX && this.moveX < itm.x + 25 && itm.y  > this.moveY -38 && this.moveY + 38 > itm.y ){
				// 		if(item.key == itm.key){
				// 			itm.opacityIf = false
				// 		}else{
				// 			itm.opacityIf = true
				// 		}
				// 	}else{
				// 		if(!itm.opacityIf){
				// 			return
				// 		}else{
				// 			itm.opacityIf = true
				// 		}
				// 	}
				// })
			},
			touchEndC(item,index) {
				var that = this;
				const query = uni.createSelectorQuery().in(that);
				let nameList = [];
				this.easydragAnsC.map((itm)=>{
						if(itm.x - 25 < this.moveX && this.moveX < itm.x + 25 && itm.y  > this.moveY -38 && this.moveY + 38 > itm.y ){
							if(item.key == itm.key){
								this.easydragAnsCTrue++
								this.audioUrl = this.imageUrl +  'a_true.mp3';
								itm.opacityIf = false;
							}else{
								this.easydragAnsCFalse++
								itm.opacityIf = true
								this.buttonShow = true;
								this.buttonAShow = true
							}
						}else{
							// if(!itm.opacityIf){
							// 	// this.audioUrl = this.imageUrl +  'a_false.mp3';
							// 	console.log('对1')
								
							// 	return
							// }else{
							// 	// this.audioUrl = this.imageUrl +  'a_true.mp3';
							// 	itm.opacityIf = true
							// 	console.log('错1')
							// 	this.buttonShow = true;
							// 	this.buttonAShow = true
							// }
						}
					
					
					// if(!itm.opacityIf){
						
					// 	nameList.push(itm.opacityIf);
					// 	console.log(nameList.length)
					// 	if(nameList.length == 4){
					// 		uni.showToast({
					// 			title: '完成游戏，准备进行下一步',
					// 			duration: 1500,
					// 			icon: 'none'
					// 		});
					// 	}
					// }
				})
				this.moviewShow = false;
			},
			// D
			answerTap(item){
				if(item.show){
					item.currentStyle = 'gold';
					this.audioUrl = this.imageUrl +  'a_true.mp3';
					setTimeout(()=>{
						this.easydragAnsDIndex = this.easydragAnsDIndex + 1;
						this.wordShow = !this.wordShow;
						setTimeout(()=>{
							this.wordShow = !this.wordShow;
						},3000)
					},2000)
					if(this.easydragAnsDIndex == this.easydragAnsD.length - 1){
						setTimeout(()=>{
							this.swiperCurrent = this.swiperCurrent + 1
						},2000)
					}
				}else{
					this.audioUrl = this.imageUrl +  'a_false.mp3';
					item.currentStyle = 'deeppink'
					setTimeout(()=>{
						item.currentStyle = '#fff'
					},1000)
				}
				
			},
		}
	}
</script>

<style  lang="less">
 
 .angryBox {
 	width: 100%;
 	height: 70%;
 }
 .letterTextBox {
 	position: absolute;
 	bottom: 0;
 	left: 40%;
 	height: 120rpx;
 	width: 190rpx;
 	display: flex;
 	font-size: 60rpx;
 }
 .letterBigALeft1Down {
 	width: 160rpx;
 	height: 180rpx;
 	position: absolute;
 	/* z-index: 2; */
 	animation: directoryShowTwo 2s 1 linear;
 	animation-fill-mode: forwards;
 }
 .antBox1A{
	 position: absolute;
	 left: 10rpx;
	 bottom: -20rpx;
 }
 .antBox2A{
 	 position: absolute;
 	 right: 10rpx;
 	 bottom: -20rpx;
 }
 .antBox3A{
 	 position: absolute;
 	 left: 10rpx;
 	 bottom: -20rpx;
 }
 .antBox4A{
 	 position: absolute;
 	 right: 10rpx;
 	 bottom: -20rpx;
 }
 .antBox1B{
	 position: absolute;
	 left: 10rpx;
	 bottom: -20rpx;
 }
 .antBox2B{
 	 position: absolute;
 	 right: 10rpx;
 	 bottom: -20rpx;
 }
 .antBox3B{
 	 position: absolute;
 	 left: 10rpx;
 	 bottom: -20rpx;
 }
 .antBox4B{
 	 position: absolute;
 	 right: 10rpx;
 	 bottom: -20rpx;
 }
 @keyframes directoryShowTwo {
 	0% {
 		left: 22%;
 		top: 10%;
 		transform: scale(100%);
 		opacity: 1;
 	}
 
 	10% {
 		left: 22%;
 		top: 10%;
 		transform: scale(120%);
 			opacity: 1;
 	}
 
 	99% {
 		left: 28%;
 		top: 51%;
 		transform: scale(40%);
 			opacity: 1;
 	}
 
 	100% {
 		left: 28%;
 		top: 51%;
 		transform: scale(40%);
 			opacity: 0;
 	}
 }
 
 /* 平板及以上尺寸 */
 @media (min-height: 431px) {
	 .angryBox {
	 	width: 100%;
	 	height: 400rpx;
	 }
	 .letterTextBox {
	 	position: absolute;
	 	bottom: 8%;
	 	left: 40%;
	 	height: 120rpx;
	 	width: 190rpx;
	 	display: flex;
	 	font-size: 60rpx;
	 }
	 .letterBigALeft1Down {
	 	width: 23%;
	 	height: 50%;
	 	position: absolute;
	 	/* z-index: 2; */
	 	animation: directoryShowTwo 2s 1 linear;
	 	animation-fill-mode: forwards;
	 }
	 
	 @keyframes directoryShowTwo {
	 	0% {
	 		left: 22%;
	 		top: 10%;
	 		transform: scale(100%);
	 		opacity: 1;
	 	}
	 
	 	10% {
	 		left: 22%;
	 		top: 10%;
	 		transform: scale(120%);
	 			opacity: 1;
	 	}
	 
	 	99% {
	 		left: 28%;
	 		top: 51%;
	 		transform: scale(40%);
	 			opacity: 1;
	 	}
	 
	 	100% {
	 		left: 28%;
	 		top: 51%;
	 		transform: scale(40%);
	 			opacity: 0;
	 	}
	 }
	 .antBox1A{
	 	 position: absolute;
	 	 left: 10rpx;
	 	 bottom: 0;
	 }
	 .antBox2A{
	 	 position: absolute;
	 	 right: 10rpx;
	 	 bottom: 0;
	 }
	 .antBox3A{
	 	 position: absolute;
	 	 left: 10rpx;
	 	 bottom: 0;
	 }
	 .antBox4A{
	 	 position: absolute;
	 	 right: 10rpx;
	 	 bottom: 0;
	 }
	 .antBox1B{
	 	 position: absolute;
	 	 left: 10rpx;
	 	 bottom: 0rpx;
	 }
	 .antBox2B{
	 	 position: absolute;
	 	 right: 10rpx;
	 	 bottom: 0rpx;
	 }
	 .antBox3B{
	 	 position: absolute;
	 	 left: 10rpx;
	 	 bottom: 0rpx;
	 }
	 .antBox4B{
	 	 position: absolute;
	 	 right: 10rpx;
	 	 bottom: 0rpx;
	 }
 }
</style>
