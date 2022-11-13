// Resume json thing
let url = "resume.json"

const myList = document.querySelector('.myList')
const loadingStatus = document.querySelector('.status')
 
async function getCVData() {
    let response = await fetch(url);
    if (response.ok) { // if HTTP-status is 200-299
     
        let cvData = await response.json();
        //console.log(cvData)
        loadingStatus.innerText = ""
       
        const cvKeys = Object.keys(cvData)
        console.log(cvKeys)

        cvKeys.forEach(cvKey => {
            console.log(cvData[cvKey])
           

                const myHeading = document.createElement("H2");
                myHeading.innerHTML = `${cvKey}`;
                myList.appendChild(myHeading);

                const cvItems = cvData[cvKey];
                cvItems.forEach(cvItem => {
                

                if (cvItem.hasOwnProperty('heading')) {
                    console.log('Heading property exists!')

                    const myRenderedCvItem = document.createElement('div')
                    myRenderedCvItem.innerHTML = `

                    <strong>${cvItem.heading}</strong><p>${cvItem.text}</p>
                    `;

                    myList.appendChild(myRenderedCvItem)
                }

                if (typeof cvItem === 'string') {
                    const myRenderedCvItem = document.createElement('div')
                    myRenderedCvItem.innerHTML = `
                    <p>${cvItem}</p>
                    `;

                    console.log(myRenderedCvItem)
                    myList.appendChild(myRenderedCvItem)

                }

                if (cvItem.hasOwnProperty('companyName')) {
                    console.log('companyName propert exists!')
                    const myRenderedCvItem = document.createElement('div')
                    myRenderedCvItem.innerHTML = `
                    <strong><p>${cvItem.companyName}</p></strong><p>${cvItem.text}</p>
                    `;
                    console.log(myRenderedCvItem)
                    myList.appendChild(myRenderedCvItem)

                }
                if (cvItem.hasOwnProperty('skill1', 'keywords')) {
                    console.log('they exist')
                    const myRenderedCvItem = document.createElement('div')
                    myRenderedCvItem.innerHTML = `
                    <strong><p>${cvItem.skill1}</p></strong><p>${cvItem.keywords}</p>
                    `;

                    myList.appendChild(myRenderedCvItem)

                }
                if (cvItem.hasOwnProperty('language', 'fluency')) {
                    console.log('they exist2')
                    const myRenderedCvItem = document.createElement('div')
                    myRenderedCvItem.innerHTML = `
                    <p>${cvItem.language}</p><p>${cvItem.fluency}</p>
                    `;

                    myList.appendChild(myRenderedCvItem)

                }
                console.log(cvItem)
                console.log("---- inner loop")
            })
            
            console.log("==== outerloop")
        })


    } else {
        console.log("HTTP-Error: " + response.status);
        myList.innerHTML = `<li>No CV data found</li>`;
    }
}
 
getCVData();
