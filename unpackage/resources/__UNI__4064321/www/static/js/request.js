
const request = function(url, data, method) {
	const baseUrl = 'http://shanxi.tunnel.homolo.org';
	return new Promise(reslove => {
		uni.showLoading();
		uni.request({
			url: baseUrl + url,
			data,
			method,
			success(res) {
				const data = res.data;
				reslove(res.data)
			},
			fail(err) {
				uni.showToast({
					title: err,
					icon: 'none'
				})
			},
			complete() {
				uni.hideLoading();
			}
		})
	})
}

const API = {
	get(url, data) {
		return request(url, data, 'GET');
	},
	post(url, data) {
		return request(url, data, 'POST');
	},
	// 调解队伍列表
	searchMediatorList(data) {
		const url = '/api/apiMediatorService/searchMediatorList';
		return this.get(url, data);
	},
	// 调解员详情
	getMediatorInfo(data) {
		const url = '/api/apiMediatorService/getMediatorInfo';
		return this.get(url, data);
	},
	// 节目详情
	getRepeatProgrammeInfo(data) {
		const url = '/api/helpOutService/getRepeatProgrammeInfo';
		return this.get(url, data);
	},
	// 纠纷类型
	getDisputeCategory() {
		const url = '/service/rest/mediation.Stb/6d936e2d7ca94bf8a887619f3022ff4d/getCategory';
		return this.get(url);
	},
	// 案发区域
	getZone() {
		const url = '/service/rest/tk.Zone/086/tree';
		return this.get(url);
	}
}
module.exports = API;