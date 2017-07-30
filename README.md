# CNID Tech Test

Online at [cnid.herokuapp.com](http://cnid.herokuapp.com/).

## Decisional reasoning / Points of note

- Within the time allowance it made most sense to me to approach this with a simple server side solution. I find it easier to explain why not client side so:
  - no need to implement any FE routing (history.pushState, including things like handling a user landing on an active article url rather than landing on the root)
  - or use a framework to get FE routing
  - no time lost configuring any complex build / transpiling process if necessary (which would usually be the case with any framework - configuring webpack could take 20-30mins+ alone)
  - my first thought when reading the the test was actually "this doesn't require any FE JS", hence my solution here.

- I've used supertest to test this which I'm aware _isn't really unit testing_, however I noticed there was a `test` folder in the repo and didn't want anyone to think I totally ignored it.
  - Even the controllers in my routes have pretty much no logic
  - A client side solution would have contained far more code, all of which would've been testable
