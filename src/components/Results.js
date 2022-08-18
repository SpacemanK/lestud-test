import {useState} from "react";
const Results = (props) => {
    const images=props.images["hits"];
    const [ imageModal, setImageModal] = useState([false,""]);
    const handleModal = (link) => {
          let newmodal=[...imageModal];
          newmodal[0]=!newmodal[0];
          newmodal[1]=link;
          setImageModal(newmodal);
    };
    return (
    
    <div className="results-div">
      <div className={"modal " + (imageModal[0]===true ? "active ": "")} onClick={()=> handleModal(imageModal[1])}>
        
        <div className="modal-content">
          <img src={imageModal[1]["webformatURL"]} alt="smth" className="preview-image"/>
          <div className="image-description">
            <div className="close-button" onClick={()=> handleModal(imageModal[1])}></div>
            <div className="description-group">
            <div className="description-item">
              <div className="item-icon" data-id="user"></div>
              <div className="item-title"><span>{imageModal[1]["user"]}</span></div>
              
            </div>
            <div className="description-item">
              <div className="item-icon" data-id="tags"></div>
              <div className="item-title"><span>{imageModal[1]["tags"]}</span></div>
              
            </div>
            <div className="description-item">
              <div className="item-icon" data-id="views"></div>
              <div className="item-title"><span>{imageModal[1]["views"]}</span></div>
              
            </div>
            <div className="description-item">
              <div className="item-icon" data-id="likes"></div>
              <div className="item-title"><span>{imageModal[1]["likes"]}</span></div>
              
            </div>
            <div className="description-item">
              <div className="item-icon" data-id="downloads"></div>
              <div className="item-title"><span>{imageModal[1]["downloads"]}</span></div>
              
            </div>
          </div>
          </div>
          
        </div>
       
      </div>

      <div className="results">
      
      { images?.map(image => (<div className="result" key= {image["id"]} onClick={() => handleModal(image)}> <img src={image["webformatURL"]} alt="" className="result-image"/> <div className="result-overlay"> <div className="overlay-tags"> <span> {image["tags"]} </span> </div> </div> </div>))}
      
    </div>
    <div className="results-count"><span> {props.images["total"]} results found</span> </div>
    </div>
    )
    ;
}
 
export default Results;