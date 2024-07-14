import { createApi } from '@/services/composable/useApi';
import { createApiMultipart } from '@/services/composable/useApiMultipart';

export async function getCulture() {
  try {
    const api = await createApi();
    const responseGet = await api.get('/budayas'); // Ganti dengan endpoint API Anda
    return responseGet.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
export async function createCulture(params:any) {
  try {
    const api = await createApiMultipart();
    const responseGet = await api.post('/add-budayas',params); // Ganti dengan endpoint API Anda
    return responseGet.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
export async function Login(params:any) {
  try {
    const api = await createApi();
    const responseGet = await api.post('/login',params); // Ganti dengan endpoint API Anda
    if (responseGet.status === 200) {
      return responseGet.data;
    }else{
      return undefined;
    }
  } catch (error) {
    // console.error('Error fetching data:', error);
    // throw error;
    return undefined;
  }
}
export async function publishCulture(id:number) {
  try {
    const api = await createApi();
    const responseGet = await api.put('/budayas/publish/'+id); // Ganti dengan endpoint API Anda
    return responseGet.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
export async function takedownCulture(id:number) {
  try {
    const api = await createApi();
    const responseGet = await api.delete('/budayas/'+id); // Ganti dengan endpoint API Anda
    return responseGet.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

