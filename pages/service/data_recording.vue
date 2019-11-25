<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			
			<block slot="content">记录我的身体数据</block>
			
			<button class="cu-btn round cyan" >完成</button>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">我的身高</view>
				<input placeholder="点击填写" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">体重</view>
				<input placeholder="点击填写" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">胸围</view>
				<input placeholder="点击填写" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">腰围</view>
				<input placeholder="点击填写" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">静息心率</view>
				<input placeholder="点击填写" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">最大心率</view>
				<input placeholder="点击填写" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">BMI</view>
				<input placeholder="自动生成" name="input"></input>
			</view>			
			<!-- !!!!! placeholder 在ios表现有偏移 建议使用 第一种样式 -->
					
			<view class="cu-form-group align-start">
				<view class="title">备注</view>
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder="多行文本输入框"></textarea>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-cyan lg">完成</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {	
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			}
		}
	}
}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
