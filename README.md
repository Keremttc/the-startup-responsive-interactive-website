# the-startup-responsive-interactive-website

Ontwerp en maak een website voor een opdrachtgever en bespreek het resultaat tijdens de Sprint Review.

De instructie van deze leertaak staan in de [INSTRUCTIONS.md](https://github.com/fdnd-task/the-client-website/blob/main/docs/INSTRUCTIONS.md)



## Inhoudsopgave Readme

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
De cadeau-inspiratiepagina is ontworpen om gebruikers te helpen bij het vinden van het perfecte cadeau door middel van een interactieve en gebruiksvriendelijke interface. De pagina bevat twee rijen met cadeautjes die gebruikers eenvoudig kunnen doorbladeren. Op mobiele apparaten kunnen gebruikers door de rijen swipen, terwijl ze op desktop met de muis door de cadeaus kunnen navigeren.

Daarnaast beschikt de pagina over een chatfunctie die afhankelijk van het apparaat anders wordt gepresenteerd:

Mobiele apparaten: De chatfunctie bevindt zich links onderaan de pagina en kan worden geopend door erop te tikken, waarna een chatvenster verschijnt.
Desktop: De chatfunctie is altijd zichtbaar en vast aan de linkerkant van het scherm.
De chat stelt gebruikers in staat om hun voorkeuren en behoeften te delen. Op basis van deze interactie past de pagina zich dynamisch aan en toont relevante cadeau-opties die aansluiten bij de gegeven informatie. Dit zorgt voor een gepersonaliseerde en efficiënte ervaring.

Dit project is gemaakt met HTML, javascript en CSS. Verder staat hieronder nog een korte lijst met gebruikte tools en middelen.
 
**Tools** 
- 🖥️ VSCode
- ✍️ Figma
 
**Methodes en Technieken**
- 🚀 HTML
- 💅🏼 CSS
- ⚙️ Javascript


<!-- Voeg een mooie poster visual toe 📸 -->

![image](https://github.com/user-attachments/assets/79dbd3e4-c9d5-49c5-a1db-bf918860548e)

Hieronder de mobile variant met een open chat-box.

![image](https://github.com/user-attachments/assets/ec196822-79b8-4689-962b-1e4534b768cf)


  ## Github

file:///C:/Users/kerem/Documents/GitHub/the-startup-responsive-interactive-website/index.html/<!-- Voeg een link toe naar Github Pages 🌐-->
## Kenmerken

<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->

Deze sprint heb ik alles proberen mee te nemen van afgelopen sprints. Dit heb ik allemaal gevoegd in deze sprint. In javascript heb ik een click functie toegepast en opensearch. Ook heb ik een webkit-scrollbar toegepast in mijn css. Ook heb ik nesting toegepast in mijn css. 


## Responsive

De pagina past zich visueel en functioneel aan op basis van de schermgrootte dankzij de geïmplementeerde media queries. Er zijn drie specifieke formaten gedefinieerd:

Maat S (340 px): Voor kleine schermen, zoals compacte smartphones.
Maat M (640 px): Voor medium schermen, zoals standaard smartphones.
Maat L (768 px): Voor grotere apparaten, zoals tablets of kleine laptops.

![image](https://github.com/user-attachments/assets/9f022cea-7691-49e7-81f9-65ec3272de02)


## ontwerpkeuzes 

Bij het ontwerp van de cadeau-inspiratiepagina is bewust gekozen voor een eenvoudige en toegankelijke manier om gebruikers te betrekken. Linksonder op de pagina vind je een knop waarmee je feedback kunt geven. Maar dat is niet alles – zodra je op de knop klikt, verschijnt er een chatfunctie.

Dit is een bewuste ontwerpkeuze: de knop geeft je niet alleen de mogelijkheid om te reageren, maar ook om meteen een stap verder te gaan. Door de chat te openen, kun je aangeven wat je zoekt of voor wie je een cadeau wilt vinden. Op basis van wat je daar deelt, wordt de pagina afgestemd om cadeau-inspiratie te tonen die echt bij jou past.

Zo wordt het proces niet alleen persoonlijker, maar ook leuker en makkelijker. Een kleine klik kan dus een groot verschil maken

![breakdownschets1](https://github.com/user-attachments/assets/76d33c91-ad50-491e-838f-c3c5e1e9343b)

![breakdownschets2](https://github.com/user-attachments/assets/88060cc8-c7fb-4c27-8e66-abb9364b3094)

## kenmerken

Ik gebruik voor css nesting. .card2 {
     
    
      @media (min-width: 768px) {
        display: none;
      }
    
      @media (min-width: 1024px) {
      }
    
      @media (min-width: 1280px) {
      }
    }      


   Voor javascript gebruik ik functions.

   
const openChatButton = document.querySelector ('.chat-button')
const theSearch = document.querySelector ('.zoeken')

openChatButton.addEventListener('click', openSearch)


function openSearch() {
    theSearch.classList.add('toonSearch')
}



## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
