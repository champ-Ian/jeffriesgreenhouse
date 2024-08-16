//Format: ["Name", img ,"Distance", "Type (Resturant, Play, Shop)", "Review(Int)", "link"]
attractions = [
    ["Snow Summit", 1, 1.4, "Play", 4.5, ""],
    ["Big Bear Lake", 2, 0.7, "Play", 4.5, ""],
    ["Big Bear Alpine Zoo", 3, 2.1, "Play", 4.5, ""],
    ["Alpine Slide at Magic Mountain", 4, 1.6, "Play", 4.3, ""],
    ["Boulder Bay Park", 5, 3.2, "Play", 4.8, ""],
    ["Pine Knot Village", 6, 1, "Shop", 4, ""],
    ["Big Bear Discovery Center", 7, 3.5, "Play", 4.6, ""],
    ["Bear Mountain", 8, 0.8, "Play", 5, ""],
    ["Big Bear Visitor Center", 9, 0.8, "Play", 4.6, ""],
    ["Meadow Park", 10, 0.1, "Play", 4.5, ""],
    ["Domino Pizza", 11, 0.2, "Resturant", 3.6, ""],
    ["Grizzly Manor Cafe", 12, 0.2, "Resturant", 4.6, ""],
    ["Big Bear Snow Play", 13, 2.7, "Play", 4, ""],
    ["Mcdonald's", 14, 0.3, "Resturant", 3.5, ""],
    ["Denny's", 15, 0.3, "Resturant", 4.1, ""],
    ["Vons", 16, 1.6, "Shop", 4.3, ""],
]

function makeAttraction(name, img, distance, type, review, link){
    let parent = document.querySelector(".attractions")

    //img
    let imgElem = document.createElement('img')
    imgElem.setAttribute('src', "img/attractions/" + img + ".jpg");
    imgElem.setAttribute('class', 'img')
    parent.appendChild(imgElem)

    //Name
    let nameElem = document.createElement('div')
    nameElem.setAttribute('class', "name");
    nameElem.textContent = name
    parent.appendChild(nameElem)

    //Distance
    let distanceElem = document.createElement('div')
    distanceElem.setAttribute('class', "distance");
    distanceElem.textContent = "Distance: " + distance + " miles"
    parent.appendChild(distanceElem)

    //Type
    let typeElem = document.createElement('div')
    typeElem.setAttribute('class', "type");
    typeElem.textContent = "Type: " + type
    parent.appendChild(typeElem)

    //Review
    let reviewElem = document.createElement('div')
    reviewElem.setAttribute('class', "review");
    reviewElem.textContent = "Review: " + review
    parent.appendChild(reviewElem)

    //Link
    let linkElem = document.createElement('a')
    linkElem.setAttribute('class', "link");
    linkElem.setAttribute('href', link);
    linkElem.setAttribute('target', "_black");
    linkElem.textContent = 'Visit'
    parent.appendChild(linkElem)
}

function listPrint(attractionList){
    makeAttraction(attractionList[0], attractionList[1], attractionList[2], attractionList[3], attractionList[4])
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
