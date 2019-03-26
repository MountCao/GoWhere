let defaultCity = '芜湖'
try{
    if(localStorage.city){
        defaultCity = localStorage.city
    }
} catch(e){}

export default {
    city: defaultCity
}