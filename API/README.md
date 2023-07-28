# Useful Tips when using dotnet commands

dotnet tool install --global dotnet-ef --version 7.0.9
dotnet tool list -g (see what is installed on your global tool list)
dotnet ef migrations add IntialCreation -o Data/Migrations (puts your migrations into a folder named migrations)
dotnet ef drop (delete db)
dotnet ef update (update db)
  