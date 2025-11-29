export const sections = [
    {title: "Home", name: "home", path: "/"}, 
    {title: "Shop", name: "shop", path: "/shop-now"}, 
    {title: "Gallery", name: "gallery", path: "/gallery"}, 
    {title: "About us", name: "about", path: "/about"}, 
    {title: "Contact", name: "contact", path: "/contact"}
];

export const allSectionsData = new Map([
    ["mainSections", [
        {name: "fishes", title:"Fishes", url: "/aquaFish.jpg"},
        {name: "plants", title:"Plants", url: "/aquaPlant.jpg"},  
    ]],
    ["fishes", [
        {name: "nonLiveBearer", title:"Non-Live Bearer"},
        {name: "liveBearer", title:"Live Bearer"},
    ]],
    ["plants", [
        {name: "foreGroundPlants", title:"Fore Ground Plants"},
        {name: "midGroundPlants", title:"Mid Ground Plants"},
        {name: "backGroundPlants", title:"Back Ground Plants"},
        {name: "onWoodOrRockPlants", title:"On Wood or Rock Plants"},
        {name: "floatingAndPondPlants", title:"Floating And Pond Plants"},
    ]],
    ["nonLiveBearer", {
        title: "Non-Live Bearer (Egg-laying fish)",
        desc: "Non-livebearers reproduce by laying eggs, which later hatch into fry. They often require specific conditions to breed and are better suited for more experienced aquarists. Common types include tetras, bettas, angelfish, and goldfish.",
        data: [
            {name: "goldFish", title:"Gold Fish"},
            {name: "shrimps", title:"Shrimps"},
            {name: "gouramiFish", title:"Gourami Fish"},
            {name: "angleFish", title:"Angle Fish"},
            {name: "aquariumShark", title:"Aquarium Shark"},
            {name: "snails", title:"snails"},
            {name: "bards", title:"Bards"},
            {name: "tetraFish", title:"Tetra Fish"},
            {name: "colorWidowTetraFish", title:"Color Widow Tetra Fish"},
        ]
    }],
    ["liveBearer", {
        title: "Live Bearer (Live-bearing fish)",
        desc: "Livebearers give birth to live, free-swimming baby fish instead of laying eggs. They are easy to breed, making them ideal for beginners. Popular species include guppies, mollies, platies, and swordtails.",
        data: [
            {name: "mollyFish", title:"Molly Fish"},
            {name: "guppies", title:"Guppies"},
            {name: "platy", title:"Platy"},
            {name: "sword", title:"Sword"},
        ]
    }],
    
    ["goldFish", [
        {url: "/aquaFish.jpg", name: "gold", title:"Gold Fishes"},
        {url: "/aquaFish.jpg", name: "oranda", title:"Oranda Gold Fish"},
        {url: "/aquaFish.jpg", name: "redCap", title:"Red Cap"},
        {url: "/aquaFish.jpg", name: "blackMoor", title:"BlackMoor Gold Fish"},
        {url: "/aquaFish.jpg", name: "pearlScale", title:"PearlScale Gold Fish"},
        {url: "/aquaFish.jpg", name: "ronch", title:"Ronch Gold Fish"},
        {url: "/aquaFish.jpg", name: "ryukin", title:"Ryukin Gold Fish"},
        {url: "/aquaFish.jpg", name: "shubunkin", title:"Shubunkin Gold Fish"},
    ]],
    ["shrimps", [
        {url: "/aquaFish.jpg", name: "fireRed", title:"Fire Red Shrimp"},
        {url: "/aquaFish.jpg", name: "redCherry", title:"Red Cherry Shrimp"},
        {url: "/aquaFish.jpg", name: "blue", title:"Blue Shrimp"},
        {url: "/aquaFish.jpg", name: "yellow", title:"Yellow Shrimp"},
        {url: "/aquaFish.jpg", name: "goldenBack", title:"Golden Back Shrimp"},
        {url: "/aquaFish.jpg", name: "black", title:"Black Shrimp"},
        {url: "/aquaFish.jpg", name: "crystalRed", title:"Crystal Red Shrimp"},
        {url: "/aquaFish.jpg", name: "crystalBlack", title:"Crystal Black Shrimp"},
        {url: "/aquaFish.jpg", name: "amano", title:"Amano Shrimp"},
    ]],
    ["gouramiFish", [
        {url: "/aquaFish.jpg", name: "blue", title:"Blue Gourami Fish"},
        {url: "/aquaFish.jpg", name: "orange", title:"Orange Gourami Fish"},
        {url: "/aquaFish.jpg", name: "dwarf", title:"Dwarf Gourami Fish"},
        {url: "/aquaFish.jpg", name: "honey", title:"Honey Gourami Fish"},
        {url: "/aquaFish.jpg", name: "pearl", title:"Pearl Gourami Fish"},
        {url: "/aquaFish.jpg", name: "powderBlueDwarf", title:"Powder Blue Dwarf Gourami Fish"},
    ]],
    ["angleFish", [
        {url: "/aquaFish.jpg", name: "black", title:"Black Angle Fish"},
        {url: "/aquaFish.jpg", name: "marble", title:"Marble Angle Fish"},
        {url: "/aquaFish.jpg", name: "zebra", title:"Zebra Angle Fish"},
        {url: "/aquaFish.jpg", name: "koi", title:"Koi Angle Fish"},
        {url: "/aquaFish.jpg", name: "platinumWhite", title:"Platinum White Angle Fish"},
    ]],
    ["aquariumShark", [
        {url: "/aquaFish.jpg", name: "silver", title:"Silver Shark"},
        {url: "/aquaFish.jpg", name: "redTailed", title:"Red Tailed Shark"},
        {url: "/aquaFish.jpg", name: "albinoRedTail", title:"Albino Red Tail Shark"},
    ]],
    ["snails", [
        {url: "/aquaFish.jpg", name: "apple", title:"Apple Snail"},
        {url: "/aquaFish.jpg", name: "ramshorn", title:"Ramshorn Snail"},
        {url: "/aquaFish.jpg", name: "assassin", title:"Assassin Snail"},
        {url: "/aquaFish.jpg", name: "nerite", title:"Nerite Snail"},
    ]],
    ["mollyFish", [
        {url: "/aquaFish.jpg", name: "molly", title:"Molly Fish"},
        {url: "/aquaFish.jpg", name: "balloon", title:"Balloon Molly Fish"},
        {url: "/aquaFish.jpg", name: "panda", title:"Panda Molly Fish"},
        {url: "/aquaFish.jpg", name: "moonTail", title:"Moon Tail Molly Fish"},
    ]],
    ["guppies", [
        {url: "/aquaFish.jpg", name: "mixed", title:"Mixed Guppy Fish"},
        {url: "/aquaFish.jpg", name: "albinoFullRed", title:"Albino Full Red Guppy Fish"},
        {url: "/aquaFish.jpg", name: "tuxedoWhite", title:"Tuxedo White Guppy Fish"},
        {url: "/aquaFish.jpg", name: "jetBlack", title:"Jet Black Guppy Fish"},
        {url: "/aquaFish.jpg", name: "snowWhite", title:"Snow White Guppy Fish"},
        {url: "/aquaFish.jpg", name: "topazBlue", title:"Topaz Blue Guppy Fish"},
        {url: "/aquaFish.jpg", name: "bluePanda", title:"Blue Panda Guppy Fish"},
        {url: "/aquaFish.jpg", name: "moscow", title:"Moscow Guppy Fish"},
        {url: "/aquaFish.jpg", name: "purpleBerryDragon", title:"Purple Berry Dragon Guppy Fish"},
        {url: "/aquaFish.jpg", name: "platinumRedDumboEar", title:"Platinum Red Dumbo Ear Guppy Fish"},
        {url: "/aquaFish.jpg", name: "chilliRedDumboEar", title:"Chilli Red Dumbo Ear Guppy Fish"},
        {url: "/aquaFish.jpg", name: "santaClus", title:"Santa Clus Guppy Fish"},
        {url: "/aquaFish.jpg", name: "redDragon", title:"Red Dragon Guppy Fish"},
    ]],
    ["platy", [
        {url: "/aquaFish.jpg", name: "red", title:"Red Platy Fish"},
        {url: "/aquaFish.jpg", name: "redBalloon", title:"Red Balloon Platy Fish"},
        {url: "/aquaFish.jpg", name: "mickeyMouse", title:"Mickey Mouse Platy Fish"},
        {url: "/aquaFish.jpg", name: "sunset", title:"Sunset Platy Fish"},
        {url: "/aquaFish.jpg", name: "wagTail", title:"Wag Tail Platy Fish"},
        {url: "/aquaFish.jpg", name: "pinTail", title:"Pin Tail Platy Fish"},
        {url: "/aquaFish.jpg", name: "tuxedoPattern", title:"Tuxedo Pattern Platy Fish"},
        {url: "/aquaFish.jpg", name: "bumblebee", title:"Bumblebee Platy Fish"},
    ]],
    ["sword", [
        {url: "/aquaFish.jpg", name: "red", title:"Red Sword Fish"},
        {url: "/aquaFish.jpg", name: "kohaku", title:"Kohaku Sword Fish"},
        {url: "/aquaFish.jpg", name: "pineAppleWag", title:"Pine Apple Wag Sword Fish"},
    ]],
    ["bards", [
        {url: "/aquaFish.jpg", name: "tiger", title:"Tiger Bard Fish"},
        {url: "/aquaFish.jpg", name: "rosy", title:"Rosy Bard Fish"},
        {url: "/aquaFish.jpg", name: "denison", title:"Denison Bard Fish"},
        {url: "/aquaFish.jpg", name: "green", title:"Creen Bard Fish"},
        {url: "/aquaFish.jpg", name: "cherry", title:"Cherry Bard Fish"},
        {url: "/aquaFish.jpg", name: "tigerBardAlbino", title:"Tiger Bard Albino Bard Fish"},
        {url: "/aquaFish.jpg", name: "tinfoil", title:"Tinfoil Bard Fish"},
    ]],
    ["tetraFish", [
        {url: "/aquaFish.jpg", name: "black", title:"Black Tetra Fish"},
        {url: "/aquaFish.jpg", name: "neon", title:"Neon Tetra Fish"},
        {url: "/aquaFish.jpg", name: "blackNeon", title:"Black Neon Tetra Fish"},
        {url: "/aquaFish.jpg", name: "cardinal", title:"Cardinal Tetra Fish"},
        {url: "/aquaFish.jpg", name: "congo", title:"Congo Tetra Fish"},
        {url: "/aquaFish.jpg", name: "serpae", title:"Serpae Tetra Fish"},
        {url: "/aquaFish.jpg", name: "xray", title:"X-Ray Tetra Fish"},
        {url: "/aquaFish.jpg", name: "blackPhantom", title:"Black Phantom Tetra Fish"},
        {url: "/aquaFish.jpg", name: "lemon", title:"Lemon Tetra Fish"},
        {url: "/aquaFish.jpg", name: "silverTip", title:"Silver Tip Tetra Fish"},
        {url: "/aquaFish.jpg", name: "bloodFin", title:"Blood Fin Tetra Fish"},
        {url: "/aquaFish.jpg", name: "redEye", title:"Red Eye Tetra Fish"},
    ]],
    ["colorWidowTetraFish", [
        {url: "/aquaFish.jpg", name: "pink", title:"Pink Tetra Fish"},
        {url: "/aquaFish.jpg", name: "yellow", title:"Yellow Tetra Fish"},
        {url: "/aquaFish.jpg", name: "green", title:"Green Tetra Fish"},
        {url: "/aquaFish.jpg", name: "blue", title:"Blue Tetra Fish"},
        {url: "/aquaFish.jpg", name: "purple", title:"Purple Tetra Fish"},
    ]],
    ["foreGroundPlants", {
        title: "Fore Ground Plants",
        desc: "",
        data: [
            {name: "", title:""},
        ]
    }],
    ["midGroundPlants", {
        title: "Mid Ground Plants",
        desc: "",
        data: [
            {name: "", title:""},
        ]
    }],        
    ["backGroundPlants", {
        title: "Back Ground Plants",
        desc: "",
        data: [
            {name: "", title:""},
        ]
    }],     
    ["onWoodOrRockPlants", {
        title: "On-Wood Or Rock Plants",
        desc: "",
        data: [
            {name: "", title:""},
        ]
    }],        
    ["floatingAndPondPlants", {
        title: "Floating And Pond Plants",
        desc: "",
        data: [
            {name: "", title:""},
        ]
    }],
    ["contact", {
       mobileNumber: "9701184115",
       watsapp: `https://api.whatsapp.com/send?phone=+91${9701184115}&text=Hello Hari Prasad`,
       youtube: "https://youtube.com/@liveaquariumtelugu?si=P0PozHvkaVtZsh2g",
       instagram: "https://www.instagram.com/live_aquarium_telugu?igsh=M3U5MTRrb3doeDAz",
       call: `tel:+91${9701184115}`,
       faceBook: ""
    }],
]);



export const getItemDetails = new Map([
    ["goldFish_gold", 
        {
            name: "Gold Fish", 
            desc: "Livebearers give birth to live, free-swimming baby fish instead of laying eggs. They are easy to breed, making them ideal for beginners. Popular species include guppies, mollies, platies, and swordtails.",
            title:"Fishes", 
            type: "non Live Bearer",
            coverImage: "/aquaFish.jpg",
            images: ["/aquaFish.jpg"],
            videos: ["/fishes.mp4"],
            availableGender: "B", // "M" OR "F" or "B"
            totalCount: 120,
            minPrice: 10,
            maxPrice: 300,
            isOtherChargesApplied: true,
            note: "If you are in 10kms serrounding to the this location delivery Charges will not apply",
            deliveryAvalibleIn: ["Andra pradesh", "Telagana", "Karnataka"],
            foodType: "Regular",
            timingsOfFood: "3 timings",
            maintenanceLevel: "Less",
            lifeTime: "1 Year",
            precautions: [
                "Water temparature should be normal", 
                "keep it in low temparature rooms", 
                "change water for every one week",
                "Seperate this fish with Livebearers(like Fighter fish and Mollys...)"
            ],
            requirements: [
                "Oxigen", "Natural Plants", "LED Lamp", "Water purifier"
            ],
            isActive: true,
            inStock: true,
            avalibleSizes: ["small", "medium", "large"],
            otherDetails: {
                small:{
                    isActive: true,
                    inStock: true,
                    size: "1 cm",
                    price: 15,
                    url: "/aquaFish.jpg",
                    totalCount: 30,
                },
                medium:{
                    isActive: true,
                    inStock: true,
                    size: "2cm - 3cm",
                    price: 70,
                    url: "/aquaFish.jpg",
                    totalCount: 40,
                },
                large:{
                    isActive: true,
                    inStock: true,
                    size: "4cm+",
                    price: 300,
                    url: "/aquaFish.jpg",
                    totalCount: 50,
                }
            }


        },
    ],
]);

// Name
// Gender
// Avalible sizes, 
// Prices (based on sizes) 
// Images based on sizes
// Videos (optional) 
// Description ok 👌
// Food type
// Timings of food
// Maintenance level 
// Life time
// Precautions 
// Temperatures should maintain
// Fish type (can mingle with other fishes or not) - if not fish comfortable with what type of fishes and which fishes should avoid in the same box

// Requirements: Oxigen need or not

export const onRedirectTo = (url) => {
    // href=`tel:+91${number}`

    let a= document.createElement('a');
    a.target= '_blank';
    a.href= url;
    a.click();
}