import {
 
	VUE_APP_API_URL
 
} from '../config/index.js'
 
// 加载信息，带遮罩
let needLoadingRequestCount = 0;
let loadingTimer;
function showLoading(title = '', mask = true) {
	if (needLoadingRequestCount === 0) {
		uni.showLoading({
			title,
			mask
		});
 
		// 最长10s自动关闭
		loadingTimer = setTimeout(() => {
			if (needLoadingRequestCount > 0) {
				uni.hideLoading();
			}
		}, 10000);
	}
 
	needLoadingRequestCount++;
}
 
// 隐藏遮罩
 function hideLoading() {
	if (needLoadingRequestCount <= 0) return;
 
	needLoadingRequestCount--;
 
	if (needLoadingRequestCount === 0) {
        loadingTimer && clearTimeout(loadingTimer);
		uni.hideLoading();
	}
}
 
export const apiResquest = (urls,data) => { //prams 为我们需要调用的接口API的参数 下面会贴具体代码
 
  
 
    // 判断请求类型
    let headerData = {
		'token': uni.getStorageSync('token'),
        'content-type': 'application/json'
 
    }
    let dataObj = null
        //因为我们的GET和POST请求结构不同这里我们做处理，大家根据自己后台接口所需结构灵活做调整吧
	 dataObj = data
 
 //    if (prams.method === "GET") {
 
 //        headerData = {
 
 //            'content-type': 'application/json',
 
 //            'token': uni.getStorageSync('token')
 
 //        }
 
 //    } else {
	
 //        dataObj = prams.query
 
 //    }
 
    return new Promise((resolve, reject) => {
 
        let url = VUE_APP_API_URL + urls; //请求的网络地址和局地的api地址组合
 
        showLoading('加载中', true)
		hideLoading()
        uni.request({
 
            url: url,
 
            data: dataObj,
 
            method: 'POST',
 
            header: headerData,
 
            success: (res) => {
				
                if (res.data.status !== 200) {
 
                    uni.showToast({
 
                        title: '获取数据失败:' + res.data.msg,
 
                        duration: 1000,
 
                        icon: "none"
 
                    })
					if(res.data.status == 1020 ||res.data.status == 1021 ){
						uni.showToast({
						 
						    title: '请重新登录',
						 
						    duration: 1000,
						 
						    icon: "none"
						 
						})
						setTimeout(()=>{
							uni.reLaunch({
							    url: '/pages/logon/logon'
							})
						},1000)
					}
					
                    return;
					
                }
 
                resolve(res.data);
 
            },
 
            fail: (err) => {
 
                reject(err);
                console.log(err)
 
            },
 
            complete: () => {
              
            },
        });
    })
 
}

