<template>
	<view class="app-container personal-page">
		<view class="app-header personal-page-header">
			<view class="app-header-content">我的</view>
		</view>
		
		<view class="personal-page-content">
			<view class="personal">
				<cover-image src="" class="personal-avatar"></cover-image>
				<view class="personal-info" v-if="isLogin">
					<view class="username">昵称</view>
					<view class="account">用户名: 1115454</view>
				</view>
				<view class="personal-info" v-else>
					<view class="username" @click="toLogin">立即登录</view>
				</view>
				<uni-icons class="arrow-right" type="right" size="16" color="#9e9e9e"></uni-icons>
			</view>
			
			<view class="personal-tabs personal-card">
				<view class="personal-tab-pane">
					<div class="tab-pane-content">
						<image class="personal-tab-pane_icon" src="../../../static/me/xiaofei.png" mode=""></image>
						<text class="personal-tab-pane_text">消费记录</text>
					</div>
				</view>
				<view class="personal-tab-pane">
					<div class="tab-pane-content">
						<image class="personal-tab-pane_icon" src="../../../static/me/liulan.png" mode=""></image>
						<text class="personal-tab-pane_text">浏览记录</text>
					</div>
				</view>
				<view class="personal-tab-pane">
					<div class="tab-pane-content">
						<image class="personal-tab-pane_icon" src="../../../static/me/daifahuo.png" mode=""></image>
						<text class="personal-tab-pane_text">待发货</text>
					</div>
				</view>
				<view class="personal-tab-pane">
					<div class="tab-pane-content">
						<image class="personal-tab-pane_icon" src="../../../static/me/daishouhuo.png" mode=""></image>
						<text class="personal-tab-pane_text">待收货</text>
					</div>
				</view>
			</view>
			
			<view class="personal-subscribe personal-card">
				<image class="personal-subscribe_icon" src="../../../static/me/dingyue.png"></image>
				<view class="personal-subscribe_title">我的订阅</view>
				<image class="arrow-right circle right-12" src="../../../static/circle-right.png" mode=""></image>
			</view>
			
			<view class="help-list personal-card">
				<view class="help-item">
					<image class="help-item_icon" src="../../../static/me/service.png" mode=""></image>
					<view class="help-item_text">在线客服</view>
					<uni-icons class="arrow-right right-12" type="right" size="12" color="#9e9e9e"></uni-icons>
				</view>
				<view class="help-item">
					<image class="help-item_icon" src="../../../static/me/help.png" mode=""></image>
					<view class="help-item_text">帮助中心</view>
					<uni-icons class="arrow-right right-12" type="right" size="12" color="#9e9e9e"></uni-icons>
				</view>
				<view class="help-item">
					<image class="help-item_icon" src="../../../static/me/edit.png" mode=""></image>
					<view class="help-item_text">意见反馈</view>
					<uni-icons class="arrow-right right-12" type="right" size="12" color="#9e9e9e"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'

const userInfo = ref(uni.getStorageSync('userInfo'))
const isLogin = ref(!!userInfo.value?.id)

const toLogin = () => {
	uni.navigateTo({
		url: '/pages/login/login'
	})
}
</script>

<style lang="scss" scoped>
.personal-page {
	background: linear-gradient( 180deg, rgba(13,114,226,0.31) 0%, rgba(14,111,219,0) 100%);
}
.personal-page-header {
	background-color: transparent;
}

		
.arrow-right {
	position: absolute;
	right: 0;
	
	&.right-12 {
		right: 12px;
	}
	
	&.circle {
		width: 24px;
		height: 24px;
	}
}

.personal-card {
	border-radius: 12px;
	background-color: #fff;
}
.personal-page-content {
	padding: 0 16px;
	.personal {
		display: flex;
		position: relative;
		align-items: center;

		
		&-avatar {
			flex-shrink: 0;
			width: 53px;
			height: 53px;
			border-radius: 50%;
			border: 2px solid #fff;
			background-color: #f9f9f9;
		}
		
		&-info {
			margin-left: 12px;
			padding: 4px 0;
			
			.username {
				font-size: 16px;
				font-weight: bold;
			}
			
			.account {
				color: #333;
				margin-top: 3px;
			}
		}
	}

	.personal-tabs {
		display: flex;
		align-items: center;
		height: 107px;
		margin-top: 20px;
		
		.personal-tab-pane {
			width: 25%;
			display: flex;
			justify-content: center;
			align-items: center;
			
			&_icon {
				width: 40px;
				height: 40px;
				display: block;
			}
			
			&_text {
				font-size: 12px;
				margin-top: 10px;
			}
		}
		
		.tab-pane-content {
			width: max-content;
		}
	}
	
	.personal-subscribe {
		margin-top: 8px;
		height: 56px;
		display: flex;
		align-items: center;
		padding: 0 12px;
		position: relative;
		
		&_icon {
			width: 32px;
			height: 32px;
		}
		
		&_title {
			font-weight: bold;
			margin-left: 10px;
		}
		
		.subscribe-right {
			border: 1px solid #9e9e9e;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			right: 12px;
			
		}
	}
	
	.help-list {
		margin-top: 8px;
		padding: 4px 0;
		
		.help-item {
			display: flex;
			position: relative;
			align-items: center;
			height: 44px;
			padding: 0 12px;
			
			&_icon {
				width: 16px;
				height: 16px;
			}
			
			&_text {
				margin-left: 8px;
			}
		}
	}
}
</style>
