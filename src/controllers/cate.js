import axios from "axios";
import dotenv from "dotenv";
import cateValidator from "../validations/cate";
import Category from "../models/Category";
dotenv.config();

const { DB_URL } = process.env;
console.log(DB_URL);

export const getAll = async (req, res) => {
  try {
    // const { data } = await axios.get(`${DB_URL}/cate`);
    const data = await Category.find();
    if (!data) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    return res.status(200).json({
      message: "Category successfully",
      category: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getDetail = async (req, res) => {
  try {
    // const { data } = await axios.get(`${DB_URL}/cate/${req.params.id}`);
    const data = await Category.findById(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    return res.status(200).json({
      message: "Category successfully",
      category: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { error } = cateValidator.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message || "Please re-check your data!",
      });
    }
    // const { data } = await axios.post(`${DB_URL}/cate/`, req.body);
    const data = await Category.create(req.body);
    if (!data) {
      return res.status(404).json({
        message: "Create Category not successful",
      });
    }
    return res.status(200).json({
      message: "Create Category successful",
      category: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { error } = cateValidator.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message || "Please re-check your data!",
      });
    }
    // const { data } = await axios.put(
    //   `${DB_URL}/cate/${req.params.id}`,
    //   req.body
    // );
    const data = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!data) {
      return res.status(404).json({
        message: "Update Category not successful",
      });
    }
    return res.status(200).json({
      message: "Update Category successful",
      category: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    // const { status } = await axios.delete(`${DB_URL}/cate/${req.params.id}`);
    const data = await Category.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Delete Category not successful",
      });
    }
    return res.status(200).json({
      message: "Delete Category successful",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
