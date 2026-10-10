@echo off
REM Gun Game launcher. Solo play and HOSTING work straight from the file.
REM A local server (if Python is installed) also works; for friends to join by LINK, upload this folder to an https static host.
cd /d "%~dp0"
where python >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:8765/index.html
  python -m http.server 8765
) else (
  start "" "%~dp0index.html"
)
