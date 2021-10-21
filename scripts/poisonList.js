// STEP 3: Import Data Set
import { poisonPlants } from "./poisonData.js";

// STEP 4: build HTML Output
export const HTMLPoisons = () => {
    const poisonElement = document.querySelector("#container")
    const poisonObject = poisonPlants()

    for (let i = 0; i < poisonObject.length; i++) {

    poisonElement.innerHTML += `
    <ul id="poisons">
        <li>Plant #${poisonObject[i].id}</li>
        <li>Specie: ${poisonObject[i].species}</li>
        <li>Commonly known as: ${poisonObject[i].commonName}</li>
        <li>Fatal?: ${poisonObject[i].fatal}</li>
        <li>Antidote: ${poisonObject[i].antidote}</li>
    </ul>
    `
    }
}