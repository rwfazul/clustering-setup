docker-compose up -d --scale app=2 --scale frontend=2

# View logs: $ docker-compose logs -f -t 
# Shutdown: $ docker-compose down 

# Restart specific service/container: $ docker-compose restart <service_name> 
# View logs of specific service/container: $ docker-compose logs -f -t <service_name>
# ...
