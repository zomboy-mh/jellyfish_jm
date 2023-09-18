<template>
	<view class="content">
		<view class="head">
			<view class="green_back display-flex" @tap="jump()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="library_title">
				<!-- <view class="library_title_txt  font-16">{{bookName}}</view> -->
				<view class="type_x">
					<view class="levelTipsSelect">
						<uni-data-select
						      v-model="value"
						      :localdata="range"
						      @change="changeLevel"
						    ></uni-data-select>
					</view>
					<view class="levelTipsSelect">
						<uni-data-select
						      v-model="typeValue"
						      :localdata="typRange"
						      @change="changeType"
						    ></uni-data-select>
					</view>
					<!-- <view class="chooseBook" @tap="getBookListUl">确认</view> -->
				</view>
			</view>
			
		</view>
		
		<view class="bodyBox">
				<view class="bookBox" >
					<view class="bookItem" v-for="(item,index) in bookList" :key="index">
						<image class="bookLogo" :src="formalUrl + item.etsImage"mode="aspectFit" @tap="jumpBook(item.etsId)"></image>
						<view class="eargrind" >
							<image v-if="!item.addMoerduo" @tap="addToMoerduoListUl(item.etsId,index)" class="wh" :src="imageUrl + 'raz_moerduo_n.png'" mode=""></image>
							<image v-if="item.addMoerduo" @tap="deleteMoerduoItemUl(item.etsId,index)" class="wh" :src="imageUrl + 'raz_moerduo_y.png'" mode=""></image>
						</view>
					</view>	
					
				</view>
		</view>
		
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getBookList,getJournalItem,getExtensiveList,addToMoerduoList,deleteMoerduoItem} from '../../../api/index.js'
	export default {
		components: {
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				bookName:'章节阅读',
				bookList:[],
				bookListDto:{},
				value: 0,
				typeValue:0,
				range: [],
				typRange: [],
				three1List:[],
				three2List:[],
				etsLevel:'',
				etsType:'',
				moerduo:true
			}
		},
		onLoad() {
			this.bookListDto.bookReadType = uni.getStorageSync('bookReadType');
			if(this.bookListDto.bookReadType == 5){
				this.bookName = '章节阅读'
			}else if(this.bookListDto.bookReadType == 6){
				this.bookName = '期刊阅读'
			}
			this.getJournalItemUl();
			this.getBookListUl()
		},
		methods: {
			
			jump() {
				uni.reLaunch({
						url: '../../index/index'
				})
			},
			getJournalItemUl(){
				getJournalItem({}).then((res)=>{
					this.range = res.data.twoList;
					this.three1List = res.data.three1List;
					this.three2List = res.data.three2List;
					console.log("获取字典",res)
				})
			},
			changeLevel(e){
				this.etsLevel = e
				if(e=='News_Box'){
					this.typRange = this.three1List
				}else if(e=='Reading_Room'){
					this.typRange = this.three2List
				}
			},
			changeType(e){
				this.etsType = e;
				
			},
			getBookListUl(){
				getExtensiveList({
					'etsClassify':this.bookListDto.bookReadType,
					'etsLevel': this.etsLevel,
					'etsType':this.etsType
				}).then((res)=>{
					this.bookList = res.data
					console.log("列表",res)
				})
			},
			jumpBook(id){
				uni.setStorageSync('etsId',id);
				uni.reLaunch({
					url: 'index'
				})
			},
			addToMoerduoListUl(id,index){
				addToMoerduoList({
					'bookId':id,
					'type':this.bookListDto.bookReadType
				}).then((res)=>{
					this.bookList[index].addMoerduo = true
					console.log("添加成功",res)
				})
			},
			deleteMoerduoItemUl(id,index){
				deleteMoerduoItem({
					'bookId':id,
					'type':this.bookListDto.bookReadType
				}).then((res)=>{
					this.bookList[index].addMoerduo = false
					console.log("删除成功",res)
				})
			},
			
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
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 70rpx;
				z-index: 100;
				.green_back{
					position: absolute;
					left: 3%;
					top: 50%;
					margin-top: -12rpx;
					z-index: 999;
					.green_back_img{
						width: 34rpx;
						height: 34rpx;
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
						height: 70rpx;
						background: linear-gradient(0deg, #B0F8D7 0%, #FBFFFD 100%);
						// box-shadow: 0 4rpx 6rpx 0 rgba(89, 89, 89, 0.2000);
						.library_title_txt {
							width: 100%;
							height: 50rpx;
							line-height: 50rpx;
							text-align: center;
							font-family: Poppins;
							font-weight: 600;
						}
					}
			}
			.type_x{
				position: relative;
				left: 45rpx;
				top: 20rpx;
				width: 100%;
				height: 40rpx;
				// background: #000000;
				// opacity: 0.6;
				display: flex;
				align-items: center;
				z-index: 50;
				.type_item{
					height: 24rpx;
					line-height: 24rpx;
					background: #56BCA0;
					color: #FFFFFF;
					font-size: 15rpx;
					text-align: center;
					border-radius: 12rpx;
					padding: 0 18rpx;
					margin-left: 20rpx;
				}
				.levelTipsSelect{
					width: 150rpx;
					height: 32rpx;
					background: #FFFFFF;
					border-radius: 5rpx;
					margin-left: 20rpx;
					box-shadow: 0 4rpx 6rpx 0 rgba(89, 89, 89, 0.2000);
					::v-deep .uni-select {
					  border: none !important;
					  outline: none !important;
					  line-height: 32rpx;
					  height: 32rpx;
					}
				}
				.chooseBook{
					width: 100rpx;
					height: 30rpx;
					background: #55aaff;
					margin-left: 25rpx;
					color: #FFFFFF;
					font-size: 16rpx;
					text-align: center;
					line-height: 30rpx;
					border-radius: 8rpx;
				}
			}
			.bodyBox{
				display: flex;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(0deg, #B0F8D7 0%, #FBFFFD 100%);
				z-index: 1;
				.bookBox{
					width: 82%;
					margin-left: 5%;
					height: 76%;
					margin-top: 12%;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					overflow: auto;
					.bookItem{
						width: 98rpx;
						height: 140rpx;
						margin-bottom: 30rpx;
						margin-right: 20rpx;
						position: relative;
						background: #fff;
						border: 5rpx #FFFFFF solid;
						box-shadow: 0 4rpx 6rpx 0 rgba(89, 89, 89, 0.2000);
						.bookLogo{
							width: 100%;
							height: 100%;
						}
						.eargrind{
							position: absolute;
							top: 30rpx;
							right: 0;
							width: 25rpx;
							height: 55rpx;
							z-index: 10;
						}
					}
				}
			}
			
		}
</style>
