import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Auth Actions", () => {
  it("creates LOGIN_SUCCESS when signing in with email and password has been done", () => {});
});
