import albertosaurus from '../assets/haghani/albertosaurus.jpg'
import pachycephalosaurus from '../assets/haghani/pachycephalosaurus.jpg'
import tarbosaurus from '../assets/haghani/tarbosaurus.jpg'
import tyrannosaurus from '../assets/haghani/tyrannosaurus.jpg'
import velociraptor from '../assets/haghani/velociraptor.jpg'
import parasaurolophus from '../assets/haghani/parasaurolophus.jpg'
import styracosaurus from '../assets/haghani/styracosaurus.jpg';
import ceratosaurus from '../assets/haghani/ceratosaurus.jpg';
import aardonyx from '../assets/haghani/aardonyx.jpg';
import aardonyxSmall from '../assets/haghani/aardonyx-small.jpg'

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
]