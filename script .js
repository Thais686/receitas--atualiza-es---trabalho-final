const pratos = [
    {
        descricao: "Prato delicioso e saudável, feito com ingredientes frescos e locais.",
        nomeDoPrato: "Salada de Quinoa",
        preco: 25.50,
        ingredientes: ["Quinoa", "Tomate", "Pepino", "Alface", "Azeite", "Limão"],
        imagem: "./imagensReceitas/imagensSorteio/0.png"
    },
    {
        descricao: "Uma pizza tradicional, com molho caseiro e queijo derretido.",
        nomeDoPrato: "Pizza Margherita",
        preco: 45.00,
        ingredientes: ["Massa de pizza", "Molho de tomate", "Queijo mozzarella", "Manjericão", "Azeite"]
    },
    {
        descricao: "Sopa cremosa e reconfortante, ideal para os dias mais frios.",
        nomeDoPrato: "Sopa de Abóbora",
        preco: 20.00,
        ingredientes: ["Abóbora", "Cebola", "Alho", "Creme de leite", "Caldo de legumes"]
    }
];

//const pratoSorteado = sorteio

//pratos[pratoSorteado]

//h1 = pratos[pratoSorteado].nome
//p = 

let elementoPratoDoDia = document.getElementById("pratododia")

elementoPratoDoDia.innerHTML = ""

let pratoatualtitulo = document.createElement("h1")
pratoatualtitulo.classList.add("titulo-secundario")
pratoatualtitulo.innerHTML =  pratos[0].nomeDoPrato 

pratoatualimg = document.createElement("img")
pratoatualimg.src = pratos[0].imagem 

elementoPratoDoDia.appendChild(pratoatualtitulo)
elementoPratoDoDia.appendChild(pratoatualimg)


