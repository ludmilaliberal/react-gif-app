export const getGifs = async (category)=>{
    const url = `http://api.giphy.com/v1/gifs/search?apikey=zyGPyKIt25pJDpArvWQ3gHXMTMK6DjPM&q=${category}&limit=10`;
    const respuesta = await fetch (url);
    const {data} = await respuesta.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) )


    return gifs;
}