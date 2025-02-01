import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Addresses {
  AddressDeliveryAllowed: boolean;
  Area: string;
  DeliveryCity: string;
  MainDescription: string;
  ParentRegionCode: string;
  ParentRegionTypes: string;
  Present: string;
  Ref: string;
  Region: string;
  RegionTypes: string;
  RegionTypesCode: string;
  SettlementTypeCode: string;
  StreetsAvailability: boolean;
  Warehouses: number;
}

export interface Settlements {
  Addresses: Addresses[];
  TotalCount: number;
}

interface SettlementsResponse {
  data: Settlements[];
  errorCodes: [];
  errors: [];
  info: [];
  infoCodes: [];
  messageCodes: [];
  success: boolean;
  warningCodes: [];
  warnings: [];
}
interface WarehousesData {
  BeaconCode: string;
  BicycleParking: string;
  CanGetMoneyTransfer: string;
  CategoryOfWarehouse: string;
  CityDescription: string;
  CityDescriptionRu: string;
  CityRef: string;
  Delivery: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
  };
  DenyToSelect: string;
  Description: string;
  DescriptionRu: string;
  Direct: string;
  DistrictCode: string;
  GeneratorEnabled: string;
  HasFittingRoom: string;
  HasMirror: string;
  InternationalShipping: string;
  Latitude: string;
  Longitude: string;
  MaxDeclaredCost: string;
  Number: string;
  OnlyReceivingParcel: string;
  POSTerminal: string;
  PaymentAccess: string;
  Phone: string;
  PlaceMaxWeightAllowed: string;
  PostFinance: string;
  PostMachineType: string;
  PostalCodeUA: string;
  ReceivingLimitationsOnDimensions: {
    Width: number;
    Height: number;
    Length: number;
  };
  Reception: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
  };
  Ref: string;
  RegionCity: string;
  Schedule: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
  };
  SelfServiceWorkplacesCount: string;
  SendingLimitationsOnDimensions: {
    Width: number;
    Height: number;
    Length: number;
  };
  SettlementAreaDescription: string;
  SettlementDescription: string;
  SettlementRef: string;
  SettlementRegionsDescription: string;
  SettlementTypeDescription: string;
  SettlementTypeDescriptionRu: string;
  ShortAddress: string;
  ShortAddressRu: string;
  SiteKey: string;
  TotalMaxWeightAllowed: string;
  TypeOfWarehouse: string;
  WarehouseForAgent: string;
  WarehouseIllusha: string;
  WarehouseIndex: string;
  WarehouseStatus: string;
  WarehouseStatusDate: string;
  WorkInMobileAwis: string;
}

interface WarehousesResponse {
  success: boolean;
  data: WarehousesData[];
  errors: [];
  warnings: [];
  info: {
    totalCount: number;
  };
  messageCodes: [];
  errorCodes: [];
  warningCodes: [];
  infoCodes: [];
}

export type Address = {
  idCity: number;
  id: number;
  label: string;
  value: string;
  cityRef: string;
};

export type Warehouses = {
  label: string;
  value: string;
  id: number;
};

const NOVA_POSHTA_URL = import.meta.env.VITE_API_NOVA_POSHTA_URL;
const NOVA_POSHTA_API_KEY = import.meta.env.VITE_API_NOVA_POSHTA_API_KEY;

export const novaApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: NOVA_POSHTA_URL,
  }),
  endpoints: (builder) => ({
    getSettlements: builder.query<Address[], string>({
      query: (searchName) => ({
        url: 'getSettlements',
        method: 'POST',
        body: JSON.stringify({
          apiKey: NOVA_POSHTA_API_KEY,
          modelName: 'Address',
          calledMethod: 'searchSettlements',
          methodProperties: {
            CityName: searchName,
            Limit: '5',
            Page: `1`,
          },
        }),
      }),
      transformResponse: (response: SettlementsResponse) =>
        response.data[0]?.Addresses.map((address, index) => ({
          id: index,
          idCity: address.Warehouses,
          label: address.Present,
          value: address.MainDescription,
          cityRef: address.Ref,
        })),
      // response.data[0]?.Addresses.map((address) => address.MainDescription),
    }),
    getWarehouses: builder.query<Warehouses[], string>({
      query: (searchName) => ({
        url: 'getWarehouses',
        method: 'POST',
        body: JSON.stringify({
          apiKey: NOVA_POSHTA_API_KEY,
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityName: searchName,
            // CityRef: searchName,
          },
        }),
      }),
      transformResponse: (response: WarehousesResponse) =>
        response.data.map((warehouse, index) => ({
          label: warehouse.Description,
          value: warehouse.Description,
          id: index,
        })),
    }),
  }),
});

export const { useGetSettlementsQuery, useGetWarehousesQuery } = novaApi;
