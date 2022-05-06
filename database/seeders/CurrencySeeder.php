<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Currency::truncate();

        $csvFile = fopen(base_path("database/data/currencies.csv"), "r");

        $firstline = true;
        while (($data = fgetcsv($csvFile, 2000, ",")) !== FALSE) {

            if (!$firstline) {
                Currency::create([
                    "code" => $data['0'],
                    "currency_name" => @iconv('UTF-8','UTF-8//IGNORE',$data['1'])
                ]);
            }
            $firstline = false;
        }

        fclose($csvFile);
    }
}
