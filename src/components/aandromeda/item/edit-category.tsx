import React, { useState } from 'react';
import { BsPencilSquare, BsQuestion, BsPencil, BsImage, BsCode } from 'react-icons/bs'
import { AiOutlineTags } from 'react-icons/ai'
import { SelectItem, TextAreaItem, TextItem, CheckItem, SingleImageInputItem, AsyncSelectAndTextItem } from '../common'
import { useFormik, useField } from "formik"
import { useCategory } from '../../../hooks'
import { v4 as uuidv4 } from "uuid";



export const AddCategory = () => {

    const category = useCategory();
    
    React.useEffect(()=>{

    },[]);

    const searchCategoriesDatasource = async (searchText:string)=>{
        var res = await category.searchMasterCategories(searchText);
        return res.map((item:any)=>({label:item.name, value:item.id}))
    } 

    const validate = (values: any) => {
        const errors: any = {};

        if (!values.name) {
            errors.name = 'Zorunlu alan';
        }
        if (!values.description1) {
            errors.description1 = 'Zorunlu alan';
        }

        if (values.image1 === null) {
            errors.image1 = 'En az 1 resim seçmelisiniz';
        }
        if (values.icon1 === null) {
            errors.icon1 = 'En az 1 ikon seçmelisiniz';
        }
        return errors;
    }

    const { handleSubmit, handleChange, setValues,setFieldValue, values, errors } = useFormik<any>({
        initialValues: {
            id: "0",
            isPassive: false,
            parentId: "0",
            hasChild: false,
            name: "",
            description1: "",
            description2: "",
            description3: "",
            icon1: null,
            icon2: null,
            image1: null,
            image2: null
        },
        validate,
        onSubmit: values => {
            saveData(values);
        },
    });

    const saveData = async (data: FormData) => {
        var res = await category.addCategory(data);
        console.log("result : ", res);
    }

    const handleChangeHasChild = (e:any) => {
        if(e.target.value){
            setFieldValue("parentId","0"); 
        }
        handleChange(e);
    }

    const handleChangeParent = (e:any) => {
        if(e.target.value!=null){
            setFieldValue("hasChild",false); 
        }
        handleChange(e);
    }

    React.useEffect(()=>{
        //fetchCountryData();
        fetchCategoryData();
    },[])

    const fetchCategoryData = async () =>{
        var res = await category.getCategory("6783389b-8e41-4945-8673-b844b7c484b3");
        console.log("res : ",res)
        if(res)
             setValues(res);
    }
    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">
                        Kategori Bilgilerini Giriniz
                    </h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">

                    <div className="contact-form-action">
                        <form onSubmit={handleSubmit} >
                            <div className="row">
                                <TextItem handleChange={handleChange} fieldName="name" value={values.name} error={errors.name} label="Kategori Adı" placeholder="Kategori adi ..." colMd={12} />
                                <CheckItem handleChange={handleChange} fieldName="isPassive" value={values.isPassive} error={errors.isPassive} label="Pasife Al" colMd={2} />
                                <CheckItem handleChange={handleChangeHasChild} fieldName="hasChild" value={values.hasChild} error={errors.hasChild} label="Alt Kategori Var" colMd={2} />
                                <AsyncSelectAndTextItem handleChange={handleChangeParent} fieldName="parentId" value={values.parentId} getDatasource={searchCategoriesDatasource} error={errors.parentId} label="Üst Kategori" placeholder="Üst Kategori ..." colMd={8} />

                                <TextAreaItem handleChange={handleChange} fieldName="description1" value={values.description1} error={errors.description1} label="Açıklama - 1" placeholder="Açıklama..." colMd={12} />
                                <TextAreaItem handleChange={handleChange} fieldName="description2" value={values.description2} error={errors.description2} label="Açıklama - 2" placeholder="Açıklama..." colMd={12} />
                                <TextAreaItem handleChange={handleChange} fieldName="description3" value={values.description3} error={errors.description3} label="Açıklama - 3" placeholder="Açıklama..." colMd={12} />
                                <SingleImageInputItem handleChange={handleChange} fieldName="icon1" value={values.icon1} error={errors.icon1} label="İkon-1" placeholder="İkon seç..." colMd={3} />
                                <SingleImageInputItem handleChange={handleChange} fieldName="icon2" value={values.icon2} error={errors.icon2} label="İkon-2" placeholder="İkon seç..." colMd={3} />
                                <SingleImageInputItem handleChange={handleChange} fieldName="image1" value={values.image1} error={errors.image1} label="Resim-1" placeholder="Resim seç..." colMd={3} />
                                <SingleImageInputItem handleChange={handleChange} fieldName="image2" value={values.image2} error={errors.image2} label="Resim-2" placeholder="Resim seç..." colMd={3} />

                                <div className="col-lg-12">
                                    <div className="btn-box mt-4">
                                        <button type="submit" className="theme-btn border-0" >Kaydet</button>
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


