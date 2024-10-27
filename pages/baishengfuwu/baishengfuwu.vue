<template>
	<view class="app-container">
		<view class="app-header">
			<view class="app-header-content">
				<uni-icons @click="back" class="arrow-left" type="left" size="20" color="#000"></uni-icons>
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
			<view class="services-extra" v-if="currentTab === 'neican'">
				<view 
					class="article-type" 
					v-if="currentRecommend === 'month'" 
					@click="currentRecommend = 'year'"
				>年</view>
				<view 
					class="article-type" 
					v-if="currentRecommend === 'year'" 
					@click="currentRecommend = 'month'"
				>月</view>
				<uni-icons type="search" color="#C53B2E" size="20"></uni-icons>
			</view>
		</view>
		
		<!-- 月刊推荐 -->
		<scroll-view
			scroll-y="true" 
			class="news-list-scroll" 
			v-if="currentTab === 'neican' && currentRecommend === 'month'"
		>
			<view class="services-news-item" v-for="item in list" :key="item.id" @click="subscribeDetail(item)">
				<view
					:class="['news-status', `type_${STATUS[item.status].value}`]" 
					v-if="item.status !== undefined">
					{{ STATUS[item.status].label }}
				</view>
				<cover-image src="../../static/fuwu.png"></cover-image>
				<view class="services-news-title ellipsis">{{ item.title }}</view>
				<view class="services-news-subtitle ellipsis">{{ item.content }}</view>
			</view>
		</scroll-view>
		
		<!-- 年刊推荐 -->
		<scroll-view
			scroll-y="true" 
			class="news-list-scroll" 
			v-if="currentTab === 'neican' && currentRecommend === 'year'"
		>
			<view class="news-list">
				<view class="news-item" v-for="item in monthList" :key="item.id" @click="annuals(item)">
					<view 
						:class="['news-status', `type_${STATUS[item.status].value}`]" 
						v-if="item.status !== undefined">
						{{ STATUS[item.status].label }}
					</view>
					<image class="news-item_image size-large" src="../../static/collect/list.png" mode="scaleToFill"></image>
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

const currentRecommend = ref('month')

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
		content: '2023年1月-2023年12月，共12期。订阅后可免费邮寄订阅后可免费邮寄',
		status: Math.floor(index % 4) === 0 ? 0 : Math.floor(index % 3) === 0 ? 2 : 1
	}))
}
getList()

const STATUS = {
	0: { value: 'free', label: '免费' },
	1: { value: 'not-subscribed', label: '未订阅' },
	2: { value: 'subscribed', label: '已订阅' },
}
const monthList = ref([])
const getMonthList = async () => {
	monthList.value = Array(10).fill({}).map((_, index) => ({
		id: index + 1,
		title: `2024年第${index+1}期`,
		content: '围绕推动大规模设备更新和消费品以日换新围绕推动大规模设备更新和消费品以日换新围绕推动大规模设备更新和消费品以日换新',
		createTime: '2024-10-26 15:30',
		address: '四川',
		status: Math.floor(index % 4) === 0 ? 0 : Math.floor(index % 3) === 0 ? 2 : 1
		
	}))
}

getMonthList()

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

const annuals = (item) => {
	uni.navigateTo({
		url: '/pages/annualssubcribe/annualssubcribe'
	})
}

const subscribeDetail = (item) => {
	uni.navigateTo({
		url: '/pages/subscribedetail/subscribedetail'
	})
}
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
		
		.article-type {
			margin-right: 16px;
			color: #C53B2E;
			border: 2px solid #C53B2E;
			border-radius: 4px;
			width: 20px;
			height: 20px;
			text-align: center;
			line-height: 16px;
			font-size: 12px;
		}
	}
}

.news-list-scroll {
	height: calc(100% - 167px);
	padding: 1px 0 8px;
	background-color: #f9f9f9;
	
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
