class BandSiteApi {
    constructor(apiKey) {
        this.baseUrl = 'https://project-1-api.herokuapp.com';
        this.apiKey = apiKey;
    }
 
    async getShows() {
        const url = `${this.baseUrl}/showdates/?api_key=${this.apiKey}`;
        const response = await axios.get(url);
        

        const Shows = response.data;
        return Shows;
      
    }
    async getComments() {
        const url = `${this.baseUrl}/comments/?api_key=${this.apiKey}`;
        const response = await axios.get(url);
        

        const comments = response.data;
        return comments;
      
    }
}

//const myAPI = new BandSiteApi('48bc6bc4-78d6-4b68-a757-b1dff5a33d60');
//myAPI.getShows();
//console.log(myAPI);