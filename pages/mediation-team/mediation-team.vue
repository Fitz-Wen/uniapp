<template>
	<view class="m-container">
		<view class="m-hd">
			<view class="m-hd-search">
				<text class="iconfont search"></text>
				<text class="text">查找调解员</text>
			</view>
		</view>
		<ms-dropdown-menu>
			<ms-dropdown-item v-model="value1" :list="areaLists" :top="40">
				<view slot="title">
					<view class="dropdown-item-title">
						<view class="title">{{ getDisplays(areaLists, value1) }}</view>
						<view class="iconfont drop-down"></view>
					</view>
				</view>
			</ms-dropdown-item>
			<ms-dropdown-item v-model="value2" :list="expertiseLists" :top="40">
				<view slot="title">
					<view class="dropdown-item-title">
						<view class="title">{{ getDisplays(expertiseLists, value2) }}</view>
						<view class="iconfont drop-down"></view>
					</view>
				</view>
			</ms-dropdown-item>
			<ms-dropdown-item v-model="value3" :list="yearLists" :top="40">
				<view slot="title">
					<view class="dropdown-item-title">
						<view class="title">{{ getDisplays(yearLists, value3) }}</view>
						<view class="iconfont drop-down"></view>
					</view>
				</view>
			</ms-dropdown-item>
		</ms-dropdown-menu>
		<view class="m-empty-box" v-if="peopleLists.length === 0"><view class="m-empty" :style="{ backgroundImage: 'url(/static/image/State_empty.png)' }"></view></view>
		<template v-else>
			<scroll-view scroll-y class="m-people-lists" :lower-threshold="200" @scrolltolower="loadMore()">
				<view class="m-people-lists-item" v-for="(item, index) in peopleLists" :key="index" @click="toDetail(item)">
					<view class="m-people-lists-item-lf" :style="{ backgroundImage: 'url(/static/image/project.png)' }"></view>
					<view class="m-people-lists-item-rt">
						<view class="m-people-lists-item-rt-title">{{ item.name }}</view>
						<view class="m-intro-item">
							<view class="m-intro-item-label">调解区域</view>
							<view class="m-intro-item-value">{{ item.DQBM }}</view>
						</view>
						<view class="m-intro-item">
							<view class="m-intro-item-label">机构认证</view>
							<view class="m-intro-item-value">{{ item.practiceOrg }}</view>
						</view>
						<view class="m-intro-item">
							<view class="m-intro-item-label">擅长领域</view>
							<view class="m-intro-item-value">{{ item.expertise }}</view>
						</view>
						<view class="m-intro-item">
							<view class="m-intro-item-label">调解数量</view>
							<view class="m-intro-item-value">已调解{{ item.sn }}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</template>
	</view>
</template>

<script>
import msDropdownMenu from '@/components/ms-dropdown/dropdown-menu.vue';
import msDropdownItem from '@/components/ms-dropdown/dropdown-item.vue';
import API from '../../static/js/request.js';
export default {
	components: {
		msDropdownItem,
		msDropdownMenu
	},
	data() {
		return {
			areaLists: [
				{
					text: '全部',
					value: 0
				},
				{
					text: '西安市',
					value: 1
				},
				{
					text: '宝鸡市',
					value: 2
				}
			],
			value1: '区域',
			expertiseLists: [
				{
					text: '全部',
					value: 0
				},
				{
					text: '民事',
					value: 1
				},
				{
					text: '经济',
					value: 2
				}
			],
			value2: '擅长领域',
			yearLists: [
				{
					text: '全部',
					value: 0
				},
				{
					text: '1年',
					value: 1
				},
				{
					text: '3年',
					value: 2
				}
			],
			value3: '从业年限',
			pageNo: 1,
			pageCount: void 0,
			peopleLists: []
		};
	},
	onLoad() {
		this.getListsData();
	},
	computed: {
		valueObj() {
			const {value1, value2, value3 } = this;
			return {
				value1,
				value2,
				value3
			}
		}
	},
	watch: {
		valueObj(val) {
			this.getListsData();
		}
	},
	methods: {
		getListsData() {
			const params = {
				dqbm: '',
				isBMYYT: false,
				pageSize: 10,
				pageNo: this.pageNo
			};
			API.searchMediatorList(params).then(res => {
				if (res.code === '1') {
					const data = res.result;
					const result = data.result;
					this.pageCount = data.pageCount;
					this.peopleLists = [...this.peopleLists, ...result];
				} else {
					uni.showToast({
						icon: 'none',
						title: res.description
					});
				}
			});
		},
		loadMore() {
			if (this.pageNo + 1 > this.pageCount) {
				uni.showToast({
					icon: 'none',
					title: '没有更多数据了'
				});
			} else {
				this.pageNo = this.pageNo + 1;
				this.getListsData();
			}
		},
		getDisplays(arr, key) {
			if (arr[key] && arr[key]['text']) {
				return arr[key]['text'];
			} else {
				return key;
			}
		},
		toDetail(item) {
			const id = item.id;
			uni.navigateTo({
				url: `/pages/mediator-detail/mediator-detail?id=${id}`
			});
		}
	}
};
</script>

<style lang="scss">
page {
	height: 100%;
	background-color: #f5f5f5;
}
.m-container {
	position: relative;
	height: 100%;
	.m-hd {
		padding: 0 40rpx;
		padding-top: 20rpx;
		background-color: #fff;
		&-search {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 70rpx;
			background-color: #f5f5f5;
			.search {
				font-size: 40rpx;
				color: #888;
			}
			.text {
				padding-left: 24rpx;
				font-size: 20rpx;
				color: #888;
			}
		}
	}
	.dropdown-item-title {
		display: flex;
		align-items: center;
		.drop-down {
			margin-left: 24rpx;
			color: #9ea5ba;
			font-size: 24rpx;
		}
	}
	.m-people-lists {
		height: calc(100vh - 290rpx);
		margin-top: 10rpx;
		// padding-bottom: 10rpx;
		background-color: #fff;
		overflow-y: auto;
		&-item {
			position: relative;
			padding: 40rpx;
			display: flex;
			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				border-bottom: 1px solid #e5e5e5;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				width: 200%;
				height: 200%;
				-webkit-transform: scale(0.5);
				transform: scale(0.5);
				-webkit-transform-origin: left top;
				transform-origin: left top;
			}
			&-lf {
				width: 207rpx;
				height: 287rpx;
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;
			}
			&-rt {
				flex: 1;
				padding-left: 32rpx;
				&-title {
					color: #000;
					font-size: 40rpx;
				}
				.m-intro-item {
					display: flex;
					align-items: center;
					margin-top: 8rpx;
					&-label {
						position: relative;
						padding: 8rpx 4rpx;
						color: #9ea5ba;
						font-size: 24rpx;
						&::after {
							content: '';
							position: absolute;
							top: 0;
							left: 0;
							border: 1px solid #cfe4ff;
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
	}
	.m-empty-box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%);
		.m-empty {
			width: 160rpx;
			height: 200rpx;
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
		}
	}
}
</style>
