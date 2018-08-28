<template>
    <!-- <div class="OneCell"> -->

         <div class="grid_1_of_4 images_1_of_4">
					 <a href="preview.html"><img :src="model.imgUrl" alt="" /></a>
					 <h2>{{ model.title }}</h2>
                     <h4>{{ model.desc }}</h4>
					<div class="price-details">
						       <div class="price-number">
									<p><span class="rupees">${{model.money}}</span></p>
							    </div>
					       		<div class="add-cart">								
									<h4><a href="preview.html">Add to Cart</a></h4>
							    </div>
							    <div class="clear"></div>
					</div>		 
	 	 </div>

    <!-- </div> -->
</template>

<script>
export default {
    name:"OneCell",
    props:['model']
    
}
</script>