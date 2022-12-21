import axios from "axios"

export const requestHttp = async (url, method, body, headers) => {
    const response = await axios({
        method,
        url,
        data: body,
        headers
    });
    if (response.problem) {
        let message = 'UNKNOW';
        switch (response.problem) {
            case 'NETWORK_ERROR':
                message = 'Không có kết nối mạng';
                break;
            case 'TIMEOUT_ERROR':
                message = 'NETWORK_ERROR';
                break;
            case 'CONNECTION_ERROR':
                message = 'CONNECTION_ERROR';
                break;
            case 'SERVER_ERROR':
                message = 'SERVER_ERROR';
                break;
            case 'CLIENT_ERROR':
                message = 'CLIENT_ERROR';
                break;
            default:
                break;
        }
        return { success: false, message };
    }
    return response.data;
}