<template>
	<view class="content">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">本月关键词</block>
		</cu-custom>
		<view class="img1"></view>
		<you-scroll ref="scroll" @onPullDown="onPullDown" @onScroll="onScroll" @onLoadMore="onLoadMore">
			<view>
				<!-- 可替换下拉内容 -->
				
				
				
				<!-- <div class="loadingText">正在努力加载...</div> -->
			</view>
		</you-scroll>
		<view class="padding">
			<button class="cu-btn block bg-blue margin-tb-sm lg" disabled type="">无效状态</button>
			<button class="cu-btn block line-blue margin-tb-sm lg" disabled>无效状态</button>
		</view>

	</view>
</template>

	
<script>
		import youScroll from '@/components/you-scroll'
		export default {
			components: {
				youScroll
			},
			data() {
				return {
					list: [1,2,3,4,5,6,7,8,9,10]
				};
			},
			onReady() {
				// console.log(this.$refs.scroll)
			},
			methods: {
				onPullDown(done) { // 下拉刷新
					setTimeout(() => {
						this.list = [1,2,3,4,5,6,7,8,9,10];
						done(); // 完成刷新
					},1000*1)
				},
				onScroll(e) { // 监听滚动
					console.log(e.detail.scrollTop)
				},
				onLoadMore(e) { // 加载更多
					setTimeout(() => {
						let len = this.list.length;
						for (let i = 1; i <= 10; i++) {
							this.list.push(len + i);
						}
					},1000*1)
				},
				scrollTo() {
					this.$refs.scroll.goTop();
				}
			}
		};
</script>

<style>
	page {
		height: 100%;
		overflow: hidden;
	}
	.img1{
	      background-size: cover;
	      background: url('http://r.photo.store.qq.com/psb?/V10lz7VG2GMfye/7kCz.Nag6m2.86*VM8RVMKDTqwO.eVhpHRUiAVF9PDE!/r/dMMAAAAAAAAA') center center no-repeat;
	      height: 100%;
	      position: fixed;
	      width: 100%
	  }
	.content {
	  	text-align: center;
	  	height: 100%;
	  }
	  .content .block {
	  	height: 200px;
	  	line-height: 200px;
	  	text-align: center;
	  	margin: 10px;
	  	background-color: aquamarine;
	  }
	  .content .loadingText {
	  	line-height: 30px;
	  	text-align: center;
	  	font-size: 12px;
	  	color: #999;
	  }
	  
	  #preloader_1{
	  	height: 40px;
	  	line-height: 40px;
	  	position:relative;
	  	text-align: center;
	  }
	  #preloader_1 span{
	  	width: 5px;
	  	height: 5px;
	  	margin: 0 1px;
	  	display: inline-block;
	  	vertical-align: middle;
	  	background: #9b59b6;
	  	animation: preloader_1 1.5s  infinite ease-in-out;
	  }  
	  #preloader_1 span:nth-child(2){
	  	animation-delay: .2s;  
	  }
	  #preloader_1 span:nth-child(3){
	  	animation-delay: .4s;
	  }
	  #preloader_1 span:nth-child(4){
	  	animation-delay: .6s;
	  }
	  #preloader_1 span:nth-child(5){
	  	animation-delay: .8s;
	  }
	  @keyframes preloader_1 {
	  	0% {height:5px;background:#9b59b6;}
	  	25% {height:30px;background:#3498db;}
	  	50% {height:5px;background:#9b59b6;}
	  	100% {height:5px;background:#9b59b6;}}
</style>
