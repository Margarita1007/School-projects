import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '168d98aac7d545f69bb7f35256e06dc1', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
