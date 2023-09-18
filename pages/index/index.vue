<template>
	<view class="content">
		<view class="user">
			<view class="user_head" @tap="getUserInfo">
				<image class="wh" style="border-radius: 23rpx;" :src="userImg" mode=""></image>
			</view>
			<!-- <view class="font-14 font-bold margin-top-10 margin-left-10" ></view> -->
		</view>
		<image class="bgview" :src="imageUrl + 'home_bg_'+month+'.png'" mode=""></image>
		<image class="razkids_tips" :src="imageUrl + 'razkids_tips.png'" mode=""></image>
		<view class="home_head">
			<view class="headTipsBox">
				<image class="headTips" style="width: 44rpx;" :src="imageUrl + 'letter_logo4.png'" mode="" @tap="jumpEar(0)"></image>
				<view class="headTipsTxt">电影院</view>
			</view>
			<view class="headTipsBox">
				<image class="headTips" style="width: 49rpx;" :src="imageUrl + 'letter_logo5.png'" mode="" @tap="jumpEar(1)"></image>
				<view class="headTipsTxt">磨耳朵</view>
			</view>
			<view class="headTipsBox">
				<image class="headTips" style="width: 49rpx;" :src="imageUrl + 'letter_logo6.png'" mode="" @tap="jumpEar()"></image>
				<view class="headTipsTxt">单词闯关</view>
			</view>
			<view class="headTipsBox">
				<image class="headTips" style="width: 48rpx;" :src="imageUrl + 'letter_logo7.png'" mode="" @tap="jumpEar()"></image>
				<view class="headTipsTxt">夺星计划</view>
			</view>
			<view class="headTipsBox">
				<image class="headTips" style="width: 48rpx;" :src="imageUrl + 'letter_logo8.png'" mode="" @tap="jumpEar(4)"></image>
				<view class="headTipsTxt">定级测评</view>
			</view>
			<view class="headTipsBox">
				<image class="headTips" style="width: 40rpx;" :src="imageUrl + 'letter_logo9.png'" mode="" @tap="jumpEar(5)"></image>
				<view class="headTipsTxt">扩展训练</view>
			</view>
			<view class="headTipsBox">
				<image class="headTips" style="width: 40rpx;" :src="imageUrl + 'letter_logo10.png'" mode="" @tap="jumpEar(6)"></image>
				<view class="headTipsTxt">打卡阅读</view>
			</view>
			<view class="headTipsBox">
				<image class="headTips" style="width: 40rpx;":src="imageUrl + 'letter_logo11.png'" mode="" @tap="shareWechat()"></image>
				<view class="headTipsTxt">阅读指导</view>
			</view>
			<!-- <image class="headTips" :src="imageUrl + 'letter_logo4.png'" mode=""></image> -->
			<!-- <image class="headTips" :src="imageUrl + 'letter_logo4.png'" mode=""></image> -->
		</view>
		<view class="home_box" @touchmove="touchmove" @touchstart="touchstart" @touchend="touchend">
			<view class="home_left btnLeft" ref="btnLeft" style="opacity:1">
				<view class="home_left_top">
					<image class="stool_bg1" :src="imageUrl+'letter_logo1.png'" @tap="jumpType(1)" mode=""></image>
					<image class="stool_bg2" :src="imageUrl+'letter_logo2.png'" @tap="jumpType(2)"  mode=""></image>
					<image class="stool_bg3" :src="imageUrl+'letter_logo3.png'" @tap="jumpType(3)" mode=""></image>
					<view class="stool_bg1_txt">字母启蒙</view>
					<view class="stool_bg2_txt">自然拼读</view>
					<view class="stool_bg3_txt">启蒙绘本</view>
				</view>
				<view class="home_left_bottom">
					<image class="stool_bg" :src="imageUrl+'stool_bg.png'" mode=""></image>
					<view class="stool_bg_btn1" @tap="jumpType(4)"></view>
					<view class="stool_bg_btn2" @tap="jumpType(5)"></view>
					<view class="stool_bg_btn3" @tap="jumpType(6)"></view>
					<view class="stool_bg4_txt">分级阅读</view>
					<view class="stool_bg5_txt">章节阅读</view>
					<view class="stool_bg6_txt">期刊阅读</view>
				</view>
			</view>
			<view class="home_right" ref="fristLetter" v-for="(itm,inx) in bookBox" :key="inx">
				<image class="book_bg" :src="imageUrl+'book_bg.png'" mode=""></image>
				<view class="bookLevel">
					<view class="book_level_top">Level</view>
					<view class="book_level_bottom">{{itm.bookLevel}}</view>
				</view>
				<view class="bookNumb">
					<view class="book_numb_top">{{itm.bookList.length}}</view>
					<view class="book_numb_bottom">本</view>
				</view>
				<view class="book_box">
					<view class="book_itemBox" v-for="(item,index) in itm.bookList" :key="index" @tap="jumpBook(item.bookId)">
						<view class="book_item" >
							<image class="book_tips" :src="imageUrl + 'book_tips_free.png'" mode=""></image>
							<view class="book_tips_txt">免费</view>
							<image class="book_cover" :src="formalUrl + item.bookLogo" mode="center"></image>
							<view :class="item.bookName.length>13?'book_name':'book_name1'">
								{{item.bookName}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 测评定级 -->
		<view v-if="gradPop" class="zhezhaoceng z-index9">
			<view @tap="gradPop = false" class="zhezhaocengBa"></view>
			<view class="wh flex-vertical-level">
				<view class="gradingBox position-r margin-auto bg-white radius-18">
					<view @tap="gradPop = false" class="position-a icon iconguanbi1 guanbi cl-white"></view>
					<view class="bg-E6F2FE flex align-center flex-wrap radius-bw18">
						<view class="font-15 padding-top-20 width text-center font-bold">测评人基本信息</view>
						<view class="font-12 padding-15 padding-lr-20 width flex align-center" >
							<view class="">
								姓名：	
							</view>
							<input class="txt_input" v-model="json.nickName" placeholder="输入姓名"></input>
						</view>
						<view class="cnt_box">
							<view class="font-13 font-weight5">年龄:</view>
							<view class="dropdown-view">
								<view class="dropdown-box" @tap="isAgeBtn">
									<view>
										{{json.age_group==''?'请选择年龄':json.age_group}}
									</view>
									<view class="icon3" :class="isHover?'icon-hover3':''"></view>
								</view>
								<view class="drop-view" v-show="isHover">
									<view class="drop-item" v-for="(item,index) in ageGroupList" :key="index">
										<label class="radio drop-label" @tap="getHover(index)"
											:checked="current == index">
											<span>{{item}}</span>
										</label>
									</view>
								</view>
							</view>
						</view>
		
						<view class="cnt_box" style="padding-top: 10rpx;padding-bottom: 35rpx;">
							<view class="font-13 font-weight5">学习英语时间:</view>
							<view class="dropdown-view1">
								<view class="dropdown-box1" @tap="isLearnBtn">
									<view>
										{{json.learn_date==''?'请选择时间':json.learn_date}}
		
									</view>
									<view class="icon1" :class="isHoverlearn?'icon-hover1':''"></view>
								</view>
								<view class="drop-view1" v-show="isHoverlearn">
									<view class="drop-item1" v-for="(item,index) in dateGroupList" :key="index">
										<label class="radio drop-label1" @tap="getLearn(index)"
											:checked="current == index">
											<span>{{item}}</span>
										</label>
									</view>
								</view>
							</view>
		
						</view>
					</view>
					<view  class="submit text-center font-15 margin-auto" @tap="beganRankReport">
						查看测评报告
					</view>
					<view  class="submit1 text-center font-15 margin-auto" @tap="beganTest">
						开始测评
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	 import {imageUrl,formalUrl} from '../../config/index.js'
	import {getHomePageBook,getUserInfo,getAssessTag,getAssessId} from '../../api/index.js'
	export default {
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				isModel:false,
				startX:0,
				endX:0,
				bookList:[],
				bookBox:[],
				platform: '', //设备
				itemList:[],
				month:0,
				aspectFit:'aspectFit',
				userImg:'',
				gradPop:false,
				isHover: false,
				isHoverlearn: false,
				btnstate: true,
				json: {
					nickName: '',
					age_group: '',
					learn_date: ''
				},
				showAge: false,
				showLear: false,
				current: 0,
				ageGroupList: [],
				dateGroupList: [],
				userName:''
			}
		},
		onLoad() {
			this.getHomePageBookUl()
			this.loding()
			this.getUserInfoUl()
		},
		methods: {
			getHomePageBookUl(){
				getHomePageBook({
					
				}).then((res)=>{
					this.bookBox = res.data.pageList;
					this.itemList = res.data.itemList;
					 console.log("获取书本列表",res);
				})
			},
			getUserInfoUl(){
				getUserInfo().then((res)=>{
					console.log("个人信息",res)
					this.userImg = res.data.userImg
				})
			},
			jump(){
				uni.navigateTo({
					url: '../logon/logon'
				});
			},
			jumpType(data){
				uni.setStorageSync('bookReadType',data);
				if(data == 1){
					uni.navigateTo({
						url: '../books/letter/letter'
					});
				}else if(data == 2){
					uni.navigateTo({
						url: '../books/spelling/spelling'
					});
				}else if(data == 3){
					uni.navigateTo({
						url: '../books/spelling/spelling'
					});
				}else if(data == 4){
					uni.navigateTo({
						url: '../books/gradation/index'
					});
				}else if(data == 5){
					uni.navigateTo({
						url: '../books/periodical/periodical'
					});
				}else if(data == 6){
					uni.navigateTo({
						url: '../books/periodical/periodical'
					});
				}
			},
			jumpEar(data){
				if(data == 0){
					uni.navigateTo({
						url: '../checkout/cinema/cinema'
					});
				}else if(data == 1){
					uni.navigateTo({
						url: '../books/eargrinding/index'
					});
				}else if(data == 4){
					// uni.navigateTo({
					// 	url: '../checkout/exam/exam'
					// });
					this.gradPop = true
					this.getAssessTagUl('')
				}else if(data == 5){
					
				}else if(data == 6){
					uni.navigateTo({
						url:'../checkout/clockIn/clockIn'
					})
				}
				
			},
			beganRankReport(){
				uni.navigateTo({
					url:'../checkout/exam/rankReport'
				})
			},
			beganTest(){
				getAssessId({
					'userName':this.json.nickName,
					'age':this.json.age_group,
					'learnTime':this.json.learn_date,
				}).then(res => {
					if(res.status == 200){
						console.log("定级详情",res)
						let atrId = res.data;
						uni.navigateTo({
							url:'../checkout/exam/exam?atr_id=' + atrId+'&userName='+this.json.nickName+'&age='+this.json.age_group+ '&learnTime='+this.json.learn_date
						})
					}else if(res.status == 500){
						return
					}
				})
			},
			isAgeBtn() {
				this.isHover = !this.isHover;
				this.isHoverlearn = false;
				this.btnstate = false
			},
			isLearnBtn() {
				// if (this.dateGroupList == '') return
				this.isHover = false;
				this.btnstate = false;
				this.isHoverlearn = !this.isHoverlearn;
			
			},
			getHover(value) {
				this.json.age_group = this.ageGroupList[value];
				this.json.learn_date = '请选择时间';
				this.isHoverlearn = false;
				this.isHover = false;
				this.btnstate = false;
				this.getAssessTagUl(this.json.age_group)
			},
			getLearn(value) {
				this.json.learn_date = this.dateGroupList[value];
				
				this.isHoverlearn = false;
				this.btnstate = true
			},
			getAssessTagUl(val){
				let age = '';
				if (val != '') {
					age = val;
				}
				this.dateGroupList = [];
				getAssessTag({
					age: age
				}).then((res)=>{
					console.log("获取时间",res)
					if (res.status == 200) {
						
						if (val == '') {
							this.ageGroupList = res.data
								
						} else {
							res.data.map(item =>{
								if(item !== '0年'){
									this.dateGroupList.push(item)
								}
								
							})
							
						}
					}
				})
			},
			touchstart(e){
				this.startX = e.changedTouches[0].clientX
			},
			touchmove(e){
				this.endX = e.changedTouches[0].clientX;
				let x = this.startX - this.endX;
				if(x > 150){
					this.$refs['btnLeft'].$el.style.opacity = this.$refs['btnLeft'].$el.style.opacity - 0.06;
					
				}else if(x < 0){
					this.$refs['btnLeft'].$el.style.opacity = 1;
				}
			},
			touchend(e){	
			}, 
			jumpBook(id){
				uni.setStorageSync('bookReadType',4);
				uni.setStorageSync('bookId',id);
				uni.navigateTo({
					url: '../books/index'
				});
			},
			shareWechat(){
				uni.navigateTo({
					url: '../checkout/readDemo/readDemo'
				});
			},
			loding(){
				this.getSystemInfo()
			},
			getUserInfo(){
				uni.navigateTo({
					url: '../user/index'
				});
			},
			getSystemInfo() {
				const {
					platform,
				} = uni.getSystemInfoSync()
				uni.getSystemInfo({
					success: async function(res) {
						if(res.model){
							this.isModel = true
						}else{
							this.isModel = false
						}
					}
				})
				//获取一些必要的设备参数
				this.platform = platform;
				let date = new Date();
				this.month= date.getMonth();
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		.user{
			width: 50rpx;
			height: 50rpx;
			background: #ffffff;
			border-radius: 25rpx;
			position: absolute;
			display: flex;
			bottom: 2%;
			left: 2%;
			z-index: 999;
			.user_head{
				width: 46rpx;
				height: 46rpx;
				border-radius: 23rpx;
				background: indianred;
				margin-left: 2rpx;
				margin-top: 2rpx;
			}
		}
		.bgview{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;
			opacity: 0.8;
		}
		.razkids_tips{
			position: absolute;
			right: 40rpx;
			top: -6%;
			width: 140rpx;
			height: 80rpx;
		}
		.home_head{
			width: 70%;
			height: 70rpx;
			// background: green;
			position: absolute;
			left: 3%;
			top: 5rpx;
			display: flex;
			.headTipsBox{
				height: 100%;
				margin-left: 12rpx;
				.headTips{
					height: 50rpx		
				}
				.headTipsTxt{
					width: 100%;
					height: 12rpx;
					font-size: 10rpx;
					text-align: center;
					
					line-height: 12rpx;
					font-weight: bold;
				}
			}
			
		}
		
		.home_box{
			height: 280rpx;
			width: 100%;
			position: absolute;
			left: 15rpx;
			top: 45%;
			margin-top: -88rpx;
			display: flex;
			overflow-x:auto;
			.home_left{
				margin-top: 20rpx;
				margin-right: 20rpx;
				.home_left_top{
					display: flex;
					width: 240rpx;
					justify-content: space-around;
					position: relative;
					.stool_bg1{
						width: 63rpx;
						height: 85rpx;
					}
					.stool_bg2{
						width: 60rpx;
						height: 87rpx;
					}
					.stool_bg3{
						width: 58rpx;
						height: 90rpx;
					}
					.stool_bg1_txt{
						position: absolute;
						top: 2rpx;
						left: 16rpx;
						
						font-size: 11rpx;
						color: #fff;
						font-weight: bold;
					}
					.stool_bg2_txt{
						position: absolute;
						top: 2rpx;
						left: 102rpx;
						font-size: 11rpx;
						color: #fff;
						font-weight: bold;
					}
					.stool_bg3_txt{
						position: absolute;
						top: 2rpx;
						right: 17rpx;
						font-size: 11rpx;
						color: #fff;
						font-weight: bold;
					}
				}
				.home_left_bottom{
					margin-top: 10rpx;
					position: relative;
					.stool_bg{
						width: 240rpx;
						height: 120rpx;
					}
					.stool_bg_btn1{
						position: absolute;
						left: 24rpx;
						top: 0;
						width: 60rpx;
						height: 70rpx;
					}
					.stool_bg_btn2{
						position: absolute;
						left: 90rpx;
						top: 0;
						width: 66rpx;
						height: 70rpx;
					}
					.stool_bg_btn3{
						position: absolute;
						right: 18rpx;
						top: 0;
						width: 60rpx;
						height: 70rpx;
					}
					.stool_bg4_txt{
						position: absolute;
						left: 32rpx;
						top: 1rpx;
						font-size: 11rpx;
						color: #fff;
						font-weight: bold;
					}
					.stool_bg5_txt{
						position: absolute;
						left: 102rpx;
						top: 1rpx;
						font-size: 11rpx;
						color: #fff;
						font-weight: bold;
					}
					.stool_bg6_txt{
						position: absolute;
						right: 26rpx;
						top: 1rpx;
						font-size: 11rpx;
						color: #fff;
						font-weight: bold;
					}
				}
			}
			.btnLeft{
				opacity:1;
			}
			.home_right{
				margin-left: -25rpx;
				position: relative;
				.bookLevel{
					position: absolute;
					left: 3rpx;
					top: 26rpx;
					width: 36rpx;
					height: 50rpx;
					text-align: center;
					.book_level_top{
						font-size: 13rpx;
						color: #12214B;
						font-family: Poppins;
						font-weight: 600;
					}
					.book_level_bottom{
						font-size: 24rpx;
						color: #12214B;
						font-family: Poppins;
						font-weight: 600;
					}
				}
				.bookNumb{
					position: absolute;
					right: 56rpx;
					top: 23rpx;
					width: 26rpx;
					height: 40rpx;
					text-align: center;
					.book_numb_top{
						font-size: 12rpx;
						color: #12214B;
						font-family: Poppins;
						font-weight: 600;
					}
					.book_numb_bottom{
						font-size: 10rpx;
						color: #12214B;
						font-family: Poppins;
						font-weight: 600;
					}
				}
				.book_bg{
					width: 495rpx;
					height: 272rpx;
				}
				.book_box{
					position: absolute;
					left: 40rpx;
					top: 11rpx;
					width: 376rpx;
					height: 240rpx;
					display: flex;
					justify-content: space-around;
					flex-wrap:wrap;
					.book_itemBox{
						width: 84rpx;
						height: 98rpx;
						background: #aab5d2;
						margin-top: 13rpx;
						border-radius: 5rpx;
						position: relative;
						.book_item{
							width: 78rpx;
							height: 96rpx;
							background: #ffffff;
							border-radius: 5rpx;
							position: absolute;
							left: 0;
							top: 0;
							.book_tips{
								position: absolute;
								right: -2rpx;
								top: -2rpx;
								width: 66rpx;
								height: 40rpx;
								z-index: 66;
							}
							.book_tips_txt{
								position: absolute;
								right: 2rpx;
								top: -1rpx;
								color: #fff;
								font-size: 13rpx;
								z-index: 88;
							}
							.book_cover{
									width: 72rpx;
									will-change: transform;
									height:72rpx;
									margin-top: 4rpx;
									margin-left: 4rpx;
									border-radius: 4rpx;
									background-color: #fff;
							}
							.book_name{
								margin-left: 4rpx;
								width: 72rpx;
								height: 18rpx;
								line-height: 10rpx;
								text-align: center;
								font-size: 9rpx;
							}
							.book_name1{
								margin-left: 4rpx;
								width: 74rpx;
								height: 18rpx;
								line-height: 18rpx;
								text-align: center;
								font-size: 9rpx;
							}
						}
					}
					
				}
			}
		}
	
		.gradingBox {
			width: 300rpx;
			position: relative;
			
			// height: 150rpx;
			.txt_input{
				width: 73%;
				height: 30rpx;
				margin-left: 10rpx;
				padding-left: 10rpx;
				background: #FFFFFF;
				// box-shadow: 0 4rpx 6rpx 0 rgba(89, 89, 89, 0.2000);
				border-radius: 5rpx;
				color: #666666;
				line-height: 30rpx;
				font-size: 14rpx;
				border: 1px solid #CCCCCC
			}
			.cnt_box {
				width: 280rpx;
				margin-left: 20rpx;
				display: flex;
				text-align: center;
				align-items: center;
		
				.cnt_input,
				.cnt_inputs {
					margin-left: 27rpx;
					padding: 24rpx 35rpx;
					background: #FFFFFF;
					border: 1rpx solid #CCCCCC;
					border-radius: 14rpx;
					color: #666666;
					.xiala {
						width: 43rpx;
						height: 25rpx;
					}
				}
		
				.cnt_btn {
					width: 60rpx;
					height: 30rpx !important;
				}
		
				.cnt_input {
					width: 364rpx;
				}
		
				.cnt_inputs {
					width: 236rpx;
				}
			}
		
			.submit {
				position: absolute;
				bottom: -15rpx;
				left: 40rpx;
				width: 100rpx;
				height: 30rpx;
				line-height: 30rpx;
				color: #F64D04;
				background: url(http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/submit.png);
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}
			.submit1 {
				position: absolute;
				bottom: -15rpx;
				left: 150rpx;
				width: 100rpx;
				height: 30rpx;
				line-height: 30rpx;
				color: #F64D04;
				background: url(http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/submit.png);
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}
			.dropdown-box {
				display: flex;
				align-items: center;
				text-align: center;
				justify-content: space-between;
				box-sizing: border-box;
				padding-right: 10px;
				font-size: 14rpx;
				padding: 5rpx;
				border: #CCCCCC 1rpx solid;
				border-radius: 6rpx;
				width: 200rpx;
				margin-left: 20rpx;
				color: #666666;
				z-index: 999;
			}
			.icon3 {
				border-top: 5px solid #0F7ADE;
				border-left: 5px solid #0F7ADE;
				border-bottom: 5px solid transparent;
				border-right: 5px solid transparent;
				height: 5px;
				width: 5px;
				transform: rotate(225deg);
				transition: .2s;
			}
			
			.icon-hover3 {
				transform: rotate(45deg);
			}
			.drop-view {
				box-shadow: 0 0 5px #525252;
				height: auto;
				width: 150rpx;
				height: 100rpx;
				overflow: auto;
				border-radius: 5px;
				box-sizing: border-box;
				padding: 10px 0;
				/* transform: scaleY(0); */
				transition: .4s;
				transform-origin: top;
				margin-left: 20rpx;
				position: absolute;
				background-color: #FFFFFF;
				z-index: 999;
			}
			
			.drop-item {
				height: 30px;
				width: 100%;
				display: flex;
				align-items: center;
			}
			
			.drop-label {
				width: 100%;
				height: 100%;
				/* transition: .4s; */
				box-sizing: border-box;
				padding-left: 10px;
				display: flex;
				align-items: center;
			}
			
			.drop-label span {
				position: absolute;
				font-size: 12rpx;
				/* transition: .4s; */
			}
			.dropdown-box1 {
				display: flex;
				align-items: center;
				text-align: center;
				justify-content: space-between;
				box-sizing: border-box;
				padding-right: 10px;
				font-size: 14rpx;
				padding: 5rpx;
				border: #CCCCCC 1rpx solid;
				border-radius: 6rpx;
				color: #666666;
				width: 150rpx;
				margin-left: 20rpx;
			}
			
			.icon1 {
				border-top: 5px solid #0F7ADE;
				border-left: 5px solid #0F7ADE;
				border-bottom: 5px solid transparent;
				border-right: 5px solid transparent;
				height: 5px;
				width: 5px;
				transform: rotate(225deg);
				transition: .2s;
			}
			
			.icon-hover1 {
				transform: rotate(45deg);
			}
			
			.drop-view1 {
				box-shadow: 0 0 5px #525252;
				height: auto;
				width: 100rpx;
				overflow: auto;
				border-radius: 5px;
				box-sizing: border-box;
				padding: 10px 0;
				/* transform: scaleY(0); */
				transition: .4s;
				transform-origin: top;
				margin-left: 20rpx;
				position: absolute;
				background-color: #FFFFFF;
				z-index: 999;
			}
			
			.drop-item1 {
				height: 30px;
				width: 100%;
				display: flex;
				align-items: center;
			}
			
			.drop-label1 {
				width: 100%;
				height: 100%;
				/* transition: .4s; */
				box-sizing: border-box;
				padding-left: 10px;
				display: flex;
				align-items: center;
			}
			
			.drop-label1 span {
				position: absolute;
				font-size: 12rpx;
				/* transition: .4s; */
			}
			
			.drop-radio1 {
				display: none;
			}
		}
	}
</style>
