import { createAction, PayloadAction } from "redux-starter-kit";
import { AxiosRequestConfig } from "axios";

export type ApiLabel = AxiosRequestConfig & {
  label?: string;
  onSuccess?: string;
  onFailure?: string;
};

export interface APIAction<Payload = any> extends PayloadAction<Payload> {
  meta: {
    api: ApiLabel | ((payload: Payload) => ApiLabel);
  };
}

export function createApiAction<Payload = undefined>(
  actionType: string,
  apiLabel: APIAction["meta"]["api"]
) {
  const actionCreator = createAction<Payload>(actionType) as (
    payload: Payload
  ) => PayloadAction<Payload>;
  const apiActionCreator = (payload: Payload) => {
    const action = actionCreator(payload);
    return Object.assign(action, {
      meta: {
        api: apiLabel
      }
    }) as APIAction<Payload>;
  };
  apiActionCreator.toString = () => actionType;
  return apiActionCreator;
}
