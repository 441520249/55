import http from './http'

export function banner(){
    return http.GET('http://localhost:3000/findgoods',params);
}


