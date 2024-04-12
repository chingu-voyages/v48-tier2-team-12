# Dinopedia
## Overview

This application was developed as a learning project for Chingu Voyage 48. It retrieves information about dinosaurs through the [Chingu Dinosaurs API](https://chinguapi.onrender.com/dinosaurs), utilizing data sourced from [London's Natural History Museum](https://www.nhm.ac.uk/discover/dinosaurs.html).

## Features

1. **Dinosaur Display**:
* Displays dinosaurs' name, weight, length, country, diet, and corresponding images sourced from the provided API data.
* Each dinosaur card is clickable to view full details.

2. **Dinosaur Search**:
* Search, filter, and sort feature allows users to search for dinosaurs by name, weight, length, country, and diet.
* Search functionality should be case-insensitive and allow partial matching of dinosaur names.

3. **Charts**:
* The Charts page displays two charts showing the distribution of dinosaur diet and type data. Users can filter the data using provided categories.

4. **Responsiveness**: The application is responsive across various devices and screen sizes.

5. **Display news** about recent dinosaur discovery:
* The app uses the [GNews API](https://gnews.io/) to feature recent discoveries in paleontology.

6. **Map** with dinosaurs findings location:
* On each dinosaur details page the app incorporates an interactive map feature highlighting locations where dinosaur fossils have been discovered.

7. **Dinosaur of the day** section:
* Includes a section in home page highlighting a specific dinosaur each day.
* Fun and interesting facts are displayed as users navigate through pages other than the home page.

## Running the project 
### Live site
[Dinopedia](https://v48-dinopedia.netlify.app)

### From the repo:
1. Clone this project locally
2. Run `npm install` in your bash/command line
3. Run `npm run dev` in your bash/command line

## Dependencies:
* @babel/runtime (^7.24.1)
* chart.js (^4.4.2)
* chartjs-plugin-datalabels (^2.2.0)
* react (^18.2.0)
* react-chartjs-2 (^5.2.0)
* react-dom (^18.2.0)
* react-loader-spinner (^6.1.6)
* react-router-dom (^6.22.3)
* react-slider (^2.0.6)

## DevDependencies:
* react (^18.2.64)
* react-dom (^18.2.21)
* react-slider (^1.3.6)
* typescript (^5.2.2)
* vite (^5.1.6)

## Team Decision Log and consultable useful resources
A list of helpful documents, tutorials and links that made the structure of this code rich and well organized:  
[Log of Team Decisions and Accessible and valuable resources](https://docs.google.com/document/d/1Qnf9Mo8NQ3MMUM1FSeZui6EVUXTToI0EJEflwzLXNG8/edit?usp=sharing)

## Contributors
### UI/UX Designers: 
* Amina Hargitai
* Karl Gosas
### Web Developers (and their repos): 
* [Carlos Morais](https://github.com/Morais-C)
* [Cristiano Valente](https://github.com/cris-valente)
* [Dawood Dilawar](https://github.com/dawooddilawar)
* [Huda Mabkhoot](https://github.com/Hudamabkhoot) 
* [Ulaş Coşkun](https://github.com/bulascoskun)
