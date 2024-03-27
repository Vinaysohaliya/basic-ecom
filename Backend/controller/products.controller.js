import products from '../products.json' assert { type: "json" };


const fetchProducts = (req, res) => {
    try {
        res.json({ products });
    } catch (err) {
        console.error("Error fetching products:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default fetchProducts;
