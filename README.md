# What is This ?

This repository is a tool to remotely deploy and test your project.

## Set Secrets

Ensure you have set the following secrets:

- `SERVER_HOST`
- `SERVER_USER`
- `SERVER_SSH_KEY`
- `SERVER_PORT`
- `SERVER_PATH`

## Actions

1. **Push to `main`**:  
   Executes

   ```zsh
   docker compose down
   docker compose build --no-cache
   docker compose up -d
   ```

   - Make sure your `docker` command's path is `/usr/local/bin/docker`

2. **Issue Comment `refresh`**:  
   Executes `git pull` on your repository. This is useful for applying changes in volumes mounted to Docker or other updates.

---

This is just a template; you can modify and customize it to match your environment.

Feel free to use it!
