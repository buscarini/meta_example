# meta_example

Example for the meta framework


Consists of a nodejs web service & an iOS app. The web services reads data from a csv file when the /import path is used. Then the app can load the data using the /books path. The entity models, the importer, the book service and the parser are generated automatically with meta.

## Web service

Uses nodejs, mongodb and mongoose