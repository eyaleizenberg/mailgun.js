/* eslint-disable camelcase */
export type IpsListResponseBody = {
  assignable_to_pools: boolean;
  items: string[];
  total_count: number;
}

export type IpData = {
  ip: string;
  dedicated: boolean;
  rdns: string;
}
