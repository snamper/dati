<template>
    <div>
        <div class="content_wrap">
            <div class="left_arrow" @click='reduce'></div>
            <div class="desc">
                <div class="id_">{{this.index+1}}</div>
                <div class="text">
                    {{currenList.content}}
                </div>
            </div>
            <div class="right_arrow" @click='add'></div>
        </div>
        <!--  -->
        <template>
            <div class="main" v-show="isYes===0">
                <img src="../../assets/image/yes.png" alt="" class="yes" @click='yes'>
                <img src="../../assets/image/no-active.png" alt="" class="no-active" @click='no'>
            </div>
        </template>
        <template>
            <div class="main" v-show="isYes===1">
                <img src="../../assets/image/yes-active.png" class="yes-active" @click='yes'>
                <img src="../../assets/image/no.png" class="no" @click='no'>
            </div>
        </template>
    </div>
</template>

<script>
    import { Toast } from 'vant'
    import axios from 'axios'
    export default {
        name:'Title',
        data(){
            return {
                index:0,//数组中的下标
                isYes:0,//图片的切换
                id:0,//当前题目的ID
                type:"",//类型
                currenList:{},
                content_list:[]
            }
        },
        created(){
            axios.get('/api/Home/Index/getQ?start=1&count=9').then(res=>{
                this.content_list = res.data;
                this.currenList = this.content_list[this.index] ;
                this.$nextTick(()=>{
                    this.$emit('totalNum',this.content_list.length)
                })
            }).catch(err=>{
                console.log(err);
            })
        },
        mounted(){
           
        },

        methods:{
            add(){
                let length = this.content_list.length ;

                if(this.index=== length-1){
                    Toast({
                        message:'没有题目了````',
                        duration:1000
                    })
                    return false
                }else{
                    this.index++;
                    this.currenList = this.content_list[this.index] ;
                    this.id= this.currenList.id;
                    this.$emit('num',this.id)
                }
            },
            reduce(){
                if(this.index===0){
                    return
                }else{
                    this.index--;
                    this.currenList = this.content_list[this.index] ;
                    this.id= this.currenList.id;
                    this.$emit('num',this.id)
                }
            },
            yes(){
                this.isYes = 1;

            },
            no(){
                this.isYes = 0;
            }
        }
    }

</script>

<style lang="less" scoped src='./index.less'></style>
