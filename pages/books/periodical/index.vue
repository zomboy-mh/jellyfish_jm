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
			<view class="bookLeft">
				<image class="bookImg" :src="formalUrl + etsImage" mode="aspectFit"></image>
				<view class="bookImgAudio">
					<free-audio startPic='https://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/playRead1_g.png' endPic='https://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/stopRead1_g.png' audioId='audio1' :url="etsAudio"></free-audio>
				</view>
				
			</view>
			<view class="bookRight">
				<view class="bookText" v-html="etsContent"></view>
			</view>
			
		</view>
		<view class="directory" v-show="directory" @tap="directory = false">
			<image class="directoryImg" :src="imageUrl + 'chapter_directory.png'" mode=""></image>
			<view class="directoryTxt">目录</view>
		</view>
		<view class="directoryBox" v-show="!directory">
			<view class="directory_box1"></view>
			<view class="directory_active" @tap="directory = true">
				<image class="directoryImg" :src="imageUrl + 'chapter_directory.png'" mode=""></image>
				<view class="directoryTxt">目录</view>
			</view>
			<view class="directory_text">
				<view class="directory_item" :style="{'color':item.color}" v-for="(item,index) in directoryList" :key="index" @tap="selectDirectory(item,index)">{{item.txt}}</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getExtensiveDetail} from '../../../api/index.js'
	import freeAudio from '@/components/chengpeng-audio/free-audio.vue'
	export default {
		components: {
			freeAudio
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				bookName:'自然拼读',
				bookList:[],
				bookListDto:{},
				directoryList:[
					{
						txt:'1.North America'
					},
					{
						txt:'2.Their teacher'
					},
					{
						txt:'3.United States'
					},
				],
				etsId:0,
				etsImage:'',
				etsContent:'',
				etsAudio: '',
				directory:true,
				color:'',
				directoryIndex:0
			}
		},
		onLoad() {
			this.etsId = uni.getStorageSync('etsId');
			
		},
		created(){
			this.getBookListUl()
		},
		methods: {
			getBookListUl(){
				getExtensiveDetail({
					'etsId':this.etsId
				}).then((res)=>{
					this.bookName = res.data.etsTitle;
					this.etsImage = res.data.etsImage;
					this.etsContent = res.data.etsContent;
					setTimeout(()=>{
						this.etsAudio = this.formalUrl + res.data.etsAudio
						console.log("详情",this.etsAudio)
					},200)
					this.directoryList.map((item,index)=>{
						item.color = ''
					})
					this.selectDirectory(this.directoryList[0],0)
				})
			},
			jump() {
				uni.reLaunch({
					url: 'periodical'
				})
			},
			selectDirectory(item,index){
				
				this.directoryList.map((item,index)=>{
					item.color = '#000000'
				})
				this.directoryList[index].color = '#1EAB86'
				this.$forceUpdate()
			}
		}
	}
</script>

<style lang="scss" scoped>
		.content{
			width: 100%;
			height: 100%;
			.directory{
				position: absolute;
				right: 0;
				top: 70rpx;
				width: 48rpx;
				// height: 50rpx;
				padding-bottom: 5rpx;
				background: #FFFFFF;
				border-top-left-radius: 10rpx;
				border-bottom-left-radius: 10rpx;
				z-index: 100;
				.directoryImg{
					width: 25rpx;
					height: 30rpx;
					margin-left: 12rpx;
					margin-top: 10rpx;
				}
				.directoryTxt{
					width: 100%;
					height: 20rpx;
					line-height: 20rpx;
					margin-top: 5rpx;
					text-align: center;
				}
			}
			.directoryBox{
				
				.directory_box1{
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					background: #000000;
					opacity: 0.6;
					z-index: 100;
				}
				.directory_active{
					position: absolute;
					// right: 200rpx;
					top: 70rpx;
					width: 48rpx;
					// height: 50rpx;
					padding-bottom: 5rpx;
					background: #FFFFFF;
					border-top-left-radius: 10rpx;
					border-bottom-left-radius: 10rpx;
					animation: directoryShow 1s 1;
					animation-fill-mode:forwards;
					z-index: 100;
					.directoryImg{
						width: 25rpx;
						height: 30rpx;
						margin-left: 12rpx;
						margin-top: 10rpx;
					}
					.directoryTxt{
						width: 100%;
						height: 20rpx;
						line-height: 20rpx;
						margin-top: 5rpx;
						text-align: center;
					}
				}
				.directory_text{
					
					height: 100%;
					position: absolute;
					right: 0;
					top: 0;
					background: #FFFFFF;
					z-index: 100;
					animation: directoryShowWidth 1s 1;
					animation-fill-mode:forwards;
					padding-top: 10rpx;
					.directory_item{
						
						height: 20rpx;
						line-height: 20rpx;
						margin-left: 10rpx;
						margin-top: 10rpx;
						
						animation: directoryShowWidthTxt 1s 1;
						animation-fill-mode:forwards;
					}
				}
			}
			@keyframes directoryShow{
				0%{
					right: 0rpx;
					
				}
				100%{
					right: 200rpx;
				}
			}
			@keyframes directoryShowWidth{
				0%{
					width: 0rpx;
					
				}
				100%{
					width: 200rpx;
					
				}
			}
			@keyframes directoryShowWidthTxt{
				0%{
					width: 1000%;
					
				}
				100%{
					width: 100%;
				}
			}
			.head{
				display: flex;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 40rpx;
				z-index: 100;
				.green_back{
					position: absolute;
					left: 2%;
					top: 50%;
					margin-top: -15rpx;
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
						height: 40rpx;
						background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/mechanism_ngt_g.png');
						background-repeat: no-repeat;
						background-size: 100% 100%;
						.library_title_txt {
							width: 100%;
							height: 40rpx;
							line-height: 40rpx;
							text-align: center;
							color: #FFFFFF;
						}
				}
			}
			
			.bodyBox{
				display: flex;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/letter_bg.png');
				background-repeat: no-repeat;
				background-size: 100% 100%;
				z-index: 1;
				.bookLeft{
					width: 35%;
					height: 100%;
					border-right: 1px solid #ccc;
					.bookImg{
						width: 80%;
						// height: 50%;
						margin: 20% 10% 0 10%;
					}
					.bookImgAudio{
						width: 100%;
						margin-top: 20rpx
					}
				}
				.bookRight{
					width: 65%;
					height: 86%;
					margin-top: 40rpx;
					overflow: auto;
					.bookText{
						margin: 2% 5%;
						width: 90%;
						height: 96%;
						font-size: 16rpx;
					}
				}
				
			}
		}
</style>
