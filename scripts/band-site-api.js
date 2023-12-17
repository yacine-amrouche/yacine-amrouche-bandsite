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
    async postComment(newComment) {
        const url = `${this.baseUrl}/comments/?api_key=${this.apiKey}`;
        const response = await axios.post(url, newComment);
    
        return response;
      }
      async deleteComment(id) {
        const url = `${this.baseUrl}/comments/${id}/?api_key=${this.apiKey}`;
        const response = await axios.delete(url);
    
        return response;
      }
    
}
