const advertisement1 = document.createElement('div');

const body = document.getElementById('body');
const advertisement = document.createElement('div');
const flag = sessionStorage.getItem("advertisement");

const timer = () => {
    const divImage=document.createElement('div');
    advertisement.appendChild(divImage);
    const image1=document.createElement('img');
    image1.src="../../assets/תמונות נוספות/אייקון.png";
    divImage.appendChild(image1);
    image1.style.width="50px";
    const image2=document.createElement('img');
    image2.src="../../assets/תמונות נוספות/אייקון.png";
    divImage.appendChild(image2);
    image2.style.width="50px";
    image2.style.margin="0 30px";
    const image3=document.createElement('img');
    image3.src="../../assets/תמונות נוספות/אייקון.png";
    divImage.appendChild(image3);
    image3.style.width="50px";




    sessionStorage.setItem("advertisement", 1);
    const ap = document.createElement('p');
    const al = document.createElement('a');

    body.appendChild(advertisement1);
    advertisement.appendChild(ap);
    advertisement.appendChild(al);

    ap.innerHTML = "מכיר את מנויי הפרחים שלנו?<br> תוכל לקבל פרחים מידי שבוע בזמן קבוע לפי רצונך...";
    ap.classList.add('grin');
    ap.style.marginTop="20px";
    ap.style.marginBottom="50px";
    al.innerHTML = "ליצירת מנוי";
    al.classList.add('red');
    al.href = "../flower subscription/FlowerSubscription.html"
    advertisement.classList.add('alert');
    advertisement.classList.add('alert-light');
    // advertisement.style.width = "500px";

    setTimeout(stopTimer, 6000);
}

const stopTimer = () => {
    body.removeChild(advertisement1);
}

if (flag == null)
    setTimeout(timer, 4000);

    // advertisement.id="advertisement";
    advertisement.classList.add('advertisement');
    advertisement1.classList.add('advertisement1');
    advertisement1.appendChild(advertisement);