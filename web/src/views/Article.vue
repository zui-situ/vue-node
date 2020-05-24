<template>
  	<div class="page-article">
		<div class="d-flex py-3 px-2">
			<div class="iconfont icon-Back"></div>
			<strong class="flex-1">
				{{model.title}}
			</strong>
			<div class="text-grey fs-xs"></div>
		</div>
		<div v-html="model.body" class="px-3 body fs-lg">

		</div>
  	</div>
</template>
<script>
	export default {
		props:{
			id:{ require:true }
		},
		data(){
			return{
				model:{

				},
			}
		},
		methods:{
			async fetch(){
				const res = await this.$http.get(`articles/${this.id}`)
				this.model = res.data;
			}
		},
		created(){
			this.fetch();
		}
	}
</script>
<style lang="scss">
	.page-article{
		.body{
			img{
				max-width:100%;
				height:auto;
			} 
		}
	}
</style>
