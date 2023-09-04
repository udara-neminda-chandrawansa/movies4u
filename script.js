// codes for cascaded menus
navToggler = 0;
function showCascadedMenu(showingCascadedSpanID,hidingCascadedSpanID){
    var showCas = document.getElementById(showingCascadedSpanID);
    var hideCas = document.getElementById(hidingCascadedSpanID);
    // show showingCascadedSpanID
    if(navToggler == 0){
        // show cascaded span
        showCas.style.display = 'block';
        navToggler = 1;
    }
    else if(navToggler == 1){
        // hide cascaded span
        showCas.style.display = 'none';
        navToggler = 0;
    }
    // hide hidingCascadedSpanID
    hideCas.style.display = 'none';
}

// function to hide all cascaded menus
function hideAllCascadedMenus(){
    // identify cascaded menus
    var casCat = document.getElementById('cascadedCategories');
    var casCon = document.getElementById('cascadedContacts');
    // hide cascaded menus if any showing
    if(navToggler == 1){
        casCat.style.display = 'none';
        casCon.style.display = 'none';
        navToggler = 0;    
    }
}
// function to toggle nav menu visibility
function showNav(){
    var menu = document.getElementById('menu');
    var logo = document.getElementById('logo');
    var nav = document.getElementById('nav');
    if(menu.style.display == 'block'){
        // hide menu
        menu.style.display = 'none';
        logo.style.display = 'block';
        nav.style.alignItems = 'center';
    }
    else{
        // show menu
        menu.style.display = 'block';
        logo.style.display = 'none';
        nav.style.alignItems = 'center';
    }
    /*menu.style.display = 'none';*/
}
function rediMovie(movieName){
    //alert('Redirect to movie site : ' + movieName);
    window.open('https://www.imdb.com/find/?q='+movieName);
}


/*
1. “May the Force be with you.” -Star Wars, 1977
2. “There's no place like home.” -The Wizard of Oz, 1939
3. “I'm the king of the world!” -Titanic, 1997
4. “Carpe diem. Seize the day, boys. Make your lives extraordinary.” -Dead Poets Society, 1989
5. “Elementary, my dear Watson.” -The Adventures of Sherlock Holmes, 1939
6. “It's alive! It's alive!” -Frankenstein, 1931
7. “My mama always said life was like a box of chocolates. You never know what you're gonna get.” -Forrest Gump, 1994
8. “I'll be back.” -The Terminator, 1984
9. “You're gonna need a bigger boat.” -Jaws, 1975
10. “Here's looking at you, kid.” -Casablanca, 1942
11. “My precious.” -The Lord of the Rings: Two Towers, 2002
12. “Houston, we have a problem.” -Apollo 13, 1995
13. “There's no crying in baseball!” -A League of Their Own, 1992
14. “E.T. phone home.” -E.T. the Extra-Terrestrial, 1982
15. “You can't handle the truth!” -A Few Good Men, 1992
*/