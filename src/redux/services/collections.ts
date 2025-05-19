import { baseNewApi } from './baseNewApi';
import { Book, CollectionMain } from './services.types';

export type Lang = 'en' | 'ua';

export interface CollectionByIdArgs {
  collectionId: number | string;
  lang: Lang;
}

export interface CollectionList extends CollectionMain {
  bookCount: number;
}

export interface CollectionInfo {
  id: number;
  descriptionOne: string;
  descriptionTwo: string;
  name: string;
}

export interface CollectionById {
  collection: CollectionInfo;
  books: Book[];
}

export const collectionApi = baseNewApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCollections: builder.query<CollectionList[], Lang>({
      query: (lang) => ({
        url: `/collection?lang=${lang}`,
      }),
    }),
    getCollectionById: builder.query<CollectionById, CollectionByIdArgs>({
      query: ({ lang, collectionId }) => ({
        url: `/collection/${collectionId}?lang=${lang}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllCollectionsQuery, useGetCollectionByIdQuery } =
  collectionApi;
