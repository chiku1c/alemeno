import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { coursSlice } from "./coursSlice";
import { userSlice } from "./userSlice";
import { courseDetailsSlice } from "./courseDetailsSlice";
import currentUserReducer from "./currntUserSlice";
import { completeCourseSlice } from "./cousreCompleteSlice";

export const store = configureStore({
  reducer: {
    [coursSlice.reducerPath]: coursSlice.reducer,
    [userSlice.reducerPath]: userSlice.reducer,
    [courseDetailsSlice.reducerPath]: courseDetailsSlice.reducer,
    [completeCourseSlice.reducerPath]: completeCourseSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      coursSlice.middleware,
      userSlice.middleware,
      courseDetailsSlice.middleware,
      completeCourseSlice.middleware
    ),
  currentUser: currentUserReducer,
});
setupListeners(store.dispatch);
