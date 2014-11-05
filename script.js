// ==UserScript==
// @id             www.imdb.com-5763720c-0524-4b86-af79-87e6136cb253@scriptish
// @name           IMDb kat.ph and Torrentz Links and yts.re
// @version        1.2
// @namespace      
// @author         xpdite
// @author         akursat
// @description    
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @include        http://www.imdb.com/title/*
// @run-at         document-end
// ==/UserScript==

/* @require annotation need version 0.8. You must sure running with Greasemonkey version 0.8.
 */

//Avoiding some conflit.
this.$ = this.jQuery = jQuery.noConflict(true);

$( document ).ready(function() {
    //Get title of Movie
    function getTitle(){
       var title = $('h1.header').children('.itemprop').text();
       return title;
    }
});
