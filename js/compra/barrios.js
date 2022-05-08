function select_barrio(comuna){
    barrio.innerHTML = `<option disabled selected>Barrio</option>`
    console.log(comuna);
    switch (comuna) {
        case '1':
            for(let i = 1; i<=6; i++){
                let option = document.createElement("option");
                if(i===1)
                option.innerHTML='Retiro';
                if(i===2)
                option.innerHTML='San Nicolás';
                if(i===3)
                option.innerHTML='Pto Madero';
                if(i===4)
                option.innerHTML='San Telmo';
                if(i===5)
                option.innerHTML='Monserrat';
                if(i===6)
                option.innerHTML='Constitución';
                option.value = i;
                barrio.appendChild(option)
            }
            break;
        case '2':
            for(let i = 1; i<2; i++){
                let option = document.createElement("option");
                option.innerHTML='Recoleta';
                option.value = i;
                barrio.appendChild(option);
            }
                break;
        case '3':
            for(let i = 1; i <=2; i++){
                let option = document.createElement("option");
                if(i===1)
                option.innerHTML='Balvanera';
                if(i===2)
                option.innerHTML='San Cristobal';
                option.value = i;
                barrio.appendChild(option)
            }
            break;
        case '4':
            for(let i = 1; i<=4; i++){
                let option = document.createElement("option");
                if(i===1)
                option.innerHTML='La Boca';
                if(i===2)
                option.innerHTML='Barracas';
                if(i===3)
                option.innerHTML='Parque Patricios';
                if(i===4)
                option.innerHTML='Nueva Pompeya';
                option.value = i;
                barrio.appendChild(option)
            }
            break;
        case '5':
            for(let i = 1; i <=2; i++){
                let option = document.createElement("option");
                if(i===1)
                option.innerHTML='Almagro';
                if(i===2)
                option.innerHTML='Boedo';
                option.value = i;
                barrio.appendChild(option)
            }
            break;
        case '6':
            for (let i = 1; i < 2; i++){
                let option = document.createElement("option")
                option.innerHTML='Caballito';
                option.value = i;
                barrio.appendChild(option);
            }
            break;
        case '7':
            for(let i = 1; i <=2; i++){
                let option = document.createElement("option");
                if(i===1)
                option.innerHTML='Flores';
                if(i===2)
                option.innerHTML='Parque Chacabuco';
                option.value = i;
                barrio.appendChild(option)
            }
            break;
        case '8':
            for(let i = 1; i <=3; i++){
                let option = document.createElement("option");
                if(i===1)
                option.innerHTML='Villa Soldati';
                if(i===2)
                option.innerHTML='Villa Lugano';
                if(i===3)
                option.innerHTML='Villa Riachuelo';
                option.value = i;
                barrio.appendChild(option)
            }
            break;
        case '9':
            for(let i = 1; i <=3; i++){
                let option = document.createElement("option");
                if(i===1)
                option.innerHTML='Liniers';
                if(i===2)
                option.innerHTML='Mataderos';
                if(i===3)
                option.innerHTML='Parque Avellaneda';
                option.value = i;
                barrio.appendChild(option)
            }
            break;
        case '10':
            for(let i = 1; i<=6; i++){
                let option = document.createElement("option");
                if(i===1)
                option.innerHTML='Villa Real';
                if(i===2)
                option.innerHTML='Monte Castro';
                if(i===3)
                option.innerHTML='Versalles';
                if(i===4)
                option.innerHTML='Floresta';
                if(i===5)
                option.innerHTML='Velez Sarsfield';
                if(i===6)
                option.innerHTML='Villa Luro';
                option.value = i;
                barrio.appendChild(option)
            }
            break;
        case '11':
            for(let i = 1; i<=4; i++){
                let option = document.createElement("option");
                if(i===1)
                option.innerHTML='Villa Gral Mitre';
                if(i===2)
                option.innerHTML='Villa Devoto';
                if(i===3)
                option.innerHTML='Villa Del Parque';
                if(i===4)
                option.innerHTML='Villa Sta Rita';
                option.value = i;
                barrio.appendChild(option)
            }
            break;
        case '12':
            for(let i = 1; i<=4; i++){
                let option = document.createElement("option");
                if(i===1)
                option.innerHTML='Coghlan';
                if(i===2)
                option.innerHTML='Saavedra';
                if(i===3)
                option.innerHTML='Villa Urquiza';
                if(i===4)
                option.innerHTML='Villa Pueyrredón';
                option.value = i;
                barrio.appendChild(option)
            }
            break;
        case '13':
            for(let i = 1; i <=3; i++){
                let option = document.createElement("option");
                if(i===1)
                option.innerHTML='Nuñez';
                if(i===2)
                option.innerHTML='Belgrano';
                if(i===3)
                option.innerHTML='Colegiales';
                option.value = i;
                barrio.appendChild(option)
            }
            break;
        case '14': 
            for (let i = 1; i < 2; i++){
                let option = document.createElement("option")
                option.innerHTML='Palermo';
                option.value = i;
                barrio.appendChild(option);
            }
            break;
        case '15':
            for(let i = 1; i<=6; i++){
                let option = document.createElement("option");
                if(i===1)
                option.innerHTML='Villa Crespo';
                if(i===2)
                option.innerHTML='Chacarita';
                if(i===3)
                option.innerHTML='La Paternal';
                if(i===4)
                option.innerHTML='Agronomía';
                if(i===5)
                option.innerHTML='Parque Chas';
                if(i===6)
                option.innerHTML='Villa Ortúzar';
                option.value = i;
                barrio.appendChild(option)
            }
            break;
        default:
            break;
    }
}