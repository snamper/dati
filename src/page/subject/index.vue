<template>
    <div class="subject_wrap">
        <div class="header">
            <img src="../../assets/image/rule.png" alt="">
        </div>
        <div class="content">

                <router-view @num ='changeNum' @totalNum= 'totalNum' ref='timu'></router-view>


        </div>
        <div class="footer">
            <a class="progress" @click ='showModel'>
                <i></i>
                {{active}}/{{total}}
            </a>
            <a class="submit" @click="$router.push('result')">提交</a>
        </div>
        <!-- model -->
        <div class="dialog_modal">
            <transition name='fade'>
                <div class="isModal" v-if='show' @click ='closeModel'>
                    <!-- 具体显示容器 -->
                    <div class="item_wrap" @click.stop='noModal'>
                        <ul>
                            <template v-for='(n,index) in total'>
                                <li
                                    :class="{active:isActive.indexOf(index+1)>-1}"
                                    @click="selectIndex(index)"
                                >{{n}}</li>
                            </template>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { Toast , Dialog } from 'vant'

    export default {
        name:'subject',
        data(){
            return {
                active:1,
                total:0,
                show:false,
                flag:true,//防止在模态框关闭的时候点击触发再次显示模态框
                high:[]//高亮显示的数组
            }
        },
        computed:{
            isActive(){
                let arr = this.high.map(item=>{
                    return Number(item.index) //后台穿过来的是字符串
                })
                // console.log(arr);
                return arr

            }
        },
        created(){
            // this._getChecked();
        },
        methods:{
            changeNum(res){
                this.active = res
            },
            // 这个显示的是总数的
            totalNum(total){
                this.total= total
            },
            //答题的模态框
            showModel(){
                this.show = !this.show
                this._getChecked();
                // this.isActive();
            },
            closeModel(){
                // 单纯的关闭
                this.show = false
            },
            // 阻止冒泡
            noModal(){

            },
            // 获取到那些是已经做过的题目
            _getChecked(){
                axios.get("api/Home/Index/responseAll").then(res=>{
                    // console.log(res.data)
                    this.$nextTick(()=>{
                        this.high = res.data
                    })
                }).catch(err=>{
                    Toast.fail('网络错误！');

                })
            },
            selectIndex(index){
                // 跳转到对应的题
                let arr = this.high.map(item=>{
                    return Number(item.index) //后台传过来的是字符串
                })
                console.log(arr);
                Dialog.confirm({

                    message: '前往该题吗？'
                }).then(() => {
                    this.showModel(); //关闭模态
                    this.changeNum(index+1) //显示当前的题目号
                    this.$refs.timu.jumpIndex(index) //调用子组件的方法跳转到对应的题目
                }).catch(() => {
                    // on cancel
                });
            }
        }
    }
</script>
<style lang="less" src='./index.less'></style>
