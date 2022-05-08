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
The next step is to setup the database tables. Run the following command from the application root:

`php artisan migrate`

### Step 4: Sign up to Market Data Api and Setup
To perform currency conversions, we use the website API Layer. We specifically use Exchanges Rates Data API https://apilayer.com/marketplace/description/exchangerates_data-api. You may sign up for free for this service. Simply copy your api key from your account settings and place it into the .env

Add the following configuration:

`DATA_EXCHANGE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <- Place your key here`

### Step 5: Start Horizon
To run jobs in the application, the horizon application will need to be started. If you have supervisord setup, you may use this. The horizon queue will need to be run via Redis, please ensure that you have this setup. https://laravel.com/docs/9.x/redis

To start the horizon queue, run the following command:

`php artisan horizon`

### Step 6: Start Web sockets
To execute events, we use the laravel web sockets by beyondco.  To start the web sockets service, simply run the following command:

`php artisan websockets:serve`

### Configuration file



 
### Web Resources
Laravel 9 - https://laravel.com/docs/9.x
Vue 3 - https://vuejs.org/guide/introduction.html
Inertia JS - https://inertiajs.com/
Composer - https://getcomposer.org
Node JS - https://nodejs.org/en
PHP - https://www.php.net
Apache Web Server - https://www.apache.org/
MYSQL - https://www.mysql.com/
Beyondco web sockets - https://beyondco.de/docs/laravel-websockets/getting-started/introduction
Laravel Horizon - https://laravel.com/docs/9.x/horizon
Laravel Redis - https://laravel.com/docs/9.x/redis
API Layer Market Data - https://apilayer.com/marketplace/description/exchangerates_data-api


