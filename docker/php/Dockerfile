FROM php:8.2-cli

WORKDIR /var/www/html

# Instala dependências
RUN apt-get update && apt-get install -y \
    zip unzip curl libzip-dev && \
    docker-php-ext-install zip

# Instala Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copia os arquivos (essa etapa será ignorada se usar volume)
COPY . .

# Instala dependências PHP (essa etapa falhava antes)
RUN composer install

EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
