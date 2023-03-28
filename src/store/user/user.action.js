import { createAction } from "../store.utility";

import * as userType from "./user.type";

export const set = payload => createAction(userType.set, payload);
