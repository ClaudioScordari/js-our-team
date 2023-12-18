/*

    Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
    Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
    
    MILESTONE 0:
    Creare l'array di oggetti con le informazioni fornite. - fatto
    MILESTONE 1:
    Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto - fatto
    MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe - fatto

*/
// Creo l'array
const myArray = [
    // indice 0 array
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },

    // indice 1
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Grapich Design',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
];

// Per stampare in console tutti i membri uso ciclo for

for (let key in myArray) {
    console.log(myArray[key]);
}

// Mi seleziono la mia lista dal DOM
const myList = document.querySelector('ul');

// Uso un ciclo for per contare tutta la lunghezza dell'array
for (let index = 0; index < myArray.length; index++) {

    // Uso ciclo for in per scorrere tutte le proprietà degli oggetti degli array
    for (const key in myArray[index]) {
        myList.innerHTML += `
            <li>
                ${myArray[index][key]}
            </li>
        `;
    }
}
