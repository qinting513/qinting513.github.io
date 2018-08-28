<template>
    <div class="pageheader">
          
    <div class="wrap">
            <div class="header">
                        <!-- 号码 + 登录模块 -->
                <div class="headertop_desc">
                    <!-- 号码部分 -->
                        <div class="call">
                            <p><span>Need help?</span> call us <span class="number">+8615012920356</span></p>
                        </div>
                        <!-- 右边部分 -->
                        <div class="account_desc">
                            <ul>
                                <li><a href="https://baidu.com">Register</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Delivery</a></li>
                                <li><a href="#">Checkout</a></li>
                                <li><a href="#">My Account</a></li>
                            </ul>
                        </div>
                    <div class="clear"></div>
                </div>

                <!-- logo 行 -->
                <div class="header_top">
                        <div class="logo">
                            <a href="index.html"><img :src="logoImgUrl"></a>
                        </div>

                        <div class="cart">
                            <div> Welcome to our Online Store! <span>Cart:</span>
                                <div id="dd" class="wrapper-dropdown-2"> 0 item(s) - $0.00
                                        <ul class="dropdown">
                                                <li>you have no items in your Shopping cart</li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                
                        <div class="clear"></div>
                </div>

                <div class="header_bottom">

                    <div class="menu">
                        <ul>
                            <li class="active"><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="delivery.html">Delivery</a></li>
                            <li><a href="news.html">News</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <div class="clear"></div>
                        </ul>
                    </div>

                    <div class="search_box">
                        <form>
                            <input type="text" value="Search" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}"><input type="submit" value="">
                        </form>
                    </div>

                    <div class="clear"></div>

                </div>	

            </div>
     </div>

    </div>
</template>

<script>
export default {
    name:'PageHeader',
    data(){
         return {
              logoImgUrl:'../static/images/logo.png'
         }
    },
    meathods: {
         
    },

}
</script>
