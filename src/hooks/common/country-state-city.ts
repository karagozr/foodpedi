import {useApiRequest} from "../../core"

const BASE_URL="Common/";
const GET_COUNTRIES_URL="GetCountries";
const GET_STATES_OF_COUNTY_URL="GetStatesOfCountry";
const GET_CITIES_OF_STATE_URL="GetCitiesOfState";

export const useCountry = () => {

    const request = useApiRequest();

    const getCountries = async () =>{
       var result = await request.get(null,BASE_URL+GET_COUNTRIES_URL);
       return result.data;
    }

    const getStatesOfCountry = async (countryId:number) =>{
        var result = await request.get({countryId:countryId},BASE_URL+GET_STATES_OF_COUNTY_URL);
        return result.data;
    }

    const getCitiesOfState = async (stateId:number) =>{
        var result = await request.get({stateId:stateId},BASE_URL+GET_CITIES_OF_STATE_URL);
        return result.data;
    }
     

    return {
        getCountries,
        getStatesOfCountry,
        getCitiesOfState
    };

}