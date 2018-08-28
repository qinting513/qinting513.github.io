  <!-- 左边图片 右边文字 -->
<template>
    <div class="slide">
           <!-- 图片显示 -->
            <div class="slider-img">
                <a href="preview.html"><img :src="imageUrl" alt="learn more" /></a>									    
            </div>

            <!-- 文字显示 -->
            <div class="slider-text">
                    <h1>Clearance<br><span>SALE</span></h1>
                    <h2>UPTo 20% OFF</h2>

                <div class="features_list">
                        <h4>Get to Know More About Our Memorable Services Lorem Ipsum is simply dummy text</h4>							               
                </div>

                <a href="preview.html" class="button">Shop Now</a>

            </div>	
            <!-- 换行 -->
            <div class="clear"></div>	

    </div>
</template>
<script>
export default {
    name:"LeftImgRightDiv",
    props:['imageUrl']
}
</script>
