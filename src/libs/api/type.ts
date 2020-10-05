type PARAMS_TYPE = {
  id?: string;
  name?: string;
  page?: number;
  limit?: number;
};

export type REQUEST_TYPES = {
  path: string | string[];
  apiVersion?: string;
  params?: PARAMS_TYPE;
  contentType?: string;
  payload?: any;
};
