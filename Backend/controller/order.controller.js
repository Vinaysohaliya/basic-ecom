const  placeOrder = (req, res) => {
    try {
        const { firstName, lastName, address, cartItems } = req.body;

        if (!firstName || !lastName || !address || !cartItems || cartItems.length === 0) {
            return res.status(400).json({ message: 'Incomplete order details' });
        }

        console.log('Order Placed:');
        console.log('Name:', firstName, lastName);
        console.log('Address:', address);
        console.log('Cart:', cartItems);

        res.json({ message: 'Order placed successfully' });
    } catch (err) {
        console.error("Error placing order:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default placeOrder;
