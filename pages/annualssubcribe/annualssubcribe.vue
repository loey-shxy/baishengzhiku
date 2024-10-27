<template>
	<view class="app-container">
		<view class="app-header">
			<view class="app-header-content">
				<uni-icons @click="back" class="arrow-left" type="left" size="20" color="#000"></uni-icons>
				年刊订阅
			</view>
		</view>
		
		<scroll-view
			scroll-y="true" 
			class="news-list-scroll"
		>
			<view class="services-news-item" v-for="item in list" :key="item.id">
				<cover-image src="../../static/fuwu.png"></cover-image>
				<view class="services-news-title ellipsis">{{ item.title }}</view>
				<view class="services-news-subtitle ellipsis">{{ item.content }}</view>
				
				<view class="services-news-item_footer flex align-items-center justify-between">
					<view class="subs-price">
						<text>订阅价格</text>
						<text class="price-unit">￥</text>
						<text class="price">111</text>
					</view>
					<button class="subscribe-btn">立即订购</button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const back = () => {
	uni.navigateBack()
}

const list = ref([])
const getList = async () => {
	list.value = Array(10).fill({}).map((_, index) => ({
		id: index + 1,
		title: '《百生决策参考》2023年刊 共12期',
		content: '2023年1月-2023年12月，共12期。订阅后可免费邮寄订阅后可免费邮寄'
	}))
}
getList()
</script>

<style lang="scss" scoped>

.news-list-scroll {
	height: calc(100% - 118px);
	padding: 1px 0 8px;
	background-color: #f9f9f9;
	 
}
</style>
