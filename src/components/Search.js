// This is the left-bar, where the user can enter a query and change settings.
// It fetches images from the API and updates the images state (parent state).

import {useEffect, useState} from "react";

import * as CONSTANTS from "../constants/Constants";
// We import default values and available options from the constants file

import Toggle from "./Toggle";

import Select from "./Select";

import SelectMultiple from "./SelectMultiple";

import Searchbar from "./Searchbar";

import Navigation from "./Navigation";

import Slider from "./Slider";

const Search = (props) => {

    // A state that keeps track of the query's settings, trigger the effect and fetches data.

    const [ settings , setSettings] = useState(CONSTANTS.DEFAULTS);

    // A state that keeps track of what dropdown is currently active

    const [ sidebar, setSidebar] = useState("None");

    // Generates the API link based on settings State
    const generateLink = () =>{
        const prms = new URLSearchParams(settings);
        return CONSTANTS.API+prms.toString();
    };

    // Fatches data from the API 
    const fetchData = async () => {
        const link=generateLink();
        const data = await fetch(link);
        const jsondata = await data.json();
        props.setimages(jsondata);
    }

    // This arrow function handles actions on settings (excludings sliders and inputs) and updates them accordingly
    const handleSetting = (event) =>{
        
        const setting_name=event.target.getAttribute("data-setting");
        const newsettings=JSON.parse(JSON.stringify(settings));
        if (typeof(settings[setting_name]) === 'boolean'){
            newsettings[setting_name]=!newsettings[setting_name];
            newsettings["page"]=1;
            setSettings(newsettings);
            return
        }
        const setting_value=event.target.getAttribute("data-value");
       
        if (typeof(settings[setting_name])!=="object"){
          
            newsettings[setting_name]=setting_value;
            newsettings["page"]=1;
            setSettings(newsettings);
        }
        else{
            if(!newsettings[setting_name].includes(setting_value)){          
                newsettings[setting_name].push(setting_value);               
            }else{
                newsettings[setting_name].splice(newsettings[setting_name].indexOf(setting_value), 1);  //deleting
            }
            newsettings["page"]=1;
            setSettings(newsettings);
        }

        
        
    }
    
    // This arrow function handles actions on the sidebar and updates them accordingly
    const handleSidebar = (event) =>{
        event.stopPropagation()
        
        if (event.target.getAttribute('data-id')===sidebar){
            setSidebar("None");  
            return
        }
        setSidebar(event.target.getAttribute('data-id'));
    }

    // This arrow function handles actions on sliders and inputs and updates them accordingly
    const handleChange = (event) => {
        const newsettings=JSON.parse(JSON.stringify(settings));
        newsettings[event.target.name]=event.target.value;
        newsettings["page"]=1;
        setSettings(newsettings);
    }

    // This arrow function navigates to the next page if possible
    const nextPage = () =>{
        if (settings["page"]<(Math.floor(props.images["total"]/settings["per_page"])+1)){
            const newsettings=JSON.parse(JSON.stringify(settings));
        newsettings["page"]++;
        setSettings(newsettings);
        };
        
    }

    // This arrow function navigates to the previous page if possible
    const previousPage = () =>{
        if (settings["page"]!==1){
            const newsettings=JSON.parse(JSON.stringify(settings));
            newsettings["page"]--;
            setSettings(newsettings);
        }
        
    }

    useEffect(
        () => {
           
            fetchData();
        },[ settings ]
      );
    return ( 
    <div className="search">
    
        <form >
            <Searchbar handleChange={handleChange} placeholder="Flower"></Searchbar>

            <SelectMultiple options={CONSTANTS.COLORS} size="large" setting="colors" settings={settings} handleSetting={handleSetting} handleSidebar={handleSidebar} sidebar={sidebar} displayname="Colors"> </SelectMultiple>

            <Select options={CONSTANTS.CATEGORIES} size="large" setting="category" settings={settings} handleSetting={handleSetting} handleSidebar={handleSidebar} sidebar={sidebar} displayname="Categories"> </Select>

            <Select options={CONSTANTS.ORDER} size="" setting="order" settings={settings} handleSetting={handleSetting} handleSidebar={handleSidebar} sidebar={sidebar} displayname="Order"> </Select>

            <Select options={CONSTANTS.ORIENTATIONS} size="" setting="orientation" settings={settings} handleSetting={handleSetting} handleSidebar={handleSidebar} sidebar={sidebar} displayname="Orientation"> </Select>

            <Select options={CONSTANTS.TYPES} size="" setting="image_type" settings={settings} handleSetting={handleSetting} handleSidebar={handleSidebar} sidebar={sidebar} displayname="Type"> </Select>

            <Toggle setting="editors_choice" settings={settings} handleSetting={handleSetting} displayname="Editor's"> </Toggle>

            <Toggle setting="safesearch" settings={settings} handleSetting={handleSetting} displayname="SafeSearch"></Toggle>
           
            <Slider settings={settings} setting="per_page" handleChange={handleChange} min="20" max="200" step="20"></Slider>

            <Navigation images={props.images} settings={settings} previousPage={previousPage} nextPage={nextPage}></Navigation>

        </form>
       
    </div> );

}
 
export default Search;