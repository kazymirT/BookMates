import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import {
  deleteSearchParams,
  updateSearchParams,
} from '@/utils/updateSearchParams';

const params = new URLSearchParams(window.location.search);

type Attributes = { id: number; name: string };

export type FilterType = {
  years: Attributes[];
  categories: Attributes[];
  language: Attributes[];
};

export type QueryParamsState = {
  price: string[];
  sort: string;
  search?: string;
  filter: FilterType;
  page: string;
};

const initialState: QueryParamsState = {
  sort: params.get('sort') || 'id-asc',
  filter: {
    categories: [],
    language: [],
    years: [],
  },
  price: params.get('price')?.split('-') || [],
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
      state.price = action.payload;
      state.page = '1';
      updateSearchParams('price', state.price);
    },
    addFilterItem: (
      state,
      action: PayloadAction<{
        filterName: keyof FilterType;
        attributes: { id: number; name: string };
        isClean?: boolean;
      }>
    ) => {
      const { filterName, attributes, isClean } = action.payload;

      const filterArray = state.filter[filterName];
      if (isClean) {
        state.filter[filterName] = [attributes];
      } else {
        if (
          filterArray &&
          !filterArray.some((attr) => attr.id === attributes.id)
        ) {
          filterArray.push(attributes);
        }
      }

      state.page = '1';
      updateSearchParams(
        filterName,
        state.filter[filterName].map((filter) => filter.id)
      );
    },
    removeFilterItem: (
      state,
      action: PayloadAction<{
        filterName: keyof FilterType;
        attributes: { id: number; name: string };
      }>
    ) => {
      const { filterName, attributes } = action.payload;
      state.filter[filterName] = state.filter[filterName].filter(
        (item) => item.id !== attributes.id
      );
      state.page = '1';
      updateSearchParams(
        filterName,
        state.filter[filterName].map((filter) => filter.id)
      );
    },
    clearFilters: (state) => {
      state.sort = 'id-asc';
      state.page = '1';
      state.search = undefined;
      state.filter.categories = [];
      state.filter.language = [];
      state.price = [];
      state.filter.years = [];
      deleteSearchParams();
    },
    initializeState: (state, action: PayloadAction<QueryParamsState>) => {
      const { filter, page, price, sort, search } = action.payload;
      state.filter = filter;
      state.page = page;
      state.search = search;
      state.sort = sort;
      state.price = price;
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
