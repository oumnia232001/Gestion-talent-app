<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use App\Models\Admin;
use App\Models\Recruiter;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();

        User::factory()->create([
            'name' => 'BenImran',
            'email' => 'oumniabenimran8@gmail.com',
            'password' => bcrypt('123456789')
              ]);

              Admin::factory()->create([
                'firstname' => 'Admin',
                'lastname' => 'Admin',
                'date_of_birth' => fake()->date(),
                'address' => fake()->address(),
               
                'phone' => substr(fake()->phoneNumber(), 10),
                'email' => 'admin@admin.admin',
                'password' => bcrypt('123456789')
                  ]);
                
                      Recruiter::factory()->create([
                        'firstname' => 'Recruiter',
                        'lastname' => 'Recruiter',
                        'date_of_birth' => fake()->date(),
                        
                        'address' => fake()->address(),
                        'phone' => substr(fake()->phoneNumber(), 10),
                        'email' => 'Recruiter@CRecruiter.Recruiter',
                        'password' => bcrypt('123456789')
                          ]);
    }
}
