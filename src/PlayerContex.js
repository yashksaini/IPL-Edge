import React, { createContext } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const players = [
    {
      id: 1,
      name: "R Gaikwad",
      team_id: 1,
      bat: 75,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 2,
      name: "R Uthappa",
      team_id: 1,
      bat: 85,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 3,
      name: "M Ali",
      team_id: 1,
      bat: 75,
      bowl: 75,
      type: 2,
      overseas: true,
    },
    {
      id: 4,
      name: "S Dube",
      team_id: 1,
      bat: 70,
      bowl: 60,
      type: 2,
      overseas: false,
    },
    {
      id: 5,
      name: "R Jadeja",
      team_id: 1,
      bat: 75,
      bowl: 80,
      type: 2,
      overseas: false,
    },

    {
      id: 6,
      name: "MS Dhoni",
      team_id: 1,
      bat: 85,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 7,
      name: "A Rayudu",
      team_id: 1,
      bat: 80,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 8,
      name: "D Bravo",
      team_id: 1,
      bat: 75,
      bowl: 80,
      type: 2,
      overseas: true,
    },
    {
      id: 9,
      name: "C Jordan",
      team_id: 1,
      bat: 65,
      bowl: 75,
      type: 2,
      overseas: true,
    },
    {
      id: 10,
      name: "M Theekshana",
      team_id: 1,
      bat: 30,
      bowl: 80,
      type: 1,
      overseas: true,
    },
    {
      id: 11,
      name: "M Choudhary",
      team_id: 1,
      bat: 30,
      bowl: 85,
      type: 1,
      overseas: false,
    },
    {
      id: 12,
      name: "D Conway",
      team_id: 1,
      bat: 75,
      bowl: 0,
      type: 0,
      overseas: true,
    },

    {
      id: 13,
      name: "S Senapati",
      team_id: 1,
      bat: 60,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 14,
      name: "H Nishanath",
      team_id: 1,
      bat: 60,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 15,
      name: "N Jagadeesan",
      team_id: 1,
      bat: 65,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 16,
      name: "B Varma",
      team_id: 1,
      bat: 60,
      bowl: 60,
      type: 2,
      overseas: false,
    },
    {
      id: 17,
      name: "M Santner",
      team_id: 1,
      bat: 65,
      bowl: 70,
      type: 2,
      overseas: true,
    },
    {
      id: 18,
      name: "D Pretorious",
      team_id: 1,
      bat: 70,
      bowl: 70,
      type: 2,
      overseas: true,
    },
    {
      id: 19,
      name: "R Hangargekar",
      team_id: 1,
      bat: 40,
      bowl: 70,
      type: 1,
      overseas: false,
    },
    {
      id: 20,
      name: "S Singh",
      team_id: 1,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 21,
      name: "A Milne",
      team_id: 1,
      bat: 30,
      bowl: 80,
      type: 1,
      overseas: true,
    },
    {
      id: 22,
      name: "P Solanki",
      team_id: 1,
      bat: 30,
      bowl: 70,
      type: 1,
      overseas: false,
    },
    {
      id: 23,
      name: "T Deshpande",
      team_id: 1,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 24,
      name: "KM Asif",
      team_id: 1,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 25,
      name: "D Chahar",
      team_id: 1,
      bat: 70,
      bowl: 90,
      type: 1,
      overseas: false,
    },
    {
      id: 26,
      name: "P Shaw",
      team_id: 2,
      bat: 85,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 27,
      name: "D Warner",
      team_id: 2,
      bat: 95,
      bowl: 0,
      type: 0,
      overseas: true,
    },

    {
      id: 28,
      name: "R Pant",
      team_id: 2,
      bat: 90,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 29,
      name: "L Yadav",
      team_id: 2,
      bat: 70,
      bowl: 70,
      type: 2,
      overseas: false,
    },

    {
      id: 30,
      name: "R Powell",
      team_id: 2,
      bat: 80,
      bowl: 60,
      type: 2,
      overseas: true,
    },

    {
      id: 31,
      name: "A Patel",
      team_id: 2,
      bat: 75,
      bowl: 85,
      type: 2,
      overseas: false,
    },
    {
      id: 32,
      name: "S Thakur",
      team_id: 2,
      bat: 65,
      bowl: 80,
      type: 1,
      overseas: false,
    },
    {
      id: 33,
      name: "S Khan",
      team_id: 2,
      bat: 70,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 34,
      name: "K Yadav",
      team_id: 2,
      bat: 40,
      bowl: 90,
      type: 1,
      overseas: false,
    },
    {
      id: 35,
      name: "A Nortije",
      team_id: 2,
      bat: 30,
      bowl: 85,
      type: 1,
      overseas: true,
    },

    {
      id: 36,
      name: "K Ahmed",
      team_id: 2,
      bat: 30,
      bowl: 85,
      type: 1,
      overseas: false,
    },
    {
      id: 37,
      name: "M Singh",
      team_id: 2,
      bat: 75,
      bowl: 0,
      type: 0,
      overseas: false,
    },

    {
      id: 38,
      name: "Y Dhull",
      team_id: 2,
      bat: 65,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 39,
      name: "A Hebbar",
      team_id: 2,
      bat: 65,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 40,
      name: "T Seifert",
      team_id: 2,
      bat: 80,
      bowl: 0,
      type: 3,
      overseas: true,
    },
    {
      id: 41,
      name: "S Bharat",
      team_id: 2,
      bat: 70,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 42,
      name: "V Ostwal",
      team_id: 2,
      bat: 60,
      bowl: 60,
      type: 2,
      overseas: false,
    },
    {
      id: 43,
      name: "R Patel",
      team_id: 2,
      bat: 60,
      bowl: 60,
      type: 2,
      overseas: false,
    },
    {
      id: 44,
      name: "M Marsh",
      team_id: 2,
      bat: 80,
      bowl: 75,
      type: 2,
      overseas: true,
    },
    {
      id: 45,
      name: "M Rahman",
      team_id: 2,
      bat: 30,
      bowl: 80,
      type: 1,
      overseas: true,
    },
    {
      id: 46,
      name: "L Ngidi",
      team_id: 2,
      bat: 30,
      bowl: 80,
      type: 1,
      overseas: true,
    },

    {
      id: 47,
      name: "C Sakariya",
      team_id: 2,
      bat: 30,
      bowl: 70,
      type: 1,
      overseas: false,
    },
    {
      id: 48,
      name: "P Dubey",
      team_id: 2,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 49,
      name: "K Nagarkoti",
      team_id: 2,
      bat: 30,
      bowl: 70,
      type: 1,
      overseas: false,
    },

    {
      id: 51,
      name: "W Saha",
      team_id: 3,
      bat: 80,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 52,
      name: "S Gill",
      team_id: 3,
      bat: 85,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 53,
      name: "H Pandya",
      team_id: 3,
      bat: 85,
      bowl: 70,
      type: 2,
      overseas: false,
    },
    {
      id: 54,
      name: "S Sudharsan",
      team_id: 3,
      bat: 65,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 55,
      name: "D Miller",
      team_id: 3,
      bat: 90,
      bowl: 0,
      type: 0,
      overseas: true,
    },
    {
      id: 56,
      name: "R Tewatia",
      team_id: 3,
      bat: 75,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 57,
      name: "R Khan",
      team_id: 3,
      bat: 65,
      bowl: 90,
      type: 1,
      overseas: true,
    },
    {
      id: 58,
      name: "P Sangwan",
      team_id: 3,
      bat: 40,
      bowl: 70,
      type: 1,
      overseas: false,
    },
    {
      id: 59,
      name: "L Ferguson",
      team_id: 3,
      bat: 40,
      bowl: 80,
      type: 1,
      overseas: true,
    },
    {
      id: 60,
      name: "A Joseph",
      team_id: 3,
      bat: 40,
      bowl: 75,
      type: 1,
      overseas: true,
    },
    {
      id: 61,
      name: "M Shami",
      team_id: 3,
      bat: 40,
      bowl: 95,
      type: 1,
      overseas: false,
    },
    {
      id: 62,
      name: "AM Sadarangani",
      team_id: 3,
      bat: 65,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 63,
      name: "J Roy",
      team_id: 3,
      bat: 80,
      bowl: 0,
      type: 0,
      overseas: true,
    },
    {
      id: 64,
      name: "M Wade",
      team_id: 3,
      bat: 80,
      bowl: 0,
      type: 3,
      overseas: true,
    },
    {
      id: 65,
      name: "D Drakes",
      team_id: 3,
      bat: 70,
      bowl: 70,
      type: 2,
      overseas: true,
    },
    {
      id: 66,
      name: "V Shankar",
      team_id: 3,
      bat: 70,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 67,
      name: "G Singh",
      team_id: 3,
      bat: 65,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 68,
      name: "V Aaron",
      team_id: 3,
      bat: 40,
      bowl: 70,
      type: 1,
      overseas: false,
    },
    {
      id: 69,
      name: "Y Dayal",
      team_id: 3,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 70,
      name: "D Nalkande",
      team_id: 3,
      bat: 30,
      bowl: 60,
      type: 1,
      overseas: false,
    },
    {
      id: 71,
      name: "RS Kishore",
      team_id: 3,
      bat: 30,
      bowl: 70,
      type: 1,
      overseas: false,
    },
    {
      id: 72,
      name: "N Ahmad",
      team_id: 3,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: true,
    },
    {
      id: 73,
      name: "J Yadav",
      team_id: 3,
      bat: 40,
      bowl: 70,
      type: 2,
      overseas: false,
    },
    {
      id: 76,
      name: "A Rahane",
      team_id: 4,
      bat: 80,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 77,
      name: "V Iyer",
      team_id: 4,
      bat: 75,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 78,
      name: "N Rana",
      team_id: 4,
      bat: 85,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 79,
      name: "S Iyer",
      team_id: 4,
      bat: 90,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 80,
      name: "S Billings",
      team_id: 4,
      bat: 80,
      bowl: 0,
      type: 3,
      overseas: true,
    },
    {
      id: 81,
      name: "S Jackson",
      team_id: 4,
      bat: 70,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 82,
      name: "A Russell",
      team_id: 4,
      bat: 95,
      bowl: 70,
      type: 2,
      overseas: true,
    },
    {
      id: 83,
      name: "S Narine",
      team_id: 4,
      bat: 75,
      bowl: 90,
      type: 2,
      overseas: true,
    },
    {
      id: 84,
      name: "U Yadav",
      team_id: 4,
      bat: 40,
      bowl: 90,
      type: 1,
      overseas: false,
    },
    {
      id: 85,
      name: "S Mavi",
      team_id: 4,
      bat: 40,
      bowl: 80,
      type: 1,
      overseas: false,
    },
    {
      id: 86,
      name: "V Chakravarthy",
      team_id: 4,
      bat: 30,
      bowl: 80,
      type: 1,
      overseas: false,
    },
    {
      id: 87,
      name: "B Indrajith",
      team_id: 4,
      bat: 70,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 88,
      name: "P Singh",
      team_id: 4,
      bat: 60,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 89,
      name: "R Kumar",
      team_id: 4,
      bat: 60,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 90,
      name: "R Singh",
      team_id: 4,
      bat: 75,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 91,
      name: "A Tomar",
      team_id: 4,
      bat: 65,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 92,
      name: "A Hales",
      team_id: 4,
      bat: 80,
      bowl: 0,
      type: 0,
      overseas: true,
    },
    {
      id: 93,
      name: "AH Khan",
      team_id: 4,
      bat: 60,
      bowl: 0,
      type: 0,
      overseas: true,
    },
    {
      id: 94,
      name: "A Roy",
      team_id: 4,
      bat: 70,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 95,
      name: "M Nabi",
      team_id: 4,
      bat: 70,
      bowl: 70,
      type: 2,
      overseas: true,
    },
    {
      id: 96,
      name: "C Karunaratne",
      team_id: 4,
      bat: 40,
      bowl: 80,
      type: 1,
      overseas: true,
    },
    {
      id: 97,
      name: "A Sharma",
      team_id: 4,
      bat: 30,
      bowl: 70,
      type: 1,
      overseas: false,
    },
    {
      id: 98,
      name: "R Salam",
      team_id: 4,
      bat: 30,
      bowl: 60,
      type: 1,
      overseas: false,
    },
    {
      id: 99,
      name: "T Southee",
      team_id: 4,
      bat: 30,
      bowl: 85,
      type: 1,
      overseas: true,
    },
    {
      id: 100,
      name: "P Cummins",
      team_id: 4,
      bat: 60,
      bowl: 85,
      type: 1,
      overseas: true,
    },
    {
      id: 101,
      name: "Q de Kock",
      team_id: 5,
      bat: 90,
      bowl: 0,
      type: 3,
      overseas: true,
    },
    {
      id: 102,
      name: "KL Rahul",
      team_id: 5,
      bat: 95,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 103,
      name: "M Pandey",
      team_id: 5,
      bat: 80,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 104,
      name: "M Stoinis",
      team_id: 5,
      bat: 80,
      bowl: 65,
      type: 2,
      overseas: true,
    },
    {
      id: 105,
      name: "K Pandya",
      team_id: 5,
      bat: 75,
      bowl: 80,
      type: 2,
      overseas: false,
    },
    {
      id: 106,
      name: "D Hooda",
      team_id: 5,
      bat: 80,
      bowl: 75,
      type: 2,
      overseas: false,
    },
    {
      id: 107,
      name: "A Badoni",
      team_id: 5,
      bat: 80,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 108,
      name: "J Holder",
      team_id: 5,
      bat: 75,
      bowl: 85,
      type: 2,
      overseas: true,
    },
    {
      id: 109,
      name: "M Khan",
      team_id: 5,
      bat: 30,
      bowl: 75,
      type: 1,
      overseas: false,
    },
    {
      id: 110,
      name: "D Chameera",
      team_id: 5,
      bat: 30,
      bowl: 85,
      type: 1,
      overseas: true,
    },
    {
      id: 111,
      name: "R Bishnoi",
      team_id: 5,
      bat: 30,
      bowl: 85,
      type: 1,
      overseas: false,
    },
    {
      id: 112,
      name: "M Vohra",
      team_id: 5,
      bat: 70,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 113,
      name: "E Lewis",
      team_id: 5,
      bat: 80,
      bowl: 0,
      type: 0,
      overseas: true,
    },
    {
      id: 114,
      name: "K Mayers",
      team_id: 5,
      bat: 70,
      bowl: 60,
      type: 2,
      overseas: true,
    },
    {
      id: 115,
      name: "K Sharma",
      team_id: 5,
      bat: 60,
      bowl: 70,
      type: 2,
      overseas: false,
    },
    {
      id: 116,
      name: "K Gowtham",
      team_id: 5,
      bat: 70,
      bowl: 75,
      type: 2,
      overseas: false,
    },
    {
      id: 117,
      name: "S Nadeem",
      team_id: 5,
      bat: 30,
      bowl: 70,
      type: 1,
      overseas: false,
    },
    {
      id: 118,
      name: "M Yadav",
      team_id: 5,
      bat: 30,
      bowl: 60,
      type: 1,
      overseas: false,
    },
    {
      id: 119,
      name: "A Rajpoot",
      team_id: 5,
      bat: 30,
      bowl: 70,
      type: 1,
      overseas: false,
    },
    {
      id: 120,
      name: "A Khan",
      team_id: 5,
      bat: 30,
      bowl: 80,
      type: 1,
      overseas: false,
    },
    {
      id: 121,
      name: "M Wood",
      team_id: 5,
      bat: 40,
      bowl: 75,
      type: 1,
      overseas: true,
    },
    {
      id: 126,
      name: "I Kishan",
      team_id: 6,
      bat: 90,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 127,
      name: "R Sharma",
      team_id: 6,
      bat: 95,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 128,
      name: "D Brevis",
      team_id: 6,
      bat: 75,
      bowl: 0,
      type: 0,
      overseas: true,
    },
    {
      id: 129,
      name: "S Yadav",
      team_id: 6,
      bat: 90,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 130,
      name: "T Varma",
      team_id: 6,
      bat: 70,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 131,
      name: "K Pollard",
      team_id: 6,
      bat: 85,
      bowl: 75,
      type: 2,
      overseas: true,
    },
    {
      id: 132,
      name: "D Sams",
      team_id: 6,
      bat: 65,
      bowl: 80,
      type: 2,
      overseas: true,
    },
    {
      id: 133,
      name: "J Unadkat",
      team_id: 6,
      bat: 60,
      bowl: 75,
      type: 1,
      overseas: false,
    },
    {
      id: 134,
      name: "H Shokeen",
      team_id: 6,
      bat: 60,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 135,
      name: "J Bumrah",
      team_id: 6,
      bat: 40,
      bowl: 95,
      type: 1,
      overseas: false,
    },
    {
      id: 136,
      name: "R Meredith",
      team_id: 6,
      bat: 30,
      bowl: 80,
      type: 1,
      overseas: true,
    },
    {
      id: 137,
      name: "R Singh",
      team_id: 6,
      bat: 60,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 138,
      name: "R Buddhi",
      team_id: 6,
      bat: 60,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 139,
      name: "A Singh",
      team_id: 6,
      bat: 65,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 140,
      name: "A Juyal",
      team_id: 6,
      bat: 65,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 141,
      name: "A Tendulkar",
      team_id: 6,
      bat: 65,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 142,
      name: "Sanjay Y",
      team_id: 6,
      bat: 60,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 143,
      name: "T David",
      team_id: 6,
      bat: 80,
      bowl: 65,
      type: 2,
      overseas: true,
    },
    {
      id: 144,
      name: "F Allen",
      team_id: 6,
      bat: 70,
      bowl: 65,
      type: 2,
      overseas: true,
    },
    {
      id: 145,
      name: "MA Khan",
      team_id: 6,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 146,
      name: "M Markande",
      team_id: 6,
      bat: 30,
      bowl: 75,
      type: 1,
      overseas: false,
    },
    {
      id: 147,
      name: "J Archer",
      team_id: 6,
      bat: 60,
      bowl: 90,
      type: 1,
      overseas: true,
    },
    {
      id: 148,
      name: "T Mills",
      team_id: 6,
      bat: 30,
      bowl: 75,
      type: 1,
      overseas: true,
    },
    {
      id: 149,
      name: "M Ashwin",
      team_id: 6,
      bat: 30,
      bowl: 85,
      type: 1,
      overseas: false,
    },
    {
      id: 150,
      name: "B Thampi",
      team_id: 6,
      bat: 30,
      bowl: 75,
      type: 1,
      overseas: false,
    },
    {
      id: 151,
      name: "J Bairstow",
      team_id: 7,
      bat: 85,
      bowl: 0,
      type: 3,
      overseas: true,
    },
    {
      id: 152,
      name: "S Dhawan",
      team_id: 7,
      bat: 95,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 153,
      name: "B Rajapaksa",
      team_id: 7,
      bat: 80,
      bowl: 0,
      type: 0,
      overseas: true,
    },
    {
      id: 154,
      name: "M Agarwal",
      team_id: 7,
      bat: 85,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 155,
      name: "J Sharma",
      team_id: 7,
      bat: 75,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 156,
      name: "L Livingstone",
      team_id: 7,
      bat: 85,
      bowl: 65,
      type: 2,
      overseas: true,
    },
    {
      id: 157,
      name: "R Dhawan",
      team_id: 7,
      bat: 40,
      bowl: 75,
      type: 1,
      overseas: false,
    },
    {
      id: 158,
      name: "K Rabada",
      team_id: 7,
      bat: 40,
      bowl: 90,
      type: 1,
      overseas: true,
    },
    {
      id: 159,
      name: "R Chahar",
      team_id: 7,
      bat: 40,
      bowl: 85,
      type: 1,
      overseas: false,
    },
    {
      id: 160,
      name: "A Singh",
      team_id: 7,
      bat: 30,
      bowl: 80,
      type: 1,
      overseas: false,
    },
    {
      id: 161,
      name: "S Sharma",
      team_id: 7,
      bat: 30,
      bowl: 90,
      type: 1,
      overseas: false,
    },
    {
      id: 162,
      name: "P Mankad",
      team_id: 7,
      bat: 60,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 163,
      name: "S Khan",
      team_id: 7,
      bat: 75,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 164,
      name: "P Singh",
      team_id: 7,
      bat: 70,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 165,
      name: "B Howell",
      team_id: 7,
      bat: 65,
      bowl: 65,
      type: 2,
      overseas: true,
    },
    {
      id: 166,
      name: "B Singh",
      team_id: 7,
      bat: 60,
      bowl: 60,
      type: 2,
      overseas: false,
    },
    {
      id: 167,
      name: "A Patel",
      team_id: 7,
      bat: 60,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 168,
      name: "A Taide",
      team_id: 7,
      bat: 65,
      bowl: 60,
      type: 2,
      overseas: false,
    },
    {
      id: 169,
      name: "W Chatterjee",
      team_id: 7,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 170,
      name: "O Smith",
      team_id: 7,
      bat: 40,
      bowl: 75,
      type: 1,
      overseas: true,
    },
    {
      id: 171,
      name: "R Bawa",
      team_id: 7,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 172,
      name: "N Eillis",
      team_id: 7,
      bat: 40,
      bowl: 70,
      type: 1,
      overseas: true,
    },
    {
      id: 173,
      name: "V Arora",
      team_id: 7,
      bat: 30,
      bowl: 70,
      type: 1,
      overseas: false,
    },
    {
      id: 174,
      name: "H Brar",
      team_id: 7,
      bat: 30,
      bowl: 80,
      type: 1,
      overseas: false,
    },
    {
      id: 175,
      name: "I Porel",
      team_id: 7,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 176,
      name: "Y Jaiswal",
      team_id: 9,
      bat: 75,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 177,
      name: "J Buttler",
      team_id: 9,
      bat: 95,
      bowl: 0,
      type: 3,
      overseas: true,
    },
    {
      id: 178,
      name: "S Samson",
      team_id: 9,
      bat: 90,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 179,
      name: "D Padikkal",
      team_id: 9,
      bat: 80,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 180,
      name: "S Hetmyer",
      team_id: 9,
      bat: 85,
      bowl: 0,
      type: 0,
      overseas: true,
    },
    {
      id: 181,
      name: "R Parag",
      team_id: 9,
      bat: 75,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 182,
      name: "R Ashwin",
      team_id: 9,
      bat: 60,
      bowl: 85,
      type: 1,
      overseas: false,
    },
    {
      id: 183,
      name: "T Boult",
      team_id: 9,
      bat: 30,
      bowl: 95,
      type: 1,
      overseas: true,
    },
    {
      id: 184,
      name: "Y Chahal",
      team_id: 9,
      bat: 30,
      bowl: 90,
      type: 1,
      overseas: false,
    },
    {
      id: 185,
      name: "P Krishna",
      team_id: 9,
      bat: 30,
      bowl: 85,
      type: 1,
      overseas: false,
    },
    {
      id: 186,
      name: "K Sen",
      team_id: 9,
      bat: 30,
      bowl: 75,
      type: 1,
      overseas: false,
    },
    {
      id: 187,
      name: "K Nair",
      team_id: 9,
      bat: 80,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 188,
      name: "R vd Dussen",
      team_id: 9,
      bat: 75,
      bowl: 0,
      type: 0,
      overseas: true,
    },
    {
      id: 189,
      name: "D Jurel",
      team_id: 9,
      bat: 70,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 190,
      name: "A Singh",
      team_id: 9,
      bat: 60,
      bowl: 60,
      type: 2,
      overseas: false,
    },
    {
      id: 191,
      name: "J Neesham",
      team_id: 9,
      bat: 75,
      bowl: 70,
      type: 2,
      overseas: true,
    },
    {
      id: 192,
      name: "D Mitchell",
      team_id: 9,
      bat: 80,
      bowl: 60,
      type: 2,
      overseas: true,
    },
    {
      id: 193,
      name: "S Garhwal",
      team_id: 9,
      bat: 30,
      bowl: 60,
      type: 1,
      overseas: false,
    },
    {
      id: 194,
      name: "Kuldip Y",
      team_id: 9,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 195,
      name: "N Coulter-Nile",
      team_id: 9,
      bat: 40,
      bowl: 80,
      type: 1,
      overseas: true,
    },
    {
      id: 196,
      name: "N Saini",
      team_id: 9,
      bat: 60,
      bowl: 75,
      type: 1,
      overseas: false,
    },
    {
      id: 197,
      name: "O McCoy",
      team_id: 9,
      bat: 40,
      bowl: 70,
      type: 1,
      overseas: true,
    },
    {
      id: 198,
      name: "T Baroka",
      team_id: 9,
      bat: 30,
      bowl: 60,
      type: 1,
      overseas: false,
    },
    {
      id: 199,
      name: "KC Cariappa",
      team_id: 9,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 201,
      name: "F du Plessis",
      team_id: 8,
      bat: 90,
      bowl: 0,
      type: 0,
      overseas: true,
    },
    {
      id: 202,
      name: "A Rawat",
      team_id: 8,
      bat: 70,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 203,
      name: "V Kholi",
      team_id: 8,
      bat: 95,
      bowl: 40,
      type: 2,
      overseas: false,
    },
    {
      id: 204,
      name: "D Karthik",
      team_id: 8,
      bat: 80,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 205,
      name: "G Maxwell",
      team_id: 8,
      bat: 90,
      bowl: 75,
      type: 2,
      overseas: true,
    },
    {
      id: 206,
      name: "S Prabhudessai",
      team_id: 8,
      bat: 70,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 207,
      name: "S Ahmed",
      team_id: 8,
      bat: 80,
      bowl: 80,
      type: 2,
      overseas: false,
    },
    {
      id: 208,
      name: " AB de Villiers",
      team_id: 8,
      bat: 95,
      bowl: 0,
      type: 3,
      overseas: true,
    },
    {
      id: 209,
      name: "H Patel",
      team_id: 8,
      bat: 60,
      bowl: 85,
      type: 1,
      overseas: false,
    },
    {
      id: 210,
      name: "M Siraj",
      team_id: 8,
      bat: 40,
      bowl: 85,
      type: 1,
      overseas: false,
    },
    {
      id: 211,
      name: "J Hazlewood",
      team_id: 8,
      bat: 30,
      bowl: 85,
      type: 1,
      overseas: true,
    },
    {
      id: 212,
      name: "F Allen",
      team_id: 8,
      bat: 70,
      bowl: 0,
      type: 3,
      overseas: true,
    },
    {
      id: 213,
      name: "L Sisodia",
      team_id: 8,
      bat: 60,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 214,
      name: "D Willey",
      team_id: 8,
      bat: 60,
      bowl: 70,
      type: 2,
      overseas: true,
    },
    {
      id: 215,
      name: "M Lomror",
      team_id: 8,
      bat: 70,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 216,
      name: "S Rutherford",
      team_id: 8,
      bat: 60,
      bowl: 70,
      type: 2,
      overseas: true,
    },
    {
      id: 217,
      name: "A Gautam",
      team_id: 8,
      bat: 60,
      bowl: 60,
      type: 2,
      overseas: false,
    },
    {
      id: 218,
      name: "K Sharma",
      team_id: 8,
      bat: 40,
      bowl: 75,
      type: 1,
      overseas: false,
    },
    {
      id: 219,
      name: "J Behrendorff",
      team_id: 8,
      bat: 40,
      bowl: 70,
      type: 1,
      overseas: true,
    },
    {
      id: 220,
      name: "S Kaul",
      team_id: 8,
      bat: 30,
      bowl: 70,
      type: 1,
      overseas: false,
    },
    {
      id: 221,
      name: "C V Milind",
      team_id: 8,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 222,
      name: "A Deep",
      team_id: 8,
      bat: 30,
      bowl: 65,
      type: 1,
      overseas: false,
    },
    {
      id: 223,
      name: "W Hasranga",
      team_id: 8,
      bat: 60,
      bowl: 85,
      type: 1,
      overseas: true,
    },
    {
      id: 224,
      name: "R Patidar",
      team_id: 8,
      bat: 80,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 226,
      name: "A Sharma",
      team_id: 10,
      bat: 80,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 227,
      name: "K Williamson",
      team_id: 10,
      bat: 90,
      bowl: 0,
      type: 0,
      overseas: true,
    },
    {
      id: 228,
      name: "R Tripathi",
      team_id: 10,
      bat: 80,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 229,
      name: "N Pooran",
      team_id: 10,
      bat: 90,
      bowl: 0,
      type: 3,
      overseas: true,
    },
    {
      id: 230,
      name: "A Markram",
      team_id: 10,
      bat: 85,
      bowl: 70,
      type: 2,
      overseas: true,
    },
    {
      id: 231,
      name: "S Singh",
      team_id: 10,
      bat: 70,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 232,
      name: "W Sundar",
      team_id: 10,
      bat: 70,
      bowl: 80,
      type: 2,
      overseas: false,
    },
    {
      id: 233,
      name: "M Jansen",
      team_id: 10,
      bat: 60,
      bowl: 80,
      type: 2,
      overseas: true,
    },
    {
      id: 234,
      name: "B Kumar",
      team_id: 10,
      bat: 40,
      bowl: 95,
      type: 1,
      overseas: false,
    },
    {
      id: 235,
      name: "T Natarajan",
      team_id: 10,
      bat: 30,
      bowl: 90,
      type: 1,
      overseas: false,
    },
    {
      id: 236,
      name: "U Malik",
      team_id: 10,
      bat: 30,
      bowl: 80,
      type: 1,
      overseas: false,
    },
    {
      id: 237,
      name: "R Samarth",
      team_id: 10,
      bat: 65,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 238,
      name: "P Garg",
      team_id: 10,
      bat: 70,
      bowl: 0,
      type: 0,
      overseas: false,
    },
    {
      id: 239,
      name: "G Phillips",
      team_id: 10,
      bat: 75,
      bowl: 0,
      type: 3,
      overseas: true,
    },
    {
      id: 240,
      name: "V Vinod",
      team_id: 10,
      bat: 65,
      bowl: 0,
      type: 3,
      overseas: false,
    },
    {
      id: 241,
      name: "A Samad",
      team_id: 10,
      bat: 75,
      bowl: 65,
      type: 2,
      overseas: false,
    },
    {
      id: 242,
      name: "S Abbot",
      team_id: 10,
      bat: 70,
      bowl: 75,
      type: 0,
      overseas: true,
    },
    {
      id: 243,
      name: "Saurabh D",
      team_id: 10,
      bat: 60,
      bowl: 0,
      type: 1,
      overseas: false,
    },
    {
      id: 244,
      name: "R Shepherd",
      team_id: 10,
      bat: 40,
      bowl: 70,
      type: 1,
      overseas: true,
    },
    {
      id: 245,
      name: "F Farooqi",
      team_id: 10,
      bat: 30,
      bowl: 70,
      type: 1,
      overseas: true,
    },
    {
      id: 246,
      name: "J Suchith",
      team_id: 10,
      bat: 40,
      bowl: 70,
      type: 1,
      overseas: false,
    },
    {
      id: 247,
      name: "S Gopal",
      team_id: 10,
      bat: 40,
      bowl: 80,
      type: 1,
      overseas: false,
    },
    {
      id: 248,
      name: "K Tyagi",
      team_id: 10,
      bat: 30,
      bowl: 70,
      type: 1,
      overseas: false,
    },
  ];
  return (
    <PlayerContext.Provider value={{ players }}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;