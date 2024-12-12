export interface IMarket {
  id: string;
  name: string;
  description: string;
  coupons: string;
  cover: string;
  address: string;
  latitude: number;
  longitude: number;
}

export interface IMarketDetails {
  address: string;
  categoryId: string;
  coupons: number;
  cover: string;
  description: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  phone: string;
  rules: Rule[];
}

export interface Rule {
  description: string;
  id: string;
  marketId: string;
}
