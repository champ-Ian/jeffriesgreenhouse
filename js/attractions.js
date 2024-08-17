//Format: ["Name", img ,"Distance", "Type (Resturant, Play, Shop)", "Review(Int)", "link"]
attractions = [
    ["Snow Summit", 1, 1.4, "Play", 4.5, "https://www.google.com/maps/place/Snow+Summit/@34.2363187,-116.8915616,17z/data=!3m2!4b1!5s0x80c4b47f3c85d263:0x5816b4901fb0a68b!4m6!3m5!1s0x80c4b47f397867e7:0xce1f84f5f627d82d!8m2!3d34.2363187!4d-116.8889867!16s%2Fm%2F026rsw7?entry=ttu"],
    ["Big Bear Lake", 2, 0.7, "Play", 4.5, "https://www.google.com/maps/place/Big+Bear+Lake,+CA/@34.244795,-116.943817,13z/data=!3m1!4b1!4m6!3m5!1s0x80c4b38902708765:0xf46d45765fbb53bf!8m2!3d34.2438963!4d-116.9114215!16zL20vMHI0ZDQ?entry=ttu"],
    ["Big Bear Alpine Zoo", 3, 2.1, "Play", 4.5, "https://www.google.com/maps/place/Big+Bear+Alpine+Zoo/@34.2393016,-116.8736474,17z/data=!3m1!4b1!4m6!3m5!1s0x80c4b52b59189c9b:0x33eb5d9c0b55214!8m2!3d34.2393017!4d-116.8687765!16s%2Fm%2F09gn973?entry=ttu"],
    ["Alpine Slide at Magic Mountain", 4, 1.6, "Play", 4.3, "https://www.google.com/maps/place/Alpine+Slide+at+Magic+Mountain/@34.2382181,-116.9237401,16z/data=!3m1!4b1!4m6!3m5!1s0x80c4b3986f353931:0x9165162694c88a0b!8m2!3d34.2382181!4d-116.9211652!16s%2Fg%2F1pyc_jmvw?entry=ttu"],
    ["Boulder Bay Park", 5, 3.2, "Play", 4.8, "https://www.google.com/maps/place/Boulder+Bay+Park/@34.238558,-116.9516919,17z/data=!3m1!4b1!4m6!3m5!1s0x80c4b36ff2caf7b9:0x4f1e869eec9d8ec6!8m2!3d34.238558!4d-116.949117!16s%2Fg%2F11v5jfsnhm?entry=ttu"],
    ["Pine Knot Village", 6, 1, "Shop", 4.7, "https://www.google.com/maps/place/The+Village+Shops+and+Courtyard/@34.2406918,-116.9142717,16z/data=!3m1!4b1!4m6!3m5!1s0x80c4b3965f1b3179:0x42f52c8d6984a06e!8m2!3d34.2406918!4d-116.9120045!16s%2Fg%2F11c5rk_nmy?entry=ttu"],
    ["Big Bear Discovery Center", 7, 3.5, "Play", 4.6, "https://www.google.com/maps/place/Big+Bear+Discovery+Center/@34.2631857,-116.9071698,17z/data=!3m1!4b1!4m6!3m5!1s0x80c4b3e4ed1f6465:0x3748e359601233cc!8m2!3d34.2631857!4d-116.9045949!16s%2Fm%2F0j9m89p?entry=ttu"],
    ["Bear Mountain", 8, 0.8, "Play", 5, "https://www.google.com/maps/place/Bear+mountain+resort/@34.2438963,-116.9139964,17z/data=!3m1!4b1!4m6!3m5!1s0x80c4b30a5490ae49:0x243cf2b70e3c4583!8m2!3d34.2438963!4d-116.9114215!16s%2Fg%2F11kj_0z4v9?entry=ttu"],
    ["Big Bear Visitor Center", 9, 0.8, "Play", 4.6, "https://www.google.com/maps/place/Big+Bear+Visitor+Center+-+Visit+Big+Bear/@34.2441763,-116.9138066,16z/data=!3m1!4b1!4m6!3m5!1s0x80c4b396642e5f41:0xf40ea9b773807f5!8m2!3d34.2441763!4d-116.9112317!16s%2Fg%2F1td_ywmg?entry=ttu"],
    ["Meadow Park", 10, 0.1, "Play", 4.5, "https://www.google.com/maps/place/Ski+Beach+Park/@34.2471487,-116.9038587,17z/data=!3m1!4b1!4m6!3m5!1s0x80c4b38d741fec0f:0xf9340c6a483660e5!8m2!3d34.2471487!4d-116.9012838!16s%2Fg%2F1tczkrtm?entry=ttu"],
    ["Domino Pizza", 11, 0.2, "Resturant", 3.6, "https://www.google.com/maps/place/Domino's+Pizza/@34.2437344,-116.9049436,17z/data=!3m1!4b1!4m6!3m5!1s0x80c4b38e1b47b963:0xde12ed9ac518e919!8m2!3d34.2437344!4d-116.9023687!16s%2Fg%2F1tc_8ywh?entry=ttu"],
    ["Grizzly Manor Cafe", 12, 0.2, "Resturant", 4.6, "https://www.google.com/maps/place/Grizzly+Manor+Cafe/@34.2437262,-116.9043299,16z/data=!3m1!4b1!4m6!3m5!1s0x80c4b38e11f2a7e7:0x9e72aaa83fbf193d!8m2!3d34.2437262!4d-116.901755!16s%2Fg%2F1tcww_lr?entry=ttu"],
    ["Big Bear Snow Play", 13, 2.7, "Play", 4, "https://www.google.com/maps/place/Big+Bear+Snow+Play/@34.2587422,-116.8701899,17z/data=!3m1!4b1!4m6!3m5!1s0x80c4b43fcd157d85:0x1068c2d5f1469e56!8m2!3d34.2587422!4d-116.867615!16s%2Fg%2F1tdqhrkp?entry=ttu"],
    ["Mcdonald's", 14, 0.3, "Resturant", 3.5, "https://www.google.com/maps/place/McDonald's/@34.2438496,-116.9035009,17z/data=!3m1!4b1!4m6!3m5!1s0x80c4b38eeec98855:0x59d7168c15c17cb3!8m2!3d34.2438497!4d-116.89863!16s%2Fg%2F1thxwhgw?entry=ttu"],
    ["Denny's", 15, 0.3, "Resturant", 4.1, "https://www.google.com/maps/place/Denny's/@34.2437979,-116.9059317,17z/data=!3m1!4b1!4m6!3m5!1s0x80c4b391fc0ef43b:0xe2adfc56197676d0!8m2!3d34.2437979!4d-116.9033568!16s%2Fg%2F1tcww_ls?entry=ttu"],
    ["Vons", 16, 1.6, "Shop", 4.3, "https://www.google.com/maps/place/Vons/@34.2524122,-116.8875561,17z/data=!3m1!4b1!4m6!3m5!1s0x80c4b4748375e079:0x4dbf9941856f38b4!8m2!3d34.2524122!4d-116.8849812!16s%2Fg%2F1v6wplvk?entry=ttu"]
]

function makeAttraction(name, img, distance, type, review, link){
    let parent = document.querySelector(".attractions")
    let container = document.createElement('div')
    container.setAttribute('class', 'container')
    parent.appendChild(container)

    //img
    let imgElem = document.createElement('img')
    imgElem.setAttribute('src', "img/attractions/" + img + ".jpg");
    imgElem.setAttribute('class', 'img')
    container.appendChild(imgElem)

    //Name
    let nameElem = document.createElement('div')
    nameElem.setAttribute('class', "name");
    nameElem.textContent = name
    container.appendChild(nameElem)

    //Distance
    let distanceElem = document.createElement('div')
    distanceElem.setAttribute('class', "distance");
    distanceElem.textContent = "Distance: " + distance + " miles"
    container.appendChild(distanceElem)

    //Type
    let typeElem = document.createElement('div')
    typeElem.setAttribute('class', "type");
    typeElem.textContent = "Type: " + type
    container.appendChild(typeElem)

    //Review
    let reviewElem = document.createElement('div')
    reviewElem.setAttribute('class', "review");
    reviewElem.textContent = "Review: " + review
    container.appendChild(reviewElem)

    //Link
    let linkElem = document.createElement('a')
    linkElem.setAttribute('class', "link");
    linkElem.setAttribute('href', link);
    linkElem.setAttribute('target', "_blank");
    linkElem.textContent = 'Visit'
    container.appendChild(linkElem)
}

function listPrint(attractionList){
    makeAttraction(attractionList[0], attractionList[1], attractionList[2], attractionList[3], attractionList[4],attractionList[5])
}

function printAttraction(attractions){
    for (var i = 0; i < attractions.length; i++) {
        listPrint(attractions[i]);
    }
}

function clearAttractions(){
    let elements = document.querySelectorAll('.attractions');
    elements.forEach(element => {
        element.textContent= ''
    });
}

function nameSort(){
    attractions.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    });
}
function distanceSort(){
    attractions.sort((a, b) => a[2] - b[2]);
}
function reviewSort(){
    attractions.sort((a, b) => b[4] - a[4]);
}
function resturantSort(){
    filtered = attractions.filter(attraction => attraction[3] === "Resturant");
    return filtered
}
function playSort(){
    filtered = attractions.filter(attraction => attraction[3] === "Play");
    return filtered
}
function shopSort(){
    filtered = attractions.filter(attraction => attraction[3] === "Shop");
    return filtered
}

function limitAttractions(general, specific){
    clearAttractions()

    curArray = null
    if (specific == 1){
        curArray = attractions
    } else if (specific == 2){
        curArray = resturantSort()
    } else if (specific == 3){
        curArray = playSort()
    } else if (specific == 4){
        curArray = shopSort()
    }

    if (general ==1){
        nameSort(curArray)
    } else if (general==2){
        distanceSort(curArray)
    } else if (general==3){
        reviewSort(curArray)
    }

    printAttraction(curArray);
}

curGeneral = 1;
curSpecific = 1;

function generalChange(num){
    if (num ==1){
        generalClear()
        document.querySelector(".general1").style.background="var(--dark-color)"
        curGeneral = 1;
        limitAttractions(curGeneral, curSpecific)
    } else if (num==2){
        generalClear()
        document.querySelector(".general2").style.background="var(--dark-color)"
        curGeneral = 2;
        limitAttractions(curGeneral, curSpecific)
    } else if (num==3){
        generalClear()
        document.querySelector(".general3").style.background="var(--dark-color)"
        curGeneral = 3;
        limitAttractions(curGeneral, curSpecific)
    }
}

function generalClear(){
    document.querySelector(".general1").style.background="var(--light-color)"
    document.querySelector(".general2").style.background="var(--light-color)"
    document.querySelector(".general3").style.background="var(--light-color)"
}

function specificChange(num){
    if (num ==1){
        specificClear()
        document.querySelector(".specific1").style.background="var(--dark-color)"
        curSpecific = 1;
        limitAttractions(curGeneral, curSpecific)
    } else if (num==2){
        specificClear()
        document.querySelector(".specific2").style.background="var(--dark-color)"
        curSpecific = 2;
        limitAttractions(curGeneral, curSpecific)
    }else if (num==3){
        specificClear()
        document.querySelector(".specific3").style.background="var(--dark-color)"
        curSpecific = 3;
        limitAttractions(curGeneral, curSpecific)
    } else if (num==4){
        specificClear()
        document.querySelector(".specific4").style.background="var(--dark-color)"
        curSpecific = 4;
        limitAttractions(curGeneral, curSpecific)
    }
}

function specificClear(){
    document.querySelector(".specific1").style.background="var(--light-color)"
    document.querySelector(".specific2").style.background="var(--light-color)"
    document.querySelector(".specific3").style.background="var(--light-color)"
    document.querySelector(".specific4").style.background="var(--light-color)"
}
