# Currency Convertor

The currency convertor application was built using Laravel 9, Vue 3, Inertia JS and Tailwind. Background jobs are run using redis and laravel horizon. Events are run using websockets. Go to the following website for more information on web sockets: https://beyondco.de/docs/laravel-websockets/getting-started/introduction

The application can run on a server environment that runs PHP, Apache and MYSQL. The following versions were run on my local environment.:

* PHP 8
* Apache 2.4
* MYSQL 8 

### Step 1: Clone the repository
The first step is to clonme the repository to your local environment by running the following command:

`git clone https://github.com/dannyyounes/currency-convertor.git`

The following link provides documentation as to how to clone a repository on github https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

### Step 2: Install third party plugins
There are plugins to be installed via composer and npm. Please ensure that you have composer 2 and node js installed for your environment. If you don't have composer installed, please view the following instructions, https://getcomposer.org/download/. To setup node js, please view the following instructions, https://nodejs.org/en/download/

To install the composer plugins, run the following command:

`composer install`

To install npm plugins, run the following command:

`npm install`

### Step 3: Setup Database
The next step is to setup the database tables. Run the following command:

`php artisan migrate`

### Step 4: Sign up to Market Data Api and Setup


### Step 5: Start Horizon

### Step 6: Start Web sockets




 
