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
        applyJob:builder.mutation({
            query:(data)=>({
                url:"/apply",
                method:"PATCH",
                body:data,
            }),
           
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
            providesTags:["Job"]

        }),
       getAppliedJobs:builder.query({
            query:({email,jobId})=>({
                url:`/applied-jobs/${email}/job/${jobId}`,
            }),
        }),
       getAppliedJobsWithEmail:builder.query({
            query:(email)=>({
                url:`/applied-jobs/${email}`,
            }),
        }),

        question:builder.mutation({
            query:(data)=>({
                url:"/query",
                method:"PATCH",
                body:data,
            }),
           invalidatesTags:["Job"]
        }),
        reply:builder.mutation({
            query:(data)=>({
                url:"/reply",
                method:"PATCH",
                body:data,
            }),
            invalidatesTags:["Job"]
           
        }),


    })
})

export const {
    usePostJobMutation,
    useApplyJobMutation,
    useGetJobQuery,
    useGetJobByIdQuery,
    useGetAppliedJobsQuery,
    useQuestionMutation,
    useReplyMutation,
    useGetAppliedJobsWithEmailQuery

} =jobApi