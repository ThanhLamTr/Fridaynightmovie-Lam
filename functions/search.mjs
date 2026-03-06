export default async function search(){
    try{
        var favoriteMovie='Toy story';
        const endpointURL=`https://tastedive.com/api/similar?q=${favoriteMovie}&type=movie&k=${Netlify.env.get("SECRET_API_KEY")}`;
        const options={
           method: "GET"
        }
        const response =await fetch(endpointURL,options);
        const data= await response.json();
        return new Response()(
            JSON.stringify(data),{
                status:200,
                header:{
                       'Content-Type':'application/json'
                }
            }
        
        )
    }
    catch (error){
        return new Response(
            JSON.stringify({
                error:"Could not complete movie"
            }),
            {
                status:500,
                header:{
                    'Content-Type':'application/json'
                }
            }
        )
    }
}