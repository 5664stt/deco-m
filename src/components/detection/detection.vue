<template>
	<div id="capacity" class="capacity">
		<!-- <div class="enterprise-header clearfix">
			<span class="iconfont fl">&#xe601;</span>
			<h2 class="header-text fl">家居检测</h2>
			<span class="iconfont fr">&#xe63f;</span>
		</div> -->
		<!-- 顶部轮播图 Start -->
		<div class="capacity-header">
			<swiper class="enterprise-count" :options="bannerSwiper1">
				<swiper-slide v-for="(enterpriseList,index) in msg.companyArray" :key="enterpriseList.key" class="enterprise-list" @click="tab(index)">
					<div class="pic1"><img :src="enterpriseList.logo" alt="" :style="{height: '1.224rem',width:'100%'}"></div>
				</swiper-slide>
			</swiper>
		</div>
		<div id="if(index==flag?'act':'')" v-for="content in msg.companyArray" :key="content"class="numCapacity">
			<!-- 大图banner Start -->
			<div class="banner-box">
				<div class="banner cont">
					<swiper class="banner-banner" :options="bannerSwiper2">
						<swiper-slide class="banner-list" v-for="bannerList in content.lunbo" :key="bannerList" :style="{backgroundImage: 'url(' + bannerList + ')'}">
						</swiper-slide>
						<div class="swiper-pagination" slot="pagination"></div>
					</swiper>
				</div>
			</div>
			<!-- banner End -->
			<!--企业简介-->
			<div class="company-info">
				<div class="company-text" v-html="content.introduce">

				</div>
				<p class="show-text">
					<span class="show-more iconfont">&#xe632;</span>
					<span class="show-hide iconfont">&#xe603;</span>
				</p>
			</div>
			<!-- 底部banner Start -->
			<div class="capacity-footer">
				<swiper class="enterprise-count" :options="bannerSwiper3">
					<swiper-slide v-for="enterpriseUrl in content.serviceGoods" :key="enterpriseUrl.key" class="enterprise-list">
						<div class="pic"><img :src="enterpriseUrl" alt="" :style="{height: '3.2rem',width:'100%',border:'1px solid #666666'}"></div>
					</swiper-slide>
				</swiper>
			</div>
			<!-- banner End -->
		</div>

	</div>
</template>
<script>
	export default {
		name: "capacity",
		props: ['serviceUrl'],
		data: () => ({
            flag:0,
			msg: {},
			bannerSwiper1: {
				slidesPerView: "auto",
				spaceBetween: 25,
				freeMode: true
			},
			bannerSwiper2: {
				notNextTick: true,
				autoplay: 4000,
				direction: 'horizontal',
				grabCursor: true,
				setWrapperSize: true,
				autoHeight: true,
				loop: true,
				pagination: '.banner .swiper-pagination',
				observeParents: true,
			},
			bannerSwiper3: {
				slidesPerView: "auto",
				spaceBetween: 25,
				freeMode: true
			}
		}),
		methods: {
			tab: function(index) {
				this.flag=index;
			}
		},
		mounted: function() {
			beforeCreate: {
				this.$http({
					url: this.serviceUrl+"applet/smartHomeList.htm",
					method: "POST",

					// 请求后台发送的数据
					params: {
						type: 3,
						data: {

						}
					},
					// 设置请求头
					headers: {
						"Content-Type": "x-www-from-urlencoded"
					}
				}).then(function(res) {
					// 请求成功回调
					console.log(JSON.stringify(res.data));
					this.msg = res.data;
					//console.log(this.msg.companyArray)
				}, function(res) {
					// 请求失败回调
					alert("error from 智能家居capacity.vue");
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "./../../css/unit/common";
	@import "./../../css/unit/base.css";
	.swiper-container {
		overflow: initial;
	}

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

	.capacity {
		background-color: #FFFFFF;
	}
	.act{
		display: block;
	}
	.numCapacity{
		/*display: none;*/
	}
	.enterprise-header {
		text-align: center;
		border-bottom: 2px solid #cccccc;
		padding: .333rem 0;
		.header-text {
			text-align: center;
			width: 80%;
		}
		span {
			color: $green;
			width: 10%;
			font-size: 0.896rem;
		}
	}
	/*按钮切换*/

	.tab-capacity {
		border-bottom: 1px solid #CCCCCC;
	}

	.company-info {
		padding: .64rem;

		.info-tit {
			font-size: .448rem;
		}
		.info-content {
			font-size: .352rem;
			color: #333333;
		}
		.show-text {
			text-align: center;
		}
		.show-more {
			color: $green;
		}
		.show-hide {
			display: none;
			color: $green;
		}
	}

	.count {
		position: fixed;
		top: 0;
		width: 100%;
		bottom: 1.6rem;
		overflow-y: auto;
		//banner Start
		.banner-box {
			$height: 5.44rem;
			width: 12rem;
			height: $height;
			.banner {
				top: 0;
				left: 0;
				width: 12rem;
				height: $height;
				//position: fixed;
				font-size: .576rem;
				&:after {
					content: "";
					width: 12rem;
					display: block;
					height: $height;
				}
				.banner-banner {
					width: 100%;
					height: $height;
					background: #fff;
					overflow: hidden;
					position: absolute;
					font-size: 0;
					.banner-list {
						@include pic-bg(100%, $height);
					}
				}
			}
		}
		//banner End
		//banner下按钮小集合 Start
		.btn-box {
			$height: 5.12rem;
			$padding: .32rem;
			width: 100%;
			height: $height;
			padding: $padding;
			margin: 0 0 $padding;
			background: #fff;
			ul {
				overflow: hidden;
				height: $height - 2 * $padding;
				li {
					width: 20%;
					text-align: center;
					padding: $padding/2 0 0 0;
					height: $height / 2 - $padding;
					float: left;
					&>.btn-icon {
						height: 1.12rem;
						font-size: .8rem;
						color: $green;
						line-height: 1.12rem;
						display: block;
					}
					&>.btn-text {
						height: .8rem;
						line-height: .8rem;
						font-size: .384rem;
						color: #222;
						display: block;
					}
					&:nth-child(1),
					&:nth-child(8) {
						&>.btn-icon {
							font-size: .96rem;
						}
					}
				}
			}
		}
		//banner下按钮小集合 End
		//本页面通用tit Start
		.tit {
			$height: 1.408rem;
			width: 100%;
			height: $height;
			line-height: $height;
			&>span {
				color: #333;
				font-size: .608rem;
			}
			&>a.iconfont {
				float: right;
				color: #999;
				font-size: .384rem;
			}
		}
		//本页面通用tit End
		//知名企业&&VR Start
		.capacity-header {
			background: #fff;
			padding: .32rem;
			margin: 0 0 .32rem;
			$width: 3.36rem;
			border-bottom: 1px solid #CCCCCC;
			.enterprise-count {
				$enterpriseHeight: 1.728rem;
				height: $enterpriseHeight;
				.enterprise-list {
					width: $width;
					height: $enterpriseHeight;
					padding: 0.256rem 0;
					border: 1px solid #CCCCCC;
					border-radius: 0.08rem;
					box-sizing: border-box;
					.pic {
						width: $width;
						box-sizing: border-box;
						@include pic($width, ($enterpriseHeight - 1.504rem));
					}
				}
			}
		}
		.capacity-footer {
			position: relative;
			background: #fff;
			padding: .32rem .32rem .64rem .32rem;
			$width: 3.2rem;
			border-bottom: 1px solid #CCCCCC;
			.enterprise-count {
				$enterpriseHeight: 3.2rem;
				height: $enterpriseHeight;
				.enterprise-list {
					width: $width;
					height: $enterpriseHeight;
					.pic1 {
						width: $width;
						box-sizing: border-box;
						@include pic($width, ($enterpriseHeight - 1.504rem));
					}
				}
			}
		}
		//知名企业&&VR End
	}
</style>
