import { createContext } from "react";
import { View, Text } from "react-native";
import { useState } from "react";
import curlPupitreBarre from "../Ressource/gifs/curlPupitreBarre.jpg";
import  curlBarreBiceps from "../Ressource/gifs/curlBarreBiceps.jpg";
import develloperArnold from "../Ressource/gifs/develloperArnold.jpg";
import devIncBarExePect from "../Ressource/gifs/devIncBarExePect.jpg";
import devMilEp from "../Ressource/gifs/devMilEp.jpg";
import eleFronEpa from "../Ressource/gifs/eleFronEpa.jpg";
import elevLateEp from "../Ressource/gifs/elevLateEp.jpg";
import oisAsBanEp from "../Ressource/gifs/oisAsBanEp.jpg";
import pomExeMus from "../Ressource/gifs/pomExeMus.jpg";
import soulTerDead from "../Ressource/gifs/soulTerDead.jpg";
import sqBarProgJam from "../Ressource/gifs/sqBarProgJam.jpg";
import sveExeRenPec from "../Ressource/gifs/sveExeRenPec.jpg";
import thruExeCros from "../Ressource/gifs/thruExeCros.jpg";
import tirMenMacGui from "../Ressource/gifs/tirMenMacGui.jpg";
import curHaltMarPups  from "../Ressource/gifs/curHaltMarPups.jpg";
import draCurExeBiceps from "../Ressource/gifs/draCurExeBiceps.jpg";
export const Moncontext = createContext();

const MonProvider=({children})=>{
    const [userData, setUserData]= useState({         
        nom:null,       
        taille:null,
        masse:null,
     });
     const globalImage=[ 
        {
            image:curlPupitreBarre,
            nom:"CURL PUPITRE BARRE",
            id:1
        },
        {
            image: curlBarreBiceps ,
            nom:"CURL BARRE BICEPS",
            id:2
        },
        {
            image: curlPupitreBarre ,
            nom:"CURL PUPITRE BARRE",
            id:3
        },
        {
            image: develloperArnold ,
            nom:"DEVELOPPEE ARNOLD",
            id:4
        },
        {
            image: devMilEp ,
            nom:"DEVELOPPEE MILITAIRE EPAULES",
            id:5
        },       
        {
            image:devIncBarExePect,
            nom:"DEVELLOPPEE PECTORAUX",
            id:6
        },
        {
            image: draCurExeBiceps ,
            nom:" DRAG CURL BICEPS ",
            id:7
        },
        {
            image:eleFronEpa,
            nom:" ELEVATION FRONTAL EPAULE",
            id:8
        },
        {
            image: elevLateEp,
            nom:"ELEVATION LATERAL EPAULE",
            id:9
        },
        {   
            image: oisAsBanEp ,
            nom:" OISEAUX ASSIS BANC ",
            id:10
        },
        {
            image:pomExeMus,
            nom:"POMPE",
            id:11
        },
        {
            image:soulTerDead,
            nom:"SOULEVEE DE TERRE",
            id:12
        },
        {
            image:sqBarProgJam,
            nom:"SQUAT " ,
            id:13          
        },
        {
            image:sveExeRenPec,
            nom:"SOULEE DE POID PERPENCULAIRE",
            id:14
        },
        {
            image:thruExeCros,
            nom:"SQUAT + DEVELOPPER MILITAIRE",
            id:15
        },
        {
            image:tirMenMacGui,
            nom:"SOULEVEE DE BARRE TIREE",
            id:16
        }
     

     ];
     const globalCitations=["La douleur que vous ressentez aujourd'hui sera votre force de demain." ,
     "Le succès n'est pas donné, il est gagné. Sur le terrain, dans la salle de sport, dans la vie.",
     "N'abandonnez jamais sur un rêve juste à cause du temps qu'il faudra pour l'accomplir. Le temps passera de toute façon.",
     "Chaque séance d'entraînement est une chance de vous rapprocher de vos objectifs.",
     "La sueur d'aujourd'hui est le succès de demain.",
     "Le corps atteint ce que l'esprit croit.",
     "Le chemin du succès est pavé de sueur.",
     "Rappelez-vous pourquoi vous avez commencé.",
     "Ne rêvez pas de corps parfaits, travaillez pour en créer un.",
     "Le plus grand plaisir dans la vie est de faire ce que les gens disent que vous ne pouvez pas faire.",
     "La discipline est le pont entre les objectifs et les réalisations.",
     "Chaque jour est une autre chance de vous rapprocher de vos objectifs. Ne la gaspillez pas.",
     "Votre seul adversaire réel est vous-même. Surmontez-vous et dominez.",
     "Le succès n'est pas donné. Il est mérité.",
     "La motivation vous fait commencer, l'habitude vous fait continuer.",
     "Chaque effort que vous mettez vous rapproche un peu plus du succès.",
     "Ne rêvez pas de réussite, travaillez pour elle.",
     "Le secret de s'améliorer constamment est de s'auto-discipliner.",
     "La persévérance est la clé. Si vous tombez, relevez-vous et continuez.",
     "Ne comptez pas les jours, faites que les jours comptent."


      ]
     
     const ModifierUserDat=(newdata)=>{
        setUserData(newdata);
     }

    return(
        < Moncontext.Provider value={{ globalImage,userData, ModifierUserDat, globalCitations}} >
        {children}
        </Moncontext.Provider >

    )
}
export  default MonProvider;