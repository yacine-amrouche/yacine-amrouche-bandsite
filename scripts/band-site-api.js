class BandSiteApi {
    constructor(apiKey) {
        this.baseUrl = 'https://project-1-api.herokuapp.com';
        this.apiKey = apiKey;
    }
    async getComment() {
        const url = `${this.baseUrl}/comments/?api_key=${this.apiKey}`;
      
    }
}

const myAPI = new BandSiteApi('48bc6bc4-78d6-4b68-a757-b1dff5a33d60');
myAPI.getComment();