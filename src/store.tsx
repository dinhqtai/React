import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import productAPI from './services/products.service'
import CategoryAPI from './services/category.service'
import UserAPI from './services/user.service'

export const store = configureStore({
    reducer: {
        products: productAPI.reducer,
        category: CategoryAPI.reducer,
        user: UserAPI.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productAPI.middleware).concat(CategoryAPI.middleware)
        .concat(UserAPI.middleware)
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch