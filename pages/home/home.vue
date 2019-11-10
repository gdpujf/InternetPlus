<template name="basics">
	<view>
		<scroll-view scroll-y class="page">
			<image src="/static/componentBg.png" mode="widthFix" class="response"></image>
			 <view class="solids-bottom padding-xs flex align-center">
			 	<view class="flex-sub text-center">
			 		<view class="solid-bottom text-lg padding response" mode="widthFix">
			 			<text class="text-black">每日一句：xxxx</text>
			 		</view>
			 	</view>
			 </view>
	
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/basics/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "basics",
		data() {
			return {
				elements: [{
						title: '功能1',
						name: 'layout',
						color: 'cyan',
						cuIcon: 'newsfill'
					},
					{
						title: '功能2',
						name: 'background',
						color: 'blue',
						cuIcon: 'colorlens'
					},
					{
						title: '功能3',
						name: 'text',
						color: 'purple',
						cuIcon: 'font'
					},
					{
						title: '功能4',
						name: 'icon',
						color: 'mauve',
						cuIcon: 'cuIcon'
					},
				],
			};
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
