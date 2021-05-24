window.addEventListener('load',()=> {
    let long;
    let lat;
    let temparatureDescription = document.querySelector(".temparature-description");
    let temparatureDegree = document.querySelector(".temparature-degree");
    let locationTimezone = document.querySelector(".location-Timezone")

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const api = "api.openweathermap.org/data/2.5/weather?id=2172797&appid={a4b1c97474882489cf81f37938f90fb8}"
            fetch(api)
                .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
                const {temparature, summary}=data.currently;
                temparatureDegree.textContent = temparature;
                temparatureDescription.textContent = summary;
                locationTimezone.textContent=data.timezone;
        })  
        });
        
    }
    
});