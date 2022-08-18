// This is a navigation component that allows to switch pages 

const Navigation = (props) => {
    return ( 
    <div className="navigation">
        <div className="previous-page" onClick={props.previousPage} data-disabled={props.settings["page"] === 1 ? true : false}>
            <div className="previous-icon"></div>
        </div>
        <span>Page {props.settings["page"]} / {Math.floor(props.images["total"]/props.settings["per_page"])+1} </span>
        <div className="next-page" onClick={props.nextPage} data-disabled={props.settings["page"] === Math.floor(props.images["total"]/props.settings["per_page"])+1 ?  true : false}>
            <div className="next-icon"></div>
        </div>
    </div>      );
}
 
export default Navigation;