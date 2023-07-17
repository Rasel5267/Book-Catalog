import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
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
      query: ({ id, values }) => ({
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
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = productApi;
