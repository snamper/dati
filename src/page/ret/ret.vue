<template>
    <div class="result_wrap">
        <div class="belong_tilte"></div>
        <!-- 结果类型 -->
        <div class="dialog_wrap">
            <div class="dialog">
                <p class="text">{{type[currenType.id-1]}}</p>
            </div>
        </div>
        <!-- 结果的统计 -->
        <div class="resultTotal">
            <div class="left_wrap">
                <h3>结果统计</h3>
                <div class="type">
                    <p>快乐型：</p>
                    <p>完美型：</p>
                    <p>爱心型：</p>
                    <p>成就型：</p>
                    <p>自我型：</p>
                    <p>理智型：</p>
                    <p>疑惑型：</p>
                    <p>领袖型：</p>
                    <p>和平型：</p>
                </div>
            </div>
            <div class="right_wrap">
                <i class="icon" :class='classMap[currenType.id-1]'></i>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios' ;
    export default {
        name:'result' ,
        data(){
            return {
                currenType:{
                    id:1
                },
                type:['完美型','爱心型','成就型','自我型','理智型','疑惑型','快乐型','领袖型','和平型']
            }
        },
        created(){
            
            // 进入页面的时候请求数据
            // 这个是根据后台传过来的数据动态设置类型的图片
            this.classMap =['perfect','love','achievement','self','rational','confusion','happy','leader','peace'];

        }
    }
</script>

<style lang="less" scoped>
    .bg(@url){
        background-image:url('../../assets/image/@{url}.png')
    }
    .result_wrap{
        position: fixed;
        top:0;
        bottom: 0;
        left:0;
        width: 100%;
        background-image: url('../../assets/image/bg.png');
        background-size: cover;
        background-repeat: no-repeat;
        .belong_tilte{
            width: 24rem;
            height: 7.1rem;
            margin-left: .5rem;
            margin-right: 8.4rem;
            background-image: url('../../assets/image/belong.png');
            background-size: 24rem 7.1rem;
            background-repeat: no-repeat;

        }
        .dialog_wrap{
            width: 100%;
            margin: 4rem 0 5.6rem 0;
            .dialog{
                width: 24rem;
                height: 11.9rem;
                line-height: 11.9rem;
                margin: auto;
                background-image: url('../../assets/image/dialog.png');
                background-size: 24rem 11.9rem;
                .text{
                    font-size: 3.6rem;
                    color: #000;

                }
            }
        }
        .resultTotal{
            display: flex;
            padding: 0 3.7rem;
            .left_wrap{
                flex: 1;
                h3{
                    font-size: 1.8rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
                p{
                    font-size: 15px;
                    color: #000;
                    letter-spacing: 5px;
                    line-height: 20px;
                }
            }
            .right_wrap{
                width: 15rem;
                height: 15rem;
                .icon{
                    display:inline-block;
                    width:15rem;
                    height:15rem;
                    background-size:15rem 15rem;
                    background-repeat:no-repeat;
                    &.perfect{
                        // 完美
                        .bg(1)
                    }
                    &.love{
                        // 爱心
                        .bg(2)
                    }
                    &.achievement{
                        // 成就
                        .bg(3)
                    }
                    &.self{
                        // 自我
                        .bg(4)
                    }
                    &.rational{
                        // 理智
                        .bg(5)
                    }
                    &.confusion{
                        // 疑惑
                        .bg(6)
                    }
                    &.happy{
                        // 开心
                        .bg(7)
                    }
                    &.leader{
                        // 领袖
                        .bg(8)
                    }
                    &.peace{
                        // 和平
                        .bg(9)
                    }

                }
            }
        }
    }
</style>
