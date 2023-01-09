import apiSlice from "../apiSlice"



const jobApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        postJob:builder.mutation({
            query:(data)=>({
                method:"POST",
                url:"/job",
                body:data,

            }),
            invalidatesTags:["Jobs"]
          
        }),
       getJob:builder.query({
            query:()=>({
                url:"/jobs",
            }),
            providesTags:["Jobs"]
        }),
       getJobById:builder.query({
            query:(id)=>({
                url:`/job/${id}`,
            }),
        }),
    })
})

export const {usePostJobMutation,useGetJobQuery,useGetJobByIdQuery} =jobApi