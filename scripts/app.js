const search=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');
 
const updateUI=(data)=>{
    
    const {cityDets,weather}=data;

    details.innerHTML=`
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather[0].WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather[0].Temperature.Metric.Value}</span><span>&deg;C</span>
        </div>
    `;

    const iconSrc=`img/icons/${weather[0].WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);
    
    let timeSrc=null;
    timeSrc=weather[0].IsDayTime?'img/day.svg':'img/night.svg';
    time.setAttribute('src',timeSrc);
    
    if(card.classList.contains('d-none'))
        card.classList.remove('d-none');
}

const updateCity=async (city)=>{
    const cityDets= await getCity(city);
    const weather= await getWeather(cityDets.Key);

    return { cityDets, weather };
};

search.addEventListener('submit',event=>{
    event.preventDefault();

    // get city name
    const city=search.city.value.trim();
    search.reset();

    updateCity(city).then(data=> updateUI(data))
    .catch(err=>console.log(err));
});