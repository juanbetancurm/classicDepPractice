import multiprocessing

# Server Socket
bind = '127.0.0.1:8000'
backlog = 2048

# Worker Processes
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = 'sync'
worker_connections = 1000
max_requests = 1000
max_requests_jitter = 50
timeout = 30
keepalive = 2

# Logging
accesslog = '/home/juanbetancur/projects/deploy02/backend/logs/gunicorn_access.log'
errorlog = '/home/juanbetancur/projects/deploy02/backend/logs/gunicorn_error.log'
loglevel = 'info'
access_log_format = '%(h)s %(l)s %(u)s %(t)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s"'

# Process Naming
proc_name = 'gunicorn_deploy02'

# Server Mechanics
daemon = False  # Systemd will manage this
pidfile = '/tmp/gunicorn_deploy02.pid'
umask = 0
user = None
group = None
tmp_upload_dir = None

# SSL (for future use with Nginx SSL termination)
# keyfile = None
# certfile = None