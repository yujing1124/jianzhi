<template>
	<div>
		<div class="img">
			<img src="../assets/img/use/job-part-bg.png"/>
		</div>
		<div class="partTime margin15">
			<div class="title">
				<img src="../assets/img/use/left-decorate.png"/>
				优选兼职
				<img src="../assets/img/use/right-decorate.png"/>
			</div>
			
			<div class="lists margin15" v-for="(item,index) in top" @click="details">
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
						<!--<i class="type">经纪人</i>-->
						<i class="official" v-if="item.official==1">官方发布</i>
						<i class="renzheng">认证商家</i>
						<i class="full" v-if="item.status==3">已报满</i>
					</div>
				</div>
			</div>
		</div>
		<div class="partTime margin15">
			<div class="title">
				<img src="../assets/img/use/left-decorate.png"/>
				趣味兼职
				<img src="../assets/img/use/right-decorate.png"/>
			</div>
			
			<div class="lists margin15" v-for="(item,index) in funny">
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
						<!--<i class="type">经纪人</i>-->
						<i class="official" v-if="item.official==1">官方发布</i>
						<i class="renzheng">认证商家</i>
						<i class="full" v-if="item.status==3">已报满</i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return{
				top:[],
				funny:[]
			}
		},
		mounted(){
			this.getList()
		},
		methods:{
			details(){
				this.$router.push('/jianzhi/details')
			},
			getList(){
				var city = localStorage.getItem('city')
				console.log(city)
				axios.get('http://jz.xiaohejun.cn/api/Index/setCity?name=' + city).then((res) => {
					console.log(res.data); //成功回调
					if(res.data.code == 1) {
						let city_id = res.data.data.id
						axios.get('http://jz.xiaohejun.cn/api/Index/getJobList?city_id=' + city_id).then((response) => {
							console.log(response.data); //成功回调
							if(response.data.code == 1) {
								var data = response.data.data
								for(let i = 0; i < data.length; i++) {
									
									if(data[i].status == 2){
										console.log(data[i])
										this.top.push(data[i])
									}else if(data[i].status == 1){
										this.funny.push(data[i])
									}

								}
								console.log(this.top)
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

<style scoped lang="less">
	.img{
		img{
			width: 100%;
			height: 4.96rem;
		}
	}
	.partTime{
		position: relative;
		top: -2.5rem;
		background: white;
		box-shadow:0px 0px 13px 1px rgba(237,237,237,0.6);
		border-radius:0.4rem;
		margin-bottom: 0.8rem;
		.title{
			text-align: center;
			font-weight: bold;
			color: #585858;
			img:last-child{
				margin-left: 0.7rem;
			}
		}
	}
	.lists{
		box-shadow: none;
		padding-left: 0px;
		padding-right: 0px;
		border-bottom: 1px solid #E8E8E8;
		.type{
			background: none;
			color: #FD7252;
			border: 1px solid #FD7252;
		}
		.official{
			background: none;
			color: #5F96FF;
			border: 1px solid #5F96FF;
		}
		.renzheng{
			background: none;
			color: #F7D029;
			border: 1px solid #F7D029;
		}
	}
	.lists:last-child{
		border: none;
	}
	
</style>