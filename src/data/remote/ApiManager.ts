import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export const BASE_URL = "이곳에 서버연결하세요"; // 테스트 서버

const ApiManager = () => {};

const normalClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
});

const authClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
});

authClient.interceptors.request.use((config: AxiosRequestConfig) => {
    const accessKeyStr = localStorage.getItem("accessKey");
    const accessKey = accessKeyStr == null ? null : JSON.parse(accessKeyStr);
    const userKey = localStorage.getItem("userKey");
    const now = Date.now();

    if (userKey != undefined) {
        if (accessKey != null && accessKey.expiredAt > now) {
            const payload = { ...config, headers: { ...config.headers, accessKey: accessKey.accessKey } };
            return payload;
        } else {
            return axios
                .request({
                    baseURL: BASE_URL,
                    url: "/key/" + userKey,
                    method: "get",
                })
                .then((response: AxiosResponse) => {
                    localStorage.setItem("accessKey", JSON.stringify(response.data));
                    const payload = {
                        ...config,
                        headers: { ...config.headers, accessKey: response.data.accessKey },
                    };
                    return payload;
                })
                .catch((error: AxiosError) => {
                    return Promise.reject(error.response || error.message);
                });
        }
    } else {
        const err: AxiosError = {
            name: "NoUserKey",
            message: "NoUserKey",
            config: config,
            isAxiosError: true,
            toJSON: () => ({}),
        };
        return Promise.reject(err);
    }
});

export const request = (config: AxiosRequestConfig, auth?: boolean) => {
    const client = auth == null ? authClient : auth ? authClient : normalClient;

    const onSuccess = (response: AxiosResponse) => {
        return response.data;
    };

    const onError = (error: AxiosError) => {
        if (error.message === "Expired key") {
            const userKey = localStorage.getItem("userKey");

            axios
                .request({
                    baseURL: BASE_URL,
                    url: "/key/" + userKey,
                    method: "get",
                })
                .then((response: AxiosResponse) => {
                    localStorage.setItem("accessKey", JSON.stringify(response.data));
                    const payload = {
                        ...config,
                        headers: { ...config.headers, accessKey: response.data.accessKey },
                    };
                    return payload;
                })
                .catch((error: AxiosError) => {
                    return Promise.reject(error.response || error.message);
                });
        }

        return Promise.reject(error.response || error.message);
    };

    return client(config).then(onSuccess).catch(onError);
};

export default ApiManager;
