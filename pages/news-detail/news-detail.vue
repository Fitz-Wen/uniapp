<template>
	<view class="m-container">
		<video class="m-video" :src="detailData.playUrl" controls></video>
		<view class="m-gray-bg"></view>
		<view class="m-cnt">
			<view class="m-cnt-title">节目详情</view>
			<view class="m-cnt-item">
				<view class="m-cnt-item-label">节目名称</view>
				<view class="m-cnt-item-value">{{detailData.name}}</view>
			</view>
			<view class="m-cnt-item">
				<view class="m-cnt-item-label">直播时间</view>
				<view class="m-cnt-item-value">{{detailData.playTime}}</view>
			</view>
			<view class="m-cnt-item">
				<view class="m-cnt-item-label">节目时长</view>
				<view class="m-cnt-item-value">{{countTime(detailData.duration)}}分钟</view>
			</view>
			<view class="m-cnt-item">
				<view class="m-cnt-item-label">播放次数</view>
				<view class="m-cnt-item-value">{{detailData.playCount}}</view>
			</view>
			<view class="m-cnt-item">
				<view class="m-cnt-item-label">节目简介</view>
				<view class="m-cnt-item-value">{{detailData.introduction}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import API from '../../static/js/request.js';
	export default {
		data() {
			return {
				id: '',
				detailData: {}
			}
		},
		onLoad(option) {
			const { id } = option;
			this.id = id;
			this.getDetail();
		},
		methods: {
			// 获取详情
			getDetail() {
				const param = {
					id: this.id
				}
				API.getRepeatProgrammeInfo(param)
					.then(res => {
						if (res.code === '1') {
							this.detailData = res.result;
						} else {
							uni.showToast({
								icon: 'none',
								title: res.description
							})
						}
				})
			},
			// 视频时长
			countTime(str) {
				const arr = str.split(':');
				return arr[0] * 60 + Number(arr[1]);
			}
		}
	}
</script>

<style lang="scss">
	.m-container {
		font-size: 0;
		.m-video {
			width: 100%;
			height: 420rpx;
		}
		.m-gray-bg {
			height: 20rpx;
			background-color: #f5f5f5;
		}
		.m-cnt {
			padding: 40rpx;
			font-size: 30rpx;
			&-title {
				padding-bottom: 16rpx;
				color: #000;
				font-size: 36rpx;
				font-weight: bold;
			}
			&-item {
				display: flex;
				margin-top: 24rpx;
				&-label {
					color: #000;
				}
				&-value {
					flex: 1;
					margin-left: 30rpx;
					color: #888;
				}
			}
		}
	}
</style>
