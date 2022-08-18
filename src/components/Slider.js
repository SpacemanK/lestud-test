// A slider that accepts min,max,step and value props.
const Slider = (props) => {
    return ( 
        <div className="slider-selector">
            <input type="range" min={props.min} max={props.max} step={props.step} value={props.settings[props.setting]} className="slider"  onChange={props.handleChange} name={props.setting}></input>
            <span> {props.settings[props.setting]} results per page</span>
        </div> 
     );
}
 
export default Slider;