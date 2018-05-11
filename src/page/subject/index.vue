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
                        <template v-for='(n,index) in total'>
                            <li
                                :class="{active:isActive.indexOf(index+1)>-1}"
                            >{{n}}</li>
                        </template>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'subject',
        data(){
            return {
                active:1,
                total:0,
                show:false,
                high:[
                    {
                        index:1
                    },
                    {
                        index:2
                    },
                    {
                        index:4
                    }
                ]
            }
        },
        computed:{
            isActive(){
                let arr = this.high.map(item=>{
                    return item.index
                })
                return arr

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
                this._getChecked();
                // this.isActive();
            },
            _getChecked(){
                axios.get("api/Home/Index/responseAll").then(res=>{
                    console.log(res.data)
                    // this.$nextTick(()=>{
                    //     this.high = res.data
                    // })
                }).catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style lang="less" src='./index.less'></style>
