import { User } from "./user";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AppConfig } from "./appConfig";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private user: User;

    constructor(private readonly httpService: HttpClient) { }

    auth(login: string, password: string) {
        this.httpService.post(AppConfig.API_ENDPOINT + '/auth', { login: login, password: password })
            .subscribe((res) => {
                if (res['success']) {
                    this.user = new User(login);
                }
            });
    }
}