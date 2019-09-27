<template>
	<div>
		<div class="mainmes margin15" id="navtop">
			<div class="space-between">
<<<<<<< HEAD
				<div class="title">{{details.title}}</div>
=======
				<div class="title">UI设计师兼职</div>
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
				<div class="flex">
					<div style="margin-right: 0.4rem;">
						<img src="../../assets/img/icons/share-icon.png" /> 分享
					</div>
					<div>
						<img src="../../assets/img/icons/complain-icon.png" /> 投诉
					</div>
				</div>
			</div>
			<div class="simple">
<<<<<<< HEAD
				{{details.area_name}} | {{details.job_type_text}} <span v-if='details.limit_sex==1'>| 限男生</span>
				<span v-if='details.limit_sex==2'>限女生</span><span v-if='details.limit_sex==0'>不限性别</span> | {{payType(details.pay_type)}}
			</div>
			<div class="simple">
				限{{details.limit_min_age}}岁以上{{details.limit_max_age}}岁以下报名
			</div>
			<div>
				<i class="official" v-if="details.official==1">官方发布</i>
				<i class="renzheng">认证商家</i>
			</div>
			<div class="price">{{details.wages_num}}{{wagesType(details.wages_type)}}</div>
			<div class="simple">
				招聘人数：35/{{details.num}}
				<br /> 报名截止时间：{{formatDateFull(details.join_end_time)}}
=======
				淄博 | 张店区 | 设计 | 限女生 | 完工结算
			</div>
			<div class="simple">
				限18岁以上50岁以下报名
			</div>
			<div>
				<i class="official">官方发布</i>
				<i class="renzheng">认证商家</i>
			</div>
			<div class="price">300元/日</div>
			<div class="simple">
				招聘人数：35/999
				<br /> 报名截止时间：2019年04月05日 13：05
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
			</div>
			<div class="flex attention">
				<img src="../../assets/img/use/info-checked.png" />
				<div>
					报名即表示您已阅读并同意<span style="color: #5F96FF;">《间职用户协议》</span>
				</div>

			</div>
			<div class="line"></div>
			<div class="flex attention">
				<img src="../../assets/img/icons/safe-icon.png" />
				<div style="color: #0ABF87;">
					此信息经平台认证机构发布，安全可靠，请放心报名
				</div>

			</div>
			<div class="flex attention">
				<img src="../../assets/img/icons/wraing-icon.png" />
				<div style="color: #FD7252;">
					若兼职中雇主要求扫码付款或通过其他方式收取费用，请提高警惕并拒绝缴纳，同时向客服投诉，安全可靠，请放心报名
				</div>

			</div>
			<div class="simple">
<<<<<<< HEAD
				浏览量：{{details.views}}
=======
				浏览量：325
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
			</div>
		</div>
		<div class="describe margin15">
			<div class="title">职位描述</div>
			<div>
				<div>【工作时间】</div>
				<div class="flex attention">
					<img src="../../assets/img/icons/time-icon.png" />
					<div id="">
<<<<<<< HEAD
						{{formatDateFull(details.work_start_time)}}-{{formatDateFull(details.work_start_time)}}
					</div>
				</div>
				<!--<div class="flex attention">
=======
						2019.04.06-2019.04.08 10:00-5:00
					</div>
				</div>
				<div class="flex attention">
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
					<img src="../../assets/img/icons/address-icon.png" />
					<div id="">
						淄博市 张店区 汇金大厦A座 2301
					</div>
<<<<<<< HEAD
				</div>-->
=======
				</div>
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
			</div>
			<div>
				<div>【工作地点】</div>
				<div class="space-between attention">
					<div>
<<<<<<< HEAD
						<img src="../../assets/img/icons/address-icon.png" /> {{details.place_address}}
=======
						<img src="../../assets/img/icons/address-icon.png" />
						淄博银泰城
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
					</div>
					<div style="text-align: right;">6.9公里 ></div>
				</div>
			</div>
			<div>
				<div>【工作内容】</div>
				<div>
<<<<<<< HEAD
					{{details.details}} 1.负责公司网站的设计、改版、更新；
=======
					1.负责公司网站的设计、改版、更新；
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
					<br /> 2.负责公司产品的界面进行设计、编辑、美化等工作；
					<br /> 3.对公司的宣传产品进行美工设计；
					<br /> 4.负责客户及系统内的广告和专题的设计；
					<br /> 5.负责与开发人员配合完成所辖网站等前台页面设计；
					<br /> 6.其他与美术设计相关的工作。
				</div>
			</div>
			<div>
				<div>【工作要求】</div>
				<div>
					1.美术、平面设计相关专业，专科及以上学历；
					<br /> 2.两年以上网页设计及平面设计工作经验；
					<br /> 3.有扎实的美术功底、良好的创意思维和理解能力，能及时把握客户需求；
					<br /> 4.精通Photoshop、Dreamweaver、Illustrator等设计软件，对图片渲染和视觉效果有较好认识；
					<br /> 5.善于与人沟通，良好的团队合作精神和高度的责任感，能够承受压力，有创新精神，保证工作质量。

				</div>
			</div>
		</div>
		<div class="gray"></div>
		<!--雇主信息-->
		<div class="employer">
			<div class="margin15">
				<div class="title">雇主信息</div>
				<div class="list">
					<div class="oh">
						<img src="" class="fl" />
						<div id="" class="fl center">
							<div>
								马云
								<img src="../../assets/img/icons/auth-icon.png" />
							</div>
							<div>
								阿里巴巴集团董事局主席
							</div>
						</div>
						<div class="fr">
							<button>关注雇主</button>
						</div>
					</div>
				</div>

			</div>

		</div>
		<div class="gray"></div>
		<!--报名列表-->
<<<<<<< HEAD
		
		<div class="employer signup" style="display: block;">
			<div class="margin15">
				<div class="title">留言咨询</div>
				<div v-for="(item,index) in list" class="list">
					<div class="">
=======
		<div class="employer signup">
			<div class="margin15">
				<div class="title">报名列表（66/999）</div>
				<div v-for="(item,index) in list" class="list">
					<div class="oh">
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
						<img src="" class="fl" />
						<div id="" class="fl center">
							<div>
								马云
<<<<<<< HEAD
								<img src="../../assets/img/icons/auth-icon.png" class="" />
							</div>
							<div class="message">
								沙发！就很棒！
							</div>
						</div>
						<div style="clear: both;"></div>
					</div>
				</div>
				<div class="toMess">我要留言</div>
=======
								<img src="../../assets/img/icons/vip-icon.png" class="vip" />
							</div>
							<div>
								报名时间：2019.4.12 14:02:24
							</div>
						</div>
					</div>
				</div>
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14

			</div>

		</div>
<<<<<<< HEAD
		<div class="employer signup" style="margin-bottom: 0.8rem;">
			<div class="margin15">
				<div class="title">报名列表（66/999）</div>
				<div class="list oh">
					<div class="signimg"  v-for="(item,index) in list">
						<img src="" class="" />
						<img src="../../assets/img/icons/vip-icon.png" class="vip" />
					</div>
				</div>

			</div>

		</div>
		<!--立即报名-->
		<div class="tosignup oh">
			<a href='18603456462' class="">联系电话</a>
=======

		<!--立即报名-->
		<div class="tosignup oh">
			<!--<button class="">立即沟通</button>-->
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14

			<button class="fr">报名参加</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
<<<<<<< HEAD
				list: [{}, {}],
				details: ''
			}
		},
		mounted() {
			this.details = JSON.parse(localStorage.getItem('jianzhiDetails'))
		},
		methods: {
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
				if(month < 10) {
					month = '0' + month
				}
				if(date < 10) {
					date = '0' + date
				}
				return month + "月" + date + "日";
			},
			formatDateFull(now) {
				var time = new Date(now)
				var year = time.getFullYear();
				var month = time.getMonth() + 1;
				var date = time.getDate();
				var hour = time.getHours();
				var minute = time.getMinutes();
				var second = time.getSeconds();
				if(month < 10) {
					month = '0' + month
				}
				if(date < 10) {
					date = '0' + date
				}
				return year + '年' + month + "月" + date + "日 " + hour + ':' + minute;
=======
				list: [{}, {}]
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
			}
		}
	}
</script>

<style scoped lang='less'>
	.mainmes {
		padding: 0.6rem;
		box-shadow: 0px 0px 25px 3px rgba(181, 181, 181, 0.35);
		border-radius: 0.2rem;
		font-size: 0.48rem;
		margin-bottom: 1.2rem;
		>div {
			margin-bottom: 0.4rem;
		}
		>div:last-child {
			margin-bottom: 0rem;
		}
		img {
			width: 0.48rem;
			height: 0.48rem;
			margin-right: 0.12rem;
			position: relative;
			top: .06rem;
		}
		.title {
			font-size: 0.84rem;
			font-weight: bold;
			color: #333333;
		}
		.price {
			font-size: 0.6rem;
			color: #FD7252;
		}
		.simple {
			color: #666;
			font-weight: 300;
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
		.type {
			background: none;
			color: #FD7252;
			border: 1px solid #FD7252;
		}
		.official {
			background: none;
			color: #5F96FF;
			border: 1px solid #5F96FF;
		}
		.renzheng {
			background: none;
			color: #F7D029;
			border: 1px solid #F7D029;
		}
		.line {
			width: 100%;
			height: 1px;
			background: #E8E8E8;
		}
	}
	
	.attention {
		img {
			width: 0.48rem;
			height: 0.48rem;
			margin-right: 0.12rem;
			position: relative;
			top: 0.1rem;
		}
		>div {
			width: 11.44rem;
			line-height: 0.6rem;
		}
	}
	
	.describe {
		font-size: 0.52rem;
		color: #333333;
		.title {
			font-size: 0.6rem;
			font-weight: bold;
		}
		>div {
			margin-bottom: 0.8rem;
			line-height: 0.72rem;
		}
		>div>div:first-child {
			font-weight: bold;
			margin-bottom: 0.4rem;
			position: relative;
			left: -0.24rem;
		}
	}
	
	.gray {
		width: 100%;
		height: 0.2rem;
		background: rgba(246, 246, 250, 1);
	}
	
	.employer {
		padding: 0.6rem 0rem;
		.title {
			font-weight: bold;
			font-size: 0.6rem;
			color: #333333;
			margin-bottom: 0.4rem;
		}
		>div>div>div>img {
			width: 2rem;
			height: 2rem;
			border-radius: 50%;
			background: #333333;
			margin-right: 0.68rem;
		}
<<<<<<< HEAD
		>div>div>div.signimg{
			float: left;
			width: 2rem;
			height: 2rem;
			position: relative;
			margin-right: 0.6rem;
		}
		>div>div>div.signimg>img:last-child{
			width: 0.88rem;
			height: 0.4rem;
			border-radius: 0px;
			position: absolute;
			top: 0rem;
			left: 0rem;
		}
=======
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
		.center {
			width: 8rem;
			img {
				width: 0.56rem;
				height: 0.64rem;
				margin-bottom: 0px;
				position: relative;
				top: 0.12rem;
			}
			.vip {
				width: 0.88rem;
				height: 0.4rem;
				top: 0px;
			}
			>div:first-child {
				font-size: 0.6rem;
				margin-bottom: 0.4rem;
			}
			>div:last-child {
				font-size: 0.52rem;
				color: #666666;
				font-weight: 300;
			}
<<<<<<< HEAD
			>div.message {
				width: 100%;
				min-height: 1.8rem;
				padding: 0.4rem;
				box-sizing: border-box;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 0px 13px 1px rgba(204, 204, 204, 0.35);
				color: #333;
				font-weight: 500;
				position: relative;
			}
			>div.message:before {
				content: '';
				display: inline-block;
				width: 0;
				height: 0;
				border-top: 5px solid transparent;
				border-bottom: 5px solid transparent;
				border-right: 5px solid white;
				position: absolute;
				top: 0.2rem;
				left: -0.2rem;
			}
		}
		.toMess{
			width: 100%;
			text-align: center;
			color: #0ABF87;
			font-size: 0.64rem;
			margin-top: 1.4rem;
			font-weight: 600;
=======
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
		}
		button {
			width: 2.8rem;
			height: 1.12rem;
			background: rgba(10, 191, 135, 1);
			border-radius: 0.12rem;
			border: none;
			color: white;
			font-size: 0.48rem;
		}
	}
	
	.signup {
		padding: 1.2rem 0rem;
<<<<<<< HEAD
		/*margin-bottom: 0.8rem;*/
=======
		margin-bottom: 0.8rem;
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
		.title {
			margin-bottom: 1.2rem;
		}
		.list {
			margin-bottom: 0.64rem;
		}
	}
	
	.tosignup {
		width: 100%;
		padding: 0.32rem 0.6rem;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 13px 1px rgba(237, 237, 237, 0.6);
		position: fixed;
		bottom: 0px;
		button {
			width: 8rem;
			height: 1.8rem;
			background: linear-gradient(140deg, rgba(14, 204, 145, 1), rgba(70, 229, 149, 1));
			border-radius: 0.12rem;
			color: white;
			font-size: 0.64rem;
			border: none;
		}
<<<<<<< HEAD
		a {
			display: inline-block;
			height: 1.8rem;
			width: 5.4rem;
			line-height: 1.8rem;
			/*padding: 0px 0.6rem;*/
			text-align: center;
			background: white;
			border: 1px solid #0ABF87;
			color: #0ABF87;
			box-sizing: border-box;
			border-radius: 0.12rem;
		}
=======
>>>>>>> 7114ea9bcc5c355bc1f3d0333c9fa133afb42e14
	}
</style>