<template name="basics">
	<view>
		<scroll-view scroll-y class="page">
			<view class="newscard" >
				<newscard :reciveUserInfo="lists">				
				</newscard>
			</view>
			
			
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	import newscard from "../../colorui/components/newscard.vue";  
	export default {
		 name: "basics",
		components:{
				newscard
		},
		data() {
			return {
				lists:[
					{type:"文章","text":'我是内容部分',"author":"weiming",time:"今天","view":'9999+',"like":20,"remark":30},
					{type:"文章","text":'我是内容部分',"author":"weiming",time:"今天","view":'9999+',"like":20,"remark":30},
					{type:"文章","text":'我是内容部分',"author":"weiming",time:"今天","view":'9999+',"like":20,"remark":30},
					]
			}
		},
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
