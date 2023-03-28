import { createAction } from "../store.utility";

import * as registrationType from "./registration.type";

export const update = payload => createAction(registrationType.update, payload);
