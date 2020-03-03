<template>
	<view class="m-container">
		<image class="m-bg" src="../../static/logo.png" mode="aspectFit"></image>
		<view class="m-service">
			<view class="m-service-hd">
				<view class="m-service-hd-lf">服务</view>
				<view class="m-service-hd-rt">服务指南</view>
			</view>
			<view class="m-service-lists">
				<view class="m-service-lists-item">1</view>
				<view class="m-service-lists-item blue">2</view>
				<view class="m-service-lists-item light-green">3</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.m-container {
		background-color: #fff;
		.m-bg {
			width: 100%;
			height: 316rpx;
		}
		.m-service {
			padding: 70rpx 40rpx;
			&-hd {
				display: flex;
				align-items: center;
				justify-content: space-between;
				&-lf {
					color: #9ea5ba;
					font-size: $uni-font-size-base;
				}
				&-rt {
					color: #9ea5ba;
					font-size: 30rpx;
				}
			}
			&-lists {
				display: flex;
				align-items: center;
				justify-content: space-around;
				margin-top: 30rpx;
				&-item {
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 210rpx;
					height: 210rpx;
					color: #fff;
					font-size: 30rpx;
					background-color: #2d5afe;
					box-shadow: 0 16rpx 24rpx rgba(45, 90, 254, .4);
					&::after {
						content: "";
						position: absolute;
						top: 0;
						left: 0;
						border: 1px solid #0032e7;
						-webkit-box-sizing: border-box;
						box-sizing: border-box;
						width: 200%;
						height: 200%;
						-webkit-transform: scale(0.5);
						transform: scale(0.5);
						-webkit-transform-origin: left top;
						transform-origin: left top;
					}
					&.blue {
						background-color: #2e87fe;
					}
					&.light-green {
						background-color: #2eadfe;
					}
				}
			}
		}
	}
</style>
