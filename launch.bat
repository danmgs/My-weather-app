@ECHO OFF
TITLE launch.bat - Angular WebApp

SET interactive=1
IF %ERRORLEVEL% == 0 SET interactive=0

IF "%1"=="logs" (
    IF "%2"=="" (
        ECHO Showing logs ^(mongo-service^|^|app-backend^|^|app-frontend^)
        GOTO End
    )
    IF "%2"=="mongo-service" (
        ECHO Showing logs from the mongo-service container...
        docker-compose logs -f mongo-service
        GOTO End
    )
    IF "%2"=="app-backend" (
        ECHO Showing logs from the app-backend container...
        docker-compose logs -f app-backend
        GOTO End
    )
    IF "%2"=="app-frontend" (
        ECHO Showing logs from the app-frontend container...
        docker-compose logs -f app-frontend
        GOTO End
    ))


IF "%1"=="up" (
    ECHO Launching...
    ECHO If this is your first time starting the project this might take a minute...

    docker-compose up -d --build
    ECHO Opening tabs in browser...
    timeout /t 10 /nobreak > NUL
    START "" http://localhost
    START "" http://localhost:30001/api/serverhealth
    GOTO End
)

IF "%1"=="down" (
    ECHO Stopping and removing running sandbox containers...
    docker-compose down
    GOTO End
)

ECHO commands:
ECHO   up           -^> spin up the sandbox environment
ECHO   down         -^> tear down the sandbox environment
ECHO.
ECHO   logs  ^(mongo-service^|^|app-backend^|^|app-frontend^) -^> stream logs for the specified container

:End
IF "%interactive%"=="0" PAUSE
EXIT /B 0
