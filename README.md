# Version de SONARQUBE: 9.4.0.54424
## carpeta genrada por sonar .scannerwork

# Open MCT [![license](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/nasa/openmct.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/nasa/openmct/context:javascript) [![codecov](https://codecov.io/gh/nasa/openmct/branch/master/graph/badge.svg?token=7DQIipp3ej)](https://codecov.io/gh/nasa/openmct) [![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/b2e34b17/openmct) [![npm version](https://img.shields.io/npm/v/openmct.svg)](https://www.npmjs.com/package/openmct) 

Open MCT (Open Mission Control Technologies) is a next-generation mission control framework for visualization of data on desktop and mobile devices. It is developed at NASA's Ames Research Center, and is being used by NASA for data analysis of spacecraft missions, as well as planning and operation of experimental rover systems. As a generalizable and open source framework, Open MCT could be used as the basis for building applications for planning, operation, and analysis of any systems producing telemetry data.

Please visit our [Official Site](https://nasa.github.io/openmct/) and [Getting Started Guide](https://nasa.github.io/openmct/getting-started/)

Once you've created something amazing with Open MCT, showcase your work in our GitHub Discussions [Show and Tell](https://github.com/nasa/openmct/discussions/categories/show-and-tell) section. We love seeing unique and wonderful implementations of Open MCT!

## See Open MCT in Action

Try Open MCT now with our [live demo](https://openmct-demo.herokuapp.com/).
![Demo](https://nasa.github.io/openmct/static/res/images/Open-MCT.Browse.Layout.Mars-Weather-1.jpg)

1. Clone the source code

 `https://github.com/CarolinaAdrianaHidalgoAvila/NASA.git`

2. Install development dependencies. Note: Check the package.json engine for our tested and supported node versions.

 `npm install`

3. Run a local development server

 `npm start`

Open MCT is now running, and can be accessed by pointing a web browser at [http://localhost:8080/](http://localhost:8080/)

## Documentation

Documentation is available on the [Open MCT website](https://nasa.github.io/openmct/documentation/).


## Building Applications With Open MCT

Open MCT is built using [`npm`](http://npmjs.com/) and [`webpack`](https://webpack.js.org/).

See our documentation for a guide on [building Applications with Open MCT](https://github.com/nasa/openmct/blob/master/API.md#starting-an-open-mct-application).


# Glossary

Certain terms are used throughout Open MCT with consistent meanings
or conventions. Any deviations from the below are issues and should be
addressed (either by updating this glossary or changing code to reflect
correct usage.) Other developer documentation, particularly in-line
documentation, may presume an understanding of these terms.

* _plugin_: A plugin is a removable, reusable grouping of software elements.
  The application is composed of plugins.
* _composition_: In the context of a domain object, this refers to the set of
  other domain objects that compose or are contained by that object. A domain
  object's composition is the set of domain objects that should appear
  immediately beneath it in a tree hierarchy. A domain object's composition is
  described in its model as an array of id's; its composition capability
  provides a means to retrieve the actual domain object instances associated
  with these identifiers asynchronously.
* _description_: When used as an object property, this refers to the human-readable
  description of a thing; usually a single sentence or short paragraph.
  (Most often used in the context of extensions, domain
  object models, or other similar application-specific objects.)
* _domain object_: A meaningful object to the user; a distinct thing in
  the work support by Open MCT. Anything that appears in the left-hand
  tree is a domain object.
* _identifier_: A tuple consisting of a namespace and a key, which together uniquely
  identifies a domain object.
* _model_: The persistent state associated with a domain object. A domain
  object's model is a JavaScript object which can be converted to JSON
  without losing information (that is, it contains no methods.)
* _name_: When used as an object property, this refers to the human-readable
  name for a thing. (Most often used in the context of extensions, domain
  object models, or other similar application-specific objects.)
* _navigation_: Refers to the current state of the application with respect
  to the user's expressed interest in a specific domain object; e.g. when
  a user clicks on a domain object in the tree, they are _navigating_ to
  it, and it is thereafter considered the _navigated_ object (until the
  user makes another such choice.)
* _namespace_: A name used to identify a persistence store. A running open MCT 
application could potentially use multiple persistence stores, with the 

## Open MCT v2.0.0
Support for our legacy bundle-based API, and the libraries that it was built on (like Angular 1.x), have now been removed entirely from this repository.

For now if you have an Open MCT application that makes use of the legacy API, [a plugin](https://github.com/nasa/openmct-legacy-plugin) is provided that bootstraps the legacy bundling mechanism and API. This plugin will not be maintained over the long term however, and the legacy support plugin will not be tested for compatibility with future versions of Open MCT. It is provided for convenience only.

### How do I know if I am using legacy API?
You might still be using legacy API if your source code

* Contains files named bundle.js, or bundle.json,
* Makes calls to `openmct.$injector()`, or `openmct.$angular`,
* Makes calls to `openmct.legacyRegistry`, `openmct.legacyExtension`, or `openmct.legacyBundle`.


