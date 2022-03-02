import {useApiRequest} from "../../core"

const BASE_URL="Common/Brand";
const GET_BRAND_LIST_URL="/basic-list";
const SEARCH_BRAND_LIST_URL="/search-list";

export const useBrand = () => {

    const request = useApiRequest();


    const searchBrand = async (searchText:string) =>{
        var result = await request.get({searchText:searchText},BASE_URL+SEARCH_BRAND_LIST_URL);
        return result.data;
    }
     

    return {
        searchBrand
    };

}