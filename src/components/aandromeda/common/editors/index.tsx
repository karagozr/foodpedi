import { AnyCnameRecord } from "dns";
import { values } from "lodash";
import React, { useEffect, useMemo } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async"
import { v4 as uuidv4 } from "uuid";
import "./editors.css"
import { ReactSortable } from 'react-sortablejs';
import {FiTrash} from "react-icons/fi";

export const TextItem = ({ handleChange, fieldName, value, error, label, placeholder, colMd, icon }: any) => {

    return (
        <div className={`col-lg-${colMd}`}>
            <div className="input-box">
                {label?<label className="label-text">{label}</label>:null}
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon" style={{top: "5px"}}>
                            {icon}
                        </span>) : null
                    }

                    <input id={uuidv4()} className="form-control" type="text" name={fieldName} value={value} onChange={handleChange} placeholder={placeholder} style={{ padding: icon?`0.375rem 2rem`:`0.375rem 0.75rem` }} />
                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
    )
}

export const PasswordItem = ({ handleChange, fieldName, value, error, label, placeholder, colMd, icon }: any) => {

    return (
        <div className={`col-lg-${colMd}`}>
            <div className="input-box">
                {label?<label className="label-text">{label}</label>:null}
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon" style={{top: "5px"}}>
                            {icon}
                        </span>) : null
                    }

                    <input id={uuidv4()} className="form-control" type="password" name={fieldName} value={value} onChange={handleChange} placeholder={placeholder} style={{ padding: icon?`0.375rem 2rem`:`0.375rem 0.75rem` }} />
                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
    )
}

export const NumberInputItem = ({ handleChange, fieldName, value, error, label, placeholder, colMd, icon,maxValue,minValue }: any) => {

    return (
        <div className={`col-lg-${colMd}`}>
            <div className="input-box">
                <label className="label-text">{label}</label>
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon">
                            {icon}
                        </span>) : null
                    }
                    <input id={uuidv4()} className="form-control" type="number" max={maxValue} min={minValue} name={fieldName} value={value} onChange={handleChange} placeholder={placeholder} style={{ padding: "0.375rem 0.75rem" }} />
                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
    )
}


export const TextAreaItem = ({ handleChange, fieldName, value, error, label, placeholder, colMd, icon }: any) => {

    return (
        <div className={`col-lg-${colMd}`}>
            <div className="input-box">
                <label className="label-text">{label}</label>
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon">
                            {icon}
                        </span>) : null
                    }
                    <textarea id={uuidv4()} className="form-control" name={fieldName} value={value} onChange={handleChange} placeholder={placeholder} style={{ padding: "0.375rem 0.75rem" }}></textarea>
                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
    )
}


export const SelectItem = ({ handleChange, fieldName, value, error, label, placeholder, colMd, icon, datasource }: any) => {

    return (
        <div className={`col-lg-${colMd}`}>
            <div className="input-box">
                <label className="label-text">{label}</label>
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon">
                            {icon}
                        </span>) : null
                    }
                    <Select
                        name={fieldName}
                        value={value}

                        onChange={selectedOption => {
                            let event = { target: { name: fieldName, value: selectedOption } }
                            handleChange(event)
                        }}
                        placeholder={placeholder}
                        options={datasource}
                    />
                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
    )
}


export const AsyncSelectAndTextItem = ({ handleChange, fieldName, value, error, label, placeholder, colMd, icon, getDatasource,createWhenNoRecord }: any) => {
    
    const loadOptions = async ( inputValue: string,  callback: (options: any) => void ) => {
        
        if(inputValue.length<2) return;
        
        var options = await getDatasource(inputValue);
           
        if(createWhenNoRecord && options.length===0){
            options.push({label:inputValue,value:"-1"})
        }
        callback(options);
      };

  

    return (
        <div className={`col-lg-${colMd}`}>
            <div className="input-box">
                <label className="label-text">{label}</label>
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon">
                            {icon}
                        </span>) : null
                    }
                    <AsyncSelect
                        //cacheOptions
                        //defaultOptions
                        name={fieldName}
                        value={value}
                        loadOptions={loadOptions} 
                        //onInputChange={handleInputChange}
                        onChange={selectedOption => {
                            let event = { target: { name: fieldName, value: selectedOption} }
                            handleChange(event);

                        }}
                        placeholder={placeholder}
                    />
                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
    )
}

export const SelectAndTextItem = ({ handleChange, fieldName, value, error, label, placeholder, colMd, icon, datasource }: any) => {
    const [newValue, setNewValue] = React.useState<any>(null);
    const options = useMemo(()=>{
        return  newValue!==null? [...datasource,newValue]:datasource;
    },[newValue])

    return (
        <div className={`col-lg-${colMd}`}>
            <div className="input-box">
                <label className="label-text">{label}</label>
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon">
                            {icon}
                        </span>) : null
                    }
                    <Select
                        name={fieldName}
                        value={value}
                        onInputChange={selectedOption=>{
                            
                            if(selectedOption)
                                setNewValue({label:selectedOption, value:-1})
                        }}
                        onChange={selectedOption => {
                            let event = { target: { name: fieldName, value: selectedOption} }
                            handleChange(event);

                        }}
                        placeholder={placeholder}
                        options={options}
                    />
                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
    )
}

export const CheckItem = ({ handleChange, fieldName, value, error, label, placeholder, colMd, icon }: any) => {

    return (
        <div className={`col-lg-${colMd}`}>
            <div className="input-box">
                <label className="label-text">{label}</label>
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon">
                            {icon}
                        </span>) : null
                    }

                    <input id={uuidv4()} className="form-check-input" type="checkbox" checked={value&&value} name={fieldName} value={value} onChange={handleChange} placeholder={placeholder}
                        style={{ padding: "0.75rem 0.75rem" }} autoComplete="off" />
                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
    )
}

export const ImageInputItem = ({ handleChange, fieldName, value, error, label, placeholder, colMd, icon }: any) => {
    const refList = React.useRef<HTMLDivElement>(null);
    const [arr,setArr] = React.useState<any>([]);
    React.useEffect(()=>{
        setArr(value)
    },[value]);


    const toBase64 = (file:File) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const onChange = async (event: any) => {
        let images = event.target.files;
        let _arr = [];
        let _old = arr.length>0?arr.length:1
        
        for (let index = 0; index < images.length; index++) {
            var img = await toBase64(images[index]) 
            _arr.push({id:uuidv4(),order:_old+index,selected:false,file:img});
        }
        setArr([..._arr,...arr]);
        let _event = { target: { name: fieldName, value: [..._arr,...arr] } };
        handleChange(_event);   
        
    }
    
    const handleClickRemoveItem = (index:number) =>{
       
        var _id = arr[index].id;
        setArr(arr.filter((x:any)=>x.id!==_id));
        //console.log("images : ",arr.filter((x:any)=>x.id!==_id) )
        let _event = { target: { name: fieldName, value: arr.filter((x:any)=>x.id!==_id)  } }
        handleChange(_event);

    }

    
    const handleSelectFav = (e:number) => {
        
        for(var i=0;i<arr.length;i++){
            arr[i].selected=(i===e);
        }
    }

    const handleSortEnd = (e:any) => {
        for(var i=0;i<arr.length;i++){
            arr[i].order=i+1;
        }
    }

    const multipleGallery = () => (value !=null) && (<div>
        <ReactSortable
        list={arr}
        className="row" style={{ borderRadius: "4px", border: "1px dashed #d9dbdf", margin:0,marginTop:"5px"}}
        setList={setArr}
        animation={200}
        onEnd={handleSortEnd}
        delay={2}>
        {
            arr.length>0 && arr.map((val: any,index:number) => (
            <div id={val.id} key={val.id}  className={val.selected?"input-img-list input-img-selected col-lg-2 col-md-3 col-sm-4":"input-img-list col-lg-2 col-md-3 col-sm-4"} onDoubleClick={(e:any)=>handleSelectFav(index)} >
                <button type="button" className="delete-img-from-list"
                onClick={e=>handleClickRemoveItem(index)}
                >
                    <FiTrash />
                </button>
                <img src={val.file} className="img-rounded" alt="Cinque Terre" />
            </div>
        ))}
        </ReactSortable>
    </div>)


    return (
        <div className={`col-lg-${colMd}`}>
            <div className="input-box">
                <label className="label-text">{label}</label>
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon">
                            {icon}
                        </span>) : null
                    }
       
                    <input id={uuidv4()} className="form-control custom-file-input" type="file"  name={fieldName} onChange={onChange} placeholder={placeholder} style={{ padding: "0.375rem 0.75rem" }} accept=".png, .jpg, .jpeg, .png" multiple />
                    { multipleGallery()}
                    

                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
    )

   
        
    

}

export const SingleImageInputItem = ({ handleChange, fieldName, value, error, label, placeholder, colMd, icon }: any) => {
    const refList = React.useRef<HTMLDivElement>(null);

    
    const toBase64 = (file:File) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const onChange = async (event: any) => {
        let images = event.target.files;
        var img = await toBase64(images[0]) 
        let _obj = {id:uuidv4(),file:img};
        
        let _event = { target: { name: fieldName, value: _obj } };
        handleChange(_event);   

        
    }

    const handleClickRemoveItem = () =>{
       
        let _event = { target: { name: fieldName, value: null  } }
        handleChange(_event);
        
    }

    const singleGallery = () => (value !=null) && (<div>
        <div className="row" style={{ borderRadius: "4px", border: "1px dashed #d9dbdf", margin:0,marginTop:"5px"}}>
        {
            
            <div id={value.id} key={value.id}  className={"input-img-list col-lg-2 col-md-3 col-sm-4"} >
                <button type="button" className="delete-img-from-list"
                onClick={handleClickRemoveItem}
                >
                    <FiTrash />
                </button>
                <img src={value.file} className="img-rounded" alt="Cinque Terre" />
            </div>
        }
        </div>
    </div>)


    return (
        <div className={`col-lg-${colMd}`}>
            <div className="input-box">
                <label className="label-text">{label}</label>
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon">
                            {icon}
                        </span>) : null
                    }
       
                    <input id={uuidv4()} className="form-control custom-file-input" type="file"  name={fieldName} onChange={onChange} placeholder={placeholder} style={{ padding: "0.375rem 0.75rem" }} accept=".png, .jpg, .jpeg, .png" multiple={false} />
                    { singleGallery()}
                    

                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
    )

   
        
    

}

export const FiteEditInputItem = ({ handleChange, fieldName, value,currentValue, error, label, placeholder, colMd, icon, maxLength }: any) => {

    const [arr,setArr] = React.useState<any>([]);
    const onChange = (event: any) => {
        
        let _arr = [];
        let images = event.target.files;
    
        for (let index = 0; index < images.length; index++) {
            var img = URL.createObjectURL(images[index]);
            _arr.push({image:img,key:uuidv4(),file:images[index]});
        }

        setArr([..._arr,...arr]);

        let _event = { target: { name: fieldName, value: [..._arr,...arr] } };
        handleChange(_event);
 
    }

    const handleClickRemoveItem = (_key:string) =>{
        
        setArr(arr.filter((x:any)=>x.key!==_key))
        let _event = { target: { name: fieldName, value: arr.filter((x:any)=>x.key!==_key) } }
        handleChange(_event);
    }

    return (
        <div className={`col-lg-${colMd}`}>
            <div className="input-box">
                <label className="label-text">{label}</label>
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon">
                            {icon}
                        </span>) : null
                    }
       
                    <input id={uuidv4()} className="form-control custom-file-input" type="file"  name={fieldName} onChange={onChange} placeholder={placeholder} style={{ padding: "0.375rem 0.75rem" }} accept=".jpg, .jpeg, .png" multiple />
       
                    {value.length === 0?null: <div className="row" style={{ borderRadius: "4px", border: "1px dashed #d9dbdf", margin:0,marginTop:"5px"}}>
                        {value.map((val: any) => (
                            <div key={val.key} className="col-lg-2 col-md-3 col-sm-4" style={{
                                maxWidth: "105px",
                                maxHeight: "105px",
                                minWidth: "105px",
                                minHeight: "105px",
                                position: "relative",
                                margin: 10

                            }}>
                                <button type="button" className="btn-close btn-close-black" aria-label="Close"
                                onClick={e=>handleClickRemoveItem(val.key)}
                                style={{
                                    width: "20px",
                                    borderStyle: "none",
                                    lineHeight: "20px",
                                    marginTop: "0px",
                                    marginRight: "0px",
                                    position: "absolute",
                                    top: 0,
                                    right: 0
                                }}>
                                </button>
                                <img src={val.image} className="img-rounded" alt="Cinque Terre"
                                    style={{
                                        display: "block",
                                        maxWidth: "90px",
                                        maxHeight: "90px",
                                        width: "auto",
                                        height: "auto"
                                    }}
                                />
                            </div>
                        ))}
                    </div>}

                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
    )
}

export const CascadeSelectItem = ({ handleChange, fieldName, value, error, label, placeholder, colMd, icon, datasource }: any) => {

    return (
        <React.Fragment>
        <div className={`col-lg-${colMd/2}`}>
            <div className="input-box">
                <label className="label-text">{label}</label>
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon">
                            {icon}
                        </span>) : null
                    }
                    <Select
                        name={fieldName}
                        value={value}

                        onChange={selectedOption => {
                            let event = { target: { name: fieldName, value: selectedOption } }
                            handleChange(event)
                        }}
                        placeholder={placeholder}
                        options={datasource}
                    />
                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
        <div className={`col-lg-${colMd/2}`}>
            <div className="input-box">
                <label className="label-text">{label}</label>
                <div className="form-group">
                    {
                        icon ? (<span className="la form-icon">
                            {icon}
                        </span>) : null
                    }
                    <Select
                        name={fieldName}
                        value={value}

                        onChange={selectedOption => {
                            let event = { target: { name: fieldName, value: selectedOption } }
                            handleChange(event)
                        }}
                        placeholder={placeholder}
                        options={datasource}
                    />
                    {error ? <div style={{ color: "maroon" }}>{error}</div> : null}
                </div>
            </div>
        </div>
        </React.Fragment>
        
    )
}