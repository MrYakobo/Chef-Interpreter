
# Chef-Interpreter

![Swedish Chef](SwedishChef.png)

A web service for easier access to the esoteric language Chef.

## Dependencies
Perl, cpan and nodejs

#### Disclaimer: These packages are going to be installed:
- [Materialize](http://materializecss.com/)
- [jquery](http://jquery.com/)
- [Handlebars](http://handlebarsjs.com/)
- [Acme::Chef](http://search.cpan.org/~smueller/Acme-Chef/lib/Acme/Chef.pm)
- [expressjs](https://expressjs.com/)

## Installation

- Run `sudo cpan` on the command line. *It'll configure itself for a while*. 

NOTE! If you don't want to use sudo, take a look at `cpanm` and `local::lib`. I won't, because I'm lazy.

- At the `cpan>`-prompt, run `install Acme::Chef`. It'll download the package required.

###### Hint: After the Acme::Chef is installed, you should be able to use `chef recipe.chef` from the command line.

- Clone this repo, run `npm install` and `bower install`.
- Run `node server.js` to start the service! It's available at localhost/your public ip.

---

A big thank you to Steffen Mueller for his hard work on the [Acme::Chef](http://search.cpan.org/~smueller/Acme-Chef/lib/Acme/Chef.pm) package. Without his hard work, this would not be possible.

And of course, a big thank you to David Morgan-Mar for creating the original language spec itself! Reference is available [here](http://www.dangermouse.net/esoteric/chef.html)
