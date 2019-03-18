
class Http {

    constructor(){
        
    }

    GET:function (url,params){
        this.$axios.get(
            url,
            {
              params:params
            }
          )
    };

    POST:function (url,params){
        this.$axios.post(
            url,
            {
                params:params
            }
        )
    }
}

const http = new Http();

export default http;