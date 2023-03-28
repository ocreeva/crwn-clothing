import { createAction } from "./action.utility";

import * as userType from "../constants/user.type";

export const update = payload => createAction(userType.update, payload);
