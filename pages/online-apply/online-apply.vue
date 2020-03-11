<template>
	<view class="m-container">
		<!-- 纠纷事项 -->
		<view class="m-case-item">
			<view class="m-case-item-hd">纠纷事项</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">纠纷类型</text>
				<view class="m-case-item-form-item-input">
					<picker class="m-picker" @change="bindPickerChange" :value="index" :range="array">
						<view class="m-picker-input">{{ array[index] }}</view>
					</picker>
					<text class="iconfont arrow-right"></text>
				</view>
			</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">案发区域</text>
				<view class="m-case-item-form-item-input">
					<picker class="m-picker" @change="bindPickerChange" :value="index" :range="array">
						<view class="m-picker-input">{{ array[index] }}</view>
					</picker>
					<text class="iconfont arrow-right"></text>
				</view>
			</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">详细地址</text>
				<view class="m-case-item-form-item-input"><input class="m-picker" @input="handleAddressChange" /></view>
			</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">纠纷描述</text>
				<view class="m-case-item-form-item-input"><input class="m-picker" @input="handleIntroChange" /></view>
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
				<view class="m-case-item-form-item-input"><input class="m-picker" @input="handleNameChange" /></view>
			</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">联系电话</text>
				<view class="m-case-item-form-item-input"><input class="m-picker" @input="handleTelChange" /></view>
			</view>
		</view>
		<!-- 申请人 -->
		<view class="m-case-item">
			<view class="m-case-item-hd">被申请人</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">姓名</text>
				<view class="m-case-item-form-item-input"><input class="m-picker" @input="handleName1Change" /></view>
			</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">联系电话</text>
				<view class="m-case-item-form-item-input"><input class="m-picker" @input="handleTel1Change" /></view>
			</view>
			<view class="m-case-item-form-item">
				<text class="m-case-item-form-item-label">验证码</text>
				<view class="m-case-item-form-item-input">
					<input class="m-picker" @input="handleCodeChange" />
					<view class="m-count" v-if="isCountNum">请{{countNum}}秒后再试</view>
					<view class="m-code" v-else @click="getCode()">获取验证码</view>
				</view>
			</view>
		</view>
		
		<view class="m-foot">
			<button type="primary">提交</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			array: ['中国', '美国', '巴西', '日本'],
			index: 0,
			address: '',
			intro: '',
			videoSrc: '',
			name: '',
			phone: '',
			name1: '',
			phone1: '',
			code:　'',
			countNum: 10,
			isCountNum: false
		};
	},
	methods: {
		bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.index = e.target.value;
		},
		handleAddressChange: function(event) {
			this.address = event.target.value;
		},
		handleIntroChange(event) {
			this.intro = event.target.value;
		},
		handleNameChange(event) {
			this.name = event.target.value;
		},
		handleTelChange(event) {
			this.phone = event.target.value;
		},
		handleName1Change(event) {
			this.name1 = event.target.value;
		},
		handleTel1Change(event) {
			this.phone1 = event.target.value;
		},
		handleCodeChange(event) {
			this.code = event.target.value;
		},
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
		getCode() {
			uni.showModal({
				showCancel: false,
				content: '验证码已发送，请注意查收',
			})
			this.countNumDown();
		},
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
				z-index: 1000;
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
