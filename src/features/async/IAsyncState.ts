import AsyncStatus from "./AsyncStatus";

import type { ActionReducerMapBuilder, AsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "App/store";

interface IAsyncState {
    status: AsyncStatus;
    error?: boolean;
    requestId?: string;
}

export const addAsyncThunkCases = <T>(
    builder: ActionReducerMapBuilder<{ data: T, async: IAsyncState }>,
    asyncThunk: AsyncThunk<T | undefined, void, { state: RootState }>
): void => { builder
    .addCase(asyncThunk.pending, (state, { meta: { requestId } }) => {
        if (state.async.status !== AsyncStatus.idle) return;
        state.async.status = AsyncStatus.executing;
        state.async.requestId = requestId;
    })
    .addCase(asyncThunk.fulfilled, (state, { payload, meta: { requestId } }) => {
        if (state.async.requestId !== requestId) return;
        if (!payload)
        {
            state.async.status = AsyncStatus.failed;
            state.async.error = true;
            return;
        }

        // draft state dislikes setting the generic 'data' property, so return a new object instead
        return {
            data: payload,
            async: { status: AsyncStatus.succeeded }
        };
    })
    .addCase(asyncThunk.rejected, (state, { meta: { requestId } }) => {
        if (state.async.requestId !== requestId) return;
        state.async.status = AsyncStatus.failed;
        state.async.error = true;
    })
};

export default IAsyncState;
