export interface IBaseResponse<T> {
  status?: boolean;
  message?: string;
  data?: T;
}
