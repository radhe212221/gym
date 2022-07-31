export const exercisesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'fc8c8e9f24msh9838474fa04803fp1cd88bjsnf0bf3fa6c8e4'
  }
};


export const fetchData = async (url, options) =>{
    const response  = await fetch(url, options);
    const data = await response.json();
    return data;
}