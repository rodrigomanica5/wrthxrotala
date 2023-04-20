const carouselArray = [
    {
        "name": "Outfit Casual",
        "description": "Breve descripción del outfit. Para qué lo usaría. Segunda línea acá abajo.",
        "pictureURL": "/assets/img/casualoutfit1.jpg",
        "influencer": ""
    },
    {
        "name": "Outfit Casual",
        "description": "Breve descripción del outfit. Para qué lo usaría. Segunda línea acá abajo.",
        "pictureURL": "/assets/img/casualoutfit2.jpg",
        "influencer": ""
    },
    {
        "name": "Outfit de Trabajo",
        "description": "Breve descripción del outfit. Para qué lo usaría. Segunda línea acá abajo.",
        "pictureURL": "/assets/img/workoutfit1.jpg",
        "influencer": ""
    },
    {
        "name": "Outfit de Trabajo",
        "description": "Breve descripción del outfit. Para qué lo usaría. Segunda línea acá abajo.",
        "pictureURL": "/assets/img/workoutfit2.jpg",
        "influencer": ""
    },
    {
        "name": "Outfit de Fiesta",
        "description": "Breve descripción del outfit. Para qué lo usaría. Segunda línea acá abajo.",
        "pictureURL": "/assets/img/partyoutfit1.jpg",
        "influencer": ""
    },
    {
        "name": "Outfit de Fiesta",
        "description": "Breve descripción del outfit. Para qué lo usaría. Segunda línea acá abajo.",
        "pictureURL": "/assets/img/partyoutfit2.jpg",
        "influencer": ""
    }
]

export const getData = () => {
    carouselArray.map(item => setCard(item))
}

// export const carouselArray = [
//     {
//         name: "Outfit Casual",
//         description: "Breve descripción del outfit. Para qué lo usaría. Segunda línea acá abajo.",
//         pictureURL: "/assets/img/casualoutfit1.jpg",
//         influencer: "",
//     },
//     {
//         name: "Outfit Casual",
//         description: "Breve descripción del outfit. Para qué lo usaría. Segunda línea acá abajo.",
//         pictureURL: "/assets/img/casualoutfit2.jpg",
//         influencer: "",
//     },

//     {
//         name: "Outfit de Trabajo",
//         description: "Breve descripción del outfit. Para qué lo usaría. Segunda línea acá abajo.",
//         pictureURL: "/assets/img/workoutfit1.jpg",
//         influencer: "",
//     },
//     {
//         name: "Outfit de Trabajo",
//         description: "Breve descripción del outfit. Para qué lo usaría. Segunda línea acá abajo.",
//         pictureURL: "/assets/img/workoutfit2.jpg",
//         influencer: "",
//     },

//     {
//         name: "Outfit de Fiesta",
//         description: "Breve descripción del outfit. Para qué lo usaría. Segunda línea acá abajo.",
//         pictureURL: "/assets/img/partyoutfit1.jpg",
//         influencer: "",
//     },
//     {
//         name: "Outfit de Fiesta",
//         description: "Breve descripción del outfit. Para qué lo usaría. Segunda línea acá abajo.",
//         pictureURL: "/assets/img/partyoutfit2.jpg",
//         influencer: "",
//     },
// ]