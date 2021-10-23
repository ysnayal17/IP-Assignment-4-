import React from "react";

const Home = () => {
    return(
        <> 
        <body className="d-flex h-100 text-center text-white bg-dark">
        <div className="row">

        <iframe width="100%" height="70%"
        src="https://www.youtube.com/embed/OUKGsb8CpF8?showinfo=0&controls=0&mute=1&loop=1&autoplay=1;modestbranding">
        </iframe>
        
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">                   
        <main className="px-3 header">
            <h1>Welcome to Soccer World!!</h1>
            <p className="lead w-20">
                This website let's you be up to date with the best sports in the World.
                Get to know about your favourite player, clubs, coach and many more in a fun way.
            </p>
            <p className="lead">
            <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white btn-content">Learn more</a>
            </p>
        </main>
        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://i.pinimg.com/originals/43/08/63/43086350644467b02d6ee1d45e4410b4.gif" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://media3.giphy.com/media/3ohs7RkcDquVXo5uSY/giphy.gif" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://c.tenor.com/rR0kkA0THW8AAAAC/mbapp%C3%A9om-kylian-mbapp%C3%A9.gif" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://c.tenor.com/2NJYWiMVrQAAAAAd/corner-taken-quickly-football.gif" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="http://gifscenter.com/wp-content/uploads/2017/05/Funny%20Football%20Gifs%20Free%20Download.gif" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://i.gifer.com/ClJS.gif" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://i.gifer.com/FpEx.gif" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://i.pinimg.com/originals/c3/db/42/c3db42087dd1044ef43d692383b92ca7.gif" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="http://cdn.funnyisms.com/83bc9bf8-67cc-437e-a4cb-0527b8f699fe.gif" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        <footer className="mt-auto text-white-50">
            <p>Cover template by <a href="https://twitter.com/" className="text-white">@YogeshSinghNayal05</a>.</p>
        </footer>
        </div>
        </div>

        </body>
        </>
    );

};

export default Home;