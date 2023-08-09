import { configureStore } from "@reduxjs/toolkit";
import appReducer, {IAppState} from '../reducer/AppSlice'

export type RootState={
    blogs:IAppState
}
const store=configureStore({
    reducer:{
        blogs:appReducer
    }
})


export default store