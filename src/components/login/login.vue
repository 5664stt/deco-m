<template>
  <div id="login" class="login" :style="{'min-height': height}">
    <!-- <div class="close"><span class="iconfont">&#xe64e;</span></div> -->
    <div class="portrait"><img src="../../assets/pic-default.png"></div>
    <div class="text-box clear">
      <span class="text-title">账号</span>
      <input class="text" type="text" placeholder="用户名/手机号/邮箱" v-model="account">
    </div>
    <div class="text-box clear">
      <span class="text-title">密码</span>
      <input class="text" type="password" name="" placeholder="请输入密码" v-model="password">
    </div>
    <a class="submit" :class="{'act':account && password}" @click="submit">登录</a>
    <div class="clear">
    	<a class="forget">忘记密码?</a>
    	<router-link to="/mobileRegister" tag="li"><span class="register">手机注册</span></router-link>
    	<!--<a class="register">手机注册</a>-->
    </div>
    <!-- <p class="p-tit">第三方账号登录</p>
    <div class="third-party clear">
      <a class="qq-login"><span class="iconfont">&#xe672;</span><p>QQ登录</p></a>
      <a class="wx-login"><span class="iconfont">&#xe673;</span><p>微信登录</p></a>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "login",
  data: () => ({
		account: '',
    password: ''
  }),
  computed: {
    height: function () {
      return document.documentElement.clientHeight + 'px'
    },
    openId: function () {
      return localStorage.getItem('openId')
    },
    state: function () {
      return localStorage.getItem('state')
    }
  },
  methods: {
    // 账号密码登录
    submit: function () {
      if (this.account && this.password) {
        this.$http.post(this.serviceUrl + 'submitwx.jhtml', {wxbdopenId: this.id, username: this.account, password: this.password, openId: this.openId, state: this.state}).then((response) => {
          if (response.data.msg === 'true') {
            this.login = true
            this.$router.push('/')
          } else {
            this.tip = response.data.msg
          }
        }, () => {
          this.$indicator.close()
          this.tip = '提交失败'
        })
      }
    },
    // 微信登录（新注册用户）
    register: function () {
      this.$http.post(this.apiURL + 'registerwx.jhtml', {wxbdopenId: this.id, username: this.username, headimgurl: this.headimgurl, openId: this.openId, state: this.state}).then((response) => {
        if (response.data.msg === 'true') {
          this.login = true
          this.$router.push('/')
        }
      }, () => {
        this.tip = '注册失败'
      })
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./../../css/unit/common";
.clear {
	&:after {
		content: "";
		display: block;
		clear: both;
	}
}
.login {
	width: 100%;
	height: 100%;
	background: url(../../assets/login-bg.png) center no-repeat;
	background-size: cover;
}
.close {
	$height: 1.344rem;
	height: 1$height;
	line-height: $height;
	padding-left: 1.04rem;
	.iconfont{
		font-size: 0.64rem;
		color: #747475;
	}
}
.portrait {
	$width: 2.88rem;
	$height: 2.88rem;
	width: $width;
	height: $height;
	margin: 0 auto 0.75rem;
	border-radius: 50%;
	@include pic($width,$height);
}
.text-box{
  font-size: 0;
  border-bottom: 1px solid #E8E8E8;
  .text-title{
    display: inline-block;
    width: 2rem;
    font-size: 0.512rem;
    line-height: 1.4rem;
    text-align: center;
  }
  .text{
  	box-sizing: border-box;
    font-size: 0.512rem;
    width: 10rem;
    background-color: rgba(0,0,0,0);
    padding-left: 0.7rem;
  }
}
.submit{
  display: block;
  width: 11.1rem;
  margin: 0.8rem auto 0.6rem;
  font-size: 0.64rem;
  line-height: 1.5rem;
  text-align: center;
  background: #A3DFA3;
  color: #fff;
  border-radius: 0.1rem;
}
.submit.act {
	background: #4AAB2D;
}
.forget {
	float: left;
	margin-left: 0.45rem;
	font-size: 0.48rem;
}
.register {
	float: right;
	margin-right: 0.45rem;
	font-size: 0.48rem;
}
.p-tit {
	color: #747474;
	line-height: 3rem;
	text-align: center;
}
.third-party {
	$width: 1.7rem;
	$height: 1.7rem;
	padding: 0 3.44rem;
	font-size: 0.416rem;
	.qq-login {
		float: left;
		width: $width;
		height: $height;
		text-align: center;
		.iconfont {
			font-size: 1.4rem;
		}
	}
	.wx-login {
		float: right;
		width: $width;
		height: $height;
		text-align: center;
		.iconfont {
			font-size: 1.4rem;
		}
	}
}
</style>
