<template>
	<view>
		<home v-if="PageCur=='home'"></home>
		<service v-if="PageCur=='service'"></service>
		<person v-if="PageCur=='person'"></person>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="home">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='home'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='home'?'text-hblue':'text-gray'">首页</view>
			</view>
			<view class="action" @click="NavChange" data-cur="service">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'service'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='service'?'text-hblue':'text-gray'">服务</view>
			</view>
			<view class="action" @click="NavChange" data-cur="person">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'person'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='person'?'text-hblue':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'home'
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
