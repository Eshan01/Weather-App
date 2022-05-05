const key='uOvBWayFy95gW3THPJgi36wYTpCiMlE1';


const getCity= async (city)=>{
    const base='https://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;
    const response= await fetch(base+query);
    const data=await response.json()
    return data[0];
};

const getWeather = async (locationKey)=>{
    const base=`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;
    const query=`?apikey=${key}`
    const response =await fetch(base+query);
    const data= await response.json();

    return data;
}
