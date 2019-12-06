@echo off
"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command Start-Process '%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe' -ArgumentList '-NoProfile -InputFormat None -ExecutionPolicy Bypass -Command iex ((New-Object System.Net.WebClient).DownloadString(''https://chocolatey.org/install.ps1'')); choco upgrade -y python2 chocolatey-visualstudio.extension chocolatey-core.extension chocolatey-windowsupdate.extension visualstudio-installer chocolatey-dotnetfx.extension visualstudio2017-workload-vctools; choco uninstall nodejs; choco install nodejs --version=12.9.1; Read-Host ''Type ENTER to continue'' ' -Verb RunAs

"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser

@echo **********************************
@echo opening git bash, once open type this command and exit:
@echo npm install expo-cli --global
@echo **********************************
"C:\Program Files\Git\git-bash.exe" --cd-to-home

@echo If any errors occured, copy them and ask for help
pause