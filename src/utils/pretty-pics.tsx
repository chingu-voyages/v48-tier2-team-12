import albertosaurus from '../assets/haghani/albertosaurus.jpg';
import pachycephalosaurus from '../assets/haghani/pachycephalosaurus.jpg';
import tarbosaurus from '../assets/haghani/tarbosaurus.jpg';
import tyrannosaurus from '../assets/haghani/tyrannosaurus.jpg';
import velociraptor from '../assets/haghani/velociraptor.jpg';
import parasaurolophus from '../assets/haghani/parasaurolophus.jpg';
import styracosaurus from '../assets/haghani/styracosaurus.jpg';
import ceratosaurus from '../assets/haghani/ceratosaurus.jpg';
import aardonyx from '../assets/haghani/aardonyx.jpg';
import aardonyxSmall from '../assets/haghani/aardonyx-small.jpg';
import amargasaurus from '../assets/haghani/amargasaurus.jpg';
import apatosaurus from '../assets/haghani/apatosaurus.jpg';
import camarasaurus from '../assets/haghani/camarasaurus.jpg';
import carcharodontosaurus from '../assets/haghani/carcharodontosaurus.jpg';
import confuciusornis from '../assets/haghani/confuciusornis.jpg';
import deinocheirus from '../assets/haghani/deinocheirus.jpg';
import einiosaurus from '../assets/haghani/einiosaurus.jpg';
import euoplocephalus from '../assets/haghani/euoplocephalus.jpg';
import gorgosaurus from '../assets/haghani/gorgosaurus.jpg';
import lambeosaurus from '../assets/haghani/lambeosaurus.jpg';
import leptoceratops from '../assets/haghani/leptoceratops.jpg';
import mononykus from '../assets/haghani/mononykus.jpg';
import nothronychus from '../assets/haghani/nothronychus.jpg';
import ornithomimus from '../assets/haghani/ornithomimus.jpg';
import sauropelta from '../assets/haghani/sauropelta.jpg';
import scelidosaurus from '../assets/haghani/scelidosaurus.jpg';
import spinosaurus from '../assets/haghani/spinosaurus.jpg';
import stegosaurus from '../assets/haghani/stegosaurus.jpg';
import triceratops from '../assets/haghani/triceratops.jpg';
import utahraptor from '../assets/haghani/utahraptor.jpg';
import achillobator from '../assets/haghani/achillobator.jpg';
import alvarezsaurus from '../assets/haghani/alvarezsaurus.jpg';
import barosaurus from '../assets/haghani/barosaurus.jpg';
import achillobatorSmall from '../assets/haghani/achillobator-small.jpg';
import amargasaurusSmall from '../assets/haghani/amargasaurus-small.jpg';
import alamosaurus from '../assets/haghani/alamosaurus.jpg';
import bambiraptor from '../assets/haghani/bambiraptor.jpg';
import guanlong from '../assets/haghani/guanlong.jpg';
import microraptor from '../assets/haghani/microraptor.jpg';
import psittacosaurus from '../assets/haghani/psittacosaurus.jpg';
import stegoceras from '../assets/haghani/stegoceras.jpg';
import scutellosaurus from '../assets/haghani/scutellosaurus.jpg';

type Pretty = {
    title: string;
    id: number;
    img: string;
    smallImg?: string; // Optional property
};

export const altPics :Pretty[] = [
    {
        title: 'albertosaurus',
        id: 11,
        img: albertosaurus,
    },
    {
        title: 'pachycephalosaurus',
        id: 208,
        img: pachycephalosaurus,
    },
    {
        title: 'tarbosaurus',
        id: 282,
        img: tarbosaurus,
    },
    {
        title: 'tyrannosaurus',
        id: 297,
        img: tyrannosaurus,
    },
    {
        title: 'velociraptor',
        id: 304,
        img: velociraptor,
    },
    {
        title: 'parasaurolophus',
        id: 213,
        img: parasaurolophus,
    },
    {
        title: 'ceratosaurus',
        id: 59,
        img: ceratosaurus,
    },
    {
        title: 'styracosaurus',
        id: 277,
        img: styracosaurus,
    },
    {
        title: 'aardonyx',
        id: 1,
        img: aardonyx,
        smallImg: aardonyxSmall,
    },
    {
        title: 'amargasaurus',
        id: 16,
        img: amargasaurus,
        smallImg: amargasaurusSmall,
    },
    {
        title: 'apatosaurus',
        id: 25,
        img: apatosaurus,
    },
    {
        title: 'camarasaurus',
        id: 52,
        img: camarasaurus,
    },
    {
        title: 'carcharodontosaurus',
        id: 54,
        img: carcharodontosaurus,
    },
    {
        title: 'confuciusornis',
        id: 75,
        img: confuciusornis,
    },
    {
        title: 'deinocheirus',
        id: 81,
        img: deinocheirus,
    },
    {
        title: 'einiosaurus',
        id: 96,
        img: einiosaurus,
    },
    {
        title: 'euoplocephalus',
        id: 106,
        img: euoplocephalus,
    },
    {
        title: 'gorgosaurus',
        id: 121,
        img: gorgosaurus,
    },
    {
        title: 'lambeosaurus',
        id: 153,
        img: lambeosaurus,
    },
    {
        title: 'leptoceratops',
        id: 156,
        img: leptoceratops,
    },
    {
        title: 'mononykus',
        id: 184,
        img: mononykus,
    },
    {
        title: 'nothronychus',
        id: 197,
        img: nothronychus,
    },
    {
        title: 'ornithomimus',
        id: 202,
        img: ornithomimus,
    },
    {
        title: 'sauropelta',
        id: 249,
        img: sauropelta,
    },
    {
        title: 'scelidosaurus',
        id: 252,
        img: scelidosaurus,
    },
    {
        title: 'spinosaurus',
        id: 269,
        img: spinosaurus,
    },
    {
        title: 'stegosaurus',
        id: 272,
        img: stegosaurus,
    },
    {
        title: 'triceratops',
        id: 291,
        img: triceratops,
    },
    {
        title: 'utahraptor',
        id: 302,
        img: utahraptor,
    },
    {
        title: 'achillobator',
        id: 4,
        img: achillobator,
        smallImg: achillobatorSmall,
    },
    {
        title: 'alvarezsaurus',
        id: 15,
        img: alvarezsaurus,
    },
    {
        title: 'barosaurus',
        id: 42,
        img: barosaurus,
    },
    {
        title: 'alamosaurus',
        id: 9,
        img: alamosaurus,
    },
    {
        title: 'bambiraptor',
        id: 40,
        img: bambiraptor,
    },
    {
        title: 'guanlong',
        id: 126,
        img: guanlong,
    },
    {
        title: 'microraptor',
        id: 181,
        img: microraptor,
    },
    {
        title: 'psittacosaurus',
        id: 234,
        img: psittacosaurus,
    },
    {
        title: 'stegoceras',
        id: 271,
        img: stegoceras,
    },
    {
        title: 'scutellosaurus',
        id: 253,
        img: scutellosaurus,
    }
    
]