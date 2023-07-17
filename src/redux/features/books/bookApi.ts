import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['review'],
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    createBook: builder.mutation({
      query: ({ values }) => ({
        url: '/books/create',
        method: 'POST',
        body: values,
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, ...values }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: values,
      }),
    }),
    deleteBook: builder.mutation({
      query: ({ id }) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
    }),
    addReview: builder.mutation({
      query: ({ id, values }) => ({
        url: `/books/review/${id}`,
        method: 'POST',
        body: {
          review: values.review,
        },
      }),
      invalidatesTags: ['review'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useAddReviewMutation,
} = productApi;
