<template>
	<view >
		<cu-custom bgImage="/static/20191125160241.png">
			<block slot="content">
				<image src="/static/cjkz_1.png" mode="aspectFill" style="width: 240upx;height: 60upx;"></image>
			</block>
		</cu-custom>
		
		
		<view v-for="(item,index) in reciveUserInfo" :key="index" class="cu-card case" :class="isCard?'no-card':''" >
			
			
			<view class="cu-item shadow">
				<view class="image">
					<image v-bind:src="item.img_url"
					 mode="widthFix" id="imgInit"></image>
					 
					 
					<view class="cu-tag bg-blue">{{item.type}}</view>
					<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{item.text}}</text></view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" v-bind:style="{backgroundImage:'url(' + item.avatar_url + ')'}"></view>
						<view class="content flex-sub">
							<view class="text-grey">{{item.author}}</view>
							<view class="text-gray text-sm flex justify-between">
								{{item.time}}
								<view class="text-gray text-sm">
									<text class="cuIcon-attentionfill margin-lr-xs"></text> {{item.view}}
									<text class="cuIcon-appreciatefill margin-lr-xs"></text> {{item.like}}
									<text class="cuIcon-messagefill margin-lr-xs"></text> {{item.remark}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			
		</view>
	</view>
</template>
<script>
	export default {
		props:["reciveUserInfo"],
		data() {
			
			return {
				isCard: false,
				src:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
			};
		},
		methods: {
			IsCard(e) {
				this.isCard = e.detail.value
			},
		},
	}
</script>