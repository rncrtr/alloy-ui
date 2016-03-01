# How to use this app

## Getting Started
run this first to be sure everything is up to date/installed.
    
```
npm i
```

## Locations
- src = source files to develop with
- dist = distribution, meant to be run on the server
- gulpfile.js = build instructions for gulp
- server.js = simple node server to run the app for your viewing pleasure

## To build this app, type:
```
gulp
```
This will take all the files in src/ and build them into dist, linking them to the index.html for you.

## To watch files for changes and automatically rebuild when changes are saved:
```
gulp watch
```

## To start the app for viewing in the browser, type:
```
gulp serve
```
This will run whatever is in dist.

## Adding Dependencies to the build (JS/CSS/SASS, more types can be added)

1. Be sure you've installed your package(s) via npm like this:
```
npm i package-name --save 
```
Note: replace __package-name__ above with your actual package's name, ex. __angular__

Your package will now appear in the node_modules folder.

2. Once installed, simply copy to the source folder like this:
```
cp node_modules/mypackage/myfile.js src/js
```
Note: replace __mypackage__ and __myfile.js__ with your actual package/file names

You should see the files in the src/js src/css or src/sass folders respectively. You can add more types of files in there too by following the same structure, ie. img, fonts, etc.