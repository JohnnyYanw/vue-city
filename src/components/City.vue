<template>
	<div>
		<div class="city-input">
			<input type="text" placeholder="选择城市" v-model="city" readonly @click="showPage = true">
		</div>
		<div class="city-page" v-show="showPage">
			<header class="top-head">
				<div class="head-fixed">
					<div class="search-box">
						<i class="iconfont icon-search"></i>
						<input type="text" v-model="searchKey" placeholder="输入城市名称" class="search-input">
						<i class="iconfont close-btn" v-show="searchKey !== ''" @click="clearKeyWords"></i>
					</div>
					<button class="cancel-btn" @click="showPage = false">取消</button>
				</div>
			</header>
			<section class="city-wrap">
				<div class="position-box" v-if="searchKey === ''">
					<section class="all-citys">
						<section class="city-box hot-city">
							<span class="city-title" id="hot">热门城市</span>
							<div class="hot-wrap">
								<ul>
									<li class="hot-item">上海</li>
									<li class="hot-item">上海</li>
									<li class="hot-item">上海</li>
								</ul>
								<ul>
									<li class="hot-item">上海</li>
									<li class="hot-item">上海</li>
									<li class="hot-item">上海</li>
								</ul>
							</div>
						</section>
						<div class="city-box all-city">
							<ul class="city-lists">
								<li v-for="(item, index) in showCity" :key="index">
									<span class="city-title" :id="item.letter">{{item.letter}}</span>
									<ul class="item-box">
										<li class="city-item" v-for="city in item.citys" @click="clickCity(city.cityName)">{{city.cityName}}</li>
									</ul>
								</li>
							</ul>
						</div>
					</section>
					<aside class="nav-bar">
						<ul class="nav-wrap">
							<li class="nav-item nav-hot" @click="navScroll('hot')">热门</li>
							<li class="nav-item" v-for="(item, index) in showCity" @click="navScroll(item.letter)" :key="index">{{item.letter}}</li>
						</ul>
					</aside>
				</div>
				<div class="city-filter" v-else>
					<span class="city-title">搜索结果</span>
					<ul class="city-lists" v-if="cityFilterList.length > 0">
						<li class="list-item" v-for="(item, index) in cityFilterList" :key="index" @click="clickCity(item.cityName)">{{item.cityName}}</li>
					</ul>
					<div class="no-data" v-else>抱歉，没有搜索结果哦！</div>
				</div>
			</section>
			<div :class="['tip-box', {'appear-tip': tipAppear}]">{{tipTxt}}</div>
		</div>
	</div>
</template>

<script>
	import pinyinlite from 'pinyinlite/index_full';
	import CityPlugin from 'assets/js/city';

	export default {
		data() {
			return {
				city: '',
				showPage: false,
				tipAppear: false,
				tipTxt: '',
				searchKey: '',
				showCity: [],  // 城市数据,格式[{letter: 'A', citys: [{cityName: '安阳'}, {fullPinyin: 'anyang'}, {jPinyin: 'ay'}]}, ...]
				cityList: [{cityName: "上海"}, {cityName: "杭州"}, {cityName: "常州"}, {cityName: "成都"}, {cityName: "九寨沟"}, {cityName: "杭州"}, {cityName: "常州"}, {cityName: "成都"}, {cityName: "杭州"}, {cityName: "常州"}, {cityName: "成都"}, {cityName: "杭州"}, {cityName: "常州"}, {cityName: "成都"}]  // 初始城市数据
			}
		},
		computed: {
			cityFilterList: {
				get() {
					return CityPlugin.searchCitys(this.cityList, this.searchKey);
				},
				set(newVal) {
					this.searchKey = newVal;
				}
			}
		},
		created() {
			this.showCity = CityPlugin.formatCitys(this.cityList);
		},
		mounted() {},
		methods: {
			clearKeyWords() {
				this.searchKey = '';
			},
			// 点击侧边栏滚动
			navScroll(id) {
				this.tipTxt = id;
				this.tipAppear = true;
				setTimeout(() => {
					this.tipAppear = false;
				}, 500);
				let obj = document.querySelector('#' + id);
				let cityWrap = document.querySelector('.all-citys');
				let sTop = obj.offsetTop;
				cityWrap.scrollTop = sTop;
				// 下面方法安卓系统不会滚动
				// cityWrap.scrollTo(0, sTop);
			},
			// 点击城市，将城市名称保存在localStorage中，并跳转到需要填充城市信息的页面
			clickCity(city) {}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../assets/scss/city';
	.city-input {
		width: 100%;
		padding-top: 60px;
		input {
			display: block;
			width: 70%;
			height: 20px;
			padding: 10px 0;
			margin: 0 auto;
		}
	}
	.city-page {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #EFEFEF;
	}
</style>