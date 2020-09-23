import { httpGet, httpPost } from './request';


export const getRoot = () => httpGet('/api/root',{path:'1234'});