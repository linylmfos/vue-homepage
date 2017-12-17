<template>
  <div>
    <!--top-nav-->
    	<div class="top-nav wow">
    		<div class="container">
    			<div class="navbar-header logo">
    				<button type="button" class="navbar-toggle" :class="navBarToggle ? 'collapsed' : ''" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="ariaValue" @click="changeMenu">
    					Menu
    				</button>
    			</div>
    			<!-- Collect the nav links, forms, and other content for toggling -->
    			<div class="navbar-collapse" :class="navBarCollapse" id="bs-example-navbar-collapse-1" aria-expanded="ariaValue">
    				<div class="menu">
    					<ul class="nav navbar">
    						<li><a href="#about" class="scroll">关于我</a></li>
    						<li><a href="#work" class="scroll">工作经历</a></li>
    						<li><a href="#education" class="scroll">教育经历</a></li>
    						<li><a href="#skills" class="scroll">个人技能</a></li>
    						<li><a href="#projects" class="scroll">我的项目</a></li>
    						<li><a href="#contact" class="scroll">联系方式</a></li>
    					</ul>
    					<div class="clearfix"> </div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<!--//top-nav-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      ariaValue: false,
      navBarCollapse: 'collapse',
      navBarToggle: true
    }
  },
  methods: {
    changeMenu () {
      this.ariaValue = !this.ariaValue
      console.log(this);
      this.navBarToggle = !this.navBarToggle
      if (this.navBarCollapse === 'collapse') {
        // this.navBarCollapse = 'collapsing'
        // setTimeout (() => {
          this.navBarCollapse = 'collapse in'
        // }, 100)
      } else if (this.navBarCollapse === 'collapse in') {
        this.navBarCollapse = 'collapse'
      }
    }
  }
}

</script>

<style>

</style>
