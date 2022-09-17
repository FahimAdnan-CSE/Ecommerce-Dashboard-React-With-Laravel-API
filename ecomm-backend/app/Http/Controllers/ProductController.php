<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Contracts\Cache\Store;

class ProductController extends Controller
{
    //
    function addProduct(Request $req)
    {
        $product = new Product();
        $product->name = $req->input('name');
        //dd( $req->file('file'));
        if (!empty($req->file('file'))) {
            //$uploaded_files = $req->file->store('public/uploads/');
            $product->file_path = $req->file('file')->store('products');
        }
        $product->description = $req->input('description');
        $product->price = $req->input('price');
        $product->save();
        return $product;
    }

    //go to config  and filesystem
    // 'links' => [
    //     public_path('products') => storage_path('app/products'),
    // ],
    // php artisan storage:link

    function list()
    {
        return Product::all();
    }

    function delete(Request $req)
    {
        $delete = Product::where('id', $req->input('id'))->delete();
        return $req;
        if ($delete) {
            return ["result" => "Product has been delete"];
        } else {
            return ["result" => "Operation Failed"];
        }
    }

    function getProduct($id)
    {

        $result = Product::find($id);

        return $result ;
    }

    function updateProduct(Request $req)
    {
        if (!empty($req->file('file'))) {
            //$uploaded_files = $req->file->store('public/uploads/');
            $file_path = $req->file('file')->store('products');
        }
        else
        {
            $file_path=NULL;
        }
        $data=[
          'name'=>$req->input('name'),
          'file_path'=>$file_path,
          'description'=>$req->input('price'),
          'price'=>$req->input('description')
        ];
        $result = Product::where('id',$req->input('id'))->update($data);

        return $result;

    }

    function searchProduct(Request $req)
    {
        $key=$req->input('key');
        // var_dump($key);
        // exit;
        $result = Product::where('name','Like',"%$key%")->get();

        return   $result;
    }
}
