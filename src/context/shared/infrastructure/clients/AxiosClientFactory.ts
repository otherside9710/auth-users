import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, Method } from 'axios';
import Logger from '@context/shared/infrastructure/impl/WinstonInfoLogger';
export default abstract class AxiosClientFactory {
  private axiosInstance: any = axios.create({});

  protected async invoke(
    url: string,
    method: Method,
    headers: AxiosRequestHeaders = { Accept: 'application/json' },
    data?: any,
    timeout: number = 10000,
  ): Promise<AxiosResponse<any | never>> {
    try {
      this.axiosInstance = axios.create({
        headers: headers,
      });

      this.handleInterceptors(headers, data);

      return await this.axiosInstance({ method, url, headers, data, timeout });
    } catch (error: any) {
      return error.response;
    }
  }

  private handleInterceptors = (headers: AxiosRequestHeaders, data?: object | unknown): void => {
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        Logger.print(`[ Request config ]: ${config.method?.toUpperCase() || ''} [ To ]: ${config.url || ''}`);

        return config;
      },
      (error: AxiosError<string>) => {
        Logger.print(`[ Request Error ] CODE ${error.code || 'UNKNOWN'} | ${error.message}`, 'error');

        return error;
      },
    );

    this.axiosInstance.interceptors.response.use(
      async (response: AxiosResponse) => {
        Logger.print(`[ Client Response ]: STATUS:${response.status}`);

        return response;
      },
      async (error: AxiosError<string>) => {
        Logger.print(`[ Stack Error ] CODE ${error.stack || 'UNKNOWN'} | ${error.message}`, 'error');
        Logger.print(`[ Response Error ] CODE ${error.code || 'UNKNOWN'} | ${error.message}`, 'error');
        Logger.print(`[ Response StatusCode ] CODE ${error.response?.status || 'UNKNOWN'} | ${error.message}`, 'error');

        return Promise.reject(error);
      },
    );
  };
}
