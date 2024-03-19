import {Dino} from "../interfaces/dino.interface";

export async function fetchDinos(): Promise<Dino[]> {
    const response = await fetch("https://chinguapi.onrender.com/dinosaurs");
    return await response.json();
  }
  