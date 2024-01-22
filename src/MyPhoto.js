function MyPhoto({works}) {
    
    return(          
       <div className="container">
        {works.map (((element, index) => {
            const {name, image} = element;
            return (
            <div key={index} className="container_image" >
                <img className="myphoto" src={image} alt="mywork"/>
                <h2 className="container_head">{name}</h2>
            </div>
            )
        }))}
        </div>
        
      
    )
}
export default MyPhoto;