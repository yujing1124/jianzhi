<template>
	<div id="">
		<div style="margin-bottom: 3rem;">
			<div class="margin15 stepone" v-for="(item,index) in list">
			<div class="title">{{item.name}}</div>
			<ul>
				<li v-for='(key,value) in item._child'  @click="steptwo">{{key.name}}</li>
			</ul>
			
		</div>
		</div>
		
		<div id="" class="next">
			<button  @click="next">下一步</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			this.getList()
		},
		methods: {
			getList() {
				axios.get('http://jz.xiaohejun.cn/api/Partjob/getTypes').then((response) => {
							console.log(response.data); //成功回调
							if(response.data.code == 1) {
								this.list = response.data.data
							}
						}, (response) => {
							//失败回调
						})
			},
			
			steptwo(){
				
			},
			next(){
				this.$router.push('/part-time/releasetwo')
			}
		}
	}
</script>

<style scoped lang="less">
	.stepone{
		margin-top: 1.2rem;
		
		.title{
			font-size: 0.64rem;
			color: #333333;
			font-weight: 600;
			margin-bottom: 0.8rem;
		}
		ul{
			width: 100%;
			overflow: hidden;
			
		}
		li{
			float: left;
			padding: 0.2rem 0.4rem;
			border: 0.04rem solid #EEEEEE;
			color: #999;
			font-size: 0.56rem;
			margin-right: 0.4rem;
			margin-bottom: 0.4rem;
		}
	}
	.next{
		position: fixed;
		bottom: 0.8rem;
		width: 100%;
		text-align: center;
		button{
			width:12rem;
height:1.8rem;
background:linear-gradient(140deg,rgba(14,204,145,1),rgba(70,229,149,1));
box-shadow:0px 0px 13px 1px rgba(9,187,132,0.25);
border-radius:0.92rem;
font-size: 0.64rem;
color: white;
margin: 0 auto;
border: none;
		}
		
	}
</style>