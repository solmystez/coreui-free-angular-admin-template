export interface IBasePageResponse<T> {
  results?: T;
  paging?: IPaginationResponse;
}

export interface IPaginationResponse {
  totalElements: number;
  totalPages: number;
  size: number;
  page: number;
}
 