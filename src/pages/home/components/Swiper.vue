<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper> 
    </div> 
</template>

<script>
export default {
    name: 'HomeSwiper',
    data() {
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                // 循环轮播
                loop: true
            },
            swiperList:[{
                id: '0001',
                imgUrl: '//img3.mukewang.com/szimg/5c9081eb080f137c09000300.jpg',
            },{
                id: '0002',
                imgUrl: '//img3.mukewang.com/szimg/5c8fb01f08d2d6cd09000300.jpg',
            },{
                id: '0003',
                imgUrl: '//img3.mukewang.com/szimg/5c9081eb080f137c09000300.jpg',
            },{                
                id: '0004',
                imgUrl: '//img2.mukewang.com/szimg/5c622774097d181318000600.jpg'
            }]
        }
    },
}
</script>

<style lang="stylus" scoped>
// 样式穿透，wrapper属性下不受scpoed限制
    .wrapper >>> .swiper-pagination-bullet-active
            background: #fff
    .wrapper
        overflow hidden
        width: 100%
        height: 0
        // 设置宽高比
        padding-bottom: 31.25%
        background: #eee
        .swiper-img
            width 100%
</style>
