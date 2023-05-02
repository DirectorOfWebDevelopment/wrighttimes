let ring = new Array (2);
ring[0]="<b>RAMS AND FALCONS GO BACK AND FORTH,<br> BUT RAMS PULL AHEAD AT END</b><br><br><br> Brady Bauer<br><br>The Wilbur Wright Rams fight hard all game to<br> take home their first win of the season on <br>Nov. 8, as they improve to 1-2 on the year <br>and 1-0 in conference play.After playing two<br> non-conference games to start the season, <br>the Rams were back at Wright College for<br> their third home game to start the season. ";
ring[1]= "<b>RECAPPING WRIGHT'S HISPANIC HERITAGE<br> MONTH POETRY READING</b><br><br>Students and adults gathered on Oct. 6 <br>in the auditorium and via zoom to listen to <br>Rodrigo Toscano recite his poetry as part of Wilbur <br>Wright’s celebration of Hispanic Heritage Month.      ";
ring[2]="<b>WRIGHT COLLEGE PERFORMING <br>FIRST PLAY SINCE COVID-19 IN MID-NOVEMBER</b><br><br>Thanksgiving is coming up soon, and that <br>means the annual dreading of family dinners over <br>the holidays. Here at Wright, professor Christopher<br> Leonard has chosen the school’s fall play to be <br>about just that.";
ring[3]="<b>PREVIEWING THE MIDTERM ELECTIONS</b><br><br>After months of political ads, early voting sites <br>in all of Chicago's wards opened on October 24,<br> and the gubernatorial race and other midterm <br>elections are finally coming to fruition with <br>election day on November 8.";
let Elden = " ";




for (var i = 0; i < ring.length; i++){
    Elden += "<article>";
    Elden += "<tr id='post'>";
    Elden += "<th id='testing'"+i+">";
    Elden += "<img id='anime"+i+"' src='images/item"+i+".jpg' /><hr id='story"+i+"'>";
    Elden += "<div id='figgy"+i+"' >" + ring[i] + "</div>";
    Elden += "</tr>";
    Elden += "</th>";
    Elden += "</article>";

    oak()


}

function oak(){
    document.getElementById("ash").innerHTML= Elden;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }