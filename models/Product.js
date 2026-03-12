const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Product Name is required"],
      trim: true,
    },
    productCode: {
      type: String,
      required: [true, "Product Code is required"],
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["Electronics", "Clothing", "Food", "Furniture", "Other"],
      trim: true,
    },
    supplierName: {
      type: String,
      required: [true, "Supplier Name is required"],
      trim: true,
    },
    quantityInStock: {
      type: Number,
      required: true,
      min: [0, "Quantity in Stock must be a non-negative number"],
      default: 0,
    },
    reorderLevel: {
      type: Number,
      required: true,
      min: [1, "Reorder Level must be greater than 0"],
    },
    unitPrice: {
      type: Number,
      required: true,
      min: [0, "Unit Price must be a positive value"],
    },
    manufactureDate: {
      type: Date,
    },
    productType: {
      type: String,
      enum: ["Perishable", "Non-Perishable"],
      default: "Non-Perishable",
    },
    status: {
      type: String,
      enum: ["Available", "Out of Stock"],
      default: "Available",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
