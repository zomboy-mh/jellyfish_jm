<template>
	<view class="content">
		<view class="head">
			<view class="green_back display-flex" @tap="jump()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="library_title" v-if="this.bookName == '启蒙绘本'">
				<!-- <view class="library_title_txt  font-16">{{bookName}}</view> -->
				<view class="type_x" v-if="this.bookName == '启蒙绘本'">
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
			<view class="library_title1" v-if="this.bookName == '自然拼读'">
				<view class="library_title_txt  font-16">{{bookName}}</view>
			</view>
		</view>
		
		<view class="bodyBox1" v-if="this.bookName == '启蒙绘本'">
				<view class="bookBox" >
					<view class="bookItem" v-for="(item,index) in bookList" :key="index">
						<image class="bookLogo" :src="formalUrl + item.bookLogo"mode="aspectFit" @tap="jumpBook1(item.bookId)"></image>
						<view class="bookEslplevel">
							{{item.bookEslplevel}}
						</view>
						<view class="bookName">
							{{item.bookName}}
						</view>
						<view class="eargrind" >
							<image v-if="!item.addMoerduo" @tap="addToMoerduoListUl(item.etsId,index)" class="wh" :src="imageUrl + 'raz_moerduo_n.png'" mode=""></image>
							<image v-if="item.addMoerduo" @tap="deleteMoerduoItemUl(item.etsId,index)" class="wh" :src="imageUrl + 'raz_moerduo_y.png'" mode=""></image>
						</view>
					</view>	
					
				</view>
		</view>
		
		<view class="tabList" v-if="this.bookName == '自然拼读'">
			<view class="tabItem"  :style="{'border-color':item.color_txt,'background':item.color_bg}" v-for="(item,index) in typeList" :key="index" @tap="chooseType(item)">{{item.text}}</view>
		</view>
		<view class="bodyBox" v-if="this.bookName == '自然拼读'">
			<view class="bookName" :style="{'background':currentStyle}">{{typeName}}</view>
			<view class="bookBox" >
				<view class="bookItem"  v-for="(item,index) in bookList" :key="index" @tap="jumpBook(item)">
					<image class="bookLogo" :src="formalUrl + item.phonicsLogo" mode=""></image>
				</view>	
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getBookList,getItemByType,getPhonicsList} from '../../../api/index.js'
	export default {
		components: {
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				bookName:'自然拼读',
				bookList1:[],
				bookList:[],
				bookListDto:{},
				typeList:[
					{
						
						color:'#f71312',
						background:'#ffe5e4'
					},
					{
						
						color:'#f59a0e',
						background:'#fff1da'
					},
					{
						
						color:'#eee106',
						background:'#fffee0'
					},
					{
						
						color:'#576dff',
						background:'#e3e7ff'
					},
					{
						
						color:'#9102db',
						background:'#f6e3ff'
					}
					
				],
				currentStyle:'#f71312',
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
				moerduo:true,
				typeName:'',
				type:''
			}
		},
		
		onLoad() {
			this.bookListDto.bookReadType = uni.getStorageSync('bookReadType');
			if(this.bookListDto.bookReadType == 2){
				this.bookName = '自然拼读'
				// this.type = 'PHONICS'
				this.getItemByTypeUl()
			}else if(this.bookListDto.bookReadType == 3){
				this.bookName = '启蒙绘本'
				this.type = 'BOOK_DEPTCATAGORY'
			}
			// this.getBookListUl()
			
		},
		methods: {
			getBookListUl(){
				getBookList(this.bookListDto).then((res)=>{
					this.bookList = res.data;
					console.log('111',this.bookList)
					this.chooseType(this.typeList[0])
				})
			},
			chooseType(item){
				this.typeName = item.text;
				this.typeList.map((itm,inx)=>{
					itm.style = false;
					itm.color_bg = '#eeeeee';
					itm.color_txt = '#eeeeee';
				})
				item.style = true;
				if(item.style){
					this.currentStyle = item.color;
					item.color_bg = item.background;
					item.color_txt = item.color;
				}
				this.getPhonicsListUl(item.value)
			},
			getPhonicsListUl(type){
				getPhonicsList({
					"phonicsType": type
				}).then((res)=>{
					console.log("列表",res)
					this.bookList = res.data;
				})
			},
			getItemByTypeUl(){
				getItemByType({
					'type':'PHONICS'
				}).then((res)=>{
					
					res.data.map((item,index)=>{
						this.typeList.map((itm,inx)=>{
							if(index % 5 === inx){
								item.color = itm.color
								item.background = itm.background
							}
						})
					})
					this.typeList = res.data
					this.chooseType(this.typeList[0])
					console.log("ss",this.typeList)
				})
			},
			jump() {
				uni.reLaunch({
						url: '../../index/index'
				})
			},
			jumpBook1(id){
				console.log(id)
				uni.setStorageSync('bookId',id);
				uni.reLaunch({
					url: '../index'
				})
			},
			jumpBook(item){
				uni.setStorageSync('phonicsId',item.phonicsId);
				uni.setStorageSync('currentStyle',this.currentStyle);
				
				uni.reLaunch({
						url: 'index'
				})
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
						height: 75rpx;
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
				.library_title1{
					position: fixed;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;
					z-index: 50;
					width: 100%;
					height: 50rpx;
					background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/mechanism_ngt_g.png');
					background-repeat: no-repeat;
					background-size: 100% 100%;
					
					.library_title_txt {
						width: 100%;
						height: 50rpx;
						line-height: 50rpx;
						text-align: center;
						color: #FFFFFF;
					}
				}
			}
			
			.type_x{
				position: relative;
				left: 50rpx;
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
			.bodyBox1{
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
						width: 120rpx;
						height: 170rpx;
						margin-bottom: 30rpx;
						margin-right: 20rpx;
						position: relative;
						background: #fff;
						border: 5rpx #FFFFFF solid;
						border-radius: 5rpx;
						box-shadow: 0px 0rpx 1rpx 1rpx #48cfb4;
						.bookLogo{
							width: 100%;
							height: 100rpx;
							
						}
						.bookEslplevel{
							width: 110rpx;
							height: 20rpx;
							line-height: 20rpx;
							margin-top: 8rpx;
							margin-left: 10rpx;
							color: #969696;
							font-size: 10rpx;
						}
						.bookName{
							text-align: center;
							width: 100%;
							height: 20rpx;
							margin-top: 8rpx;
							line-height: 20rpx;
							font-size: 18rpx;
						}
						.eargrind{
							position: absolute;
							top: 60rpx;
							right: 0;
							width: 30rpx;
							height: 60rpx;
							z-index: 10;
						}
					}
				}
			}
			
			.tabList{
				position: absolute;
				right: 0;
				top: 50rpx;
				width: 130rpx;
				height: 88%;
				background: #FFFFFF;
				z-index: 100;
				overflow: auto;
				overflow-x: hidden;
				.tabItem{
					width: 100rpx;
					height: 40rpx;
					padding: 5rpx;
					text-align: center;
					font-size: 13rpx;
					margin-top: 20rpx;
					margin-left: 20rpx;
					border-radius:  10px 0px 0px  10px;
					display: flex;
					align-items: center;
					justify-content: center;
					border: 2px solid ;
					color: #7d7d7d;
				}
				.tabItemActive{
					border: 2px solid #F71311;
					background:#FFE4E4;;
					color: #F71311;
				}
				.tabItemActive_not{
					border: 2px solid #eeeeee;
					background:#eeeeee;;
					color: #666;
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
				.bookName{
					position: absolute;
					left: 0;
					top: 60rpx;
					height: 40rpx;
					padding-left: 4%;
					width: 96%;
					line-height: 40rpx;
					background: #ccc;
					color: #fff;
					z-index: 1;
				}
				.bookBox{
					width: 82%;
					margin-left: 5%;
					height: 76%;
					margin-top: 14%;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					overflow: auto;
					.bookItem{
						width: 80rpx;
						height: 60rpx;
						margin-bottom: 30rpx;
						margin-right: 20rpx;
						.bookLogo{
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
</style>
