<template>
	<view class="app-container">
		<view class="app-header">
			<view class="app-header-content">
				<uni-icons @click="back" class="arrow-left" type="left" size="20" color="#000000"></uni-icons>
				百生动态
			</view>
		</view>
		
		<view class="search-box">
			<uni-easyinput
				:inputBorder="false"		
				@focus="toSearch"
			>
				<template #left>
					<image class="search-icon" src="../../static/home/search.png" mode="scaleToFill"></image>
				</template>
			</uni-easyinput>
		</view>	
		
		<view class="zhuanti-tabs">
			<view class="zhuanti-tab-pane" v-for="tab in tabs" :key="tab.key" @click="handleTabChange(tab.key)">
				<div class="tab-pane-content" :class="{'is-active': currentTab === tab.key}">{{ tab.title }}</div>
			</view>
		</view>
		
		<scroll-view
			scroll-y="true" 
			class="news-list-scroll" 
			v-if="currentTab === 'news'"
		>
			<view class="news-single-item" v-for="item in list" :key="item.id">
				<view class="news-item-title">
					<view class="news-new-status" v-if="item.isNew">New</view>
					<view class="news-title">{{ item.title }}</view>
				</view>
				<view class="news-other">
					<text class="news-other-info">{{ item.address }}</text>
					<text class="news-other-info">{{ item.createTime }}</text>
				</view>
			</view>
		</scroll-view>
		
		<scroll-view
			scroll-y="true" 
			class="news-list-scroll" 
			v-if="currentTab === 'report'"
		>
			<view class="news-item" v-for="item in list" :key="item.id">
				<image class="news-item_image" src="../../static/home/list-1.png" mode="scaleToFill"></image>
				<view class="news-item_info">
					<view class="news-title ellipsis-multiline">{{ item.title }}</view>
					<view class="news-footer">
						<view class="news-desc_address">{{ item.address }}</view>
						<view class="news-desc_date">{{ item.createTime }}</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const back = () => {
	uni.navigateBack();
}

const keywords = ref('')
const search = () => {
	
}

const currentTab = ref('news')
const tabs = ref([
	{ key: 'news', title: '新闻动态' },
	{ key: 'report', title: '专题报告' },
])

const handleTabChange = (key) => {
	currentTab.value = key
}

const list = ref([])
const getList = async () => {
	list.value = Array(10).fill({}).map((_, index) => ({
		id: index + 1,
		title: '中共中央国务院关于促进民营经济发展壮大的意见中共中央国务院关于促进民营经济发展壮大的意见中共中央国务院关于促进民营经济发展壮大的意见',
		address: '四川',
		createTime: '2024-10-26 14:30',
		isNew: index <= 3
	}))
}
getList()
</script>

<style lang="scss" scoped>
.zhuanti-tabs {
	display: flex;
	align-items: center;
	margin-top: 6px;
	height: 40px;
	
	.zhuanti-tab-pane {
		width: 50%;
		text-align: center;
		display: flex;
		justify-content: center;
		
		.tab-pane-content {
			width: max-content;
			line-height: 40px;
			color: #9e9e9e;
			font-weight: bold;
			
			&.is-active {
				color: #000;
				position: relative;
				
				&::after {
					position: absolute;
					content: "";
					bottom: 0;
					left: 0;
					width: 100%;
					height: 2px;
					background: linear-gradient( 90deg, #0752A5 0%, #2575CD 100%);
					border-radius: 4px;
				}
			}
		}
	}
}

.news-list-scroll {
	height: calc(100% - 198px);
	background-color: #f9f9f9;
	padding: 1px;
	
	.news-single-item {
		margin-top: 8px;
		background-color: #fff;
		padding: 16px;
		
		.news-item-title {
			display: flex;
			align-items: center;
			
			.news-new-status {
				color: #fff;
				line-height: 18px;
				padding: 0 2px;
				background: #C53B2E;
				border-radius: 4px;
				font-size: 12px;
				margin-right: 6px;
			}
			
			.news-title {
				font-weight: bold;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
		
		.news-other {
			margin-top: 8px;
			
			.news-other-info {
				color: #9e9e9e;	
				font-size: 12px;
				&:not(:first-child) {
					margin-left: 20px;
				}
			}
		}
	}
}

</style>
