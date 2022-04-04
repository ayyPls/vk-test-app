import { combineReducers } from "redux";
import { mediaReducer } from "./mediaReducer";

export const rootReducer = combineReducers({
    media: mediaReducer,
}
)


export type RootState = ReturnType<typeof rootReducer>