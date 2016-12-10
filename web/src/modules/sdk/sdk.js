import fetcher from './fetcher';

class Sdk {

    constructor() {
        console.log('hello world');
    }

    getEcho = async (args) => {
        const resp = await fetcher.get('/echo', args);
        return resp;
    }

    getSessions = async () => {
        const resp = await fetcher.get('/session/');
        return resp;
    }

    getOverview = async () => {
        const resp = await fetcher.get('/overview');
        return resp;
    }

    getConfig = async () => {
        const resp = await fetcher.get('/config');
        return resp;
    }

}

export {Sdk};
