// Function to create a board
function createBoard() {
    const boardName = document.getElementById("boardName").value;
    
    if (boardName.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Pleace enter a board name!",

        // Close button
        confirmButtonColor: "blue",
        confirmButtonText: "Okay"
        
      });
      return;
    }
  
    // Create a new board element
    const board = document.createElement("div");
    board.classList.add("board");
  
    // Add board title
    const boardTitle = document.createElement("h3");
    boardTitle.textContent = boardName;
    board.appendChild(boardTitle);
  
    // Add "Add List" section for each board
    const addListSection = document.createElement("div");
    addListSection.classList.add("add-list");
  
    const listInput = document.createElement("input");
    listInput.placeholder = "Enter list name";
  
    const addListButton = document.createElement("button");
    addListButton.textContent = "Add List";
  
    // Add event listener to the "Add List" button
    addListButton.addEventListener("click", function() {
      const listName = listInput.value;
  
      if (listName.trim() === "") {
        // alert("Please enter a list name!");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter a list name!",
  
          // Close button
          confirmButtonColor: "blue",
          confirmButtonText: "Okay"
          
        });
        return;
      }
  
      // Create the list and add to the board
      const list = document.createElement("div");
      list.classList.add("list");
  
      const listTitle = document.createElement("div");
      listTitle.classList.add("list-title");
      listTitle.textContent = listName;
      
      // Enable editing list title
      listTitle.addEventListener("click", function() {
        const newTitleInput = document.createElement("input");
        newTitleInput.value = listTitle.textContent;
        listTitle.textContent = "";
        listTitle.appendChild(newTitleInput);
        newTitleInput.focus();
  
        newTitleInput.addEventListener("blur", function() {
          listTitle.textContent = newTitleInput.value;
          listTitle.appendChild(newTitleInput);
        });
  
        newTitleInput.addEventListener("keypress", function(e) {
          if (e.key === "Enter") {
            listTitle.textContent = newTitleInput.value;
          }
        });
      });
  
      list.appendChild(listTitle);
  
      // Create the "Add Card" section for each list
      const addCardSection = document.createElement("div");
      const cardInput = document.createElement("input");
      cardInput.placeholder = "Enter card name";
      cardInput.classList.add("cardInput")
      const addCardButton = document.createElement("button");
      addCardButton.textContent = "Add Cart";
      addCardButton.classList.add("addCardButton")
  
      addCardButton.addEventListener("click", function() {
        const cardName = cardInput.value;
        if (cardName.trim() === "") {
          // alert("Please enter a card name!");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter a cart name!",
    
            // Close button
            confirmButtonColor: "blue",
            confirmButtonText: "Okay"
            
          });
          return;
        }
  
        // Create the card and append to the list
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = cardName;
  
        // Enable card editing
        card.addEventListener("click", function() {
          const newCardInput = document.createElement("input");
          newCardInput.value = card.textContent;
          card.textContent = "";
          card.appendChild(newCardInput);
          newCardInput.focus();
  
          newCardInput.addEventListener("blur", function() {
            card.textContent = newCardInput.value;
          });
  
          newCardInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
              card.textContent = newCardInput.value;
            }
          });
        });
  
        list.appendChild(card);
        cardInput.value = "";
      });
  
      addCardSection.appendChild(cardInput);
      addCardSection.appendChild(addCardButton);
      
      list.appendChild(addCardSection);
      board.appendChild(list);
  
      listInput.value = "";
    });
  
    addListSection.appendChild(listInput);
    addListSection.appendChild(addListButton);
    
    board.appendChild(addListSection);
  
    // Add the new board to the boards container
    const boardsContainer = document.getElementById("boardsContainer");
    boardsContainer.appendChild(board);
  
    document.getElementById("boardName").value = ""; // Reset board name input
  }
  