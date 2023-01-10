import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'



const apiSlice =createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://jobbox-com.onrender.com/",
    }),
    tagTypes:["Jobs", "Job"],
    endpoints:(builder)=>({}),
})

export default apiSlice