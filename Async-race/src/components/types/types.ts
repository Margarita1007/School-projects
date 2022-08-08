import Loader from "../loader/loader";
import QueryMaker from "../loader/query-maker";
import Viewer from "../viewer/viewer";

export type QueryGeneral = {
    url: 'garage' | 'engine' | 'winners';
    method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
    queryParams?: {
        id: number;
        status: 'started' | 'stopped' | 'drive';
        _page?: number;
        _limit?: number;
        _sort?: 'id' | 'wins' | 'time';
        _order?: 'ASC' | 'DESC';
    }
    urlParams?: {
        id?: number;
    }
    header?: {'Content-Type': 'application/json'};
    data?: {
        name?: string;
        color?: string;
        id?: number;
        wins?: number;
        time?: number;
    }
    body?: string;
}

export type GetCarsQuery = {
    url: 'garage';
    method: 'GET';
    _page?: number;
    _limit?: number;
};
export type GetCarsContentResponse = {
        name: string;
        color: string;
        id: number;
}[];

export type GetOneCarQuery = {
    url: string;
    method: 'GET';
    id: number;
};
export type GetOneCarContentResponse = {
    name: string;
    color: string;
    id: number;
} | {};

export type CreateCarQuery = {
    url: string;
    method: 'POST';
    header: {'Content-Type': 'application/json'};
    /* data: {
        name: string;
        color: string;
    } */
    body: string;
};
export type CreateCarContentResponse = {
    name: string;
    color: string;
    id: number;
};

export type DeleteCarQuery = {
    url: string;
    method: 'DELETE';
    id: number;
};

export type UpdateCarQuery = {
    url: string;
    method: 'PUT';
    header: {'Content-Type': 'application/json'};
    id: number;
    body: string;
    // data: {
    //     name: string;
    //     color: string;
    // }
};

export type WinnerDataType = {
    name: string;
    color: string;
    id: number;
    wins: number;
    time: number;
}

export type GetWinnersQueryType = {
    url: string;
    method: string;
    page?: number;
    limit?: number;
    sort: string;
    order: string;
}

export type UpdateCarContentResponse = {
    name: string;
    color: string;
    id: number;
} | {};

export type StartStopEngineQuery = {
    url: string;
    method: string;
    id: number;
    status: string;
};
export type StartStopEngineResponse = {
    velocity: number;
    distance: number;
};

export type SwitchDriveQuery = {
    url: 'engine';
    method: 'PATCH';
    id: number;
    status: 'drive';
};
export type DriveResponse = {
    success: string;
};

export type GetWinnersQuery = {
    url: 'winners';
    method: 'GET';
    _page?: number;
    _limit?: number; 
    _sort?: 'id' | 'wins' | 'time';
    _order?: 'ASC' | 'DESC';
};
export type GetWinnersResponse = {
    id: number;
    wins: number;
    time: number;
}[];

export type GetOneWinnerQuery = {
    url: 'winners';
    method: 'GET';
    id: number;
};
export type GetOneWinnerResponse = {
    id: number;
    wins: number;
    time: number;
} | {};

export type CreateWinnerQuery = {
    url: 'winners';
    method: 'POST';
    header: {'Content-Type': 'application/json'};
    data: {
        id: number;
        wins: number;
        time: number;
    };
};
export type CreateWinnerResponse = {
    id: number;
    wins: number;
    time: number;
} | string;

export type DeleteWinnerQuery = {
    url: 'winners';
    method: 'DELETE';
    id: number;
}

export type UpdateWinnerQuery = {
    url: 'winners';
    method: 'PUT';
    id: number;
    header: {'Content-Type': 'application/json'};
    data: {
        wins: number;
        time: number;
    };
};
export type UpdateWinnerResponse = {
    wins: number;
    time: number;
    id: number;
};

export interface QueryMakerInterface {
    baseLink: string;
    queryMakerMethod: (options: QueryGeneral) => {url: string, method: string};
    queryMakerPOSTQuery: (options: CreateCarQuery) => {url: string, method: string, header: {'Content-Type': 'application/json'}, body: string};
}

export interface LoaderInterface {
    getRespPage: (query: {url: string, method: string}, page: number, limit: number) => Promise<{cars: GetCarsContentResponse, count: number}>;
    createRespOneCar: (query: {url: string; method: string, header: {'Content-Type': 'application/json'}, body: string}) => Promise<CreateCarContentResponse>;
}

export interface ViewerInterface {
    viewGarage: (respData: GetCarsContentResponse) => void;
}

export interface AppInterface {
    view: Viewer;
    query: QueryMaker;
    loader: Loader;
    start: () => void;
}

export interface ControllerInterface {
    addListener: (elements: NodeList | HTMLElement, event: string, callback: () => void) => void;
    readOptionsForCreateQuery: () => QueryGeneral;
    readOptionsForUpdateQuery: (id: number) => QueryGeneral;
}

export interface StateInterface {
    pageGarage: number;
    pageWinners: number,
    limit: number,
    limitWin: number,
    cars: {
        name: string;
        color: string;
        id: number;
    }[];
    carsWin: {
        id: number;
        wins: number;
        time: number;
    }[];
    countCar: number;
    countWinners: number;
    generateCount: number;
    view: string;
    sort: string;
    sortOrder : string;
}

export type startDrive = {
    id: number;
    timeAnimation: number;
    responce: DriveResponse | undefined;
}

export type RaceWinnerType = {
    name?: string;
    color?: string;
    id?: number;
    time?: number;
}

export type WinnerType = {
    id: number;
    wins: number;
    time: number;
}