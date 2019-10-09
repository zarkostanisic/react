<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductsController extends Controller
{
  public function index(){
      return response()->json(Product::all(), 200);
  }

  public function show(Product $product){
    return response()->json($product, 200);
  }

  public function store(Request $request){
    $this->validate($request, [
      'title' => 'required|unique:products|max:255',
      'description' => 'required',
      'price' => 'required|integer',
      'availability' => 'required|integer'
    ]);
    
    $product = Product::create($request->all());
    
    return response()->json($product, 201);
  }

  public function update(Request $request, Product $product){
    $product->update($request->all());
    
    return response()->json($product, 200);
  }

  public function destroy(Product $product){
    $product->delete();
    
    return response()->json(null, 204);
  }
}
