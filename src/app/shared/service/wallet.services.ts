import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { IBaseResponse } from '../model/base-response.model';
import { IBasePageResponse } from '../model/base-page-response.model';
import { WALLET_ENV_PAGE} from '../constant/uri.constant';


type EntityResponseType = HttpResponse<IBaseResponse<any>>;
type EntityPageResponseType = HttpResponse<IBaseResponse<IBasePageResponse<any>>>;

@Injectable()
export class WalletService {

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
  }

  create(request: any): Observable<EntityResponseType> {
    return this._httpClient
      .post<IBaseResponse<any>>(WALLET_ENV_PAGE, request, {
        observe: 'response',
      });
  }

  update(request: any): Observable<EntityResponseType> {
    return this._httpClient
      .put<IBaseResponse<any>>(WALLET_ENV_PAGE + `?code=${request.code}`, request, {
        observe: 'response',
      });
  }

  find(id: any): Observable<EntityResponseType> {
    return this._httpClient
      .get<IBaseResponse<any>>(WALLET_ENV_PAGE + `?code=${id}`, {
        observe: 'response',
      });
  }

  queryPage(req?: any): Observable<EntityPageResponseType> {
    const options = createRequestOption(req);
    return this._httpClient.get<IBaseResponse<IBasePageResponse<any>>>(WALLET_ENV_PAGE, { params: options, observe: 'response' });
  }
}
