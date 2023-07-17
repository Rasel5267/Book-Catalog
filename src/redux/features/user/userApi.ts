import { api } from '@/redux/api/apiSlice';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToWishList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToWishlist/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['wishlist'],
    }),
    removeFromWishList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromWishlist/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['wishlist'],
    }),
    getWishlist: builder.query({
      query: () => '/users/wishlist',
      providesTags: ['wishlist'],
    }),
    addToReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToReadingList/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['readingList'],
    }),
    removeFromReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromReadingList/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['readingList'],
    }),
    getReadingList: builder.query({
      query: () => '/users/readingList',
      providesTags: ['readingList'],
    }),
    addToFinishedBooks: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToFinishedBook/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['finishedBooks'],
    }),
    removeFromFinishedBooks: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromFinishedBooks/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['finishedBooks'],
    }),
    getFinishedBooks: builder.query({
      query: () => '/users/finishedBooks',
      providesTags: ['finishedBooks'],
    }),
  }),
});

export const {
  useAddToWishListMutation,
  useGetWishlistQuery,
  useAddToReadingListMutation,
  useAddToFinishedBooksMutation,
  useGetReadingListQuery,
  useGetFinishedBooksQuery,
  useRemoveFromWishListMutation,
  useRemoveFromReadingListMutation,
  useRemoveFromFinishedBooksMutation,
} = userApi;
