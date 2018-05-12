
import axios from 'axios' ;
import qs from 'qs' ;

export default function postPerson(type,status,index){
    let url = 'api/Home/Index/response',
        id =type,
        state = status ,
        data = {
            index,index,
            id:id,
            state:state
        };
    return axios({
                method:'post',
                url:url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
                data:qs.stringify(data)
            }).then(res=>{
                return Promise.resolve(res.data)
            }).catch()
}
