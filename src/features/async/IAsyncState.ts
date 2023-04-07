import AsyncStatus from "./AsyncStatus";

interface IAsyncState {
    status: AsyncStatus;
    error?: boolean;
    requestId?: string;
}

export default IAsyncState;
