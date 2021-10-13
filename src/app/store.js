import { configureStore } from "@reduxjs/toolkit";
import { createPortal } from "react-dom";

import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
    },

})