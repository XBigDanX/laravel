<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::create([
            'name' => 'iPhone 15 Pro',
            'price' => 1099.00,
            'description' => 'Apple\'s flagship with A17 Pro chip, 128GB storage, and titanium body.',
            'quantity' => 15
        ]);

        Product::create([
            'name' => 'Samsung Galaxy S24 Ultra',
            'price' => 1199.99,
            'description' => '6.8" AMOLED display, Snapdragon 8 Gen 3, 200MP camera.',
            'quantity' => 12
        ]);

        Product::create([
            'name' => 'Google Pixel 8',
            'price' => 699.00,
            'description' => 'Clean Android experience with Tensor G3 chip and AI-powered camera.',
            'quantity' => 18
        ]);

        Product::create([
            'name' => 'Nothing Phone (2)',
            'price' => 599.99,
            'description' => 'Unique transparent design with Glyph interface and clean Android skin.',
            'quantity' => 10
        ]);

        Product::create([
            'name' => 'AirPods Pro (2nd Gen)',
            'price' => 249.00,
            'description' => 'Apple\'s noise-cancelling earbuds with MagSafe charging case.',
            'quantity' => 30
        ]);

        Product::create([
            'name' => 'Sony WH-1000XM5 Headphones',
            'price' => 399.00,
            'description' => 'Industry-leading noise cancellation, long battery life, and crisp audio.',
            'quantity' => 20
        ]);

        Product::create([
            'name' => 'Anker MagGo Wireless Charger',
            'price' => 39.99,
            'description' => '15W magnetic wireless charger compatible with MagSafe devices.',
            'quantity' => 25
        ]);

        Product::create([
            'name' => 'Apple Watch Series 9',
            'price' => 399.00,
            'description' => 'GPS + Cellular, aluminum case, with heart rate and blood oxygen tracking.',
            'quantity' => 14
        ]);

        Product::create([
            'name' => 'Samsung Galaxy Buds2 Pro',
            'price' => 229.00,
            'description' => 'Hi-Fi sound with ANC and seamless pairing with Samsung devices.',
            'quantity' => 22
        ]);

        Product::create([
            'name' => 'iPad Air (M2, 11")',
            'price' => 799.00,
            'description' => 'Powerful and lightweight tablet for productivity and creativity.',
            'quantity' => 9
        ]);
    }
}
