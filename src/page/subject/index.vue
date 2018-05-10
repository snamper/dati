<template>
    <div class="subject_wrap">
        <div class="header">
            <img src="../../assets/image/rule.png" alt="">
        </div>
        <div class="content">
            <router-view @num ='changeNum' @totalNum= 'totalNum'></router-view>
        </div>
        <div class="footer">
            <a class="progress" @click ='showModel'>
                <i></i>
                {{active}}/{{total}}
            </a>
            <a class="submit" @click="$router.push('result')">提交</a>
        </div>
        <!-- model -->
        <transition name='fade'>
            <div class="isModel" v-if='show'>
                <div class="item_wrap">
                    <ul>
                        <li class="active" v-for='n in total'>{{n}}</li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name:'subject',
        data(){
            return {
                active:1,
                total:3,
                show:false
            }
        },
        methods:{
            changeNum(res){
                this.active = res
            },
            totalNum(total){
                this.total= total
            },
            // 显示答题的题目
            showModel(){
                this.show = !this.show
            }
        }
    }
</script>

<style lang="less" src='./index.less'></style>
