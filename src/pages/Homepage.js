import Cookies from "js-cookie";
import axios from 'axios';
import { useEffect, useState } from "react";
import {baseURL, apiKey} from '../axiosConfig.js';
import RecipieCard from '../components/RecipieCard.js'

const Homepage = () => {
    const [diet, setDiet] = useState('');
    const [gluten, setGluten] = useState('');
    const [basic, setBasic] = useState('')

    const [recipies, setRecipies] = useState([])

    
    useEffect(() => {
        setDiet(Cookies.get('diet'));
        setGluten(Cookies.get('gluten'));
        setBasic(Cookies.get('basic'))
    }, [])

    useEffect(() =>{
        if(gluten && diet){
            axios.get(`${baseURL}?apiKey=${apiKey}&diet=${diet},${gluten}&number=5`).then(response => {
                setRecipies(response.data.results)
            }).catch(err => {
                console.log(err)
            })
        }
        else if(diet){
            axios.get(`${baseURL}?apiKey=${apiKey}&diet=${diet}&number=5`).then(response => {
                setRecipies(response.data.results)
            }).catch(err => {
                console.log(err)
            })
        }else if(gluten){
            axios.get(`${baseURL}?apiKey=${apiKey}&diet=${gluten}&number=5`).then(response => {
                setRecipies(response.data.results)
            }).catch(err => {
                console.log(err)
            })
        }else if(basic){
            axios.get(`${baseURL}?apiKey=${apiKey}&number=5`).then(response => {
                setRecipies(response.data.results)
            }).catch(err => {
                console.log(err)
            })
        } 
    }, [gluten, diet, basic])

    return ( 
        <div className="homepage">
            <div className="title">
                <h3>Recipify</h3>
            </div>
            <div className="search">
                search
            </div>
            <div className="results">
                {recipies.map((recipie) => {
                    return <RecipieCard key={recipie.id} name={recipie.title} image={recipie.image}/>
                })}
            </div>
        </div>
     );
}
 
export default Homepage;