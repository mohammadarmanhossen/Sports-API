const mealName = document.getElementById("mealName").value;
      const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${mealName}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
          const resultsDiv = document.querySelector(".card_s");
          resultsDiv.innerHTML = "";
          if (data.player && data.player.length > 0) {
            data.player.forEach((player) => {
              resultsDiv.innerHTML += `
                <div class="card_texts">

                  <img id="img1" src="${player.strThumb}" alt="${player.idPlayer}">
                  <h1>Name:${player.strPlayer}</h1>
                <p>Id:${player.idPlayer}</p>
                  <h4>Gender:${player.strGender}</h4>
                  <h3>Sport:${player. strSport}</h3>
                  <h2>Country:${player.strNationality}</h2>
                  <button onclick="showDetails('${player.idPlayer}')">Details</button>
                  <button onclick="addName('${player.strPlayer}')">Add</button>
                <h5>
                  <i class="fa fa-facebook-square" style="font-size:46px"></i>
                  <i class="fa fa-twitter" style="font-size:46px"></i>
                  <i class="fa fa-linkedin" style="font-size:46px"></i>
                  </h5>

                </div>
              `;
            });
          } else {
            resultsDiv.innerHTML = "<p>No players found</p>";
          }
        })
        .catch((error) => {
          console.error('Error fetching player data:', error);
        });

    const searchPlayer = () => {
      const mealName = document.getElementById("mealName").value;
      const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${mealName}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const resultsDiv = document.querySelector(".card_s");
          resultsDiv.innerHTML = "";
          if (data.player && data.player.length > 0) {
            data.player.forEach((player) => {
              resultsDiv.innerHTML += `
                <div class="card_texts">

                <img id="img1" src="${player.strThumb}" alt="${player.idPlayer}">
                  <h1>Name:${player.strPlayer}</h1>
                <p>Id:${player.idPlayer}</p>
                  <h4>Gender:${player.strGender}</h4>
                  <h3>Sport:${player. strSport}</h3>
                  <h2>Country:${player.strNationality}</h2>
                  <button onclick="showDetails('${player.idPlayer}')">Details</button>
                  <button onclick="addName('${player.strPlayer}')">Add</button>
                <h5>
                  <i class="fa fa-facebook-square" style="font-size:46px"></i>
                  <i class="fa fa-twitter" style="font-size:46px"></i>
                  <i class="fa fa-linkedin" style="font-size:46px"></i>
                  </h5>
                 
                </div>
              `;
            });
          } else {
            resultsDiv.innerHTML = "<p>No players found</p>";
          }
        })
        .catch((error) => {
          console.error('Error fetching player data:', error);
        });
    };

    const showDetails = (playerId) => {
      const url = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${playerId}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const resultsDiv = document.querySelector("#item_details");
          resultsDiv.innerHTML = "";
          if (data.players && data.players.length > 0) {
            const player = data.players[0];
            resultsDiv.innerHTML = `
              <div class="card_texts">
                  <img id="img1" src="${player.strThumb}" alt="${player.idPlayer}">
                  <h1>Name:${player.strPlayer}</h1>
                <p>Id:${player.idPlayer}</p>
                  <h4>Gender:${player.strGender}</h4>
                  <h3>Sport:${player. strSport}</h3>
                  <h2>Country:${player.strNationality}</h2>
                  <button onclick="showDetails('${player.idPlayer}')">Details</button>
                  <button onclick="addName('${player.strPlayer}')">Add</button>
                <h5>
                  <i class="fa fa-facebook-square" style="font-size:46px"></i>
                  <i class="fa fa-twitter" style="font-size:46px"></i>
                  <i class="fa fa-linkedin" style="font-size:46px"></i>
                  </h5>
              </div>
            `;
          } else {
            resultsDiv.innerHTML = "<p>No player details found</p>";
          }
        })
        .catch((error) => {
          console.error('Error fetching player details:', error);
        });
    };

    const addName = (playerName) => {
      const itemDetailsDiv = document.getElementById("addmember");
        itemDetailsDiv.innerHTML += ` <p>${playerName}</p>`;
        add_Name();
    };

    let memberCount=0;
    const add_Name = (playerName) => {
      if (memberCount < 11) {
        memberCount += 1;
        const countSpan = document.getElementById("count");
        countSpan.textContent = memberCount;
        itemDetailsDiv.innerHTML += `<p>${playerName}</p>`;
      } else {
        alert("Must be players 11");
      };
    };