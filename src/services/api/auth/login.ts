import apiClient from '../apiClient';
import { UserLoginRequestBody, UserLoginResponseBody } from '@backendTypes';

export const login = async (
  data: UserLoginRequestBody,
  language = 'en-GB'
): Promise<UserLoginResponseBody> => {
  try {
    const apiResponse = await apiClient.post('/user/login', data, language);
    return await apiResponse.json();
  } catch (error) {
    console.error(error);

    return {
      ok: false,
      status: 500,
      errorMessage: 'Unknown error occurred',
    };
  }
};
