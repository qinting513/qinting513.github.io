<template>
    <div class="MainView">
          
         <div class="main">
             <div class="content">
                 
                 <!-- section header -->
                    <div class="content_top">

                            <div class="heading">
                            <h3>New Products</h3>
                            </div>
                            <div class="see">
                                <p><a href="#">See all Products</a></p>
                            </div>
                            <div class="clear"></div>
                        
                    </div>
                
                <!-- section cell -->
                       <div class="section group">
                           <one-cell v-for="item in newList" :key="item.id" :model="item.model"></one-cell>
                       </div>

                        <!-- section header -->
                    <div class="content_bottom">

                            <div class="heading">
                            <h3>Feature Products</h3>
                            </div>
                            <div class="see">
                                <p><a href="#">See all Products</a></p>
                            </div>
                            <div class="clear"></div>
                        
                    </div>
                
                <!-- section cell -->
                       <div class="section group">
                           <one-cell v-for="item in featureList" :key="item.id" :model="item.model"></one-cell>
                       </div>


            </div>
        </div>


    </div>
</template>

<script>

import OneCell from './OneCell'

export default {
    name:"MainView",
    components:{ OneCell },
    
    data(){
        return {
            newList:[
                {id:'1', model:{ imgUrl:'../static/images/new-pic1.jpg',
                                  title:'标题1',
                                  desc:'这是描述的内容',
                                  money:123 } 
                },

                {id:'2', model:{ imgUrl:'../static/images/new-pic2.jpg',
                                  title:'标题2',
                                  desc:'这是描述的内容2',
                                  money:133 } 
                },

                {id:'3', model:{ imgUrl:'../static/images/new-pic3.jpg',
                                  title:'标题3',
                                  desc:'这是描述的内容3',
                                  money:123 } 
                },

                {id:'4', model:{ imgUrl:'../static/images/new-pic4.jpg',
                                  title:'标题4',
                                  desc:'这是描述的内容4',
                                  money:123 } 
                }
            ],

            featureList:[
                  {id:'1', model:{ imgUrl:'../static/images/feature-pic1.jpg',
                                  title:'标题1',
                                  desc:'这是描述的内容',
                                  money:123 } 
                 },

                 {id:'2', model:{ imgUrl:'../static/images/feature-pic2.jpg',
                                  title:'标题2',
                                  desc:'这是描述的内容2',
                                  money:133 } 
                 },

                 {id:'3', model:{ imgUrl:'../static/images/feature-pic3.jpg',
                                  title:'标题3',
                                  desc:'这是描述的内容3',
                                  money:123 } 
                 },

                {id:'4', model:{ imgUrl:'../static/images/feature-pic4.jpg',
                                  title:'标题4',
                                  desc:'这是描述的内容4',
                                  money:123 } 
                }
            ],


        }
    },


    methods:{

    }

}
</script>

<style scoped>
   .MainView {
       margin-left:10px;
       margin-right: 10px;
   }
</style>
