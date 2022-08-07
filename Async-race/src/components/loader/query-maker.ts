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
    // check for QUERY PAGE parameter of page in options, return it if exists
    makeQueryParamPage(options: QueryGeneral) {
        return options.queryParams?._page ? `_page=${options.queryParams?._page}&` : '';
    }
    // check for QUERY LIMIT parameter in options...
    makeQueryParamLimit(options: QueryGeneral) {
        return options.queryParams?._limit ? `_limit=${options.queryParams?._limit}&` : '';
    }
    // check for QUERY SORT parameter in options...
    makeQueryParamSort(options: QueryGeneral) {
        return options.queryParams?._sort ? `_sort=${options.queryParams?._sort}&` : '';
    }
    // check for QUERY ORDER parameter in options...
    makeQueryParamOrder(options: QueryGeneral) {
        return options.queryParams?._order ? `_order=${options.queryParams?._order}&` : '';
    }
    // check for QUERY ID parameter in options...
    makeQueryParamID(options: QueryGeneral) {
        return options.queryParams?.id ? `id=${options.queryParams.id}&` : '';
    }
    // check for QUERY STATUS parameter in options...
    makeQueryParamStatus(options: QueryGeneral) {
        return options.queryParams?.status ? `status=${options.queryParams.status}&` : '';
    }
    // check for URL ID parameter in options...
    makeUrlParamID(options: QueryGeneral) {
        return options.urlParams?.id ? `/${options.urlParams.id}` : '';
    }
    // let's make query acoording to provided OPTIONS and results of makeURL... and makeQuery... methods
    queryMakerMethod(options: QueryGeneral) {
        if (options.method === 'GET') {
            return {
                url: `${this.baseLink}${options.url}${this.makeUrlParamID(options)}${this.makeQueryParamPage(
                    options
                )}${this.makeQueryParamLimit(options)}${this.makeQueryParamSort(options)}${this.makeQueryParamOrder(
                    options
                )}`,
                method: options.method,
            };
        }
        if (options.method === 'DELETE') {
            return {
                url: `${this.baseLink}${options.url}${this.makeUrlParamID}`,
                method: options.method,
            };
        }
        if (options.method === 'POST') {
            return {
                url: `${this.baseLink}${options.url}`,
                method: options.method,
                header: options.header,
                body: JSON.stringify(options.data),
            };
        }
        if (options.method === 'PUT') {
            return {
                url: `${this.baseLink}${options.url}${this.makeUrlParamID}`,
                method: options.method,
                header: options.header,
                data: options.data,
            };
        }
        return {
            url: `${this.baseLink}${options.url}${this.makeQueryParamID}&${this.makeQueryParamStatus}`,
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

    // queryMakerUpdatequery(options: )

    // queryMaker(url: string, options: GetCarsQuery) {
    //     return url;
    // };
}

export default QueryMaker;
