<template>
	<view class="page_content">
		<view class="header">
			
			<text class="title">我的个人中心</text>
		</view>
		<image class="logo" src="/static/person/pullDown.jpg"></image>

		<swiper @change="swiperChange" previous-margin="50px" next-margin="50px" class="swiper" :indicator-dots="false"
		 :autoplay="false" :interval="3000" :duration="1000" :current="bigIdx">

			<template v-for="(vip, i) in vips">
				<swiper-item :key="'vip_'+i">
					<view :class="['swiper-item',bigIdx === i ? 'big' : 'small']" :style="{background:vip.bg,'box-shadow':vip.shadow}">
						<image class="img" src="/static/person/icon_vip.png"></image>
						<text class="title">{{vip.title}}</text>
						<text class="sub_title">{{vip.subTitle}}</text>
					</view>
				</swiper-item>
			</template>

		</swiper>

		<view class="title_line">
			<text class="title">我的任务</text>
			<text class="more">查看更多</text>
		</view>

		<scroll-view class="slider" scroll-x="true">
			<template v-for="(task,i) in tasks">
				<view :key="'task_'+i" class="s_item">
					<view class="content">
						<image :src="task.icon" class="img"></image>
						<text class="name">{{task.name}}</text>
						<text class="desc">{{task.desc}}</text>
						<text class="btn">已完成</text>
					</view>
				</view>
			</template>
		</scroll-view>

		<view class="title_line">
			<text class="title">当前等级福利</text>
			<text class="more">查看更多</text>
		</view>

		<view class="welfare">
			<template v-for="(info,i) in welfare">
				<view class="item" :key="'welfare_'+i">
					<view class="border">
						<image class="img" :src="info.icon"></image>
					</view>
					<text class="txt">{{info.name}}</text>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				bigIdx: 1,
				vips: [{
					bg: 'linear-gradient(94deg,rgba(219,207,202,1),rgba(150,147,164,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '普通会员',
					subTitle: '距离下一等级还差20积分'
				}, {
					bg: 'linear-gradient(94deg,rgba(147,224,255,1),rgba(199,237,233,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '高级会员',
					subTitle: '距离下一等级还差100积分'
				}, {
					bg: 'linear-gradient(94deg,rgba(219,207,202,1),rgba(150,147,164,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '超级会员',
					subTitle: '距离下一等级还差200积分'
				}, {
					bg: 'linear-gradient(94deg,rgba(219,207,202,1),rgba(150,147,164,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '钻石会员',
					subTitle: '距离下一等级还差400积分'
				}],
				tasks: [{
						icon: '/static/person/icon_signin.png',
						name: '今日跑步',
						desc: '完成获得7积分奖励'
					},
					{
						icon: '/static/person/icon_profile.png',
						name: '健康饮食',
						desc: '完成获得7积分奖励'
					},
					{
						icon: '/static/person/icon_friend.png',
						name: '规划生活',
						desc: '完成获得7积分奖励'
					}
				],
				welfare: [{
						icon: '/static/person/icon_evaluate.png',
						name: '高级头衔'
					},
					{
						icon: '/static/person/icon_gift.png',
						name: '优先询问'
					},
					{
						icon: '/static/person/icon_score.png',
						name: '我的趋势'
					},
					{
						icon: '/static/person/icon_other.png',
						name: '专属礼包'
					}
				]

			}
		},
		onLoad() {

		},
		methods: {
			swiperChange(e) {
				this.bigIdx = e.detail.current
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
		background-color: white;
	}
</style>
<style lang="scss" scoped>
	@function realSize($args) {
		@return $args / 1.5;
	}

	.page_content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header {
		padding-top: var(--status-bar-height);
		width: 95%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-left: 10px;
		margin-right: 10px;

		.btn {
			width: 27px;
			height: 27px;
		}

		.title {
			font-size: 18px;
			font-weight: 500;
			color: rgba(43, 43, 43, 1);
			line-height: 41px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.logo {
		margin-top: 10px;
		width: 100px;
		height: 100px;
	}

	.swiper {
		width: 100%;
		margin-top: 10px;

		.swiper-item {
			border-radius: 16px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-left: 10px;
			margin-right: 10px;
		}

		.big {
			margin-top: 0;

			.img {
				margin-top: 15px;
				width: 40px;
				height: 40px;
			}

			.title {
				font-size: 25px;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				line-height: 41px;
			}

			.sub_title {
				font-size: 11px;
				font-weight: 300;
				color: rgba(255, 255, 255, 1);
				line-height: 41px;
			}
		}

		.small {
			margin-top: 14px;
			height: 75%;

			// transition: all 0.3s;
			.img {
				margin-top: 5px;
				width: 25px;
				height: 25px;
			}

			.title {
				font-size: 15px;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				line-height: 31px;
			}

			.sub_title {
				font-size: 7px;
				font-weight: 300;
				color: rgba(255, 255, 255, 1);
			}
		}
	}

	.title_line {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		.title {
			margin-left: 20px;
			font-size: 18px;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			line-height: 41px;
		}

		.more {
			margin-right: 20px;
			font-size: 10px;
			font-weight: 300;
			color: rgba(153, 153, 153, 1);
			line-height: 41px;
		}
	}

	.slider {
		white-space: nowrap;
		width: 100%;

		.s_item {
			display: inline-block;
			width: 35%;
			margin-left: 20px;
			margin-bottom: 10px;

			.content {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				border-radius: 8px;
				background: white;
				margin-top: 5px;
				box-shadow: 0px 2px 6px 0px rgba(103, 103, 103, 0.2);

				.img {
					width: 103px;
					height: 105px;
				}

				.name {
					margin-top: -10px;
					font-size: 12px;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
					line-height: 21px;
				}

				.desc {
					font-size: 10px;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
					line-height: 21px;
				}

				.btn {
					width: 80px;
					height: 30px;
					margin-bottom: 10px;
					background: linear-gradient(94deg,rgba(0, 206, 209, 1), rgba(64, 224, 208, 1));
					box-shadow: 0px 9px 28px 0px rgba(195, 164, 110, 0.23);
					border-radius: 29px;
					font-size: 12px;
					font-weight: 400;
					color: white;
					line-height: 21px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}

	.welfare {
		width: 92%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 1px 21px 0px rgba(103, 103, 103, 0.2);
		border-radius: 10px;
		margin-bottom: 10px;

		.item {
			padding: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.border {
				margin-top: 5px;
				border: 2px solid #40E0D0;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;

				.img {
					width: 40px;
					height: 40px;
				}
			}

			.txt {
				margin-top: 5px;
				font-size: 10px;
				font-weight: 300;
				color: rgba(153, 153, 153, 1);
			}
		}
	}
</style>
