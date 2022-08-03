import AppController from './controller/controller';
import AppView from './view/appView';
import News from '../components/view/news/news';
import Sources from '../components/view/sources/sources';

export type Options = {
    readonly apiKey?: string;
    readonly category?: 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
    readonly language?: 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';
    readonly country?:
        | 'ae'
        | 'ar'
        | 'at'
        | 'au'
        | 'be'
        | 'bg'
        | 'br'
        | 'ca'
        | 'ch'
        | 'cn'
        | 'co'
        | 'cu'
        | 'cz'
        | 'de'
        | 'eg'
        | 'fr'
        | 'gb'
        | 'gr'
        | 'hk'
        | 'hu'
        | 'id'
        | 'ie'
        | 'il'
        | 'in'
        | 'it'
        | 'jp'
        | 'kr'
        | 'lt'
        | 'lv'
        | 'ma'
        | 'mx'
        | 'my'
        | 'ng'
        | 'nl'
        | 'no'
        | 'nz'
        | 'ph'
        | 'pl'
        | 'pt'
        | 'ro'
        | 'rs'
        | 'ru'
        | 'sa'
        | 'se'
        | 'sg'
        | 'si'
        | 'sk'
        | 'th'
        | 'tr'
        | 'tw'
        | 'ua'
        | 'us'
        | 've'
        | 'za';
    readonly sources?: string;
};

// type of object for every article from News
export type NewsData = {
    status: string;
    totalResults: number;
    articles: [
        {
            urlToImage: string;
            author: string;
            source: {
                name: string;
            };
            publishedAt: string;
            title: string;
            description: string;
            url: string;
        }
    ];
};

//type of object for initial response data
export type ResponseData = {
    status: string;
    sources: [
        {
            id: string;
            name: string;
            description: string;
            url: string;
            category: string;
            language: string;
            country: string;
        }
    ];
};

export type CBGeneric<T> = (data: T) => void;

export enum EndPoints {
    sources = 'sources',
    everything = 'everything',
}

export interface LoaderInterface {
    baseLink: string;
    options: Options | Record<string, unknown>;
    getResp({ endpoint, options }: { endpoint: EndPoints; options?: Options }, callback: () => void): void;
    errorHandler(res: Response): Response;
    makeUrl(endpoint: EndPoints, options?: Options): string;
    load(method: string, endpoint: EndPoints, callback: CBGeneric<ResponseData>, options: Options): void;
}

export interface AppControllerInterface {
    getSources(
        { endpoint, options }: { endpoint: EndPoints; options?: Options },
        callback: CBGeneric<ResponseData>
    ): void;
    getNews(e: Event, callback: CBGeneric<NewsData>): void;
}

export interface NewsInterface {
    draw(data: NewsData): void;
}

export interface SourcesInterface {
    draw(data: ResponseData): void;
    clear(): void;
}

export interface AppViewInterface {
    news: News;
    sources: Sources;
    drawNews(data: NewsData): void;
    drawSources(data: ResponseData): void;
}

export interface AppInterface {
    controller: AppController;
    view: AppView;
    start(): void;
}
