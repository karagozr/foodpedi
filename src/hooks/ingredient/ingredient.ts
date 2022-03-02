import { useApiRequest } from "../../core"

const BASE_URL = "ingredient/";
const SEARCH_INGREDIENTS_URL = "search-list";


export const useIngredient = () => {

    const request = useApiRequest();

 
    const searchIngredient = async (searchText: string) => {
        var result = await request.get({ searchText }, BASE_URL + SEARCH_INGREDIENTS_URL);
        return result.data;
    }






    return {
        searchIngredient
    };

}