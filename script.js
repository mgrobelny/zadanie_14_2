var movies = [
	{	
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		pic: 'https://upload.wikimedia.org/wikipedia/cy/thumb/a/aa/Poster_Harry_Potter_and_the_Philosopher%27s_Stone.jpg/200px-Poster_Harry_Potter_and_the_Philosopher%27s_Stone.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		pic: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/The_Lion_King_poster.jpg/200px-The_Lion_King_poster.jpg'
	},
	{
		id: 3,
		title: 'X-Men',
		desc: 'Film o mutantach',
		pic: 'https://upload.wikimedia.org/wikipedia/hr/thumb/0/01/X2_poster_version2.jpg/200px-X2_poster_version2.jpg'
	},
	{
		id: 4,
		title: 'Igrzyska Śmierci',
		desc: 'Film o wizji przyszłości',
		pic: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Mockingjay_Part_2_Poster.jpg/200px-Mockingjay_Part_2_Poster.jpg'
	},
];


var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},

	render: function() {
		return ( 
			React.createElement('li', {},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDesc, {desc: this.props.movie.desc}),
				React.createElement(MovieImage, {img: this.props.movie.pic})
      )
    )
  }
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('h2', {}, this.props.title)
	}
})

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('p', {}, this.props.desc)
	}
})

var MovieImage = React.createClass({
	propTypes: {
		img: React.PropTypes.string.isRequired,
	},
	render: function() {
		return React.createElement('img', {src: this.props.img})
	}
})

var moviesElements = movies.map(function(movie) {
	return (
		React.createElement(Movie, {key:movie.id, movie: movie})
		)
});

var MovieList = React.createClass({
	render: function() {
		return (
			React.createElement('ul', {}, moviesElements)
			)
	}
});

var element = React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement(MovieList, {})
	);

ReactDOM.render(element, document.getElementById('app'));