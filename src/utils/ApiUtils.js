export default class ApiUtils {
    // Get API Request Service
    static getApiRequest = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url).then((response) => {
                response.json().then((data) => {
                    resolve(data);
                }).catch(error => reject(error))
            }).catch(error => reject(error))
        })
    }
}
