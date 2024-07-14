import axios from 'axios';
import type { AxiosInstance } from 'axios';

export async function createApiMultipart(): Promise<AxiosInstance> {
  const apiClient = axios.create({
    baseURL: 'https://challange-backend-production.up.railway.app/api',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return apiClient;
}