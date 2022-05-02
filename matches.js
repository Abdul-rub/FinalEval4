// write js code here corresponding to matches.html

 var details = JSON.parse(localStorage.getItem("schedule"));
 //console.log(details)
 displayData(details)

 var everything =JSON.parse(localStorage.getItem("favourites")) || [];
 console.log(everything)

 function displayData(data){

    data.forEach(function(elem){
    var row1=document.createElement("tr")

    var col1=document.createElement("td")
      col1.innerText=elem.matchNumber
      var col2=document.createElement("td")
      col2.innerText=elem.TeamA
      var col3=document.createElement("td")
      col3.innerText=elem.TeamB
      var col4=document.createElement("td")
      col4.innerText=elem.Date
      var col5=document.createElement("td")
      col5.innerText=elem.Venue
      var col6=document.createElement("td")
      col6.innerText="Add as Favourites";
      col6.style.color="green"
      col6.addEventListener("click",function(){
          Abdul(elem)
      })

      row1.append(col1,col2,col3,col4,col5,col6)
      document.querySelector("tbody").append(row1);

      })
      
    }
    function Abdul(elem){
        console.log(elem)
        everything.push(elem);

        localStorage.setItem("favourites",JSON.stringify(everything))
        window.location.href="favourites.html"   
    }