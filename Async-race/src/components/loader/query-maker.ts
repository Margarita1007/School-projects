import {
    QueryGeneral,
    QueryMakerInterface,
    CreateCarQuery,
    DeleteCarQuery,
    GetOneCarQuery,
    UpdateCarQuery,
    StartStopEngineQuery,
    GetWinnersQueryType,
} from '../types/types';

class QueryMaker implements QueryMakerInterface {
    baseLink: string;
    constructor() {
        this.baseLink = 'http://127.0.0.1:3000/';
    }

    queryMakerMethod(options: QueryGeneral) {
        return {
            url: `${this.baseLink}${options.url}`,
            method: options.method,
        };
    }
    queryMakerPOSTQuery(options: CreateCarQuery) {
        return {
            url: `${this.baseLink}${options.url}`,
            method: options.method,
            header: options.header,
            body: options.body,
        };
    }

    queryMakerDELETEQuery(options: DeleteCarQuery) {
        return {
            url: `${this.baseLink}${options.url}/${options.id}`,
            method: options.method,
        };
    }

    queryMakerGETOneQuery(options: GetOneCarQuery) {
        return {
            url: `${this.baseLink}${options.url}/${options.id}`,
            method: options.method,
        };
    }

    queryMakerUpdateQuery(options: UpdateCarQuery) {
        return {
            url: `${this.baseLink}${options.url}/${options.id}`,
            method: options.method,
            header: options.header,
            body: options.body,
        };
    }

    queryMakerEngine(options: StartStopEngineQuery) {
        return {
            url: `${this.baseLink}${options.url}?id=${options.id}&status=${options.status}`,
            method: options.method,
        };
    }

    queryMakerWinnersPageQuery(options: GetWinnersQueryType) {
        return {
            url: `${this.baseLink}${options.url}?_page=${options.page}&_limit=${options.limit}&_sort=${options.sort}&_order=${options.order}`,
            method: options.method,
        };
    }

    queryMakerWinnersQuery(options: GetWinnersQueryType) {
        return {
            url: `${this.baseLink}${options.url}?_sort=${options.sort}&_order=${options.order}`,
            method: options.method,
        };
    }
}

export default QueryMaker;
