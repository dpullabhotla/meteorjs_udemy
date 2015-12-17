@echo off
SETLOCAL
SET METEOR_INSTALLATION='/c/Users/dp8283/AppData/Local/.meteor'
"/c/Users/dp8283/AppData/Local/.meteor/packages/meteor-tool/1.1.10/mt-os.windows.x86_32/meteor.bat" %*
ENDLOCAL
EXIT /b %ERRORLEVEL%
rem /c/Users/dp8283/AppData/Local/.meteor/packages/meteor-tool/1.1.10/mt-os.windows.x86_32/meteor.bat
