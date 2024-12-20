<?php
use App\Models\Candidat;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('phone')->default('0616494502')->unique();
            $table->string('address')->default('Aouama')->unique();
            $table->dateTime('date_of_birth')->default(now());
            $table->dateTime('last_login_date')->default(now());
            $table->enum('gender', ['m', 'f'])->default('m');
            $table->string('last_position_held', 45)->default('default_last_position_held');
            $table->string('faculty_name', 45)->default('default_faculty_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('phone');
            $table->dropColumn('address');
            $table->dropColumn('date_of_birth');
            $table->dropColumn('last_login_date');
            $table->dropColumn('gender');
            $table->dropColumn('last_position_held');
            $table->dropColumn('faculty_name');
          
        });
    }
};
