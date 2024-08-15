import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { SORT_OPTIONS_URL } from '@/utils/constants';
import {
  deleteSearchParams,
  updateSearchParams,
} from '@/utils/updateSearchParams';

const params = new URLSearchParams(window.location.search);

export type FilterType = {
  price: string[];
  years: string[];
  categories: string[];
  language: string[];
};

export type QueryParamsState = {
  sort: string;
  search?: string;
  filter: FilterType;
  page: string;
};

const initialState: QueryParamsState = {
  sort: SORT_OPTIONS_URL[params.get('sort') || ''] || 'За популярністю',
  filter: {
    categories:
      params
        .get('categories')
        ?.split('_')
        .map((lang) => SORT_OPTIONS_URL[lang]) || [],
    language:
      params
        .get('language')
        ?.split('_')
        .map((lang) => SORT_OPTIONS_URL[lang]) || [],
    price: params.get('price')?.split('-') || [],
    years: params.get('years')?.split('-') || [],
  },
  search: params.get('search') || undefined,
  page: params.get('page') || '1',
};

export const queryParamsSlice = createSlice({
  name: 'queryParams',
  initialState,
  selectors: {
    queryAll: (state) => state,
    filter: (state) => state.filter,
    sort: (state) => state.sort,
    page: (state) => state.page,
    search: (state) => state.search,
  },
  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
      state.page = '1';
      updateSearchParams('sort', [state.sort]);
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.page = '1';
      updateSearchParams('search', [state.search]);
    },
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
      updateSearchParams('page', [state.page]);
    },
    setPrice: (state, action: PayloadAction<string[]>) => {
      state.filter.price = action.payload;
      state.page = '1';
      updateSearchParams('price', state.filter.price);
    },
    addFilterItem: (
      state,
      action: PayloadAction<{
        filterName: keyof FilterType;
        value: string | number;
      }>
    ) => {
      const { filterName, value } = action.payload;
      const filterArray = state.filter[filterName] as (string | number)[];
      if (filterArray && !filterArray.includes(value)) {
        filterArray.push(value);
      }
      state.page = '1';
      updateSearchParams(filterName, [...state.filter[filterName]]);
    },
    removeFilterItem: (
      state,
      action: PayloadAction<{
        filterName: keyof FilterType;
        value: string | number;
      }>
    ) => {
      const { filterName, value } = action.payload;
      state.filter[filterName] = state.filter[filterName].filter(
        (item) => item !== value
      ) as never[];
      state.page = '1';
      updateSearchParams(filterName, [...state.filter[filterName]]);
    },
    clearFilters: (state) => {
      state.sort = 'За популярністю';
      state.page = '1';
      state.search = undefined;
      state.filter.categories = [];
      state.filter.language = [];
      state.filter.price = [];
      state.filter.years = [];
      deleteSearchParams();
    },
    initializeState: (state, action: PayloadAction<QueryParamsState>) => {
      state.filter = action.payload.filter;
      state.page = action.payload.page;
      state.search = action.payload.search;
      state.sort = action.payload.sort;
    },
  },
});

export const {
  setSort,
  setSearch,
  setPage,
  addFilterItem,
  removeFilterItem,
  setPrice,
  clearFilters,
  initializeState,
} = queryParamsSlice.actions;
export const { filter, page, search, sort } = queryParamsSlice.selectors;
export const queryAllData = (state: RootState) => state.queryParams;
export default queryParamsSlice.reducer;
