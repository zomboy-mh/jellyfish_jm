<template>
	<view class="content">
		<view class="head">
			<view class="green_back display-flex" @tap="jump()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="headTips">
				<view class="levelTips">
					<view class="levelTipsName">Level</view>
					<view class="levelTipsSelect" >
						<uni-data-select
						      v-model="value"
						      :localdata="range"
						      @change="changeLevel"
							  title="-select-" 
							  placeholder="-select-"
						    ></uni-data-select>
					</view>
				</view>
				<view class="levelTips1">
					<view class="levelTipsName">Type</view>
					<view class="levelTipsSelect">
						<uni-data-select
						      v-model="typeValue"
						      :localdata="typRange"
						      @change="changeType"
							  title="-select type-"
							  placeholder="-select type-"
						    ></uni-data-select>
					</view>
				</view>
				<view class="chooseBook" @tap="clearList">重置</view>
				<view class="chooseTxt">
					<input class="txt_input" v-model="bookTypeTxt" placeholder="名称/词汇"></input>
					<view class="txtBtn" @tap="getBookListUlTxt">
						<image class="txtbtnImg" :src="imageUrl + 'sousuo.png'" mode=""></image>
					</view>
				</view>
				
			</view>
		</view>
		<view class="bodyBox">
			<view class="type" v-if="typeItemIf">
				<view class="type_item1" v-if="chooseLevel == 1 || chooseLevel==0">
					<span>{{levelScope}}</span>
					<view class="select1">
						<uni-data-select
						      v-model="gradeLeftValue"
						      :localdata="gradeRangeLeft"
						      @change="changeRangeLeft"
						    ></uni-data-select>
					</view>
					<span>to</span>
					<view class="select2">
						<uni-data-select
						      v-model="gradeRightValue"
						      :localdata="gradeRangeRight"
						      @change="changeRangeRight"
						    ></uni-data-select>
					</view>
				</view>
				<swiper v-if="chooseLevel == 2"  class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
						:duration="duration" :display-multiple-items="19" :current="swiperCurrent"  @change="swiperChange">
					<swiper-item v-for="(item,index) in tableList" :key='index' @click="CurrentTap(item,index)">
						<view class="swiper-item">
							
							<image v-show="item.style == false" class="swiper-item_img"  :src="imageUrl + item.url" alt="">
							<image v-show="item.style == true" class="swiper-item_imgs"  :src="imageUrl + item.url_select" alt="">
						</view>
					</swiper-item>
					<swiper-item >
						<view class="swiper-item">
							
						</view>
					</swiper-item>
				</swiper>
				
			</view>
			<view class="library_box">
				<view class="library_item" v-for="(item,index) in bookList" :key='index' @click="jumpBook(item.bookId)">
					<view class="library_book" :style="{'border-color':currentStyle}">
						<!-- <u-lazy-load :image="image" :loading-img="loadingImg" :error-img="errorImg"></u-lazy-load> -->
						
						<u-image width="96rpx" height="96rpx" border-radius="5rpx"  :src="formalUrl + item.bookLogo" :lazy-load="true">
							
						</u-image>
							<image v-if="item.isFree == 1" class="book_tip" :src="imageUrl +'library_free.png'" mode=""></image>
							<image v-else class="book_tip" :src="imageUrl +'library_vip.png'" mode=""></image>
							<view v-if="item.isPay == 1 " class="book_state font-12" :style="{'background':currentStyle}">
								已购买
							</view>
							<view v-if="item.read" class="book_state font-12" :style="{'background':currentStyle}">
								已阅读
							</view>
							
					</view>
					<view class="book_level_Txt ">
						<view class="book_level font-12" :style="{'background':currentStyle}">{{item.bookLevel}}</view>
						<view class="font-9">Lexile {{item.bookEslplevel}}</view>
					</view>
					<!-- <view class="book_name font-14">{{item.bookName}}</view> -->
					<view :class="item.bookName.length>13?'book_name':'book_name1'">
						{{item.bookName}}
					</view>
					<view class="bookType" v-if="item.bookListType1 !='' && item.bookListType1 !='null' && item.bookListType2 != 'null' && item.bookListType2 != ''">
						<view class="bookType1">{{item.bookListType1}}</view>
						<view class="bookType2">{{item.bookListType2}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getAZListItem,getBookList} from '../../../api/index.js'
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				value: -1,
				typeValue:0,
				gradeLeftValue:0,
				gradeRightValue:0,
				range: [
				        { value: 0, text: "Grade" },
				        { value: 1, text: "Lexile" },
				        { value: 2, text: "Learning A-Z" },
				 ],
				 typRange: [],
				gradeRangeLeft: [ ],
				gradeRangeRight: [],
				bookList:[ ],
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				swiperCurrent: 0,
				tableList:[{
						id:'aa',
						url:'library_aa.png',
						url_select:'aa_select.png',
						style:true,
						color:'#ed3922'},{
						id:'A',
						url:'library_A.png',
						url_select:'A_select.png',
						style:false,
						color:'#ff6699'
										},
										{
						id:'B',
						url:'library_B.png',
						url_select:'B_select.png',
						style:false,
						color:'#fc05c7'},{
						id:'C',
						url:'library_C.png',
						url_select:'C_select.png',
						style:false,
						color:'#960063'},
										{
						id:'D',
						url:'library_D.png',
						url_select:'D_select.png',
						style:false,
						color:'#630066'},
										{
						id:'E',
						url:'library_E.png',
						url_select:'E_select.png',
						style:false,
						color:'#000063'},
										{
						id:'F',
						url:'library_F.png',
						url_select:'F_select.png',
						style:false,
						color:'#0303c4'},
										{
						id:'G',
						url:'library_G.png',
						url_select:'G_select.png',
						style:false,
						color:'#0003ff'},
										{
						id:'H',
						url:'library_H.png',
						url_select:'H_select.png',
						style:false,
						color:'#2e33fa'},
										{
						id:'I',
						url:'library_I.png',
						url_select:'I_select.png',
						style:false,
						color:'#3699ff'},
										{
						id:'J',
						url:'library_J.png',
						url_select:'J_select.png',
						style:false,
						color:'#03c9ff'},
										{
						id:'K',
						url:'library_K.png',
						url_select:'K_select.png',
						style:false,
						color:'#03cfcc'},
										{
						id:'L',
						url:'library_L.png',
						url_select:'L_select.png',
						style:false,
						color:'#00fccc'},
										{
						id:'M',
						url:'library_M.png',
						url_select:'M_select.png',
						style:false,
						color:'#00ff9c'},
										{
						id:'N',
						url:'library_N.png',
						url_select:'N_select.png',
						style:false,
						color:'#03c761'},
										{
						id:'O',
						url:'library_O.png',
						url_select:'O_select.png',
						style:false,
						color:'#009c2e'},
										{
						id:'P',
						url:'library_P.png',
						url_select:'P_select.png',
						style:false,
						color:'#00cf38'},
										{
						id:'Q',
						url:'library_Q.png',
						url_select:'Q_select.png',
						style:false,
						color:'#66fc33'},
										{
						id:'R',
						url:'library_R.png',
						url_select:'R_select.png',
						style:false,
						color:'#96ff03'},
										{
						id:'S',
						url:'library_S.png',
						url_select:'S_select.png',
						style:false,
						color:'#c9ff00'},
										{
						id:'T',
						url:'library_T.png',
						url_select:'T_select.png',
						style:false,
						color:'#fffc00'},
										{
						id:'U',
						url:'library_U.png',
						url_select:'U_select.png',
						style:false,
						color:'#fffc08'},
										{
						id:'V',
						url:'library_V.png',
						url_select:'V_select.png',
						style:false,
						color:'#ffc700'},
										{
						id:'W',
						url:'library_W.png',
						url_select:'W_select.png',
						style:false,
						color:'#ffcf00'},
										{
						id:'X',
						url:'library_X.png',
						url_select:'X_select.png',
						style:false,
						color:'#ff9900'},
										{
						id:'Y',
						url:'library_Y.png',
						url_select:'Y_select.png',
						style:false,
						color:'#ff6633'},
										{
						id:'Z',
						url:'library_Z.png',
						url_select:'Z_select.png',
						style:false,
						color:'#c73305'
										}
				],
				currentStyle:'#ed3922',
				chooseLevel:0,
				levelScope:'Grade Range',
				gradeList:[],
				lexileList:[],
				bookSerachList:[],
				bookReadType:'',
				bookListDto:{},
				bookType:'',
				bookTypeTxt:'',
				typeItemIf:false
			};
		},
		onLoad() {
			this.getAZListItemUl()
			this.bookListDto.bookReadType = uni.getStorageSync('bookReadType');
		},
		methods: {
			jump(){
				uni.navigateTo({
					url: '../../index/index',
					
				});
			},
			getAZListItemUl(){
				getAZListItem({
					
				}).then((res)=>{
					this.typRange = res.data.bookSerachList;
					this.gradeList = res.data.gradeList;
					this.lexileList = res.data.lexileList;
					this.gradeRangeLeft = this.gradeList;
					this.gradeRangeRight = this.gradeList;
					this.getBookListUl()
				})
			},
			changeLevel(e){
				this.bookListDto = {};
				this.gradeRangeLeft = [];
				this.gradeRangeRight = [];
				this.gradeLeftValue = 0;
				this.gradeRightValue =0;
				this.typeItemIf = true
				if(this.bookType){
					 this.bookListDto.bookType =  this.bookType
				}
				this.chooseLevel = e;
				if(e == 0){
					this.levelScope = 'Grade Range';
					this.gradeRangeLeft = this.gradeList;
					this.gradeRangeRight = this.gradeList;
					this.bookListDto.type = 'ETS_LEVEL';
				}else if(e == 1){
					this.levelScope = 'Lexile Range'
					this.gradeRangeLeft = this.lexileList;
					this.gradeRangeRight = this.lexileList;
					this.bookListDto.type = 'LEXILE_RANGE';
				}else if(e == 2){
					this.bookListDto.type = 'Learning A-Z'; 
				}
				this.getBookListUl()
			},
			 changeType(e) {
				 this.bookListDto.bookType = e;
				 this.bookType = e;
				 this.getBookListUl()
			},
			changeRangeLeft(e){
				this.bookListDto.typeStart = e;
				let data = this.gradeRangeLeft
				this.gradeRangeRight = data.slice(e);
				this.getBookListUl()
			},
			changeRangeRight(e){
				this.bookListDto.typeEnd = e;
				this.getBookListUl()
			},
			clearList(){
				this.bookListDto = {};
				this.gradeRangeLeft = [];
				this.gradeRangeRight = [];
				this.gradeLeftValue = 0;
				this.gradeRightValue =0;
				this.value = -1;
				this.typeValue = 0;
				this.bookTypeTxt = '';
				this.typeItemIf = false
			},
			getBookListUl(){
				console.log("搜索条件",this.bookListDto)
				getBookList(this.bookListDto).then((res)=>{
					console.log("搜索结果",res)
					this.bookList = res.data
				})
				
			},
			getBookListUlTxt(){
				getBookList({
					'bookName':this.bookTypeTxt
				}).then((res)=>{
					console.log("搜索结果111",res)
					this.bookList = res.data
				})
			},
			jumpBook(id){
				uni.setStorageSync('bookId',id);
				uni.navigateTo({
					url: '../index'
				});
			},
			CurrentTap(item,index){
				console.log("分级",item)
				this.bookListDto.bookLevel = item.id;
				this.getBookListUl()
				if(index < 18 && index > 8){
					this.swiperCurrent = index - 8
				}else if(index < 9){
					this.swiperCurrent = 0
				}else{
					this.swiperCurrent = 9
				}
				this.tableList.map((itm,idx)=>{
					itm.style = false
				})
				item.style = true;
				this.currentStyle = item.color
			}
		}
	}
</script>

<style lang="scss">

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
			height: 20%;
			.green_back{
				position: absolute;
				left: 2%;
				top: 50%;
				margin-top: -20rpx;
				z-index: 999;
				.green_back_img{
					width: 32rpx;
					height: 32rpx;
				}
			}
			.headTips{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(0deg, #B0F8D7 0%, #FBFFFD 100%);
				.levelTips{
					position: absolute;
					left: 10%;
					top: 50%;
					margin-top: -24rpx;
					width: 100rpx;
					height: 30rpx;
					.levelTipsName{
						width: 100%;
						height: 25rpx;
						line-height: 25rpx;
						font-size: 18rpx;
					}
					.levelTipsSelect{
						width: 100%;
						height: 30rpx;
						background: #FFFFFF;
						border-radius: 5rpx;
						::v-deep .uni-select {
						  border: none !important;
						  outline: none !important;
						  line-height: 30rpx;
						  height: 30rpx;
						}
					}
				}
				.levelTips1{
					position: absolute;
					left: 25%;
					top: 50%;
					margin-top: -24rpx;
					width: 100rpx;
					height: 30rpx;
					.levelTipsName{
						width: 100%;
						height: 25rpx;
						line-height: 25rpx;
						font-size: 18rpx;
					}
					.levelTipsSelect{
						width: 170%;
						height: 30rpx;
						background: #FFFFFF;
						border-radius: 5rpx;
						::v-deep .uni-select {
						  border: none !important;
						  outline: none !important;
						    line-height: 30rpx;
							height: 30rpx;
						}
						::v-deep .uni-select__selector-item{
							font-size: 10rpx;
						}
					}
				}
				.chooseBook{
					position: absolute;
					left: 49%;
					top: 50%;
					width: 50rpx;
					height: 30rpx;
					color: #3cbc9b;
					font-size: 16rpx;
					text-align: center;
					line-height: 30rpx;
					text-decoration: underline;
					font-weight: 500;
				}
				.chooseTxt{
					position: absolute;
					right: 4%;
					top: 50%;
					width: 130rpx;
					height: 30rpx;
					display: flex;
					box-shadow: 0 4rpx 6rpx 0 rgba(89, 89, 89, 0.2000);
					.txt_input{
						width: 80%;
						height: 100%;
						padding-left: 10rpx;
						background: #F7F7FB;
						// box-shadow: 0 4rpx 6rpx 0 rgba(89, 89, 89, 0.2000);
						border-top-left-radius: 5rpx;
						border-bottom-left-radius: 5rpx;
						color: #666666;
						line-height: 30rpx;
						font-size: 14rpx;
					}
					.txtBtn{
						width: 20%;
						height: 100%;
						background: #F7F7FB;
						border-top-right-radius: 5rpx;
						border-bottom-right-radius: 5rpx;
						.txtbtnImg{
							width: 20rpx;
							height: 20rpx;
							margin: 5rpx auto;
							border-top-right-radius: 5rpx;
							border-bottom-right-radius: 5rpx;
						}
					}
				}
			}
		}
		.bodyBox{
			position: absolute;
			left: 0;
			top: 20%;
			width: 100%;
			height: 80%;
			overflow: auto;
			background: linear-gradient(0deg, #B0F8D7 0%, #FBFFFD 100%);
			.type{
				width: 100%;
				height: 50rpx;
				background: #A8C9BA;
				.type_item1{
					display: flex;
					width: 90%;
					height: 100%;
					line-height: 50rpx;
					margin-left: 10%;
					align-items: center;
					.select1,.select2{
						width: 100rpx;
						// color: #FFFFFF;
						background: #FFFFFF;
						margin: 0 10rpx;
						border-radius: 5rpx;
						::v-deep .uni-select__selector-item{
							font-size: 12rpx;
						}
					}
				
				}
				.swiper{
				width: 100%;
				height: 50rpx;
				// background: #FFFFFF;
				.swiper-item{
					width: 50rpx;
					height: 50rpx;
					// background: red;
					.swiper-item_img{
						width: 27rpx;
						height: 35rpx;
					}
					.swiper-item_imgs{
						width: 30rpx;
						height: 40rpx;
					}
				}
			}
			}
			.library_box{
				margin-left: 5%;
				width: 90%;
				overflow: auto;
				padding-left: 10rpx;
				padding-bottom: 60rpx;
				display: flex;
				justify-content: flex-start;
				// flex-direction: row;
				flex-wrap: wrap;
				.library_item{
					margin-left: 13rpx;
					margin-top: 20rpx;
					width: 98rpx;
					// height: 160rpx;
					background: #FFFFFF;
					border: 1rpx #FFFFFF solid;
					border-radius: 5rpx;
					box-shadow: 0px 8px 10px 0px rgba(26,64,48,0.31);
					.library_book{
						position: relative;
						width: 96rpx;
						height: 96rpx;
						background: #FFFFFF;
						border-radius: 10rpx;
						.library_bookImg{
							
						}
						.book_img{
							width: 96rpx;
							height: 96rpx;
							border-radius: 5rpx;
							overflow: hidden;
						}
						.book_tip{
							position: absolute;
							width: 29rpx;
							height: 18rpx;
							right: -1rpx;
							bottom: -1rpx;
							z-index: 1;
						}
						.book_state{
							position: absolute;
							width: 100%;
							height: 20rpx;
							left: 0;
							bottom: 0;
							border-bottom-right-radius: 8rpx;
							border-bottom-left-radius: 8rpx;
							color: #FFFFFF;
							padding-left: 5rpx;
							line-height: 20rpx;
						}
					}
					.book_level_Txt{
						width: 100%;
						height: 20rpx;
						line-height: 20rpx;
						display: flex;
						.book_level{
							margin: 2rpx;
							width: 16rpx;
							height: 16rpx;
							line-height: 16rpx;
							color: #FFFFFF;
							text-align: center;
						}
					}
					.book_name{
						margin: 4rpx 0;
						width: 100%;
						height: 18rpx;
						line-height: 10rpx;
						text-align: center;
						font-weight: bold;
						font-size: 11rpx;
					}
					.book_name1{
						margin: 4rpx 0;
						width: 100%;
						height: 18rpx;
						line-height: 18rpx;
						text-align: center;
						font-weight: bold;
						font-size: 11rpx;
					}
					.bookType{
						width: 100%;
						height: 20rpx;
						display: flex;
						// background: #3cbc9b;
						.bookType1{
							width: 50%;
							height: 100%;
							padding: 0 2rpx;
							line-height: 10rpx;
							font-size: 6rpx;
							border-right: 1rpx #666666 dotted;
							text-align: center;
							word-break: break-all;
						}
						.bookType2{
							width: 48%;
							height: 100%;
							line-height: 10rpx;
							font-size: 8px;
							text-align: center;
							word-break: break-all;
						}
					}
					// .book_name{
					// 	margin-top: 8rpx;
					// 	width: 100%;
					// 	height: 20rpx;
					// 	text-align: center;
					// 	line-height: 10rpx;
					// }
				}
				
			}
		}
		
}
</style>
