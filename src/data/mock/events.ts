import { Event } from "@data/types/event";

export const eventsMock: Event[] = [
  {
    headline: "Carrera de montaña",
    image: "/images/he-1.jpg",
    url: "#events/mountain",
    price: 29000,
    location: "Royal Enfield Vicente López",
    features: [
      {
        type: "date",
        value: "15 de Marzo",
      },
      {
        type: "time",
        value: "2 Horas",
      },
    ],
  },
  {
    headline: "Ruta de los 7 lagos",
    image: "/images/he-2.jpg",
    url: "#events/lakes",
    price: 47000,
    location: "Royal Enfield Bariloche",
    features: [
      {
        type: "date",
        value: "2-3 de Abril",
      },
      {
        type: "time",
        value: "5 Horas",
      },
    ],
  },
  {
    headline: "Pampa de Achala",
    image: "/images/he-3.jpg",
    url: "#events/lakes",
    price: 32000,
    location: "Royal Enfield Balbanera",
    features: [
      {
        type: "date",
        value: "18 de Abril",
      },
      {
        type: "time",
        value: "3 Horas",
      },
    ],
  },
  {
    headline: "Paseo por Mataderos",
    image: "/images/he-4.jpg",
    url: "#events/lakes",
    price: 45000,
    location: "Royal Enfield Mataderos",
    features: [
      {
        type: "date",
        value: "27 de Abril",
      },
      {
        type: "time",
        value: "1 Horas",
      },
    ],
  },
];
