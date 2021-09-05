import axios from "axios";


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID kFREGknHhE7SrFktYDkEsnbtc7ppwt8kZoNLVil-dHo'
    }
})