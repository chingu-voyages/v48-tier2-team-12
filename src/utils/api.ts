export async function fetchDinos(): Promise<Dino[]> {
    const response = await fetch("https://chinguapi.onrender.com/dinosaurs");
    const data = await response.json();
    return data;
  }
  