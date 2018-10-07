# escape=`

FROM microsoft/dotnet-framework

ADD ./install.ps1 C:\install.ps1
SHELL ["powershell"]
RUN C:\install.ps1
RUN node --version