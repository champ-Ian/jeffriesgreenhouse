currentOne = 1;

function start(){
    document.querySelector('.house2').style.display = 'none'
    document.querySelector('.house3').style.display = 'none'
    document.querySelector('.house4').style.display = 'none'
    document.querySelector('.house5').style.display = 'none'
    document.querySelector('.house6').style.display = 'none'
    document.querySelector('.house7').style.display = 'none'
    document.querySelector('.house8').style.display = 'none'
    document.querySelector('.house9').style.display = 'none'
    document.querySelector('.first-button').style.display = 'none'
}

function minus(){
    if (currentOne==2){
        currentOne -= 1
        document.querySelector('.first-button').style.display = 'none'
        document.querySelector('.house1').style.display = 'block'
        document.querySelector('.house2').style.display = 'none'
    } else if (currentOne==3){
        currentOne -= 1
        document.querySelector('.house2').style.display = 'block'
        document.querySelector('.house3').style.display = 'none'
    } else if (currentOne==4){
        currentOne -= 1
        document.querySelector('.house3').style.display = 'block'
        document.querySelector('.house4').style.display = 'none'
    }else if (currentOne==5){
        currentOne -= 1
        document.querySelector('.house4').style.display = 'block'
        document.querySelector('.house5').style.display = 'none'
    }else if (currentOne==6){
        currentOne -= 1
        document.querySelector('.house5').style.display = 'block'
        document.querySelector('.house6').style.display = 'none'
    }else if (currentOne==7){
        currentOne -= 1
        document.querySelector('.house6').style.display = 'block'
        document.querySelector('.house7').style.display = 'none'
    }else if (currentOne==8){
        currentOne -= 1
        document.querySelector('.house7').style.display = 'block'
        document.querySelector('.house8').style.display = 'none'
    }else if (currentOne==9){
        currentOne -= 1
        document.querySelector('.house8').style.display = 'block'
        document.querySelector('.house9').style.display = 'none'
        document.querySelector('.second-button').style.display = 'block'
    }
}

function plus(){
    if (currentOne==1){
        currentOne += 1
        document.querySelector('.first-button').style.display = 'block'
        document.querySelector('.house1').style.display = 'none'
        document.querySelector('.house2').style.display = 'block'
    } else if (currentOne==2){
        currentOne += 1
        document.querySelector('.house2').style.display = 'none'
        document.querySelector('.house3').style.display = 'block'
    } else if (currentOne==3){
        currentOne += 1
        document.querySelector('.house3').style.display = 'none'
        document.querySelector('.house4').style.display = 'block'
    }else if (currentOne==4){
        currentOne += 1
        document.querySelector('.house4').style.display = 'none'
        document.querySelector('.house5').style.display = 'block'
    }else if (currentOne==5){
        currentOne += 1
        document.querySelector('.house5').style.display = 'none'
        document.querySelector('.house6').style.display = 'block'
    }else if (currentOne==6){
        currentOne += 1
        document.querySelector('.house6').style.display = 'none'
        document.querySelector('.house7').style.display = 'block'
    }else if (currentOne==7){
        currentOne += 1
        document.querySelector('.house7').style.display = 'none'
        document.querySelector('.house8').style.display = 'block'
    }else if (currentOne==8){
        currentOne += 1
        document.querySelector('.house8').style.display = 'none'
        document.querySelector('.house9').style.display = 'block'
        document.querySelector('.second-button').style.display = 'none'
    } 
}
