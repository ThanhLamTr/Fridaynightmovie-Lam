async function apiSearch(searchTerm){
    const net="/.netlify/functions/search";
    const newfetch= await fetch(net);
    const hold= await newfetch.json();
    console.log(hold);

    
}
apiSearch();