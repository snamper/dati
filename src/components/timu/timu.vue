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
            <div class="main" v-if="isYes===2">
                <img src="../../assets/image/yes.png" alt="" class="yes" @click='yes'>
                <img src="../../assets/image/no-active.png" alt="" class="no-active" @click='no'>
            </div>
        </template>
        <template>
            <div class="main" v-if="isYes===1">
                <img src="../../assets/image/yes-active.png" class="yes-active" @click='yes'>
                <img src="../../assets/image/no.png" class="no" @click='no'>
            </div>
        </template>
        <template>
            <div class="main" v-if='isYes===0'>
                <img src="../../assets/image/yes.png" alt="" class="yes" @click='yes'>
                <img src="../../assets/image/no.png" class="no" @click='no'>
            </div>
        </template>
    </div>
</template>

<script>
    import { Toast } from 'vant'
    import axios from 'axios' ;

    import postPerson from '@/api/personality'
    const OK =1,
            ERROR_OK =0;
    export default {
        name:'Title',
        data(){
            return {
                index:0,//数组中的下标
                isYes:0,//图片的切换
                id:0,//当前题目的ID
                type:0,//类型
                currenList:{},
                content_list:[]
            }
        },
        created(){
            axios.get('/api/Home/Index/getQ?start=1&count=12').then(res=>{
                this.content_list = res.data;
                this.currenList = this.content_list[this.index] ;
                this.type = this.currenList.leixing_id;
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
                this.isYes = 0;
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
                    this.type = this.currenList.leixing_id;
                    this.$emit('num',this.index+1)
                }
            },
            reduce(){
                this.isYes = 0;
                if(this.index===0){
                    return
                }else{
                    this.index--;
                    this.currenList = this.content_list[this.index] ;
                    this.id= this.currenList.id;
                    this.type = this.currenList.leixing_id;
                    this.$emit('num',this.index+1)
                }
            },
            yes(){
                // 点击是的
                this.isYes = 1;
                this._postPerson(1)
            },
            no(){
                // 点击否的
                this.isYes = 2;
                this._postPerson(0)

            },
            // 提交到后台当前题目的类型 和当前选择的是赞同还是否定
            //status 状态 1 为当前选择的是 0 当前选择的是否
            _postPerson(states){
                postPerson(this.type,states,this.index+1).then(res=>{
                    switch (res.status) {
                        case 1:
                        // Toast({
                        //     message:'您选择了是',
                        //     duration:500
                        // })
                            break;
                        default:
                        // Toast({
                        //     message:'您选择了否',
                        //     duration:500
                        // })
                    }
                }).catch(err=>{
                    Toast.fail('网络错误！');
                })
            }
        }
    }

</script>

<style lang="less" scoped src='./index.less'></style>
