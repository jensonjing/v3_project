import api from '../assets/lib/api';

const httpservers = {
    isBindwx(params){
        return api.getAxios('post','/untoken/if_bind_wx',params);
    },
    getidentity(params){
        return api.getAxios('get','/select_identity',params,sessionStorage.getItem('token'));
    }
};

export default httpservers;