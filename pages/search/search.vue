<template>
	<view class="app-container search-page">
		<view class="app-header">
			<view class="app-header-content">
				<uni-icons @click="back" class="arrow-left" type="left" size="20" color="#000000"></uni-icons>
				搜索
			</view>
		</view>
		
		<view class="search-selection flex align-items-center justify-between">
			<view class="search-box">
				<uni-easyinput
					placeholder="搜索文档"
					:inputBorder="false"	
					v-model="keywords"
				>
					<template #left>
						<image class="search-icon" src="../../static/home/search.png" mode="scaleToFill"></image>
					</template>
				</uni-easyinput>
			</view>
			<text class="search-text" @click="search">搜索</text>
		</view>
		
		<view class="search-page-content">
			<view class="search-types">
				<view class="selection-title">历史搜索</view>
				<view class="search-types-content flex flex-wrap">
					<text class="search-type" v-for="(item, index) in histories" :key="index">{{ item }}</text>
				</view>
			</view>
			<view class="search-types">
				<view class="selection-title">大家都在搜</view>
				<view class="search-types-content flex flex-wrap">
					<text class="search-type" v-for="(item, index) in commons" :key="index">{{ item }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const back = () => {
	uni.navigateBack()
}
const keywords = ref('')
const search = () => {
	
}

const histories = ref([
	'2024年',
	'第9期',
	'年刊',
	'月刊',
	'免费',
])

const commons = ref([
	'2024',
	'第11期',
	'8期'
])
</script>

<style lang="scss" scoped>
.search-selection {
	margin: 6px 16px;
	.search-box {
		margin: 0;
		flex: 1;
	}
	
	.search-text {
		display: block;
		width: 32px;
		color: #0752A5;
		margin-left: 8px;
		flex-shrink: 0;
	}
}
.search-page-content {
	height: calc(100% - 163px);
	background-color: #f9f9f9;
	padding: 16px;
	
	.search-types {
		margin-bottom: 24px;
		
		&-content {
			gap: 10px;
			margin-top: 12px;
		}
		
		.search-type {
			line-height: 27px;
			border-radius: 16px;
			background: #F0F0F0;
			color: #333;
			font-size: 13px;
			padding: 0 12px;
		}
	}
}
</style>
