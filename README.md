# CNID Tech Test

Online at [cnid.herokuapp.com](http://cnid.herokuapp.com/).

## Decisional reasoning / Points of note

- Within the time allowance it made most sense to me to approach this with a simple server side solution. I find it easier to explain why not client side so:
  - no need to implement any FE routing (history.pushState, including things like handling a user landing on an active article url rather than landing on the root)
  - or use a framework to get FE routing
  - no time lost configuring any complex build / transpiling process if necessary (which would usually be the case with any framework - configuring webpack could take 20-30mins+ alone)
  - my first thought when reading the the test was actually "this doesn't require any FE JS", hence my solution here.

- I've used supertest to test this which I'm aware _isn't really unit testing_, however I noticed there was a `test` folder in the repo and didn't want anyone to think I totally ignored it.
  - I would've pulled out my route controllers for testing but there's pretty much no logic in them
  - I'm aware a client side solution would have contained far more code, all of which would've allowed me to demonstrate more testing

- Strange things / other thoughts
  - I wouldn't usually load/parse/maniuplate a JSON file when initialising an app. Let's please assume this would be in a db and accessed via an API in more typical circumstances.
  - I'm aware I'm sending all the data for the contents page when only an array of titles/image urls/slugs is necessary. This isn't ideal but could be corrected easily.
  - In the article.pug block, I wanted to use a map of pug mixins, then just use the block.type as a key and throw the body into the looked up mixin. I couldn't figure out how to do this with pug so just left the if/else ifs. Sorry, I know they're not pretty!

## Other work

For better examples of both fe and be JS, feel free to dip into the below, but take into account they're all WIP:

- [Junip](https://github.com/tomhardman0/junip)
- [Junip CMS](https://github.com/tomhardman0/junip-cms)

Both the above were/are exercises in learning new things, so you'll come across some peculiarities but there's definitely more JS to see.
