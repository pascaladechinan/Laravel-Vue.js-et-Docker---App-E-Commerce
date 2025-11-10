FROM php:8.2-fpm

# Arguments pour composer (optionnel)
ARG user=www-data
ARG uid=1000

# Installs de base
RUN apt-get update && apt-get install -y \
    git unzip libpng-dev libonig-dev libxml2-dev zip curl libzip-dev libjpeg-dev libfreetype6-dev \
 && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Composer
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# Create working dir
WORKDIR /var/www/html

# Copy composer files first for better caching
COPY composer.json composer.lock ./

# Install composer dependencies (use --no-dev en prod)
RUN composer install --no-interaction --prefer-dist --optimize-autoloader --no-scripts

# Copy app
COPY . .
FROM php:8.2-fpm

# Arguments pour composer (optionnel)
ARG user=www-data
ARG uid=1000

# Installs de base
RUN apt-get update && apt-get install -y \
    git unzip libpng-dev libonig-dev libxml2-dev zip curl libzip-dev libjpeg-dev libfreetype6-dev \
 && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Composer
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# Create working dir
WORKDIR /var/www/html

# Copy composer files first for better caching
COPY composer.json composer.lock ./

# Install composer dependencies (use --no-dev en prod)
RUN composer install --no-interaction --prefer-dist --optimize-autoloader --no-scripts

# Copy app
COPY . .

# ✅ CORRECTION : Créer toute l'arborescence Laravel manquante
RUN mkdir -p \
    /var/www/html/storage/framework/sessions \
    /var/www/html/storage/framework/views \
    /var/www/html/storage/framework/cache \
    /var/www/html/storage/logs \
    /var/www/html/bootstrap/cache

# ✅ CORRECTION : Appliquer les permissions de manière sécurisée
RUN chown -R ${user}:${user} /var/www/html \
    && find /var/www/html/storage -type d -exec chmod 775 {} \; \
    && find /var/www/html/storage -type f -exec chmod 664 {} \; \
    && find /var/www/html/bootstrap/cache -type d -exec chmod 775 {} \; \
    && find /var/www/html/bootstrap/cache -type f -exec chmod 664 {} \;

EXPOSE 9000
CMD ["php-fpm"]
# Set permissions
RUN chown -R ${user}:${user} /var/www/html \
 && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]
