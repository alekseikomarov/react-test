//import { useState, useEffect } from "react"
import HetkeIlm from "../HetkeIlm"
import IlmaEnnustus from "../IlmaEnnustus"

const ilm = {"temperature":"20 °C","wind":"11 km/h","description":"Sunny",
"forecast":[{"day":"1","temperature":"300 °C","wind":"7 km/h"},
{"day":"2","temperature":"250 °C","wind":"16 km/h"},{"day":"3","temperature":"25 °C","wind":"1001 km/h"}]}

const IlmaInfo = () => {
    /*
    const [ilm, setIlm] = useState({})
    useEffect(() => {
            const kysiIlmaTeadet = async() => {
            const ilmaDataJson = await fetch('https://goweather.herokuapp.com/weather/Casablanca')
            const ilmaData = await ilmaDataJson.json()
            setIlm(ilmaData)
        }
        kysiIlmaTeadet();
    }, [])
    */
    

    return (
        
    <div>
        <b>Hetkeilm:</b>
        <HetkeIlm temp={ilm.temperature} tuul={ilm.wind} 
        kirjeldus={ilm.description} /><br />
        <b>Ilmaennustus:</b><br />
        <IlmaEnnustus 
        paev={ilm.forecast[0].day} temp={ilm.forecast[0].temperature} tuul={ilm.forecast[0].wind}
        paev2={ilm.forecast[1].day} temp2={ilm.forecast[1].temperature} tuul2={ilm.forecast[1].wind}
        paev3={ilm.forecast[2].day} temp3={ilm.forecast[2].temperature} tuul3={ilm.forecast[2].wind}
        /> 
    </div>
    )
}

export default IlmaInfo