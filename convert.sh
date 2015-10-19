#!/bin/bash
args = ("$@")

NAME = ${args[0]}

cd ./pdf
pdftoppm -gray -png $NAME $NAME

pngquant -s10 -- $NAME-*.png
mv $NAME-*-fs8.png static/img/processed/

rm $NAME*
