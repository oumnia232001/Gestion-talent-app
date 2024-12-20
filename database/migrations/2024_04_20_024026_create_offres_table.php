<?php

use App\Models\Recruiter;
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
        Schema::create('offres', function (Blueprint $table) {
            $table->id();
            $table->integer('experience_years');
            $table->string('knowledge');
            $table->string('contrat');
            $table->string('experience_required', 250);
            $table->string('formation', 45);
            $table->string('languages', 150);
            $table->string('missions', 350);
            $table->integer('number_to_recruit');
            $table->integer('salary');
            $table->string('Status', 100);
            $table->softDeletes();
            $table->timestamps();
            $table->foreignIdFor(Recruiter::class)->constrained()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offres');
    }
};
