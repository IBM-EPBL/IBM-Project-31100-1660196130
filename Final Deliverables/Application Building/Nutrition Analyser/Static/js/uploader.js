let fileLoader = document.getElementById("upload");
let imagePreview = document.getElementById("preview");
let outputText = document.getElementById("outputText");
let loaderGif = document.getElementById("loader");
fileLoader.addEventListener("change", fileSelector);

function uploadFile(fileBuf) {
    let req = new XMLHttpRequest();
    req.open("POST", "http://localhost:5000/image");

    req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
            loaderGif.style.display = "none";
            outputText.style.display = "block";
            fileLoader.style.display="none";
            if (req.responseText != "Incorrect format") {
                //outputText.innerHTML = "I think this is <b>" + req.responseText + "</b>";
                if(req.responseText== "APPLES")
                {
                    outputText.innerHTML = "The given fruit is <b>" + req.responseText + "</b>"+" Calories-96, Protein - 0.59g,Carbohydrate 25g,Fats -0.39g,Dietary Fiber 4.4g,Sugar 14 g,Sodium 18mg,Potassium 194.7mg";
                }
                else if(req.responseText== "BANANA")
                {
                    outputText.innerHTML = "The given fruit is <b>" + req.responseText + "</b>"+" Calories-105, Protein - 1.39g, Carbohydrate 279g,Fats -0.49g, Dietary Fiber 6.14g, Sodium 1.2mg,Potassium 422mg";
                }
                else if(req.responseText== "ORANGE")
                {
                    outputText.innerHTML = "The given fruit is <b>" + req.responseText + "</b>"+" Calories-105, Protein - 0.9g, Carbohydrate 18g,Fats - 0.1g, Dietary Fiber 2.39g, Sodium 0mg,Potassium 173.8mg";
                }
                else if(req.responseText== "PINEAPPLE")
                {
                    outputText.innerHTML = "The given fruit is <b>" + req.responseText + "</b>"+" Calories 452,Portein-4.99gFats 11g,Carbohydrates -199g,Dietary Fiber 139g,Sugar 89g,Sodium 9.1 mg,Potassium 986.5mg";
                }
                else if(req.responseText== "WATERMELON")
                {
                    outputText.innerHTML = "The given fruit is <b>" + req.responseText + "</b>"+" Calories 1371,Portein-26g,Fats 7g,Carbohydrates -341g,Dietary Fiber 18g,Sugar 280g,Sodium 45.2 mg,Potassium 5060.2mg";
                }
                else{
                    outputText.innerHTML = "Oops! We don't support this image format at the moment";
                }              
     
            }
            else {
                outputText.innerHTML = "Oops! We don't support this image format at the moment";
            }
        }
      }

    req.send(fileBuf);
    loaderGif.style.display = "block";
    outputText.style.display = "none";
}


function fileSelector() {
    let fileDetails = fileLoader.files[0];
    let reader = new FileReader();

    previewDisplayed = false;

    reader.addEventListener("load", (event) => {
        if (previewDisplayed === false) {
            imagePreview.src = reader.result;
            previewDisplayed = true;
            reader.readAsArrayBuffer(fileDetails);
        }
        else {
            uploadFile(reader.result);
        }
        
    });

    if (fileDetails) {
        reader.readAsDataURL(fileDetails);
    }
}
