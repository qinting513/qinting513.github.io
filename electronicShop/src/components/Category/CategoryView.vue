<template>
    <div class="CategoryView">
        <div class="wrap">
                <div class="header_slide">
                        <!-- 分类 -->
                        <div class="header_bottom_left">				
                            <div class="categories">
                            <ul>
                                <h3>Categories</h3>
                                <li><a href="#">Mobile Phones</a></li>
                                <li><a href="#">Desktop</a></li>
                                <li><a href="#">Laptop</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Software</a></li>
                                <li><a href="#">Sports &amp; Fitness</a></li>
                                <li><a href="#">Footwear</a></li>
                                <li><a href="#">Jewellery</a></li>
                                <li><a href="#">Clothing</a></li>
                                <li><a href="#">Home Decor &amp; Kitchen</a></li>
                                <li><a href="#">Beauty &amp; Healthcare</a></li>
                                <li><a href="#">Toys, Kids &amp; Babies</a></li>
                            </ul>
                            </div>					
                        </div>
                          
                          <!-- 轮播图 -->
                        <slider-view></slider-view>

              </div>
        </div>
    </div>
</template>

<script>

import SliderView from '@/components/Category/SliderView'

export default {
    name:"CategoryView",
    components: { SliderView },
    data(){
       return {
           sliderMsg1:'Get to Know More'
       }
    },

}
</script>
