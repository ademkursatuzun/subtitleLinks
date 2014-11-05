// ==UserScript==
// @name           subtitleLinks
// @version        1.0
// @namespace      akursat.com/script
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
