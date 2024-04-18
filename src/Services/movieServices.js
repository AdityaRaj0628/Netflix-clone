// const key="726012d9cede9d4ddd87410bd95621aa"

const key=import.meta.env.VITE_TMDB_KEY;
const baseUrl="https://api.themoviedb.org/3";






const endpoints={
    popular:`${baseUrl}/movie/popular?api_key=${key}`,
    topRated:`${baseUrl}/movie/top_rated?api_key=${key}`,
    trending:`${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy:`${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming:`${baseUrl}/movie/upcoming?api_key=${key}`

};


// const key="726012d9cede9d4ddd87410bd95621aa"
// const endpoints=
// {
//     popular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
   
//        topRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
//        trending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
//       comedy:`https://api.themoviedb.org/3/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
//       upcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`
    
// };
    
// }






export function createImageUrl(filename,size){
    return `https://image.tmdb.org/t/p/${size}/${filename}`
}
export default endpoints;
