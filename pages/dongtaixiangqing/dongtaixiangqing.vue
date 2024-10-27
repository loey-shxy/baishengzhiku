<template>
	<view class="app-container">
		<view class="app-header">
			<view class="app-header-content">
				<uni-icons @click="back" class="arrow-left" type="left" size="20" color="#000"></uni-icons>
				百生动态详情
			</view>
		</view>
		
		<view class="app-content">
			
		</view>
	</view>
</template>

<script setup>
const back = () => {
	uni.navigateBack()
}
</script>

<style>
	       
</style>
