<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Products>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = Product::class;
    public function definition(): array
    {
        return [
            'uid' => $this->faker->uuid,
            'app_id' => $this->faker->randomNumber(),
            'group_id' => $this->faker->randomNumber(),
            'client_code' => $this->faker->ean13,
            'barcode' => $this->faker->ean13,
            'SKU' => $this->faker->unique()->ean13,
            'name' => $this->faker->word,
            'sell_price' => $this->faker->randomNumber(),
        ];
    }
}
