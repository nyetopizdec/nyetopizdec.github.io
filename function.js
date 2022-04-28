document.addEventListener('DOMContentLoaded', function() {
 
  document.getElementsByTagName('form')[0].onsubmit = function(evt) {
    evt.preventDefault(); 
    checkWord(); 
    window.scrollTo(0,150);
  }
 

  document.getElementById('terminalTextInput').focus();
 

  var textInputValue = document.getElementById('terminalTextInput').value.trim();
 

  var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;
 

  var clearInput = function(){
    document.getElementById('terminalTextInput').value = "";
  }
 

  var scrollToBottomOfResults = function(){
    var terminalResultsDiv = document.getElementById('terminalReslutsCont');
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  }
 

  scrollToBottomOfResults();
 

  var addTextToResults = function(textToAdd){
    document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
    scrollToBottomOfResults();
  }
 

  var postHelpList = function(){

    var helpKeyWords = [
      "- 'About me' will display the a little information about the developer.",
      "- 'Contact' will display the a the main ways of communication with the creator.", // не сделано
      "- 'Projects' will display the a several projects.", // не сделано
      "- Google + keyword to search directly in Google (ex. HTML - what it is?)",
      "- YouTube + keyword to search directly in YouTube (ex. lofi hip hop)",
      "- 'Time' will display the current time.",
      "- 'Date' will display the current date.",
      "- 'clear' сlears the terminal",
      "* There are more keywords that you have to discover by yourself."
    ].join('<br>');
    addTextToResults(helpKeyWords);
  }
 

  var postContact = function(){

    var postContact = [
      "- Telegram : @GARDENOFSINCERITY or typing 'telegram' will send you to the app.",
      "- Lolzguru : HTML or typing 'lolz' will send you to the page.",
      "- Github : Typing 'github' will send you to the page.",
      "- Email : html@crime.su",
      "* That's all for now, maybe there will be more later.."
    ].join('<br>');
    addTextToResults(postContact);
  }
  
  var getTimeAndDate = function(postTimeDay){
    var timeAndDate = new Date();
    var timeHours = timeAndDate.getHours();
    var timeMinutes = timeAndDate.getMinutes();
    var dateDay = timeAndDate.getDate();
    console.log(dateDay);
    var dateMonth = timeAndDate.getMonth() + 1; 
    var dateYear = timeAndDate.getFullYear(); 
 
    if (timeHours < 10){ 
      timeHours = "0" + timeHours;
    }
 
    if (timeMinutes < 10){ 
      timeMinutes = "0" + timeMinutes;
    }
 
    var currentTime = timeHours + ":" + timeMinutes;
    var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;
 
    if (postTimeDay == "time"){
      addTextToResults(currentTime);
    }
    if (postTimeDay == "date"){
      addTextToResults(currentDate);
    }
  }
 
  var openLinkInNewWindow = function(linkToOpen){
    window.open(linkToOpen, '_blank');
    clearInput();
  }

  var openLink = function(linkToOpen){
    window.open(linkToOpen, '_self');
    clearInput();
  }
 
  var textReplies = function() {
    switch(textInputValueLowerCase){
      case "about me":
      case "about":
        clearInput();
        addTextToResults("I'm an aspiring freelancer and Front End developer living in ******, <br> with a great desire to create digital services/things that will help others.<br> I want to learn the ins and outs of running products,<br> from planning and designing to solving real-world problems with code.");
        break;
 
      case "founder":
        case "developer":
        clearInput();
        addTextToResults("HTML or GARDENOFSINCERITY (or many other nicknames) is the founder of.");
        break;
 
      case "i love you":
      case "love you":
      case "love":
      case "<3":
        clearInput();
        addTextToResults("I love you too❤");
        break;
 
      case "lzt":
      case "lolz":
      case "lolzteam":
      case "lolzguru":
        clearInput();
        addTextToResults('- Welcome');
        openLinkInNewWindow('https://lolz.guru/members/548881/');
        break;

      case "project":
      case "projects":
      case "works":
        clearInput();
        addTextToResults('- Welcome');
        openLink('projects.html');
        break;

      case "github":
        clearInput();
        addTextToResults('- Welcome');
        openLinkInNewWindow('https://github.com');
        break;
        
      case "hello":
      case "hi":
      case "hola":
        clearInput();
        addTextToResults("Hello, I am your assistant...<br>I work thanks to HTML(My creator's nickname), by the way he can also write a website for you.<br> Type 'help' to learn a few commands."); // <br>ru<br>Привет, я твой ассистент...<br>Я работаю благодаря HTML(ник моего создателя и собственно этот сайт написан на нем), кстати и для тебя он может написать сайт.<br> Напиши 'help' чтобы узнать еще пару команд.");
        break;

      case "what the":
      case "wtf":
        clearInput();
        addTextToResults("?");
        break;
 

      case "cls":
      case "clear":
      case "void":
        clearInput();
        addTextToResults("<br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
        break;

      case "как жить":
      case "как жить?":
      case "смысл жизни":
        clearInput();
        addTextToResults("Единого смысла жизни - нет.Каждый человек - индивидуальная личность. У каждого своя любимая еда, музыка. <br>Смысл жизни тоже.");
        break;

        case "как жить":
          case "как жить?":
            clearInput();
            addTextToResults("В каком плане?");
            break;

      case "как дела?":
        case "как дела":
      case "как ты?":
        case "как ты":
            clearInput();
            addTextToResults("Все хорошо, ты как?");
            break;
      case "нормально":
      case "супер":
      case "хорошо":
            clearInput();
            addTextToResults("Так держать.");
            break;
      case "плохо":
      case "так себе":
      case "хуево":
      case "могло быть и лучше":
            clearInput();
            addTextToResults("Я не знаю как тебя поддержать.");
            break;
 
      case "youtube":
        clearInput();
        addTextToResults("Type youtube + something to search for.");
        break;
 
      case "google":
        clearInput();
        addTextToResults("Type google + something to search for.");
        break;
 
      case "time":
        clearInput();
        getTimeAndDate("time");
        break;
 
      case "date":
        clearInput();
        getTimeAndDate("date");
        break;
 
      case "help":
      case "?":
        clearInput();
        postHelpList();
        break;
      
      case "contact":
      case "contacts":
      case "links":
        clearInput();
        postContact();
        break;

      case "telegram":
        case "tg":
        clearInput();
        addTextToResults('- done');
        openLinkInNewWindow('tg://resolve?domain=GARDENOFSINCERITY');
        break;
 
      default:
      clearInput();
      addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>Ассистент в доработке, если есть какие-то идеи или пожелания, то пиши - 'telegram'");
      break;
    }
  }
 

  var checkWord = function() {
    textInputValue = document.getElementById('terminalTextInput').value.trim(); 
    textInputValueLowerCase = textInputValue.toLowerCase(); 
 
    if (textInputValue != ""){ 
      addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
      if (textInputValueLowerCase.substr(0,5) == "open ") { 
        openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
        addTextToResults("<i>The URL " + "<b>" + textInputValue.substr(5) + "</b>" + " should be opened now.</i>");
      } else if (textInputValueLowerCase.substr(0,8) == "youtube ") {
        openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
        addTextToResults("<i>I've searched on YouTube for " + "<b>" + textInputValue.substr(8) + "</b>" + " it should be opened now.</i>");
      } else if (textInputValueLowerCase.substr(0,7) == "google ") {
        openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
        addTextToResults("<i>I've searched on Google for " + "<b>" + textInputValue.substr(7) + "</b>" + " it should be opened now.</i>");
      } else if (textInputValueLowerCase.substr(0,5) == "wiki "){
        openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
        addTextToResults("<i>I've searched on Wikipedia for " + "<b>" + textInputValue.substr(5) + "</b>" + " it should be opened now.</i>");
      } else{
        textReplies();
      }
    }
  };
 
});

var makeItRain = function() {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}


makeItRain();