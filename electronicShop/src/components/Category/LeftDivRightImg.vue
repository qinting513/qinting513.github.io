 <!-- 左边文字，右边图片  -->
<template>
     <div class="slide">
              <!-- 文字显示 -->
                <div class="slider-text">
                    <h1>Clearance<br><span>SALE</span></h1>
                    <h2>UPTo 40% OFF</h2>

                    <div class="features_list">
                    <h4>Get to Know More -- </h4>			
                    </div>

                <a href="preview.html" class="button">Shop Now</a>
            </div>	
            <!-- 图片显示 -->
            <div class="slider-img">
                <a href="preview.html"><img :src="imageUrl" alt="learn more" /></a>
            </div>	
            <!-- 换行 -->
            <div class="clear"></div>	
     </div>
</template>

<script>
    export default {
        name:"LeftDivRightImg",
        props:['imageUrl']
    }
</script>
