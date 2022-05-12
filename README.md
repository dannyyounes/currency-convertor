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
To perform currency conversions, we use the website API Layer. We use either Exchanges Rates Data API or Fixer API. You may sign up for free for this service. Simply copy your api key from your account settings and place it into the .env. Currently, you have two choices either the Exchange rates data api (ExchangeRatesDataApi) or Fixer api (FixerApi). Assign to CURRENCy_DATA_APP the one which you are using.

Add the following configuration:

```
#CURRENCY_DATA_APP=ExchangeRatesDataApi
CURRENCY_DATA_APP=FixerApi
DATA_EXCHANGE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx <- Place your key here
```


### Step 5: Start Horizon
To run jobs in the application, the horizon application will need to be started. If you have supervisord setup, you may use this. The horizon queue will need to be run via Redis, please ensure that you have this setup. https://laravel.com/docs/9.x/redis

To start the horizon queue, run the following command:

`php artisan horizon`

### Step 6: Start Web sockets
To execute events, we use the laravel web sockets by beyondco.  To start the web sockets service, simply run the following command:

`php artisan websockets:serve`

### Step 7: Running Scheduled Jobs
To enable scheduled jobs to run every 15 minutes, we'll need to setup the cron jobs on the server to run every minute. To do this simply edit the crontab file as the user that the webserver is running as and add the following line to the file.

Open the crontab file

`crontab -e`

Add the following line. Alter the project path to be your project path.

`* * * * * cd /your-project-path && php artisan schedule:run >> /dev/null 2>&1`

Scheduled jobs can be run manually by running the following command:

`php artisan schedule:run`

### Configuration file

There are two configuration options in the .env file that have to be altered. Most importantly the broadcast driver must be set to pusher so that events can be fired and received. Queue connection set it to redis so that background jobs can be run

```
BROADCAST_DRIVER=pusher
QUEUE_CONNECTION=redis
```

Pusher credentials must be set also. You may place random information for these config settings

```
PUSHER_APP_ID=five9 
PUSHER_APP_KEY=key 
PUSHER_APP_SECRET=secret 
PUSHER_APP_CLUSTER=mt1
```

### Web Resources
``` 
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
API Layer Market Data
 - https://apilayer.com/marketplace/description/exchangerates_data-api
 - https://apilayer.com/marketplace/description/fixer-api
```

### Todos, Issues
The website can always be updated and enhanced. The following items can be enhanced on the system:

1. Implementing laravel dusk test, was receiving the following error: ```Facebook\WebDriver\Exception\UnknownErrorException : unknown error: net::ERR_ADDRESS_UNREACHABLE
  (Session info: headless chrome=101.0.4951.54)```
