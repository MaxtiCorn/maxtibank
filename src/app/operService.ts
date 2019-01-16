import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Operation } from "./operation";

@Injectable({
    providedIn: 'root',
})
export class OperService {
    constructor(private readonly httpService: HttpClient) { }

    addOperation(operation: Operation) {
        this.httpService.post('http://localhost:6969/addOperation', operation)
            .subscribe((response) => {
                response['success']
            });
    }
}