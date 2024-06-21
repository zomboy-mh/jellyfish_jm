<template>
	<view class="content">
		<view class="green_back1 display-flex" @tap="jump()">
			<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
		</view>
		<image class="bgview1" :src="imageUrl + 'book_guide_bg .png'" mode=""></image>
		<view class="body">
			<image class="body_bg" :src="imageUrl + 'guide_center.png'" mode=""></image>
			<view class="book_left">
				<view class="left_tips">
					<view >主题</view>
					<view >{{book.bookDepartment}}</view>
				</view>
				<view class="left_tips margin-top-5">
					<view >单词数</view>
					<view >{{book.bookWordCount}}</view>
				</view>
				<view class="left_tips margin-top-5">
					<view >时间</view>
					<view >{{book.bookReadingTimes}}</view>
				</view>
			</view>
			<view class="book_cover">
				<image class="book_cover_img" :src="formalUrl + book.bookLogo" mode=""></image>
				<view class="font-12">1234万人完成阅读</view>
				<view class="font-12">作品排行榜</view>
			</view>
			<view class="book_name">
				<view class="book_name_top">{{book.bookName}}</view>
				<view class="book_name_content">{{book.bookAuthorEn}}</view>
				<!-- <view class="book_name_bottom">Illustrated by Nora Vouta</view> -->
			</view>
			<view class="book_name_translate">
				<view class="book_name_top">{{book.bookName}}</view>
				<view class="book_name_content">{{book.bookAuthorCn}}</view>
				<!-- <view class="book_name_bottom">插画师：Nora Vouta</view> -->
			</view>
			<view class="eargrind" >
				<image v-if="!moerduo" @tap="addToMoerduoListUl" class="wh" :src="imageUrl + 'raz_moerduo_n.png'" mode=""></image>
				<image v-if="moerduo" @tap="deleteMoerduoItemUl" class="wh" :src="imageUrl + 'raz_moerduo_y.png'" mode=""></image>
			</view>
		</view>
		<view class="book_tips">
			<image v-if="book.haveWordPractice" class="guide_tips" :src="imageUrl + 'guide_tips1.png'" mode="aspectFit" @tap="jumpWord()"></image>
			<image class="guide_tips" :src="imageUrl + 'guide_tips2.png'" mode="aspectFit" @tap="jumpHear()"></image>
			<image class="guide_tips" :src="imageUrl + 'guide_tips3.png'" mode="aspectFit" @tap="jumpRead()"></image>
			<image v-if="book.haveQuiz" class="guide_tips" :src="imageUrl + 'guide_tips4.png'" mode="aspectFit"@tap="jumpQuiz()"></image>
		</view>
		<view class="body_tips">
			<image class="guide_baby" :src="imageUrl + 'guide_baby.png'" mode="" @tap="downLoad" ></image>
		</view>
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../config/index.js'
	import {getBookDetail,addToMoerduoList,deleteMoerduoItem} from '../../api/index.js'
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				bookId:0,
				book:{
					bookLogo:''
				},
				moerduo:true,
				bookListDto:{}
			}
		},
		onLoad() {
			this.bookListDto.bookReadType = uni.getStorageSync('bookReadType');
			this.getBookDetailUl()
		},
		methods: {
			getBookDetailUl(){
				this.bookId = uni.getStorageSync('bookId')
				getBookDetail({
					'bookId':this.bookId
				}).then((res)=>{
					this.book = res.data;
					this.bookName = res.data.bookName.split(" ");
					this.moerduo = res.data.addMoerduo;
					this.downLoadUrl = res.data.bookPdfTeachingPlan
					console.log("书本详情",res)
				})
			},
			downLoad(){
				uni.downloadFile({
					// url: this.formalUrl + this.downLoadUrl, //仅为示例，并非真实的资源
					url: 'https://lbzyk.read61.cn/read61v3_rsc/RDMST_BookEntity/teachingplan/d9d6f002b3f34cef9a570e2e4f743553.pdf', //仅为示例，并非真实的资源
					success: (res) => {
						if (res.statusCode === 200) {
								console.log('下载成功',res);
							 uni.saveFile({
							      tempFilePath: res.tempFilePath,
							      success: function (res) {
							        uni.openDocument({
							          filePath: res.savedFilePath
							        });                
									console.log('下载成功11',res);
							      }
							    });
							
						}
					}
				});
			},
			addToMoerduoListUl(){
				addToMoerduoList({
					'bookId':this.bookId,
					'type':this.bookListDto.bookReadType
				}).then((res)=>{
					this.moerduo = true
					console.log("添加成功",res)
				})
			},
			deleteMoerduoItemUl(){
				deleteMoerduoItem({
					'bookId':this.bookId,
					'type':this.bookListDto.bookReadType
				}).then((res)=>{
					this.moerduo = false
					console.log("删除成功",res)
				})
			},
			jump(){
				uni.navigateTo({
					url: '../index/index'
				});
			},
			jumpHear(){
				uni.navigateTo({
					url: 'pictureHear'
				});
			},
			jumpWord(){
				uni.navigateTo({
					url: 'learnWords'
				});
			},
			jumpRead(){
				uni.navigateTo({
					url: 'pictureRead'
				});
			},
			jumpQuiz(){
				uni.navigateTo({
					url: 'libraryRush'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		height: 100%;
		position: fixed;
		.green_back1{
			position: absolute;
			left: 2%;
			top: 2%;
			z-index: 999;
			.green_back_img{
				width: 40rpx;
				height: 40rpx;
			}
		}
		.bgview1{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
		}
		.body{
			position: absolute;
			left: 50%;
			top: 50%;
			width: 380rpx;
			height:266rpx;
			margin-left: -190rpx;
			margin-top: -160rpx;
			.body_bg{
				width: 380rpx;
				height:240rpx;
			}
			.book_left{
				width: 35rpx;
				height: 95rpx;
				
				position: absolute;
				left:10rpx;
				top: 43%;
				.left_tips{
					width: 35rpx;
					height: 30rpx;
					text-align: center;
					line-height: 13rpx;
					font-size:9rpx
				}
			}
			.book_cover{
				position: absolute;
				left: 23%;
				top: 28%;
				.book_cover_img{
					width: 80rpx;
					height: 80rpx;
					border-radius: 5rpx;
				}
				
			}
			.book_name{
				position: absolute;
				right: 13%;
				top: 32%;
				text-align: center;
				.book_name_top{
					width: 140rpx;
					height: 15rpx;
					line-height: 15rpx;
					font-size: 14rpx;
					font-weight: bold;
				}
				.book_name_content{
					margin-top: 6rpx;
					width: 140rpx;
					height: 15rpx;
					line-height: 15rpx;
					font-size: 9rpx;
					color: #666666;
					white-space: pre-wrap;
				}
				.book_name_bottom{
					width: 140rpx;
					height: 30rpx;
					line-height: 15rpx;
					font-size: 9rpx;
					color: #666666;
				}
			}
			.book_name_translate{
				position: absolute;
				right: 13%;
				top: 55%;
				text-align: center;
				.book_name_top{
					width: 140rpx;
					height: 15rpx;
					line-height: 15rpx;
					font-size: 14rpx;
					color: #362205;
					font-weight: bold;
				}
				.book_name_content{
					margin-top: 6rpx;
					width: 140rpx;
					height: 15rpx;
					line-height: 15rpx;
					font-size: 9rpx;
					color: #666666;
					white-space: pre-wrap;
				}
				.book_name_bottom{
					width: 140rpx;
					height: 30rpx;
					line-height: 15rpx;
					font-size: 9rpx;
					color: #666666;
				}
			}
			.eargrind{
				position: absolute;
				top: 60rpx;
				right: 20rpx;
				width: 30rpx;
				height: 60rpx;
				transform: rotateY(180deg);
				z-index: 10;
			}
		}
		.book_tips{
			display: flex;
			justify-content: space-around;
			position: absolute;
			left: 50%;
			bottom: 4%;
			width: 380rpx;
			height: 80rpx;
			margin-left: -190rpx;
			.guide_tips{
				width: 65rpx;
				height:65rpx
			}
		}
		.body_tips{
			position: absolute;
			right: 3%;
			top:50%;
			margin-top: -132rpx;
			.guide_baby{
				width: 200rpx;
				height: 300rpx
			}
		}
	}
</style>
