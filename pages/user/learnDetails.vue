<template>
	
	<view class="box">
		<view class="loading" v-if="loading">
			<image class="loading_img" :src="imageUrl + 'loading.gif'" mode=""></image>
		</view>
	
		<view class="return">
			<image @tap="jump('fh')" class="return_img" :src="imageUrl + 'user_fh.png'" mode=""></image>
		</view>
		<view class="box_center">
			<view class="box_left">
				<view class="galender">
					<view class="galender_name font-15">今日情况</view>
					<view class="galender_box">
						<view class="galender_top">
							<view class="galender_top_item">
								<view class=" galender_top_item1">
									<!-- <view class="font-17 galender_color1">{{RankList.recordingNumber}}</view> -->
									<view class="font-17 galender_color1">10</view>
									<view class="font-10  galender_color2 margin-left-3">次</view>
								</view>
								<view class="font-12 text-center galender_color3">录音次数</view>
							</view>
							<view class="galender_top_item">
								<view class=" galender_top_item1">
									<!-- <view class="font-17 galender_color1 ">{{RankList.learnTime}}</view> -->
									<view class="font-17 galender_color1 ">10</view>
									<view class="font-10  galender_color2 margin-left-3">分</view>
								</view>

								<view class="font-12 text-center galender_color3">学习时长</view>
							</view>
						</view>
						<view class="galender_bottom">
							<view class="galender_bottom_item">
								<view class=" galender_top_item1">
									<!-- <view class="font-17 galender_color1">{{RankList.readingBook}}</view> -->
									<view class="font-17 galender_color1">10</view>
									<view class="font-10  galender_color2 margin-left-3">本</view>
								</view>

								<view class="font-12 text-center galender_color3">阅读绘本</view>
							</view>
							<view class="galender_bottom_item">
								<view class=" galender_top_item1">
									<!-- <view class="font-17 galender_color1">{{RankList.vocabularyNumber}}</view> -->
									<view class="font-17 galender_color1">10</view>
									<view class="font-10  galender_color2 margin-left-3">个</view>
								</view>

								<view class="font-12 text-center galender_color3">掌握单词</view>
							</view>
						</view>
					</view>
				</view>
				<view class="level_box">
					<view class="level_box1">
						<view class="font-14 cl-491E0B level_margin">当前级别:{{RankList.learnLevel?RankList.learnLevel:'暂未定级'}}</view>
						<view  v-if="!isbuy" class="font-12 cl-491E0B level_margin">体验用户无法参与升级测评。</view>
						<view  v-else class="font-12 cl-491E0B level_margin">再阅读{{RankList.upgradeNum}}本绘本,将进行第{{RankList.upgradeExamNum}}次升级测试,加油!</view>
						<view class="font-14 cl-white level_text" @tap="testReport">查看测试报告</view>
					</view>
					
				</view>
			</view>
			<view class="box_right">
				<view class="list_name">
					<u-subsection :height="35" bgColor="#419a8c"  activeColor="#ffffff"
						　inactiveColor="#C0C0C0" :list="list" :current="currentindex" :fontSize="12" :animation="true"
						@change="sectionChange" mode="button"></u-subsection>
				</view>
				<view v-show="currentindex==0">
					<view class="prompt">
						<image class="hippo" :src="imageUrl + 'hippoList.png'" mode=""></image>
						<view class="font-13 cl-white">本周已超越全国<span class="font-13 cl-F99E00">{{RankList.exceedUserNum}}%</span>的小朋友</view>
						<view class="font-10">(数据每天凌晨更新)</view>
					</view>
					<view class="list_top margin-bottom-40">
						<view class="columnar_one">
							<view class="columnar_name font-11">
									开口次数
							</view>
							<view class="columnar_content flex">
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{recordingList[0]}}次</view>
									<view class="item_center">
										<view v-if="recordingByUserHeight == 0" class="learndialogue font-10"></view>
										<view v-if="recordingByUserHeight < 15" class="item_content1"></view>
										<view v-if="recordingByUserHeight > 15" class="item_content2" :style="{height:recordingByUserHeight + '%'}">

										</view>
									</view>
									<view class="item_name font-11">
										我<br>本周
									</view>
								</view>
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{recordingList[1]}}次</view>
									<view class="item_center">
										<view v-if="recordingByAllUserHeight == 0" class="learndialogue font-10"></view>
										<view v-if="recordingByAllUserHeight < 15" class="item_content3"></view>
										<view v-if="recordingByAllUserHeight > 15" class="item_content4" :style="{height:recordingByAllUserHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										同龄<br>本周
									</view>
								</view>
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{recordingList[2]}}次</view>
									<view class="item_center">
										<view v-if="recordingByUserAverageHeight == 0" class="learndialogue font-10"></view>
										<view v-if="recordingByUserAverageHeight < 15" class="item_content1"></view>
										<view v-if="recordingByUserAverageHeight > 15" class="item_content2" :style="{height:recordingByUserAverageHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										我<br>周平均
									</view>
								</view>
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{recordingList[3]}}次</view>
									<view class="item_center">
										<view v-if="recordingByAllUserAverageHeight == 0" class="learndialogue font-10"></view>
										<view v-if="recordingByAllUserAverageHeight < 15" class="item_content3"></view>
										<view v-if="recordingByAllUserAverageHeight > 15" class="item_content4" :style="{height:recordingByAllUserAverageHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										同龄<br>周平均
									</view>
								</view>

							</view>
						</view>
						<view class="columnar_one">
							<view class="columnar_name font-11">
									阅读量
							</view>
							<view class="columnar_content flex">
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{readList[0]}}本</view>
									<view class="item_center">
										<view v-if="readingByUserHeight == 0" class="learndialogue font-10"></view>
										<view v-if="readingByUserHeight < 15" class="item_content1"></view>
										<view v-if="readingByUserHeight > 15" class="item_content2" :style="{height:readingByUserHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										我<br>本周
									</view>
								</view>
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{readList[1]}}本</view>
									<view class="item_center">
										<view v-if="readingByAllUserHeight == 0" class="learndialogue font-10"></view>
										<view v-if="readingByAllUserHeight < 15" class="item_content3"></view>
										<view v-if="readingByAllUserHeight > 15" class="item_content4" :style="{height:readingByAllUserHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										同龄<br>本周
									</view>
								</view>
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{readList[2]}}本</view>
									<view class="item_center">
										<view v-if="readingByUserAverageHeight == 0" class="learndialogue font-10"></view>
										<view v-if="readingByUserAverageHeight < 15" class="item_content1"></view>
										<view v-if="readingByUserAverageHeight > 15" class="item_content2" :style="{height:readingByUserAverageHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										我<br>周平均
									</view>
								</view>
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{readList[3]}}本</view>
									<view class="item_center">
										<view v-if="readingeByAllUserAverageHeight == 0" class="learndialogue font-10"></view>
										<view v-if="readingeByAllUserAverageHeight < 15" class="item_content3"></view>
										<view v-if="readingeByAllUserAverageHeight > 15" class="item_content4" :style="{height:readingeByAllUserAverageHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										同龄<br>周平均
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="list_top ">
						<view class="columnar_one">
							<view class="columnar_name font-11">
								词汇量
							</view>
							<view class="columnar_content flex">
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{vocabularyList[0]}}个</view>
									<view class="item_center">
										<view v-if="vocabularyByAllUserHeight == 0" class="learndialogue font-10"></view>
										<view v-if="vocabularyByAllUserHeight < 15" class="item_content1"></view>
										<view v-if="vocabularyByAllUserHeight > 15" class="item_content2" :style="{height:vocabularyByAllUserHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										我<br>本周
									</view>
								</view>
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{vocabularyList[1]}}个</view>
									<view class="item_center">
										<view v-if="vocabularyeByUserHeight == 0" class="learndialogue font-10"></view>
										<view v-if="vocabularyeByUserHeight < 15" class="item_content3"></view>
										<view v-if="vocabularyeByUserHeight > 15" class="item_content4" :style="{height:vocabularyeByUserHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										同龄<br>本周
									</view>
								</view>
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{vocabularyList[2]}}个</view>
									<view class="item_center">
										<view v-if="vocabularyrByAllUserAverageHeight == 0" class="learndialogue font-10"></view>
										<view v-if="vocabularyrByAllUserAverageHeight < 15" class="item_content1"></view>
										<view v-if="vocabularyrByAllUserAverageHeight > 15" class="item_content2" :style="{height:vocabularyrByAllUserAverageHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										我<br>周平均
									</view>
								</view>
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{vocabularyList[3]}}个</view>
									<view class="item_center">
										<view v-if="vocabularyrByUserAverageHeight == 0" class="learndialogue font-10"></view>
										<view v-if="vocabularyrByUserAverageHeight < 15" class="item_content3"></view>
										<view v-if="vocabularyrByUserAverageHeight > 15" class="item_content4" :style="{height:vocabularyrByUserAverageHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										同龄<br>周平均
									</view>
								</view>
							</view>
						</view>
						<view class="columnar_one">
							<view class="columnar_name font-11">
								学习时长
							</view>
							<view class="columnar_content flex">
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{learnList[0]}}分</view>
									<view class="item_center">
										<view v-if="learnByUserHeight == 0" class="learndialogue font-10"></view>
										<view v-if="learnByUserHeight < 15" class="item_content1"></view>
										<view v-if="learnByUserHeight > 15" class="item_content2" :style="{height:learnByUserHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										我<br>本周
									</view>
								</view>
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{learnList[1]}}分</view>
									<view class="item_center">
										<view v-if="learnByAllUserHeight == 0" class="learndialogue font-10"></view>
										<view v-if="learnByAllUserHeight < 15" class="item_content3"></view>
										<view v-if="learnByAllUserHeight > 15" class="item_content4" :style="{height:learnByAllUserHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										同龄<br>本周
									</view>
								</view>
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{learnList[2]}}分</view>
									<view class="item_center">
										<view v-if="learnByUserAverageHeight == 0" class="learndialogue font-10"></view>
										<view v-if="learnByUserAverageHeight < 15" class="item_content1"></view>
										<view v-if="learnByUserAverageHeight > 15" class="item_content2" :style="{height:learnByUserAverageHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										我<br>周平均
									</view>
								</view>
								<view class="columnar_item">
									<view class="item_number font-11 cl-white">{{learnList[3]}}分</view>
									<view class="item_center">
										<view v-if="learnByAllUserAverageHeight == 0" class="learndialogue font-10"></view>
										<view v-if="learnByAllUserAverageHeight < 15" class="item_content3"></view>
										<view v-if="learnByAllUserAverageHeight > 15" class="item_content4" :style="{height:learnByAllUserAverageHeight + '%'}">
										
										</view>
									</view>
									<view class="item_name font-11">
										同龄<br>周平均
									</view>
								</view>
							</view>
						</view>
					</view>

				</view>
				<view v-show="currentindex==1">
					<view class="prompt">
						<image class="hippo" :src="imageUrl + 'hippoList.png'" mode=""></image>
						<view class="font-13 cl-white">本月全国百强榜中超越了<span class="font-13 cl-F99E00">{{RankList.rankExceedUserNum}}%</span>的小朋友</view>
						<view class="font-10">(数据每天凌晨更新)</view>
					</view>
					<view class="list">
						<view class="list_item" v-for="(item,index) in userrankList" :key = "index">
							<view class="list_left">
								<image class="list_headImg" src="../../static/logo.png" mode=""></image>
								<view class="list_username font-13">{{item.userName}}</view>
							</view>
							<view v-if="index>2" class="font-16 margin-right-10">{{index + 1}}</view>
							<image v-if="index==0" class="list_img" :src="imageUrl + 'list_champion.png'" mode=""></image>
							<image  v-if="index==1" class="list_img" :src="imageUrl + 'list_second.png'" mode=""></image>
							<image  v-if="index==2" class="list_img" :src="imageUrl + 'list_third.png'" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <button type="default" open-type="contact">打开客服</button> -->
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../config/index.js'
	import {getUserInfo,pushUserHeaderImg,loginOut,updateUserInfo} from '../../api/index.js'
	
	export default {
		
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				// loadicon:'https://hbimg.huabanimg.com/5e21eee75bb85aac3b057799eb4150453c032ea85cee4-KZZJg9_fw658/format/webp',
				list: [{name:'超越榜(11-29-12-03)'}, {name:'百强榜(11-01-11-30)'}],
				current: 1,
				currentindex: 1,
				RankList:{},
				learnList:[],//学习时长
				readList:[],//阅读量
				recordingList:[],//开口次数
				vocabularyList:[],//词汇量
				learnByUserHeight:0,
				learnByAllUserHeight:0,
				learnByUserAverageHeight:0,
				learnByAllUserAverageHeight:0,
				readingByUserHeight:0,
				readingByAllUserHeight:0,
				readingByUserAverageHeight:0,
				readingeByAllUserAverageHeight:0,
				recordingByUserHeight:0,
				recordingByAllUserHeight:0,
				recordingByUserAverageHeight:0,
				recordingByAllUserAverageHeight:0,
				vocabularyByAllUserHeight:0,
				vocabularyeByUserHeight:0,
				vocabularyrByAllUserAverageHeight:0,
				vocabularyrByUserAverageHeight:0,
				userrankList:[{
					userName:'aaa'
				},{
					userName:'bbb'
				},
				{
					userName:'ccc'
				},
				{
					userName:'bbb'
				},
				{
					userName:'aaa'
				},{
					userName:'bbb'
				},
				{
					userName:'ccc'
				},
				{
					userName:'bbb'
				},
				],
				rankTime:'',
				rankTimeStart:'',
				rankTimeEnd:'',
				transcend:'',
				transcendEnd:'',
				transcendStart:'',
				loading:false,
				isbuy:false
			}
		},
		beforeCreate() {
		
		},
		created() {
			
		},
		
		onLoad() {
			
			// this.getRankListUL();
		},
		
		onShow(){
			// this.getRankListUL();
		},
		mounted() {
		
		},
		methods: {
			testReport(){
				uni.redirectTo({
					url: 'testReport'
				})
				// userIsBuy().then((res)=>{
				// 	if(res.data == true){
				// 		uni.redirectTo({
				// 			url: '../user/testReport'
				// 		})
				// 	}else{
				// 		uni.showToast({
				// 			title:'体验用户暂时无法查看',
				// 			duration: 3000,
				// 			icon: 'none'
				// 		});
				// 	}
				// })
				
			},
			getRankListUL() {
				getRankList().then((res) => {
					
					this.RankList = res.data;
					this.userrankList = res.data.transcendJson.rankList;
					this.RankList.learnTime = parseInt(this.RankList.learnTime/ 60);
					this.rankTimeStart = res.data.transcendJson.rankTimeStart.slice(5);
					this.rankTimeEnd = res.data.transcendJson.rankTimeEnd.slice(5);
					this.transcendEnd = res.data.transcendJson.transcendEnd.slice(5);
					this.transcendStart = res.data.transcendJson.transcendStart.slice(5);
					this.rankTime = '超越榜('+this.transcendStart +'-'+this.transcendEnd+')';
					this.transcend = '百强榜('+this.rankTimeStart +'-'+this.rankTimeEnd+')';
					this.list = [];
					this.list.push(this.rankTime,this.transcend);
					this.learnList.push(parseInt(this.RankList.transcendJson.learnTimeNumberByUser/ 60) ,//学习时长个人
										parseInt(this.RankList.transcendJson.learnTimeNumberByAllUser / 60) ,//学习时长所有
										parseInt(this.RankList.transcendJson.learnTimeAverageByUser / 60) ,//学习时长个人（平均）
										parseInt(this.RankList.transcendJson.learnTimeAverageByAllUser / 60));//学习时长所有（平均）
					this.readList.push(parseInt(this.RankList.transcendJson.readingBookNumberByUser),//阅读量个人
										parseInt(this.RankList.transcendJson.readingBookNumberByAllUser),//阅读量所有
										parseInt(this.RankList.transcendJson.readingBookAverageByUser),//阅读量个人（平均）
										parseInt(this.RankList.transcendJson.readingBookAverageByAllUser));//阅读量所有（平均）
					this.recordingList.push(parseInt(this.RankList.transcendJson.recordingNumberByUser),//开口次数个人
										parseInt(this.RankList.transcendJson.recordingNumberByAllUser),//开口次数所有
										parseInt(this.RankList.transcendJson.recordingAverageByUser),//开口次数个人（平均）
										parseInt(this.RankList.transcendJson.recordingAverageByAllUser));//开口次数所有（平均）
					this.vocabularyList.push(parseInt(this.RankList.transcendJson.vocabularyAverageByAllUser),//词汇量个人
										parseInt(this.RankList.transcendJson.vocabularyAverageByUser),//词汇量所有
										parseInt(this.RankList.transcendJson.vocabularyNumberNumberByAllUser),//词汇量个人（平均）
										parseInt(this.RankList.transcendJson.vocabularyNumberNumberByUser));//,词汇量所有（平均）
					
					let learnMax = Math.max(...this.learnList);
					let readMax = Math.max(...this.readList);
					let recordingMax = Math.max(...this.recordingList);
					let vocabularyMax = Math.max(...this.vocabularyList);
					let learnRatio = [];
					let readRatio = [];
					let recordingRatio = [];
					let vocabularyRatio = [];
					this.learnList.map((item,index)=>{
						learnRatio.push(Math.round(item/learnMax * 100))
					});
					this.readList.map((item,index)=>{
						readRatio.push(Math.round(item/readMax * 100))
					});
					this.recordingList.map((item,index)=>{
						recordingRatio.push(Math.round(item/recordingMax * 100))
					});
					this.vocabularyList.map((item,index)=>{
						vocabularyRatio.push(Math.round(item/vocabularyMax * 100))
					});
					this.learnByUserHeight=learnRatio[0];
					this.learnByAllUserHeight=learnRatio[1];
					this.learnByUserAverageHeight=learnRatio[2];
					this.learnByAllUserAverageHeight=learnRatio[3];
					this.readingByUserHeight=readRatio[0];
					this.readingByAllUserHeight=readRatio[1];
					this.readingByUserAverageHeight=readRatio[2];
					this.readingeByAllUserAverageHeight=readRatio[3];
					this.recordingByUserHeight=recordingRatio[0];
					this.recordingByAllUserHeight=recordingRatio[1];
					this.recordingByUserAverageHeight=recordingRatio[2];
					this.recordingByAllUserAverageHeight=recordingRatio[3];
					this.vocabularyByAllUserHeight=vocabularyRatio[0];
					this.vocabularyeByUserHeight=vocabularyRatio[1];
					this.vocabularyrByAllUserAverageHeight=vocabularyRatio[2];
					this.vocabularyrByUserAverageHeight=vocabularyRatio[3];
					setTimeout(()=>{
						this.loading = false
					},500)
				})
				userIsBuy().then((res)=>{
					if(res.data == true){
						this.isbuy = true
					}else{
						this.isbuy = false
					}
				})
			},
			//跳转
			jump(item) {
				if (item == 'fh') {
					uni.redirectTo({
						url: '../user/index'
					})
				}
			},
			sectionChange(index) {
				this.currentindex = index;
			}
		}
	}
</script>
<style lang="less" scoped>
	.box {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: linear-gradient(to top, #87E4C8, #C3F3E4);
		color: #dddddd;
		.loading{
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: #FFFFFF;
			z-index: 999;
			.loading_img{
				width: 200rpx;
				height: 200rpx;
				position: absolute;
				left: 50%;
				top: 50%;
				margin-top: -100rpx;
				margin-left: -100rpx;
			}
		}
		.return {
			position: fixed;
			top: 6rpx;

			.return_img {
				width: 63rpx;
				height: 35rpx;
			}
		}

		// .box_center{
		// 	width: 630rpx;
		// 	height: 270rpx;
		// 	margin-top: 55rpx;
		// 	margin-left: 70rpx;
		// 	background: blue;
		// 	display: flex;
		// 	.box_left{
		// 		width: 188rpx;
		// 		height: 260rpx;
		// 		background: red;
		// 	}
		// 	.box_right{
		// 		width: 300rpx;
		// 		height: 260rpx;
		// 		background: green;
		// 	}
		// }
		.box_center {
			width: 100%;
			padding: 55rpx 50rpx 25rpx 50rpx;
			height: 100%;
			// overflow: auto;
			// background: blue;
			display: flex;

			.box_left {
				width: 170rpx;

				.galender {
					width: 150rpx;
					height: 155rpx;
					background: url(http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/galender.png);
					background-repeat: no-repeat;
					background-size: 100% 100%;

					.galender_name {
						// align-items: center;
						text-align: center;
						width: 100%;
						height: 36rpx;
						line-height: 36rpx;
						color: #773E24;
					}

					.galender_box {
						width: 100%;
						height: 119rpx;

						.galender_top {
							width: 100%;
							height: 50%;
							display: flex;

							.galender_top_item {
								width: 50%;
								height: 100%;
								.galender_top_item1 {
									width: 100%;
									display: flex;
									align-items: flex-end;
									justify-content: center;
									margin-top: 10rpx;
								}

								.galender_color1 {
									color: #773E24;
								}

								.galender_color2 {
									color: #773E24;
									margin-bottom: 2rpx;
								}

								.galender_color3 {
									color: #B99280;
								}
							}

						}

						.galender_bottom {
							width: 100%;
							height: 50%;
							display: flex;

							.galender_bottom_item {
								width: 50%;
								height: 100%;

								.galender_top_item1 {
									width: 100%;
									display: flex;
									align-items: flex-end;
									justify-content: center;
									margin-top: 10rpx;
								}

								.galender_color1 {
									color: #773E24;
								}

								.galender_color2 {
									color: #773E24;
									margin-bottom: 2rpx;
								}

								.galender_color3 {
									color: #B99280;
								}
							}

						}
					}
				}

				.level_box {
					margin-top: 10rpx;
					// padding: 10rpx;
					width: 150rpx;
					height: 98rpx;
					background: #1c5d49;
					border-radius: 20rpx;
					text-align: center;
					// box-shadow: 0px 8px 10px 0px #5D32B5;
					.level_box1{
						width: 130rpx;
						padding: 10rpx;
						// height: 92rpx;
						background: linear-gradient(0deg, #12957E, #BBF5A5);
						border-radius: 20rpx;
						text-align: center;
						.level_margin {
							margin-bottom: 5rpx;
						}
						.level_text{
							width: 85rpx;
							margin-left: 24rpx;
							border-bottom: 1rpx #FFFFFF solid;
						}
					}
					
				}
			}

			.box_right {
				width: 466rpx;
				background: #79d9ca;
				border: 4rpx #23A591 solid;
				border-radius: 10rpx;
				overflow: auto;
				height: 390rpx;
				.list_name {
					width: 438rpx;
					// height: 35rpx;
					margin: 10rpx 10rpx 0 10rpx;
					background: #429a8c;
					border-radius: 10rpx;
					::v-deep .u-subsection__bar {
					 background: #79d8ca;
					}
				}

				.prompt {
					width: 92%;
					padding-left: 2rpx;
					margin-left: 4%;
					height: 40rpx;
					display: flex;
					align-items: center;
					border-bottom: 2rpx #23A591 solid;

					.hippo {
						width: 22rpx;
						height: 40rpx;
						margin-right: 5rpx;
					}
				}

				.list_top {
					width: 92%;
					margin-top: 10rpx;
					margin-left: 4%;

					display: flex;

					.columnar_one {
						width: 50%;
						height: 150rpx;
						margin-right: 10rpx;

						.columnar_name {
							width: 80rpx;
							height: 30rpx;
							background: url(http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/learncard.png);
							background-repeat: no-repeat;
							background-size: 100% 100%;
							text-align: center;
							color: #FFFFFF;
							line-height: 30rpx;
						}

						.columnar_content {
							width: 100%;
							height: 140rpx;

							.columnar_item {
								width: 25%;
								height: 100%;

								.item_number {
									width: 100%;
									height: 15%;
									text-align: center;

								}

								.item_center {
									position: relative;
									width: 100%;
									height: 60%;
									border-bottom: 6rpx #419a8c solid;
									border-radius: 3rpx;
									.learndialogue {
										width: 80%;
										height: 25rpx;
										line-height: 15rpx;
										position: absolute;
										left: 10%;
										bottom: 10%;
										background: url(http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/learndialogue.png);
										background-repeat: no-repeat;
										background-size: 100% 100%;
										color: #FFFFFF;
										text-align: center;
									}

									.item_content4 {
										position: absolute;
										left: 30%;
										bottom: 0;
										width: 40%;
										background: #8d9ae5;
										border-top-left-radius: 30rpx;
										border-top-right-radius: 30rpx;
									}
									.item_content2 {
										position: absolute;
										left: 30%;
										bottom: 0;
										width: 40%;
										background: #f9de90;
										border-top-left-radius: 30rpx;
										border-top-right-radius: 30rpx;
									}
									.item_content3 {
										position: absolute;
										left: 30%;
										bottom: 0;
										width: 40%;
										height: 12%;
										background: #8d9ae5;
										border-top-left-radius: 30rpx;
										border-top-right-radius: 30rpx;
									}
									.item_content1 {
										position: absolute;
										left: 30%;
										bottom: 0;
										width: 40%;
										height: 12%;
										background: #f9de90;
										border-top-left-radius: 30rpx;
										border-top-right-radius: 30rpx;
									}
								}

								.item_name {
									width: 100%;
									height: 15%;
									text-align: center;
								}
							}
						}
					}
				}

				.list {
					width: 435rpx;
					margin: -2rpx 10rpx 0 10rpx;
					background: #429a8c;
					border-radius: 10rpx;
					height: 300rpx;
					overflow: auto;
					.list_item {
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 92%;
						margin-left: 4%;
						height: 50rpx;
						// border-bottom: 1rpx rgba(255,255,255,0.4) solid;
						border-bottom: 1rpx #7ac8bb solid; 
						.list_left {
							display: flex;
							align-items: center;

							.list_headImg {
								width: 36rpx;
								height: 36rpx;
								border-radius: 18rpx;
								margin-right: 5rpx;
							}

							.list_username {}
						}

						.list_img {
							width: 27rpx;
							height: 36rpx;
						}
					}
				}
			}
		}


	}
</style>