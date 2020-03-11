<template>
	<view class="m-container">
		<video class="m-video" src="" controls></video>
		<view class="m-gray-bg"></view>
		<view class="m-cnt">
			<view class="m-cnt-title">节目详情</view>
			<view class="m-cnt-item">
				<view class="m-cnt-item-label">节目名称</view>
				<view class="m-cnt-item-value">帮忙有一套20190520电视调解</view>
			</view>
			<view class="m-cnt-item">
				<view class="m-cnt-item-label">直播时间</view>
				<view class="m-cnt-item-value">2019年5月20日 19:00</view>
			</view>
			<view class="m-cnt-item">
				<view class="m-cnt-item-label">节目时长</view>
				<view class="m-cnt-item-value">69分钟</view>
			</view>
			<view class="m-cnt-item">
				<view class="m-cnt-item-label">播放次数</view>
				<view class="m-cnt-item-value">213</view>
			</view>
			<view class="m-cnt-item">
				<view class="m-cnt-item-label">节目简介</view>
				<view class="m-cnt-item-value">Ant Design是一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的解决方案，让设计者专注于更好的用户体验。</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(option) {
			console.log(option)
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
