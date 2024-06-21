<template>
	<view class="content">
		<view class="head">
			<view class="green_back display-flex" @click="jump()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="library_title">
				<view class="library_title_txt  font-16">字母启蒙</view>
			</view>
		</view>
		<view class="bodyBox">
			<view class="zhezhaoceng" v-show="letterStyle" @click="letterStyleTap"></view>
			<!-- <audio  :src="imageUrl + 'letterNameSong.mp3'" loop="true"></audio> -->
			
			<view class="letter_one">
				<view class="letter_item" @click="jumpBook(0,'A')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[0].style?'z-index6 scale100-150':'z-index60 '">
						<image class="letter_img" :src="imageUrl + 'letter_A.png'" mode=""></image>
					</view>
					<view class="letter_name jumpTopBottom--50-2 " v-if="!letterFirstShow" :class="letterList[0].style?'z-index6':'z-index60'">
						<image class="letter_img" :src="imageUrl + 'letter_A.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[0].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('A')">
								
							</view>
							<view class="center_box_img " @click="jumpSwiper('A')">
								
							</view>
							<view class="center_box_img "  @click="jumpWrite('A')">
								
							</view>
							<view class="center_box_img " @click="jumpBookIndex('13001850')">
								
							</view>
						</view>
					</view>
				</view>

				<view class="letter_item" @click="jumpBook(1,'B')">
					<view class="letter_name" v-if="letterFirstShow" :class="letterList[1].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_B.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom-50-2" v-if="!letterFirstShow" :class="letterList[1].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_B.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[1].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('B')">
								
							</view>
							<view class="center_box_img " @click="jumpSwiper('B')">
								
							</view>
							<view class="center_box_img "  @click="jumpWrite('B')">
								
							</view>
							<view class="center_box_img " @click="jumpBookIndex('13001851')">
								
							</view>
						</view>
					</view>
					<!-- <view class="letter_option" v-show="letterList[1].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box" @tap="jumpSwiper('B')">
								<image class="center_box_img" :src="imageUrl + 'letter_look.png'" mode="aspectFit">
								</image>
							</view>
							<view class="center_box" @tap="jumpWrite('B')">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit">
								</image>
							</view>
							<view class="center_box" @tap="jumpBookIndex('13001851')">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit">
								</image>
							</view>
						</view>
					</view> -->
				</view>
				<view class="letter_item" @click="jumpBook(2,'C')">
					<view class="letter_name" v-if="letterFirstShow" :class="letterList[2].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_C.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom--50-2" v-if="!letterFirstShow" :class="letterList[2].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_C.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[2].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('C')">
								
							</view>
							<view class="center_box_img " @click="jumpSwiper('C')">
								
							</view>
							<view class="center_box_img "  @click="jumpWrite('C')">
								
							</view>
							<view class="center_box_img " @click="jumpBookIndex('13001853')">
								
							</view>
						</view>
					</view>
					
				</view>
				<view class="letter_item" @click="jumpBook(3,'D')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[3].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 45rpx;" :src="imageUrl + 'letter_D.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom-50-2" v-if="!letterFirstShow" :class="letterList[3].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 45rpx;" :src="imageUrl + 'letter_D.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[3].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('D')">
								
							</view>
							<view class="center_box_img " @click="jumpSwiper('D')">
								
							</view>
							<view class="center_box_img "  @click="jumpWrite('D')">
								
							</view>
							<view class="center_box_img " @click="jumpBookIndex('13001854')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(4,'E')">
					<view class="letter_name" v-if="letterFirstShow" :class="letterList[4].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_E.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom--50-2" v-if="!letterFirstShow" :class="letterList[4].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_E.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[4].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('E')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('E')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('E')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001855')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(5,'F')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[5].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_F.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom-50-2" v-if="!letterFirstShow" :class="letterList[5].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_F.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img"  :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[5].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('F')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('F')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('F')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001856')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(6,'G')">
					<view class="letter_name" v-if="letterFirstShow" :class="letterList[6].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_G.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom--50-2" v-if="!letterFirstShow" :class="letterList[6].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_G.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[6].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('G')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('G')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('G')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001857')">
								
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="letter_two">
				<view class="letter_item" @tap="jumpBook(7,'H')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[7].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" :src="imageUrl + 'letter_H.png'" mode=""></image>
					</view>
					<view class="letter_name jumpTopBottom-50-2" v-if="!letterFirstShow" :class="letterList[7].style?'z-index6':'z-index60'">
						<image class="letter_img" :src="imageUrl + 'letter_H.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[7].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('H')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('H')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('H')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001858')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(8,'I')">
					<view class="letter_name "v-if="letterFirstShow" :class="letterList[8].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_I.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom--50-2"v-if="!letterFirstShow" :class="letterList[8].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_I.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[8].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('I')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('I')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('I')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001859')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(9,'J')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[9].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_J.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom-50-2" v-if="!letterFirstShow" :class="letterList[9].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_J.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[9].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('J')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('J')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('J')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001860')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(10,'K')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[10].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 45rpx;" :src="imageUrl + 'letter_K.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom--50-2"v-if="!letterFirstShow" :class="letterList[10].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 45rpx;" :src="imageUrl + 'letter_K.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[10].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('K')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('K')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('K')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001861')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(11,'L')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[11].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_L.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom-50-2"v-if="!letterFirstShow" :class="letterList[11].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_L.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[11].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('L')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('L')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('L')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001862')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(12,'M')">
					<view class="letter_name "v-if="letterFirstShow" :class="letterList[12].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_M.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom--50-2" v-if="!letterFirstShow" :class="letterList[12].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_M.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[12].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('M')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('M')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('M')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001863')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(13,'N')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[13].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_N.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom-50-2" v-if="!letterFirstShow" :class="letterList[13].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_N.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[13].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('N')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('N')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('N')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001864')">
								
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="letter_three">
				<view class="letter_item" @tap="jumpBook(14,'O')">
					<view class="letter_name "v-if="letterFirstShow" :class="letterList[14].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" :src="imageUrl + 'letter_O.png'" mode=""></image>
					</view>
					<view class="letter_name jumpTopBottom--50-2"v-if="!letterFirstShow" :class="letterList[14].style?'z-index6':'z-index60'">
						<image class="letter_img" :src="imageUrl + 'letter_O.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[14].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('O')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('O')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('O')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001865')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(15,'P')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[15].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_P.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom-50-2"v-if="!letterFirstShow" :class="letterList[15].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_P.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[15].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('P')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('P')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('P')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001866')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(16,'Q')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[16].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_Q.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom--50-2" v-if="!letterFirstShow" :class="letterList[16].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_Q.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[16].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('Q')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('Q')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('Q')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001867')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(17,'R')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[17].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 45rpx;" :src="imageUrl + 'letter_R.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom-50-2" v-if="!letterFirstShow" :class="letterList[17].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 45rpx;" :src="imageUrl + 'letter_R.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[17].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('R')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('R')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('R')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001868')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(18,'S')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[18].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_S.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom--50-2" v-if="!letterFirstShow" :class="letterList[18].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_S.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[18].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('S')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('S')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('S')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001869')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(19,'T')">
					<view class="letter_name" v-if="letterFirstShow" :class="letterList[19].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_T.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom-50-2" v-if="!letterFirstShow" :class="letterList[19].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_T.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[19].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('T')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('T')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('T')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001870')">
								
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="letter_four">
				<view class="letter_item" @tap="jumpBook(20,'U')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[20].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" :src="imageUrl + 'letter_U.png'" mode=""></image>
					</view>
					<view class="letter_name jumpTopBottom--50-2" v-if="!letterFirstShow" :class="letterList[20].style?'z-index6':'z-index60'">
						<image class="letter_img" :src="imageUrl + 'letter_U.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[20].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('U')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('U')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('U')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001871')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(21,'V')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[21].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_V.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom-50-2" v-if="!letterFirstShow" :class="letterList[21].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_V.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[21].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('V')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('V')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('V')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001872')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(22,'W')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[22].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_W.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom--50-2" v-if="!letterFirstShow" :class="letterList[22].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_W.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[22].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('W')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('W')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('W')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001873')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(23,'X')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[23].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 45rpx;" :src="imageUrl + 'letter_X.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom-50-2" v-if="!letterFirstShow" :class="letterList[23].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 45rpx;" :src="imageUrl + 'letter_X.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[23].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('X')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('X')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('X')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001874')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(24,'Y')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[24].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_Y.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom--50-2" v-if="!letterFirstShow" :class="letterList[24].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_Y.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[24].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('Y')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('Y')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('Y')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001875')">
								
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item" @tap="jumpBook(25,'Z')">
					<view class="letter_name " v-if="letterFirstShow" :class="letterList[25].style?'z-index6 scale100-150':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_Z.png'" mode="">
						</image>
					</view>
					<view class="letter_name jumpTopBottom-50-2" v-if="!letterFirstShow" :class="letterList[25].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_Z.png'" mode="">
						</image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					
					<view class="letter_option" v-show="letterList[25].btnstyle">
						<image class="wh position-a" :src="imageUrl + 'letter_BgLog.png'" mode="aspectFit"></image>
						<view class="option_center">
							<view class="center_box_img " @click="jumpHear('Z')">
								
							</view>
							<view class="center_box_img " @tap="jumpSwiper('Z')">
								
							</view>
							<view class="center_box_img "  @tap="jumpWrite('Z')">
								
							</view>
							<view class="center_box_img " @tap="jumpBookIndex('13001876')">
								
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pageIndex from '@/components/page-index.vue';
	import {Audio,voiceStart,letterAudio,letterVoiceStart} from "@/utils/utils";
	import {
		imageUrl,
		formalUrl
	} from '../../../config/index.js'
	import {
		getLetterEnlightenment
	} from '../../../api/index.js'
	export default {
		components: {
			pageIndex,
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl: formalUrl,
				bookList: [],
				letterStyle: false,
				letterList: [{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					},
					{
						style: false
					}
				],
				audioUrl:'letterNameSong.mp3',
				letterFirstShow:false,
				countIndex:0,
				intervalId:null,
				audioLetterUrl:''
			}
		},
		watch:{
		},
		onLoad() {
			// this.getBookListUl()
			// this.playMusic()
			this.playMusic1()
		},
		methods: {
			playMusic1(){
				// Audio.loop=true
				voiceStart(this.imageUrl + this.audioUrl).then(() => {
					
				})
				// this.letterStyle = true
				
				// this.intervalId = setInterval(()=>{
				// 	this.timerCallback(this.countIndex)
				// },1000)
				// setTimeout(()=>{
				// 	this.letterStyle = false
				// 	this.letterFirstShow = false
				// 	clearInterval(this.intervalId)
				// },27000)
			},
			playLetterName(letterNumber){
				console.log(letterNumber)
				Audio.pause()
				this.audioLetterUrl = this.imageUrl + letterNumber + '_name.mp3';
				letterVoiceStart(this.audioLetterUrl).then(() => {
					
				})
				// this.letterStyle = true
				
				// this.intervalId = setInterval(()=>{
				// 	this.timerCallback(this.countIndex)
				// },1000)
				// setTimeout(()=>{
				// 	this.letterStyle = false
				// 	this.letterFirstShow = false
				// 	clearInterval(this.intervalId)
				// },27000)
			},
			playMusic(){
				voiceStart(this.imageUrl + this.audioUrl).then(() => {
					
				})
				this.letterStyle = true
				
				this.intervalId = setInterval(()=>{
					this.timerCallback(this.countIndex)
				},1000)
				setTimeout(()=>{
					this.letterStyle = false
					this.letterFirstShow = false
					clearInterval(this.intervalId)
				},27000)
			},
			timerCallback(){
				this.letterList.map((item, index) => {
					item.style = false
				})
				this.letterList[this.countIndex].style = true;
				this.countIndex++
			},
			jump() {
				Audio.stop();
				uni.reLaunch({
					url: '../../index/index'
				})
			},
			getBookListUl() {
				getLetterEnlightenment({}).then((res) => {
					this.bookList = res.data
					console.log("书本列表", res)
				})
			},
			jumpBook(data,letterNumber) {
				this.playLetterName(letterNumber)
				this.letterFirstShow = true
				this.letterList.map((item, index) => {
					item.style = false
					item.btnstyle = false
					
				})
				this.letterList[data].style = true;
				this.letterList[data].btnstyle = true;
				this.letterStyle = true
			},
			letterStyleTap() {
				Audio.play()
				this.letterList.map((item, index) => {
					item.style = false
					item.btnstyle = false
				})
				this.letterStyle = false
				this.letterFirstShow = false
			},
			jumpSwiper(data) {
				Audio.stop();
				uni.reLaunch({
					url: 'letterDetail?letter=' + data
				})
				// uni.reLaunch({
				// 		url: 'letter' + data
				// })
			},
			jumpHear(data){
				Audio.stop();
				uni.setStorageSync('letterType',data);
				uni.reLaunch({
					url: 'letterVideoIndex?letter=' + data
				})
			},
			jumpWrite(data) {
				Audio.stop();
				uni.reLaunch({
					url: 'letterWrite?letter=' + data
				})
			},
			jumpBookIndex(data){
				Audio.stop();
				 uni.setStorageSync('letterBookId',data);
				uni.reLaunch({
					url: 'letterBookIndex'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;

		.head {
			display: flex;
			position: absolute;
			left: 0;
			top: 0;
			height: 70rpx;
			z-index: 60;

			.green_back {
				position: absolute;
				left: 3%;
				top: 50%;
				margin-top: -26rpx;
				margin-left: 16rpx;
				z-index: 999;

				.green_back_img {
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
	}

	.bodyBox {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/letter_bg.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;

		.letter_one {
			position: absolute;
			left: 50%;
			top: 13%;
			width: 500rpx;
			height: 60rpx;
			margin-left: -250rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.letter_item {
				width: 80rpx;
				height: 60rpx;
				position: relative;

				.letter_name {
					position: absolute;
					left: 0;
					top: 0;

					// z-index: 60;
					.letter_img {
						width: 40rpx;
						height: 66rpx;
					}
				}

				.letter_bottom {
					position: absolute;
					left: -10rpx;
					bottom: -7rpx;
					z-index: 50;

					.letter_bottom_img {
						width: 63rpx;
						height: 20rpx;
					}
				}

				.letter_option {
					position: absolute;
					left: -15rpx;
					bottom: -65rpx;
					width: 150rpx;
					height: 60rpx;
					// background: #FFFFFF;
					z-index: 600;
					border-radius: 10rpx;

					.option_tips {
						position: absolute;
						left: 50%;
						top: -5rpx;
						margin-left: -5rpx;
						width: 10rpx;
						height: 10rpx;
						background: #FFFFFF;
						transform: rotate(45deg);
						border-radius: 3rpx;
					}

					.option_center {
						width: 80%;
						height: 100%;
						display: flex;
						justify-content: space-around;
						align-items: center;
						position: relative;
						margin-left: 10%;
						.center_box_img {
							// position: absolute;
							// left: 50%;
							// top: 50%;
							// margin-left: 5rpx;
							// margin-top: -12rpx;
							width: 28%;
							height: 70%;
						
						}
						.center_box {
							width: 30%;
							height: 70%;
							background: #3cbc9b;
							border-radius: 5rpx;
							

							
						}
					}
				}
			}
		}

		.letter_two {
			position: absolute;
			left: 50%;
			top: 32%;
			width: 580rpx;
			height: 60rpx;
			margin-left: -290rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.letter_item {
				width: 80rpx;
				height: 60rpx;
				position: relative;

				.letter_name {
					position: absolute;
					left: 0;
					top: 0;

					.letter_img {
						width: 40rpx;
						height: 66rpx;
					}
				}

				.letter_bottom {
					position: absolute;
					left: -10rpx;
					bottom: -7rpx;
					z-index: 50;

					.letter_bottom_img {
						width: 63rpx;
						height: 20rpx;
					}
				}

				.letter_option {
					position: absolute;
					left: -15rpx;
					bottom: -65rpx;
					width: 150rpx;
					height: 60rpx;
					// background: #FFFFFF;
					z-index: 600;
					border-radius: 10rpx;
				
					.option_tips {
						position: absolute;
						left: 50%;
						top: -5rpx;
						margin-left: -5rpx;
						width: 10rpx;
						height: 10rpx;
						background: #FFFFFF;
						transform: rotate(45deg);
						border-radius: 3rpx;
					}
				
					.option_center {
						width: 80%;
						height: 100%;
						display: flex;
						justify-content: space-around;
						align-items: center;
						position: relative;
						margin-left: 10%;
						.center_box_img {
							// position: absolute;
							// left: 50%;
							// top: 50%;
							// margin-left: 5rpx;
							// margin-top: -12rpx;
							width: 28%;
							height: 70%;
						
						}
						.center_box {
							width: 30%;
							height: 70%;
							background: #3cbc9b;
							border-radius: 5rpx;
							
				
							
						}
					}
				}
			}
		}

		.letter_three {
			position: absolute;
			left: 50%;
			top: 53%;
			width: 520rpx;
			height: 60rpx;
			margin-left: -260rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.letter_item {
				width: 80rpx;
				height: 60rpx;
				position: relative;

				.letter_name {
					position: absolute;
					left: 0;
					top: 0;

					.letter_img {
						width: 40rpx;
						height: 66rpx;
					}
				}

				.letter_bottom {
					position: absolute;
					left: -10rpx;
					bottom: -7rpx;
					z-index: 50;

					.letter_bottom_img {
						width: 63rpx;
						height: 20rpx;
					}
				}

				.letter_option {
					position: absolute;
					left: -15rpx;
					bottom: -65rpx;
					width: 150rpx;
					height: 60rpx;
					// background: #FFFFFF;
					z-index: 600;
					border-radius: 10rpx;
				
					.option_tips {
						position: absolute;
						left: 50%;
						top: -5rpx;
						margin-left: -5rpx;
						width: 10rpx;
						height: 10rpx;
						background: #FFFFFF;
						transform: rotate(45deg);
						border-radius: 3rpx;
					}
				
					.option_center {
						width: 80%;
						height: 100%;
						display: flex;
						justify-content: space-around;
						align-items: center;
						position: relative;
						margin-left: 10%;
						.center_box_img {
							// position: absolute;
							// left: 50%;
							// top: 50%;
							// margin-left: 5rpx;
							// margin-top: -12rpx;
							width: 28%;
							height: 70%;
						
						}
						.center_box {
							width: 30%;
							height: 70%;
							background: #3cbc9b;
							border-radius: 5rpx;
							
				
							
						}
					}
				}
			}
		}

		.letter_four {
			position: absolute;
			left: 50%;
			top: 71%;
			width: 580rpx;
			height: 60rpx;
			margin-left: -280rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;

			.letter_item {
				width: 80rpx;
				height: 60rpx;
				position: relative;

				.letter_name {
					position: absolute;
					left: 0;
					top: 0;

					.letter_img {
						width: 40rpx;
						height: 66rpx;
					}
				}

				.letter_bottom {
					position: absolute;
					left: -10rpx;
					bottom: -7rpx;
					z-index: 50;

					.letter_bottom_img {
						width: 63rpx;
						height: 20rpx;
					}
				}

				.letter_option {
					position: absolute;
					left: -15rpx;
					bottom: -48rpx;
					width: 150rpx;
					height: 60rpx;
					// background: #FFFFFF;
					z-index: 600;
					border-radius: 10rpx;
				
					.option_tips {
						position: absolute;
						left: 50%;
						top: -5rpx;
						margin-left: -5rpx;
						width: 10rpx;
						height: 10rpx;
						background: #FFFFFF;
						transform: rotate(45deg);
						border-radius: 3rpx;
					}
				
					.option_center {
						width: 80%;
						height: 100%;
						display: flex;
						justify-content: space-around;
						align-items: center;
						position: relative;
						margin-left: 10%;
						.center_box_img {
							// position: absolute;
							// left: 50%;
							// top: 50%;
							// margin-left: 5rpx;
							// margin-top: -12rpx;
							width: 28%;
							height: 70%;
						
						}
						.center_box {
							width: 30%;
							height: 70%;
							background: #3cbc9b;
							border-radius: 5rpx;
							
				
							
						}
					}
				}
			}
		}
	}
</style>