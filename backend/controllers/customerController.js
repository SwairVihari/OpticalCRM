const { addListener } = require("../Models/customerModel");
const Customer = require("../Models/customerModel")
const Order = require("../Models/orderModel")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncError = require("../middleware/catchAsyncError");
const { compile } = require("ejs");
const ApiFeatures = require("../utils/apifeatures");


exports.createCustomer = catchAsyncError(async (req, res, next) => {
    req.body.client_id = req.client.id;
    // console.log(req.body)
    const customer = await Customer.create(req.body);
    console.log(customer);
    res.status(200).json({
        success: true,
        customer
    })
});

exports.getCustomer = catchAsyncError(async (req, res, next) => {

    // console.log(req.params.id);
    // console.log(req.customer.id);

    const customer = await Customer.findById(req.params.id);

    console.log(customer);

    res.status(201).json({
        success: true,
        customer
    })
})
exports.getAllCustomers = catchAsyncError(async (req, res) => {
    const resultPerPage = 2
    // const customerCount = await Customer.countDocuments();
    const apiFeatures = new ApiFeatures(Customer.find(), req.query).search()

    let coustomers = await apiFeatures.query
    // console.log(coustomers)
    let filteredCoustmersCount = coustomers.length
    const customerCount = coustomers.length < 2 ? 2 : coustomers.length
    apiFeatures.pagination(resultPerPage)

    coustomers = await apiFeatures.query.clone();
    res.status(200).json({
        success: true,
        coustomers,
        customerCount,
        resultPerPage,
        filteredCoustmersCount
    })
});


exports.updateCustomer = catchAsyncError(async (req, res, next) => {
    let customer = await Customer.findById(req.params.id);
    if (!customer) {
        return next(new ErrorHandler("Customer not found", 404));
    }
    customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        customer
    })
});
exports.deleteCustomer = catchAsyncError(async (req, res, next) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        return next(new ErrorHandler("Customer not found", 404));
    }
    await customer.remove()
    res.status(200).json({
        success: true,
        message: "customer deleted"
    })
});
exports.addOrder = catchAsyncError(async (req, res, next) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
        return next(new ErrorHandler("Customer not found", 404));

    }
    const order = await Order.create(req.body);

    // console.log(customer)
    // const newOrder = req.body;
    // console.log(req.body);
    await Customer.findOneAndUpdate({ _id: customer._id }, { $push: { orders: { Order: order._id } } })
    // console.log(customer);
    res.status(200).json({
        success: true,
        order,
        message: "order added"
    })
})


exports.getOrder = catchAsyncError(async (req, res, next) => {

    const id = req.body.id

    const order = await Order.findById(id);

    res.status(200).json({
        success: true,
        order
    })

})