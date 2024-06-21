<template>
    <div class="header">
      <div class="header-left" @click.stop="back">
        <img src="../../assets/images/banck.png" alt="">
      </div>
      <p class="header-title">{{title}}</p>
      <div class="header-right" @click="baocun">
        <div v-if="title === '个人信息'">保存</div>
      </div>
    </div>
</template>

<script>
  import {fillNameEmail} from '../../api/index'
export default {
  name: 'loginHeader',
  data () {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  methods: {
    changeTheme () {
      this.index++
      if (this.index >= this.themes.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themes[this.index])
    },
    back () {
      window.history.back()
    },
    baocun(){
      this.$parent.getFillNameEmail()
    }

  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    textList: {
      type: Array,
      default: () => [],
      required: true
    },
  }
}
</script>

<style scoped lang="scss">

  .header{
    width: 100%;
    height: 60px;
    background: #ffffff;
    //@include bg_color();
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    .header-left{
      width: 60px;
      height: 60px;
      line-height: 45px;
      margin-left: 10px;
      img{
        width: 30px;
        height: 30px;
      }
    }
    .header-right{
      width: 60px;
      height: 70px;
      font-size: 20px;
      //@include font_size($font_large);
      /*background: #000;*/
      /*color: #FFFFFF;*/
      color: #0DDCD0;
      line-height: 70px;
      margin-right: 20px;
    }
    .header-title{
      text-align: center;
      line-height: 100px;
      color: #000000;

      font-weight: bold;
      font-size: 22px;
      //@include font_size($font_large);
    }
  }
</style>
