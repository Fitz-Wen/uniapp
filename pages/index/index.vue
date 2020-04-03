<template>
	<view class="m-container">
		<uni-swiper-dot :info="info" :current="current" :dotsStyles="dotsStyles">
			<swiper class="m-swiper" 
				:autoplay="true" 
				:interval="2000" 
				:duration="500"
				:circular="true"
				@change="swiperChange"
				>
				<swiper-item v-for="(item, index) in info" :key="index">
					<view class="m-banner-item" :style="{backgroundImage: 'url(' + item.url + ')'}"></view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<view class="m-service">
			<view class="m-service-hd">
				<view class="m-service-hd-lf">
					<view class="m-icon-box">
						<text class="iconfont service"></text>
					</view>
					服务
				</view>
				<!-- s -->
			</view>
			<view class="m-service-lists">
				<navigator class="m-service-lists-item" url="/pages/online-apply/online-apply">
						<view class="m-service-lists-item-icon">
							<text class="iconfont mediation"></text>
						</view>
						<view class="m-service-lists-item-title">
							在线调解
						</view>
				</navigator>
				<!-- <view class="m-service-lists-item blue">
					<view class="m-service-lists-item-icon">
						<text class="iconfont consulting"></text>
					</view>
					<view class="m-service-lists-item-title">
						留言咨询
					</view>
				</view> -->
				<navigator class="m-service-lists-item light-green" url="/pages/mediation-team/mediation-team">
					<view class="m-service-lists-item-icon">
						<text class="iconfont team"></text>
					</view>
					<view class="m-service-lists-item-title">
						调解队伍
					</view>
				</navigator>
			</view>
		</view>
		
		<view class="m-thematic">
			<view class="m-thematic-hd">
				<view class="m-icon-box">
					<text class="iconfont project"></text>
				</view>
				专题
			</view>
			<view class="m-thematic-cnt">
				<view class="m-thematic-cnt-item" @click="toDetail()">
					<view class="m-thematic-cnt-item-img" :style="{backgroundImage: 'url(/static/image/project.png)'}"></view>
					<view class="m-thematic-cnt-item-text">
						<view class="m-thematic-cnt-item-text-hd">
							帮忙有一套
						</view>
						<view class="m-thematic-cnt-item-text-ft">
							《帮忙有一套》电视节目预告、回访及直播。
						</view>
					</view>
				</view>
				<view class="m-thematic-cnt-item" @click="toDetail()">
					<view class="m-thematic-cnt-item-img" :style="{backgroundImage: 'url(/static/image/project.png)'}"></view>
					<view class="m-thematic-cnt-item-text">
						<view class="m-thematic-cnt-item-text-hd">
							帮忙有一套
						</view>
						<view class="m-thematic-cnt-item-text-ft">
							《帮忙有一套》电视节目预告、回访及直播。
						</view>
					</view>
				</view>
				<view class="m-thematic-cnt-item" @click="toDetail()">
					<view class="m-thematic-cnt-item-img" :style="{backgroundImage: 'url(/static/image/project.png)'}"></view>
					<view class="m-thematic-cnt-item-text">
						<view class="m-thematic-cnt-item-text-hd">
							帮忙有一套
						</view>
						<view class="m-thematic-cnt-item-text-ft">
							《帮忙有一套》电视节目预告、回访及直播。
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { uniSwiperDot } from '@dcloudio/uni-ui'
export default {
	data() {
		return {
			title: 'Hello',
			info: [
				{
					url: '/static/image/home_banner.png'
				},
				{
					url: '/static/image/home_banner.png'
				}
			],
			current: 0,
			dotsStyles: {
				width: 10,
				bottom: 0,
				backgroundColor: '#ecedf0',
				selectedBackgroundColor: '#9ea5ba'
			}
		};
	},
	components: {
		uniSwiperDot
	},
	onLoad() {},
	methods: {
		// 跳转到详情页
		toDetail() {
			uni.navigateTo({
				url: '/pages/news-detail/news-detail?id=0ca16c1c979a4895b1ae2a146773182e﻿'
			})
		},
		swiperChange(e) {
			this.current = e.detail.current;
		}
	}
};
</script>

<style lang="scss">
.m-container {
	background-color: #fff;
	.m-swiper {
		height: 315rpx;
		padding: 48rpx 0;
		box-sizing: border-box;
	}
	.m-banner-item {
		width: 100%;
		height: 100%;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.m-service {
		padding: 70rpx 40rpx;
		&-hd {
			display: flex;
			align-items: center;
			justify-content: space-between;
			&-lf {
				display: flex;
				align-items: center;
				color: #9ea5ba;
				font-size: 28rpx;
				.m-icon-box {
					width: 40rpx;
					height: 40rpx;
					margin-right: 16rpx;
					line-height: 40rpx;
					color: #fff;
					text-align: center;
					background-color: #9ea5ba;
				}
			}
			&-rt {
				color: #9ea5ba;
				font-size: 30rpx;
			}
		}
		&-lists {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 30rpx;
			&-item {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				width: 330rpx;
				height: 220rpx;
				color: #fff;
				font-size: 30rpx;
				background-color: #2d5afe;
				box-shadow: 0 16rpx 24rpx rgba(45, 90, 254, .4);
				&.blue {
					background-color: #2d5afe;
					&:active {
						background-color: rgb(0, 50, 231);
					}
					&::after {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						border: 1px solid #0032e7;
						-webkit-box-sizing: border-box;
						box-sizing: border-box;
						width: 200%;
						height: 200%;
						-webkit-transform: scale(.5);
						transform: scale(.5);
						-webkit-transform-origin: left top;
						transform-origin: left top;
					}
				}
				&.light-green {
					background-color: #s2eadfe;
					&:active {
						background-color: rgb(0, 156, 255);
					}
					&::after {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						border: 1px solid #009cff;
						-webkit-box-sizing: border-box;
						box-sizing: border-box;
						width: 200%;
						height: 200%;
						-webkit-transform: scale(.5);
						transform: scale(.5);
						-webkit-transform-origin: left top;
						transform-origin: left top;
					}
				}
				&-icon {
						width: 88rpx;
						height: 88rpx;
						line-height: 88rpx;
						text-align: center;
						border-radius: 50%;
						background-color: rgba(0, 0, 0, .2);
						.iconfont {
							font-size: 48rpx;
							color: #fff;
						}
				}
				&-title {
					margin-top: 8rpx;
					font-size: $uni-font-size-base;
					color: #fff;
				}
			}
		}
	}
	.m-thematic {
		padding: 0 40rpx;
		padding-bottom: 30rpx;
		&-hd {
			display: flex;
			align-items: center;
			color: #9ea5ba;
			font-size: 28rpx;
			.m-icon-box {
				width: 40rpx;
				height: 40rpx;
				margin-right: 16rpx;
				line-height: 40rpx;
				color: #fff;
				text-align: center;
				background-color: #9ea5ba;
			}
		}
		&-cnt {
			padding-top: 16rpx;
			&-item {
				display: flex;
				margin-top: 16rpx;
				padding: 30rpx;
				background-color: #f5f6fa;
				&-img {
					width: 160rpx;
					height: 160rpx;
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
				}
				&-text {
					flex: 1;
					padding-left: 24rpx;
					&-hd {
						height: 48rpx;
						line-height: 48rpx;
						color: #000;
						font-size: 34rpx;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					&-ft {
						margin-top: 20rpx;
						height: 76rpx;
						line-height: 38rpx;
						color: #888;
						font-size: 28rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						line-clamp: 2;
						-webkit-line-clamp: 2;
					}
				}
			}
		}
	}
}
// .m-swiper /deep/ .uni-swiper-dots-horizontal {
// 	left: 10%;
// }
// .m-swiper /deep/ .uni-swiper-dot {
// 	width: 50rpx;
// 	height: 8rpx;
// 	border-radius: 0;
// }
.m-container /deep/ .uni-swiper__dots-box {
	justify-content: flex-start;
	padding-left: 24rpx;
}
</style>
