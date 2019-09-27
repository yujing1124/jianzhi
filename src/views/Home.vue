<template>
	<div class="home">
		<div class="sousuo margin15">
			<div class="address" @click="searchCity">
				{{LocationCity}}
				<img src="../assets/img/icons/arrow.png" />
			</div>
			<div class="search" @click="search">
				<img src="../assets/img/icons/search.png" />
				<input type="text" name="" id="" value="" placeholder="搜索你感兴趣的兼职" />
			</div>
		</div>
		<div class="banner margin15">
			<img src="../assets/img/use/banner.png" />
		</div>
		<!--<div class="list margin15">
			<ul>
				<li v-for="(item,index) in menus">
					<img :src="item.img"/>
					<br />
					{{item.name}}
				</li>
			</ul>
		</div>-->
		<div class="partTime margin15" style="margin-bottom: 2rem;">
			<div class="title space-between">
				<div>
					<img src="../assets/img/use/preference-partTime.png" /> 优选兼职
				</div>
				<div @click="jianzhimore">
					查看更多兼职信息 >
				</div>
			</div>

			<!--间职列表-->
			<div class="lists" v-for="(item,index) in lists" @click="details(item)">
				<div class="space-between">
					<div class="head">
						{{item.title}}
					</div>
					<div class="price">{{item.wages_num}}{{wagesType(item.wages_type)}}</div>
				</div>
				<div class="space-between">
					<div>
						{{item.area_name}} | {{payType(item.pay_type)}}
					</div>
					<div>
						{{formatDate(item.createtime)}}
					</div>
				</div>
				<div class="space-between">
					<div>
						<i>{{item.job_type_text}}</i>
						<i v-if='item.limit_sex==1'>限男生</i>
						<i v-if='item.limit_sex==2'>限女生</i>
					</div>
					<div v-if="item.status==3">
						已招满
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	//import HelloWorld from '@/components/HelloWorld.vue'
	import BMap from 'BMap'
	import axios from 'axios'
	import utils from '../plugin/utils.js'
	export default {
		name: 'home',
		components: {
			//  HelloWorld
		},
		data() {
			return {
				menus: [{
					img: require("../assets/img/use/menu1.png"),
					name: '间职'
				}, {
					img: require("../assets/img/use/menu2.png"),
					name: '全职'
				}, {
					img: require("../assets/img/use/menu3.png"),
					name: '会员福利'
				}, {
					img: require("../assets/img/use/menu4.png"),
					name: '排行榜'
				}, {
					img: require("../assets/img/use/menu5.png"),
					name: '使用说明'
				}],
				lists: [],
				LocationCity: '北京市'
			}
		},
		onload() {
			//			var city = this.$route.query.city
			//			console.log(city)
			//			if(city != undefined) {
			//				this.LocationCity = city
			//
			//			} else {
			//				this.city()
			//			}

		},
		mounted() {
			var city = localStorage.getItem('city')
			console.log(city)
			if(city) {
				this.LocationCity = city
				this.getList(city)

			} else {
				this.city()

			}
			console.log(utils)

		},
		methods: {
			details(obj) {
				console.log(obj)
				this.$router.push('/jianzhi/details')
				localStorage.setItem('jianzhiDetails',JSON.stringify(obj))
			},
			jianzhimore() {
				this.$router.push('/jianzhi')
			},
			search() {
				this.$router.push('/search')
			},
			searchCity() {
				this.$router.push('/city')
			},
			city() { //定义获取城市方法
				const geolocation = new BMap.Geolocation();
				var _this = this
				geolocation.getCurrentPosition(function getinfo(position) {
					console.log(position.address)
					let city = position.address.city; //获取城市信息
					let province = position.address.province; //获取省份信息
					_this.LocationCity = city
					localStorage.setItem('city', city)
					_this.getList(city)
					//				console.log(city)
				}, function(e) {
					_this.LocationCity = "定位失败"
				}, {
					provider: 'baidu'
				});
			},
			getList(city) {
				axios.get('http://jz.xiaohejun.cn/api/Index/setCity?name=' + city).then((res) => {
					console.log(res.data); //成功回调
					if(res.data.code == 1) {
						let city_id = res.data.data.id
						axios.get('http://jz.xiaohejun.cn/api/Index/getJobList?city_id=' + city_id).then((response) => {
							console.log(response.data); //成功回调
							if(response.data.code == 1) {
								var data = response.data.data
								this.lists = response.data.data
							}
						}, (response) => {
							//失败回调
						})
					}

				}, (response) => {
					//失败回调
				})
			},
			wagesType(i) {
				if(i == '0') {
					return '元/小时'
				} else if(i == '1') {
					return '元/天'
				} else if(i == '2') {
					return '元/周'
				} else if(i == '3') {
					return '元/月'
				} else if(i == '4') {
					return '元/次'
				}
			},
			payType(i) {
				if(i == '5') {
					return '完工结'
				} else if(i == '1') {
					return '日结'
				} else if(i == '2') {
					return '次日结'
				} else if(i == '3') {
					return '周结'
				} else if(i == '4') {
					return '月结'
				}
			},
			formatDate(now) {
				var time = new Date(now)
				var year = time.getFullYear();
				var month = time.getMonth() + 1;
				var date = time.getDate();
				var hour = time.getHours();
				var minute = time.getMinutes();
				var second = time.getSeconds();
				if(month<10){
					month = '0' + month
				}
				if(date<10){
					date = '0' + date
				}
				return month + "月" + date + "日";
			}

		}
	}
</script>
<style type="text/css" lang="less">
	.home {
		padding-top: 0.4rem;
	}
	
	.sousuo {
		display: flex;
		.address {
			width: 20%;
			font-size: 0.56rem;
			position: relative;
			top: 0.2rem;
			box-sizing: border-box;
			img {
				width: 0.36rem;
				height: 0.24rem;
				margin-left: 0.4rem;
				position: relative;
				top: -0.1rem;
				/*margin-right: 0.96rem;*/
			}
		}
		.search {
			position: relative;
			width: 80%;
			img {
				width: 0.56rem;
				height: 0.56rem;
				position: absolute;
				top: 0.2rem;
				left: 0.48rem;
			}
			input {
				width: 100%;
				background: #F4F5F6;
				border-radius: 0.56rem;
				border: none;
				height: 1.08rem;
				padding-left: 1.24rem;
				font-size: 0.48rem;
				box-sizing: border-box;
			}
		}
	}
	
	.banner {
		padding-top: 0.52rem;
		padding-bottom: 0.44rem;
		img {
			width: 100%;
			height: 6rem;
		}
	}
	
	.list {
		/*width: 100%;*/
		box-sizing: border-box;
		ul {
			width: 100%;
			display: flex;
			justify-content: space-around;
			font-size: 0.48rem;
			color: #454545;
			text-align: center;
		}
		img {
			width: 1.72rem;
			height: 1.72rem;
			margin-bottom: 0.44rem;
		}
	}
	
	.partTime {
		.title {
			padding-top: 0.96rem;
			padding-bottom: 0.76rem;
			img {
				width: 0.72rem;
				height: 0.72rem;
				margin-right: 0.44rem;
				position: relative;
				top: 0.08rem;
			}
			div:first-child {
				font-weight: bold;
				font-size: 0.64rem;
				color: #454545;
			}
			div:last-child {
				font-size: 0.52rem;
				font-family: PingFangSC;
				font-weight: 400;
				color: rgba(189, 189, 201, 1);
				position: relative;
				top: .3rem;
			}
		}
	}
	
	.lists {
		font-size: 0.48rem;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 13px 1px rgba(237, 237, 237, 0.6);
		border-radius: 0.2rem;
		padding: 0.52rem 0.84rem;
		margin-bottom: 0.4rem;
		>div {
			margin-bottom: 0.4rem;
		}
		>div:nth-child(2) {
			color: #666;
			font-weight: 300;
			>div:last-child {
				color: #999;
			}
		}
		>div:last-child {
			margin-bottom: 0rem;
			>div:last-child {
				font-size: 0.52rem;
				color: #a7a7a7;
			}
		}
		.head {
			color: #333333;
			font-size: 0.6rem;
		}
		.price {
			font-size: 0.6rem;
			color: #FD7252;
		}
		i {
			display: inline-block;
			padding: 0.12rem 0.32rem;
			background: #f4f4f4;
			border-radius: 0.12rem;
			color: #A0A0A0;
			font-size: 0.4rem;
			margin-right: 0.2rem;
		}
		i.only {
			color: #FD7252;
			background: #FEEFEB;
		}
	}
</style>