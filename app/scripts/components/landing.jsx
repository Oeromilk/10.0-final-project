var React = require('react');
var TweetEmbed = require('react-tweet-embed');

var Template = require('./templates/template.jsx').Template;

var Article = React.createClass({
  render: function(){
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1 className="text-center">The Fan Who Caught A Rod's 3,000th Hit</h1>
        <div className="row">
          <div className="col-md-6">
            Like most baseball fans history and stats are something that we like to follow
            and keep up with. As an fan you always love watching a player hit a homerun,
            espically if that player is one of your favorites.
            <br />
            Seeing those players hit a home run was only half of the enjoyment for me. Watching
            a lucky fan catch that home run and celebrate like he hit himself has always brought
            me joy. What if there was a way to increase your odds in catching that homerun you
            have always been wanting to.
            <br />
            In comes Shelf, an application design to keep track of homeruns once they have
            been caught and gone to souvenir city. Shelf is a place to keep track of your homeruns
            that you have caught as well as seeing other users and the homeruns they have caught.
            <br />
            <img src={"../../images/rod-3000th-hit-souvenir-baseball.jpg"} alt="A Rod's 3000th hit" className="img-rounded" />
          </div>
          <div className="col-md-6">
            Watching my favorite team play the yankees in 2015, I saw history being made
            right before my eyes. Alex Rodriguez hit a homerun for his 3,000th hit off of
            Justin Verlander of the Detroit Tigers. What made this moment more historic was
            the fan that caught the ball. He placed himself in the best position to catch that ball.
            <br />
            Zack Hample has caught more than 8,000 baseballs and even wrote a book about it.
            He posts video on <a target="_blank" href="https://www.youtube.com/user/zackhample">YouTube</a> of
            him catching and visiting ballparks all across America. He even shares his moments
            and thoughts on <a target="_blank" href="https://twitter.com/zack_hample">Twitter</a> about his
            adventures catching souvenirs.
            <br />
            This is the catch that got me thinking about an application of tracking homeruns caught.
            <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Here&#39;s A-Rod&#39;s 3,000th hit/ball. Told the <a target="_blank" href="https://twitter.com/Yankees">@Yankees</a> I&#39;m keeping it. Got it authenticated by <a target="_blank" href="https://twitter.com/MLB">@MLB</a>. This is un-REAL.
            <a target="_blank" href="http://t.co/qEo2qX9Iru">pic.twitter.com/qEo2qX9Iru</a></p>&mdash; Zack Hample (@zack_hample) <a target="_blank" href="https://twitter.com/zack_hample/status/612061267122102272">June 20, 2015</a>
            </blockquote>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            Are you ready to add homeruns to your shelf? Follow the button below to
            create an account and then sign in so you can start tracking your
            caught homeruns.
            <br />
            There are a few features we can offer. You can search by date to find a list
            of games and once you find the game you were at you will be able to click it,
            once clicked it will show all the home runs, if any, hit for that game. You
            will then be shown a form to fill out some information to help us track where
            people are sitting in the stadium when the ball was caught.
            <br />
            Click the button below to get started!
            <br />
            <a href="#signup/" className="btn btn-primary">Take me to sign up</a>
          </div>
        </div>
      </div>
    )
  }
});

var LandingContainer = React.createClass({
  render: function(){
    return (
      <Template>
        <Article />
      </Template>
    )
  }
});

module.exports = {
  LandingContainer: LandingContainer
};
