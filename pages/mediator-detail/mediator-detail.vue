<template>
	<view class="m-container">
		<view class="m-hd">
			<view class="m-hd-avatar"><view class="m-hd-avatar-img" :style="{ backgroundImage: 'url(/static/image/project.png)' }"></view></view>
			<view class="m-hd-cnt">
				<view class="m-hd-cnt-title">姓名</view>
				<view class="m-intro-item-box">
					<view class="m-intro-item">
						<view class="m-intro-item-label">调解区域</view>
						<view class="m-intro-item-value">西安市 蓝田县</view>
					</view>
					<view class="m-intro-item">
						<view class="m-intro-item-label">机构认证</view>
						<view class="m-intro-item-value">白云街道人民调解委员会</view>
					</view>
					<view class="m-intro-item">
						<view class="m-intro-item-label">擅长领域</view>
						<view class="m-intro-item-value">邻里纠纷 婚姻纠纷</view>
					</view>
					<view class="m-intro-item">
						<view class="m-intro-item-label">调解数量</view>
						<view class="m-intro-item-value">已调解 31</view>
					</view>
				</view>
			</view>
		</view>
		<view class="m-cnt">
			<view class="m-cnt-title">个人简介</view>
			<view class="m-cnt-text">
				"从事调解工作7年，总计调解案件超过300件，被评为白云街道优秀调解员，被评为蓝田县模范标兵
				从事调解工作7年，总计调解案件超过300件，被评为白云街道优秀调解员，被评为蓝田县模范标兵"
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad(option) {
		console.log(option);
	}
};
</script>

<style lang="scss">
page {
	background-color: #056efe;
}
.m-container {
	padding: 0 60rpx;
}
.m-hd {
	&-avatar {
		position: relative;
		&-img {
			width: 244rpx;
			height: 324rpx;
			margin: 0 auto;
			margin-top: 60rpx;
		}
	}
	&-cnt {
		height: 400rpx;
		margin-top: -225rpx;
		padding-top: 260rpx;
		background-color: #fff;
		&-title {
			color: #000;
			font-size: 40rpx;
			font-weight: bold;
			text-align: center;
		}
		.m-intro-item-box {
			padding: 0 60rpx;
			padding-top: 44rpx;
		}
		.m-intro-item {
			display: flex;
			align-items: center;
			&:not(:first-child) {
				margin-top: 24rpx;
			}
			&-label {
				position: relative;
				padding: 8rpx 12rpx;
				color: #056efe;
				font-size: 26rpx;
				&::after {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					border: 1px solid #056efe;
					-webkit-box-sizing: border-box;
					box-sizing: border-box;
					width: 200%;
					height: 200%;
					-webkit-transform: scale(0.5);
					transform: scale(0.5);
					-webkit-transform-origin: left top;
					transform-origin: left top;
				}
			}
			&-value {
				flex: 1;
				width: 100rpx;
				height: 50rpx;
				line-height: 50rpx;
				padding-left: 24rpx;
				color: #000;
				font-size: 26rpx;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}
	}
}
.m-cnt {
	margin-top: 40rpx;
	margin-bottom: 30rpx;
	padding: 60rpx;
	background-color: #fff;
	&-title {
		color: #000;
		font-size: 34rpx;
		font-weight: bold;
	}
	&-text {
		margin-top: 35rpx;
		line-height: 48rpx;
		color: #888;
		font-size: 28rpx;
	}
}
</style>
