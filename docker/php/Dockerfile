FROM php:8.2-cli

WORKDIR /var/www/html

# Dependências
RUN apt-get update && apt-get install -y \
    sqlite3 \
    unzip \
    curl \
    git \
    libsqlite3-dev \
    libonig-dev \
    libzip-dev \
    zip \
    && docker-php-ext-install pdo pdo_sqlite

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Instala Laravel se não tiver instalado
RUN composer global require laravel/installer

# PATH do Laravel
ENV PATH="/root/.composer/vendor/bin:${PATH}"

EXPOSE 8000
