// FEEDR PROJECT:
document.getElementById("getData").addEventListener("click", getData);
document.getElementById("getTitles").addEventListener("click", getTitles);
document.getElementById("getPerson").addEventListener("click", getPerson);

// The below doesn't work yet - showing all the keys of the object:
function getData() {
  fetch("http://openlibrary.org/search.json?author=tolkien")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // loop through the object and show all keys: (https://flexiple.com/javascript/loop-through-object-javascript/
      for (key in data) {
        document.getElementById("getData").innerHTML += `<li>${key}</li>`;
      }
    });
}

listTitles = {};

// Show Titles (titles is an array within an object within the main API-object):
function getTitles() {
  fetch("http://openlibrary.org/search.json?author=tolkien")
    .then((res) => res.json())
    .then((data) => {
      // document.getElementById("titleData").innerText = "";
      data.docs.forEach(function (doc) {
        // try to create a list: showing "title, ISBN"
        document.getElementById(
          "titleData"
        ).innerHTML += `<li>${doc.title}</li>`;
        document.getElementById(
          "titleData"
        ).innerHTML += `<button id="onclick">Like</button>`;
        document.getElementById(
          "titleData"
        ).innerHTML += `<label>Feedback</label>`;
        document.getElementById(
          "titleData"
        ).innerHTML += `<textarea name="feedback"></textarea>`;
        document.getElementById(
          "titleData"
        ).innerHTML += `<button id="onclick">submit</button>`;
        let reviewSubmit = document.getElementById("onclick");
      });
    });
}

// Below to be implemented: Submit button function needs to send to firebase
// Then create on button: "show all reviews"
button.onclick = function () {
  btnSendMail_Click();
};

// Access object "authors" within the API-object:
function getPerson() {
  fetch("https://openlibrary.org/works/OL15626917W.json")
    .then((res) => res.json())
    .then((data) => {
      data.docs.person[value].forEach(function (doc) {
        document.getElementById(
          "getPerson"
        ).innerHTML += `<li>${doc.person}</li>`;
        // Create button next to each list item?
        // Call it "like". Each time it is clicked - save to Firebase:
        // Also include a user name field - plus a submit button.
      });
    });
}

// for future extension of the program - access to book covers use the following API:
// 9780008108311;
// https:/covers.openlibrary.org/b/isbn/9782266120975-L.jpg
