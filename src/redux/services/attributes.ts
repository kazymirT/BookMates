import { baseApi } from './baseApi';
import { AllAttributes, AllAttributesResponse } from './services.types';

export const AttributesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAttributes: builder.query<AllAttributes, void>({
      query: () => 'admin/book/get-all-lists',
      transformResponse: (response: AllAttributesResponse) => ({
        ...response,
        years: response.years.map((year) => ({ id: year, name: String(year) })),
      }),
      providesTags: ['Attributes'],
    }),
    addCategory: builder.mutation<string, string>({
      query: (category) => ({
        url: `admin/category/add?name=${category}`,
        method: 'POST',
        responseHandler: (response) => response.text(),
      }),
      invalidatesTags: ['Category', 'Attributes'],
    }),
    editCategory: builder.mutation<string, { name: string; id: number }>({
      query: ({ id, name }) => ({
        url: `admin/category/edit/${id}?name=${name}`,
        method: 'PATCH',
        responseHandler: (response) => response.text(),
      }),
      invalidatesTags: ['Category', 'Attributes'],
    }),
    deleteCategoryById: builder.mutation<string, number>({
      query: (categoryId) => ({
        url: `admin/category/delete/${categoryId}`,
        method: 'DELETE',
        responseHandler: (response) => response.text(),
      }),
      invalidatesTags: ['Category', 'Attributes'],
    }),
    addLanguage: builder.mutation<string, string>({
      query: (category) => ({
        url: `admin/language/add?name=${category}`,
        method: 'POST',
        responseHandler: (response) => response.text(),
      }),
      invalidatesTags: ['Language', 'Attributes'],
    }),
    editLanguage: builder.mutation<string, { name: string; id: number }>({
      query: ({ id, name }) => ({
        url: `admin/language/edit/${id}?name=${name}`,
        method: 'PATCH',
        responseHandler: (response) => response.text(),
      }),
      invalidatesTags: ['Category', 'Attributes'],
    }),
    deleteLanguageById: builder.mutation<string, number>({
      query: (categoryId) => ({
        url: `admin/language/delete/${categoryId}`,
        method: 'DELETE',
        responseHandler: (response) => response.text(),
      }),
      invalidatesTags: ['Language', 'Attributes'],
    }),
    addAuthor: builder.mutation<string, string>({
      query: (category) => ({
        url: `admin/author/add?name=${category}`,
        method: 'POST',
        responseHandler: (response) => response.text(),
      }),
      invalidatesTags: ['Author', 'Attributes'],
    }),
    editAuthor: builder.mutation<string, { name: string; id: number }>({
      query: ({ id, name }) => ({
        url: `admin/author/edit/${id}?name=${name}`,
        method: 'PATCH',
        responseHandler: (response) => response.text(),
      }),
      invalidatesTags: ['Category', 'Attributes'],
    }),
    deleteAuthorById: builder.mutation<string, number>({
      query: (categoryId) => ({
        url: `admin/author/delete/${categoryId}`,
        method: 'DELETE',
        responseHandler: (response) => response.text(),
      }),
      invalidatesTags: ['Author', 'Attributes'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllAttributesQuery,
  useAddCategoryMutation,
  useAddAuthorMutation,
  useAddLanguageMutation,
  useEditCategoryMutation,
  useEditAuthorMutation,
  useEditLanguageMutation,
  useDeleteCategoryByIdMutation,
  useDeleteAuthorByIdMutation,
  useDeleteLanguageByIdMutation,
} = AttributesApi;
