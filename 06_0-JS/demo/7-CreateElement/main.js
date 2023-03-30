const header = document.createElement("header");
const h1 = document.createElement('H1');
const h2 = document.createElement('H2');

//document.body.appendChild(header); 
h2.innerText="Ceci est mon titre H2";
h1.innerText="Ceci est mon titre H1";

document.body.insertBefore(header,document.body.firstChild);

header.appendChild(h2);

//header.appendChild(h1);

header.insertBefore(h1,h2);

header.removeChild(h2);