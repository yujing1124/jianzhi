<template>
	<div id="tabbar" v-if="display">
		<ul>

			<li v-for="(item,index) in tabbar" v-on:click="itemClick(item.path,item.name)" :class="item.active?'active':''">
				<img :src="item.active?item.checked:item.img" />
				<br /> {{item.name}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'tabbar',
		props: {
			name: String
		},
		data() {
			return {
				tabbar: [{
						img: require('../assets/img/icons/home.jpg'),
						checked: require("../assets/img/icons/home-selected.jpg"),
						name: '首页',
						path: '/',
						active: false
					},
					{
						img: require('../assets/img/icons/join.jpg'),
						checked: require("../assets/img/icons/join-selected.jpg"),
						name: '间职',
						path: '/jianzhi',
						active: false
					},
					//					{
					//						img: require('../assets/img/icons/message.jpg'),
					//						checked: require("../assets/img/icons/message-selected.jpg"),
					//						name: '消息',
					//						path:'/message',
					//						active:false
					//					},
					{
						img: require('../assets/img/icons/my.jpg'),
						checked: require("../assets/img/icons/my-selected.jpg"),
						name: '我的',
						path: '/mine',
						active: false
					}
				],
				display: true
			}
		},
		mounted() {
			this.change(this.name)
		},
		watch: {
			name: {
				deep: true, // 深度监听
				handler(newVal, oldVal) {
					this.change(newVal)

				}
			}

		},
		methods: {
			itemClick(path, name) {
				this.$router.push(path)

			},
			change(newVal) {
				if(newVal != '间职' && newVal != '首页' && newVal != '我的') {
					this.display = false
				} else {
					this.display = true
					this.tabbar.forEach((m) => {
						if(newVal == m.name) {
							m.active = true
						} else {
							m.active = false
						}
					})
				}
			}
		}

	}
</script>

<style scoped lang="less">
	#tabbar {
		position: fixed;
		bottom: 0px;
		width: 100%;
		box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.12);
		z-index: 100;
		background: white;
		ul {
			width: 100%;
			display: flex;
			justify-content: space-around;
			padding: 0.2rem;
			li {
				text-align: center;
				font-size: 0.48rem;
				color: #a0a0a0;
			}
			img {
				width: 0.8rem;
				height: 0.8rem;
				margin-bottom: 0.2rem;
			}
			.active {
				color: #46E595;
			}
		}
	}
</style>