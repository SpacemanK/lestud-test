// This is a dropdown with concurrent active choices

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
const SelectMultiple = (props) => {
    
    return ( 
        <div className={"select "+ props.size} data-extended={ props.sidebar === props.setting ? true: false} data-id={props.setting }>
            <div className="select-icon"  data-id={props.setting} onClick={props.handleSidebar} > </div>
            <div className="select-title"  data-id={props.setting} onClick={props.handleSidebar} >
                <span data-id={props.setting} onClick={props.handleSidebar} >{capitalizeFirstLetter(props.displayname) }</span>
            </div> 
            <div className="options">
                {props.options.map(option => (<div key={option}  className={"option" + (props.settings[props.setting].includes(option) ?" active":"")}  data-setting={props.setting } data-value={option} onClick={props.handleSetting}> <span data-setting={props.setting } data-value={option}> { capitalizeFirstLetter(option) } </span></div>))}
            </div>
        </div>    

     );
    
}
 
export default SelectMultiple;