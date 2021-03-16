<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
   /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $csvFile = base_path() . '\database\seeds\csv\roles.csv';
        //read file csv

        $data = csv_to_array($csvFile, ';');
        // Uncomment the below to run the seeder

        DB::table('rol')->insert($data);
    }
}
