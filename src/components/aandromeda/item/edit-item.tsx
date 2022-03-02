import React, { useState } from 'react';
import { BsPencilSquare, BsQuestion, BsPencil, BsImage, BsCode } from 'react-icons/bs'
import { AiOutlineTags } from 'react-icons/ai'
import {SelectItem,TextAreaItem,TextItem,ImageInputItem,SelectAndTextItem,AsyncSelectAndTextItem,NumberInputItem} from '../common'
import {useFormik,useField} from "formik"
import {useCountry, useCategory, useItem,useBrand,useIngredient} from '../../../hooks'
import Select from "react-select";
import AsyncSelect from 'react-select/async';


import { v4 as uuidv4 } from "uuid";
import { itemFromArray } from 'tsparticles';

type AddItemType={
    itemId:any|null
}

export const EdiItem = ({itemId}:AddItemType) => {

    const country = useCountry();
    const brand = useBrand();
    const category = useCategory();
    const item = useItem();
    

    const [categoryDatasource, setCategoryDatasource] = React.useState([]);
    const [countryDatasource, setCountryDatasource] = React.useState([]);
    const [stateDatasource, setSateDatasource] = React.useState([]);
    const [cityDatasource, setCityDatasource] = React.useState([]);
   

    const validate = (values : any) => {
		const errors:any = {};
		
		if(!values.name) {
			errors.name = 'Zorunlu alan';
		}
		if(!values.shortDescription1) {
			errors.shortDescription1 = 'Zorunlu alan';
		}
		if(!values.categories) {
			errors.categories = 'Zorunlu alan';
		}
		if(!values.shortDescription1) {
			errors.shortDescription1 = 'Zorunlu alan';
		}
        if(values.images.length>10) {
			errors.images = 'En fazla 10 resim seçilebilir';
		}
        if(values.images.length===0) {
			errors.images = 'En az 1 resim seçmelisiniz';
		}
        if(values.itemWeight<=0) {
			errors.itemWeight = 'Ürün gramajı sıfırdan büyük olmalıdır';
		}
	
		return errors;
	}

    const {handleSubmit,handleChange,setFieldValue,setValues,values,errors} = useFormik({
		initialValues: {
            id:"0",
			name: "",
            shortDescription1:"",
			description1: "",
            keywords:"",
            webPageUrl1:"",
            categories: {},
            ingredients:[],
            images:[],
            barcode1:"",
            brand:{},
            madeCountry:{},
            itemWeight:0,
            madeState:{},
            madeCity:{}
		},
        validate,
		onSubmit: values => {
            item.editItem(values);
			//console.log("SUBMIT : ", values);
		},
	});

    const fetchItemData = async () =>{
        console.log("itemId : ",itemId)
        var res = await item.getItemForEdit(itemId);
        if(res)
            setValues(res);
    }
    
    const fetchCountryData = async () =>{
        var res = await country.getCountries();
        setCountryDatasource(res&&res.map(({id,name}:any)=>({label:name,value:id})));
    }
    const fetchStateData = async (countryId:number) =>{
        var res = await country.getStatesOfCountry(countryId);
        setSateDatasource(res&&res.map(({id,name}:any)=>({label:name,value:id})));
    }
    const fetchCityData = async (stateId:number) =>{
        var res = await country.getCitiesOfState(stateId);
        setCityDatasource(res&&res.map(({id,name}:any)=>({label:name,value:id})));
    }
    React.useEffect(()=>{
        fetchItemData();
        fetchCountryData();
    },[])

    const handleChangeCountry = (e:any)=>{
        let selectedRow = e.target.value;
        setFieldValue("madeState",{});
        setFieldValue("madeCity",{});  
        fetchStateData(selectedRow.value);
        handleChange(e);
    }

    const handleChangeState = (e:any)=>{
        let selectedRow = e.target.value; 
        fetchCityData(selectedRow.value);
        setFieldValue("madeCity",{}); 
        handleChange(e);
    }

    const searchCategoriesDatasource = async (searchText:string)=>{
        var res = await category.searchCategories(searchText);
        return res.map((item:any)=>({label:item.name, value:item.id}))
    }

    const searchBrandDatasource = async (searchText:string)=>{
        var res = await brand.searchBrand(searchText);
        return res.map((item:any)=>({label:item.name, value:item.id}))
    }
   

    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">
                        Bilgileri Giriniz
                    </h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">
                    <div className="contact-form-action">
                        {/* <form method="post"> */}
                        <form onSubmit={handleSubmit} >
                        <div className="row">
                            <TextItem handleChange={handleChange} fieldName="name" value={values.name} error={errors.name} label="Ürün Adı" placeholder="Ürün adını giriniz..." colMd={6}/>
                            <TextItem handleChange={handleChange} fieldName="keywords" value={values.keywords} error={errors.keywords} label="Anahtar Kelimeler (',')" placeholder="Anahtar kelimeler ..." colMd={6}/>
                            <TextItem handleChange={handleChange} fieldName="shortDescription1" value={values.shortDescription1} error={errors.shortDescription1} label="Kısa Açıklama" placeholder="Kısa Açıklama ..." colMd={12}/>
                            <TextAreaItem handleChange={handleChange} fieldName="description1" value={values.description1} error={errors.description1} label="Açıklama - 1" placeholder="Açıklama..." colMd={12}/>
                     
                            <TextItem handleChange={handleChange} fieldName="webPageUrl1" value={values.webPageUrl1} error={errors.webPageUrl1} label="Web Sayfası" placeholder="Web Sayfası giriniz..." colMd={6}/>
                           
                           
                            <TextItem handleChange={handleChange} fieldName="barcode1" value={values.barcode1} error={errors.barcode1} label="Barkod Numarası" placeholder="Barkod ..." colMd={6}/>
                            <AsyncSelectAndTextItem handleChange={handleChange} fieldName="brand" value={values.brand} getDatasource={searchBrandDatasource} createWhenNoRecord={true}  error={errors.brand} label="Marka" placeholder="Marka..." colMd={6}/>
                            {/* <SelectItem handleChange={handleChange} fieldName="categories" value={values.categories} datasource={categoryDatasource} error={errors.categories} label="Kategoriler" placeholder="Kategori ..." colMd={6}/> */}
                            <AsyncSelectAndTextItem handleChange={handleChange} fieldName="categories" value={values.categories} getDatasource={searchCategoriesDatasource} error={errors.categories} createWhenNoRecord={false} label="Kategoriler" placeholder="Kategori ..." colMd={6}/>
                            <label className="label-text">Üretim Yeri/Menşei</label>
                            <hr/>
                            <SelectItem handleChange={handleChangeCountry} fieldName="madeCountry" value={values.madeCountry} datasource={countryDatasource} error={errors.madeCountry} label="Ülke" placeholder="Ülke ..." colMd={4}/>
                            <SelectItem handleChange={handleChangeState} fieldName="madeState" value={values.madeState} datasource={stateDatasource} error={errors.madeState} label="Eyalet/İl" placeholder="Eyalet/İl ..." colMd={4}/>
                            <SelectItem handleChange={handleChange} fieldName="madeCity" value={values.madeCity} datasource={cityDatasource} error={errors.madeCity} label="Şehir/İlçe" placeholder="Şehir/İlçe ..." colMd={4}/>
                            {/* <TextItem handleChange={handleChange} fieldName="barcode2" value={values.barcode2} error={errors.barcode2} label="Barkod Numarası-2" placeholder="Barkod ..." colMd={6}/>
                            <TextItem handleChange={handleChange} fieldName="barcode3" value={values.barcode3} error={errors.barcode3} label="Barkod Numarası-3" placeholder="Barkod ..." colMd={6}/> */}
                            
                            <NumberInputItem handleChange={handleChange} fieldName="itemWeight" value={values.itemWeight} error={errors.itemWeight} label="Gramaj" placeholder="Gramaj..." colMd={4}/>

                            <AddDetail value={values.ingredients} fieldName="ingredients" handleChange={handleChange} caption="Detaylar (İçerik/Etken Madde Vs.)" />
                            <hr/>
                            <ImageInputItem handleChange={handleChange} fieldName="images" value={values.images} error={errors.images} label="Ürün Resimleri (Maks. 10)" placeholder="Resim seç..." colMd={12}/>
 
                            <div className="col-lg-12">
                                <div className="btn-box mt-4">
                                    <button type="submit" className="theme-btn border-0" >ürünü ekle</button>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <p>&nbsp;</p>
        </>
    );
}

type DetailType = {
    key:string,
    ingredientId:string,
    ingredientName:string,
    value: string,
    unitCode :string
}
type AddDetailType = {
    items: Array<DetailType>,
    updateItems: (data:Array<DetailType>) => void

}

const AddDetail = ({ fieldName,caption,value, handleChange }: any) => {
    console.log("indes : ", value)
    const ingredient = useIngredient();
    const defaultState = {value:"",ingredientName:"",ingredientId:"",item:{label:"",value:""},key:"",unitCode:"%"}
    const [editValue, setEditValue]=React.useState(defaultState);
    const [newIngredients, setNewIngredient]=React.useState<any>([]);

    const handleEvent = (data:any) =>{
        let event = {target:{name:fieldName,value:data}}
        handleChange(event)
    }

    const handleClickAddDetail = () =>{
        if(editValue.ingredientName==="" || editValue.value===""|| editValue.unitCode==="") return;

        var data=[...value,{...editValue,ingredientId:editValue.item.value, key:uuidv4()}]
        handleEvent(data);
        setEditValue(defaultState);
    }
    const handleClickRemoveDetail = (key:string) =>{
        var data=value.filter((x:any) => x.key!==key);
        handleEvent(data);
    }

    
    const loadOptions = async ( inputValue: string,  callback: (options: any) => void ) => {
        let res = await ingredient.searchIngredient(inputValue);
        
        res = [...res.map((s:any)=>({label:s.name,value:s.id})), ...newIngredients.filter((x:any)=>x.label.includes(inputValue))]
        
        

        if(res.length>0){
            console.log("ress : ",res)
            // var newVal = [...newIngredients,{label:inputValue,value:uuidv4()}];
            // setNewIngredient(newVal)
            callback(res);
        }else{
            var _new = {label:inputValue,value:uuidv4()};
            callback([_new]);
        }

        //return res.map((item:any)=>({label:item.name, value:item.id}))
        
        
      };

    const numberInputChange = (e:any) =>{
        if(editValue.unitCode==="%" && e.target.value>100) return;
        
        setEditValue({ ...editValue,value:e.target.value})
    }
    const handleInputChange = (newValue: any) => {
        
        if(newValue.value==="-1"){
            var _new = {label:newValue.label,value:uuidv4()};
            setNewIngredient([...newIngredients,_new])
        }
        
        setEditValue({ ...editValue,item:newValue,ingredientName:newValue.label,ingredientId:newValue.value})
      };
    

    return (
        <React.Fragment>
            
            <label className="label-text">{caption}</label>
            <hr></hr>
            { 
                value.map(({ ingredientName, value,key,unitCode }: DetailType,index:number) => (
                    <React.Fragment key={index}>
                        <div className="col-1">
                            <div className="form-group" style={{marginBottom:0}}>
                                {index+1} 
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="form-group" style={{marginBottom:0}}>
                                {ingredientName} 
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-group" style={{marginBottom:0}}>
                                {value} {unitCode}
                            </div>
                        </div>
                        
                        <div className="col-2">
                            <div className="form-group" style={{marginBottom:0}}>
                                <a  className="btn btn-link" onClick={(e) => handleClickRemoveDetail(key)} style={{color:"red",paddingTop:0 }}>Sil</a>
                            </div>
                        </div>
                    </React.Fragment>
                ))
            }
            <div className='row'>

            
            <div className="col-4">
                <label className="label-text"></label>
                <div className="input-box">
                    <div className="form-group">
                        <AsyncSelect value={editValue.item} loadOptions={loadOptions} onChange={handleInputChange} />
                        {/* <input className="form-control" type="text" name="title123213" value={editValue.label} onChange={(e) => setEditValue({ ...editValue,label:e.target.value})} placeholder="Madde" style={{padding: "0.3rem 0.5rem"}} /> */}
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="input-box">
                    <label className="label-text"></label>
                    <div className="form-group">
                        <input className="form-control" type="number" name="keywords213213" value={editValue.value} min={0.00000001} max={editValue.unitCode==="%"?100:10000000000} onChange={numberInputChange} placeholder="Değer?" style={{padding: "0.3rem 0.5rem"}} />
                    </div>
                </div>
            </div>
            <div className="col-2">
                <div className="input-box">
                    <label className="label-text"></label>
                    <div className="form-group">
                        <input className="form-control" type="text" name="keywords23123" value={editValue.unitCode} onChange={(e) => setEditValue({ ...editValue,unitCode:e.target.value})} placeholder="Birim?" style={{padding: "0.3rem 0.5rem"}} />
                    </div>
                </div>
            </div>
            <div className="col-2">
                <div className="input-box">
                    <label className="label-text"></label>
                    <div className="form-group">
                        <a  className="btn btn-link" onClick={handleClickAddDetail}>Ekle</a>
                    </div>
                </div>
            </div>
            </div>

        </React.Fragment >
    )
}


