Function Install-Nodejs() {
    $nodeJsExePath = "C:\Program Files\nodejs\node.exe"
    if ((Test-Path $nodeJsExePath)) {
        Write-Output "Nodejs already installed."
        return;
    }
    Write-Output "Downloading nodejs"
    Invoke-WebRequest -Uri https://nodejs.org/dist/v8.12.0/node-v8.12.0-x64.msi -OutFile C:\node-installer.msi
    Write-Output "Starting node installation"
    Start-Process msiexec.exe -Wait -ArgumentList "/I ${$env:TEMP}\node-installer.msi /quiet" -NoNewWindow
    Write-Output "Node install finished"
}
Function Install-Vscode() {
    $codeCmdPath = "C:\Program Files (x86)\Microsoft VS Code\bin\code.cmd"
    if (Test-Path $codeCmdPath) {
        Write-Output "VsCode already installed."
        return;
    }
    Write-Output "Downloading vscode"
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Invoke-WebRequest -Uri https://vscode-update.azurewebsites.net/latest/win32/stable -OutFile $env:TEMP\vscode-stable.exe
    Write-Output "Installing vscode"
    Start-Process -Wait $env:TEMP\vscode-stable.exe -ArgumentList /silent, /mergetasks=!runcode
    Write-Output "vscode finished "
}
Function Refresh-Path () {
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User") 

}

Function Install-Git () {
    $gitExePath = "C:\Program Files\Git\bin\git.exe"
    if (Test-Path $gitExePath) {
        Write-Output "Git already installed."
        return;
    }
    Write-Output "Downloading git installer"
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Invoke-WebRequest -Uri https://github.com/git-for-windows/git/releases/download/v2.19.1.windows.1/Git-2.19.1-64-bit.exe -OutFile $env:TEMP\install-git.exe
    $install_args = '/SILENT /COMPONENTS="icons,ext\reg\shellhere,assoc,assoc_sh"';
    Write-Output "Running git installer"
    Start-Process -Wait $env:TEMP\install-git.exe -ArgumentList $install_args
    Write-output  "Finished installing git"

}


Install-Nodejs
Install-Git 
#vscode must come last or it won't detect the git/nodejs on install
Install-Vscode

Refresh-Path


Function Create-Line ($software, $version) {
    return New-Object psobject -Property @{
        'Software' = $software
        'Version' = $version
    }
}


$node = node --version
$code = code --version
$git = git --version
$npm = npm --version
$versions = @(
    (Create-Line -software Nodejs -version $node),
    (Create-Line -software Npm -version $npm),    
    (Create-Line -software VsCode -version $code),
    (Create-Line -software Git -version $git)
)

$versions | Format-Table -Property Software, Version


mkdir C:\learn_code
cd C:\learn_code
git clone https://github.com/timothy-mcroy/tutorials.git
cd tutorials
git pull
git branch development/$env:USERNAME master
git checkout development/$env:USERNAME
code C:\learn_code\tutorials