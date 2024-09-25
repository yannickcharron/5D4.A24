import { AxiosStatic } from 'axios';
export declare class PlanetRepository {
    axios: AxiosStatic;
    retrieveAll(): Promise<any>;
}
