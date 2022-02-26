//objects
//Keep track of which books you have read and which books you want to read!

const arrOfObject = [
    {title: "automic habits",
     author: "james clear",
     alreadyRead: true
    },
    {title: "sapiens",
    author: "Yuval Noah Harari",
    alreadyRead: true
    },
    {title: "the kite runner",
    author: "Khaled Hosseini",
    alreadyRead: false
    }
];
function iterateArray(book, index, arrOfObject){
    //console.log(`'${book.title}', by ${book.author}.`);
    if(book.alreadyRead === true){
        console.log(`You have already read "${book.title}", by ${book.author}`);
    }else{
        console.log(`You still need to read "${book.title}", by ${book.author}`);
    }
}
arrOfObject.forEach(iterateArray);

//The Recipe Card

const recipeCard = {
    title: "Wheat flour roti",
    numOfServings:3,
    ingredients:["2 cup of wheat flour", "1 cup of water", "1/2 tbs salt", "2 tbs oil"]
};
    let i;
    console.log(`${recipeCard.title}`);
    console.log(`serves:${recipeCard.numOfServings}`);
    console.log("Ingrendients:");
    recipeCard.ingredients.forEach(element => console.log(element));

//The Movie Database

const movieData = {
    title: "pyassa",
    duration: 155,
    director: "guru dutt",
    stars:["guru dutt", "maya", "wahida rehman", "rehman", "jony walker"] 
};
const str = "'"+ movieData.title +"' lasts for " + movieData.duration +" minutes, and was directed by " + movieData.director +". Stars:"+ movieData.stars + ".";
console.log(str);


