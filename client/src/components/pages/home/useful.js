
export const usefulContent =(title, text) => {

    const usefulSection = document.createElement("div");
    usefulSection.className = "useful-section";

    const container = document.createElement("div");
    container.className = "useful-containar";

    const header = document.createElement("h1");
    header.innerHTML = title; 

    const textContent = document.createElement("p");
    textContent.innerHTML = text;


    usefulSection.appendChild(container);
    container.appendChild(header);
    container.appendChild(textContent);
    
return usefulSection;
}