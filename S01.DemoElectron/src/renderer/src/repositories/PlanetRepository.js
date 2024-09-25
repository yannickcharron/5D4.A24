import { inject } from 'vue';
export class PlanetRepository {
    axios = inject('axios');
    async retrieveAll() {
        const res = await this.axios.get('/planets');
        if (res.status === 200) {
            return res.data;
        }
    }
}
