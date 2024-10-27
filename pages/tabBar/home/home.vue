<template>
	<view class="app-container home-page">
		<!-- start logo -->
	
		<view class="app-header">
			<view class="app-header-content home-header">
				<image class="logo" src="../../../static/home/logo.png" mode="scaleToFill"></image>
			</view>
		</view>
		<!-- end logo -->
		
		<scroll-view
			scroll-y="true" 
			class="collect-page app-content" 
		>
			<!-- start search -->
			<view class="search-box">
				<uni-easyinput
					placeholder="搜索文档"
					:inputBorder="false"		
					@focus="toSearch"
				>
					<template #left>
						<image class="search-icon" src="../../../static/home/search.png" mode="scaleToFill"></image>
					</template>
				</uni-easyinput>
			</view>
			<!-- end search -->
			
			<!-- start swiper -->
			<view class="swiper-container">
				<swiper 
					class="swiper" 
					indicator-dots
					circular
					autoplay
					:interval="5000" 
					:duration="500"
					indicator-color="rgba(255,255,255,0.5)"
					indicator-active-color="#C53B2E"
				>
					<swiper-item>
						<view class="swiper-item">
							<image class="swiper-image" src="../../../static/home/banner.png" mode="scaleToFill"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image class="swiper-image" src="../../../static/home/banner.png" mode="scaleToFill"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image class="swiper-image" src="../../../static/home/banner.png" mode="scaleToFill"></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- end swiper -->
			
			<!-- start tabs -->
			<view class="tabs">
				<view class="tab-pane">
					<view class="tab-pane-content" @click="toDynamic">
						<image class="tab-pane_icon" src="../../../static/home/dongtai.png" mode="scaleToFill"></image>
						<text class="tab-pane_text">百生动态</text>
						
					</view>
				</view>
				<view class="tab-pane">
					<view class="tab-pane-content" @click="toService">
						<image class="tab-pane_icon" src="../../../static/home/fuwu.png" mode="scaleToFill"></image>
						<text class="tab-pane_text">百生服务</text>
						
					</view>
				</view>
			</view>
			<!-- end tabs -->
			
			<!-- start list -->
			<view class="news-container">
				<view class="news-list_header">
					<view class="news-header-title">
						<text>百生动态</text>
						<image class="icon-star" src="../../../static/home/star.png" mode="scaleToFill"></image>
					</view>
					<view class="news-header-more" @click="toDynamic">
						<text>更多</text>
						<image class="icon-more" src="../../../static/home/more.png" mode="scaleToFill"></image>
					</view>
				</view>
				
				<view class="news-list">
					<view class="news-item" v-for="item in list" :key="item.id" @click="toDetail(item)">
						<image class="news-item_image" src="../../../static/home/list-1.png" mode="scaleToFill"></image>
						<view class="news-item_info">
							<view class="news-title ellipsis-multiline">{{ item.title }}</view>
							<view class="news-footer">
								<view class="news-desc_address">{{ item.address }}</view>
								<view class="news-desc_date">{{ item.createTime }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- end list -->
		</scroll-view>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 搜索
const toSearch = () => {
	uni.navigateTo({
		url: '/pages/search/search'
	})
}

const list = ref([])
const getList = async () => {
	list.value = Array(10).fill({}).map((_, index) => ({
		id: index + 1,
		title: '中共中央国务院关于促进民营经济发展壮大的意见中共中央国务院关于促进民营经济发展壮大的意见中共中央国务院关于促进民营经济发展壮大的意见',
		address: '四川',
		createTime: '2024-10-26 14:30'
	}))
}
onMounted(() => {
	getList()
})


// 更多
const more = () => {
	
}

const toDynamic = () => {
	uni.navigateTo({
		url: '/pages/baishengdongtai/baishengdongtai'
	});
}

const toService = () => {
	uni.navigateTo({
		url: '/pages/baishengfuwu/baishengfuwu'
	});
}
</script>

<style lang="scss" scoped>
.home-page {
	.home-header {
		padding-left: 17px;
		text-align: left;
		
		.logo {
			width: 76px;
			height: 20px;
		}
	}
	
	.swiper-container {
		height: 206px;
		
		.swiper-image,
		.swiper-item,
		.swiper {
			height: 206px;
			width: 100%;
		}
		
		:deep(.uni-swiper-dot) {
			width: 3px;
			height: 3px;
			
			&.uni-swiper-dot-active {
				width: 7px;
				border-radius: 2px;
			}
		}
	}
	
	.tabs {
		display: flex;
		align-items: center;
		
		.tab-pane {
			height: 116px;
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			
			&_icon {
				width: 51px;
				height: 51px;
				display: block;
				margin-bottom: 15px;
			}
		}
		
		.tab-pane-content {
			width: max-content;
			
		}
	}
	
	.news-container {
		background: #f9f9f9;
		padding-bottom: 26px;
		
		.news-list_header {
			display: flex;
			justify-content: space-between;
			padding: 18px 15px 10px;
			
			.news-header-title {
				font-weight: bold;
				font-size: 16px;
			}
			
			.news-header-more {
				color: #9e9e9e;
			}
			
			.icon-star {
				width: 20px;
				height: 20px;
				transform: translate(-9px, -6px);
			}
			
			.icon-more {
				width: 7px;
				height: 8px;
				margin-left: 6px;
				font-size: 12px;
				transform: translateY(-2px);
			}
			
		}
		
	}
}	       
</style>
