<template>
    <div class="wrap">
        <div class="bg" ref ='bg'>
            <a class="start" @click='start'></a>
            <!-- <router-link to="/subject" class="start"></router-link> -->
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name:"index",
        created(){
            axios.get('/api/Home/Index/index1').then(res=>{
                // console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        },
        methods:{
            start(){
                this.$router.push('/subject')
                // 调用后台的方法
                axios.get('/api/Home/Index/startRes').then(res=>{
                    // console.log(res);
                }).catch(err=>{
                })
            }
        },
        mounted(){
            // 页面挂载的时候设置页面的高度
            let H = document.documentElement.clientHeight ,
                W =document.documentElement.clientWidth;
            this.$refs.bg.style.height = H +'px'


        }
    }
</script>
<style scoped lang='less'>
    .fixed(){
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    .wrap{
        .fixed();
        background-image: url('../assets/image/bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
            .bg{
                // .fixed();
                width: 100%;
                background-image: url('../assets/image/index_bg.png');
                background-size: contain;
                background-repeat: no-repeat;
                .start{
                    position: absolute;
                    top:60%;
                    left: 50%;
                    transform: translateX(-50%);
                    display: inline-block;
                    width: 120px;
                    height: 40px;
                    background-image: url('../assets/image/start.png');
                    background-size: 120px 40px;

                }
            }
    }
</style>
