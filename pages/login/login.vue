<template>
	<view class="app-container login-page">
		<view class="app-header">
			<view class="app-header-content">
				<uni-icons @click="back" class="arrow-left" type="left" size="20" color="#000000"></uni-icons>
			</view>
		</view>
		
		<view class="app-content">
			<view class="logo">
				
			</view>
			
			<view class="login-form">
				<uni-easyinput type="text" v-model="formData.phone" placeholder="请输入你的手机号">
					<template #left>
						<image class="login-input-icon" src="../../static/phone.png" mode="scaleToFill"></image>
					</template>
				</uni-easyinput>
				<uni-easyinput type="text" v-model="formData.code" placeholder="请输入短信验证码">
					<template #left>
						<image class="login-input-icon" src="../../static/password.png" mode="scaleToFill"></image>
					</template>
					<template #right>
						<text class="code-text">获取验证码</text>
					</template>
				</uni-easyinput>
				<button :disabled="!checked && !formData.code" class="wechart-btn" @click="wechatLogin">登录</button>
			
				<label class="radio-box">
					<radio :checked="checked" color="#0752A5" style="transform: scale(0.7);" />
					登录并同意
					<text class="link-text">《软件服务协议》</text>及
					<text class="link-text">《隐私政策》</text>
				</label>
			</view>
			
			<view class="footer">百生智库1.0.1</view>
		</view>
	</view>
</template>

<script setup>
import { reactive, ref } from 'vue';
const back = () => {
	uni.navigateBack()
}

const checked = ref(false)

const formData = reactive({
	phone: '',
	code: ''
})
const wechatLogin = () => {
	
}
</script>

<style lang="scss" scoped>
.login-page {
	background: linear-gradient( 180deg, rgba(13,114,226,0.31) 0%, rgba(14,111,219,0) 100%);
	
	.app-header {
		background-color: transparent;
	}
	
	.login-form {
		margin-top: 40px;
		padding: 0 32px;
		
		.login-input-icon {
			width: 18px;
			height: 18px;
			margin-left: 12px;			
		}
		
		.code-text {
			color: #0752A5;
			margin-right: 12px;
		}
		
		:deep(.uni-easyinput__content) {
			&.is-input-border {
				background: linear-gradient( 180deg, rgba(255,255,255,0.8) 2%, rgba(255,255,255,0.8) 97%);
				box-shadow: 0px 4px 10px 0px #E3E5F1;
				border-radius: 12px;
				border: 2px solid;
				height: 50px;
				line-height: 50px;
				border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.30000001192092896)) 2 2;
			}
		}
		
		:deep(.uni-easyinput) {
			margin-top: 16px;
		}
		
		.wechart-btn {
			margin-top: 46px;
			height: 40px;
			line-height: 40px;
			color: #fff;
			font-size: 15px;
			background: linear-gradient(90deg, #0752A5 0%, #2575CD 100%);
			border-radius: 22px;
		}
	}
	
	.radio-box {
		margin-top: 16px;
		display: block;
		color: #9E9E9E;
		font-size: 13px;
	}
	
	.link-text {
		color: #0752A5;
	}
	
	.footer {
		color: #9E9E9E;
		position: fixed;
		bottom: 40px;
		left: 0;
		width: 100%;
		text-align: center;
	}
}
</style>
