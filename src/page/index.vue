<template>
    <div class="wrap">
        <div class="bg">
            <!-- <a class="start" @click='start'></a> -->
            <router-link to="/subject" class="start"></router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name:"index",
        methods:{
            start(){
                this.$router.push('/subject')
            }
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
                .fixed();
                background-image: url('../assets/image/index_bg.png');
                background-size: cover;
                background-repeat: no-repeat;
                .start{
                    position: absolute;
                    top:70%;
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
