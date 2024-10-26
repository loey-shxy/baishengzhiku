<template>
	<view class="app-container">
		<view class="app-header">
			<view class="app-header-content">收藏</view>
		</view>
		
		<scroll-view 
			scroll-y="true" 
			class="collect-page app-content" 
		>
			<view class="news-list">
				<view class="news-item" v-for="item in list" :key="item.id" @click="toDetail(item)">
					<view 
						:class="['news-status', `type_${STATUS[item.status].value}`]" 
						v-if="item.status !== undefined">
						{{ STATUS[item.status].label }}
					</view>
					<image class="news-item_image size-large" src="../../../static/collect/list.png" mode="scaleToFill"></image>
					<view class="news-item_info">
						<view class="news-title ellipsis-multiline">{{ item.title }}</view>
						<view class="news-content ellipsis-multiline" v-if="item.content">
							{{ item.content }}
						</view>
						<view class="news-footer">
							<view class="news-desc_address">{{ item.address }}</view>
							<view class="news-desc_date">{{ item.createTime }}</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const STATUS = {
	0: { value: 'free', label: '免费' },
	1: { value: 'not-subscribed', label: '未订阅' },
	2: { value: 'subscribed', label: '已订阅' },
}
const list = ref([])
const getList = async () => {
	list.value = Array(10).fill({}).map((_, index) => ({
		id: index + 1,
		title: `2024年第${index+1}期`,
		content: '围绕推动大规模设备更新和消费品以日换新围绕推动大规模设备更新和消费品以日换新围绕推动大规模设备更新和消费品以日换新',
		createTime: '2024-10-26 15:30',
		address: '四川',
		status: Math.floor(index % 4) === 0 ? 0 : Math.floor(index % 3) === 0 ? 2 : 1
		
	}))
}

getList()
</script>

<style lang="scss" scoped>
.collect-page {
	background-color: #f9f9f9;
	padding: 1px 0 8px;
	height: 80%;
}
</style>
