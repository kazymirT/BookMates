import { baseNewApi } from './baseNewApi';

export interface MetaAttributes {
  id: number;
  nameEN: string;
  nameUA: string;
}

export interface MetaResponse {
  cats: MetaAttributes[];
  langs: MetaAttributes[];
  years: string[];
}
export interface Attributes {
  cats: MetaAttributes[];
  langs: MetaAttributes[];
  years: MetaAttributes[];
}

export const AttributesApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAttributesMeta: builder.query<Attributes, void>({
      query: () => 'meta/langs-categories-years',
      transformResponse: (response: MetaResponse) => ({
        ...response,
        years: response.years.map((year) => ({
          id: Number(year),
          nameEN: year,
          nameUA: year,
        })),
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllAttributesMetaQuery } = AttributesApi;
