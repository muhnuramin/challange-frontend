import axios from 'axios';
import type { AxiosInstance } from 'axios';

export async function createApi(): Promise<AxiosInstance> {
  const apiClient = axios.create({
    baseURL: 'https://challange-backend-production.up.railway.app/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return apiClient;
}
