# Use an official MySQL image as the base image
FROM mysql:latest

# Set environment variables
ENV MYSQL_DATABASE="examen"
ENV MYSQL_ALLOW_EMPTY_PASSWORD = "mysqlserver"

# Copy the SQL file into the docker-entrypoint-initdb.d directory
COPY examen.sql /docker-entrypoint-initdb.d/

# Expose MySQL port
EXPOSE 3306