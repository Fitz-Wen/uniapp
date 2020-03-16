<template>
	<view class="m-container">
		<!-- 纠纷事项 -->
		<view class="m-case-item">
			<view class="m-case-item-hd">纠纷事项</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">纠纷类型</text>
				<view class="m-case-item-form-item-input">
					<picker class="m-picker" @change="bindDisCateChange" range-key="name" 
						:value="disCateindex" :range="disputeCategoryLists">
						<view class="m-picker-input" v-if="disputeCategoryLists[disCateindex] && disputeCategoryLists[disCateindex]['name']">{{ disputeCategoryLists[disCateindex]['name'] }}</view>
					</picker>
					<text class="iconfont arrow-right"></text>
				</view>
			</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">案发区域</text>
				<view class="m-case-item-form-item-input">
					<picker class="m-picker" 
						mode="multiSelector"
						@columnchange="bindMultiPickerColumnChange" 
						range-key="name"
						:value="zoneSelectIndex" 
						:range="zoneLists">
						<view class="m-picker-input">
							<text v-if="zoneLists[0][zoneSelectIndex[0]] && zoneLists[0][zoneSelectIndex[0]]['name']">{{zoneLists[0][zoneSelectIndex[0]]['name']}},</text>
							<text v-if="zoneLists[1][zoneSelectIndex[1]] && zoneLists[1][zoneSelectIndex[1]]['name']">{{zoneLists[1][zoneSelectIndex[1]]['name']}}，</text>
							<text v-if="zoneLists[2][zoneSelectIndex[2]] && zoneLists[2][zoneSelectIndex[2]]['name']">{{zoneLists[2][zoneSelectIndex[2]]['name']}}</text>
						</view>
					</picker>
					<text class="iconfont arrow-right"></text>
				</view>
			</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">详细地址</text>
				<view class="m-case-item-form-item-input">
					<input class="m-picker" v-model="formParam.address" />
				</view>
			</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">纠纷描述</text>
				<view class="m-case-item-form-item-input">
					<input class="m-picker" v-model="formParam.intro"/></view>
			</view>
			<view class="m-case-item-form-item">
				<view class="m-case-item-form-item-label">
					<view>上传附件</view>
					<view style="font-size: 26rpx;">上传视频，以描述您的纠纷</view>
				</view>
				<view class="m-case-item-form-item-input" @click="uploadVideo()">
					<text></text>
					<text class="iconfont arrow-right"></text>
				</view>
			</view>
		</view>
		<!-- 被申请人 -->
		<view class="m-case-item">
			<view class="m-case-item-hd">被申请人</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">姓名</text>
				<view class="m-case-item-form-item-input">
					<input class="m-picker" v-model="formParam.name" /></view>
			</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">联系电话</text>
				<view class="m-case-item-form-item-input">
					<input class="m-picker" v-model="formParam.phone" />
				</view>
			</view>
		</view>
		<!-- 申请人 -->
		<view class="m-case-item">
			<view class="m-case-item-hd">被申请人</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">姓名</text>
				<view class="m-case-item-form-item-input">
					<input class="m-picker" v-model="formParam.name1" />
				</view>
			</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">联系电话</text>
				<view class="m-case-item-form-item-input">
					<input class="m-picker" v-model="formParam.phone1" />
				</view>
			</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">验证码</text>
				<view class="m-case-item-form-item-input">
					<input class="m-picker" v-model="code" />
					<view class="m-count" v-if="isCountNum">请{{countNum}}秒后再试</view>
					<view class="m-code" v-else @click="getCode()">获取验证码</view>
				</view>
			</view>
		</view>
		
		<view class="m-foot">
			<button type="primary" @click="submit()">提交</button>
		</view>
	</view>
</template>

<script>
	import API from '../../static/js/request.js';
export default {
	data() {
		return {
			disputeCategoryLists: [],
			disCateindex: 0,
			code:　'',
			countNum: 30,
			isCountNum: false,
			
			zoneLists: [[], [], []],
			zoneSelectIndex: [0, 0, 0],
			dataMap: new Map(),
			formParam: {
				disCateType: '',
				zoneSelectIndex: [],
				address: '',
				intro: '',
				name: '',
				phone: '',
				name1: '',
				phone1: ''
			}
		};
	},
	onLoad() {
		this.getDisputeCategory();
		this.getZone();
		if (uni.getStorageSync('APPLYINFO')) {
			console.log('__________________', uni.getStorageSync('APPLYINFO'))
			this.formParam = JSON.parse(uni.getStorageSync('APPLYINFO'));
		};
	},
	methods: {
		// 案发区域change事件
		bindMultiPickerColumnChange: function(e) {
			const column = e.detail.column;
			const value = e.detail.value;
			console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value);
			switch(column) {
				case 0: {
					const id = this.zoneLists[0][value].value;
					this.zoneLists[1] = this.dataMap.get(id);
					this.zoneLists[2] = this.dataMap.get(this.zoneLists[1][0].value);
					this.zoneSelectIndex.splice(0, 0, value);
					break;
				}
				case 1: {
					const id = this.zoneLists[1][value].value;
					this.zoneLists[2] = this.dataMap.get(id);
					this.zoneSelectIndex.splice(1, 0, value);
					break;
				}
				case 2: {
					this.zoneSelectIndex.splice(2, 0, value);
					break;
				}
				this.$forceUpdate();
			}
		},
		// 纠纷类型change事件
		bindDisCateChange(e) {
			console.log(e.target.value)
			this.disCateindex = e.target.value;
		},
		// 上传视频
		uploadVideo() {
			var self = this;
			uni.chooseVideo({
				count: 1,
				sourceType: ['camera', 'album'],
				success: function(res) {
					self.videoSrc = res.tempFilePath;
				}
			});
		},
		// 获取二维码
		getCode() {
			uni.showModal({
				showCancel: false,
				content: '验证码已发送，请注意查收',
			})
			this.countNumDown();
		},
		// 倒计时
		countNumDown() {
			this.isCountNum = true;
			setTimeout(() => {
				this.countNum--
				if (this.countNum > 0) {
					this.countNumDown();
				} else {
					this.isCountNum = false;
				}
			}, 1000)
		},
		// 获取纠纷类型
		getDisputeCategory() {
			API.getDisputeCategory()
				.then(res => {
					const result = res.children;
					this.disputeCategoryLists = result.map(item => {
						return {
							name: item.name,
							value: item.id
						}
					})
					if (this.formParam.disCateType) {
						this.disCateindex = this.formParam.disCateType;
					}
				})
		},
		// 案发区域
		getZone() {
			API.getZone().then(res => {
				console.log(res)
				const children = res.children;
				this.getCountMap(children);
				console.log('----------------------', this.dataMap);
				this.zoneLists[0] = this.dataMap.get('a5e3f072a3fb4bed94925103ba7dc00d');
				this.zoneLists[1] = this.dataMap.get('f27043548e004ee491fd4f2ff338dfb0');
				this.zoneLists[2] = this.dataMap.get('b214e85c94764ce4a686dae1d538ad44');
				if (this.formParam.zoneSelectIndex && this.formParam.zoneSelectIndex.length > 0) {
					this.zoneSelectIndex = this.formParam.zoneSelectIndex;
				}
				this.$forceUpdate();
			})
		},
		// 数据格式化
		getCountMap(children) {
			const arr = []
			children.forEach(item => {
				const obj = {
					name: item.name,
					value: item.id
				}
				arr.push(obj);
				this.dataMap.set(item.parentId, arr);
				if (item.children) {
					this.getCountMap(item.children);
				}
			})
		},
		// 提交
		submit() {
			if (!this.code) {
				uni.showToast({
					icon: 'none',
					title: '请填写验证码'
				})
				return;
			}
			this.formParam.disCateType = this.disCateindex;
			this.formParam.zoneSelectIndex = this.zoneSelectIndex;
			console.log(this.formParam)
			uni.setStorageSync('APPLYINFO', JSON.stringify(this.formParam));
			uni.showToast({
				icon: 'success',
				title: '提交成功'
			});
			setTimeout(() => {
				uni.switchTab({
					url: '/pages/index/index'
				});
			}, 1000)
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #eee;
}
.m-container {
	.m-case-item {
		&-hd {
			padding: 0 30rpx;
			height: 100rpx;
			line-height: 100rpx;
			color: #888;
			font-size: 26rpx;
			background-color: #e7e7e7;
		}
		&-form-item {
			position: relative;
			display: flex;
			align-items: center;
			height: 96rpx;
			padding: 0 30rpx;
			background-color: #fff;
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
				z-index: -1;
			}
			&-label {
				color: #888;
				font-size: 32rpx;
			}
			&-input {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex: 1;
				margin-left: 50rpx;
				.m-picker {
					flex: 1;
					&-input {
						color: #000;
						font-size: 32rpx;
					}
				}
				.arrow-right {
					color: #c7c7c7;
					font-size: 16rpx;
				}
			}
			.m-code {
				color: #056efe;
				font-size: 32rpx;
			}
			.m-count {
				color: #999;
				font-size: 32rpx;
			}
		}
	}
	.m-foot {
		padding: 80rpx 40rpx 50rpx 40rpx;
	}
}
</style>
