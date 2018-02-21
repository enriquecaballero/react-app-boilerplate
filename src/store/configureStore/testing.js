import configureMockStore from "redux-mock-store";
import middleware from "../middleware";

export default configureMockStore([...middleware]);
