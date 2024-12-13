import { MainPage } from "./main-page";
import { textPage } from './text-page'
import { GiftsPage } from "./gifts-page";
import { GiftPage } from "./gift-page";
import { FormPage } from "./form-page";

export const routes = [
    { 
        path: "/", 
        component: MainPage, 
        name: "main", 
    },
    {
        path: "/text",
        component: textPage,
        name: "text"
    },
    { 
        path: "/gifts", 
        component: GiftsPage, 
        name: "gifts", 
    },
    { 
        path: "/gift", 
        component: GiftPage, 
        name: "gift", 
    },
    {
        path: "/form",
        component: FormPage,
        name: "form",
    }
];