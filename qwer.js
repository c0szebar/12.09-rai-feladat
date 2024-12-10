function lekerdez(){
    const userid=document.getElementById("szam").value;
    fetch(`https://jsonplaceholder.org/users/${userid}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(users => {
    console.log(users);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}