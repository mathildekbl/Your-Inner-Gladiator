export default class Facts{
    static distance = {
        '1':{
            'value':8.85,
            'text':" de l'Evrest qui est la plus haute montagne sur Terre avec ses 8849m d'altitude ! "
        },
        '2':{
            'value':21.23,
            'text':" du Olympus Mons sur Mars qui est probablement la plus haute montagne du Système Solaire  ! "
        },
        '3':{
            'value':42.195,
            'text':" d'un marathon, RIEN NE VOUS ARRETE ! "
        },
        '4':{
            'value':24539,
            'text':" du parcours de Forrest Gump. RUN FORREST ! RUN !"
        },
        '5':{
            'value':117,
            'text':" du mur D'Hadrien. Ce mur date de l'Antiquité, il parcourt l'Angleterre en largeur et servait à se défendre contre les Romains"
        },
        '6':{
            'value':408,
            'text':" de la distance par rapport à l'ISS. Vous vous rapprocher des ETOILES !"
        },
        '7':{
            'value':0.5,
            'text':' de la distance jusqu\'à la boîte aux lettres'
        }
    }

    static getDistFact(dist){
        /* Retourne le fait le supérieur le plus proche de la distance parcourue
        On initialise avec la valeur maximale possible*/
        let answer={
            'value':Math.max(dist,24540),
            'text':" du parcours du meilleur athlète au monde... VOUS !"
        };
        for (var key in Facts.distance){
            if (Facts.distance[key]['value']>=dist && Facts.distance[key]['value']<answer['value']) {
                answer = Facts.distance[key];
            }
        }
        return "Vous avez parcouru "+(100*dist/answer['value']).toFixed(2)+"%"+answer['text'];
    }
}