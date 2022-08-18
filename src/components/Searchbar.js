// This is a searchbar that automatically updates results on input change

const Searchbar = (props) => {
    return ( 
        <div className="search-bar">
        <div className="search-icon"></div>
        <div className="right-input">
            <input type="text" name="q" required placeholder={props.placeholder} onChange={props.handleChange}/>
        </div>
        
        </div>
     );
}
 
export default Searchbar;