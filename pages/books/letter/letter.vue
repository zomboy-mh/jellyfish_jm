<template>
	<view class="content">
		<view class="head">
			<view class="green_back display-flex" @tap="jump()">
				<image class="green_back_img" :src="imageUrl + 'green_back.png'" mode=""></image>
			</view>
			<view class="library_title">
				<view class="library_title_txt  font-16">字母启蒙</view>
			</view>
		</view>
		<view class="bodyBox">
			<view class="zhezhaoceng" v-show="letterStyle" @tap="letterStyleTap"></view>
			<view class="letter_one">
				<view class="letter_item" @tap="jumpBook(0)">
					<view class="letter_name" :class="letterList[0].style?'z-index6':'z-index60'">
						<image class="letter_img" :src="imageUrl + 'letter_A.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[0].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box" @tap="jumpSwiper(0)">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				
				<view class="letter_item" @tap="jumpBook(1)">
					<view class="letter_name" :class="letterList[1].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_B.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[1].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box" @tap="jumpSwiper(1)">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(2)">
					<view class="letter_name" :class="letterList[2].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_C.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[2].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box" @tap="jumpSwiper(2)">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(3)">
					<view class="letter_name" :class="letterList[3].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 45rpx;" :src="imageUrl + 'letter_D.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[3].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box" @tap="jumpSwiper(3)">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(4)">
					<view class="letter_name" :class="letterList[4].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_E.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[4].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box"  @tap="jumpSwiper(4)">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(5)">
					<view class="letter_name" :class="letterList[5].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_F.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[5].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box"  @tap="jumpSwiper(5)">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(6)">
					<view class="letter_name" :class="letterList[6].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_G.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[6].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="letter_two">
				<view class="letter_item"  @tap="jumpBook(7)">
					<view class="letter_name" :class="letterList[7].style?'z-index6':'z-index60'">
						<image class="letter_img" :src="imageUrl + 'letter_H.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[7].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(8)">
					<view class="letter_name" :class="letterList[8].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_I.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[8].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(9)">
					<view class="letter_name" :class="letterList[9].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_J.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[9].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(10)">
					<view class="letter_name" :class="letterList[10].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 45rpx;" :src="imageUrl + 'letter_K.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[10].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(11)">
					<view class="letter_name" :class="letterList[11].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_L.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[11].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(12)">
					<view class="letter_name" :class="letterList[12].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_M.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[12].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(13)">
					<view class="letter_name" :class="letterList[13].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_N.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[13].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="letter_three">
				<view class="letter_item"  @tap="jumpBook(14)">
					<view class="letter_name" :class="letterList[14].style?'z-index6':'z-index60'">
						<image class="letter_img" :src="imageUrl + 'letter_O.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[14].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(15)">
					<view class="letter_name" :class="letterList[15].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_P.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[15].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(16)">
					<view class="letter_name" :class="letterList[16].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_Q.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[16].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(17)">
					<view class="letter_name" :class="letterList[17].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 45rpx;" :src="imageUrl + 'letter_R.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[17].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(18)">
					<view class="letter_name" :class="letterList[18].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_S.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[18].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(19)">
					<view class="letter_name" :class="letterList[19].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_T.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[19].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="letter_four">
				<view class="letter_item"  @tap="jumpBook(20)">
					<view class="letter_name" :class="letterList[20].style?'z-index6':'z-index60'">
						<image class="letter_img" :src="imageUrl + 'letter_U.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[20].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(21)">
					<view class="letter_name" :class="letterList[21].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_V.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[21].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(22)">
					<view class="letter_name" :class="letterList[22].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_W.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[22].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(23)">
					<view class="letter_name" :class="letterList[23].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 45rpx;" :src="imageUrl + 'letter_X.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[23].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(24)">
					<view class="letter_name" :class="letterList[24].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 35rpx;" :src="imageUrl + 'letter_Y.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[24].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
							</view>
						</view>
					</view>
				</view>
				<view class="letter_item"  @tap="jumpBook(25)">
					<view class="letter_name" :class="letterList[25].style?'z-index6':'z-index60'">
						<image class="letter_img" style="width: 40rpx;" :src="imageUrl + 'letter_Z.png'" mode=""></image>
					</view>
					<view class="letter_bottom">
						<image class="letter_bottom_img" :src="imageUrl + 'letter_button.png'" mode=""></image>
					</view>
					<view class="letter_option" v-show="letterList[25].style">
						<view class="option_tips"></view>
						<view class="option_center">
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_book.png'" mode="aspectFit"></image>
							</view>
							<view class="center_box">
								<image class="center_box_img" :src="imageUrl + 'letter_swiper.png'" mode="aspectFit"></image>
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
	import {imageUrl,formalUrl} from '../../../config/index.js'
	import {getLetterEnlightenment} from '../../../api/index.js'
	export default {
		components: {
			pageIndex,
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				bookList:[],
				letterStyle:false,
				letterList:[
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					},
					{
						style:false
					}
				]
			}
		},
		onLoad() {
			// this.getBookListUl()
		},
		methods: {
			jump() {
				uni.reLaunch({
						url: '../../index/index'
				})
			},
			getBookListUl(){
				getLetterEnlightenment({}).then((res)=>{
					this.bookList = res.data
					console.log("书本列表",res)
				})
			},
			jumpBook(data){
				
				this.letterList.map((item,index)=>{
					item.style = false
				})
				this.letterList[data].style = true;
				this.letterStyle = true
			},
			letterStyleTap(){
				this.letterList.map((item,index)=>{
					item.style = false
				})
				this.letterStyle = false
			},
			jumpSwiper(data){
				if(data == 0){
					uni.reLaunch({
							url: 'letterA'
					})
				}else if(data == 1){
					uni.reLaunch({
							url: 'letterB'
					})
				}else if(data == 2){
					uni.reLaunch({
							url: 'letterC'
					})
				}else if(data == 3){
					uni.reLaunch({
							url: 'letterD'
					})
				}else if(data == 4){
					uni.reLaunch({
							url: 'letterE'
					})
				}else if(data ==5){
					uni.reLaunch({
							url: 'letterF'
					})
				}
			}
		}
	}
</script>

<style lang="less" scoped>
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
				height: 70rpx;
				z-index: 60;
				.green_back{
					position: absolute;
					left: 3%;
					top: 50%;
					margin-top: -26rpx;
					margin-left: 16rpx;
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
	
		.bodyBox{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: url('http://lbzyk.read61.cn/read61v2_rsc/DEFT_IMG/wx/letter_bg.png');
			background-repeat: no-repeat;
			background-size: 100% 100%;
			.letter_one{
				position: absolute;
				left: 50%;
				top: 13%;
				width: 500rpx;
				height: 60rpx;
				margin-left: -250rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				
				.letter_item{
					width: 80rpx;
					height: 60rpx;
					position: relative;
					.letter_name{
						position: absolute;
						left: 0;
						top: 0;
						// z-index: 60;
						.letter_img{
							width: 40rpx;
							height: 66rpx;
						}
					}
					.letter_bottom{
						position: absolute;
						left: -10rpx;
						bottom: -7rpx;
						z-index: 50;
						.letter_bottom_img{
							width: 63rpx;
							height: 20rpx;
						}
					}
					.letter_option{
						position: absolute;
						left: -28rpx;
						bottom: -55rpx;
						width: 100rpx;
						height: 45rpx;
						background: #FFFFFF;
						z-index: 600;
						border-radius: 10rpx;
						.option_tips{
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
						.option_center{
							width: 100%;
							height: 100%;
							display: flex;
							justify-content: space-around;
							align-items: center;
							.center_box{ 
								width: 35%;
								height: 70%;
								background: #3cbc9b;
								border-radius: 5rpx;
								position: relative;
								.center_box_img{
									position: absolute;
									left: 50%;
									top: 50%;
									margin-left: -10rpx;
									margin-top: -12rpx;
									width: 20rpx;
									height: 25rpx;
									
								}
							}
						}
					}
				}
			}
			.letter_two{
				position: absolute;
				left: 50%;
				top: 32%;
				width: 580rpx;
				height: 60rpx;
				margin-left: -290rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				
				.letter_item{
					width: 80rpx;
					height: 60rpx;
					position: relative;
					.letter_name{
						position: absolute;
						left: 0;
						top: 0;
						
						.letter_img{
							width: 40rpx;
							height: 66rpx;
						}
					}
					.letter_bottom{
						position: absolute;
						left: -10rpx;
						bottom: -7rpx;
						z-index: 50;
						.letter_bottom_img{
							width: 63rpx;
							height: 20rpx;
						}
					}
					.letter_option{
						position: absolute;
						left: -28rpx;
						bottom: -55rpx;
						width: 100rpx;
						height: 45rpx;
						background: #FFFFFF;
						z-index: 600;
						border-radius: 10rpx;
						.option_tips{
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
						.option_center{
							width: 100%;
							height: 100%;
							display: flex;
							justify-content: space-around;
							align-items: center;
							.center_box{ 
								width: 35%;
								height: 70%;
								background: #3cbc9b;
								border-radius: 5rpx;
								position: relative;
								.center_box_img{
									position: absolute;
									left: 50%;
									top: 50%;
									margin-left: -10rpx;
									margin-top: -12rpx;
									width: 20rpx;
									height: 25rpx;
									
								}
							}
						}
					}
				}
			}
			.letter_three{
				position: absolute;
				left: 50%;
				top: 53%;
				width: 520rpx;
				height: 60rpx;
				margin-left: -260rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				
				.letter_item{
					width: 80rpx;
					height: 60rpx;
					position: relative;
					.letter_name{
						position: absolute;
						left: 0;
						top: 0;
						
						.letter_img{
							width: 40rpx;
							height: 66rpx;
						}
					}
					.letter_bottom{
						position: absolute;
						left: -10rpx;
						bottom: -7rpx;
						z-index: 50;
						.letter_bottom_img{
							width: 63rpx;
							height: 20rpx;
						}
					}
					.letter_option{
						position: absolute;
						left: -28rpx;
						bottom: -55rpx;
						width: 100rpx;
						height: 45rpx;
						background: #FFFFFF;
						z-index: 600;
						border-radius: 10rpx;
						.option_tips{
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
						.option_center{
							width: 100%;
							height: 100%;
							display: flex;
							justify-content: space-around;
							align-items: center;
							.center_box{ 
								width: 35%;
								height: 70%;
								background: #3cbc9b;
								border-radius: 5rpx;
								position: relative;
								.center_box_img{
									position: absolute;
									left: 50%;
									top: 50%;
									margin-left: -10rpx;
									margin-top: -12rpx;
									width: 20rpx;
									height: 25rpx;
									
								}
							}
						}
					}
				}
			}
			.letter_four{
				position: absolute;
				left: 50%;
				top: 71%;
				width: 580rpx;
				height: 60rpx;
				margin-left: -280rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				
				.letter_item{
					width: 80rpx;
					height: 60rpx;
					position: relative;
					.letter_name{
						position: absolute;
						left: 0;
						top: 0;
						
						.letter_img{
							width: 40rpx;
							height: 66rpx;
						}
					}
					.letter_bottom{
						position: absolute;
						left: -10rpx;
						bottom: -7rpx;
						z-index: 50;
						.letter_bottom_img{
							width: 63rpx;
							height: 20rpx;
						}
					}
					.letter_option{
						position: absolute;
						left: -28rpx;
						bottom: -50rpx;
						width: 100rpx;
						height: 45rpx;
						background: #FFFFFF;
						z-index: 600;
						border-radius: 10rpx;
						.option_tips{
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
						.option_center{
							width: 100%;
							height: 100%;
							display: flex;
							justify-content: space-around;
							align-items: center;
							.center_box{ 
								width: 35%;
								height: 70%;
								background: #3cbc9b;
								border-radius: 5rpx;
								position: relative;
								.center_box_img{
									position: absolute;
									left: 50%;
									top: 50%;
									margin-left: -10rpx;
									margin-top: -12rpx;
									width: 20rpx;
									height: 25rpx;
									
								}
							}
						}
					}
				}
			}
		}
</style>
