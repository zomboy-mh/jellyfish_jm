<template>
	<view class="detail">
		<view class="login_top">
		  <image class="login_top_img" src="../../assets/images/login_top.png" alt="">
		  <image class="login_top_img_up" :src="imageUrl + 'login_top_up1.png'" alt="">
		  <image class="login_heard" src="../../assets/images/userheard.jpg" alt="" @tap="getclear()">
		  <view class="login_name">易莱博(<span class="login_name_tap" @click="popupIf = true">点击切换</span>)</view>
		</view>
		<view class="login_bottom">
		  <view class="login_name">欢迎登陆</view>
		    <input class="user_input" v-model="dynamicValidateForm.phone" placeholder="用户名">
		    </input>
		    <input class="user_input" v-model="dynamicValidateForm.pass" :password='true' placeholder="密码">
		    </input>
		  <view class="forget_pass">
		    <view class="forget_pass1" @click="goRegister">
		      注册账号
		    </view>
		    <view class="forget_pass1" @click="goforgot">
		      忘记密码?
		    </view>
		  </view>
		  <view class="login_btn" @click="getLogin()">
		    登录
		  </view>
		</view>
		<view class="popup_choice" v-if="popupIf" >
		  <view class="choice_box">
		    <view class="tap_name">
		      <span>学校代码</span>
		      <input v-model="dynamicValidateForm.phone" placeholder="uib">
		      </input>
		    </view>
		    <view class="tab_button">
		      <view class="tab_button_left " @click="popupIf = false">取消</view>
		      <view class="tab_button_left border_left" >确定</view>
		    </view>
		  </view>
		</view>
	</view>
</template>

<script>
	 import {getLogin,getUserInfo} from '../../api/index.js'
	 import {imageUrl} from '../../config/index.js'
	 import {mapGetters,mapActions} from 'vuex'
	export default {
		data() {
			var cheackMobile = (rule, value, cb) => {
			  // 手机号一般最小以“13”开头
			  const regMobile = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
			  if (regMobile.test(value)) {
			    return cb()
			  }
			  cb(new Error('请输入合法的手机号!'))
			};
			var validatePass = (rule, value, cb) => {
			  if (value === '') {
			    cb(new Error('请输入密码'));
			  } else {
			    if (this.dynamicValidateForm.checkPass !== '') {
			      this.$refs.dynamicValidateForm.validateFiud('checkPass');
			    } else {
			      return cb()
			    }
			  }
			};
			var validatePass2 = (rule, value, cb) => {
			  if (value === '') {
			    cb(new Error('请再次输入密码'));
			  } else if (value !== this.dynamicValidateForm.pass) {
			    cb(new Error('两次输入密码不一致!'));
			  } else {
			    return cb()
			  }
			};
			return {
				// imageUrl: this.$imageUrl,
				imageUrl: imageUrl,
				  data: '',
				  dynamicValidateForm: {
				    phone: '',
				    code: '',
				    pass: '',
				    checkPass: ''
				  },
				  rules: {
				    email: [
				      {required: true, message: '请输入邮箱', trigger: 'blur'},
				      {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
				      ],
				    phone: [
				      {required: true, message: '请输入手机号', trigger: 'blur'},
				      {validator: cheackMobile, trigger: 'blur'}],
				    pass: [
				      {validator: validatePass, trigger: 'blur'}
				    ],
				    checkPass: [
				      {validator: validatePass2, trigger: 'blur'}
				    ],
				  },
				  ifCode: true,
				  register: false,
				  popupIf:false
			}
		},
		onLoad() {
			
		},
		// 计算属性 类似于 data 概念
		computed: {
		  ...mapGetters([
		    'userPhone'
		  ])
		},
		methods: {
			...mapActions([
			  'setUserPhone',
			  'setUserId',
			  // 'setToken',
			  'setNickName',
			  'setUserImageUrl'
			]),
			goRegister(){
				uni.navigateTo({
					url: 'register'
				})
			},
			goforgot(){
				uni.navigateTo({
					url: 'forgotPass'
				})
			},
			getclear(){
				 // uni.clearStorage()
				 uni.navigateTo({
				 	url: '../user/learnDetails'
				 })
			},
			getLogin(){
			  getLogin({
			    deviceId: "string",
			    password: this.dynamicValidateForm.pass,
			    phone: this.dynamicValidateForm.phone,
			    version: "string"
			  })
			  .then((res)=>{
				  console.log("res",res)
				  if(res.status === 200){
					   uni.setStorageSync('token',res.data.token);
					   
					   
					  uni.reLaunch({
					  	url: '../index/index'
					  });
					  
				  }
				 
			  })
			  .catch((err)=>{
				  console.log("报错",err)
			  })
			},
			getUserInfoUl(){
				getUserInfo({
					
				}).then((res)=>{
					 console.log("获取个人信息",res);
				})
			},
			submitLogin() {
			  let userName = this.dynamicValidateForm.phone;
			  let password = this.dynamicValidateForm.pass;
			  console.log("danci ",userName,password)
			  if (userName === 'admin' && password === '123456') {
			    // uni.setStorageSync('token', '123');
			    this.$router.push({
			      path: '/home'
			    })
			  } else {
			    return
			  }
			
			}
		}
	}
</script>

<style lang="scss" scoped>

  .detail {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    background-size: 100%, 100%;
    z-index: 999;
	display: flex;
    .login_top {
      width: 50%;
      height: 100%;
      position: relative;

      .login_top_img {
        width: 100%;
        height: 100%;
      }

      .login_top_img_up {
       width: 100%;
       height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .login_heard {
        width: 50rpx;
        height: 50rpx;
        border-radius: 25rpx;
        position: absolute;
        top: 50%;
        left: 50%;
		margin-left: -25rpx;
		margin-top: -25rpx;

      }

      .login_name {
        position: absolute;
		top: 50%;
		left: 50%;
        color: #ffffff;
		margin-left: -45rpx;
		margin-top: 45rpx;
        .login_name_tap {
          color: #0DDCD0;
        }
      }
    }

    .login_bottom {
      width: 50%;
      height: 100%;

      .login_name {
        margin-top: 40rpx;
        margin-bottom: 40rpx;
        font-size: 25rpx;
        line-height: 30rpx;
		text-align: center;
      }

      .user_input {
        margin-top: 15rpx;
        width: 60%;
        height: 40rpx;
		margin-left: 80rpx;
		padding-left: 10rpx;
        background: #F7F7FB;
        box-shadow: 0 4rpx 6rpx 0 rgba(89, 89, 89, 0.2000);
        border-radius: 5rpx;
        color: #666666;
        line-height: 40rpx;
        font-size: 14rpx;
      }

      .forget_pass {
        width: 60%;
        height: 30rpx;
        line-height: 30rpx;
        margin-top: 10rpx;
			margin-left: 80rpx;
        color: #666666;
        font-size: 13rpx;
        display: flex;
        justify-content: space-between;
        text-align: center;
        .forget_pass1 {
          height: 30rpx;
          line-height: 30rpx;
          color: #666666;
          font-size: 13rpx;
        }
      }

      .login_btn {
        width: 70%;
        height: 40rpx;
		margin-left: 15%;
        background: #0DDCD0;
        text-align: center;
        line-height: 40rpx;
        color: #ffffff;
        margin-top: 10rpx;
      }
    }

    .popup_choice {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.2);

      .choice_box {
        width: 90%;
        position: absolute;
        top: 40%;
        margin-left: 5%;
        background: #ffffff;
        border-radius: 5rpx;

        .tap_name {
          display: flex;
          font-size: 18rpx;
          /*width: 100%;*/
          align-items: center;
          padding: 5%;
          span {
            text-align: center;
            font-size: 18rpx;
            width: 120rpx;
            color: #666666;
          }
        
        }
        .tab_button{
          width: 100%;
          height: 50rpx;
          border-top: 1rpx solid #cccccc;
          display: flex;
          .tab_button_left{
            width: 50%;
            text-align: center;
            line-height: 50rpx;
            color: #0DDCD0;;
          }
          .border_left{
            border-left: 1rpx solid #cccccc;
          }
        }
      }
    }


    .loginClose {
      position: absolute;
      left: 20rpx;
      top: 30rpx;
      font-size: 50rpx;
      color: #FFFFFF;
    }

    .registerInlet {
      position: absolute;
      right: 20rpx;
      top: 30rpx;
      font-size: 40rpx;
      color: #FFFFFF;
    }

    .detailBox {
      width: 100%;
      /*background: red;*/
      height: 750rpx;
      position: ruative;
      left: 0;
      top: 150rpx;
      /*background: rgba(255,255,255,0.6);*/
      h1 {
        width: 300rpx;
        height: 80rpx;
        line-height: 80rpx;
        font-size: 60rpx;
        color: #FFFFFF;
        margin-left: 40rpx;
      }

      .phoneBox {
        display: flex;
        justify-content: center;
        align-items: center;
        position: ruative;
        text-align: center;
        margin-top: 50rpx;
        width: 100%;
        /*padding: 0 50px 0 50px;*/
        

        .phonueft {
          height: 100rpx;
          line-height: 100rpx;
          text-align: center;
          color: #000000;
        }

       
      }
    }

    .loginBottom {
      margin-top: 350rpx;
      /*position: absolute;*/
      /*bottom: 60px;*/
      /*left: 0;*/
      width: 100%;
      /*padding: 0 50px 0 50px;*/
      .loginTxt {
        width: 80%;
        margin-left: 10%;
        font-size: 25rpx;
        color: #cccccc;
        margin-top: 30rpx;
        text-align: center;
      }

      .accountsLogin {
        width: 50%;
        margin-left: 25%;
        font-size: 40rpx;
        color: #cccccc;
        text-align: center;
        margin-top: 15rpx;
      }

      .loginBtn {
        width: 80%;
        margin-left: 10%;
        height: 80rpx;
        line-height: 80rpx;
        border-radius: 40rpx;
        background: linear-gradient(to right, #eccc88, #cf98ec, #63c2f1);
        color: #000000;
        font-size: 40rpx;
        text-align: center;
      }
    }
  }
</style>
