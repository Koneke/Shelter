@echo off
dir ts /s /b > ts-files
tsc @ts-files --outdir js
del ts-files

dir /b *.dml | dream
