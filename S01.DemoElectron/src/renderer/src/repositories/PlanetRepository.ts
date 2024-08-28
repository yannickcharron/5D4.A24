import { inject } from 'vue'
import { AxiosStatic } from 'axios'

export class PlanetRepository {
  axios = inject('axios') as AxiosStatic

  public async retrieveAll() {
    const res = await this.axios.get('/planets')
    if (res.status === 200) {
      return res.data
    }
  }
}
