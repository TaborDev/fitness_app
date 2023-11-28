export const exerciseOptions = {
    method: 'GET',
    params: {limit: '900'},
    headers: {
      'X-RapidAPI-Key': '89622fc936msh7d6170596cac221p19b3d7jsnbbb44548b449',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};

 export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '89622fc936msh7d6170596cac221p19b3d7jsnbbb44548b449',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


// process.env.REACT_API_KEY 

//Initially i was getting the error you are not subscribed to this api , so after reading stack overflow , i simply put the rapid api key in the fetchData.js instead of using env