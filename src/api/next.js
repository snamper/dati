import axios from 'axios'
import qs from 'qs'

// 上一步下一步的函数

export default function next (index){
    let url = '/api/Home/Index/next',
    data ={
        index:index
    }
    return axios({
        method:'post',
        url:url,
        headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        data:qs.stringify(data)
    }).then(res=>{
        return Promise.resolve(res.data)
    }).catch(err=>{
        console.log(err);
    })
}
