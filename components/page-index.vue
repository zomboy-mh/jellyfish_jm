<template>
	<view v-if="pagesIf" class="zhezhaoceng z-index9">
		<view @tap="pagesIf = false" class="zhezhaocengBa"></view>
		<view class="position-r pages bg-white margin-auto radius-18">
			<view @tap="pagesIf = false" class="position-a icon iconguanbi1 cl-white"></view>
			<view class="pages_tit cl-white font-19 flex-vertical-level bg-00a475 radius-up18">全 部 页 面</view>
			<view style="height: 80%;" class="bg-EAFAF5 radius-bw18">
				<view class="page_list padding-10 flex flex-wrap">
					<view v-for="(pageIm,pageIx) in list" :key="pageIx" @tap="pageIndexFn(pageIx)"
						:class="[index == pageIx?'page_index font-weight8':'bg-BBC8C4 cl-white',pageIm.finishedsIf?'page_if':'']"
						class="page_item flex-vertical-level">
						{{pageIx + 1}}
					</view>
				</view>
				<view class="text_style">
					<view class="text_style1">1.灰色按钮状态：未完成</view>
					<view class="text_style2">2.黄色按钮状态：已完成</view>
					<view class="text_style3">3.蓝色按钮状态：正在进行</view>
					<view class="text_style3">*全部完成才能继续哦！</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => []
			},
			index: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				pagesIf: false
			}
		},
		methods: {
			// 点击某一页
			pageIndexFn(index) {
				this.pagesIf = false;
				this.$parent.swiperCurrent = index;
			}
		}
	}
</script>

<style lang="less" scoped>
	.pages {
		top: 6%;
		width: 50%;
		height: 88%;

		.pages_tit {
			height: 20%;
		}
		.page_list {

			.page_item {
				width: 36rpx;
				height: 45rpx;
				border-radius: 5rpx;
				margin: 5rpx;
			}
		}
		.text_style{
			width: 200rpx;
			height: 100rpx;
			position: relative;
			left: 30rpx;
			top: 0;
			.text_style1{
				font-size: 14px;
				color: #666666;
				
			}
			.text_style2{
				margin-top: 10rpx;
				font-size: 14px;
				color: #666666;
			}
			.text_style3{
				margin-top: 10rpx;
				font-size: 14px;
				color: #666666;
			}
		}
	}

	.page_if {
		background: #F99E00 !important;
		color: #FFFFFF !important;
	}

	.page_index {
		color: #FFFFFF;
		background: #00a475;
	}

	.iconguanbi1 {
		top: 9rpx;
		right: -36rpx;
		font-size: 30rpx;
	}
	
</style>
