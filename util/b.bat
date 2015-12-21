@echo off
dir ts /s /b > ts-files
tsc @ts-files --outFile js\out.js
del ts-files

dir /b *.dml | dream
