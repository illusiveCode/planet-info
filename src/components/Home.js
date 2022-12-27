import { useState, useEffect } from "react";
import Planets from "./Planets";

const Home = () => {

    const [planets, setPlanets] = useState(null)
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6b366ddbafmsh8e2aa5e4d4c65efp125f4cjsn6dc0f09ca79d',
            'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', options)
	    .then(response => response.json())
	    .then(response => {
        console.log(response)
        setPlanets(response)
    })
    
	    .catch(err => console.error(err));
    }, [])

    return ( 
        <div className="home ">
            {planets && <Planets planets={planets}/>}

        </div>
     );
}
 
export default Home;