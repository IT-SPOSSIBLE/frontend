import { apiclient } from "../client";
import { API_ENDPOINTS } from "../endpoints"; // adjust the path as necessary

interface LoginResponse {
  access: string;
  refresh: string;
  email: string;
}

interface RefreshTokenResponse {
  accessToken: string;
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await apiclient.post<LoginResponse>(
      API_ENDPOINTS.users.loginToken,
      { email, password }
    );
    console.log("Login response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const refreshToken = async (): Promise<string> => {
  try {
    const response = await apiclient.post<RefreshTokenResponse>(
      "/users/refresh-token", // optionally move this to API_ENDPOINTS.users.refreshToken
      {}
    );
    return response.data.accessToken;
  } catch (error) {
    console.error("Refresh token error:", error);
    throw error;
  }
};

export const logout = async (refresh: string): Promise<void> => {
  try {
    await apiclient.post(API_ENDPOINTS.users.logout, { refresh });
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};



interface RegisterPayload {
  first_name: string;
  middle_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  role: string;
}

export const register = async (data: RegisterPayload): Promise<void> => {
  try {
    console.log("DATA:",data);
    const response = await apiclient.post(API_ENDPOINTS.users.register, data);
    console.log(response.data);
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};
