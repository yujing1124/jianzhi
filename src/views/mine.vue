<template>
	<div style="background: rgba(244, 244, 244, 1);height: 130vh;">
		<div class="content">
			<div class="setup">
				设置
			</div>
			<div class="headimg flex ">
				<img src="../assets/img/mine/img.png" />
				<div>
					<div class="name">Embiid</div>
					<div class="userId">ID:888888</div>
				</div>
			</div>
			<div class=" space-around money">
				<div class="flex">
					<img src="../assets/img/mine/money.png" />
					<div>
						<div>223.08</div>
						<div>可提现余额</div>
					</div>
				</div>
				<div class="line"></div>
				<div class="flex">
					<img src="../assets/img/mine/money2.png" />
					<div>
						<div>1988</div>
						<div>总收益</div>
					</div>
				</div>
			</div>
			<div class="upgrade space-between">
				<div>
					升级成为店主 省钱+赚钱
				</div>
				<div>立即升级</div>
			</div>

		</div>
		<div class="content advertising">
			<div class="">
				<img src="../assets/img/mine/guanggao.png" />
			</div>

		</div>
		<div class="content menu">
			<ul class="">
				<li class="space-between"  @click="toDeatils">
					<div>
						<img src="../assets/img/icons/my-icon2.png" style="width: 0.64rem;height: 0.8rem;"/>
						发布新兼职
					</div>
					<div>
						>
					</div>
				</li>
				<li class="space-between">
					<div>
						<img src="../assets/img/icons/full-icon.png" style="width: 0.8rem;height: 0.6rem;"/>
						发布新全职
					</div>
					<div>
						>
					</div>
				</li>
				<li class="space-between">
					<div>
						<img src="../assets/img/icons/release-icon.png" style="width: 0.8rem;height: 0.8rem;"/>
						我的发布
					</div>
					<div>
						>
					</div>
				</li>
				<li class="space-between">
					<div>
						<img src="../assets/img/mine/qianbao.png" style="width: 0.76rem;height: 0.72rem;"/>
						我的钱包
					</div>
					<div>
						>
					</div>
				</li>
			</ul>
		</div>
		<div class="content menu" style="margin-bottom: 4rem;">
			<ul class="">
				<li class="space-between">
					<div>
						<img src="../assets/img/mine/fuli.png" style="width: 0.8rem;height: 0.72rem;"/>
						会员福利
					</div>
					<div>
						>
					</div>
				</li>
				<li class="space-between">
					<div>
						<img src="../assets/img/mine/ziliao.png" style="width: 0.68rem;height: 0.8rem;"/>
						个人资料
					</div>
					<div>
						>
					</div>
				</li>
				<li class="space-between">
					<div>
						<img src="../assets/img/icons/email-icon.png" style="width: 0.8rem;height: 0.56rem;"/>
						意见反馈
					</div>
					<div>
						>
					</div>
				</li>
				<li class="space-between">
					<div>
						<img src="../assets/img/icons/custom-icon.png" style="width: 0.8rem;height: 0.8rem;"/>
						联系客服
					</div>
					<div>
						>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			toDeatils() {
				this.$router.push('/part-time')
			},
		}
	}
</script>

<style scoped lang="less">
	#app {
		background: #F4F4F4;

	}

	.content {
		width: 100%;
		padding: 0.6rem;
		margin-bottom: 0.4rem;
		background: white;
	}

	.setup {
		text-align: right;
		width: 100%;
		color: #868686;
		font-size: 0.68rem;
		margin-top: 0.44rem;
		margin-bottom: 0.36rem;
	}

	.headimg {
		margin-bottom: 0.64rem;
		img{
			width: 2rem;
			height: 2rem;
			border-radius: 50%;
			background: #FF5459;
			margin-right: 0.8rem;
		}
		>div {
			line-height: 1rem;
		}
		.name {
			font-size: 0.72rem;
			font-weight: bold;
			color: rgba(95, 95, 95, 1);
		}
		.userId {
			font-size: 0.52rem;
			font-weight: 300;
			color: rgba(134, 134, 134, 1);
		}
	}

	.money {
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 13px 1px rgba(237, 237, 237, 1);
		border-radius: 7px 7px 0px 0px;
		>div {
			text-align: center;
			padding: 0.68rem 0px;
			img {
				width: 1.12rem;
				height: 1.12rem;
				margin-right: 0.6rem;
				position: relative;
				top: 10px;
			}
			>div {
				>div:first-child {
					font-size: 0.84rem;
					font-weight: bold;
					color: rgba(255, 86, 86, 1);
					margin-bottom: 0.56rem;
				}
				>div:last-child {
					font-size: 0.48rem;
					font-weight: 300;
					color: rgba(134, 134, 134, 1);
				}
			}
		}
		.line {
			width: 1px;
			height: 1.36rem;
			background: rgba(216, 216, 216, 1);
			position: relative;
			top: 1rem;
		}
	}

	.upgrade {
		width: 100%;
		padding: 0px 0.44rem;
		height: 1.28rem;
		line-height: 1.28rem;
		color: #FFE0B6;
		font-size: 0.56rem;
		background: linear-gradient(90deg, rgba(44, 42, 40, 1), rgba(64, 62, 68, 1), rgba(97, 93, 93, 1), rgba(44, 42, 40, 1), rgba(44, 42, 40, 1), rgba(64, 62, 68, 1));
	}

	.advertising {
		background: transparent;
		padding: 0px;
		>div {
			height: 3.12rem;
			/*background: #0ABF87;*/
			box-sizing: border-box;
			border-radius: 0.2rem;
		}
		img{
			height: 3.12rem;
		}
	}
	.menu{
		padding: 0px 0.6rem;
		li{
			height: 2rem;
			line-height: 2rem;
			border-bottom: 1px solid #eeeeee;
			color: #454545;
			font-size: 0.6rem;
			img{
				margin-right: 0.6rem;
				position: relative;
				top: 3px;
			}
		}
		li:last-child{
			border-bottom: none;
		}
	}
</style>
