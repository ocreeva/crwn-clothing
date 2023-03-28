import { createAction } from "./action.utility";

import * as registrationType from "../constants/registration.type";

export const update = payload => createAction(registrationType.update, payload);
