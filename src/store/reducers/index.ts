import { combineReducers } from "redux";
import { mediaReducer } from "./mediaReducer";
import { messageReducer } from "./messageReducer";

export const rootReducer = combineReducers({
    media: mediaReducer,
    messages: messageReducer
}
)


export type RootState = ReturnType<typeof rootReducer>