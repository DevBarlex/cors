const { response } = require("express")

async function searchCharacter() {
    const name = document.getElementById('search').value.trim();
    if (!name) return alert("Introduce tu personaje favorito.");
    
    const characterInfoDiv = document.getElementById('character-info');
    const characterName = document.getElementById('character-name');
    const characterStatus = document.getElementById('character-status');
    const characterSpecies = document.getElementById('character-species');
    const characterGender = document.getElementById('character-gender');
    const characterOrigin = document.getElementById('character-origin');
    const characterImage = document.getElementById('character-image');
  
    // Reset previous data
    characterInfoDiv.style.display = 'none';
  
    try {
      const response = await fetch(`http://localhost:3000/characters/${name}`);
      if (response.ok) {
        const character = await response.json();
  
        // Show character info
        characterName.textContent = character.name;
        characterStatus.textContent = character.status;
        characterSpecies.textContent = character.species;
        characterGender.textContent = character.gender;
        characterOrigin.textContent = character.origin.name;
        characterImage.src = character.image;
        characterInfoDiv.style.display = 'block';
      } else {
        alert("Personaje no encontrado.");
      }
    } catch (error) {
      alert("Error al obtener los datos del personaje.");
    }
  }