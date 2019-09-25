<template>
	<div class="nav" v-if='display'>
		<img src="../assets/img/icons/fanhui.png" @click="back" />
		<!--{{navname}}-->
		<span>{{name}}</span>
	</div>
</template>

<script>
	export default {
		name: 'jianzhiHeader',
		props: {
			name: String
		},
		data() {
			return {
				display:false
			}
		},
		mounted() {
		},
		watch: {
			name: {
				deep: true, // 深度监听
				handler(newVal, oldVal) {
					if(newVal != '间职' && newVal !='首页' &&newVal!='我的'){
						this.display = true
					}else{
						this.display = false
					}
				}
			}

		},
		methods:{
			back(){
				this.$router.back()
			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.nav {
		width: 100%;
		height: 2rem;
		line-height: 2rem;
		position: fixed;
  top: 0;
  left: 0;
		z-index: 100;
		font-size: 18px;
		color: #000;
		text-align: center;
		font-weight: bold;
		background: white;
		/*margin-bottom: 2.96rem;*/
		img{
			width: 0.44rem;
			height: 0.8rem;
			position: absolute;
			left: 0.6rem;
			top: 37%;
		}
	}
</style>
