import { api } from '@/redux/api/apiSlice';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addToWishList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToWishlist/${id}`,
        method: 'POST',
        invalidatesTags: ['wishlist'],
      }),
    }),
    addToReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToReadingList/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['wishlist'],
    }),
    addToFinishedBooks: builder.mutation({
      query: ({ id }) => ({
        url: `/users/addToFinishedBook/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['readingList'],
    }),
    removeFromWishList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromWishlist/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['wishlist'],
    }),
    removeFromReadingList: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromReadingList/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['readingList'],
    }),
    removeFromFinishedBooks: builder.mutation({
      query: ({ id }) => ({
        url: `/users/removeFromFinishedBooks/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['finishedBooks'],
    }),
    getWishlist: builder.query({
      query: () => '/users/wishlist',
      providesTags: ['wishlist'],
    }),
    getReadingList: builder.query({
      query: () => '/users/readingList',
      providesTags: ['readingList'],
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
