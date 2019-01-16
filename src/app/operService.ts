import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Operation } from "./operation";
import { AppConfig } from "./appConfig";

@Injectable({
    providedIn: 'root',
})
export class OperService {
    constructor(private readonly httpService: HttpClient) { }

    addOperation(operation: Operation) {
        this.httpService.post(AppConfig.API_ENDPOINT + '/addOperation', operation)
            .subscribe((response) => {
                response['success']
            });
    }
}