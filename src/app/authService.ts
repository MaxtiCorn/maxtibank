import { User } from "./user";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private user: User;

    constructor(private readonly httpService: HttpClient) { }

    auth(login: string, password: string) {
        this.httpService.post('http://localhost:6969/auth', { login: login, password: password })
            .subscribe((res) => {
                if (res['success']) {
                    this.user = new User(login);
                }
            });
    }
}