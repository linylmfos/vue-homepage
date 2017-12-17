<template>
  <div>
    <!--app-header-->
    <router-view name="header"></router-view>
    <!--//app-header-->

    <div class="app-content">
        <router-view name="nav"></router-view>
        <router-view name="about"></router-view>
        <router-view name="work"></router-view>  
        <router-view name="education"></router-view>
        <router-view name="skills"></router-view>
        <router-view name="project"></router-view> 
        <router-view name="contact"></router-view>
        <router-view name="aside"></router-view>     
    </div>
      <router-view name="footer"></router-view>
  </div>
</template>

<script>


</script>

<style>
@import '/static/css/style.css'  
</style>
