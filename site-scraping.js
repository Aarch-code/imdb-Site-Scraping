//google the data you want to scrape, in my case, I googled for IMDb Top Movies.
//right click on name of 1st movie you see in the list and click on inspect element
//note the element that highlights the name of the movie, in this case, its "titleColumn"
//now right below code on console

document.getElementsByClassName("titleColumn");


//below is the output you will get
/*
HTMLCollection(250) [td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, td.titleColumn, …]
*/

//below code will give you list of movies, which you can copy and paste in excel

var names = document.getElementsByClassName("titleColumn");
for (i=0; i<names.length; i++)
{
console.log(names[i].innerText);
}
