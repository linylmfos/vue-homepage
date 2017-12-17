<template>
  <div>
    <!--app-header-->
    <div class="app-header">
      <div id="home" class="banner">
    		<div class="banner-info">
    			<div class="container">
    				<div class="col-md-4 col-xs-0 header-left">
    					<!-- <img src="images/img1.jpg" alt=""/> -->
    				</div>
    				<div class="col-md-8  col-xs-12 header-left">
    					<h2>Hi <i class="fa fa-smile-o"></i> </h2>
    					<h2>我是Linden </h2>
    					<h4>web开发者 </h4>
    					<ul class="address">
    						<li v-for="( value, key) in user">
    							{{ key }}: {{ value }}
                </li>
    					</ul>
    				</div>
    				<div class="clearfix"> </div>
    			</div>
    		</div>
    	</div>
    </div>
    <!--//app-header-->
  </div>
</template>

<script>
export default {
  data (){
    return {
      user:{
           手机: '18476354782',
           坐标: '深圳市宝安机场',
           邮箱: 'iqianbaidu@163.com',
           主页: 'linden.site'
         }
    }
  }
}
</script>

<style>

</style>
