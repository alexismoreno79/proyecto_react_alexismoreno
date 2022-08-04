const products = [
    {   id: '1',
        name: 'Caño agua fusión',
        price: 1500,
        category: 'caneriaAgua',
        img: 'images/imgProduct/agua03.png',
        stock: 10,
        description: 'Caño agua Multicapa fusión'
    },
    {   id: '2',
        name: 'Codo agua fusión',
        price: 250,
        category: 'caneriaAgua',
        img: 'images/imgProduct/agua08.png',
        stock: 30,
        description: 'Codo agua 90° fusión HH'
    },
    {   id: '3',
        name: 'Caño desague JE',
        price: 3600,
        category: 'caneriaDesague',
        img: 'images/imgProduct/desague26.png',
        stock: 12,
        description: 'Tubo desague Junta Elástica'
    },
    {   id: '4',
        name: 'Codo desague 90° MH',
        price: 450,
        category: 'caneriaDesague',
        img: 'images/imgProduct/desague07.png',
        stock: 20,
        description: 'Codo desague 90° MH Junta Elástica'
    },
    {   id: '5',
        name: 'Hierro nervurado',
        price: 1270,
        category: 'hierros',
        img: 'images/imgProduct/hierro01.png',
        stock: 48,
        description: 'Hierros nervurados'
    },
    {   id: '6',
        name: 'Malla de hierro 15x15 2m x 3m',
        price: 8600,
        category: 'hierros',
        img: 'images/imgProduct/hierro02.png',
        stock: 18,
        description: 'Malla de hierro 15x15 2m x 3m'
    }
]
    
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000);
    })
}
