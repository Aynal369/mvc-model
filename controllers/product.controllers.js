const {
  getProductService,
  createProductService,
} = require("../services/product.services");

exports.getProduct = async (req, res, next) => {
  try {
    // const product = await Product.find({});
    // const product = await Product.find({$or: [{}]});
    // const product = await Product.find({status: {$ne: "out-of-stock"}});
    // const product = await Product.find({quantity: {$gt: 100}});
    // const product = await Product.find({quantity: {$gte: 100}});
    // const product = await Product.find({ name: {$in: ["", ""]}});
    // const product = await Product.find({}, 'name quantity');
    // const product = await Product.find({}, '-name -quantity');
    // const product = await Product.find({}).limit(1);
    // const product = await Product.find({}).short({quantity -1});
    // const product = await Product.find({}).select({name: 1});
    const products = await getProductService();
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    // const result  = await Product.create(req.body)

    const result = await createProductService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};
