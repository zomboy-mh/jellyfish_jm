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
		<view class="type_x">
			<view class="chooseBook" :class="item.show?'chooseBookshow':'chooseBookshowno'" @tap="getBookListUl(item.value,item)" v-for="(item,index) in typeList" :key="index">{{item.itemName}}</view>
		</view>
		<view class="bodyBox">
			<view class="bookBox" >
				<view class="bookItem" :style="{'background':'url'+'('+item.bg+')','background-repeat':'no-repeat','background-size':'100%'+'100%'}" v-for="(item,index) in bookList" :key="index">
					<image class="bookItemLeft" :src="imageUrl + 'playRead1_g.png'" mode=""  @tap="jumpBook(item.vidId)"></image>
					<image class="bookItemRight" :src="imageUrl + 'recordRead1_g.png'" mode=""></image>
					<view class="bookItemName">{{item.vidName}}</view>
				</view>	
			</view>
		</view>
		
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getMusicList,getVideoList,getItemByType} from '../../../api/index.js'
	export default {
		components: {
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				bookName:'电影院',
				bookList:[],
				bookListDto:{},
				typeList:[],
				backgrundList:[
					{
						bg:'http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/music1.png'
					},
					{
						bg:'http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/music2.png'
					},
					{
						bg:'http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/music3.png'
					},
					{
						bg:'http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/music4.png'
					},
					{
						bg:'http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/music5.png'
					},
					{
						bg:'http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/music6.png'
					},
				]
			}
		},
		onLoad() {
			
			this.getItemByTypeUl()
		},
		methods: {
			getItemByTypeUl(){
				getItemByType({
					 "type": "VIDEO_ATTR"
				}).then((res)=>{
					this.typeList = res.data;
					this.typeList.map((item,index)=>{
						item.show = false
					})
					this.getBookListUl();
					console.log("111",res)
				})
			},
			getBookListUl(data,item){
				console.log("111",data)
				this.typeList.map((item,index)=>{
					item.show = false
				})
				item.show = true
				getVideoList({
					 "pageIndex": 0,
					  "pageSize": 6,
					  "videoType": data
				}).then((res)=>{
					console.log("123",res)
					this.bookList = res.data.records;
					this.bookList.map((item,index)=>{
						this.backgrundList.map((itm,inx)=>{
							if(index % 5 === inx){
								item.bg = itm.bg
							}
						})
					})
				})
			},
			jump() {
				uni.reLaunch({
						url: '../../index/index'
				})
			},
			jumpBook(id){
				// uni.setStorageSync('vidId',id);
				uni.reLaunch({
						url: 'index?itm_id='+id
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
				height: 50rpx;
				z-index: 100;
				.green_back{
					position: absolute;
					left: 3%;
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
				left: 0;
				top: 49rpx;
				width: 100%;
				height: 40rpx;
				background: #666666;
				display: flex;
				align-items: center;
				justify-content: space-between;
				z-index: 50;
				overflow-x: scroll;
				white-space: nowrap;
				.chooseBook{
					width: 200rpx;
					padding: 0 20rpx;
					margin-left: 10rpx;
					height: 30rpx;
					background: #56BCA0;
					color: #FFFFFF;
					font-size: 16rpx;
					text-align: center;
					line-height: 30rpx;
					border-radius: 15rpx;
				}
				.chooseBookshow{
					background: #ff5500;
				}
				.chooseBookshowno{
					background: #56BCA0;
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
				
				.bookBox{
					width: 82%;
					height: 76%;
					margin-top: 13%;
					margin-left: 9%;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					overflow: auto;
					.bookItem{
						width: 160rpx;
						height: 100rpx;
						margin-bottom: 50rpx;
						margin-right: 20rpx;
						position: relative;
						// border: 5rpx #FFFFFF solid;
						// background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/music1.png');

						.bookLogo{
							width: 100%;
							height: 100%;
						}
						.bookItemLeft{
							position: absolute;
							bottom: -40rpx;
							left: 15%;
							width: 40rpx;
							height: 40rpx;
						}
						.bookItemRight{
							position: absolute;
							bottom: -40rpx;
							left: 55%;
							width: 40rpx;
							height: 40rpx;
						}
						.bookItemName{
							width: 100%;
							height: 20rpx;
							line-height: 20rpx;
							position: absolute;
							top: 50%;
							margin-top: -10rpx;
							text-align: center;
						}
					}
				}
			}
		}
</style>
