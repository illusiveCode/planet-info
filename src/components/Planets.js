const Planets = ({planets}) => {

    
    return ( 
        <div className="planets">
            
            
             {planets && planets
             .sort((a,b) => a.planetOrder > b.planetOrder ? 1 : -1)
             .map((planet) => (
                 <div className="jumbotron w-100" key={planet.key}>
                   <h2 className="display-4 text-center">{planet.name}</h2>
                   <img className="w-auto h-50 d-flex" src={planet.imgSrc.img} alt="hello" />
                   <div className="">
                   <p className="lead">{planet.description}</p>
                   <a href={planet.wikiLink} target="_blank" rel="noreferrer"><i>WikiLink</i></a>
                   </div> 
                   <hr />
               </div>     
            ))}
        </div>
     );
}
 
export default Planets;