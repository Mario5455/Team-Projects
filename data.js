// Code worked for Codecool Courses		
// TASK 1: Our Team

	// Create an ourTeam variable and add an object as a value. Add a name (add a name for the team), and a members (an array where the members and their details go) key to the object.

	// The data.js file contains a variable named ourTeam the value of which is an object.

	// One key of the object is named name and its value is the name of the team.

	// The other key of the object is named members and its value is an array.

// let ourTeam = {
// 	name: "CodeZilla,",
// 	members: ["George", "Mario Gugu", "Tudor"]
// }


		// TASK 2: Team Members

	// In the members array, (the details of) each member is an object with following keys filled: name (string), birthday (object with three keys: year, month, day), location (object, keys: country, city), codingLevel (integer between 0 and 99).

	// There are as many objects in the array as there are team members.

	// All the objects contain the following key-value pairs: name (string), birthday (object with three keys: year, month, day), location (object, keys: country, city), codingLevel (integer between 0 and 99).

let ourTeam = {
	name: "CodeZilla,",
	members: [
		{
			name: "George",
			birthday: {year: 1996, month: 8, day: 18},
			location: {country: "Romania", city: "Alexandria"},
			codingLevel: 15,
			colours: {
				primary: {
					red: 182,
					green: 1,
					blue: 253,
				},
				secondary: {
					red: 101,
					green: 246,
					blue: 186,
				}
			},
			favorites: {favMovies: [
				{
					title: "The Wolf of Wall Street",
					director: "Martin Scorsese",
					year: 2013,
					rating: 8.2,
					writers: "Terence Winter and Jordan Belfort",
					stars: "Leonardo DiCaprio, Jonah Hill and Margot Robbie",
					genres: "Biography, Comedy, Crime",
					review: "A great movie about hustling. If you want to get rich and play hard, go and become THE WOLF."
			
				},
				{
					title: "2001: A Space Odyssey",
					director: "Stanley Kubrick",
					year: 1968,
					rating: 8.3,
					writers: "Stanley Kubrick and Arthur C. Clarke",
					stars: "Keir Dullea, Gary Lockwood, William Sylvester",
					genres: "Adventure, Sci-Fi",
					review: "A great film about AI conquering the world. If you enjoy chating with chatGPT, then this is a film for you!"
				},
				{
					title: "Pulp Fiction",
					director: "Quentin Tarantino",
					year: 1994,
					rating: 8.9,
					writers: "Quentin Tarantino and Roger Avary",
					stars: "John Travolta, Uma Thurman, Samuel L. Jackson",
					genres: "Crime, Drama",
					review: "Who doesn't like a movie that starts with the middle chapter and you have literally no idea what this story is until you get hit by a 'aaaaah' somewhere in the middle?"
					
				},
				{
					title: "Black Cat, White Cat",
					director: "Emir Kusturica",
					year: 1998,
					rating: 8.0,
					writers: "Gordan Mihic",
					stars: "Bajram Severdzan, Srdjan 'Zika' Todorovic, Braca Katic",
					genres: "Comedy, Crime, Romance",
					review: "Great movie. Nobody believes me! Go watch it! Alone! It's a madness."
				}
			],
				favBooks: [
				{
					title: "The Karamazov Brothers",
					author: "Fyodor Dostoevsky",
					year: 1880,
					characters: ["Dmitri Fyodorovich Karamazov", "Ivan Fyodorovich Karamazov", "Alexei Fyodorovich Karamazov", "Pavel Fyodorovich Smerdyakov", "Father Zosima", "Agrafena Alexandrovna Svetlova"],
					review: "I think Rockstar games inspired from this book when they made Grand Theft Auto Five, because it's the same type of storytelling built around three brothers. If you played Grand Theft Auto, you will definetly read The Karamazov Brothers."
				},
				{
					title: "Brave New World",
					author: "Aldous Huxley",
					year: 1932,
					characters: ["Bernard Marx", "John", "Helmholtz Watson", "Lenina Crowne"],
					review: "A perfect world. Until you discover it's darkest secrets."
				}
			],
				favSongs: [
				{
					artist: "Desiigner",
					title: "Panda",
					genres: ["trap"],
					review: "White X6, Phantom, Black X6 Looks Like a Panda."
				},
				{
					artist: "Brockhampton",
					title: "FACE",
					genres: ["hip-hop"],
					review: "What is this piece of heaven?"
				},
				{
					artist: "Vulfpeck",
					title: "Dean Town",
					genres: ["funck"],
					review: "Masterpiece!"
				}]
		}
		},
		{
			name: "Mario Gugu",
			birthday: {year: 2002, month: 1, day: 28},
			location: {country: "Romania", city: "Craiova"},
			codingLevel: 15,
			colours: {
				primary: {
					red: 24,
					green: 224,
					blue: 208,
				},
				secondary: {
					red: 0,
					green: 0,
					blue: 128,
				}
			},
			favorites: {favMovies : [ 
				{ 
					title: "The Dark Knight",
					year: 2008,
					rating: 9.0,
					directors: ["Christopher Nolan"],
					writers: ["Christopher Nolan", "David Goyer", "Jonathan Nolan"],
					stars: ["Heath Ledger", "Christian Bale", "Gary Oldman", "Michael Caine", "Aaron Eckhart", "Morgan Freeman", "Cillian Murphy"],
					genres: ["Action", "Crime", "Superhero", "Mystery", "Adventure", "Thriller", "Drama", "Neo-noir"],
					review: "An intense and thrilling movie to watch that is woth every minute. The main villain is the variant of The Joker that everybody looks up to and the hero is Batman played by no other than Christian Bale"
				},
				{ 
					title: "The Lord of the Rings: The Fellowship of the Ring",
					year: 2001,
					rating: 8.8,
					directors: ["Peter Jackson"],
					writers:"J. R. R. Tolkien",
					stars:["Elijah Wood", "Orlando Bloom", "Sean Austin", "Viggo Mortensen"],
					genres: ["Fanatsy Fiction", "Heroic fantasy", "High fantasy", "Adventure fiction", "Chrivalric romance"],
					review: "A special movie that turned around the standards of movies in the cinematography world also being a captivating world and action"
				},
				{ 
					title: "Pirates of the Caribbean: Dead Man's Chest",
					year: 2006,
					rating: 7.3,
					directors: ["Gore Verbinski"],
					writers: ["Johnny Depp", "Hans Zimmer", "Jerry Bruckheimer", "Jonathan Pryce", "Ted Elliott"],
					stars: ["Johnny Depp", "Orlando Bloom", "Bill Nighy", "Keira Knightley", "Naomi Harris", "Stellan Skarsgard"],
					genres: ["Action", "Adventure", "Comedy", "Fantasy", "Swashbuckler"],
					review: "If you like pirates and a little bit of fun combined with comedy, but also with possible life tales this is the right movie to watch! A wonderful story-telling movies that you can watch with your family" 
				},
				{ 
					title: "Togo",
					year: 2019,
					rating: 7.9,
					directors: ["Ericson Core"],
					writers: ["Kossi Efoui", "Tete-Michel Kpomassie", "Senouvo Agbota Zinsou"],
					stars: ["Willem Dafoe", "Julianne Nicholson"],
					genres: ["Action", "Drama", "Romance", "Comedy"],
					review: "A relaxing and dramatic movie that you can definetly watch after a stressful day at work"
				}],
				favBooks: [{
                    title: "The Witcher The Last Wish",
                    author: "Andrzej Sapkowski",
                    year: 1993,
                    characters: ["Geralt of Rivia", "Yennefer", "Nenneke", "Nivellen"],
					review: "An impressive story that you will live togheter with the mighty Geralt of Rivia along wonderful characters and places"
                 },
                 {
                    title: "The Lord of the Rings:The Fellowship of the Ring",
                    author: "J. R. R. Tolkien",
                    year: 1954,
                    characters: ["Frodo Baggins", "Aragorn", "Gandalf", "Gollum"],
					review: "A delightful story written by J.R.R. Tolkien that needs to be read at any times of your life"
                 } ],
				 favSongs: [
				{
					artist: "Scorpions",
					title: "Rock Believer",
					genres: ["Heavy metal", "Hard rock", "Rock"],
					review: "A reminder that Scorpions are still the band that we have known over the years with one of their emblematic songs"
				},
				{
					artist: "Powerwolf",
					title: "Armata Strigoi",
					genres: ["Heavy metal", "Hard rock"],
					review: "A delightful song for any rock listeners over the wolrd especially for the metal ones"
				},
				{
					artist: "Black Sabbath",
					title: "Black Bloody Sabbath",
					genres: ["Heavy metal"],
					review :"The pioneers of the metal rock world delivered a classic song that needs to be listened to"
				}]
			},
		},
		{
			name: "Tudor",
			birthday: {year: 2001, month: 4, day: 22},
			location: {country: "Romania", city: "Sibiu"},
			codingLevel: 60,
			colours: {
				primary: {
					red: 235,
					green: 97,
					blue: 17,
				},
				secondary: {
					red: 0,
					green: 0,
					blue: 255,
				}
			},
			favorites: {favMovies: [
				{
					title:"Forrest Gump",
					year:1994,
					rating:8.8,
					directors:["Robert Zemeckis"],
					writers:["Winston Groom", "Eric Roth"],
					stars:["Tom Hanks","Robin Wright","Gary Sinise"],
					genres:["Drama","Romance"],
					review: "Heartwarming story of a simple man goint through so many challenges in life. I really enjoyed this movie as the main character kept going on chasing his current dream no matter how big the challenge was."
				},
				{
					title:"Dumbo",
					year:1941,
					rating:7.2,
					directors:["Samuel Armstrong","Norman Ferguson"],
					writers:["Joe Grant", "Dick Huemer"],
					stars:["Sterling Holloway", "Edward Brophy", "Herman Bing"],
					genres:["Animation", "Adventure", "Drama"],
					review: "The movie starts with a sad scene showcasing the mother-son love. Later the different baby elephant uses his weird assets in his advantage and finds out that you can fly no matter what others believe about you. "
				},
				{
					title:"Spider-Man: Into the Spider-Verse",
					year:2018,
					rating:8.4,
					directors:["Bob Persichetti","Peter Ramsey","Rodney Rothman"],
					writers:["Phil Lord"],
					stars:["Shameik Moore","Jake Johnson","Hailee Steinfeld"],
					genres:["Animation", "Action", "Adventure"],
					review: "The movie showcases a normal boy who is bitten by a toxic spider and receives spider abilities. How he manages to fight the evil assisted by him from different dimensions is a really nice story."
				},
				{
					title:"The Conjuring",
					year:2013,
					rating:7.5,
					directors:["James Wan"],
					writers:["Chad Hayes", "Carey W. Hayes"],
					stars:["Patrick Wilson","Vera Farmiga","Ron Livingston"],
					genres:["Horror","Mystery","Thriller"],
					review: "The constant chill and fears you get while watching this movie is exalting."
				}
			], favBooks: [
				{
					title: "Harry Potter", 
					author: "J.K. Rowling", 
					year: 1997, 
					isNewerThan2000: false, 
					age: 2023 - 1997, 
					characters: ["Harry Potter", "Rubeus Hagrid", "Hermione Granger", "Ron Weasley"],
					review: "The story of a chosen boy who repeteadly fights and wins against the most powerful and evil wizards of them all."
				},
				{
					title: "Fantastic Beasts and Where to Find Them", 
					author: "J.K. Rowling", 
					year: 2001, 
					isNewerThan2000: true, 
					age: 2023 - 2001, 
					characters: ["Newt Scamander", "Albus Dumbledore", "Gellert Grindelwald", "Jacob Kowalski"],
					review: "The laughs you get watching Newt experiencing his adventures and the story itself is a masterpiece."
				}
			], favSongs: [
				{
					artist: "Metallica",
					title: "Wherever I May Roam",
					genres: ["Heavy metal", "Hard rock", "Rock"],
					review: "This songs gives such a freedom feeling, it just forces you to listen to it on repeat"
				},
				{
					artist: "Skrillex",
					title: "Supersonic",
					genres: ["EDM", "Electronic Music", "Wave"],
					review: "The sounds you hear throughout the song are from another world."
				},
				{
					artist: "Halogenix",
					title: "Independent",
					genres: ["Drum & Bass", "Electronic Music"],
					review: "The vocals and the beat are mixed in together so well and it just sounds amazing."
				}]
		}
	},
]
}

let averageAge = 0;
let youngestMember = ourTeam.members[0];
let averageCodingLevel = 0
let oldestMember = ourTeam.members[0];

for (let i = 0; i < ourTeam.members.length; i++)
{
	if (ourTeam.members[i].birthday.year > youngestMember.birthday.year)
	{
		youngestMember = ourTeam.members[i];
	}
	else if (ourTeam.members[i].birthday.year < oldestMember.birthday.year)
	{
		oldestMember = ourTeam.members[i];
	}
	averageAge += (2023 - ourTeam.members[i].birthday.year)
}

youngestMember = youngestMember.name
oldestMember = oldestMember.name

let location = {};

for (let i = 0; i < ourTeam.members.length; i++)	
{
	averageCodingLevel += ourTeam.members[i].codingLevel
	if(location[ourTeam.members[i].location.city] == null)
		location[ourTeam.members[i].location.city] = ourTeam.members[i].name
	else{
		location[ourTeam.members[i].location.city] += ", " + ourTeam.members[i].name
	}
}

averageAge /= ourTeam.members.length
averageCodingLevel /= ourTeam.members.length



// Find out if there are common music genres

// There is a commonGenres variable the value of which is an object. The keys of the object are genre names.

// The values of all genre name keys are the number of times the genre is found in the favorite music of the members.

let commonGenres = {};

for (let i = 0; i < ourTeam.members.length; i++)
{
	for (const x of ourTeam.members[i].favorites.favSongs)
	{
		for(const y of x.genres)
		{
			if (commonGenres[y.toUpperCase()] == null)
			{
				commonGenres[y.toUpperCase()] = 1;
			}
			else
			{
				commonGenres[y.toUpperCase()] += 1;
			}
		}
	}
}


let max = 0
let genreAux = " "
for(const x in commonGenres){
	if(commonGenres[x] > max){
		max = commonGenres[x]
		genreAux = x
	}
}

console.log(typeof(ourTeam))

let toExport;

try {
	//{ourTeam, averageAge, youngestMember, location, }
	toExport = [
		{ name: "ourTeam", content: ourTeam, type: "object" },
		{ name: "averageAge", content: averageAge, type: "number" },
		{ name: "averageCodingLevel", content: averageCodingLevel, type: "number" },
		{ name: "youngestMember", content: youngestMember, type: "string" },
		{ name: "oldestMember", content: oldestMember, type: "string" },
		{ name: "location", content: location, type: "object" },
		{ name: "commonGenres", content: commonGenres, type: "object" }
	]

} catch (error) {
	toExport = { error: error.message }
}

export { toExport };
