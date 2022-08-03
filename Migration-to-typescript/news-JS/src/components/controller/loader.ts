import { LoaderInterface, Options, EndPoints, ResponseData, CBGeneric } from '../types';
class Loader implements LoaderInterface {
    baseLink: string;
    options: Options | Record<string, unknown>;
    constructor(baseLink: string, options: Options | Record<string, unknown>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options }: { endpoint: EndPoints; options?: Options },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(endpoint: EndPoints, options?: Options) {
        const urlOptions: Options = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof Options]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: EndPoints, callback: CBGeneric<ResponseData>, options: Options = {}) {
        fetch(this.makeUrl(endpoint, options), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
