// 1 Import songs array using modules.
import songs from "./songs.js";

// console.log(songs);


// 2 Use the map function to create a new array with the title of each song in uppercase letters.

const songsInUppercase = songs.map(({ title }) => title.toUpperCase());

console.log(songsInUppercase);


// 3 Use the filter function to create a new array with all the songs released before 1975.

const songsReleasedBefore1975 = songs.filter(({ year }) => year < 1975);

console.log(songsReleasedBefore1975);


// 4 Use destructuring to create a variable that stores the title of the first song in the array.

const { title: firstTitle } = songs[0];

console.log(firstTitle);


// 5 Use the find function to get the object representing the song "Hotel California".

const foundSong = songs.find(({ title }) => title === "Hotel California");

console.log(foundSong);


// 6 Use the rest operator to create a function that takes any number of arguments and returns their sum. (Tip: Use reduce)

// function sumFunc(...data) {
//     return data.reduce(
//         (accumulator, currentValue) => accumulator + parseInt(currentValue),
//         0
//     );
// }
// const songsYears = songs.map(({ year }) => year);
// console.log("Ex 6.", sumFunc(...songsYears));


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);


// 7 Use the map function and template literals to create a new array with strings in the format "Title - Artist (Year)" for each song.

const songsStrings = songs.map(({ title, artist, year }) => `${title} - ${artist} (${year})`);

console.log(songsStrings);


// 8 Use destructuring and the filter function to create a new array with the titles of all the songs by The Beatles.

const BeatlesSongs = songs.filter(({ artist }) => artist === 'The Beatles');

console.log(BeatlesSongs);


// 9 Use arrow functions and the reduce function to calculate the total number of years between all the songs' release dates. (Tip: Use reduce)

const totalYearsSum = songs.reduce((accumulator, { year }) => accumulator + year, 0);

console.log(totalYearsSum);


// 10 Create a module that exports a function to calculate the average release year of the songs in the input array. (Tip: Use reduce.)


// const averageRealseYear = songs.reduce((accumulator, { year }) => accumulator + year);
// console.log(averageRealseYear);
// console.log(averageRealseYear / songs.length);

const averageReleaseYear = () => console.log(totalYearsSum / songs.length);

console.log(averageReleaseYear());

export default averageReleaseYear;

// console.log(averageRealseYear());
// export default averageRealseYear();


//11 Use the find function to get the object representing the song with the longest title.

let maxLength = 0;
let longestTitleSong;

songs.find(({ title }) => {
    if (title.length > maxLength) {
        maxLength = title.length;
        longestTitleSong = { title };
    }
});

console.log(longestTitleSong);

// const longestTitle = songs.find((song) => {
//     return song.title.length === Math.max(...songs.map((song) => song.title.length));
// });

// console.log(longestTitle); //La respuesta del profe


// 12 Use destructuring and template literals to log the title, artist and year of the first element of the array.

const [{ title, artist, year }] = songs;

console.log(`${title} by ${artist} (${year})`);


// 13 Use the rest operator to create a new array without the first element.

const restOfTheArray = [...songs.slice(1)]; //slice()

console.log(restOfTheArray);


// 14  Import the filter() function from a utils.js module and use it to create a new array with all the songs that have "Love" in the title.

const songsWithLove = songs.filter(({ title }) => title.includes("love"));

export { songsWithLove };


//15  Use the every() method to check if all the songs have titles that are 5 or more characters long.

const titlesMoreThan5Characters = ({ title }) => title.length > 5;

console.log(songs.every(titlesMoreThan5Characters));

// 16 Use the some() method to check if there are any songs from the 80s.

const songsFrom80s = songs.some(({ year }) => year > 1979 && year < 1990);

console.log(songsFrom80s);

// 17  Use a template literal to create a string that says "The Beatles released Let It Be in 1970."


const letItbe = songs.find(({ title }) => title === "Let It Be");

console.log(`${letItbe.artist} released ${letItbe.title} in ${letItbe.year} `);

// 18 Use the map() method to create a new array with just the artist names.

const artistNames = songs.map(({ artist }) => artist);

console.log(artistNames);


// 19 Create a function called randomSong that returns one song from the songs array randomly. Log the call of this function 3 times.

function randomSong() {
    const index = Math.floor(Math.random() * songs.length);
    return songs[index];
}

console.log(randomSong());
console.log(randomSong());
console.log(randomSong());

// 20.Write your own function using at least 3 concepts.

const songTitles = songs.filter(({ year }) => year % 2 === 0).map(song => song.title);

console.log(`The songs that were released in even years are: ${songTitles}`);










