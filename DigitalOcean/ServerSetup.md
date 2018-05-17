# FluxTeck.com Server Setup

This documentation outlines the setup used with DigitalOcean.

## DigitalOcean

After creating an account with DigitalOcean, I created a Droplet named
ubuntu-512mb-sfo2-01 with the following configuration:

* 512 /1 CPU
* 20 GB SSD Disk
* 1000 GB transfer
* San Francisco 02
* Ubuntu 16.04.3 x64
* Public network
  + IP Address:
    - ipv4: 
  + Gateway: 
  + Netmask: 

To setup my server, I followed this article:
https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04.

### User Setup

I created a user named un_asdf with pwd_fdsa

**Add User**

```sh
adduser un_asdf
```

**Give Sudo Access**

```sh
gpasswd -a un_asdf sudo
```

**Activate Firewall**

```sh
sudo ufw enable
```

To check the current list of applications:

```sh
sudo ufw app list
```

To allow an application:

For example, OpenSSH:

```sh
sudo ufw allow OpenSSH
```

### LEMP Installation

To install LEMP, I followed this article:
https://www.digitalocean.com/community/tutorials/how-to-install-linux-nginx-mysql-php-lemp-stack-in-ubuntu-16-04

**Updating APT**

```sh
sudo apt-get update
```

**Installing NGiNX**

```sh
sudo apt-get install nginx
```

In the preinstall message, it was suggested to run the following command to
automatically uninstall no longer required packages.

```sh
sudo apt autoremove
```

Also in the preinstall message were some suggested packages: libgd-tools,
fcgiwrap, nginx-doc, and ssl-cert.

Open the Firewall for NGiNX:

```sh
sudo ufw allow "Nginx Full"
```

**Installing MySQL**

```sh
sudo apt-get install mysql-server
```

In the preinstall message were some suggested packages: libdata-dump-perl,
libipc-sharedcache-perl, libwww-perl, mailx, and tinyca.

During installation, I was immediately taken to a screen to configure the
password for the MySQL root user: pwd_fdsa

**Securing the MySQL Installation**

Run the following script.

```sh
mysql_secure_installation
```

**Installing PHP**

```sh
sudo apt-get install php-fpm php-mysql
```

In the preinstall message was one suggested package: php-pear.

**Configuring PHP**

Open the configuration file with:

```sh
sudo nano /etc/php/7.0/fpm/php.ini
```

and uncomment and change `cgi.fix_pathinfo` to `0`.

Then restart PHP fpm:

```sh
sudo systemctl restart php7.0-fpm
```

**Configure NGiNX to use PHP**

Open the default configuration.

```sh
sudo nano /etc/nginx/sites-available/default
```

and make the following changes:

1) Add `index.php` to the beginning of the `index` list.
2) Change `server_name` to `fluxteck.com`.
3) Uncomment the `location` block matching `\.php$`. Only uncomment one
   `fastcgi_pass`; the one for php7.0-fpm since that is what we installed.
4) Uncomment the `location` block matcing `/\.ht`.

Save changes.

Test configuration.

```sh
sudo nginx -t
```

Reload NGiNX.

```sh
sudo systemctl reload nginx
```

### Setting Up NGiNX Server Blocks

This is effectively the same thing as virtual hosts in Apache.  Details can be
found at https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04.

sudo mkdir -p /var/www/fluxteck.com/html
sudo chown -R $USER:$USER /var/www/fluxteck.com/html
nano /var/www/fluxteck.com/html/index.html

sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/fluxteck.com
sudo nano /etc/nginx/sites-available/fluxteck.com
sudo ln -s /etc/nginx/sites-available/fluxteck.com /etc/nginx/sites-enabled/

sudo nano /etc/nginx/nginx.conf

```
http {
    . . .

    server_names_hash_bucket_size 64;

    . . .
}
```

sudo nginx -t
sudo systemctl restart nginx

### Setting Up Let's Encrypt with Nginx

I used the following tutorial
https://www.digitalocean.com/community/tutorials/how-to-set-up-let-s-encrypt-with-nginx-server-blocks-on-ubuntu-16-04.

**Installing Certbot**

Add the Certbot APT repo to get the latest version.

```sh
sudo add-apt-repository ppa:certbot/certbot
```

```sh
sudo apt-get update
```

```sh
sudo apt-get install python-certbot-nginx
```

In the preinstall message were some suggested packages: python-certbot-apache,
python-certbot-doc, python-doc, python-tk, python-acme-doc,
python-certbot-nginx-doc, python-configobj-doc, python-cryptography-doc,
python-cryptography-vectors, python-enum34-doc, python-funcsigs-doc,
python-mock-doc, python-openssl-doc, python-openssl-dbg, python-psutil-doc,
doc-base, python-socks, python-setuptools-doc, python-ntlm, python2.7-doc,
binutils, and binfmt-support.

**Obtaining an SSL Certificate**

```sh
sudo certbot --nginx -d fluxteck.com -d www.fluxteck.com
```

If the above command fails with an error like "Client with the currently
selected authenticator does not support any combination of challenges that
will satisfy the CA", then try the following.

First, update NGiNX VHost config for the domains to be challenged by adding the
following snippet at an appropriate location:

```
        # Used by certbot and Let's Encrypt for domain ownership validation.
        location ^~ /.well-known {
                try_files $uri $uri/ =404;
        }
```

```sh
sudo nginx -t
sudo systemctl restart nginx
```

Now run the following:

```sh
sudo certbot --authenticator webroot --webroot-path /var/www/fluxteck.com/html --installer nginx -d fluxteck.com -d www.fluxteck.com
```

See the following for an explaination.
https://community.letsencrypt.org/t/solution-client-with-the-currently-selected-authenticator-does-not-support-any-combination-of-challenges-that-will-satisfy-the-ca/49983

If you get 403 errors, then check the URL it is trying to use.  When I did this,
there were requests similar to http://my.domain/.well-known/acme-challenge/j2h34h234624k1jh1jh3k1231kh2g41h2g3kgf123.
If a different request is being made, then the NGiNX snippet above needs to be
adjusted accordingly.

**Verifying Certbot Auto-Renewal**

```sh
sudo certbot renew --dry-run
```

It should run without errors.  If you are seeing errors about 403 or similiar,
then it is likely that the NGiNX is not configured to handle the requests being
made during the challenge.

### Wordpress Installation

See https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-lemp-on-ubuntu-16-04.

mysql -u root -p

mysql> CREATE DATABASE fluxteck_wp DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
mysql> GRANT ALL ON fluxteck_wp.* TO 'fluxteck_wp'@'localhost' IDENTIFIED BY 'asdfasdf';
mysql> FLUSH PRIVILEGES;
mysql> EXIT;

sudo nano /etc/nginx/sites-available/fluxteck.com

Add the following to the server block:

    location = /favicon.ico {
        access_log off;
        log_not_found off;
    }

    location = /robots.txt {
        access_log off;
        allow all;
        log_not_found off;
    }

    # Yoast SEO Sitemaps
    location ~ ([^/]*)sitemap(.*).x(m|s)l$ {
        ## this rewrites sitemap.xml to /sitemap_index.xml
        rewrite ^/sitemap.xml$ /sitemap_index.xml permanent;

        ## this makes the XML sitemaps work
        rewrite ^/([a-z]+)?-?sitemap.xsl$ /index.php?xsl=$1 last;
        rewrite ^/sitemap_index.xml$ /index.php?sitemap=1 last;
        rewrite ^/([^/]+?)-sitemap([0-9]+)?.xml$ /index.php?sitemap=$1&sitemap_n=$2 last;

        ## The following lines are optional for the premium extensions

        ## News SEO
        rewrite ^/news-sitemap.xml$ /index.php?sitemap=wpseo_news last;

        ## Local SEO
        rewrite ^/locations.kml$ /index.php?sitemap=wpseo_local_kml last;
        rewrite ^/geo-sitemap.xml$ /index.php?sitemap=wpseo_local last;

        ## Video SEO
        rewrite ^/video-sitemap.xsl$ /index.php?xsl=video last;
    }

    # Used by certbot and Let's Encrypt for domain ownership validation.
    location ^~ /.well-known {
        try_files $uri $uri/ =404;
    }

    location ~* \.(css|eot|gif|ico|jpeg|jpg|js|png|svg|ttf|woff|woff2)$ {
        expires max;
        log_not_found off;
    }

Update the try_files in the / location to be:

        try_files $uri $uri/ /index.php$is_args$args;

sudo nginx -t
sudo systemctl reload nginx


sudo apt-get update
sudo apt-get install php-curl php-gd php-mbstring php-mcrypt php-xml php-xmlrpc

In the preinstall message were some suggested packages: libmcrypt-dev and
mcrypt.

sudo systemctl restart php7.0-fpm

cd /tmp
curl -O https://wordpress.org/latest.tar.gz
tar xzvf latest.tar.gz
cp /tmp/wordpress/wp-config-sample.php /tmp/wordpress/wp-config.php
mkdir /tmp/wordpress/wp-content/upgrade
sudo cp -a /tmp/wordpress/. /var/www/fluxteck.com/html

sudo chown -R un_asdf:www-data /var/www/fluxteck.com/html

sudo find /var/www/fluxteck.com/html -type d -exec chmod g+s {} \;
sudo chmod g+w /var/www/fluxteck.com/html/wp-content
sudo chmod -R g+w /var/www/fluxteck.com/html/wp-content/themes
sudo chmod -R g+w /var/www/fluxteck.com/html/wp-content/plugins

curl -s https://api.wordpress.org/secret-key/1.1/salt/

nano /var/www/fluxteck.com/html/wp-config.php

Update auth keys and auth salts.

Update database configs.

Add:

define('FS_METHOD', 'direct');

Configure WP via Web UI (ie, go to fluxteck.com) (https://www.fluxteck.com/wp-admin/install.php).

### Node.js Installation

See https://github.com/nodesource/distributions for details.

For Node.js 8.x:

```sh
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install build-essential
```

After install

```sh
node --version
npm --version
```

to confirm it installed correctly.

### Preparing to Run Node Applications

**PM2**

```sh
sudo npm install -g pm2
```

```sh
pm2 startup systemd
```

### Setting Up a Self-Signed SSL Certificate for NGiNX

See https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-16-04
for details

**Create the SSL Certificate**

```sh
sudo openssl req -x509 -nodes -days 3660 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-domain.name-self-signed.key -out /etc/ssl/certs/nginx-domain.name-self-signed.crt
# Enter US for Country Name.
# Enter Colorado for State Name.
# Enter Fort Collins for Locality Name.
# Enter FluxTeck LLC for Organization Name.
# Enter Software for Organizational Unit Name.
# Enter domain.name for Common Name.
# Skip Email Address.
```

```sh
sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
```

```sh
sudo vi /etc/nginx/snippets/ssl-params.conf
```

```
ssl_session_cache shared:le_nginx_SSL:1m;
ssl_session_timeout 1440m;

ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_prefer_server_ciphers on;

#ssl_ciphers "ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:ECDHE-ECDSA-DES-CBC3-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:DES-CBC3-SHA:!DSS";
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
ssl_dhparam /etc/ssl/certs/dhparam.pem;
```

```sh
sudo vi /etc/nginx/sites-available/domain.name
```

```
##
# domain.name Server Configuration
#
server {
        listen 80;
        listen [::]:80;

        server_name domain.name;

        return 302 https://$server_name$request_uri;
}

server {
        listen 443 ssl http2;
        listen [::]:443 ssl http2;

        server_name domain.name;

        ssl_certificate /etc/ssl/certs/nginx-domain.name-self-signed.crt;
        ssl_certificate_key /etc/ssl/private/nginx-domain.name-self-signed.key;
        include snippets/ssl-params.conf;

        root /var/www/domain.name/html;

        index index.html;

        location / {
                proxy_pass http://localhost:8080;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
#                try_files $uri $uri/ =404;
        }

        location = /favicon.ico {
                access_log off;
                log_not_found off;
        }

        location = /robots.txt {
                access_log off;
                allow all;
                log_not_found off;
        }

        location ~* \.(css|eot|gif|ico|jpeg|jpg|js|png|svg|ttf|woff|woff2)$ {
                expires max;
                log_not_found off;
        }

}
```

Test that SSL is working.  If it is, then modify the file above and change the
redirect from a 302 to a 301.
