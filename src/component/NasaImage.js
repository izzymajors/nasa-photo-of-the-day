import React, {useState , useEffect, Component} from "react";
import axios from 'axios';
import {BASE_URL , DEMO_KEY} from './index'

export class NasaImage extends Component{
    render(){
        return(
            <div>

                <p>in a new Component</p>

            </div>
        ) 

        
    }
}

// export default function NasaImage(props) {
//     const {urlData} = props;
//     const {details, setDetails} =(null);
// }

// useEffect(()=> {
//     axios.get(`${BASE_URL}/image/$2101/${urlData}?key=${DEMO_KEY}`)
//     .then((res) => console.log(res))
//     .catch((err) =>console.log(err))
// },[]);