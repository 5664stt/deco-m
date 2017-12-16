<template>
	<div id="enterprise" class="enterprise">
		<!--头部-->
		<!-- <div class="enterprise-header clearfix">
			<span class="iconfont fl">&#xe601;</span>
			<h2 class="header-text fl">知名企业</h2>
			<span class="iconfont fr">&#xe63f;</span>
		</div> -->
		<div class="enterprise-box">
			<ul>
				<li class="clearfix"v-for="enterprise in msg">
					<div class="enterprise-img fl">
						 <img src="../../assets/jiaju.png"/><br/>
						<span>
     	   		  	  	 已有<span class="numConsult">0</span>人咨询
						</span>
					</div>
					<div class="company fl">
						<h3>公司名称</h3>
						<div class="">
							<span class="approve approveY">营</span>
							<span class="approve approveR">认</span>
							<span class="approve approveH">惠</span>
							<span class="approve approveJ">金</span>
							<span>5000元</span>
							<span class="approve approveS">设</span>
							<span>50套</span>
						</div>
					</div>

					<span class="enterprise-btn fl">
						    装修预约
					</span>
				</li>
				<li class="clearfix">
					<div class="enterprise-img fl">
						 <img src="../../assets/jiaju.png"/><br/>
						<span>
     	   		  	  	 已有<span class="numConsult">0</span>人咨询
						</span>
					</div>
					<div class="company fl">
						<h3>公司名称</h3>
						<div class="">
							<span class="approve approveY">营</span>
							<span class="approve approveR">认</span>
							<span class="approve approveH">惠</span>
							<span class="approve approveJ">金</span>
							<span>5000元</span>
							<span class="approve approveS">设</span>
							<span>50套</span>
						</div>
					</div>

					<span class="enterprise-btn fl">
						    装修预约
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: "enterprise",
		data: () => ({
           msg:{},
		}),
		mounted: function() {
			beforeCreate: {
				// this.$http({
				// 	url: "",
				// 	method: "POST",
        //
				// 	// 请求后台发送的数据
				// 	params: {
				// 		data: {
        //
				// 		}
				// 	},
				// 	// 设置请求头
				// 	headers: {
				// 		"Content-Type": "x-www-from-urlencoded"
				// 	}
				// }).then(function(res) {
				// 	// 请求成功回调
				// 	console.log(JSON.stringify(res.data));
				// 	this.msg = res.data;
				// 	//console.log(this.msg.companyArray)
				// }, function(res) {
				// 	// 请求失败回调
				// 	console.log("error from 知名企业enterprise.vue");
				// });
			}
		}

	}
</script>
<style lang="scss" scoped>
	@import "./../../css/unit/common";
	.clearfix:after {
		content: "";
		display: block;
		visibility: hidden;
		height: 0;
		clear: both;
	}

	.clearfix {
		zoom: 1;
	}

	.fl {
		float: left;
	}

	.fr {
		float: right;
	}
	.enterprise{
		background-color: #FFFFFF;
	}
	.enterprise-header {
		text-align: center;
		border-bottom: 2px solid #cccccc;
		padding: .333rem 0;

		.header-text {
			text-align: center;
			width: 80%;
		}
		span{
			color: $green;
			width:10%;
			font-size: 0.896rem;
		}
	}

	.enterprise-box {
		ul {
			padding: 0 0 .333rem .333rem;
			li {
				height: 3.44rem;
				border-bottom: 1px solid #cccccc;
				.enterprise-img{
					 color: #666666;
					 font-size: .364rem;
					 .numConsult {
			        color: $orange;
		             }
		             img{
		             	margin-top: .32rem;
		             	width:1.79rem ;
		             	border: 1px solid #ccc;
		             }
				}
				.enterprise-btn{
					background-color: $orange;
					padding: .133rem;
					color: #FFFFFF;
					margin-top: 1rem;
					border-radius: .119rem;
				}
				.company{
					padding: .333rem;
					margin-top: .233rem;
					h3{
						  margin-bottom: .233rem;
					}
					 .approve{
					 	  color: #FFFFFF;
					 	  width: .5rem;
					 	  height: .5rem;
					 	  text-align: center;
					 	  line-height: .5rem;
					 	  margin-right: .08rem;
					 	  padding: .08rem;
					 }
					 .approveY{
					 	  background-color:#76ccd3 ;
					 }
					 .approveR{
					 	  background-color:#fca667 ;
					 }
					 .approveH{
					 	  background-color:#bebebe ;
					 }
					 .approveJ{
					 	  background-color:#e4bc76 ;
					 	  margin-right: 0;
					 }
					 .approveS{
					 	  background-color:$green ;
					 }
				}
			}
		}

	}
</style>
