fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    console.log(response);
    if(!response.ok) throw new Error(`Erreur ${response.status}`)
    return response.json()
})
.then(response => {
    console.log("SECOND THEN !!!", response);
})
.catch(e => {
    console.log(e );
})