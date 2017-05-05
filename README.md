
# Chef-Interpreter
A web service for easier access to the esoteric language Chef

## Dependencies
Perl, cpan and nodejs

## Installation

- Run `sudo cpan` on the command line. *It'll configure itself for a while*. 

NOTE! If you don't want to use sudo, take a look at `cpanm` and `local::lib`. I won't, because I'm lazy.

- At the `cpan>`-prompt, run `install Acme::Chef`. It'll download the package required.

###### Hint: After the Acme::Chef is installed, you should be able to use `chef recipe.chef` from the command line.

- Clone this repo, run `npm install` and `bower install`.
- Run `node server.js` to start the service! It's available at localhost.

