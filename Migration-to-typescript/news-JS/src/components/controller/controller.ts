//import { AppControllerInterface, CBGeneric, ResponseData } from '../types';
import { AppControllerInterface, EndPoints, Options, CBGeneric, ResponseData, NewsData } from '../types';
import AppLoader from './appLoader';

class AppController extends AppLoader implements AppControllerInterface {
    public getSources(_: { endpoint: EndPoints; options?: Options }, callback: CBGeneric<ResponseData>): void {
        super.getResp({ endpoint: EndPoints.sources }, callback);
    }

    public getNews(e: Event, callback: CBGeneric<NewsData>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target?.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId) {
                    if (newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: EndPoints.everything,
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
            }
            if (target.parentElement) {
                target = target.parentElement;
            }
        }
    }
}

export default AppController;
