import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./studentdata";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
})