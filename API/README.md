# Useful Tips when using dotnet commands

dotnet tool install --global dotnet-ef --version 7.0.9
dotnet tool list -g (see what is installed on your global tool list)
dotnet ef migrations add IntialCreation -o Data/Migrations (puts your migrations into a folder named migrations)
dotnet ef drop (delete db)
dotnet ef update (update db)

## Create an Web API application

dotnet --info
dotnet new list

dotnet new sln
dotnet new webapi -n API

dotnet new sln -h
dotnet sln add API/net 

dotnet sln list

### Angular CLI Commands
  

  ng new {name} routing ? and styling ?

  