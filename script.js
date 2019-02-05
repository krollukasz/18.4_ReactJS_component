"use srtict";

var movies = [
  {
    id: 1,
    title: "Szybcy i wściekli 1",
    desc: "Film o nielegalnych wyścigach samochodowych",
    premiere: "Data premiery: 2001",
    img: "https://i.wpimg.pl/730x0/m.autokult.pl/the-fast-and-the-furious-b526f8e.jpg"
  },   
  {
    id: 2,
    title: "Szybcy i wściekli 2",
    desc: "Film o nielegalnych wyścigach samochodowych",
    premiere: "Data premiery: 2003",
    img: "https://ssl-gfx.filmweb.pl/po/49/22/34922/7129428.3.jpg"
  },
  {
    id: 3,
    title: "Szybcy i wściekli 3",
    desc: "Film o nielegalnych wyścigach samochodowych",
    premiere: "Data premiery: 2006",
    img: "https://static.punkt44.pl/grafika/produkty/midi/99468_0006.jpg"
  },
  {
    id: 4,
    title: "Szybcy i wściekli 4",
    desc: "Film o nielegalnych wyścigach samochodowych",
    premiere: "Data premiery: 2009",
    img: "https://images6.alphacoders.com/403/403460.jpg"
  },
  {
    id: 5,
    title: "Szybcy i wściekli 5",
    desc: "Film o nielegalnych wyścigach samochodowych",
    premiere: "Data premiery: 2011",
    img: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/a10d98a4-9b27-11e6-a408-00163ed833e7/2039077055/tapety-szybcy-i-wsciekli-5-screenshot.jpg"
  },
  {
    id: 6,
    title: "Szybcy i wściekli 6",
    desc: "Film o nielegalnych wyścigach samochodowych",
    premiere: "Data premiery: 2013",
    img: "http://www.entertainmentwallpaper.com/images/desktops/movie/fast-and-furious-6-09.jpg"
  },
  {
    id: 7,
    title: "Szybcy i wściekli 7",
    desc: "Film o nielegalnych wyścigach samochodowych",
    premiere: "Data premiery: 2015",
    img: "https://1.fwcdn.pl/an/49468/2015/69000_1.12.jpg"
  },
  {
    id: 8,
    title: "Szybcy i wściekli 8",
    desc: "Film o nielegalnych wyścigach samochodowych",
    premiere: "Data premiery: 2017",
    img: "https://1.fwcdn.pl/an/np/49468/2017/8821.7.jpg"
  }
];

var Movie = React.createClass({ // stworzenie klasy
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement("li", {}, 
        React.createElement(MovieTitle, {title: movies.title}),
        React.createElement(MovieImage, {image: movies.image}),
        React.createElement(MovieDescription, {title: movies.desc})
      )
    )
  },
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement("h2", {}, this.props.title)
    )
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement("p", {}, this.props.title)
    )
  },
});

var MovieImage = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement("img", {src: this.props.image})
    )
  },
});

var Movies = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function() {
    var movieElement = this.props.movies.map(function(movie) {
      return React.createElement(Movie, {
        key: movie.id,
        movie: movie
      })
    });

    return React.createElement("ul", {}, movieElement)
  }
});

var element = React.createElement("div", {},
  React.createElement("h1", {}, "Lista filmów"),
  React.createElement(Movies, {movies: movies})
);

ReactDOM.render(element, document.getElementById("app"));



// var element = React.createElement(Movies, {movies: movies});
// ReactDOM.render(element, document.getElementById("app"));


//     React.createElement("h2", {}, movie.title),
//     React.createElement("p", {}, movie.desc),
//     React.createElement("p", {}, movie.premiere),
//     React.createElement("img", {src: movie.img},)
//   );
// });

// var element = 
//   React.createElement("div", {},
//     React.createElement("h1", {}, "Lista filmów"),
//     React.createElement("ul", {}, moviesElements)
//   );


