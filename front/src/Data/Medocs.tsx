import {FiCreditCard } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';
export const FournisseurData = [
  {
    logo:"https://www.presidence.gov.mg/images/2020/actus/pharmalagasy2/R01_9823.jpg",
    nom:"Pharmalagasy",
    adresse:"Alarobia",
    email:"phar@gmail.com"
  },
  {
    logo:"https://www.imra.eu/imra.eu/wp-content/themes/imra/public/images/logo-header.png",
    nom:"IMRA",
    adresse:"Ambatomitsangana",
    email:"imra@gmail.com"
  }
]
export const CategoriesData=[
  {
      _id:'1',
      title:"Sur ordonnance"
  },
  {
      _id:'2',
      title:"En vente libre"
  },
  {
      _id:'3',
      title:"Générique"
  },
  {
      _id:'4',
      title:"En libre-service "
  },
  {
      _id:'5',
      title:"À usage topique"
  },
  
]
export const entreData =[
  {
    nom:"Nivaquine",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:"med6.jpg",
    category:"Maladie respiratoire",
    pu:"400",
    nombre:"5",
    total:"20000",
    unite:"litre",
    date:"10-06-2023",
    
},
{
  nom:"Peniciline",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  image:"med5.jpg",
  category:"Maladie respiratoire",
  pu:"20",
  nombre:"5",
  total:"100",
  unite:"Plaquette",
  date:"22-02-2023",
  
},
]
export const SortieData =[
  {
    nom:"Efferalgan",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:"med3.png",
    category:"Maladie respiratoire",
    pu:"400",
    nombre:"5",
    total:"20000",
    unite:"litre",
    date:"10-06-2023",
    
},
{
  nom:"Peniciline",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  image:"med5.jpg",
  category:"Maladie respiratoire",
  pu:"20",
  nombre:"5",
  total:"100",
  unite:"Plaquette",
  date:"22-02-2023",
  
},
]
export const Medocs = [
    {
        nom:"Nivaquine",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image:"med6.jpg",
        category:"Maladie respiratoire",
        prix:"400",
        date_pere:"24-04-2023",
        rayon:"008",
        unite:"plaquette",
        dispo:"3.4",
    },
    {
      nom:"Penicilinne",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:"med5.jpg",
      category:"Maladie respiratoire",
      prix:"2022",
      rayon:"002",
      date_pere:"24-08-2023",
      unite:"plaquette",
      dispo:"3",
    },
    {
      nom:"Quinine",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:"med4.jpg",
      category:"Maladie respiratoire",
      prix:"500",
      rayon:"003",
      date_pere:"24-06-2023",
      unite:"Flaçon",
      dispo:"3.4",
    },
    {
      nom:"Efferalgan",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:"med3.png",
      category:"Maladie respiratoire",
      prix:"2022",
      rayon:"008",
      date_pere:"24-06-2023",
      unite:"plaquette",
      dispo:"3.4",
    },
    {
      nom:"Clamoril",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:"med1.jpeg",
      category:"Maladie respiratoire",
      prix:"2022",
      rayon:"108",
      date_pere:"12-01-2021",
      unite:"bouteille",
      dispo:"3.4",
    },
    {
      nom:"Metronidazole",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image:"affiche.jpg",
      category:"Maladie respiratoire",
      prix:"900",
      rayon:"120",
      date_pere:"13-05-2023",
      unite:"plaquette",
      dispo:"3.4",
    }
]

export const recentTransactions = [
    {
      icon: <BsCurrencyDollar />,
      amount: '+$350',
      title: 'Paypal Transfer',
      desc: 'Money Added',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'green-600',
    },
    {
      icon: <BsShield />,
      amount: '-$560',
      desc: 'Bill Payment',
      title: 'Wallet',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: 'red-600',
    },
    {
      icon: <FiCreditCard />,
      amount: '+$350',
      title: 'Credit Card',
      desc: 'Money reversed',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
  
      pcColor: 'green-600',
    },
    {
      icon: <TiTick />,
      amount: '+$350',
      title: 'Bank Transfer',
      desc: 'Money Added',
  
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
      pcColor: 'green-600',
    },
    {
      icon: <BsCurrencyDollar />,
      amount: '-$50',
      percentage: '+38%',
      title: 'Refund',
      desc: 'Payment Sent',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
  ];
  