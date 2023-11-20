# Useful Tips when using dotnet commands

dotnet tool install --global dotnet-ef --version 7.0.9
dotnet tool list -g (see what is installed on your global tool list)
dotnet ef migrations add IntialCreation -o Data/Migrations (puts your migrations into a folder named migrations)
dotnet ef drop (delete db)
dotnet ef update (update db)
dotnet ef migrations remove (removes last migration)

## Create an Web API application

dotnet --info
dotnet new list

dotnet new sln
dotnet new webapi -n API

dotnet new sln -h
dotnet sln add API/net 

dotnet sln list
dotnet watch --no-hot-reload (more reliable than hot reload)

### Angular CLI Commands
  

  ng new {name} routing ? and styling ?

  ng add ngx-bootstrap
  