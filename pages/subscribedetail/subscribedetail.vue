<template>
	<view class="app-container">
		<view class="app-header">
			<view class="app-header-content">
				<uni-icons @click="back" class="arrow-left" type="left" size="20" color="#000"></uni-icons>
				订阅详情
			</view>
		</view>
		<view class="app-content sub-detail-content">
			<cover-image class="detail-image" src="../../static/fuwu.png"></cover-image>
			<view class="detail-title-container">
				<view class="detail-title">《百生决策参考》2023年刊 共12期</view>
				<view class="detail-subtitle">2023年1月-2023年12月，共12期。订阅后可免费邮寄</view>
				<view class="subs-desc flex align-items-center justify-between">
					<view class="subs-price">
						<text class="price-title">订阅价格</text>
						<text class="price-unit">￥</text>
						<text class="price">120</text>
					</view>
					<view class="news-collect flex align-items-center" @click="collect">
						<uni-icons v-if="isCollected" type="star-filled" color="#FFB444" size="20"></uni-icons>
						<uni-icons v-else type="star-filled" color="#666" size="20"></uni-icons>
						{{ isCollected ? '已收藏' : '未收藏' }}
					</view>
				</view>
			</view>
			
			<view class="detail-header">
				<view class="detail-header-text">
					<text>内参详情</text>
					<image class="icon-star" src="../../static/home/star.png" mode="scaleToFill"></image>
				</view>
			</view>
			
			<view class="news-detail bg-white p-16">
				这里是内参图文详情，这里是内参图文详情，年刊详情《百生决策参考》2023年刊 共12期
			</view>
		</view>
		
		<view class="subscribe-footer flex align-items-center justify-between">
			<view class="subs-price">
				<text class="price-unit">￥</text>
				<text class="price">120</text>
			</view>
			
			<button class="subscribe-btn">立即订阅</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
const back = () => {
	uni.navigateBack()
}

const isCollected = ref(false)
const collect = () => {
	isCollected.value = !isCollected.value
}
</script>

<style lang="scss" scoped>
.sub-detail-content {
	background-color: #f9f9f9;
	.detail-image {
		height: 164px;
	}
	
	.detail-title-container {
		padding: 14px 16px 16px;
		background-color: #fff;
		
		.detail-title {
			font-weight: bold;
		}
		
		.detail-subtitle {
			color: #666;
			font-size: 12px;
			margin-top: 7px;
		}
		
		.subs-desc {
			margin-top: 10px;
		}
	}

	.detail-header {
		padding: 24px 15px 8px;
		font-weight: bold;
		
		.icon-star {
			width: 20px;
			height: 20px;
			transform: translate(-9px, -6px);
		}
	}
}	       
</style>
