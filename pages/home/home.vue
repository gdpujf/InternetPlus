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
					{type:"动态","text":'早安，广药~  #晨跑 #健身行动派',
					"author":"sandy-珊迪",
					time:"今天8:21",
					"view":'9999+',
					"like":524,
					"remark":311,
					"img_url":"/static/index/微信图片_20191125151827.jpg",
					"avatar_url":"/static/index/20150813130914_yVXuL.jpeg"},
					
					{type:"动态",
					"text":'闭上嘴 迈开腿 #GZ  #广州',
					"author":"Yangzi",
					time:"昨天20：05",
					"view":'9999+',
					"like":214,
					"remark":42,
					"img_url":"/static/index/微信图片_20191125152223.jpg",
					"avatar_url":"/static/index/20160607191023_isxzV.jpeg"},
					{type:"剪影",
					"text":'walking upon the city',
					"author":"_zhanggz",
					time:"昨天16:00",
					"view":'9999+',
					"like":2875,
					"remark":455,
					"img_url":"/static/index/微信图片_20191125152227.jpg",
					"avatar_url":"/static/index/20170922162149_snyk3.jpeg"},
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
