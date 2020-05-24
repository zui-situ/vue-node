<template>
    <div class="home">
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide>
                <img src="../assets/images/201703081610285716673.jpg" alt="" class="w-100">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/images/20191127163057_106 (2).png" alt="" class="w-100">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/images/20191202092119_23.png" alt="" class="w-100">
            </swiper-slide>
            <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
        </swiper>
        <!-- end of swiper -->
        <div class="nav-icons bg-white mt-3  text-center pt-3 text-dark-1">
            <div class="d-flex flex-wrap">
                <div class="nav-item mb-3" v-for="n in 10" :key="n">
                    <i class="sprite sprite-news"></i>
                    <div class="py-2">爆料站</div>
                </div>
            </div>
            <div class="bg-light py-2 fs-sm">
                <i class="sprite sprite-arrow mr-1"></i>
                <span>收起</span>
            </div>
        </div>
        <!-- end of nav icons -->
        <list-card icon="Menu" title="新闻资讯" :categories="newCat">
            <template #items="{category}">
                <router-link tag="div" :to="`/articles/${news._id}`"
                v-for="(news,i) in category.newsList" :key="i" class="py-2 fs-lg d-flex">
                    <span class="text-info">[{{news.categoryName}}]</span>
                    <span class="px-2">|</span>
                    <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
                    <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
                </router-link>
            </template>
        </list-card>
        <list-card icon="hero" title="英雄列表" :categories="heroCat">
            <template #items="{category}">
                <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
                    <router-link v-for="(hero,i) in category.heroList" :key="i" class="p-2 text-center"
                    style="width:20%;" 
                    tag="div"
                    :to="`/heroes/${hero._id}`">
                        <img :src="hero.avatar" alt="" class="w-100">
                        <div>{{hero.name}}</div>
                    </router-link>
                </div>
            </template>
        </list-card>
    </div>
</template>
<script>
    import dayjs from 'dayjs';
    export default {
        filters:{
            date(val){
                return dayjs(val).format('MM/DD');
            }
        },
        data(){
            return {
                swiperOption:{
                    pagination:{
                        el:".pagination-home"
                    }
                },
                newCat:[],
                heroCat:[],
            }
        },
        created(){
            this.fetchNewsCats();
            this.fetchHeroesCats();
        },
        methods:{
            async fetchNewsCats(){
                let res = await this.$http.get('news/list');
                this.newCat = res.data;
                // console.log(this.newCat);
            },
            async fetchHeroesCats(){
                let res = await this.$http.get('heroes/list');
                this.heroCat = res.data;
                // console.log(this.newCat);
            }
        }
    }
</script>
<style lang="scss">
@import '../assets/scss/variables';
    .swiper{
        img{
            height:200px;
        }
    }
    .title{
        text-align: left;
    }
    .pagination-home{
        .swiper-pagination-bullet{
            opacity: 1;
            border-radius: 0.1538rem;
            background: map-get($colors,'white');
            &.swiper-pagination-bullet-active {
                background: map-get($colors,'info');
            }
        }
    }
    .nav-icons{
        border-top:1px solid $border-color;
        border-bottom:1px solid $border-color;
        .nav-item{
            width:25%;
            border-right:1px solid $border-color;
            &:nth-child(4n){
                border-right :none;
            }
        }
    }
</style>