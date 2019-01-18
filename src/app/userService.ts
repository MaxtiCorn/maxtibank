import { User } from "./user";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AppConfig } from "./appConfig";
import { OperService } from "./operService";
import { AccService } from "./accService";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private _user: User;

    constructor(private readonly _httpService: HttpClient) { }

    get user() {
        return this._user;
    }

    auth(login: string, password: string) {
        this._httpService.post(AppConfig.API_ENDPOINT + '/auth', { login: login, password: password })
            .subscribe((res) => {
                const id: number = res['id'];
                if (id) {
                    this._user = new User(id, login);
                }
            });
    }
}