export const setUser = (state, { payload }) => {
    const { auth, data } = payload;
    state.auth = auth;
    state.data = data;
};
