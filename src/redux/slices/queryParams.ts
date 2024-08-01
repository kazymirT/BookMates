import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export type FilterType = {
  price: number[];
  years: string[];
  categories: string[];
  language: string[];
};

type QueryParamsState = {
  sort: string;
  search: string | null;
  filter: FilterType;
  page: number;
};

const initialState: QueryParamsState = {
  sort: 'За популярністю',
  filter: {
    categories: [],
    language: [],
    price: [],
    years: [],
  },
  search: null,
  page: 1,
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
    setSort: (state, action: PayloadAction<{ sort: string }>) => {
      state.sort = action.payload.sort;
      state.page = 1;
    },
    setSearch: (state, action: PayloadAction<{ search: string }>) => {
      state.search = action.payload.search;
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page;
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
    },
    setPrice: (state, action: PayloadAction<number[]>) => {
      state.filter.price = action.payload;
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
} = queryParamsSlice.actions;
export const { filter, page, search, sort } = queryParamsSlice.selectors;
export const queryAllData = (state: RootState) => state.queryParams;
export default queryParamsSlice.reducer;
