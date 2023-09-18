<template>
  <div class="detail">
    <loginHeader :title="headerName" ></loginHeader>
          <div class="phoneBox">
            <el-form :model="dynamicValidateForm" :rules="rules" ref="dynamicValidateForm" label-width="0px"
                     class="demo-dynamic">
              <el-form-item prop="phone" label="">
                <van-row>
                  <van-col :span="6">
                    <div class="phoneLeft">手机号</div>
                  </van-col>
                  <van-col :span="18">
                    <el-input v-model="dynamicValidateForm.phone" placeholder="请输入手机号">
                    </el-input>
                  </van-col>
                </van-row>
              </el-form-item>
              <el-form-item prop="code">
                <van-row>
                  <van-col :span="6">
                    <div  class="phoneLeft">验证码</div>
                  </van-col>
                  <van-col :span="12">
                    <el-input  v-model="dynamicValidateForm.code" placeholder="请输入验证码">
                    </el-input>
                  </van-col>
                  <van-col :span="6">
                    <div  class="phoneRight">获取验证码</div>
                  </van-col>
                </van-row>
              </el-form-item>
              <el-form-item prop="pass" >
                <van-row>
                  <van-col :span="6">
                    <div class="phoneLeft">新密码</div>
                  </van-col>
                  <van-col :span="18">
                    <el-input type="password" v-model="dynamicValidateForm.pass" show-password placeholder="请输入密码">
                    </el-input>
                  </van-col>
                </van-row>
              </el-form-item>
              <el-form-item prop="checkPass" >
                <van-row>
                  <van-col :span="6">
                    <div class="phoneLeft">确认新密码</div>
                  </van-col>
                  <van-col :span="18">
                    <el-input type="password" v-model="dynamicValidateForm.checkPass" show-password placeholder="密码为8-16位，含字母">
                    </el-input>
                  </van-col>
                </van-row>
              </el-form-item>
              <div class="passwordTps">请输入注册是使用的手机号码，输入验证码即可重设密码。</div>
            </el-form>
          </div>
    <div class="completeBtn" @click="getForgotPass">确认重置</div>
  </div>
</template>

<script>

  // 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json 文件，图片文件等等）
  import loginHeader from './loginHeader'
  import {getForgotPass}from'../../api/index'
  import {mapActions, mapGetters} from "vuex";
  export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {
      loginHeader
    },
    props: {},
    name: "forgotPass",
    data: function () {
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
            this.$refs.dynamicValidateForm.validateField('checkPass');
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
        headerName:'忘记密码',
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
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}],
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
      }
    },
    // 计算属性 类似于 data 概念
    computed: {
      ...mapGetters([
        'userPhone'
      ])
    },
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {
      ...mapActions([
        'setUserPhone',
        'setUserId',
        'setToken',
        'setNickName',
        'setUserImageUrl'
      ]),
      getForgotPass(){
        getForgotPass({
          code: "string",
          password: this.dynamicValidateForm.checkPass,
          phone: this.dynamicValidateForm.phone,
        }).then((res)=>{
          if(res.status===1001){
            this.setToken(res.data.token)
            this.$router.push('/user')
          }
        })
      }
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
    },
    beforeCreate() {
    },
    beforeMount() {
    }, // 生命周期 - 挂载之前
    beforeUpdate() {
    }, // 生命周期 - 更新之前
    updated() {
    }, // 生命周期 - 更新之后
    beforeDestroy() {
    }, // 生命周期 - 销毁之前
    destroyed() {
    }, // 生命周期 - 销毁完成
    activated() {
    } // 如果页面有 keep-alive 缓存功能,这个函数会触发
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  @import "../../assets/css/main";
  .phoneBox{
    .phoneLeft{
      text-align: center;
      line-height: 60px;
      font-size: 18px;
    }
    .phoneRight{
      text-align: center;
      line-height: 50px;
      font-size: 14px;
      background: #0DDCD0;
      color: #ffffff;
      height: 80%;
      margin-top: 5%;
      margin-right: 5%;
      border-radius: 4px;
    }
    .passwordTps{
      font-size: 15px;
      margin-top: 8px;
      margin-left: 10px;
      color: #BBBBBB;
    }
    ::v-deep .el-form-item{
      background: #ffffff;
      margin-top: 15px;
      margin-bottom: 0;
    }
    ::v-deep .el-input__inner {
      padding-left: 10px;
      margin: 0;
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      background: rgba(255, 255, 255, 0.01);
      border: none;
    }
  }
  .completeBtn{
    width: 90%;
    height: 60px;
    line-height: 60px;
    margin-left: 5%;
    text-align: center;
    color: #ffffff;
    background: #0DDCD0;
    margin-top: 60px;
  }
</style>
