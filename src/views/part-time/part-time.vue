<template>
	<div style="margin-top: 2rem;">
		<div class="space-between choosetype margin15">
			<div>选择岗位类型</div>
			<div><span>1</span> / 3</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.choosetype{
		>div:first-child{
			font-size: 0.72rem;
			font-weight: bold;
			color: #5EEA7F;
			padding-top: 0.4rem;
		}
		>div:last-child{
			font-size: 0.56rem;
			color: #999;
			span{
				font-size: 1.12rem;
				color: #333333;
			}
		}
		
	}
</style>