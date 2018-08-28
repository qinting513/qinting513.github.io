<template>
    <div class="sliderView">
         
            <!-- 轮播图 -->
        <div class="wrap">
                <div class="header_slide">
                            <div class="header_bottom_right">					 
                                  <div class="slider">					     
                                        <div id="slider">
                                            <div id="mover">
                                        
                                            <div  v-for="item in list" :key="item.id">	
                                                 <left-img-right-div  v-if="item.isLeft" :imageUrl="item.imgUrl"></left-img-right-div>   
                                                 <left-div-right-img  v-else :imageUrl="item.imgUrl" ></left-div-right-img>                    
                                            </div>	

                                        </div>		
                                    </div>
                                <div class="clear"></div>					       
                            </div>
                        </div>
                    <div class="clear"></div>
                </div>
            </div>
    </div>
</template>


<script>

import LeftDivRightImg from './LeftDivRightImg'
import LeftImgRightDiv from './LeftImgRightDiv'

export default {
    name:"SliderView",
    components:{ LeftDivRightImg, LeftImgRightDiv },
    
    data(){
        return {
             list: [
                 { id:"1",isLeft:true,imgUrl:'../static/images/slide-1-image.jpg'},
                 { id:"2",isLeft:false,imgUrl:'../static/images/slide-2-image.jpg'},
                 { id:"3",isLeft:true,imgUrl:'../static/images/slide-3-image.jpg'}
             ]
        }
    },
    methods: {

    }
}
</script>
