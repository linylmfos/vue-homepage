<template>
  <div>
    <!--contact -->
    <div class="welcome contact" id="contact">
      <div class="container">
        <h3 class="title">联系方式</h3>
        <div class="contact-row">
          <div class="col-md-6 contact-left">
            <iframe src="http://map.sogou.com/#c=12696750,2573468.75,12"></iframe>
          </div>
          <div class="col-md-6 contact-right clearfix">
            <div class="address-left">
              <p><b>广东省深圳市宝安机场附近</b><br> <b>中国</b></p>
            </div>
            <div class="address-right">
              <p><b>手机号码 :</b>  +86 184 7365 4782</p>
              <p><b>E-mail : </b><a href="mailto:18476354782@sina.cn"> 18476354782@sina.cn </a></p>
            </div>
            <div class="clearfix"></div>
            <div class="contact-form">
              <form action="form.php" method="post">
                <input class="name" type="text" name="Name" placeholder="姓名" required="" autocomplete="off">
                <input class="email" name="Email" type="text" placeholder="邮箱" required="" >
                <input class="phone" name="phone" type="text" placeholder="手机号码" required="">
                <textarea name="Message" placeholder="内容" required=""></textarea>
                <input type="submit" value="提交" >
              </form>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <!--//contact -->
  </div>
</template>

<script>

</script>
<style>
   
</style>
