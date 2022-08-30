import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authslice";
import ticketReducer from "../features/tickets/ticketSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
  },
});
