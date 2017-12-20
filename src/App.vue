<template>
	<div class="g-body">
		<router-view class="main-cnt"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style lang="scss">
	@import 'assets/scss/reset';
	@import 'assets/scss/iconfont.css';

	html, body {
		width: 100%;
		height: 100%;
		overflow-x: hidden;
	}
	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-width: 320px;
		max-width: 640px;
		margin: 0 auto;
		background: #EFEFEF;
		font-size: 14px;
		color: #666;
	}
	.g-body {
		position: relative;
		width: 100%;
		height: 100%;
		overflow-y: hidden;
		.main-cnt {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow-y: auto;
			-webkit-overflow-scrolling: touch;// 解决ios移动端滑动不流畅
		}
	}
</style>
