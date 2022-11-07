const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

  ovejas_filtradas =  ovejas.filter(oveja =>  oveja.color === "rojo"   &&                               // Todas las que no sean rojas seran descartadas. 
                                                                    oveja.name.toLowerCase().includes("n")  &&    
                                                                    oveja.name.toLowerCase().includes("a"))           // Para filtrar las que tengan una 'n' && 'a' en su nombre

  console.log(ovejas_filtradas);