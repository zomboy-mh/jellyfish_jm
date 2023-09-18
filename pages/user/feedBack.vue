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
			<view class="textArea">
				<view class="buttonText margin-left-10">
					<u-radio-group
					    v-model="radiovalue1"
					    placement="row"
					    @change="groupChange"
					  >
					    <u-radio
							activeColor="#56bca0"
					      :customStyle="{marginBottom: '8px'}"
					      v-for="(item, index) in radiolist1"
					      :key="index"
					      :label="item.name"
					      :name="item.name"
					      @change="radioChange"
					    >
					    </u-radio>
					  </u-radio-group>
				</view>
				<u-textarea v-model="value1" height="120" border="none" :count="true" placeholder="感谢您使用RAZ课堂，您在使用过程中的任何意见和建议都可以反愤给我们，感谢您对RAZ课堂一如既往的支持" ></u-textarea>
				<view class="textImg">
					<u-upload
							:previewFullImage="true"
							:fileList="fileList1"
							@afterRead="afterRead"
							@delete="deletePic"
							name="1"
							multiple
							:maxCount="10"
						></u-upload>
				</view>
			</view>
			<view class="feedPhoto">
				<view class="margin-left-10">联系方式</view>
				<input class="txt_input" v-model="feedPhoto" placeholder="请输入您的手机号"></input>
			</view>
			<view class="bottonTrue">
				<u-button :hairline='false' color="#f8f4f8" iconColor="#000" type="primary" text="提交反馈"></u-button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {imageUrl,formalUrl} from '../../config/index.js'
	import {getMoerduoList,getMoerduoDetail} from '../../api/index.js'
	import {Audio,voiceStart} from "../../utils/utils.js"
	export default {
		components: {
		},
		data() {
			return {
				imageUrl: imageUrl,
				formalUrl:formalUrl,
				bookName:'在线反馈',
				value1: '',
				// 基本案列数据
				radiolist1: [{
				  name: '购买',
				  disabled: false
				},
				  {
				    name: '账户',
				    disabled: false
				  },
				  {
				    name: '体验',
				    disabled: false
				  }, {
				    name: '其他',
				    disabled: false
				  }
				],
				// u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
				radiovalue1: '购买',
				fileList1: [],
				feedPhoto:''
			}
		},
		onLoad() {
			
		},
		methods: {
			jump() {
				uni.reLaunch({
						url: 'index'
				})
			},
			groupChange(n){
			        console.log('groupChange', n);
			},
			radioChange(n){
			        console.log('radioChange', n);
			},
			afterRead(){
				
			},
			deletePic(){
				
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
				background:  #FFFFFF;
				
				z-index: 1;
				.textArea{
					width: 600rpx;
					height: 50%;
					position: absolute;
					left: 50%;
					top: 8%;
					margin-left: -300rpx;
					
					background:  #f8f4f8;
					::v-deep .u-textarea {
						background:  #f8f4f8;
					}
					.buttonText{
						width: 100%;
						height: 40rpx;
						display: flex;
					}
					.textImg{
						position: absolute;
						left: 5rpx;
						bottom:-5rpx;
					}
				}
				.feedPhoto{
					width: 600rpx;
					height: 36rpx;
					position: absolute;
					left: 50%;
					top: 60%;
					margin-left: -300rpx;
					background:  #f8f4f8;
					display: flex;
					text-align: center;
					align-items: center;
				}
				.bottonTrue{
					width: 80rpx;
					height: 30rpx;
					position: absolute;
					right: 0;
					top: 72%;
					margin-right: 80rpx;
					
					::v-deep .u-button__text {
					color: #000;
					}
				}
			}
		}
</style>
