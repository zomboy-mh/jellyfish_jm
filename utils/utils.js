// 音频播放
// import Base64 from 'base-64';
export const Audio = uni.createInnerAudioContext();
import {chivoxParam} from '../api/index.js'

export function voiceStart(url) {
	return new Promise(function(resolve, reject) {
		//实例化声音
		Audio.autoplay = true;
		Audio.src = url; //音频地址

		// console.log("======url====="+url)
		let a = 1
		Audio.play(); //执行播放
		Audio.onPause(res => {
			
			resolve(res);
		});
		Audio.onEnded(res => {
			if(res!==undefined){
				resolve(res);
			}
			
		});

		Audio.onError((err) => {
			resolve('onError');
			console.log(err)
			// uni.showToast({
			// 	title: '音频播放失败',
			// 	duration: 1000
			// });
		});
	});
}

export const letterAudio = uni.createInnerAudioContext();

export function letterVoiceStart(url) {
	return new Promise(function(resolve, reject) {
		//实例化声音
		letterAudio.autoplay = true;
		letterAudio.src = url; //音频地址

		// console.log("======url====="+url)
		letterAudio.play(); //执行播放
		letterAudio.onPause(res => {
			
			resolve(res);
		});
		letterAudio.onEnded(res => {
			if(res!==undefined){
				resolve(res);
			}
			
		});

		letterAudio.onError((err) => {
			resolve('onError');
			console.log(err)
			// uni.showToast({
			// 	title: '音频播放失败',
			// 	duration: 1000
			// });
		});
	});
}

export function unloginEnCode(data) {
	let passcode = '1:@,2:$,3:-'
	let stra = passcode.split(",")
	let B = JSON.stringify(data)
	let value = Base64.encode(B)
	for (const str in stra) {
		let zhura = stra[str].split(":")
		value = value.replaceAll(zhura[0], zhura[1])
	}
	return value
}
export function unloginDeCode(data) {
	let passcode = '1:@,2:$,3:-'
	let stra = passcode.split(",")
	for (const str in stra){
	    let zhura = stra[str].split(":")
	    data = data.replaceAll(zhura[1], zhura[0])
	}
	 let encPass= Base64.decode(data); 
	 console.log("解码后",encPass)
	 let value = JSON.parse(encPass)
	return value
}
export function loginEnCode(data) {
	let passcode = '1:@,2:#,3:%,4:*,5:&,6:?,7:>,8:<,m:!'
	let stra = passcode.split(",")
	let a = {
		cls_id: data
	}
	let B = JSON.stringify(a)
	let value = Base64.encode(B)
	for (const str in stra) {
		let zhura = stra[str].split(":")
		value = value.replaceAll(zhura[0], zhura[1])
	}
	return value
}
export function loginDeCode(data) {
	let passcode = '1:@,2:#,3:%,4:*,5:&,6:?,7:>,8:<,m:!'
	let stra = passcode.split(",")
	for (const str in stra){
	    let zhura = stra[str].split(":")
	    data = data.replaceAll(zhura[1], zhura[0])
	}
	 let encPass= Base64.decode(data); 
	 let value = JSON.parse(encPass)
	return value
}

export function chivoxParamUl(urldatas) {
	let ress = ''
	chivoxParam().then((res)=>{
		ress = res.data;
		
		chivoxFeed1(ress,urldatas)
	})
	return ress
}

export function chivoxInit(data) {
	let applicationId = data.applicationId;
	let sig = data.sig;
	let alg = data.alg;
	let timestamp = data.timestamp;
	
	// 判断请求类型
	let headerData = {
		'Access-Control-Expose-Header': 'Set-Cookie',
	    'Content-Type': 'application/json;charset=utf-8'
	}
	let app = {
		"applicationId": applicationId,    // [必选] 由驰声提供的appKey。
		"sig": sig,                        // [必选] 签名字符串，通过签名算法 alg(appKey + timestamp + appSecret) 生成。
		"alg": alg,                    // [必选] 生成sig的签名算法
		"timestamp": timestamp,            // [必选] 生成签名的UNIX时间戳，单位：毫秒
	}
	let datas = {
		'tokenId': uni.getStorageSync('token'),
		'audio': {
		    "audioType": "mp3",     // 音频格式
		    "channel": 1,            // 声道数
		    "sampleBytes": 2,        // 采样字节
		    "sampleRate": 16000     // 采样率
		  },
		  'app':{
		  	"applicationId": applicationId,    // [必选] 由驰声提供的appKey。
		  	"sig": sig,                        // [必选] 签名字符串，通过签名算法 alg(appKey + timestamp + appSecret) 生成。
		  	"alg": alg,                    // [必选] 生成sig的签名算法
		  	"timestamp": timestamp,            // [必选] 生成签名的UNIX时间戳，单位：毫秒
		  },
		  'request': {
		  	coreType: 'en.sent.pron',
		  	// refText: this.refText,
		  	refText: "I want to know the past and present of Hong Kong",
		  	rank: 100,
		  	attachAudioUrl: 1
		  }
	}
	
	return new Promise((resolve, reject) => {
	    let url = 'https://eval.cloud.chivox.com/aieval/init?ver=2&appKey=16087097830000e7'; //请求的网络地址和局地的api地址组合
		
		// fetch('https://eval.cloud.chivox.com/aieval/init?ver=2&appKey=16087097830000e7', {
		// 	  method: 'POST',
		// 	  credentials: 'include',
		// 	  headers: {
		// 		'Content-Type': 'application/json;charset=utf-8'
		// 		},
		// 	  body: JSON.stringify(datas),
		// 	}
		// ).then(response => response.json())
		//   .then(data => console.log(data))
		//   .catch(error => console.error(error));
	    uni.request({
	        url: url,
	        data: datas,
	        method: 'POST',
	        header: headerData,
			withCredentials: true,
			mode: 'cors',
	        success: (res) => {
				console.log("111",res)
				
				// chivoxFeed(res.data.accessToken)
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

export function chivoxFeed(data) {
	console.log("accessToken",data)
	let accessToken = data;
	let headerData = {
	    'Content-Type': 'multipart/form-data'
	}
	let datas = {
		'feed':{
		},
		'data':{
		}
	}
	
	return new Promise((resolve, reject) => {
	    let url = 'https://eval.cloud.chivox.com/aieval/record/feed?ver=2&appKey=16087097830000e7&accessToken='+accessToken; //请求的网络地址和局地的api地址组合
		
	    uni.request({
	        url: url,
	        data: datas,
	        method: 'POST',
	        header: headerData,
		
	        success: (res) => {
				chivoxFeed(res.data.accessToken)
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

export function chivoxFeed1(data,urldatas) {
	
	// 创建 WebSocket 连接 
	var socketTask = uni.connectSocket({
		url: 'wss://cloud.chivox.com/ws?e=0&t=0&version=2', 
		header: {
			'content-type': 'application/json'
		},
		success(res) {
			console.log('WebSocket连接成功！',res); 
		}
	}) 
	
	// 监听 WebSocket 连接打开事件
	socketTask.onOpen(function (res) {
		
			let chivox = data;
			var verificationJson = '{"app":{"applicationId":"' + chivox.app.applicationId + '", "sig": "' + chivox.app.sig + '","alg": "' + chivox.app.alg + '","timestamp":"' + chivox.app.timestamp + '", "userId": "' + chivox.app.userId + '"}}';
			socketTask.send({
				data : verificationJson,
				success(res) {
					console.log('弛声校验成功',res)
				},
			})
			
			let datas = {
				'tokenId': uni.getStorageSync('token'),
				'audio': {
				    "audioType": "mp3",     // 音频格式
				    "channel": 1,            // 声道数
				    "sampleBytes": 2,        // 采样字节
				    "sampleRate": 16000     // 采样率
				  },
				  'request': {
				  	'coreType': 'en.sent.pron',
				  	// refText: this.refText,
				  	'refText': 'this is a apple',
				  	'rank': 100,
				  	'attachAudioUrl': 1
				  }
			}
			socketTask.send({
				data : JSON.stringify(datas),
				success(res) {
					console.log('发送评分请求成功',res)
				},
			})
			socketTask.send({
				data : urldatas,
				success(res) {
					console.log('传输音频',res)
				},
			})
		
	}) 
	// 监听 WebSocket 接收到服务器的消息事件 
	socketTask.onMessage(function (res) { console.log('WebSocket收到消息：' + res.data); }) 
	// 监听 WebSocket 错误事件 
	socketTask.onError(function (res) { console.log('WebSocket连接错误！'); }) 
	// 监听 WebSocket 连接关闭事件 
	socketTask.onClose(function () { console.log('WebSocket已关闭！'); })
}