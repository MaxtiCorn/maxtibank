import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfig } from "./appConfig";
import { User } from "./user";

@Injectable({
    providedIn: 'root',
})
export class AccService {
    constructor(private readonly _httpService: HttpClient) { }

    addAccount(user: User, cash: number) {
        return this._httpService.post(AppConfig.API_ENDPOINT + '/addAccount', { userId: user.id, cash });
    }

    public getAccounts(user: User) {
        const params = new HttpParams()
            .set('userId', user.id.toString());
        return this._httpService.get(AppConfig.API_ENDPOINT + '/getAccounts', { params })
    }
}