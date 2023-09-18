<template>
	<view class="content">
		<view class="head">
			<view class="green_back display-flex" @tap="jump()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="library_title">
				<view class="library_title_txt  font-16">{{bookName}}</view>
			</view>
		</view>
		
		<view class="bodyBox">
			<view class="earCard" >
				<image class="wh" :src="imageUrl + 'earCard.png'" mode=""></image>
				<view class="bookBox">
					<image class="bookImg" :src="formalUrl + earItemDetail.combinImage" mode="aspectFill"></image>
					<view class="bookTxt">
						<view class="bookTxtName">{{earItemDetail.bookName}}</view>
						<view class="bookData" >
							<view class="bookItem" v-for="(item,index) in earItemDetail.content" :key="index">
									{{item}}
							</view>
						</view>
					</view>
				</view>
				<view class="earBtn">
					<image class="earBtnItem" @tap="errVideoPlay(addindex)" :src="imageUrl + 'earBack.png'" mode=""></image>
					<image v-if="videoPlayIf" @tap="videoPlay" class="earBtnItemCenter" :src="imageUrl + 'earPlay.png'" mode=""></image>
					<image v-if="!videoPlayIf" @tap="videoEnd()" class="earBtnItemCenter" :src="imageUrl + 'h5_ebook_play.png'" mode=""></image>
					<image class="earBtnItem" @tap="addVideoPlay(addindex)" :src="imageUrl + 'earNext.png'" mode=""></image>
				</view>
			</view>
			<view class="earList">
				<image class="earListImg" :src="imageUrl + 'earList.png'" mode=""></image>
				<view class="earItemList">
					<view class="earItem" :class="item.videoIf?'cl-white':'cl-black4'"  v-for="(item,index) in earList" :key="index" @tap="earDetail(index)">
					{{index + 1}}. {{item.bookName}}
					<view class="videoBox" v-show="!videoPlayIf && item.videoIf">
						<view class="videoUp1"></view>
						<view class="videoUp2"></view>
						<view class="videoUp3"></view>
						<view class="videoUp4"></view>
					</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getMoerduoList,getMoerduoDetail} from '../../../api/index.js'
	import {Audio,voiceStart} from "../../../utils/utils.js"
	export default {
		components: {
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				bookName:'磨磨耳朵',
				bookList:[],
				bookListDto:{},
				earList:[],
				earIndex:0,
				earItemDetail:{
					combinImage:''
				},
				videoPlayIf:true,
				videoUrl:'',
				addindex:0
				
			}
		},
		onLoad() {
			this.bookListDto.bookReadType = uni.getStorageSync('bookReadType');
			this.getBookListUl()
		},
		methods: {
			getBookListUl(){
				getMoerduoList().then((res)=>{
					this.earList = res.data;
					this.earList.map((item,index)=>{
						item.videoIf = false
					})
					
					this.earDetail(0);
					
					console.log("磨耳朵列表",res)
				})
			},
			jump() {
				Audio.stop();
				uni.reLaunch({
						url: '../../index/index'
				})
			},
			earDetail(index){
				
				this.earList.map((item,index)=>{
					item.videoIf = false
				})
				console.log(this.earList[index])
				this.earList[index].videoIf = true;
				
				getMoerduoDetail({
					  "bookId": this.earList[index].bookId,
					  "type": this.earList[index].type
				}).then((res)=>{
					console.log("磨耳朵详情",res)
					this.earItemDetail = res.data;
					this.videoUrl = this.earItemDetail.combinFile
				})
			},
			videoPlay(){
				this.videoPlayIf = false;
				voiceStart(this.formalUrl + this.videoUrl).then(() => {
					this.videoPlayIf = true;
				})
			},
			errVideoPlay(index){
				this.addindex = index;
				if(this.addindex==0){
					this.addindex = this.earList.length - 1
				}else{
					this.addindex = this.addindex - 1;
				}
				this.earDetail(this.addindex)
			},
			addVideoPlay(index){
				this.addindex = index;
				if(this.addindex==this.earList.length - 1){
					this.addindex = 0
				}else{
					this.addindex = this.addindex + 1;
				}
				this.earDetail(this.addindex)
			},
			videoEnd(){
				this.videoPlayIf = true;
				Audio.stop();
			}
		}
	}
</script>

<style lang="scss" scoped>
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
				position: relative;
				left: 0;
				top: 0;
				width: 100%;
				height: 50rpx;
				z-index: 100;
				.green_back{
					position: absolute;
					left: 3%;
					top: 50%;
					margin-top: -16rpx;
					z-index: 999;
					.green_back_img{
						width: 30rpx;
						height: 30rpx;
					}
				}
				.library_title {
						position: fixed;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
						z-index: 50;
						width: 100%;
						height: 50rpx;
						// background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/mechanism_ngt_g.png');
						background: #169F7A;
						// background-repeat: no-repeat;
						// background-size: 100% 100%;
						.library_title_txt {
							width: 100%;
							height: 50rpx;
							line-height: 50rpx;
							text-align: center;
							color: #FFFFFF;
						}
					}
			}
			
			.bodyBox{
				display: flex;
				position: relative;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				// background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/letter_bg.png');
				background: #56BCA0;
				z-index: 1;
				.earCard{
					width: 360rpx;
					height: 240rpx;
					position: absolute;
					left: 10%;
					top: 50%;
					margin-top: -150rpx;
					.bookBox{
						position: absolute;
						left: 24rpx;
						top: 30rpx;
						width: 310rpx;
						height: 120rpx;
						display: flex;
						.bookImg{
							width: 70rpx;
							height: 100rpx;
							margin-left: 15rpx;
							margin-top: 10rpx;
							border: 2px solid #FFFFFF;
							border-radius: 5rpx;
						}
						.bookTxt{
							width: 178rpx;
							height: 100rpx;
							margin-left: 25rpx;
							margin-top: 10rpx;
							.bookTxtName{
								width: 150rpx;
								height: 20rpx;
								line-height: 20rpx;
								color: #FFFFFF;
								text-align: center;
								font-size: 25rpx;
							}
							.bookData{
								width: 150rpx;
								height: 60rpx;
								overflow: auto;
								margin-top: 10rpx;
								.bookItem{
									margin-top: 30rpx;
									width: 150rpx;
									height: 15rpx;
									line-height: 15rpx;
									color: #FFFFFF;
									text-align: center;
									font-size: 16rpx;
								}
							}
						}
					}
					.earBtn{
						position: absolute;
						left: 50%;
						bottom: 6%;
						margin-left: -90rpx;
						width: 180rpx;
						height: 60rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.earBtnItem{
							width: 26rpx;
							height: 26rpx;
						}
						.earBtnItemCenter{
							width: 66rpx;
							height: 66rpx;
						}
					}
				}
				.earList{
					width: 260rpx;
					height: 220rpx;
					position: absolute;
					right: 20rpx;
					top: 50%;
					margin-top: -150rpx;
					background: #067e53;
					border-radius: 10rpx;
					padding-top: 20rpx;
					
					.earListImg{
						position: absolute;
						left: 0;
						top: 50%;
						margin-top: -30rpx;
						margin-left: -30rpx;
						width: 60rpx;
						height: 60rpx;
						z-index: 11;
					}
					.earItemList{
						width: 100%;
						height: 100%;
						overflow-x: hidden;
						
						.earItem{
							width: 100%;
							height: 20rpx;
							padding-left: 40rpx;
							line-height: 20rpx;
							font-size: 16rpx;
							margin-bottom: 10rpx;
							display: flex;
						}
						.videoBox{
							width: 20rpx;
							height: 20rpx;
							display: flex;
							margin-left: 5rpx;
							transform: rotate(180deg);
							.videoUp1{
								width: 4rpx;
								
								border-radius: 2rpx;
								background: #73CFB6;
								margin-left: 1rpx;
								animation: videoUpShow1 2s infinite linear;
							}
							.videoUp2{
								width: 4rpx;
								height: 20rpx;
								border-radius: 2rpx;
								background: #73CFB6;
								margin-left: 1rpx;
								animation: videoUpShow2 2s infinite linear;
							}
							.videoUp3{
								width: 4rpx;
								height: 20rpx;
								border-radius: 2rpx;
								background: #73CFB6;
								margin-left: 1rpx;
								animation: videoUpShow3 2s infinite linear;
							}
							.videoUp4{
								width: 4rpx;
								height: 20rpx;
								border-radius: 2rpx;
								background: #73CFB6;
								margin-left: 1rpx;
								animation: videoUpShow4 2s infinite linear;
							}
							@keyframes videoUpShow1{
								0%{
									height: 6rpx;
								}
								50%{
									height: 20rpx;
								}
								100%{
									height: 6rpx;
								}
							}
							@keyframes videoUpShow2{
								0%{
									height: 15rpx;
								}
								50%{
									height: 20rpx;
								}
								100%{
									height: 15rpx;
								}
							}
							@keyframes videoUpShow3{
								0%{
									height: 10rpx;
								}
								50%{
									height: 20rpx;
								}
								100%{
									height: 10rpx;
								}
							}
							@keyframes videoUpShow4{
								0%{
									height: 6rpx;
								}
								50%{
									height: 20rpx;
								}
								100%{
									height: 6rpx;
								}
							}
						}
					}
					
				}
				
			}
		}
</style>
