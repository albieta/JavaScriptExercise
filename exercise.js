//Get todos, filter those which have userId == 6, map the ids multiplying them by 2, and sorting those ids ascendingly

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
           const combined = json
                  .filter(user => user.userId == 6)
                  .map(user => user.id * 2)
                  .sort((a, b) => a - b);
           console.log(combined);
      });
      


