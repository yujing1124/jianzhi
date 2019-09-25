<template>
	<div>
		<div class="search margin15" style="margin-top: 2rem;">
			<input type="text" placeholder="输入城市名或拼音查询" @keyup="searchcity">
		</div>
		<div class="margin15 cityWrap">
			<div>
				<div class="cityList" v-for="(item,index) in cityList">
					<div :id="item.initial" v-if="item.initial!=''">{{item.initial}}</div>
					<ul>
						<li v-for="(key,value) in item.cityInfo" @click="chooseCity(key.city)" :id="key.id">{{key.city}}</li>
					</ul>
				</div>
			</div>

		</div>
		<ul class="letter">
			<li v-for='(item,index) in searchLetter' @click="returnTop(item)">
				<!--<a :href='item.name'>{{item.value}}</a>-->
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
	import city from '../plugin/city.js';
	import axios from 'axios'
	export default {
		name: 'city',
		data() {
			return {
				searchLetter: [],
				cityList: [],
				cityid: []
			}
		},
		mounted() {
			axios.get('http://jz.xiaohejun.cn/api/Index/getCityList').then((response) => {
				console.log(response.data); //成功回调
			}, (response) => {
				//失败回调
			})
			const searchLetter = city.searchLetter;
			const cityList = city.cityList();
			this.cityList = cityList
			this.searchLetter = searchLetter
			var cityId = []
			cityList.map(
				item => {
					item.cityInfo.map(value => {
						cityId.push(value)
					})
				}
			)
			sessionStorage.setItem('cityList', JSON.stringify(this.cityList))
			this.cityId = cityId

		},
		methods: {
			chooseCity(city) {
				this.$router.push({
					path: '/',
				})
				localStorage.setItem('city',city)
				
			},
			returnTop(id) {
				var letter = '#' + id
				document.querySelector(letter).scrollIntoView(true);
			},
			searchcity(e) {
				var val = e.target.value
				var oldCity = sessionStorage.getItem('cityList')
				//				var oldCity =  city.cityList();
				if(val == '') {
					console.log(111)
					this.cityList = JSON.parse(oldCity)
				} else {
					var cityId = this.cityId
					var city = []
					var newcityList = []
					cityId.map(item => {

						if(item.city.indexOf(val) != -1) {
							newcityList.push(item)

						}
					})
					var obj = {
						initial: '',
						cityInfo: newcityList
					}
					city.push(obj)
					this.cityList = city
				}

			}
		}
	}
</script>

<style scoped lang="less">
	body {
		padding-bottom: 2.96rem;
	}
	
	.search {
		input {
			width: 100%;
			background: #F4F5F6;
			border: none;
			height: 1.08rem;
			padding-left: 1.24rem;
			font-size: 0.48rem;
			box-sizing: border-box;
			text-align: center;
		}
		margin-bottom:20px
	}
	
	.cityWrap {
		height: 80vh;
		overflow-x: auto;
		.cityList {
			>div {
				width: 100%;
				height: 1.08rem;
				background: #F4F5F6;
				line-height: 1.08rem;
				padding-left: 0.5rem;
			}
			ul {
				li {
					height: 2rem;
					line-height: 2rem;
					border-bottom: 1px solid rgba(216, 216, 216, 1);
					padding-left: 0.5rem;
					font-size: 0.56rem;
				}
				li:last-child {
					border-bottom: none;
				}
			}
		}
	}
	
	.letter {
		position: fixed;
		right: 0.1rem;
		top: 20%;
		text-align: center;
		font-size: 0.48rem;
		li {
			margin-bottom: 0.4rem;
		}
	}
</style>