<template>
	<view class="m-container">
		<view class="m-hd">
			<view class="m-hd-avatar"><view class="m-hd-avatar-img" 
				:style="{ backgroundImage: `url(${peopleBg})` }"></view></view>
			<view class="m-hd-cnt">
				<view class="m-hd-cnt-title">{{data.name}}</view>
				<view class="m-intro-item-box">
					<view class="m-intro-item">
						<view class="m-intro-item-label">调解区域</view>
						<view class="m-intro-item-value">{{data.DQBM}}</view>
					</view>
					<view class="m-intro-item">
						<view class="m-intro-item-label">机构认证</view>
						<view class="m-intro-item-value">{{data.practiceOrg}}</view>
					</view>
					<view class="m-intro-item">
						<view class="m-intro-item-label">擅长领域</view>
						<view class="m-intro-item-value">{{data.expertise}}</view>
					</view>
					<view class="m-intro-item">
						<view class="m-intro-item-label">调解数量</view>
						<view class="m-intro-item-value">已调解 {{data.sn}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="m-cnt">
			<view class="m-cnt-title">个人简介</view>
			<view class="m-cnt-text">
				{{data.intro ? data.intro : '暂无简介'}}
			</view>
		</view>
	</view>
</template>

<script>
import API from '../../static/js/request.js';
export default {
	data() {
		return {
			id: undefined,
			data: {}
		};
	},
	computed: {
		// 调获取解员头像
		peopleBg() {
			const url = 'http://shanxi.tunnel.homolo.org/service/rest/tk.File/'
			if (this.data.original && this.data.original.portrait) {
				return `${url}${this.data.original.portrait}/view`
			} else {
				return '/static/image/project.png'
			}
		}
	},
	onLoad(option) {
		const { id } = option;
		this.id = id;
		this.getDetail()
	},
	methods: {
		// 获取详情
		getDetail() {
			const param = {
				id: this.id
			}
			API.getMediatorInfo(param).then(res => {
				if (res.code === '1') {
					this.data = res.result;
				} else {
					uni.showToast({
						icon: 'none',
						title: res.description
					})
				}
			})
		}
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
