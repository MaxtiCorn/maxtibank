import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfig } from "./appConfig";
import { User } from "./user";

@Injectable({
    providedIn: 'root',
})
export class OperService {
    constructor(private readonly _httpService: HttpClient) { }

    addOperation(accountId: number, cash: number, comment: string) {
        this._httpService.post(AppConfig.API_ENDPOINT + '/addOperation', { accountId, cash, comment })
            .subscribe((response) => {
                response['success']
            });
    }

    getUserOperations(user: User) {
        const params = new HttpParams()
            .set('userId', user.id.toString());
        this._httpService.get(AppConfig.API_ENDPOINT + '/getOperations', { params })
    }

    getAccountOperations(account: Account) {
        const params = new HttpParams()
            .set('accountId', account.id.toString());
        return this._httpService.get(AppConfig.API_ENDPOINT + '/getOperations', { params })
    }
}