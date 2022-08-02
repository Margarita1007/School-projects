import News from '../components/view/news/news';
import Sources from '../components/view/sources/sources';

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

