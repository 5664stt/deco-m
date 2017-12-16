<template>
	<div id="my" class="my">
    <div class="my-header">
    	 <span style="text-align: center;font-size: .554rem;">我的</span>
    	 <span class="iconfont"style="float: right;font-size: .672rem;margin-right:.12rem">
    	 	    &#xe644;
    	 </span>
    	 <div class="my-name">
    	 	   <span class="user-contain"style="float: left;"><img src="../../assets/user.png"/></span>
    	 	   <div class="my-name-info" style="float: left;">
    	 	   	   <h3>Alisa</h3>
    	 	   	   <span>136589895</span>
    	 	   </div>
    	 	   <router-link class="iconfont" to="/enterprise" tag="a"style="float: right;margin: .816rem .12rem 0 0;color: #FFFFFF;">&#xe602;</router-link>
    	 </div>
    </div>
		<div class="btn-box">
			<ul>
				<router-link to="/hotNew" tag="li">
					<span class="iconfont btn-icon">&#xe74e;</span>
					<span class="btn-text">消息</span>
					<span class="num-msg">3</span>
				</router-link>
				<router-link to="/live" tag="li">
					<span class="iconfont btn-icon">&#xe621;</span>
					<span class="btn-text">待付款</span>
				</router-link>
				<router-link to="/encyclopedias" tag="li">
					<span class="iconfont btn-icon">&#xe675;</span>
					<span class="btn-text">待发货</span>
				</router-link>
			</ul>
		</div>
		<div class="user-info">
			  <ul>
			  	<li>
			  		<span class="iconfont iconG">&#xe687;</span>
			  		<span>账户余额</span>
			  		<span class="price">0.00元</span>
			  	</li>
			  	<li>
			  		<span class="iconfont iconG">&#xe67a;</span>
			  		<span>意向金</span>
			  		<span class="price">0.00元</span>
			  	</li>
			  	<li>
			  		<span class="iconfont iconOO">&#xe604;</span>
			  		<span>积分</span>
			  		<span class="price">0.00元</span>
			  	</li>
			  	<li>
			  		<span class="iconfont iconG">&#xe627;</span>
			  		<span>收入</span>
			  		<span class="price">0.00元</span>
			  	</li>
			  </ul>
		</div>

		<slot name="app-footer"></slot>
	</div>
</template>
<script>
	export default {
		name: "my",
		data: () => ({})
	}
</script>
<style lang="scss" scoped>
@import "./../../css/unit/common";
@import "./../../css/unit/base.css";
.my-header{
	color: #FFFFFF;
	background-color:$green;
	text-align:center;
	padding:.32rem;
	.my-name{
		overflow:hidden;
		text-align:left;
		.user-contain{
			width: 2.43rem;
			height: 2.43rem;
			text-align: center;
			padding: .06rem;
			border-radius: 50%;
			background-color: #FFFFFF;
			img{
				width: 2.3rem;
			height: 2.3rem;
			vertical-align: middle;
			border-radius: 50%;
			}
		}
		.my-name-info{
			margin: .416rem 0 0 .32rem;
		}
	}
}
.btn-box {
    $height: 2.82rem;
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
        width: 33%;
        text-align: center;
        padding: $padding/2 0 0 0;
        height: $height / 2 - $padding;
        position:relative;
        float: left;
        & > .btn-icon{
          height: 1.12rem;
          font-size: .8rem;
          color: $green;
          line-height: 1.12rem;
          display: block;
        }
        & > .btn-text{
          height: .8rem;
          line-height: .8rem;
          font-size: .384rem;
          color: $green;
          display: block;
        }
        & >.num-msg{
        	position: absolute;
        	top: 0.1rem;
        	right: 1.1rem;
        	width: 0.6rem;
        	height: 0.6rem;
        	font-size: 0.5rem;
        	border-radius: 50%;
        	color: #FFFFFF;
        	text-align: center;
        	line-height:0.6rem ;
        	background-color: #e11112;
        }

      }
    }
  }
  .user-info{
    $padding: .32rem 0 0 .32rem;
    width: 100%;
    padding: $padding;
    margin: 0 0 $padding;
    background: #fff;
    ul{
    	overflow: hidden;
    	li{
    		border-bottom: 1px solid #cccccc;
    		overflow: hidden;
    		height: 1.376rem;
    		padding:.24rem .32rem .24rem 0;
    		.iconG{
            color: $green;
            margin-right: 0.5rem;
            font-size: .672rem;
    		}
    		.iconOO{
    			color: #f15323;
    			 margin-right: 0.5rem;
            font-size: .672rem;
    		}
    		.iconO{
            margin-right: 0.5rem;
            font-size: .672rem;
            color: $orange;
    		}
    		.price{
    			 float: right;
    		}
    		span{
    			height: 100%;
					font-size: .512rem;
    			line-height: .8rem;
    		}
    	}
    }
  }

</style>
