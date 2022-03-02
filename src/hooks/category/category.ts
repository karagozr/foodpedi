import { useApiRequest } from "../../core"

const BASE_URL = "Category/";
const ADD_CATEGORY_URL = "Add";
const GET_CATEGORY_URL = "get";
const GET_ALL_CATEGORIES_URL = "basic-list";
const SEARCH_CATEGORIES_URL = "search-list";
const SEARCH_MASTER_CATEGORIES_URL = "search-master-list";


export const useCategory = () => {

    const request = useApiRequest();

    const addCategory = async (data: any) => {
        data = {...data, parentId:data.parentId!==null?data.parentId.value:null}
        var result = await request.post(data,BASE_URL+ADD_CATEGORY_URL);
        return result.data;
    }

    const getAllCategories = async () => {
        var result = await request.get(null, BASE_URL + GET_ALL_CATEGORIES_URL);
        return result.data;
    }

    const getCategory = async (id:string) => {
        var result = await request.get({id}, BASE_URL + GET_CATEGORY_URL);
        return result.data;
    }

    const searchCategories = async (searchText: string) => {
        var result = await request.get({ searchText }, BASE_URL + SEARCH_CATEGORIES_URL);
        return result.data;
    }

    const searchMasterCategories = async (searchText: string) => {
        var result = await request.get({ searchText }, BASE_URL + SEARCH_MASTER_CATEGORIES_URL);
        return result.data;
    }





    return {
        addCategory,
        getAllCategories,
        searchCategories,
        searchMasterCategories,
        getCategory
    };

}