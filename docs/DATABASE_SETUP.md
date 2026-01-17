## Database Configuration

## MySQL Server Details
Host: localhost
Port: 3306
Database: users_app
User: django_user

## Service Management
# Start MySQL
sudo systemctl start mysql

# Stop MySQL
sudo systemctl stop mysql

# Restart MySQL
sudo systemctl restart mysql

# Check status
sudo systemctl status mysql



## Connection Test
mysql -u django_user -p users_app

 ## Troubleshooting

### Recreate User (Idempotent)
DROP USER IF EXISTS 'django_user'@'localhost';
CREATE USER 'django_user'@'localhost' IDENTIFIED BY 'DjangoPass2025!';
GRANT ALL PRIVILEGES ON users_app.* TO 'django_user'@'localhost';
FLUSH PRIVILEGES;



### Verify User Exists
SELECT User, Host FROM mysql.user WHERE User = 'django_user';



### Check User Privileges
SHOW GRANTS FOR 'django_user'@'localhost';
