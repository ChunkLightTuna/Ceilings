#!/bin/bash
args=("$@")
name=${args[0]}

cd ./pdf

echo "converting pdf to png"
pdftoppm -gray -png $name $name

echo "compressing pngs"
pngquant -s10 -- $name-*.png

echo "moving pngs to static/img/processed"
for png in $name-*-fs8.png; do
  mv $png ../static/img/processed/
done

echo "cleanup"
for match in $name*; do
  rm $match
done
