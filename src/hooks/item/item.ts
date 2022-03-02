import {useApiRequest} from '../../core'

const BASE_URL='item/';
const EDIT_URL='edit';
const GET_ITEMS_OF_CATEGORY_URL='basic-list';
const GET_ITEM_FOR_EDIT_URL='get-for-edit';
const GET_MY_ITEM_LIST_URL='my-items';
const FULL_SEARCH_LIST_URL='full-search';

export const useItem = () => {

    const request = useApiRequest();

    const editItem = async (data:any) =>{
        
        //   "id": "string",
        //   "categories": [
        //     "string"
        //   ],
        //   "brandId": "string",
        //   "name": "string",
        //   "brandName": "string",
        //   "keywords": [
        //     "string"
        //   ],
        //   "shortDescription1": "string",
        //   "description1": "string",
        //   "webPageUrl1": "string",
        //   "barcode1": "string",
        //   "barcode2": "string",
        //   "itemWeight": 0,
        //   "madeCountryId": 0,
        //   "madeStateId": 0,
        //   "madeCityId": 0,
        //   "ingredients": [
        //     {
        //       "id": "string",
        //       "name": "string",
        //       "value": 0,
        //       "unitCode": "string"
        //     }
        //   ],
        //   "images": [
        //     {
        //       "id": "string",
        //       "file": "string",
        //       "order": 0,
        //       "selected": true
        //     }
        //   ]
        

        // barcode1: "12323213"
        // brand: {label: 'Ülker', value: '-1'}
        // categories: {label: 'Atıştırmalıklar', value: '7cfe4eb4-e929-45f2-912d-c6f78cdd6ede'}
        // description1: "sadasdsad"
        // id: 0
        // images: [{…}]
        // ingredients: (3) [{…}, {…}, {…}]
        // itemWeight: 100
        // keywords: "çikilop,gofret,tadelle"
        // madeCity: {label: 'Derince', value: 48921}
        // madeCountry: {label: 'Turkey', value: 223}
        // madeState: {label: 'Kocaeli', value: 4172}
        // name: "Ülker Gofret"
        // shortDescription1: "kısa açıklama"
        // webPageUrl1: "www.google.com"

        data = {...data, 
            madeCityId:data.madeCity?data.madeCity.value:null,
            madeCountryId:data.madeCountry?data.madeCountry.value:null,
            madeStateId:data.madeState?data.madeState.value:null,
            brand:data.brand?{ id : data.brand.value,name:data.brand.label}:null,
            categories : [data.categories.value]
            
        }

        console.log('_data : ',data);
          
        var result = await request.post(data,BASE_URL+EDIT_URL);
        return result.data;
    }

    const getItemList = async (categoryId:any) =>{
        var result = await request.get({categoryId},BASE_URL+GET_ITEMS_OF_CATEGORY_URL);
        return result.data;
    }

    const getItemForEdit = async (itemId:any) =>{
        var result = await request.get({id:itemId},BASE_URL+GET_ITEM_FOR_EDIT_URL);

        

        return result.data.map((e:any)=>({
            id:e.id,
            name: e.name,
            shortDescription1:e.shortDescription1,
			description1: e.description1,
            keywords:e.keywords,
            webPageUrl1:e.webPageUrl1,
            categories: {label:e.categories[0].categoryName,value:e.categories[0].categoryId},
            ingredients:e.ingredients.map((i:any,index:number)=>({value:i.value,ingredientName:i.ingredient.name, ingredientId:i.ingredient.id,item:{},key:index,unitCode:i.unitCode})),
            images:e.images.map((img:any)=>({id:img.id, file:img.imageUrl, selected:img.selected, order:img.order})),
            barcode1:e.barcode1,
            brand:{label:e.brandName,value:e.brandId},
            itemWeight:e.itemWeight,
            madeCountry:{label:e.madeCountryName,value:e.madeCountryId},
            madeState:{label:e.madeStateName,value:e.madeStateId},
            madeCity:{label:e.madeCityName,value:e.madeCityId},
        }))[0];
    }

    const getMyItemList = async (itemState:any|null) =>{
        var result = await request.get({itemState},BASE_URL+GET_MY_ITEM_LIST_URL);
        return result.data;
    }

    const fullSearchList = async (searchText:string) =>{
        var result = await request.get({searchText},BASE_URL+FULL_SEARCH_LIST_URL);
        return result.data;
    }

    return {
        editItem,
        getItemList,
        getItemForEdit,
        getMyItemList,
        fullSearchList
    };

}