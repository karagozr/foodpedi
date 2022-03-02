import React from "react"
import {Home4, AllCategories,Login,ItemAdd,ItemDetail,ItemUpdate,ItemGridList,MyItemList,NewAccount} from "./pages"

type RouteType = {
    path:string,
    page:any
}

export const routes : Array<RouteType> = [
    {path:"/home",page:Home4},
    {path:"/all-categories",page:AllCategories},
    {path:"/login",page:Login},
    {path:"/item/add",page:ItemAdd},
    {path:"/item/detail/:itemId",page:ItemDetail},
    {path:"/item/update/:itemId",page:ItemUpdate},
    {path:"/items/:categoryId",page:ItemGridList},
    {path:"/user/my-items",page:MyItemList}
]

export const routeWitoutLayout = {path:"/new-account",page:NewAccount}