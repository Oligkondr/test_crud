FROM php:8.2-fpm

ADD .docker/php-fpm/local.ini /usr/local/etc/php/conf.d/local.ini

# Copy composer.lock and composer.json
#COPY composer.lock composer.json /var/www/

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libzip-dev \
    zip \
    libsodium-dev \
    libxml2-dev \
    locales \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    postgresql postgresql-contrib \
    exiftool \
    mc

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
#RUN docker-php-ext-install mbstring exif pcntl
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql
RUN docker-php-ext-install pdo pdo_mysql
#RUN docker-php-ext-configure gd --with-gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ --with-png-dir=/usr/include/
#RUN docker-php-ext-install gd
RUN docker-php-ext-install zip

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# Copy existing application directory contents
#COPY . /var/www

# Copy existing application directory permissions
#COPY --chown=www:www . /var/www

# Change current user to www
USER www

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
