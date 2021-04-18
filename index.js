
const box = document.querySelector(".box");
const body = document.querySelector("body");
const filterBox = document.querySelector('.filter-box');
const filter = document.querySelector('.filter');




fetch("/data.json")
    .then(response => {
        return response.json()
    })
    .then(function (data) {
        createElement(data);
        addFilter()


    })








function createElement(file) {
    for (let i = 0; i < file.length; i++) {

        let newBox = box.cloneNode(true);
        body.appendChild(newBox);



        const log = document.querySelectorAll(".logo-svg");
        const companyName = document.querySelectorAll('.company-name');
        const positionName = document.querySelectorAll(".position-name");
        const day = document.querySelectorAll(".day");
        const time = document.querySelectorAll(".time");
        const where = document.querySelectorAll('.where');

        const ifNew = document.querySelectorAll('.new');
        const ifFeatured = document.querySelectorAll('.featured');

        const offerInfo = document.querySelectorAll('.offer-info');


        log[i].src = file[i].logo;
        companyName[i].innerText = file[i].company;
        positionName[i].innerText = file[i].position;
        day[i].innerText = file[i].postedAt;
        time[i].innerText = file[i].contract;
        where[i].innerText = file[i].location;


        if (!file[i].new) {
            ifNew[i].classList.add('hide')
        };

        if (!file[i].featured) {
            ifFeatured[i].classList.add('hide')
        }

        let skillTab = [];

        skillTab.push(file[i].role)
        skillTab.push(file[i].level)

        for (let j = 0; j < file[i].languages.length; j++) {
            skillTab.push(file[i].languages[j]);

        }
        for (let k = 0; k < file[i].tools.length; k++) {
            skillTab.push(file[i].tools[k]);
        }



        offerInfo[i].innerHTML = "";



        for (let m = 0; m < skillTab.length; m++) {


            let newSkill = document.createElement('p');
            newSkill.classList.add('skill')
            newSkill.innerText = skillTab[m]
            offerInfo[i].appendChild(newSkill);


        };





    }

    const boxes = document.querySelectorAll(".box");
    const toRemove = boxes[boxes.length - 1]
    toRemove.remove()
}


function addFilter() {
    const skills = document.querySelectorAll('.skill');



    for (let i = 0; i < skills.length; i++) {


        skills[i].addEventListener("click", function () {
            const activeFilter = document.querySelectorAll(".filter-name");

            let permission = true;

            filterBox.classList.remove('hide')

            for (let j = 0; j < activeFilter.length; j++) {


                if (activeFilter[j].innerText == skills[i].innerText) {
                    permission = false
                }

            }

            if (permission) {
                let newFilter = document.createElement('div');
                newFilter.classList.add('filter')
                filterBox.appendChild(newFilter);

                let newName = document.createElement('p');
                newName.classList.add('filter-name');
                newName.innerText = skills[i].innerText
                newFilter.appendChild(newName);

                let newClose = document.createElement('div');
                newClose.classList.add('filter-close');
                newClose.innerText = 'X';
                newFilter.appendChild(newClose);


                const allSkills = document.querySelectorAll('.offer-info p');
                console.log(allSkills.parentElement)

                

               

            }




            const filterClose = document.querySelectorAll('.filter-close');

            filterClose.forEach(element => {
                element.addEventListener("click", function () {
                    element.parentElement.remove();

                    const activeFilterTab = document.querySelectorAll('.filter-name');

                    if (activeFilterTab.length == 0) {
                        filterBox.classList.add('hide')
                    }

                })
            });


        })



    };



}

