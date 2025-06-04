const website = "https://frapollif.github.io/pet-adoption-data"

async function getPetsData() {
    const data = await fetch(`${website}/pets.json`)
    const petsdata = await data.json()
    return petsdata

}


async function displayPets() {

    const pets = await getPetsData();
    // console.log(pets)
    const template = document.querySelector('#animal-card-template')

    const wrapper = document.querySelector('main')
    
    console.log(template)

     function AgeCalculator(pet) {
            const current_date= new Date()
            const fullYear= current_date.getFullYear()
            const age = fullYear - pet.birthYear 
            if (age ==1){return "less than a year old" }
            if (age == 0){return "newborn"}
            if (age < 1){return age +" year old"}
            if (age >1){return age + " years old"} };
        
  

    pets.forEach( pet => {
        // Creo la costante clone:
        const clone = template.content.cloneNode(true)
        
        //Modifichiamo il template


        // Modifico il nome:
        const name = clone.querySelector('.animal-card-name')
        name.textContent = pet.name;

        //Modifico l'età:
        const age = clone.querySelector('.animal-card-age')
        console.log(AgeCalculator(pet))
        age.textContent = AgeCalculator(pet)

    
        //Modifico il tipo di animale:
        const species = clone.querySelector('.animal-card-species')
        species.textContent = pet.species
    

        //Modifico la foto:
        const image = clone.querySelector('.animal-card-photo img')
        image.src = pet.photo;
                                    // console.log(pet.photo)
         
        //Modifico la descrizione:
        const description= clone.querySelector('.animal-card-description')
        description.textContent = pet.description;
        
       
        //Aggiungo l'articolo alla pagina
        wrapper.appendChild(clone);

        }    
    )
}

displayPets()

// https://frapollif.github.io/pet-adoption-data/pets.json 