// This is a Toggle button that accepts two different states, True or False


const Toggle = (props) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return ( 
        <div className="toggles">
                     <div className="toggle" data-setting={props.setting} data-active={props.settings[props.setting]}  onClick={props.handleSetting} >
                         <div className="toggle-indicator" data-setting={props.setting} onClick={props.handleSetting}></div>
                     </div>
                     <span> {capitalizeFirstLetter(props.displayname) } </span>
                    
                </div>
     );
}
 
export default Toggle;