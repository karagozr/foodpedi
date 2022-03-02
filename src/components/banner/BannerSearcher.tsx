import React from 'react'
import { FiSearch } from 'react-icons/fi'
import './BannerSearcher.css'
import AsyncSelect from "react-select/async"
import { components } from "react-select"
import  { CSSProperties } from 'react'
import { useItem } from '../../hooks'
import { useNavigate } from 'react-router'


const state = {
    selectedCatOp: null,
    categories: [
        {
            value: 0,
            label: 'Select a category'
        },
        {
            value: 1,
            label: 'All Category'
        },
        {
            value: 2,
            label: 'Shops'
        },
        {
            value: 3,
            label: 'Hotels'
        },
        {
            value: 4,
            label: 'Foods & Restaurants'
        },
        {
            value: 5,
            label: 'Fitness'
        },
        {
            value: 6,
            label: 'Travel'
        },
        {
            value: 7,
            label: 'Salons'
        },
        {
            value: 8,
            label: 'Event'
        },
        {
            value: 9,
            label: 'Business'
        },
        {
            value: 10,
            label: 'Jobs'
        }
    ]
}
const BannerSearcher = () => {

    const navigate = useNavigate();
    const item = useItem();
    const [loading,setLoading]=React.useState(false);

    const loadOptions = async (inputValue: string, callback: (options: any) => void) => {

        if (inputValue.length < 2) return;
        setLoading(true);
        var options = []
        var result = await item.fullSearchList(inputValue);
        
        if(result.items.length>0){
            options.push({
                label:"Ürünler",
                options:result.items.map((val:any)=>({label:val.name,value:val.id,group:"item"}))
            })
        }
        if(result.categories.length>0){
            options.push({
                label:"Kategoriler",
                options:result.categories.map((val:any)=>({label:val.name,value:val.id,group:"category"}))
            })
        }

        

        if(options.length===0){
            options.push({label:inputValue,value:"-1"})
        }
        callback(options);
        setLoading(false);
    };
   
    
    return (
        <>
            <div className="main-search-input">

                <div className={`col-lg-12`}>
                    <div className="input-box">
                        <div className="form-group">

                            <AsyncSelect
                                isLoading={loading}
                                components={{ DropdownIndicator }}
                                name={"fieldName"}
                                className="form-control text-center"
                                loadOptions={loadOptions}
                                onChange={(selectedOption:any) => {
                                  
                                    if(selectedOption.group==="item"){
                                        navigate("/item/update/"+selectedOption.value)
                                    }else if(selectedOption.group==="category"){
                                        navigate('/items/'+selectedOption.value)
                                    }
                                    
                                }}
                                formatGroupLabel={formatGroupLabel}
                                placeholder={"placeholder"} />
                        </div>
                    </div>
                </div>
                </div>
 
                
        </>
    )
}

const formatGroupLabel = (data: any) => {
    return <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
};

const DropdownIndicator = (props: any) => {
    return components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
            <span className="form-icon">
                <FiSearch />
            </span>
        </components.DropdownIndicator>
    );
};

const groupBadgeStyles: CSSProperties = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

export default BannerSearcher