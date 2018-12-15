## BookingStudio A/S - Kode opgave 2018

Dette projekt indeholder et par mindre kode opgaver:

1. [ ] **Start og køre web app'en (se hvordan i denne README)**
1. **Mulighed for at tilføje og fjerne varer fra listen**
1. **Vise varetotal**
1. **Formatere beløb på en pæn måde**
1. **BONUS: Håndtere hvor mange varer man kan tilføje eller fjerne**
1. **BONUS: Lave siden mere lækker med CSS**

### 1. Start og køre web app'en

I denne README er beskrevet hvordan man starter web-app'en lokalt.

Brug også lidt tid på at orientere dig omkring hvilke filer der findes i projektet.

-   `api.js` - bruges til at hente varer (items) ud. Se i denne fil hvordan varer er sat op.
-   `format.js` - bruges til at formatere tal med. Her ligger en simpel funktion til at formatere beløb med
-   `App.js` - Den primære React komponent der styrer hvordan web-app'en virker
-   `ItemRow.js` - En React komponent der tegner en række med en vare og mulighed for at vælge flere og trække fra.
-   `App.css` - Styles til web-app'en

### 2. Mulighed for at tilføje og fjerne varer fra listen

Der findes 2 funktioner:

`handleQuantityInc(id)` samt
`handleQuantityDec(id)` i filen App.js

Du skal implementere disse således at man som bruger kan ændre valgte antal.

**TIP:**
Det er noget med at hente varerne (items) ud af komponentets state, opdatere antal og gemme dem i state igen (via `this.setState(...)`)

### 3. Vise varetotal

Til højre nederst er der en tekst varetotalen (se efter "I ALT 0").

Når man tilføjer eller fjerner varer skal denne tekst vise den nuværende sum af valgte varer.

**TIP:**
Se evt. hvordan man for hver linje beregner linje totalprisen og lav derefter en sum af disse linjetotaler.

### 4. Formatere beløb på en pæn måde

De beløb der udskrives skal gerne vises med 2 decimaler og gerne med tusindtals-separator samt valuta.

I filen `format.js` findes en funktion der hedder `formatAmount(amount, currency)`. Implementér en pæn formatering af de beløb den bliver kaldt med.

**TIP:**
Du må meget gerne benytte de standard Javascript API'er der findes til formatering af tal. Se efter `Intl.NumberFormat()` på Mozilla's MDN website.

### 5. BONUS: Håndtere hvor mange varer man kan tilføje eller fjerne

På en vare er angivet `minQuantity` og `maxQuantity`. Den ene angiver det mindste antal brugeren kan vælge af en vare og den anden det maksimale antal.

Ændr i `handleQuantityInc(id)` og `handleQuantityDec(id)` så disse regler overholdes.

Overvej hvad der skal ske hvis man starter med et antal der ikke overholder reglerne. Hvordan kan dette håndteres?

### 6. BONUS: Lave siden mere lækker med CSS

Siden er pæn, men meget simpel. Hvis du har lyst, så slip fantasien løs og lav siden mere lækker. Vis gerne hvad du kan med CSS.

Hvis du ikke føler at du er den store designer er det helt ok at springe denne del over.

## Generelt

For at starte projektet skal du have [NodeJS](https://nodejs.org) og NPM på din maskine. Du kan evt. også installere [Yarn](https://yarnpkg.com/lang/en/).

1. Lav en fork af projektet fra Github og klon filerne ned 
1. I projektmappen køres `npm install` (eller `yarn install` hvis du har Yarn)
1. I projektmappen startes web-app'en med `npm start` (eller `yarn start`)

Skriv endelig hvis du har problemer med at komme igang.

## Oprindelig Create React App README følger her

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
