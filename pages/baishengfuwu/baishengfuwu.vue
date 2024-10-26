<template>
	<view class="app-container">
		<view class="app-header">
			<view class="app-header-content">
				<uni-icons @click="back" class="arrow-left" type="left" size="20" color="#000000"></uni-icons>
				百生服务
			</view>
		</view>
		
		<view class="services-header">
			<view class="services-tabs">
				<view 
					class="services-tab-pane" 
					v-for="item in tabs" 
					:key="item.key" 
					@click="handleTabChange(item.key)"
				>
					<view 
						:class="['tab-pane-content', currentTab === item.key && 'is-active']">
						{{ item.title }}
					</view>
				</view>
			</view>
			<view class="services-extra">
				<image class="extra-search" src="../../static/home/search.png" mode=""></image>
			</view>
		</view>
		
		<scroll-view
			scroll-y="true" 
			class="news-list-scroll" 
			v-if="currentTab === 'neican'"
		>
			<view class="services-news-item" v-for="item in list" :key="item.id">
				<cover-image src="../../static/fuwu.png"></cover-image>
				<view class="services-news-title ellipsis">{{ item.title }}</view>
				<view class="services-news-subtitle ellipsis">{{ item.content }}</view>
			</view>
		</scroll-view>
		
		<scroll-view
			scroll-y="true" 
			class="news-list-scroll" 
			v-if="currentTab === 'juece'"
		>
			<view class="juece-news-item" v-for="item in jueceList" :key="item.title">
				<cover-image class="juece-news-icon" :src="item.icon"></cover-image>
				<view class="juece-news-title ellipsis">{{ item.title }}</view>
				<image class="arrow-right" src="../../static/circle-right.png" mode="scaleToFill"></image>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const back = () => {
	uni.navigateBack();
}

const currentTab = ref('neican')
const tabs = ref([
	{ key: 'neican', title: '内参订阅' },
	{ key: 'juece', title: '决策咨询' },
])

const handleTabChange = (key) => {
	currentTab.value = key
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

const jueceList = ref([
	{
		title: '智库内参',
		icon: new URL('../../static/juece/zhiku.png', import.meta.url).href
	},
	{
		title: '规划咨询',
		icon: new URL('../../static/juece/guihua.png', import.meta.url).href
	},
	{
		title: '课题研究',
		icon: new URL('../../static/juece/keti.png', import.meta.url).href
	},
	{
		title: '数据服务',
		icon: new URL('../../static/juece/shuju.png', import.meta.url).href
	},
	{
		title: '普查调查',
		icon: new URL('../../static/juece/pucha.png', import.meta.url).href
	},
])
</script>

<style lang="scss" scoped>
.services-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 16px;
	height: 40px;
	
	.services-tabs {
		display: flex;
		height: 100%;
		.services-tab-pane {
			height: 100%;
			
			&:last-child {
				margin-left: 42px;
			}
		}
		.tab-pane-content {
			color: #9e9e9e;
			font-weight: bold;
			height: 100%;
			line-height: 40px;	
			
			&.is-active {
				color: #000;
				position: relative;
				
				&::after {
					position: absolute;
					content: "";
					left: 0;
					bottom: 0;
					width: 100%;
					height: 2px;
					background: linear-gradient( 90deg, #0752A5 0%, #2575CD 100%);
					border-radius: 4px;
				}
			}
		}
	}

	.services-extra {
		display: flex;
		align-items: center;
		
		.extra-search {
			width: 20px;
			height: 20px;
		}
	}
}

.news-list-scroll {
	height: calc(100% - 167px);
	padding: 1px 0 8px;
	background-color: #f9f9f9;
	
	.services-news {
		&-item {
			margin-top: 8px;
			background-color: #fff;
			padding: 16px;
		}
		
		&-title {
			margin-top: 12px;
			font-weight: bold;
		}
		
		&-subtitle {
			margin-top: 7px;
			color: #666;
			font-size: 12px;
		}
	}
	
	.juece-news {
		&-item {
			margin-top: 8px;
			background-color: #fff;
			padding: 18px;
			display: flex;
			align-items: center;
			position: relative;
			
		}
		&-icon {
			width: 44px;
			height: 44px;
			margin-right: 12px;
		}
		&-title {
			font-size: 15px;
		}
		
	}
}
.arrow-right {
	position: absolute;
	right: 18px;
	width: 24px;
	height: 24px;
}
</style>
