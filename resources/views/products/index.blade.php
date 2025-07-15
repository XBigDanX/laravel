<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Our Products</title>
</head>
<body>

    <h1>Our Products</h1>

    @foreach($products as $product)
        <div>
            <h2>{{ $product->name }} - ${{ number_format($product->price, 2) }}</h2>
            <p>{{ $product->description }}</p>
            <p><strong>In Stock:</strong> {{ $product->quantity }}</p>
        </div>
    @endforeach

</body>
</html>
