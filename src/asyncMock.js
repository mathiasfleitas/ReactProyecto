const Product  = [
    {id:'1', price:251 ,stock: 25, name:'Gigabyte B760m Ds3h Ax Lga1700 Intel 12 13 Wifi', category:'Motherboard', img:'https://http2.mlstatic.com/D_NQ_NP_2X_815713-MLU70378643849_072023-F.webp', description:'Compatible con procesadores Intel,Incorpora el socket Socket lga1700,Compatible con memoria RAM DDR4,Cuenta con chipset Intel b760 express chipset' },
   
    {id:'2', price:106 ,stock: 25, name:'Asrock H510m Intel Core De 11 A Gen Ddr4 3200mhz Hdmi', category:'Motherboard', img:'https://http2.mlstatic.com/D_NQ_NP_882774-MLM52500916827_112022-V.webp', description:'Compatible con procesadores Intel,Incorpora el socket Lga 1200,Con factor de forma Micro ATX: 19.7 cm x 18.8 cm,Compatible con memoria RAM DDR4,Cuenta con chipset Intel® H510' },
   
    {id:'3', price:4520,stock: 25, name:'Biostar H510mhp Intel Ddr4 Hdmi M.2 10th 11th', category:'Motherboard', img:'https://http2.mlstatic.com/D_NQ_NP_658449-MLU69243040076_052023-V.webp', description:'Compatible con procesadores Intel,Incorpora el socket 1200,Con factor de forma Micro ATX,Compatible con memoria RAM DDR4,Cuenta con chipset Intel h510' },
   
    {id:'4', price:608,stock: 25, name:'Intel Core i9-11900K BX8070811900K', category:'Preocesadores', img:'https://http2.mlstatic.com/D_NQ_NP_2X_677183-MLA54812400475_042023-F.webp', description:'Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.' },
   
    {id:'5' ,price:799 ,stock: 25, name:'AMD Ryzen 9 7950X 100-100000514WOF de 16 núcleos y 5.7GHz de frecuencia', category:'Preocesadores', img:'https://http2.mlstatic.com/D_NQ_NP_2X_923736-MLA52735136877_122022-F.webp', description:'Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles. AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más' },
   
    {id:'6', price:363 ,stock: 25, name:'AMD Ryzen 7 5800X 100-100000063WOF ', category:'Preocesadores', img:'https://http2.mlstatic.com/D_NQ_NP_2X_903113-MLA44347094942_122020-F.webp', description:'En este producto, encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo. Estos tienen relación directa con dos elementos: los hilos y el modelo. Por lo tanto, a la hora de elegir un procesador, es importante que valores los tres en su conjunto.' },
   
    {id:'7', price:50 ,stock: 25,name:'Mouse gamer Logitech G Series G502 Hero negro', category:'Accesarios', img:'https://http2.mlstatic.com/D_NQ_NP_2X_966913-MLA32149634914_092019-F.webp', description:'Adaptado a tus movimientos. Su diseño eficaz hace de este mouse un elemento cómodo, con una gran experiencia de uso para aquellas personas que buscan seguridad en cada click.' },
   
    {id:'8', price:114 ,stock: 25,name:'Teclado gamer HyperX Alloy Origins 65 QWERTY HyperX Linear Red inglés US color negro con luz RGB', category:'Accesarios', img:'https://http2.mlstatic.com/D_NQ_NP_2X_775176-MLA50158986097_062022-F.webp', description:'Este teclado HyperX de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto, y hacer que tus jugadas alcancen otro nivel.' },
   
    {id:'9', price:339 ,stock: 25,name:'Monitor gamer Gigabyte G27F 2 LCD 27" negro 100V/240V', category:'Accesarios', img:'https://http2.mlstatic.com/D_NQ_NP_2X_876051-MLA51989460462_102022-F.webp', description:'Disfrutá de todas las cualidades que el monitor Gigabyte G27F 2 tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementa cualquier espacio ya sea en tu casa u oficina.' }
]

export const getProduct = () =>{
    return new Promise(( resolve ) => {
        setTimeout(()=>{
            resolve(Product)
        })
    },2000)
}