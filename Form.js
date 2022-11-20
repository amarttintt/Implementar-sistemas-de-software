window.onload = () => {
    // Scripts de búsqueda con indexOf
    const result1 = document.querySelector('#nombre');
    const result2 = document.querySelector('#contacto');
    const result3 = document.querySelector('#gmail');
    const result4 = document.querySelector('#educacion');
    const result5 = document.querySelector('#experiencia');
    const parameters = new URL(location.href);
    const nombre = parameters.searchParams.get("n1");
    const contacto = parameters.searchParams.get("n2");
    const gmail = parameters.searchParams.get("n3");
    const educacion = parameters.searchParams.get("n4");
    const experiencia = parameters.searchParams.get("n5");
    result1.innerHTML +=
        '<a>'+nombre+'</a>';
    result2.innerHTML +=
    '<a>'+contacto+'</a>';
    result3.innerHTML +=
    '<a>'+gmail+'</a>';
    result4.innerHTML +=
    '<a>'+educacion+'</a>';
    result5.innerHTML +=
    '<a>'+experiencia+'</a>';
}
    