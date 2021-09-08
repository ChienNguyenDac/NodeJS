import Product from '../model/product.model.js'

var productController = {}

productController.index = async function(req, res){
    var products = await Product.find();
    var productPerPage = 8;//display 8 product per page
    var pageNumber = Math.floor(products.length/productPerPage) + 1;
    var page = parseInt(req.query.page) || 1;
    //display product each page
    var start = (page-1)*productPerPage;
    var end = page*productPerPage;
    //display pagination at bottom
    var paginate = {};
    paginate.currentPage = page;
    paginate.startPage = page-1;
    paginate.endPage = page+1;
    if(page == 1){
        paginate.startPage = 1;
        paginate.endPage = 3;
    }
    else if(page == pageNumber){
        paginate.startPage = pageNumber-2;
        paginate.endPage = pageNumber;
    }
    paginate.pageNumber = pageNumber;
    res.render("products/index",{
        products: products.slice(start, end),
        paginate: paginate
    })
}

export default productController