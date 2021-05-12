import axios from 'axios';

import config from './config';
import utility from './utility';

const obj = {
    getAxios:(type,url,params,token)=>{
        //axios的请求拦截器
        axios.defaults.withCredentials=true;//允许携带cookie
        axios.interceptors.request.use(data=>{
            //这里是请求前的操作，可以执行其它自定义任务，例如进行请求前的一些操作。
            //例如：在请求前有一个加载loading状态,这里借用element ui Loading方法
            /*
            loadinginstace = Loading.service({
                lock: true,
                text: '正在加载中,请稍后...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.3)',
                customClass:"osloading",
                fullscreen: true 
            });
            */
            data.timeout = config.timeout;//设置超时时间
            console.log('请求前');
            return data;
        },error=>{
            // loadinginstace.close();//失败关闭加载窗
            return Promise.reject(error);
        });
        if(type.toUpperCase()=='GET'||type.toUpperCase()=='DELETE'){
            // console.log(params)
            if(params=='undefined'||params==undefined){
                params = {};
            }
            params = utility.splitObj(params);
            return new Promise((resolve,reject)=>{
                axios({
                    method:type,
                    headers: {
                        'token':token
                    },
                    url:config.http_url + url + params
                }).then(response=>{
                    resolve(response.data)
                }).catch(err=>{
                    reject(err)
                });
            })
        }else if(type.toUpperCase()=='POST'||type.toUpperCase()=='PUT'){
            return new Promise((resolve,reject)=>{
                axios({
                    url: config.http_url + url,
                    headers: {
                        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        'token':token
                    },
                    method:type,
                    responseType: 'json',
                    data:params
                    // data:qs.stringify(params)
                }).then(response=>{
                    resolve(response.data)
                }).catch(err=>{
                    reject(err);
                });
            });
        }
    }
}

export default obj;