@echo off
setlocal EnableExtensions

cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo.
  echo  Node.js was not found.
  echo  Install it from https://nodejs.org/ and run this script again.
  echo.
  pause
  exit /b 1
)

echo Node version:
node --version
echo.

if not exist "node_modules\" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo.
    echo  npm install failed.
    echo  If the project is in OneDrive, try moving it to a local folder like C:\Projects
    echo.
    pause
    exit /b 1
  )
)

echo.
echo Starting Pavilion Configurator...
echo Open http://localhost:5173 in your browser.
echo Press Ctrl+C to stop the server.
echo.

start "" "http://localhost:5173"
call npm run dev
